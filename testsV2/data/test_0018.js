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

//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[0]= "1)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[0]= new Array();
 choices[0][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[0][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[0][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[0][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[1]= new Array();
 choices[1][0] = "El Consejo Europeo.";
 choices[1][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[1][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[1][3] = "El Parlamento Europeo.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[2]= "3)  En cuanto al an&aacute;lisis DAFO:";
 choices[2]= new Array();
 choices[2][0] = "Considera detallada y exclusivamente factores internos.";
 choices[2][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[2][2] = "Considera detallada y exclusivamente factores externos.";
 choices[2][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[2] = choices[2][1];
 units[2] = "83";
 comments[2] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[3]= "4)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[3]= new Array();
 choices[3][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[3][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[3][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[3][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[3] = choices[3][3];
 units[3] = "26";
 comments[3] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Org&aacute;nica.";
 choices[4][1] = "Contable.";
 choices[4][2] = "Econ&oacute;mica.";
 choices[4][3] = "Por programas.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[5]= "6)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[5]= new Array();
 choices[5][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[5][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[5][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[5][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[5] = choices[5][1];
 units[5] = "73";
 comments[5] = "Id Pregunta: 101. ";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[6]= new Array();
 choices[6][0] = "Art&iacute;culo 70.";
 choices[6][1] = "Art&iacute;culo 54.";
 choices[6][2] = "Articulo 62.";
 choices[6][3] = "Articulo 55. 5.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[7]= new Array();
 choices[7][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[7][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[7][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[7] = choices[7][1];
 units[7] = "89";
 comments[7] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[8]= new Array();
 choices[8][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[8][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[8][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[8][3] = "El software funcionando es la medida principal del progreso.";
 answers[8] = choices[8][2];
 units[8] = "34";
 comments[8] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[9]= new Array();
 choices[9][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[9][1] = "Por Orden Ministerial.";
 choices[9][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[9][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[10]= "11)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[10]= new Array();
 choices[10][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[10][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[10][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[10][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[10] = choices[10][0];
 units[10] = "12";
 comments[10] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Lollipop";
 choices[11][1] = "Jelly Bean";
 choices[11][2] = "Marshmallow";
 choices[11][3] = "KitKat";
 answers[11] = choices[11][2];
 units[11] = "59";
 comments[11] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[12]= "13)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[12]= new Array();
 choices[12][0] = "Subsecretario";
 choices[12][1] = "Subdirector general";
 choices[12][2] = "Secretario de Estado";
 choices[12][3] = "ninguna es correcta";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[13]= new Array();
 choices[13][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[13][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[13][2] = "Servicio de seguridad gestionada";
 choices[13][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[13] = choices[13][1];
 units[13] = "26";
 comments[13] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[14]= "15)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[14]= new Array();
 choices[14][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[14][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[14][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[14][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[14] = choices[14][0];
 units[14] = "60";
 comments[14] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[15]= "16)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[15]= new Array();
 choices[15][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[15][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[15][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[15][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[16]= "17)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[16]= new Array();
 choices[16][0] = "Gesti&oacute;n de la disponibilidad";
 choices[16][1] = "Gesti&oacute;n de la demanda";
 choices[16][2] = "Gesti&oacute;n de entregas";
 choices[16][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[16] = choices[16][0];
 units[16] = "101";
 comments[16] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[17]= new Array();
 choices[17][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[17][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[17][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[17][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[17] = choices[17][1];
 units[17] = "34, 84";
 comments[17] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[18]= "19)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[18]= new Array();
 choices[18][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[18][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[18][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[18][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[18] = choices[18][2];
 units[18] = "12";
 comments[18] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[19]= new Array();
 choices[19][0] = "El Parlamento y el Consejo.";
 choices[19][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[19][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[19][3] = "La Comisi&oacute;n y el Consejo.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[20]= new Array();
 choices[20][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[20][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[20][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[20][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[20] = choices[20][3];
 units[20] = "46";
 comments[20] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[21]= new Array();
 choices[21][0] = "De oficio.";
 choices[21][1] = "A solicitud del interesado.";
 choices[21][2] = "De oficio o a solicitud del interesado.";
 choices[21][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[21] = choices[21][2];
 units[21] = "7";
 comments[21] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[22]= "23)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[22]= new Array();
 choices[22][0] = "Decretos Legislativos.";
 choices[22][1] = "Decretos-leyes.";
 choices[22][2] = "Leyes de bases.";
 choices[22][3] = "Reales Decretos del Consejo de Ministros.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[23]= new Array();
 choices[23][0] = "Es un framework de software libre.";
 choices[23][1] = "Es una base de datos NoSQL.";
 choices[23][2] = "Est&aacute; basado en MapReduce.";
 choices[23][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[23] = choices[23][1];
 units[23] = "73";
 comments[23] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[24]= new Array();
 choices[24][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[24][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[24][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[24][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[24] = choices[24][3];
 units[24] = "22";
 comments[24] = "Id Pregunta: 120. ";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[25]= "26)  La recusaci&oacute;n se plantea...";
 choices[25]= new Array();
 choices[25][0] = "Antes de iniciado el procedimiento";
 choices[25][1] = "Una vez iniciado el procedimiento";
 choices[25][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[25][3] = "En cualquier momento del procedimiento";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[26][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[26][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[26][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[26] = choices[26][2];
 units[26] = "47";
 comments[26] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[27]= new Array();
 choices[27][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[27][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[27][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[27][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[27] = choices[27][2];
 units[27] = "121";
 comments[27] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; es Java Web Start?";
 choices[28]= new Array();
 choices[28][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[28][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[28][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[28][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[28] = choices[28][3];
 units[28] = "64";
 comments[28] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[29]= "30)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[29][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[29][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[29][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[29] = choices[29][3];
 units[29] = "22";
 comments[29] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[30]= new Array();
 choices[30][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[30][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[30][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[30][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[31]= "32)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[31][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[31][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[31][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[31] = choices[31][0];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[32]= new Array();
 choices[32][0] = "las personas jur&iacute;dicas ";
 choices[32][1] = "las entidades con personalidad jur&iacute;dica";
 choices[32][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[32][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[33]= "34)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[33]= new Array();
 choices[33][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[33][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[33][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[33][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[33] = choices[33][2];
 units[33] = "22";
 comments[33] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[34]= "35)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[34]= new Array();
 choices[34][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[34][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[34][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[34][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[34] = choices[34][3];
 units[34] = "34, 84";
 comments[34] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[35]= "36)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[35]= new Array();
 choices[35][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[35][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[35][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[35][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[36]= "37)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[36]= new Array();
 choices[36][0] = "El acoso sexual.";
 choices[36][1] = "El acoso por raz&oacute;n del sexo.";
 choices[36][2] = "Ambas son correctas.";
 choices[36][3] = "A y B son incorrectas.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[37]= "38)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[37]= new Array();
 choices[37][0] = "La Administraci&oacute;n General del Estado";
 choices[37][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[37][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[37][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[37] = choices[37][1];
 units[37] = "26";
 comments[37] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[38][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[38][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][1];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[39]= new Array();
 choices[39][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[39][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[39][2] = "Las respuestas a) b) no son correctas.";
 choices[39][3] = "Las respuestas a) y b) son correctas.";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[40]= new Array();
 choices[40][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[40][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[40][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[40][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[40] = choices[40][0];
 units[40] = "19";
 comments[40] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la respuesta falsa:";
 choices[41]= new Array();
 choices[41][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[41][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[41][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[41][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[41] = choices[41][2];
 units[41] = "5";
 comments[41] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[42]= new Array();
 choices[42][0] = "Nueve.";
 choices[42][1] = "Diez.";
 choices[42][2] = "Siete.";
 choices[42][3] = "Ocho.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[43]= "44)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Anualmente.";
 choices[43][1] = "Ninguna de las respuestas es correcta.";
 choices[43][2] = "Trimestralmente.";
 choices[43][3] = "Semestralmente.";
 answers[43] = choices[43][0];
 units[43] = "10";
 comments[43] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[44]= "45)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[44]= new Array();
 choices[44][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[44][1] = "Tratarse de un acto no susceptible de recurso";
 choices[44][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[44][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[44] = choices[44][2];
 units[44] = "8";
 comments[44] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[45]= "46)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[45]= new Array();
 choices[45][0] = "la capital del pa&iacute;s";
 choices[45][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[45][2] = "cada una de las provincias";
 choices[45][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[45] = choices[45][1];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[46]= "47)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[46]= new Array();
 choices[46][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[46][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[46][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[46][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[46] = choices[46][0];
 units[46] = "31";
 comments[46] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[47]= "48)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[47]= new Array();
 choices[47][0] = "De los interesados en el procedimiento";
 choices[47][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[47][2] = "Disposiciones generales";
 choices[47][3] = "De los actos administrativos";
 answers[47] = choices[47][2];
 units[47] = "7";
 comments[47] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[48]= "49)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[48]= new Array();
 choices[48][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[48][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[48][2] = "a y b son correctas";
 choices[48][3] = "a y b son incorrectas";
 answers[48] = choices[48][2];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[49]= "50)  Los criptosistemas pueden clasificarse en:";
 choices[49]= new Array();
 choices[49][0] = "Concretos, Estables e Inestables.";
 choices[49][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[49][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[49][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[49] = choices[49][3];
 units[49] = "76";
 comments[49] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[50]= "51)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[50]= new Array();
 choices[50][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[50][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[50][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[50][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[50] = choices[50][1];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[51]= "52)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[51][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[51][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[51][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[51] = choices[51][2];
 units[51] = "83";
 comments[51] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[52]= "53)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[52]= new Array();
 choices[52][0] = "Los ocupados y los parados activos";
 choices[52][1] = "S&oacute;lo los ocupados";
 choices[52][2] = "Los ocupados y los inactivos";
 choices[52][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[52] = choices[52][0];
 units[52] = "12";
 comments[52] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[53]= "54)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[53]= new Array();
 choices[53][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[53][1] = "Ninguna de las respuestas es correcta.";
 choices[53][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[53][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[53] = choices[53][0];
 units[53] = "5";
 comments[53] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[54]= new Array();
 choices[54][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[54][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[54][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[54][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[54] = choices[54][1];
 units[54] = "44";
 comments[54] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[55]= new Array();
 choices[55][0] = "Veinte.";
 choices[55][1] = "Quince.";
 choices[55][2] = "Diez.";
 choices[55][3] = "Doce.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[56]= new Array();
 choices[56][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[56][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[56][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[56][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[57]= new Array();
 choices[57][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[57][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[57][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[57][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[57] = choices[57][2];
 units[57] = "85";
 comments[57] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[58]= "59)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[58]= new Array();
 choices[58][0] = "B&aacute;sico";
 choices[58][1] = "Medio";
 choices[58][2] = "Alto";
 choices[58][3] = "A los niveles medio y alto";
 answers[58] = choices[58][2];
 units[58] = "35";
 comments[58] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[59]= "60)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[59]= new Array();
 choices[59][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[59][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[59][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[59][3] = "Todas las respuestas son correctas.";
 answers[59] = choices[59][1];
 units[59] = "101";
 comments[59] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[60]= new Array();
 choices[60][0] = "Anualmente por el Consejo de Ministros";
 choices[60][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[60][2] = "Al final de cada legislatura por el Gobierno";
 choices[60][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[61]= "62)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[61]= new Array();
 choices[61][0] = "Municipios, provincias y CCAA.";
 choices[61][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[61][2] = "En CCAA, 50 provincias y municipios.";
 choices[61][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[62]= new Array();
 choices[62][0] = "Anual.";
 choices[62][1] = "Semestral.";
 choices[62][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[62][3] = "Bienal.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[63]= new Array();
 choices[63][0] = "Las Cortes Generales.";
 choices[63][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[63][2] = "El Gobierno.";
 choices[63][3] = "El Congreso de los Diputados.";
 answers[63] = choices[63][0];
 units[63] = "10";
 comments[63] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[64]= new Array();
 choices[64][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[64][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[64][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[64][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[65]= new Array();
 choices[65][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[65][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[65][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[65][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[65] = choices[65][0];
 units[65] = "26";
 comments[65] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[66]= new Array();
 choices[66][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[66][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[66][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[66][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[66] = choices[66][3];
 units[66] = "101";
 comments[66] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[67]= "68)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[67]= new Array();
 choices[67][0] = "De un mes si el acto fuera presunto";
 choices[67][1] = "De un mes si el acto fuera expreso";
 choices[67][2] = "De un mes en cualquier caso";
 choices[67][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[67] = choices[67][1];
 units[67] = "8";
 comments[67] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[68]= new Array();
 choices[68][0] = "Yarn";
 choices[68][1] = "Flume";
 choices[68][2] = "Hive";
 choices[68][3] = "BizAgi";
 answers[68] = choices[68][3];
 units[68] = "73";
 comments[68] = "Id Pregunta: 655. ";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[69]= "70)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[69]= new Array();
 choices[69][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[69][1] = "Protecci&oacute;n de su salud.";
 choices[69][2] = "Ninguna es correcta.";
 choices[69][3] = "A y B son correctas.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[70]= "71)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[70]= new Array();
 choices[70][0] = "Dos.";
 choices[70][1] = "Cuatro.";
 choices[70][2] = "Cinco.";
 choices[70][3] = "Tres.";
 answers[70] = choices[70][1];
 units[70] = "10";
 comments[70] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[71]= new Array();
 choices[71][0] = "Backlog refinement";
 choices[71][1] = "Backlog refinement";
 choices[71][2] = "A y b son correctas";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][2];
 units[71] = "34, 84";
 comments[71] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[72]= "73)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[72]= new Array();
 choices[72][0] = "Cinco a&ntilde;os.";
 choices[72][1] = "Cuatro a&ntilde;os.";
 choices[72][2] = "Tres a&ntilde;os.";
 choices[72][3] = "Seis meses.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[73]= "74)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[73]= new Array();
 choices[73][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[73][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[73][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[73][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[73] = choices[73][1];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[74]= "75)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[74]= new Array();
 choices[74][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[74][1] = "Unanimidad.";
 choices[74][2] = "Mayor&iacute;a cualificada.";
 choices[74][3] = "Mayor&iacute;a simple.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 365. UNION EUROPEA";


