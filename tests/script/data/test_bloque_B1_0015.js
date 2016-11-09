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

//  Id pregunta: 17 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de planificaci&oacute;n de la capacidad?:";
 choices[0]= new Array();
 choices[0][0] = "Reglas basadas en el conocimiento";
 choices[0][1] = "M&eacute;todos anal&iacute;ticos";
 choices[0][2] = "Benchmark";
 choices[0][3] = "Simulaci&oacute;n";
 answers[0] = choices[0][0];
 units[0] = "25";
 comments[0] = "Id Pregunta: 17. metodolog&iacute;a de planificaci&oacute;n de sistemas";


//  Id pregunta: 32 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes frases identificar&iacute;a a un buen directivo?:";
 choices[1]= new Array();
 choices[1][0] = "Es capaz de controlarlo todo de tal forma que la organizaci&oacute;n no puede pasar ni un d&iacute;a sin &eacute;l";
 choices[1][1] = "No intenta controlarlo todo, e intenta ser uno m&aacute;s en la cadena, la organizaci&oacute;n podr&iacute;a funcionar sin &eacute;l si se ausentara";
 choices[1][2] = "Divide su tiempo entre la operativa diaria y los proyectos de innovaci&oacute;n. Delega gran parte de los trabajos rutinarios, los que son m&aacute;s aburridos y tediosos para no desperdiciar su iniciativa";
 choices[1][3] = "Ha organizado su trabajo de tal forma que puede atender otros temas que no son la operativa diaria. La organizaci&oacute;n podr&iacute;a funcionar un tiempo sin &eacute;l, pero necesita de su capacidad de innovaci&oacute;n";
 answers[1] = choices[1][3];
 units[1] = "25";
 comments[1] = "Id Pregunta: 32. ";


//  Id pregunta: 59 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Existe en Espa&ntilde;a alg&uacute;n centro operativo para realizar Pruebas de Conformidad de acuerdo con el plan CTS de la Uni&oacute;n Europea?:";
 choices[2]= new Array();
 choices[2][0] = "S&iacute;, ya existen varios en funcionamiento en Espa&ntilde;a";
 choices[2][1] = "No, por no haberse implantado este plan en Espa&ntilde;a";
 choices[2][2] = "No, s&oacute;lo existe un centro experimental creado en Bruselas desde 1993";
 choices[2][3] = "No, el plan CTS no se ha puesto todav&iacute;a en pr&aacute;ctica";
 answers[2] = choices[2][0];
 units[2] = "42";
 comments[2] = "Id Pregunta: 59. ";


//  Id pregunta: 76 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; organizaci&oacute;n se encarga de fijar los est&aacute;ndares federales de trantamiento de informaci&oacute;n que las agencias gubernamentales USA deben seguir en la contrataci&oacute;n de software y hardware?:";
 choices[3]= new Array();
 choices[3][0] = "ANSI";
 choices[3][1] = "IEEE";
 choices[3][2] = "NIST";
 choices[3][3] = "GOSIP";
 answers[3] = choices[3][2];
 units[3] = "42";
 comments[3] = "Id Pregunta: 76. ";


//  Id pregunta: 85 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; significa la ley de Pareto del 80 / 20?:";
 choices[4]= new Array();
 choices[4][0] = "Con el 20 % del esfuerzo se resuelven el 80 % de los problemas";
 choices[4][1] = "El 80 % de los problemas son originados por el 20 % de la plantilla";
 choices[4][2] = "Con el 80 % del esfuerzo se resuelve el 20 % de los problemas, los m&aacute;s graves";
 choices[4][3] = "El 20 % de los problemas se resuelven autom&aacute;ticamente resolviendo primero el 80 % de ellos";
 answers[4] = choices[4][0];
 units[4] = "25";
 comments[4] = "Id Pregunta: 85. ";


