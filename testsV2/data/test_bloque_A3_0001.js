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
var preguntaids = new Array();

//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[0]= "1)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[0]= new Array();
 choices[0][0] = "Prevenir las conductas discriminatorias.";
 choices[0][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[0][2] = "Todas son correctas.";
 choices[0][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[0] = choices[0][2];
 units[0] = "14";
 comments[0] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[0] = 409


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[1]= "2)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[1]= new Array();
 choices[1][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[1][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[1][2] = "Ninguna es correcta.";
 choices[1][3] = "A y B son correctas.";
 answers[1] = choices[1][1];
 units[1] = "14";
 comments[1] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";
 preguntaids[1] = 411


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[2]= "3)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[2]= new Array();
 choices[2][0] = "Acoso sexual.";
 choices[2][1] = "Acoso por raz&oacute;n de sexo.";
 choices[2][2] = "Acoso laboral.";
 choices[2][3] = "Acoso mental.";
 answers[2] = choices[2][1];
 units[2] = "14";
 comments[2] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";
 preguntaids[2] = 397


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[3]= "4)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[3]= new Array();
 choices[3][0] = "Sean dirigidas por mujeres";
 choices[3][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[3][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[3][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[3] = 384


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[4]= new Array();
 choices[4][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[4][1] = "Directiva 2004/113/CE del Consejo.";
 choices[4][2] = "Todas son correctas.";
 choices[4][3] = "Todas son falsas.";
 answers[4] = choices[4][2];
 units[4] = "14";
 comments[4] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";
 preguntaids[4] = 405


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[5]= "6)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[5]= new Array();
 choices[5][0] = "Primario, que incluye la agricultura y la pesca";
 choices[5][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[5][2] = "Minero, junto con las exportaciones de comercio";
 choices[5][3] = "Servicios";
 answers[5] = choices[5][3];
 units[5] = "12";
 comments[5] = "Id Pregunta: 569. Modelo econ&oacute;mico";
 preguntaids[5] = 569


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[6]= "7)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[6]= new Array();
 choices[6][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[6][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[6][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[6][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 678. Dependencia";
 preguntaids[6] = 678


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[7]= "8)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[7]= new Array();
 choices[7][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[7][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[7][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[7][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[7] = choices[7][0];
 units[7] = "12";
 comments[7] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";
 preguntaids[7] = 135


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[8]= new Array();
 choices[8][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[8][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[8][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[8][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[8] = choices[8][0];
 units[8] = "14";
 comments[8] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[8] = 393


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[9]= "10)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[9]= new Array();
 choices[9][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[9][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[9][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[9][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[9] = choices[9][1];
 units[9] = "14";
 comments[9] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[9] = 412


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[10]= "11)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[10]= new Array();
 choices[10][0] = "P&uacute;blica.";
 choices[10][1] = "Privada.";
 choices[10][2] = "A y B son correctas.";
 choices[10][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[10] = 418


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[11]= "12)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[11]= new Array();
 choices[11][0] = "150 trabajadores/as.";
 choices[11][1] = "200 trabajadores/as.";
 choices[11][2] = "250 trabajadores/as.";
 choices[11][3] = "300 trabajadores/as.";
 answers[11] = choices[11][2];
 units[11] = "14";
 comments[11] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";
 preguntaids[11] = 420


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[12]= new Array();
 choices[12][0] = "Quince miembros.";
 choices[12][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[12][2] = "Los miembros que determine el Consejo.";
 choices[12][3] = "Un Presidente y quince miembros.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 378. UNION EUROPEA";
 preguntaids[12] = 378


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[13]= new Array();
 choices[13][0] = "Indirecta.";
 choices[13][1] = "Directa.";
 choices[13][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[13][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[13] = choices[13][1];
 units[13] = "14";
 comments[13] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[13] = 388


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[14]= "15)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[14]= new Array();
 choices[14][0] = "Un plan de igualdad.";
 choices[14][1] = "Un informe de impacto de g&eacute;nero.";
 choices[14][2] = "Un programa de igualdad.";
 choices[14][3] = "Todas son correctas.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[14] = 426


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[15]= new Array();
 choices[15][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[15][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[15][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[15][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 680. Dependencia";
 preguntaids[15] = 680


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[16]= "17)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[16][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[16][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[16][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[16] = choices[16][3];
 units[16] = "14";
 comments[16] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";
 preguntaids[16] = 387


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "Entre 1973 y 1978";
 choices[17][1] = "Entre 1992 y 1996";
 choices[17][2] = "Entre 1978 y 1985";
 choices[17][3] = "Entre 2008 y 2013";
 answers[17] = choices[17][2];
 units[17] = "12";
 comments[17] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[17] = 564


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[18]= "19)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[18]= new Array();
 choices[18][0] = "Presencia equilibrada.";
 choices[18][1] = "Presencia paritaria.";
 choices[18][2] = "Presencia consensuada.";
 choices[18][3] = "presencia horizontal.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[18] = 425


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[19]= new Array();
 choices[19][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[19][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[19][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[19][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[19] = choices[19][1];
 units[19] = "15";
 comments[19] = "Id Pregunta: 112. ";
 preguntaids[19] = 112


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[20]= "21)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[20]= new Array();
 choices[20][0] = "Acciones de discriminaci&oacute;n.";
 choices[20][1] = "Acciones positivas.";
 choices[20][2] = "Acciones negativas.";
 choices[20][3] = "Acciones neutras.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";
 preguntaids[20] = 399


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[21]= new Array();
 choices[21][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[21][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[21][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[21][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[21] = choices[21][2];
 units[21] = "15";
 comments[21] = "Id Pregunta: 118. ";
 preguntaids[21] = 118


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[22]= "23)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Unidad de igualdad.";
 choices[22][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[22][2] = "Ninguna de las anteriores.";
 choices[22][3] = "A y B son correctas.";
 answers[22] = choices[22][1];
 units[22] = "14";
 comments[22] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";
 preguntaids[22] = 433


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[23]= "24)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[23]= new Array();
 choices[23][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[23][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[23][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[23][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[23] = 391


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[24]= "25)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[24]= new Array();
 choices[24][0] = "Los ocupados y los parados activos";
 choices[24][1] = "S&oacute;lo los ocupados";
 choices[24][2] = "Los ocupados y los inactivos";
 choices[24][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[24] = choices[24][0];
 units[24] = "12";
 comments[24] = "Id Pregunta: 566. Modelo econ&oacute;mico";
 preguntaids[24] = 566


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[25]= "26)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[25]= new Array();
 choices[25][0] = "La Ley Org&aacute;nica 2/2011";
 choices[25][1] = "La Ley Org&aacute;nica 2/2012";
 choices[25][2] = "La Ley Org&aacute;nica 3/2012";
 choices[25][3] = "La Ley Org&aacute;nica 2/2002";
 answers[25] = choices[25][1];
 units[25] = "12";
 comments[25] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[25] = 138


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[26]= "27)  El sector Servicios NO incluye:";
 choices[26]= new Array();
 choices[26][0] = "El Comercio";
 choices[26][1] = "Los Transportes";
 choices[26][2] = "La Energ&iacute;a";
 choices[26][3] = "Las Comunicaciones";
 answers[26] = choices[26][2];
 units[26] = "12";
 comments[26] = "Id Pregunta: 571. Modelo econ&oacute;mico";
 preguntaids[26] = 571


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[27]= "28)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[27]= new Array();
 choices[27][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[27][1] = "En el extranjero.";
 choices[27][2] = "Ninguna es correcta.";
 choices[27][3] = "Ambas son correctas.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";
 preguntaids[27] = 427


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[28]= new Array();
 choices[28][0] = "El Tratado de Lisboa";
 choices[28][1] = "El Tratado de Amsterdam";
 choices[28][2] = "El Tratado de Niza";
 choices[28][3] = "El Acta &Uacute;nica Europea";
 answers[28] = choices[28][1];
 units[28] = "15";
 comments[28] = "Id Pregunta: 115. ";
 preguntaids[28] = 115


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[29]= "30)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[29]= new Array();
 choices[29][0] = "Parcial.";
 choices[29][1] = "Sectorial.";
 choices[29][2] = "Tranversal.";
 choices[29][3] = "Vertical.";
 answers[29] = choices[29][2];
 units[29] = "14";
 comments[29] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[29] = 402


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[30]= "31)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[30]= new Array();
 choices[30][0] = "Discriminaci&oacute;n indirecta.";
 choices[30][1] = "Discriminaci&oacute;n directa.";
 choices[30][2] = "Discriminaci&oacute;n por maternidad.";
 choices[30][3] = "Discriminaci&oacute;n abusiva.";
 answers[30] = choices[30][1];
 units[30] = "14";
 comments[30] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[30] = 395


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[31]= new Array();
 choices[31][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[31][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[31][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[31][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 682. Pensiones";
 preguntaids[31] = 682


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[32]= "33)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[32]= new Array();
 choices[32][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[32][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[32][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[32][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[32] = choices[32][0];
 units[32] = "14";
 comments[32] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[32] = 381


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[33]= new Array();
 choices[33][0] = "Art. 25 LO, 3/2007.";
 choices[33][1] = "Art. 23 LO, 3/2007.";
 choices[33][2] = "Art. 14 LO, 3/2007.";
 choices[33][3] = "Ninguna es correcta, es el art. 13.";
 answers[33] = choices[33][0];
 units[33] = "14";
 comments[33] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[33] = 416


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[34]= "35)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[34]= new Array();
 choices[34][0] = "De ocho a&ntilde;os.";
 choices[34][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[34][2] = "Ambas son correctas.";
 choices[34][3] = "No existe un l&iacute;mite.";
 answers[34] = choices[34][0];
 units[34] = "14";
 comments[34] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[34] = 432


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[35]= "36)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[35]= new Array();
 choices[35][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[35][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[35][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[35][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 679. Dependencia";
 preguntaids[35] = 679


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[36]= "37)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[36]= new Array();
 choices[36][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[36][1] = "Protecci&oacute;n de su salud.";
 choices[36][2] = "Ninguna es correcta.";
 choices[36][3] = "A y B son correctas.";
 answers[36] = choices[36][1];
 units[36] = "14";
 comments[36] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[36] = 430


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[37]= "38)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[37]= new Array();
 choices[37][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[37][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[37][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[37][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[37] = choices[37][3];
 units[37] = "14";
 comments[37] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[37] = 380


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Nacional de la Mujer.";
 choices[38][1] = "El Consejo de la Mujer.";
 choices[38][2] = "El Instituto de la Mujer.";
 choices[38][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[38] = choices[38][3];
 units[38] = "14";
 comments[38] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[38] = 390


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[39]= "40)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[39]= new Array();
 choices[39][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[39][1] = "Static &amp; Active process for REsolution Bank.";
 choices[39][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[39][3] = "Super Active REsponse for Banks";
 answers[39] = choices[39][0];
 units[39] = "12";
 comments[39] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[39] = 139


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[40]= new Array();
 choices[40][0] = "Art&iacute;culo 14 CE.";
 choices[40][1] = "Art&iacute;culo 9.2 CE.";
 choices[40][2] = "Art&iacute;culo 9.1 CE.";
 choices[40][3] = "Art&iacute;culo 13 CE.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[40] = 407


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[41]= "42)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[41]= new Array();
 choices[41][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[41][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[41][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[41][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";
 preguntaids[41] = 408


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[42]= "43)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[42]= new Array();
 choices[42][0] = "El Ministerio de Igualdad.";
 choices[42][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[42][2] = "Ambas son correctas.";
 choices[42][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[42] = 422


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[43]= "44)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[43]= new Array();
 choices[43][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[43][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[43][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[43][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[43] = choices[43][3];
 units[43] = "12";
 comments[43] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[43] = 130


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[44]= "45)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[44]= new Array();
 choices[44][0] = "El derecho a un permiso.";
 choices[44][1] = "Una prestaci&oacute;n por paternidad.";
 choices[44][2] = "Ambas son correctas.";
 choices[44][3] = "18 d&iacute;as de permiso.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[44] = 423


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[45]= "46)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[45]= new Array();
 choices[45][0] = "El Tratado de Roma, 1957.";
 choices[45][1] = "El Acta &Uacute;nica Europea.";
 choices[45][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[45][3] = "Ninguna es correcta.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[45] = 404


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[46]= "47)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[46]= new Array();
 choices[46][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[46][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[46][2] = "Ambas son correctas.";
 choices[46][3] = "A y B son incorrectas.";
 answers[46] = choices[46][2];
 units[46] = "14";
 comments[46] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[46] = 401


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[47]= new Array();
 choices[47][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[47][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[47][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[47][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[47] = choices[47][0];
 units[47] = "15";
 comments[47] = "Id Pregunta: 114. ";
 preguntaids[47] = 114


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[48]= new Array();
 choices[48][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[48][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[48][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[48][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[48] = choices[48][0];
 units[48] = "14";
 comments[48] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[48] = 389


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[49]= new Array();
 choices[49][0] = "El Consejo Nacional de la Mujer";
 choices[49][1] = "El Consejo de la Mujer";
 choices[49][2] = "El Instituto de la Mujer";
 choices[49][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[49] = choices[49][3];
 units[49] = "14";
 comments[49] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[49] = 383


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[50]= "51)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[50]= new Array();
 choices[50][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[50][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[50][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[50][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[50] = choices[50][0];
 units[50] = "12";
 comments[50] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";
 preguntaids[50] = 131


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[51]= new Array();
 choices[51][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[51][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[51][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[51][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[51] = choices[51][0];
 units[51] = "15";
 comments[51] = "Id Pregunta: 117. ";
 preguntaids[51] = 117


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[52]= new Array();
 choices[52][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[52][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[52][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[52][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[52] = choices[52][0];
 units[52] = "14";
 comments[52] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";
 preguntaids[52] = 386


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[53]= "54)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[53]= new Array();
 choices[53][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[53][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[53][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[53][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[53] = choices[53][3];
 units[53] = "12";
 comments[53] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[53] = 132


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[54]= "55)  La Poblaci&oacute;n Activa incluye a:";
 choices[54]= new Array();
 choices[54][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[54][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[54][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[54][3] = "Todo aquel que desea trabajar";
 answers[54] = choices[54][2];
 units[54] = "15";
 comments[54] = "Id Pregunta: 110. ";
 preguntaids[54] = 110


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[55][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[55][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[55][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 681. Pensiones";
 preguntaids[55] = 681


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[56]= new Array();
 choices[56][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[56][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[56][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[56][3] = "La tasa de desempleo ronda el 20%";
 answers[56] = choices[56][2];
 units[56] = "12";
 comments[56] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[56] = 572


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[57]= new Array();
 choices[57][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[57][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[57][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[57][3] = "El pago de subsidios a parados";
 answers[57] = choices[57][3];
 units[57] = "15";
 comments[57] = "Id Pregunta: 116. ";
 preguntaids[57] = 116


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[58]= "59)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[58]= new Array();
 choices[58][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[58][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[58][2] = "Ambas son correctas.";
 choices[58][3] = "Ambas son incorrectas.";
 answers[58] = choices[58][0];
 units[58] = "14";
 comments[58] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";
 preguntaids[58] = 429


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[59]= "60)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Discriminaci&oacute;n indirecta.";
 choices[59][1] = "Discriminaci&oacute;n directa.";
 choices[59][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[59][3] = "Discriminaci&oacute;n abusiva.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";
 preguntaids[59] = 394


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[60]= "61)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Un informe de impacto de g&eacute;nero.";
 choices[60][1] = "Un programa de igualdad de oportunidades.";
 choices[60][2] = "Un plan de Igualdad de Oportunidades.";
 choices[60][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[60] = 414


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[61]= new Array();
 choices[61][0] = "Indirecta.";
 choices[61][1] = "Directa.";
 choices[61][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[61][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";
 preguntaids[61] = 392


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[62]= "63)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[62]= new Array();
 choices[62][0] = "Alrededor de un 26% del PIB";
 choices[62][1] = "Alrededor de un 11% del PIB";
 choices[62][2] = "Alrededor de un 34% del PIB";
 choices[62][3] = "Alrededor de un 7% del PIB";
 answers[62] = choices[62][1];
 units[62] = "12";
 comments[62] = "Id Pregunta: 570. Modelo econ&oacute;mico";
 preguntaids[62] = 570


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[63]= "64)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[63]= new Array();
 choices[63][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[63][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[63][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[63][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[63] = choices[63][0];
 units[63] = "14";
 comments[63] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";
 preguntaids[63] = 396


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[64]= new Array();
 choices[64][0] = "La Seguridad Social";
 choices[64][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[64][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[64][3] = "El Banco de Espa&ntilde;a";
 answers[64] = choices[64][3];
 units[64] = "15";
 comments[64] = "Id Pregunta: 113. ";
 preguntaids[64] = 113


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[65]= "66)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[65]= new Array();
 choices[65][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[65][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[65][2] = "Ninguna es correcta.";
 choices[65][3] = "A y B son correctas.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";
 preguntaids[65] = 424


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[66]= "67)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[66]= new Array();
 choices[66][0] = "El acoso sexual.";
 choices[66][1] = "El acoso por raz&oacute;n del sexo.";
 choices[66][2] = "Ambas son correctas.";
 choices[66][3] = "A y B son incorrectas.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";
 preguntaids[66] = 421


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[67]= "68)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[67]= new Array();
 choices[67][0] = "Un informe de g&eacute;nero.";
 choices[67][1] = "La variable de sexo.";
 choices[67][2] = "La variable de edad.";
 choices[67][3] = "La variable de comportamiento.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";
 preguntaids[67] = 415


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[68]= new Array();
 choices[68][0] = "Anual";
 choices[68][1] = "Mensual";
 choices[68][2] = "Semestral";
 choices[68][3] = "Trimestral";
 answers[68] = choices[68][3];
 units[68] = "15";
 comments[68] = "Id Pregunta: 119. ";
 preguntaids[68] = 119


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[69]= new Array();
 choices[69][0] = "El aumento de la esperanza de vida.";
 choices[69][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[69][2] = "La reducci&oacute;n del desempleo.";
 choices[69][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 675. Estructura social";
 preguntaids[69] = 675


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[70]= "71)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[70][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[70][2] = "Ambas son correctas.";
 choices[70][3] = "La A y B son incorrectas.";
 answers[70] = choices[70][2];
 units[70] = "14";
 comments[70] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[70] = 417


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[71]= "72)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[71]= new Array();
 choices[71][0] = "A la persona demandante.";
 choices[71][1] = "A la persona demandada.";
 choices[71][2] = "Al &oacute;rgano judicial.";
 choices[71][3] = "Al &oacute;rgano administrativo.";
 answers[71] = choices[71][1];
 units[71] = "14";
 comments[71] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[71] = 400


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[72]= "73)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[72]= new Array();
 choices[72][0] = "Medidas de igualdad.";
 choices[72][1] = "Objetivos de igualdad.";
 choices[72][2] = "Ambas son correctas.";
 choices[72][3] = "A y B son incorrectas.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";
 preguntaids[72] = 403


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[73]= "74)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[73]= new Array();
 choices[73][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[73][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[73][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[73][3] = "Todos las anteriores son ciertas.";
 answers[73] = choices[73][3];
 units[73] = "12";
 comments[73] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[73] = 137


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[74]= new Array();
 choices[74][0] = "Art. 13, L.O.3/2007.";
 choices[74][1] = "Art. 14, L.O.3/2007.";
 choices[74][2] = "Art. 11, L.O.3/2007.";
 choices[74][3] = "Ninguna es correcta.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";
 preguntaids[74] = 398


