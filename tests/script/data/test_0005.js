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

//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[0]= new Array();
 choices[0][0] = "El 2 de Octubre de 2015";
 choices[0][1] = "El 15 de Septiembre de 2015";
 choices[0][2] = "El 1 de Octubre de 2015";
 choices[0][3] = "El 5 de Octubre de 2015";
 answers[0] = choices[0][0];
 units[0] = "19";
 comments[0] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[1]= "2)  En las Administraciones P&uacute;blicas...";
 choices[1]= new Array();
 choices[1][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[1][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[1][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[1][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[1] = choices[1][0];
 units[1] = "10";
 comments[1] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[2]= "3)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[2]= new Array();
 choices[2][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[2][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[2][2] = "Se basan en sistemas distribuidos";
 choices[2][3] = "Se basan en el modelo de datos relacional";
 answers[2] = choices[2][2];
 units[2] = "73";
 comments[2] = "Id Pregunta: 102. ";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[3]= "4)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[3][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[3][2] = "b) y d) son verdaderas";
 choices[3][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[3] = choices[3][1];
 units[3] = "18, 20";
 comments[3] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[4]= "5)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[4]= new Array();
 choices[4][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[4][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[4][2] = "A y B son correctas.";
 choices[4][3] = "A y B son incorrectas.";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[5]= new Array();
 choices[5][0] = "Quince miembros.";
 choices[5][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[5][2] = "Los miembros que determine el Consejo.";
 choices[5][3] = "Un Presidente y quince miembros.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[6]= "7)  La iniciativa legislativa corresponde:";
 choices[6]= new Array();
 choices[6][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[6][1] = "Al rey y al Gobierno.";
 choices[6][2] = "Al Congreso, al Senado y al Rey.";
 choices[6][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; es el machine learning?";
 choices[7]= new Array();
 choices[7][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[7][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[7][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[7][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[7] = choices[7][0];
 units[7] = "73";
 comments[7] = "Id Pregunta: 657. ";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[8]= new Array();
 choices[8][0] = "Estrasburgo.";
 choices[8][1] = "Bruselas.";
 choices[8][2] = "Luxemburgo.";
 choices[8][3] = "Par&iacute;s.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[9]= new Array();
 choices[9][0] = "Las Cortes Generales.";
 choices[9][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[9][2] = "El Gobierno.";
 choices[9][3] = "El Congreso de los Diputados.";
 answers[9] = choices[9][0];
 units[9] = "10";
 comments[9] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[10]= new Array();
 choices[10][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[10][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[10][2] = "la falta de interoperabilidad.";
 choices[10][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[11]= "12)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[11]= new Array();
 choices[11][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[11][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[11][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[11][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[11] = choices[11][0];
 units[11] = "12";
 comments[11] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[12]= new Array();
 choices[12][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[12][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[12][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[12][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[12] = choices[12][1];
 units[12] = "92";
 comments[12] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[13]= "14)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[13]= new Array();
 choices[13][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[13][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[13][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[13][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[13] = choices[13][3];
 units[13] = "34, 84";
 comments[13] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[14]= "15)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[14]= new Array();
 choices[14][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[14][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[14][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[14][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[14] = choices[14][3];
 units[14] = "86";
 comments[14] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[15]= "16)  El Presupuesto por programas sirve para saber...";
 choices[15]= new Array();
 choices[15][0] = "En qu&eacute; nos gastamos el dinero";
 choices[15][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[15][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[15][3] = "Qui&eacute;n se gasta el dinero";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[16]= "17)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[16]= new Array();
 choices[16][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[16][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[16][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[16][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[16] = choices[16][1];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[17]= new Array();
 choices[17][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[17][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[17][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[17][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[17] = choices[17][1];
 units[17] = "18, 20";
 comments[17] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[18]= new Array();
 choices[18][0] = "Yarn";
 choices[18][1] = "Flume";
 choices[18][2] = "Hive";
 choices[18][3] = "BizAgi";
 answers[18] = choices[18][3];
 units[18] = "73";
 comments[18] = "Id Pregunta: 655. ";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[19]= "20)  Son bases de datos NoSQL orientadas a objetos:";
 choices[19]= new Array();
 choices[19][0] = "GemStone";
 choices[19][1] = "Zope Object DB";
 choices[19][2] = "Las dos anteriores";
 choices[19][3] = "Solo B)";
 answers[19] = choices[19][2];
 units[19] = "73";
 comments[19] = "Id Pregunta: 107. ";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[20][1] = "Auditor&iacute;a operativa.";
 choices[20][2] = "Auditor&iacute;a de cumplimiento.";
 choices[20][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[21]= "22)  En el sistema operativo Unix/Linux, el comando id:";
 choices[21]= new Array();
 choices[21][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[21][1] = "El comando id no existe.";
 choices[21][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[21][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[21] = choices[21][0];
 units[21] = "57";
 comments[21] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[22]= new Array();
 choices[22][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[22][1] = "La delimitaci&oacute;n de su territorio.";
 choices[22][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[22][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[23]= "24)  Las Universidades p&uacute;blicas:";
 choices[23]= new Array();
 choices[23][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[23][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[23][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[23][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[24]= "25)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[24]= new Array();
 choices[24][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[24][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[24][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[24][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[24] = choices[24][0];
 units[24] = "7";
 comments[24] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[25]= "26)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[25]= new Array();
 choices[25][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[25][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[25][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[25][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[25] = choices[25][2];
 units[25] = "12";
 comments[25] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[26]= "27)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[26]= new Array();
 choices[26][0] = "Estrasburgo.";
 choices[26][1] = "Bruselas.";
 choices[26][2] = "Luxemburgo.";
 choices[26][3] = "Holanda.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[27]= new Array();
 choices[27][0] = "Crecimiento inteligente.";
 choices[27][1] = "Crecimiento inclusivo.";
 choices[27][2] = "Crecimiento sostenible.";
 choices[27][3] = "Crecimiento integrador.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[28]= "29)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[28]= new Array();
 choices[28][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[28][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[28][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[28][3] = "Todas las anteriores son correctas.";
 answers[28] = choices[28][3];
 units[28] = "47";
 comments[28] = "Id Pregunta: 674. Receta electr&oacute;nica";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[29]= new Array();
 choices[29][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[29][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[29][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[30]= "31)  La Administraci&oacute;n General del Estado se organiza:";
 choices[30]= new Array();
 choices[30][0] = "en Ministerios";
 choices[30][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[30][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[30][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[31]= "32)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[31]= new Array();
 choices[31][0] = "20 parlamentarios.";
 choices[31][1] = "29 parlamentarios.";
 choices[31][2] = "18 parlamentarios.";
 choices[31][3] = "23 parlamentarios.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[32]= new Array();
 choices[32][0] = "El Ministro de Econom&iacute;a.";
 choices[32][1] = "El Gobierno.";
 choices[32][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[32][3] = "El Presidente del Gobierno.";
 answers[32] = choices[32][1];
 units[32] = "10";
 comments[32] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[33]= "34)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[33]= new Array();
 choices[33][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[33][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[33][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[33][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[34]= new Array();
 choices[34][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[34][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[34][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[34][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[35]= new Array();
 choices[35][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[35][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[35][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[35][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[35] = choices[35][1];
 units[35] = "18, 20";
 comments[35] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[36]= "37)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[36]= new Array();
 choices[36][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[36][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[36][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[36][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[37]= "38)  La Poblaci&oacute;n Activa incluye a:";
 choices[37]= new Array();
 choices[37][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[37][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[37][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[37][3] = "Todo aquel que desea trabajar";
 answers[37] = choices[37][2];
 units[37] = "15";
 comments[37] = "Id Pregunta: 110. ";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[38]= "39)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[38]= new Array();
 choices[38][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[38][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[38][2] = "Las Inspecciones Generales de los Servicios";
 choices[38][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[38] = choices[38][1];
 units[38] = "75";
 comments[38] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "A nivel de secci&oacute;n de programa.";
 choices[39][1] = "A nivel de grupo de programa.";
 choices[39][2] = "Ninguna de las respuestas es correcta.";
 choices[39][3] = "A nivel de programa.";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[40]= "41)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[40]= new Array();
 choices[40][0] = "por Real Decreto";
 choices[40][1] = "reglamentariamente";
 choices[40][2] = "mediante Ley";
 choices[40][3] = "ninguna es correcta";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[41]= new Array();
 choices[41][0] = "Nueve.";
 choices[41][1] = "Diez.";
 choices[41][2] = "Siete.";
 choices[41][3] = "Ocho.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[42]= new Array();
 choices[42][0] = "El Consejo Europeo.";
 choices[42][1] = "El Parlamento Europeo.";
 choices[42][2] = "El Consejo.";
 choices[42][3] = "La Comisi&oacute;n.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[43]= "44)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[43]= new Array();
 choices[43][0] = "150 trabajadores/as.";
 choices[43][1] = "200 trabajadores/as.";
 choices[43][2] = "250 trabajadores/as.";
 choices[43][3] = "300 trabajadores/as.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[44]= "45)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[44]= new Array();
 choices[44][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[44][1] = "Unanimidad.";
 choices[44][2] = "Mayor&iacute;a cualificada.";
 choices[44][3] = "Mayor&iacute;a simple.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[45]= new Array();
 choices[45][0] = "El Presidente del Senado.";
 choices[45][1] = "El Defensor del Pueblo.";
 choices[45][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[45][3] = "El Presidente del Gobierno.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[46]= new Array();
 choices[46][0] = "al menos por 50 Diputados.";
 choices[46][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[46][2] = "por la Mesa del Congreso de los Diputados.";
 choices[46][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[46] = choices[46][1];
 units[46] = "1";
 comments[46] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[47]= "48)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[47]= new Array();
 choices[47][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[47][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[47][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[48]= new Array();
 choices[48][0] = "No, en ning&uacute;n caso.";
 choices[48][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[48][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[48][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[48] = choices[48][3];
 units[48] = "1";
 comments[48] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[49]= "50)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[49]= new Array();
 choices[49][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[49][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[49][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[49][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[49] = choices[49][3];
 units[49] = "18, 20";
 comments[49] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[50]= new Array();
 choices[50][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[50][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[50][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[50][3] = "El pago de subsidios a parados";
 answers[50] = choices[50][3];
 units[50] = "15";
 comments[50] = "Id Pregunta: 116. ";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[51]= "52)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[51]= new Array();
 choices[51][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[51][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[51][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[51][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[51] = choices[51][0];
 units[51] = "31";
 comments[51] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[52]= "53)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[52]= new Array();
 choices[52][0] = "CO.PER.";
 choices[52][1] = "COMPER.";
 choices[52][2] = "CO.RE.PER.";
 choices[52][3] = "CO.PE.RRE.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[53]= "54)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[53]= new Array();
 choices[53][0] = "Los ocupados y los parados activos";
 choices[53][1] = "S&oacute;lo los ocupados";
 choices[53][2] = "Los ocupados y los inactivos";
 choices[53][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[53] = choices[53][0];
 units[53] = "12";
 comments[53] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[54]= "55)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[54]= new Array();
 choices[54][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[54][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[54][2] = "El Presidente del Gobierno";
 choices[54][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[54] = choices[54][1];
 units[54] = "26";
 comments[54] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[55]= new Array();
 choices[55][0] = "Art&iacute;culo 9.1 CE.";
 choices[55][1] = "Art&iacute;culo 53 CE.";
 choices[55][2] = "Art&iacute;culo 14 CE.";
 choices[55][3] = "Art&iacute;culo 16 CE.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[56]= "57)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[56]= new Array();
 choices[56][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[56][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[56][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[56][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[56] = choices[56][2];
 units[56] = "57";
 comments[56] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[57]= new Array();
 choices[57][0] = "732";
 choices[57][1] = "626";
 choices[57][2] = "786";
 choices[57][3] = "360";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[58]= "59)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[58]= new Array();
 choices[58][0] = "la Administraci&oacute;n General del Estado";
 choices[58][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[58][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[58][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[58] = choices[58][3];
 units[58] = "7";
 comments[58] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[59]= "60)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[59]= new Array();
 choices[59][0] = "El Presidente y su gabinete.";
 choices[59][1] = "El Presidente y sus Ministros.";
 choices[59][2] = "El Rey y el Presidente.";
 choices[59][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[60]= "61)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[60]= new Array();
 choices[60][0] = "En qu&eacute; nos gastamos el dinero";
 choices[60][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[60][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[60][3] = "Qui&eacute;n se gasta el dinero.";
 answers[60] = choices[60][0];
 units[60] = "10";
 comments[60] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[61]= new Array();
 choices[61][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[61][1] = "Las CMADs";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "Ninguna es correcta";
 answers[61] = choices[61][2];
 units[61] = "19";
 comments[61] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[62]= new Array();
 choices[62][0] = "MySQL";
 choices[62][1] = "SQLite";
 choices[62][2] = "Zope";
 choices[62][3] = "MariaDB";
 answers[62] = choices[62][2];
 units[62] = "61";
 comments[62] = "Id Pregunta: 575. Tema 61. TAI 2016.";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[63]= new Array();
 choices[63][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[63][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[63][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[63][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[63] = choices[63][1];
 units[63] = "89";
 comments[63] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[64]= new Array();
 choices[64][0] = "Cuatro.";
 choices[64][1] = "Ninguno.";
 choices[64][2] = "Dos.";
 choices[64][3] = "Seis.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[65]= new Array();
 choices[65][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[65][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[65][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[65][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[65] = choices[65][0];
 units[65] = "73";
 comments[65] = "Id Pregunta: 654. ";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[66]= "67)  Son servicios declarados compartidos:";
 choices[66]= new Array();
 choices[66][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[66][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[66][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[66][3] = "Todos los anteriores";
 answers[66] = choices[66][3];
 units[66] = "19";
 comments[66] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[67]= new Array();
 choices[67][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[67][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[67][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[67][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[68]= new Array();
 choices[68][0] = "Data Mining (miner&iacute;a de datos)";
 choices[68][1] = "Business Intelligence (inteligencia de negocio)";
 choices[68][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[68][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[68] = choices[68][1];
 units[68] = "72";
 comments[68] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[69]= "70)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[69]= new Array();
 choices[69][0] = "Mercurial, Git y Apache Subversion.";
 choices[69][1] = "Gimp, Mercurial y Git.";
 choices[69][2] = "RedMine, Planner y OpenProj.";
 choices[69][3] = "Cassandra, Git y REDIS.";
 answers[69] = choices[69][0];
 units[69] = "92";
 comments[69] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[70]= "71)  El sector p&uacute;blico institucional se integra por:";
 choices[70]= new Array();
 choices[70][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[70][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[70][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[70][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[70] = choices[70][1];
 units[70] = "7";
 comments[70] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[71]= "72)  La soberan&iacute;a nacional reside en:";
 choices[71]= new Array();
 choices[71][0] = "el Parlamento nacional.";
 choices[71][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[71][2] = "el pueblo espa&ntilde;ol.";
 choices[71][3] = "el Congreso y el Senado.";
 answers[71] = choices[71][3];
 units[71] = "1";
 comments[71] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[72]= "73)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[72][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[72][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[72][3] = "Todas las anteriores son ciertas";
 answers[72] = choices[72][3];
 units[72] = "8";
 comments[72] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[73]= "74)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[73]= new Array();
 choices[73][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[73][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[73][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[73][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[74]= "75)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[74]= new Array();
 choices[74][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[74][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[74][2] = "el Ministerio del Interior";
 choices[74][3] = "la Administraci&oacute;n General del Estado";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 802. Ley 40/2015";