//  Id pregunta: 118 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[5]= new Array();
 choices[5][0] = "Asignar un peso a cada alternativa";
 choices[5][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[5][2] = "Ordenar las alternativas";
 choices[5][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[5] = choices[5][3];
 units[5] = "34";
 comments[5] = "Id Pregunta: 118. NULL";


//  Id pregunta: 136 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El conjunto de t&eacute;cnicas y procedimientos que garantizan la disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad, son propias de:";
 choices[6]= new Array();
 choices[6][0] = "Una auditor&iacute;a inform&aacute;tica";
 choices[6][1] = "Un plan de contingencia";
 choices[6][2] = "La seguridad inform&aacute;tica";
 choices[6][3] = "Una planificaci&oacute;n estrat&eacute;gica";
 answers[6] = choices[6][2];
 units[6] = "31,32,33";
 comments[6] = "Id Pregunta: 136. ";


//  Id pregunta: 166 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El T&iacute;tulo V de la LOPD trata sobre:";
 choices[7]= new Array();
 choices[7][0] = "Principios de la protecci&oacute;n de datos";
 choices[7][1] = "Derechos de las personas";
 choices[7][2] = "Movimiento internacional de datos";
 choices[7][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[7] = choices[7][2];
 units[7] = "29";
 comments[7] = "Id Pregunta: 166. ";


//  Id pregunta: 184 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[8]= new Array();
 choices[8][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[8][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[8][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[8][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[8] = choices[8][1];
 units[8] = "27";
 comments[8] = "Id Pregunta: 184. ";


//  Id pregunta: 195 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  En el caso que se desee caracterizar la carga de un sistema inform&aacute;tico, qu&eacute; par&aacute;metro no se deber&iacute;a tener en cuenta:";
 choices[9]= new Array();
 choices[9][0] = "Tiempo de CPU por trabajo.";
 choices[9][1] = "Tiempo de reflexi&oacute;n del usuario.";
 choices[9][2] = "Memoria necesaria para ejecutar un trabajo.";
 choices[9][3] = "Troughput.";
 answers[9] = choices[9][3];
 units[9] = "35";
 comments[9] = "Id Pregunta: 195. NULL";


//  Id pregunta: 223 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la planificaci&oacute;n f&iacute;sica de un centro de proceso de datos es esencial tener en cuenta el aspecto siguiente:";
 choices[10]= new Array();
 choices[10][0] = "Debe asegurarse el suministro de energ&iacute;a el&eacute;ctrica haciendo un contrato con m&aacute;s de un suministrador o instalando generadores";
 choices[10][1] = "Debe estar situado junto a una v&iacute;a r&aacute;pida de comunicaci&oacute;n";
 choices[10][2] = "El edificio no debe tener m&aacute;s de cuatro plantas";
 choices[10][3] = "En la azotea deben instalarse paneles solares";
 answers[10] = choices[10][0];
 units[10] = "26";
 comments[10] = "Id Pregunta: 223. ";


//  Id pregunta: 265 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar cual de los siguientes instrumentos de informaci&oacute;n es un sistema de ayuda orientado a modelos:";
 choices[11]= new Array();
 choices[11][0] = "Informes de excepci&oacute;n";
 choices[11][1] = "Informes resumen";
 choices[11][2] = "Procesos prueba-error";
 choices[11][3] = "Consultas ad-hoc";
 answers[11] = choices[11][2];
 units[11] = "21";
 comments[11] = "Id Pregunta: 265. ";


//  Id pregunta: 294 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La definici&oacute;n de un entorno com&uacute;n para portabilidad de Aplicaciones fuente (Homogeneidad de Compiladores, APIs&hellip;) es una de las preocupaciones fundamentales del X/Open (actualmente Open Group) que se conoce como:";
 choices[12]= new Array();
 choices[12][0] = "XTI";
 choices[12][1] = "CAE";
 choices[12][2] = "APA";
 choices[12][3] = "GOSIP";
 answers[12] = choices[12][1];
 units[12] = "40";
 comments[12] = "Id Pregunta: 294. ";


//  Id pregunta: 299 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La duraci&oacute;n de la protecci&oacute;n otorgada por el Texto Refundido de la Ley de Propiedad Intelectual, aprobada por Real Decreto Legislativo 1/1996, a los programas de ordenador es de:";
 choices[13]= new Array();
 choices[13][0] = "50 a&ntilde;os";
 choices[13][1] = "30 a&ntilde;os";
 choices[13][2] = "70 a&ntilde;os desde el fallecimiento del creador, si es una persona f&iacute;sica";
 choices[13][3] = "60 a&ntilde;os en todo caso";
 answers[13] = choices[13][2];
 units[13] = "37";
 comments[13] = "Id Pregunta: 299. ";


//  Id pregunta: 320 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La mayor amenaza para la seguridad inform&aacute;tica de una empresa, con m&aacute;s del 50% de los casos conocidos de ataques, se debe a:";
 choices[14]= new Array();
 choices[14][0] = "antiguos empleados";
 choices[14][1] = "hackers externos";
 choices[14][2] = "empleados no autorizados";
 choices[14][3] = "empleados autorizados";
 answers[14] = choices[14][3];
 units[14] = "31,32,33";
 comments[14] = "Id Pregunta: 320. ";


//  Id pregunta: 346 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La t&eacute;cnica de direcci&oacute;n en la etapa de madurez es:";
 choices[15]= new Array();
 choices[15][0] = "Orientada a ventas";
 choices[15][1] = "Informal";
 choices[15][2] = "Orientada a los recursos";
 choices[15][3] = "Orientada al control";
 answers[15] = choices[15][2];
 units[15] = "22";
 comments[15] = "Id Pregunta: 346. ";


//  Id pregunta: 377 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Los sistemas de ayuda a la decisi&oacute;n pueden ser:";
 choices[16]= new Array();
 choices[16][0] = "Orientados a modelos y orientados a datos";
 choices[16][1] = "Orientados a modelos y orientados a procesos";
 choices[16][2] = "Orientados a datos y orientados a procesos";
 choices[16][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[16] = choices[16][0];
 units[16] = "21";
 comments[16] = "Id Pregunta: 377. ";


//  Id pregunta: 409 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[17]= new Array();
 choices[17][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[17][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[17][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[17][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[17] = choices[17][1];
 units[17] = "29";
 comments[17] = "Id Pregunta: 409. ";


//  Id pregunta: 510 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  La Metodolog&iacute;a Magerit debe estar destinado a:";
 choices[18]= new Array();
 choices[18][0] = "S&oacute;lo interesa a directivos";
 choices[18][1] = "Interesa a tecn&oacute;logos y especialistas inform&aacute;ticos";
 choices[18][2] = "No est&aacute; actualizado para que los riesgos puedan contabilizarse en Euros";
 choices[18][3] = "Interesa a directivos, usuarios y desarrolladores";
 answers[18] = choices[18][3];
 units[18] = "31, 32, 33";
 comments[18] = "Id Pregunta: 510. ";


//  Id pregunta: 541 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Respecto a las pautas de accesibilidad de la  iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[19]= new Array();
 choices[19][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[19][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[19][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[19][3] = "Todas las anteriores afirmaciones son falsas";
 answers[19] = choices[19][1];
 units[19] = "39";
 comments[19] = "Id Pregunta: 541. ";


//  Id pregunta: 555 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Un fichero automatizado con  (DNI, Nombre, Apellidos, Domicilio, Titulaci&oacute;n Acad&eacute;mica, Grado y Tipo de Minusval&iacute;a) requiere medidas de tipo:";
 choices[20]= new Array();
 choices[20][0] = "B&aacute;sico";
 choices[20][1] = "Medio";
 choices[20][2] = "Alto";
 choices[20][3] = "Cr&iacute;tico";
 answers[20] = choices[20][2];
 units[20] = "29";
 comments[20] = "Id Pregunta: 555. Junta Andaluc&iacute;a 2002";


//  Id pregunta: 598 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Uno de estos datos personales no es de los denominados &ldquo;especialmente protegidos&rdquo;";
 choices[21]= new Array();
 choices[21][0] = "Origen racial o &eacute;tnico.";
 choices[21][1] = "Afiliaci&oacute;n sindical";
 choices[21][2] = "Infracciones penales .";
 choices[21][3] = "Vida sexual.";
 answers[21] = choices[21][2];
 units[21] = "29";
 comments[21] = "Id Pregunta: 598. ";


//  Id pregunta: 603 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;La prestaci&oacute;n de servicios por parte de terceros a las Administraciones P&uacute;blicas, cuando implica un tratamiento de datos (Art. 12 LOPD), exige";
 choices[22]= new Array();
 choices[22][0] = "Cumplir lo dispuesto en la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[22][1] = "Adem&aacute;s de cumplir lo dispuesto en otras leyes, deber&aacute; incorporar los requisitos formales exigibles al encargado del tratamiento";
 choices[22][2] = "Crear una persona jur&iacute;dica distinta sujeto al derecho privado";
 choices[22][3] = "Realizar copias de seguridad de los datos";
 answers[22] = choices[22][1];
 units[22] = "29";
 comments[22] = "Id Pregunta: 603. ";


//  Id pregunta: 616 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Entre los controles de acceso l&oacute;gico no se encuentra:";
 choices[23]= new Array();
 choices[23][0] = "Identificaci&oacute;n de las rutas de acceso l&oacute;gico.";
 choices[23][1] = "Prueba de los controles de acceso l&oacute;gico.";
 choices[23][2] = "Evaluaci&oacute;n de amenazas de acceso l&oacute;gico.";
 choices[23][3] = "Evaluaci&oacute;n del almacenamiento en el Centro de respaldo.";
 answers[23] = choices[23][3];
 units[23] = "32";
 comments[23] = "Id Pregunta: 616. ";


//  Id pregunta: 651 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Una norma europea es:";
 choices[24]= new Array();
 choices[24][0] = "Una norma aprobada por un organismo de normalizaci&oacute;n con el que la Uni&oacute;n Europea ha establecido acuerdos";
 choices[24][1] = "De obligado cumplimiento en la Uni&oacute;n Europea";
 choices[24][2] = "Una norma homologada por un organismo de normalizaci&oacute;n con sede en la Uni&oacute;n Europea";
 choices[24][3] = "Una norma elaborada por el Comit&eacute; Europeo de Normalizaci&oacute;n (CEN)";
 answers[24] = choices[24][0];
 units[24] = "42";
 comments[24] = "Id Pregunta: 651. ";


//  Id pregunta: 653 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l es la diferencia entre una auditor&iacute;a de vulnerabilidades y un test de penetraci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Un test de penetraci&oacute;n identifica los servicios en ejecuci&oacute;n. Una auditor&iacute;a de vulnerabilidades proporciona una mayor informaci&oacute;n sobre las vulnerabilidades.";
 choices[25][1] = "Un test de penetraci&oacute;n enumera los recursos, una auditor&iacute;a de vulnerabilidaes enumera las vulnerabilidades.";
 choices[25][2] = "Un test de penetraci&oacute;n aprovecha las vulnerabilidades, una auditor&iacute;a de vulnerabilidades encuentra las vulnerabilidades.";
 choices[25][3] = "Los dos son lo mismo.";
 answers[25] = choices[25][2];
 units[25] = "31";
 comments[25] = "Id Pregunta: 653. ";


//  Id pregunta: 2902 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  A la hora de asegurar un Centro de Proceso de Datos:";
 choices[26]= new Array();
 choices[26][0] = "Habr&aacute; que considerar el riesgo de perturbaciones electromagn&eacute;ticas por parte del sistema de iluminaci&oacute;n (fluorescentes o similares)";
 choices[26][1] = "El riesgo de perturbaciones electromagn&eacute;ticas es siempre despreciable";
 choices[26][2] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina con la instalaci&oacute;n de toma de tierra en todos los dispositivos";
 choices[26][3] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina prohibiendo el uso de tel&eacute;fonos m&oacute;viles en el CPD";
 answers[26] = choices[26][0];
 units[26] = "31";
 comments[26] = "Id Pregunta: 2902. ";


//  Id pregunta: 4324 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[27]= new Array();
 choices[27][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[27][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[27][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[27][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[27] = choices[27][0];
 units[27] = "26";
 comments[27] = "Id Pregunta: 4324. ";


//  Id pregunta: 4406 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes elementos de un centro de contacto acepta la combinaci&oacute;n de la voz humana y pulsaciones en el teclado y provee respuestas en forma de voz?";
 choices[28]= new Array();
 choices[28][0] = "Sistema de respuesta de voz interactiva (IVR).";
 choices[28][1] = "Agente Virtual Inteligente (IVA).";
 choices[28][2] = "Distribuidor Autom&aacute;tico de Llamadas (ASR).";
 choices[28][3] = "Sistema de Reconocimiento Autom&aacute;tico del Lenguaje (ASR).";
 answers[28] = choices[28][0];
 units[28] = "26";
 comments[28] = "Id Pregunta: 4406. ";


//  Id pregunta: 4722 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[29]= new Array();
 choices[29][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[29][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[29][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[29][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[29] = choices[29][2];
 units[29] = "40";
 comments[29] = "Id Pregunta: 4722. Examen 2006 JCYL";


//  Id pregunta: 4891 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  El requisito de que el desarrollo de un sistema se realice seg&uacute;n la metodolog&iacute;a M&eacute;trica v3 deber&aacute; figurar en el pliego de prescripciones t&eacute;cnicas:";
 choices[30]= new Array();
 choices[30][0] = "Aspectos deseables o valorables";
 choices[30][1] = "Conformidad con normas y est&aacute;ndares.";
 choices[30][2] = "Requisitos obligatorios de la contrataci&oacute;n.";
 choices[30][3] = "Criterios de adjudicaci&oacute;n del contrato.";
 answers[30] = choices[30][2];
 units[30] = "41";
 comments[30] = "Id Pregunta: 4891. ";


//  Id pregunta: 5014 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0 el umbral de saciedad m&aacute;ximo para un criterio";
 choices[31]= new Array();
 choices[31][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[31][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[31][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[31][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[31] = choices[31][2];
 units[31] = "34";
 comments[31] = "Id Pregunta: 5014. Examen TIC A 2007";


//  Id pregunta: 5074 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[32]= new Array();
 choices[32][0] = "El W3C tiene una sede en Espa&ntilde;a";
 choices[32][1] = "W3C es un organismo estadounidense";
 choices[32][2] = "El Ministerio de Administraciones P&uacute;blicas es miembro del W3C";
 choices[32][3] = "W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios Web";
 answers[32] = choices[32][1];
 units[32] = "39";
 comments[32] = "Id Pregunta: 5074. Examen TIC A 2007";


//  Id pregunta: 5103 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Los elementos b&aacute;sicos de un sistema de informaci&oacute;n son:";
 choices[33]= new Array();
 choices[33][0] = "Los procedimiento y las pr&aacute;cticas hatituales de trabajo; la informaci&oacute;n; los usuarios; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[33][1] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; el eqipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[33][2] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; los usuarios.";
 choices[33][3] = "La informaci&oacute;n; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 answers[33] = choices[33][0];
 units[33] = "21";
 comments[33] = "Id Pregunta: 5103. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5110 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Seg&uacute;n Magerit V2, todas las dimensiones de la Seguridad son:";
 choices[34]= new Array();
 choices[34][0] = "Disponibilidad, integridad y confidencialidad.";
 choices[34][1] = "Disponibilidad, integridad, confidencialidad y autenticidad.";
 choices[34][2] = "Disponibilidad, integridad, confidencialidad y auditabilidad.";
 choices[34][3] = "Disponibilidad e integridad.";
 answers[34] = choices[34][1];
 units[34] = "32";
 comments[34] = "Id Pregunta: 5110. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5422 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[35]= new Array();
 choices[35][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[35][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[35][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[35][3] = "La citada ley no hace referencia a tal concepto";
 answers[35] = choices[35][2];
 units[35] = "36";
 comments[35] = "Id Pregunta: 5422. Castilla y Le&oacute;n";


//  Id pregunta: 5551 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Qu&eacute; considera que NO es una ventaja de la construcci&oacute;n de portales accesibles?";
 choices[36]= new Array();
 choices[36][0] = "Aumento de la usabilidad";
 choices[36][1] = "Facilita la independencia de dispositivo";
 choices[36][2] = "Simplifica el desarrollo";
 choices[36][3] = "Todas las anteriores son correctas.";
 answers[36] = choices[36][3];
 units[36] = "39";
 comments[36] = "Id Pregunta: 5551. ";


//  Id pregunta: 5798 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  Indique cuales son las funciones fundamentales del Comit&eacute; Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[37]= new Array();
 choices[37][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones usados por las Administraciones P&uacute;blicas. Preparar planes de acci&oacute;n conjuntos y programas, para fomentar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[37][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[37][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[37][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[37] = choices[37][0];
 units[37] = "30";
 comments[37] = "Id Pregunta: 5798. MAP 2008 A2";


//  Id pregunta: 5822 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Rel Decreto 1720/2007 de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[38]= new Array();
 choices[38][0] = "Un mes";
 choices[38][1] = "Dos meses";
 choices[38][2] = "Tres meses";
 choices[38][3] = "Seis meses";
 answers[38] = choices[38][0];
 units[38] = "29";
 comments[38] = "Id Pregunta: 5822. MAP 2008 A1";


//  Id pregunta: 5830 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[39]= new Array();
 choices[39][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[39][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[39][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[39][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[39] = choices[39][1];
 units[39] = "36,37";
 comments[39] = "Id Pregunta: 5830. ";


//  Id pregunta: 5838 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[40]= new Array();
 choices[40][0] = "TAW3 Online";
 choices[40][1] = "TAW3 Web Start";
 choices[40][2] = "TAW3 Onsite";
 choices[40][3] = "TAW3 en un clic";
 answers[40] = choices[40][2];
 units[40] = "39";
 comments[40] = "Id Pregunta: 5838. MAP 2008 A1";


//  Id pregunta: 5967 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[41]= new Array();
 choices[41][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[41][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[41][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[41][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[41] = choices[41][2];
 units[41] = "33";
 comments[41] = "Id Pregunta: 5967. Castilla La Mancha 2009";


//  Id pregunta: 6168 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[42]= new Array();
 choices[42][0] = "El conocimiento es informaci&oacute;n interiorizada.";
 choices[42][1] = "El conocimiento es informaci&oacute;n ordenada y estructurada.";
 choices[42][2] = "El conocimiento es informaci&oacute;n puesta dentro de un contexto.";
 choices[42][3] = "Todas las anteriores son correctas";
 answers[42] = choices[42][3];
 units[42] = "22";
 comments[42] = "Id Pregunta: 6168. ";


//  Id pregunta: 6190 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[43]= new Array();
 choices[43][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[43][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[43][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[43][3] = "T&eacute;cnica, funcional y organizativa";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6190. Art&iacute;culo 6";


//  Id pregunta: 6192 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Qu&eacute; norma es derogada por el Real Decreto 1671/2009?";
 choices[44]= new Array();
 choices[44][0] = "Real Decreto 263/1996";
 choices[44][1] = "Real Decreto 209/2003";
 choices[44][2] = "Real Decreto 1553/2005";
 choices[44][3] = "El Real Decreto 1671/2009 no deroga ninguna norma";
 answers[44] = choices[44][0];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6192. Disposici&oacute;n derogatoria &uacute;nica";


//  Id pregunta: 6268 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  El &ldquo;Plan&rdquo; cuyo objetivo es conseguir la continuidad en las funciones estrat&eacute;gicas de una organizaci&oacute;n desempe&ntilde;adas en sus instalaciones corporativas se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Plan de continuidad de operaciones.";
 choices[45][1] = "Plan de continuidad de negocio.";
 choices[45][2] = "Plan de contingencia.";
 choices[45][3] = "Plan de emergencia.";
 answers[45] = choices[45][0];
 units[45] = "32";
 comments[45] = "Id Pregunta: 6268. ";


//  Id pregunta: 6364 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[46]= new Array();
 choices[46][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[46][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[46][2] = "Minimizar el impacto final sobre el mismo.";
 choices[46][3] = "Todas las anteriores";
 answers[46] = choices[46][3];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6364. Art&iacute;culo 8 ENS";


//  Id pregunta: 6375 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, un esquema abierto es aquel que cumple las siguientes condiciones:";
 choices[47]= new Array();
 choices[47][0] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[47][1] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[47][2] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial, o que este pago no suponga una dificultad de acceso.";
 choices[47][3] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial o que este pago no suponga una dificultad de acceso.";
 answers[47] = choices[47][0];
 units[47] = "43";
 comments[47] = "Id Pregunta: 6375. Anexo ENI";


//  Id pregunta: 6405 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n, cuando el autor de un programa de ordenador sea una persona jur&iacute;dica?";
 choices[48]= new Array();
 choices[48][0] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 choices[48][1] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[48][2] = "Setenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[48][3] = "Cincuenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 answers[48] = choices[48][2];
 units[48] = "36";
 comments[48] = "Id Pregunta: 6405. Art&iacute;culo 98 RDL 1/1996";


//  Id pregunta: 7141 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[49]= new Array();
 choices[49][0] = "Dos a&ntilde;os";
 choices[49][1] = "Cuatro a&ntilde;os";
 choices[49][2] = "30 meses";
 choices[49][3] = "18 meses";
 answers[49] = choices[49][2];
 units[49] = "30";
 comments[49] = "Id Pregunta: 7141. Examen TIC B 2009 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 7145 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  En la Ley 11/2007 de 22 de Junio, se regula las condiciones de teletrabajo en la Administraci&oacute;n General del Estado. Estas condiciones deber&iacute;an estar establecidas antes del:";
 choices[50]= new Array();
 choices[50][0] = "1 de marzo de 2008";
 choices[50][1] = "1 de abril de 2008";
 choices[50][2] = "31 de diciembre de 2009";
 choices[50][3] = "31 de diciembre de 2008";
 answers[50] = choices[50][0];
 units[50] = "43";
 comments[50] = "Id Pregunta: 7145. Examen TIC B 2009";


//  Id pregunta: 7331 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Entre los documentos publicados por ISO NO se encuentra:";
 choices[51]= new Array();
 choices[51][0] = "Est&aacute;ndares Internacionales";
 choices[51][1] = "Informes T&eacute;cnicos";
 choices[51][2] = "Recomendaciones";
 choices[51][3] = "Gu&iacute;as ISO";
 answers[51] = choices[51][2];
 units[51] = "42";
 comments[51] = "Id Pregunta: 7331. NULL";


//  Id pregunta: 8211 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[52]= new Array();
 choices[52][0] = "M&eacute;todo Delphi.";
 choices[52][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[52][2] = "M&eacute;todo de Saaty.";
 choices[52][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[52] = choices[52][3];
 units[52] = "34";
 comments[52] = "Id Pregunta: 8211. Examen TIC A1 2010";


//  Id pregunta: 8223 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[53]= new Array();
 choices[53][0] = "Una Secretar&iacute;a de Estado.";
 choices[53][1] = "Una Subsecretar&iacute;a.";
 choices[53][2] = "Una Subdirecci&oacute;n General.";
 choices[53][3] = "Una Direcci&oacute;n General.";
 answers[53] = choices[53][3];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8223. Examen TIC A1 2010";


//  Id pregunta: 8230 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[54]= new Array();
 choices[54][0] = "VAN (Valor Actual Neto). ";
 choices[54][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[54][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[54][3] = "El m&eacute;todo del payback";
 answers[54] = choices[54][0];
 units[54] = "38";
 comments[54] = "Id Pregunta: 8230. Examen TIC A2 2010";


//  Id pregunta: 8745 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP?";
 choices[55]= new Array();
 choices[55][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[55][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[55][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[55][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8745. Examen TIC A2 2010 interna";


//  Id pregunta: 8779 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  El art&iacute;culo 3 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, define como datos de car&aacute;cter personal:";
 choices[56]= new Array();
 choices[56][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o no.";
 choices[56][1] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas y jur&iacute;dicas.";
 choices[56][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[56][3] = "Cualquier informaci&oacute;n concerniente a personas identificadas.";
 answers[56] = choices[56][2];
 units[56] = "29";
 comments[56] = "Id Pregunta: 8779. Examen UPM A2 2011";


//  Id pregunta: 8943 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[57]= new Array();
 choices[57][0] = "Una representaci&oacute;n del Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[57][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[57][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[57][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8943. ";


//  Id pregunta: 9291 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes situaciones no puede considerarse un incidente?";
 choices[58]= new Array();
 choices[58][0] = "Fallo hardware.";
 choices[58][1] = "Un usuario no autorizado de la cuenta de un usuario.";
 choices[58][2] = "Un evento cuyo impacto no genere una interrupci&oacute;n prolongada del servicio.";
 choices[58][3] = "Todos los anteriores se considerar&iacute;an incidentes.";
 answers[58] = choices[58][3];
 units[58] = "32";
 comments[58] = "Id Pregunta: 9291. ";


//  Id pregunta: 9293 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  El dominio de control &quot;Seguridad ligada al personal&quot; se corresponde con la dimensi&oacute;n de seguridad:";
 choices[59]= new Array();
 choices[59][0] = "Organizativa.";
 choices[59][1] = "L&oacute;gica";
 choices[59][2] = "F&iacute;sica";
 choices[59][3] = "Legal";
 answers[59] = choices[59][0];
 units[59] = "32";
 comments[59] = "Id Pregunta: 9293. ";


//  Id pregunta: 9295 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  &iquest;En qu&eacute; se diferencia el Plan de Continuidad de Negocio y el Plan de Recuperaci&oacute;n ante Desastres?";
 choices[60]= new Array();
 choices[60][0] = "No existe ninguna diferencia, son t&eacute;rminos equivalentes.";
 choices[60][1] = "El Plan de Continuidad de Negocio se centra en la parte reactiva de las TIC mientras que el de Recuperaci&oacute;n ante Desastres afecta a todos los departamentos de la organizaci&oacute;n.";
 choices[60][2] = "El Plan de Recuperaci&oacute;n ante Desastres se centra en la parte reactiva y es un subconjunto del Plan de Continuidad de Negocio. ";
 choices[60][3] = "Ninguna de las anteriores.";
 answers[60] = choices[60][2];
 units[60] = "32";
 comments[60] = "Id Pregunta: 9295. ";


//  Id pregunta: 9305 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "Planificaci&oacute;n y supervisi&oacute;n";
 choices[61][1] = "Estudio y evaluaci&oacute;n del sistema de control interno";
 choices[61][2] = "Obtenci&oacute;n de evidencia suficiente y adecuada";
 choices[61][3] = "Todas las anteriores";
 answers[61] = choices[61][3];
 units[61] = "31";
 comments[61] = "Id Pregunta: 9305. ";


//  Id pregunta: 9313 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[62]= new Array();
 choices[62][0] = "Los procedimientos se&ntilde;alan el marco de actuaci&oacute;n en los distintos campos de las TIC para resolver situaciones concretas";
 choices[62][1] = "Deben ser desarrollados por la unidad responsable de su implementaci&oacute;n";
 choices[62][2] = "Un ejemplo de procedimiento es la pol&iacute;tica de seguridad de la organizaci&oacute;n, que deber&aacute; ser conocido por todos los usuarios";
 choices[62][3] = "Los procedimientos deben estar documentados y mantenerse actualizados";
 answers[62] = choices[62][2];
 units[62] = "31";
 comments[62] = "Id Pregunta: 9313. ";


//  Id pregunta: 9324 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Los informes de auditor&iacute;a";
 choices[63]= new Array();
 choices[63][0] = "Deben ser enviados al &oacute;rgano auditado para que establezca observaciones o alegaciones";
 choices[63][1] = "No ser&aacute; sometido a las observaciones o alegaciones del &oacute;rgano auditado porque esto pondr&iacute;a en peligro la independencia del procedimiento";
 choices[63][2] = "Incluir&aacute; los hechos, hallazgos, conclusiones y recomendaciones que se consideren m&aacute;s relevantes por parte de los auditores";
 choices[63][3] = "Ninguna de las anteriores es correcta";
 answers[63] = choices[63][0];
 units[63] = "31";
 comments[63] = "Id Pregunta: 9324. ";


//  Id pregunta: 9408 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  A qu&eacute; &aacute;rea pertenece generalmente el departamento de microinform&aacute;tica?";
 choices[64]= new Array();
 choices[64][0] = "Sistemas";
 choices[64][1] = "Log&iacute;stica";
 choices[64][2] = "Comunicaciones";
 choices[64][3] = "Seguridad";
 answers[64] = choices[64][0];
 units[64] = "26";
 comments[64] = "Id Pregunta: 9408. ";


//  Id pregunta: 9541 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[65]= new Array();
 choices[65][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[65][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[65][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[65][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[65] = choices[65][3];
 units[65] = "30";
 comments[65] = "Id Pregunta: 9541. Examen TIC A1 2011	";


//  Id pregunta: 9570 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, durante la tramitaci&oacute;n de un proceso sancionador, podr&aacute; acordarse como medida provisional la suspensi&oacute;n temporal de la actividad del prestador de servicios de certificaci&oacute;n, incluyendo el cierre de sus establecimientos, cuando la infracci&oacute;n haya sido calicada como:";
 choices[66]= new Array();
 choices[66][0] = "Leve, grave o muy grave";
 choices[66][1] = "Grave o muy grave";
 choices[66][2] = "&Uacute;nicamente cuando haya sido calificada como muy grave";
 choices[66][3] = "En ning&uacute;n caso podr&aacute;n acordarse este tipo de medidas provisionales";
 answers[66] = choices[66][1];
 units[66] = "30";
 comments[66] = "Id Pregunta: 9570. Ley 59/2003, art&iacute;culo 34";


//  Id pregunta: 9726 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Atendiendo al est&aacute;ndar ISO 22301 en un Plan de Recuperaci&oacute;n ante Desastres, el Objetivo de Punto de Recuperaci&oacute;n (Recovery Point Objective RPO) es";
 choices[67]= new Array();
 choices[67][0] = "el nivel de servicios a proporcionar en modo alterno hasta que se recupere la situaci&oacute;n normal.";
 choices[67][1] = "el tiempo que la organizaci&oacute;n puede soportar desde que se produce el fallo hasta que se recuperan los servicios cr&iacute;ticos.";
 choices[67][2] = "el tiempo m&aacute;ximo tolerable de interrupci&oacute;n.";
 choices[67][3] = "la p&eacute;rdida m&aacute;xima de datos tolerable en caso de interrupci&oacute;n.";
 answers[67] = choices[67][3];
 units[67] = "32";
 comments[67] = "Id Pregunta: 9726. Examen TIC-A1 2013";


//  Id pregunta: 9759 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[68]= new Array();
 choices[68][0] = "Reponen";
 choices[68][1] = "Reajustan";
 choices[68][2] = "Devuelven o cancelan";
 choices[68][3] = "Todas las anteriores";
 answers[68] = choices[68][3];
 units[68] = "41";
 comments[68] = "Id Pregunta: 9759. Art. 99, Art. 102 RD Legislativo 3/2011";


//  Id pregunta: 10007 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[69]= new Array();
 choices[69][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[69][1] = "definir la secuencia entre las actividades.";
 choices[69][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[69][3] = "preparar el presupuesto de costes.";
 answers[69] = choices[69][2];
 units[69] = "27";
 comments[69] = "Id Pregunta: 10007. ";


//  Id pregunta: 10150 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En cumplimiento de la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones:";
 choices[70]= new Array();
 choices[70][0] = "Los operadores deben conservar el contenido de las comunicaciones";
 choices[70][1] = "El deber de conservaci&oacute;n se extiende a los datos relativos a las llamadas infructuosas";
 choices[70][2] = "La obligaci&oacute;n de conservaci&oacute;n de datos impuesta cesa a los cuatro meses computados desde la fecha en que se haya producido la comunicaci&oacute;n";
 choices[70][3] = "El plazo de ejecuci&oacute;n de la orden de cesi&oacute;n ser&aacute; el fijado por la resoluci&oacute;n judicial. Si no se establece otro plazo distinto, la cesi&oacute;n deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 answers[70] = choices[70][1];
 units[70] = "30";
 comments[70] = "Id Pregunta: 10150. ";


//  Id pregunta: 10159 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  El conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel se denomina:";
 choices[71]= new Array();
 choices[71][0] = "SCCD";
 choices[71][1] = "SCSP";
 choices[71][2] = "Plataforma de intermedicaci&oacute;n";
 choices[71][3] = "Ninguno de los anteriores";
 answers[71] = choices[71][1];
 units[71] = "44";
 comments[71] = "Id Pregunta: 10159. ";


//  Id pregunta: 10262 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Se debe notificar al Registro General de Protecci&oacute;n de Datos";
 choices[72]= new Array();
 choices[72][0] = "Los ficheros de nueva creaci&oacute;n";
 choices[72][1] = "Las modificaciones posteriores en la informaci&oacute;n comunicada en el registro de un fichero";
 choices[72][2] = "La supresi&oacute;n de ficheros previamente registrados";
 choices[72][3] = "Todos ellos";
 answers[72] = choices[72][3];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10262. Art&iacute;culos 55.1, 55.2, 58.1 y 58.2 del RD 1720/2007";


//  Id pregunta: 10267 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Es posible denegar temporalmente una transfferencia internacional de datos personales previamente autorizada?";
 choices[73]= new Array();
 choices[73][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[73][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[73][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[73][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[73] = choices[73][0];
 units[73] = "29";
 comments[73] = "Id Pregunta: 10267. Art&iacute;culo 70.3 del RD 1720/2007";


//  Id pregunta: 10344 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es la normativa que crea la Comisi&oacute;n de Propiedad Intelectual?";
 choices[74]= new Array();
 choices[74][0] = "Ley 2/2011, de Econom&iacute;a Sostenible";
 choices[74][1] = "Real Decreto 1889/2011, de regulaci&oacute;n del funcionamiento de la Comisi&oacute;n de Propiedad Intelectual";
 choices[74][2] = "Real Decreto Legislativo 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 choices[74][3] = "Real Decreto 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 answers[74] = choices[74][0];
 units[74] = "37";
 comments[74] = "Id Pregunta: 10344. La Ley 2/2011 crea la Comisi&oacute;n de Propiedad Intelectual, y el Real Decreto 1889/2011 regula su funcionamiento";


//  Id pregunta: 10351 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[75]= new Array();
 choices[75][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[75][1] = "Lo anterior es cierto, pero para nivel A";
 choices[75][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[75][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[75] = choices[75][3];
 units[75] = "39";
 comments[75] = "Id Pregunta: 10351. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";


//  Id pregunta: 10361 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Dentro de las recomendaciones de la UIT-T (Uni&oacute;n Internacional de Telecomunicaciones), se&ntilde;ale la correspondencia incorrecta:";
 choices[76]= new Array();
 choices[76][0] = "Serie V: Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[76][1] = "Serie X: Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[76][2] = "Serie E: Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[76][3] = "Serie I: Red digital de servicios integrados";
 answers[76] = choices[76][2];
 units[76] = "42";
 comments[76] = "Id Pregunta: 10361. Serie E: Explotaci&oacute;n general de la red, servicio telef&oacute;nico, explotaci&oacute;n del servicio y factores humanos";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Indique cu&aacute;l de los siguientes es un organismo europeo de normalizaci&oacute;n. ";
 choices[77]= new Array();
 choices[77][0] = "CENELEC";
 choices[77][1] = "IEC";
 choices[77][2] = "ISO";
 choices[77][3] = "IEEE";
 answers[77] = choices[77][0];
 units[77] = "42";
 comments[77] = "Id Pregunta: 10430. Examen TIC A1 2013";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la Red SARA. &iquest;Cual de los siguientes no es un tipo de Punto de Presencia?";
 choices[78]= new Array();
 choices[78][0] = "Area de Conexi&oacute;n de la AEAT";
 choices[78][1] = "Red sTESTA";
 choices[78][2] = "Ventanilla Unica empresarial de Melilla";
 choices[78][3] = "Banco de Espa&ntilde;a";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10494. Punto II.1.2 de la NTI de Requisitos de conexi&oacute;n a red sara. Las Ventanillas Unicas son tipos de PdP, pero la Ventanilla Unica de Melilla es un PdP dentro de ese tipo y no un tipo";


//  Id pregunta: 10548 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si: ";
 choices[79]= new Array();
 choices[79][0] = "Realizan una revisi&oacute;n del desarrollo del sistema ";
 choices[79][1] = "Recomiendan medidas de mejora";
 choices[79][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n ";
 choices[79][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[79] = choices[79][3];
 units[79] = "31, 32, 33";
 comments[79] = "Id Pregunta: 10548. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema. ";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[80]= new Array();
 choices[80][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[80][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[80][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[80][3] = "Ninguna de las anteriores.";
 answers[80] = choices[80][3];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10674. ";


//  Id pregunta: 10760 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[81]= new Array();
 choices[81][0] = "500";
 choices[81][1] = "600";
 choices[81][2] = "700";
 choices[81][3] = "800";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10760. ";


//  Id pregunta: 10861 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[82]= new Array();
 choices[82][0] = "Operable.";
 choices[82][1] = "Perceptible.";
 choices[82][2] = "Robustez.";
 choices[82][3] = "Comprensible.";
 answers[82] = choices[82][2];
 units[82] = "39";
 comments[82] = "Id Pregunta: 10861. Examen GSI 2014";


//  Id pregunta: 11027 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[83]= new Array();
 choices[83][0] = "ETSI";
 choices[83][1] = "CECUA";
 choices[83][2] = "ECMA";
 choices[83][3] = "ECTA";
 answers[83] = choices[83][2];
 units[83] = "42";
 comments[83] = "Id Pregunta: 11027. ";


//  Id pregunta: 11092 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;les son las 4 fases de  la evoluci&oacute;n de la inversi&oacute;n en sistemas de informaci&oacute;n en el tiempo de acuerdo con el modelo de Gibson y Nolan?";
 choices[84]= new Array();
 choices[84][0] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n, madurez";
 choices[84][1] = "Iniciaci&oacute;n, control, integraci&oacute;n, madurez";
 choices[84][2] = "Iniciaci&oacute;n, dise&ntilde;o, implementaci&oacute;n, transici&oacute;n";
 choices[84][3] = "Iniciaci&oacute;n, control, administraci&oacute;n, madurez";
 answers[84] = choices[84][0];
 units[84] = "21";
 comments[84] = "Id Pregunta: 11092. ";


//  Id pregunta: 11101 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[85]= new Array();
 choices[85][0] = "La interoperabilidad como cualidad integral";
 choices[85][1] = "Car&aacute;cter multidimensional de la interoperabilidad";
 choices[85][2] = "Enfoque de soluciones multilaterales";
 choices[85][3] = "Todos los anteriores";
 answers[85] = choices[85][3];
 units[85] = "30";
 comments[85] = "Id Pregunta: 11101. ";


//  Id pregunta: 11109 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seleccione la respuesta verdadera:";
 choices[86]= new Array();
 choices[86][0] = "Un Valor Actual Neto mayor que 0 indica que la inversi&oacute;n es rentable";
 choices[86][1] = "Un Valor Actual Neto mayor que 0 indica que la TIR es inferior al coste del capital";
 choices[86][2] = "Las respuestas a) y b) son falsas";
 choices[86][3] = "Las respuestas a) y b) son verdaderas";
 answers[86] = choices[86][0];
 units[86] = "38";
 comments[86] = "Id Pregunta: 11109. ";


//  Id pregunta: 11112 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seleccione la opci&oacute;n verdadera";
 choices[87]= new Array();
 choices[87][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[87][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[87][2] = "ACCEDA permite crear un registro en la nube";
 choices[87][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[87] = choices[87][0];
 units[87] = "30";
 comments[87] = "Id Pregunta: 11112. ";


//  Id pregunta: 11117 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seleccione la respuesta verdadera respecto a la publicidad de los procedimientos negociados:";
 choices[88]= new Array();
 choices[88][0] = "No se requiere publicidad en el caso de contratos cuyo valor estimado sea IGUAL o MENOR de 120.000";
 choices[88][1] = "El &oacute;rgano de contrataci&oacute;n solicitar&aacute; ofertas, al menos a 5 empresas capaces de realizar el objeto del contrato, cuando ello sea posible.";
 choices[88][2] = "El procedimiento permite la negociaci&oacute;n de las condiciones del contrato.";
 choices[88][3] = "Es el procedimiento ordinario de adjudicaci&oacute;n en los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado.";
 answers[88] = choices[88][2];
 units[88] = "41";
 comments[88] = "Id Pregunta: 11117. ";


//  Id pregunta: 11124 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de lo siguientes no es un servicio horizontal de la red SARA?";
 choices[89]= new Array();
 choices[89][0] = "Plataforma  de validaci&oacute;n de firma electr&oacute;nica @firma";
 choices[89][1] = "Solicitud de cambio de domicilio";
 choices[89][2] = "Pasarela de pago";
 choices[89][3] = "Registro Central de Personal";
 answers[89] = choices[89][3];
 units[89] = "44";
 comments[89] = "Id Pregunta: 11124. ";


//  Id pregunta: 11200 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[90]= new Array();
 choices[90][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[90][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[90][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[90][3] = "Beneficios TIC para la Sociedad UE";
 answers[90] = choices[90][2];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11200. ";


//  Id pregunta: 11246 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En un contrato tramitado por urgencia por su necesidad inaplazable o cuya adjudicaci&oacute;n se deba acelerar por inter&eacute;s p&uacute;blico:";
 choices[91]= new Array();
 choices[91][0] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as h&aacute;biles.";
 choices[91][1] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as h&aacute;biles.";
 choices[91][2] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as naturales.";
 choices[91][3] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as naturales.";
 answers[91] = choices[91][0];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11246. ";


//  Id pregunta: 11249 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La inscripci&oacute;n en el ROLECE acredita la aptitud del licitador frente a los &oacute;rganos de contrataci&oacute;n de:";
 choices[92]= new Array();
 choices[92][0] = "Todo el sector p&uacute;blico estatal.";
 choices[92][1] = "Todo el sector p&uacute;blico.";
 choices[92][2] = "La Administraci&oacute;n General del Estado.";
 choices[92][3] = "La Administraci&oacute;n General del Estado y su Organismos p&uacute;blicos vinculados o dependientes.";
 answers[92] = choices[92][1];
 units[92] = "41";
 comments[92] = "Id Pregunta: 11249. ";


//  Id pregunta: 11310 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En la NTI de firma electr&oacute;nica, se establecen los valores que puede almacenar el metadato &quot;tipo de firma&quot;. Seleccione la serie correcta de valores";
 choices[93]= new Array();
 choices[93][0] = "Xades Detached, Xades Enveloped, Cades Detached, Cades Enveloped, Pades Enveloped, Pades Detached";
 choices[93][1] = "CSV, Xades Detached, Xades Enveloped, Cades Detached; Cades Enveloped; Pades";
 choices[93][2] = "CSV, Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 choices[93][3] = "Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 answers[93] = choices[93][1];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11310. ";


//  Id pregunta: 11498 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes NO es un requisito m&iacute;nimo de seguridad seg&uacute;n el art&iacute;culo 11 del Esquema Nacional de Seguridad?";
 choices[94]= new Array();
 choices[94][0] = "L&iacute;neas de defensa.";
 choices[94][1] = "Profesionalidad.";
 choices[94][2] = "An&aacute;lisis y Gesti&oacute;n de Riesgos.";
 choices[94][3] = "Seguridad por defecto.";
 answers[94] = choices[94][0];
 units[94] = "38";
 comments[94] = "Id Pregunta: 11498. L&iacute;neas de Defensa es un Principio B&aacute;sico de la Seguridad. Profesionalidad es un Requisito m&iacute;nimo introducido por el RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11580 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n el RD 806/2014 sobre organizaci&oacute;n e instrumentos operativos de las TIC en la AGE y sus organismos p&uacute;blicos, corresponde la declaraci&oacute;n de medios y servicios compartidos a:";
 choices[95]= new Array();
 choices[95][0] = "DTIC, Direcci&oacute;n de Tecnolog&iacute;s de la Informaci&oacute;n y Comunicaciones.";
 choices[95][1] = "CETIC, Comisi&oacute;n de Estrategia TIC, a propuesta de los Ministros de Hacienda y AAPP y de la Presidencia.";
 choices[95][2] = "A la DTIC, a propuesta de las CMADs, Comisiones Ministeriales de Administraci&oacute;n Digital.";
 choices[95][3] = "La CETIC, a propuesta de la DTIC.";
 answers[95] = choices[95][3];
 units[95] = "24";
 comments[95] = "Id Pregunta: 11580. NULL";


//  Id pregunta: 11586 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La pauta WCAG 2.0 de ayuda a la entrada de datos se relaciona con el principio de: ";
 choices[96]= new Array();
 choices[96][0] = "Operabilidad";
 choices[96][1] = "Robustez";
 choices[96][2] = "Perceptibilidad";
 choices[96][3] = "Comprensibilidad";
 answers[96] = choices[96][3];
 units[96] = "39";
 comments[96] = "Id Pregunta: 11586. ";


//  Id pregunta: 11766 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Los servicios compartidos...Seleccione una:";
 choices[97]= new Array();
 choices[97][0] = "est&aacute;n declarado de contrataci&oacute;n centralizada";
 choices[97][1] = "tienen car&aacute;cter obligatorio&nbsp;";
 choices[97][2] = "est&aacute;n disponibles en el CTT (Centro de Transferencia de Tecnolog&iacute;a)";
 choices[97][3] = "son gestionados por la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones";
 answers[97] = choices[97][1];
 units[97] = "44";
 comments[97] = "Id Pregunta: 11766. ";


//  Id pregunta: 11779 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Orden PRE/2971/2007 sobre la expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la AGE y sus OO.PP dependientes, se&ntilde;ale la verdadera:";
 choices[98]= new Array();
 choices[98][0] = "La factura electr&oacute;nica solo podr&aacute; estar en formato XAdES, ETSI TS 101 903. ";
 choices[98][1] = "La factura deber&aacute; estar en formato XAdES (ETSI TS 101 903) o PAdES (ETSI TS 102 778).";
 choices[98][2] = "Se atribuye al Subsecretario del Ministerio de Hacienda y Administraciones P&uacute;blicas, la facultad de modificar el formato de factura y de firma electr&oacute;nica.";
 choices[98][3] = "Ninguna de las anteriores es correcta";
 answers[98] = choices[98][0];
 units[98] = "44";
 comments[98] = "Id Pregunta: 11779. ";


//  Id pregunta: 11785 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[99]= new Array();
 choices[99][0] = "Un Senador";
 choices[99][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[99][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[99][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[99] = choices[99][1];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11785. ";


