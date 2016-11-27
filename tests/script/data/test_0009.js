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

//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[0][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[0][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[0][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[0] = choices[0][1];
 units[0] = "7";
 comments[0] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[1]= "2)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[1]= new Array();
 choices[1][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[1][1] = "Personas con nacionalidad europea.";
 choices[1][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[1][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[2]= "3)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[2]= new Array();
 choices[2][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[2][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[2][2] = "a y b son correctas";
 choices[2][3] = "a y b son incorrectas";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[3]= new Array();
 choices[3][0] = "Al Consejo Europeo.";
 choices[3][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[3][2] = "A la Comisi&oacute;n Europea.";
 choices[3][3] = "Al Parlamento Europeo.";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[4]= new Array();
 choices[4][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[4][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[4][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[4][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[4] = choices[4][0];
 units[4] = "19";
 comments[4] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[5][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[5][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[5][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[6]= "7)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[6]= new Array();
 choices[6][0] = "Las sociedades mercantiles estatales.";
 choices[6][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[6][2] = "Las respuestas a) y b) son correctas.";
 choices[6][3] = "Las respuestas a) y b) no son correctas.";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[7]= "8)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[7]= new Array();
 choices[7][0] = "786 Diputados como m&aacute;ximo.";
 choices[7][1] = "600 Diputados como m&aacute;ximo.";
 choices[7][2] = "650 Diputados como m&aacute;ximo.";
 choices[7][3] = "732 Diputados como m&aacute;ximo.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[8]= "9)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[8]= new Array();
 choices[8][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[8][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[8][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[8][3] = "Todas son correctas.";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[9]= "10)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[9]= new Array();
 choices[9][0] = "18 miembros.";
 choices[9][1] = "Ninguna es correcta.";
 choices[9][2] = "22 miembros.";
 choices[9][3] = "21 miembros.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[10]= "11)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[10]= new Array();
 choices[10][0] = "Alrededor de un 26% del PIB";
 choices[10][1] = "Alrededor de un 11% del PIB";
 choices[10][2] = "Alrededor de un 34% del PIB";
 choices[10][3] = "Alrededor de un 7% del PIB";
 answers[10] = choices[10][1];
 units[10] = "12";
 comments[10] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[11]= "12)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[11]= new Array();
 choices[11][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[11][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[11][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[11][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[11] = choices[11][0];
 units[11] = "34, 84";
 comments[11] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[12]= new Array();
 choices[12][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[12][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[12][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[12][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[12] = choices[12][1];
 units[12] = "44";
 comments[12] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[13]= "14)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[13]= new Array();
 choices[13][0] = "En sentencias switch para alterar el control de flujo.";
 choices[13][1] = "Para manejar excepciones.";
 choices[13][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[13][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[13] = choices[13][1];
 units[13] = "64";
 comments[13] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[14]= new Array();
 choices[14][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[14][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[14][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[14][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[14] = choices[14][0];
 units[14] = "91";
 comments[14] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[15]= "16)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[15]= new Array();
 choices[15][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[15][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[15][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][0];
 units[15] = "28";
 comments[15] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[16]= "17)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[16]= new Array();
 choices[16][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[16][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[16][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[16][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[16] = choices[16][2];
 units[16] = "12";
 comments[16] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[17]= "18)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[17]= new Array();
 choices[17][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[17][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[17][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[17][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[18]= new Array();
 choices[18][0] = "Estrasburgo.";
 choices[18][1] = "Bruselas.";
 choices[18][2] = "Luxemburgo.";
 choices[18][3] = "Par&iacute;s.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[19]= "20)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[19]= new Array();
 choices[19][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[19][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[19][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[19][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[19] = choices[19][3];
 units[19] = "101";
 comments[19] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[20]= new Array();
 choices[20][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[20][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[20][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[20][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[20] = choices[20][2];
 units[20] = "47";
 comments[20] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[21]= "22)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[21]= new Array();
 choices[21][0] = "20 parlamentarios.";
 choices[21][1] = "29 parlamentarios.";
 choices[21][2] = "18 parlamentarios.";
 choices[21][3] = "23 parlamentarios.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[22]= new Array();
 choices[22][0] = "El Consejo Europeo.";
 choices[22][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[22][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[22][3] = "El Parlamento Europeo.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[23]= "24)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[23]= new Array();
 choices[23][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[23][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[23][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[23][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[24]= "25)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[24]= new Array();
 choices[24][0] = "Presencia equilibrada.";
 choices[24][1] = "Presencia paritaria.";
 choices[24][2] = "Presencia consensuada.";
 choices[24][3] = "presencia horizontal.";
 answers[24] = choices[24][0];
 units[24] = "14";
 comments[24] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[25]= "26)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[25]= new Array();
 choices[25][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[25][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[25][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[25][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[25] = choices[25][3];
 units[25] = "89";
 comments[25] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[26]= new Array();
 choices[26][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[26][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[26][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[26][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[26] = choices[26][1];
 units[26] = "63";
 comments[26] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[27]= "28)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[27]= new Array();
 choices[27][0] = "Decretos Legislativos.";
 choices[27][1] = "Decretos-leyes.";
 choices[27][2] = "Leyes de bases.";
 choices[27][3] = "Reales Decretos del Consejo de Ministros.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Administraciones P&uacute;blicas:";
 choices[28]= new Array();
 choices[28][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[28][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[28][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[28][3] = "todas son correctas";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 760. Ley 40/2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[29]= "30)  La Administraci&oacute;n General del Estado se organiza:";
 choices[29]= new Array();
 choices[29][0] = "en Ministerios";
 choices[29][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[29][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[29][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[29] = choices[29][1];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[30]= "31)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[30]= new Array();
 choices[30][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[30][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[30][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[30][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[30] = choices[30][1];
 units[30] = "19";
 comments[30] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[31]= "32)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[31][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[31][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[31][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[31] = choices[31][0];
 units[31] = "43";
 comments[31] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[32]= new Array();
 choices[32][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[32][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[32][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[32][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[32] = choices[32][1];
 units[32] = "77";
 comments[32] = "Id Pregunta: 688. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[33]= "34)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "Con el a&ntilde;o anterior.";
 choices[33][1] = "Con los tres a&ntilde;os anteriores.";
 choices[33][2] = "Con el a&ntilde;o natural.";
 choices[33][3] = "Con los dos a&ntilde;os anteriores.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[34]= new Array();
 choices[34][0] = "CVS";
 choices[34][1] = "SVN";
 choices[34][2] = "Team Foundation Server";
 choices[34][3] = "Apache Tomcat";
 answers[34] = choices[34][3];
 units[34] = "92";
 comments[34] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[35]= "36)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[35]= new Array();
 choices[35][0] = "La Administraci&oacute;n General del Estado";
 choices[35][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[35][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[35][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[35] = choices[35][1];
 units[35] = "26";
 comments[35] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[36]= "37)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[36]= new Array();
 choices[36][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[36][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[36][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[36][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[36] = choices[36][1];
 units[36] = "58";
 comments[36] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[37]= "38)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Un informe de impacto de g&eacute;nero.";
 choices[37][1] = "Un programa de igualdad de oportunidades.";
 choices[37][2] = "Un plan de Igualdad de Oportunidades.";
 choices[37][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[38]= "39)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[38]= new Array();
 choices[38][0] = "90";
 choices[38][1] = "50";
 choices[38][2] = "64";
 choices[38][3] = "60";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[39]= new Array();
 choices[39][0] = "Yarn";
 choices[39][1] = "Flume";
 choices[39][2] = "Hive";
 choices[39][3] = "BizAgi";
 answers[39] = choices[39][3];
 units[39] = "73";
 comments[39] = "Id Pregunta: 655. ";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[40]= new Array();
 choices[40][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[40][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[40][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[40][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[40] = choices[40][2];
 units[40] = "22";
 comments[40] = "Id Pregunta: 121. ";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[41]= "42)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[41]= new Array();
 choices[41][0] = "formular solicitudes";
 choices[41][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[41][2] = "presentar declaraciones responsables o comunicaciones";
 choices[41][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[41] = choices[41][1];
 units[41] = "7";
 comments[41] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[42]= "43)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[42]= new Array();
 choices[42][0] = "los registros mercantiles";
 choices[42][1] = "los registros de la propiedad";
 choices[42][2] = "los protocolos notariales";
 choices[42][3] = "todas son correctas";
 answers[42] = choices[42][3];
 units[42] = "7";
 comments[42] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; es Java Web Start?";
 choices[43]= new Array();
 choices[43][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[43][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[43][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[43][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[43] = choices[43][3];
 units[43] = "64";
 comments[43] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[44]= new Array();
 choices[44][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[44][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[44][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[44][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[44] = choices[44][1];
 units[44] = "77";
 comments[44] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[45]= "46)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Hacienda.";
 choices[45][1] = "El Ministerio de Econom&iacute;a.";
 choices[45][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[45][3] = "Ninguna de las respuestas es correcta.";
 answers[45] = choices[45][2];
 units[45] = "10";
 comments[45] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[46]= "47)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[46]= new Array();
 choices[46][0] = "la Administraci&oacute;n General del Estado";
 choices[46][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[46][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[46][3] = "el sector p&uacute;blico y privado institucional";
 answers[46] = choices[46][3];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 753. Ley 40/2015";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[47]= "48)  Son servicios declarados compartidos:";
 choices[47]= new Array();
 choices[47][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[47][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[47][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[48]= new Array();
 choices[48][0] = "Bienalmente";
 choices[48][1] = "Anualmente";
 choices[48][2] = "Semestralmente";
 choices[48][3] = "Cada cuatro a&ntilde;os";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[49]= "50)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[49]= new Array();
 choices[49][0] = "Principio de transparencia.";
 choices[49][1] = "Principio de cooperaci&oacute;n.";
 choices[49][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[49][3] = "Principio de lealtad institucional.";
 answers[49] = choices[49][1];
 units[49] = "10";
 comments[49] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[50]= new Array();
 choices[50][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[50][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[50][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[50][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[51]= new Array();
 choices[51][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[51][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[51][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[51][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[51] = choices[51][3];
 units[51] = "101";
 comments[51] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[52]= new Array();
 choices[52][0] = "DoS";
 choices[52][1] = "Phishing";
 choices[52][2] = "Sniffing";
 choices[52][3] = "Spoofing";
 answers[52] = choices[52][3];
 units[52] = "119";
 comments[52] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[53]= "54)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[53]= new Array();
 choices[53][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[53][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[53][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[53][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[53] = choices[53][1];
 units[53] = "92";
 comments[53] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[54]= new Array();
 choices[54][0] = "JAXP";
 choices[54][1] = "JNI";
 choices[54][2] = "JNDI";
 choices[54][3] = "JDBC";
 answers[54] = choices[54][1];
 units[54] = "64";
 comments[54] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[55]= new Array();
 choices[55][0] = "B&aacute;sico, medio y alto";
 choices[55][1] = "D&eacute;bil y fuerte";
 choices[55][2] = "Bajo, medio y alto";
 choices[55][3] = "Bajo, sustancial y alto";
 answers[55] = choices[55][3];
 units[55] = "77";
 comments[55] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[56]= "57)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[56]= new Array();
 choices[56][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[56][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[56][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[56][3] = "todas son correctas";
 answers[56] = choices[56][3];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[57]= "58)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[57]= new Array();
 choices[57][0] = "el Secretario General";
 choices[57][1] = "el Subdirector General";
 choices[57][2] = "el Secretario de Estado";
 choices[57][3] = "ninguna es correcta";
 answers[57] = choices[57][0];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[58]= "59)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[58]= new Array();
 choices[58][0] = "Por unanimidad.";
 choices[58][1] = "Por mayor&iacute;a cualificada.";
 choices[58][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[58][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[58] = choices[58][3];
 units[58] = "5";
 comments[58] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[59]= new Array();
 choices[59][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[59][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[59][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[59][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[59] = choices[59][0];
 units[59] = "19";
 comments[59] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[60]= "61)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[60]= new Array();
 choices[60][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[60][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[60][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[60][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[60] = choices[60][0];
 units[60] = "7";
 comments[60] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "14";
 choices[61][1] = "11";
 choices[61][2] = "12";
 choices[61][3] = "15";
 answers[61] = choices[61][0];
 units[61] = "19";
 comments[61] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[62]= "63)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[62]= new Array();
 choices[62][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[62][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[62][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[62][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[62] = choices[62][1];
 units[62] = "14";
 comments[62] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[63]= "64)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[63]= new Array();
 choices[63][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[63][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[63][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[63][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[63] = choices[63][1];
 units[63] = "73";
 comments[63] = "Id Pregunta: 101. ";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[64]= "65)  El sector p&uacute;blico institucional se integra por:";
 choices[64]= new Array();
 choices[64][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[64][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[64][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[64][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[64] = choices[64][1];
 units[64] = "7";
 comments[64] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[65]= new Array();
 choices[65][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[65][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[65][2] = "Las respuestas a) b) no son correctas.";
 choices[65][3] = "Las respuestas a) y b) son correctas.";
 answers[65] = choices[65][3];
 units[65] = "10";
 comments[65] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[66]= "67)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[66]= new Array();
 choices[66][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[66][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[66][2] = "Son incompatibles ambas actas de diputado.";
 choices[66][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[67]= new Array();
 choices[67][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[67][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[67][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[67][3] = "El pago de subsidios a parados";
 answers[67] = choices[67][3];
 units[67] = "15";
 comments[67] = "Id Pregunta: 116. ";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[68]= new Array();
 choices[68][0] = "Ley Org&aacute;nica.";
 choices[68][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[68][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[68][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[69]= new Array();
 choices[69][0] = "Art. 13, L.O.3/2007.";
 choices[69][1] = "Art. 14, L.O.3/2007.";
 choices[69][2] = "Art. 11, L.O.3/2007.";
 choices[69][3] = "Ninguna es correcta.";
 answers[69] = choices[69][2];
 units[69] = "14";
 comments[69] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[70]= "71)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[70]= new Array();
 choices[70][0] = "solo mediante ley";
 choices[70][1] = "reglamentariamente";
 choices[70][2] = "mediante ley o reglamentariamente";
 choices[70][3] = "ninguna es correcta";
 answers[70] = choices[70][0];
 units[70] = "7";
 comments[70] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta falsa:";
 choices[71]= new Array();
 choices[71][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[71][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[71][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[71][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[72]= new Array();
 choices[72][0] = "Perceptible";
 choices[72][1] = "Operable";
 choices[72][2] = "Comprensible";
 choices[72][3] = "Robusto";
 answers[72] = choices[72][2];
 units[72] = "42";
 comments[72] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[73][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[73][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[73][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[73] = choices[73][0];
 units[73] = "45";
 comments[73] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[74]= new Array();
 choices[74][0] = "10 d&iacute;as.";
 choices[74][1] = "15 d&iacute;as.";
 choices[74][2] = "1 mes.";
 choices[74][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[74] = choices[74][0];
 units[74] = "7";
 comments[74] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


