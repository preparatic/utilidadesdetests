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

//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[0]= new Array();
 choices[0][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[0][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[0][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[0][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[0] = choices[0][0];
 units[0] = "15";
 comments[0] = "Id Pregunta: 114. ";
 preguntaids[0] = 114


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[1]= "2)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[1][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[1][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[1][3] = "Todas las anteriores son ciertas";
 answers[1] = choices[1][3];
 units[1] = "8";
 comments[1] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";
 preguntaids[1] = 145


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[2]= "3)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[2]= new Array();
 choices[2][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[2][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[2][2] = "Son incompatibles ambas actas de diputado.";
 choices[2][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 335. UNION EUROPEA";
 preguntaids[2] = 335


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[3]= new Array();
 choices[3][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[3][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[3][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[3][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[3] = choices[3][1];
 units[3] = "26";
 comments[3] = "Id Pregunta: 547. Gobernanza TIC";
 preguntaids[3] = 547


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[4]= "5)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[4]= new Array();
 choices[4][0] = "Un Reglamento.";
 choices[4][1] = "Un Decreto.";
 choices[4][2] = "Una Ley.";
 choices[4][3] = "Un Real-Decreto.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 368. UNION EUROPEA";
 preguntaids[4] = 368


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[5]= new Array();
 choices[5][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[5][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[5][2] = "Fecha de otorgamiento.";
 choices[5][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[5] = choices[5][1];
 units[5] = "43";
 comments[5] = "Id Pregunta: 447. SERVICIOS COMUNES";
 preguntaids[5] = 447


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[6]= "7)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[6]= new Array();
 choices[6][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[6][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[6][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[6][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";
 preguntaids[6] = 277


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[7]= new Array();
 choices[7][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[7][1] = "Todas las respuestas son correctas.";
 choices[7][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[7][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";
 preguntaids[7] = 476


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[8]= new Array();
 choices[8][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[8][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[8][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[8][3] = "todas son correctas";
 answers[8] = choices[8][3];
 units[8] = "7";
 comments[8] = "Id Pregunta: 542. LEY 39/2015";
 preguntaids[8] = 542


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[9]= new Array();
 choices[9][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[9][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[9][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[9][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 219. CONSTITUCION1978";
 preguntaids[9] = 219


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[10]= new Array();
 choices[10][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[10][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[10][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[10][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[10] = choices[10][3];
 units[10] = "78";
 comments[10] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[10] = 47


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[11]= "12)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[11]= new Array();
 choices[11][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[11][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[11][2] = "a y b son correctas";
 choices[11][3] = "a y b son incorrectas";
 answers[11] = choices[11][0];
 units[11] = "7";
 comments[11] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[11] = 153


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[12]= new Array();
 choices[12][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[12][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[12][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[12][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[12] = choices[12][0];
 units[12] = "14";
 comments[12] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[12] = 389


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[13]= new Array();
 choices[13][0] = "El Consejo Nacional de la Mujer";
 choices[13][1] = "El Consejo de la Mujer";
 choices[13][2] = "El Instituto de la Mujer";
 choices[13][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[13] = choices[13][3];
 units[13] = "14";
 comments[13] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[13] = 383


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[14]= new Array();
 choices[14][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[14][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[14][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[14][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[14] = 309


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[15]= "16)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[15]= new Array();
 choices[15][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[15][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[15][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[15][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[15] = choices[15][3];
 units[15] = "7";
 comments[15] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[15] = 530


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[16]= "17)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[16]= new Array();
 choices[16][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[16][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[16][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[16][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[16] = choices[16][3];
 units[16] = "10";
 comments[16] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";
 preguntaids[16] = 508


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[17]= new Array();
 choices[17][0] = "Ley 50/1997, del Gobierno.";
 choices[17][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[17][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[17][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[17] = choices[17][1];
 units[17] = "10";
 comments[17] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[17] = 475


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[18]= "19)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[18]= new Array();
 choices[18][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[18][1] = "el Consejo de Estado";
 choices[18][2] = "el Congreso";
 choices[18][3] = "las Cortes Generales";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[18] = 785


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[19]= "20)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[19]= new Array();
 choices[19][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[19][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[19][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[19][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[19] = 316


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[20]= "21)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[20]= new Array();
 choices[20][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[20][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[20][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[20][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[20] = choices[20][2];
 units[20] = "26";
 comments[20] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[20] = 1


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[21]= new Array();
 choices[21][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[21][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[21][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[21][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[21] = choices[21][1];
 units[21] = "10";
 comments[21] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";
 preguntaids[21] = 748


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[22]= new Array();
 choices[22][0] = "Al Gobierno de la naci&oacute;n";
 choices[22][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[22][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[22][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[22] = 147


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[23]= "24)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[23]= new Array();
 choices[23][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[23][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[23][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[23][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[23] = choices[23][0];
 units[23] = "12";
 comments[23] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";
 preguntaids[23] = 131


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; facilita un ORM?";
 choices[24]= new Array();
 choices[24][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[24][1] = "Conversi&oacute;n de objetos a documentos";
 choices[24][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[24][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[24] = choices[24][0];
 units[24] = "62";
 comments[24] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[24] = 49


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[25]= "26)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[25]= new Array();
 choices[25][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[25][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[25][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[25][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[25] = choices[25][3];
 units[25] = "7";
 comments[25] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[25] = 526


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[26]= new Array();
 choices[26][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[26][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[26][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[26][3] = "Sancionar y publicar las leyes.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 242. CONSTITUCION1978";
 preguntaids[26] = 242


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[27]= new Array();
 choices[27][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[27][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[27][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[27] = 588


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[28]= new Array();
 choices[28][0] = "JAXP";
 choices[28][1] = "JNI";
 choices[28][2] = "JNDI";
 choices[28][3] = "JDBC";
 answers[28] = choices[28][1];
 units[28] = "64";
 comments[28] = "Id Pregunta: 36. AGE A1 2015";
 preguntaids[28] = 36


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[29]= "30)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[29]= new Array();
 choices[29][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[29][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[29][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[29][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[29] = choices[29][0];
 units[29] = "60";
 comments[29] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[29] = 651


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[30]= "31)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[30]= new Array();
 choices[30][0] = "Dise&ntilde;o del servicio.";
 choices[30][1] = "Transici&oacute;n del servicio.";
 choices[30][2] = "Estrategia del servicio.";
 choices[30][3] = "Operaci&oacute;n del servicio.";
 answers[30] = choices[30][2];
 units[30] = "101";
 comments[30] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[30] = 644


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[31]= "32)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[31]= new Array();
 choices[31][0] = "Seis a&ntilde;os.";
 choices[31][1] = "Cinco a&ntilde;os.";
 choices[31][2] = "Cuatro a&ntilde;os.";
 choices[31][3] = "Ocho a&ntilde;os.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 307. UNION EUROPEA";
 preguntaids[31] = 307


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[32]= "33)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[32]= new Array();
 choices[32][0] = "la Administraci&oacute;n General del Estado";
 choices[32][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[32][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[32][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[32] = choices[32][3];
 units[32] = "7";
 comments[32] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[32] = 519


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[33]= new Array();
 choices[33][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[33][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[33][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[33][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[33] = choices[33][0];
 units[33] = "15";
 comments[33] = "Id Pregunta: 117. ";
 preguntaids[33] = 117


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la respuesta falsa:";
 choices[34]= new Array();
 choices[34][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[34][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[34][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[34][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[34] = choices[34][3];
 units[34] = "5";
 comments[34] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[34] = 281


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[35]= new Array();
 choices[35][0] = "Tiene car&aacute;cter facultativo.";
 choices[35][1] = "Tiene car&aacute;cter potestativo. ";
 choices[35][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[35][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[35] = choices[35][1];
 units[35] = "22";
 comments[35] = "Id Pregunta: 127. ";
 preguntaids[35] = 127


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[36]= new Array();
 choices[36][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[36][1] = "Implantar el mercado general europeo";
 choices[36][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[36][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[36] = choices[36][1];
 units[36] = "19";
 comments[36] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[36] = 758


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[37]= new Array();
 choices[37][0] = "Maximizar el valor para los clientes";
 choices[37][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[37][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[37][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[37] = choices[37][3];
 units[37] = "34";
 comments[37] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[37] = 718


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[38]= new Array();
 choices[38][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[38][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[38][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[38][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[38] = choices[38][0];
 units[38] = "14";
 comments[38] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";
 preguntaids[38] = 386


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[39]= new Array();
 choices[39][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[39][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[39][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[39][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[39] = choices[39][3];
 units[39] = "7";
 comments[39] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[39] = 670


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[40]= new Array();
 choices[40][0] = "El Ministro de Econom&iacute;a.";
 choices[40][1] = "El Gobierno.";
 choices[40][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[40][3] = "El Presidente del Gobierno.";
 answers[40] = choices[40][1];
 units[40] = "10";
 comments[40] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";
 preguntaids[40] = 472


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[41]= "42)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[41]= new Array();
 choices[41][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[41][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[41][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[41][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 186. CONSTITUCION1978";
 preguntaids[41] = 186


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[42]= new Array();
 choices[42][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[42][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[42][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[42][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 178. CONSTITUCION1978";
 preguntaids[42] = 178


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[43]= "44)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[43]= new Array();
 choices[43][0] = "6 TB.";
 choices[43][1] = "5 TB.";
 choices[43][2] = "7 TB.";
 choices[43][3] = "3 TB.";
 answers[43] = choices[43][1];
 units[43] = "53";
 comments[43] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[43] = 854


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[44]= new Array();
 choices[44][0] = "De los derechos y deberes fundamentales.";
 choices[44][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[44][2] = "Derechos y libertades.";
 choices[44][3] = "De la Corona.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 245. CONSTITUCION1978";
 preguntaids[44] = 245


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[45]= "46)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[45]= new Array();
 choices[45][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[45][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[45][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[45][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[45] = choices[45][3];
 units[45] = "12";
 comments[45] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[45] = 132


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[46]= "47)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[46]= new Array();
 choices[46][0] = "Diez art&iacute;culos.";
 choices[46][1] = "Nueve art&iacute;culos.";
 choices[46][2] = "Once art&iacute;culos.";
 choices[46][3] = "Ocho art&iacute;culos.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 269. CONSTITUCION1978";
 preguntaids[46] = 269


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[47]= new Array();
 choices[47][0] = "las Cortes generales.";
 choices[47][1] = "los partidos pol&iacute;ticos.";
 choices[47][2] = "los sindicatos.";
 choices[47][3] = "las Comunidades Aut&oacute;nomas.";
 answers[47] = choices[47][1];
 units[47] = "1";
 comments[47] = "Id Pregunta: 225. CONSTITUCION1978";
 preguntaids[47] = 225


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[48]= "49)  La Poblaci&oacute;n Activa incluye a:";
 choices[48]= new Array();
 choices[48][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[48][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[48][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[48][3] = "Todo aquel que desea trabajar";
 answers[48] = choices[48][2];
 units[48] = "15";
 comments[48] = "Id Pregunta: 110. ";
 preguntaids[48] = 110


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[49]= "50)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[49]= new Array();
 choices[49][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[49][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[49][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[49][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "57";
 comments[49] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[49] = 638


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[50]= new Array();
 choices[50][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[50][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[50][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[50][3] = "Todos los anteriores";
 answers[50] = choices[50][3];
 units[50] = "19";
 comments[50] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[50] = 592


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[51]= "52)  En qu&eacute; consiste el principio BASE:";
 choices[51]= new Array();
 choices[51][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[51][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[51][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[51][3] = "Todas las anteriores son falsas";
 answers[51] = choices[51][3];
 units[51] = "73";
 comments[51] = "Id Pregunta: 103. ";
 preguntaids[51] = 103


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[52]= "53)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[52]= new Array();
 choices[52][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[52][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[52][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[52][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[52] = choices[52][0];
 units[52] = "45";
 comments[52] = "Id Pregunta: 850. Xunta de Galicia 2015";
 preguntaids[52] = 850


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[53]= "54)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[53]= new Array();
 choices[53][0] = "formular solicitudes";
 choices[53][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[53][2] = "presentar declaraciones responsables o comunicaciones";
 choices[53][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[53] = choices[53][1];
 units[53] = "7";
 comments[53] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[53] = 531


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[54]= new Array();
 choices[54][0] = "Las Cortes Generales.";
 choices[54][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[54][2] = "El Gobierno.";
 choices[54][3] = "El Congreso de los Diputados.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[54] = 489


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[55]= "56)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[55]= new Array();
 choices[55][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[55][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[55][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[55][3] = "Todas son correctas.";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[55] = 834


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[56]= "57)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[56]= new Array();
 choices[56][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[56][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[56][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[56][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[56] = choices[56][0];
 units[56] = "34, 84";
 comments[56] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[56] = 727


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "De la C&aacute;mara respectiva.";
 choices[57][1] = "Del Rey.";
 choices[57][2] = "Del Tribunal Constitucional.";
 choices[57][3] = "Del Tribunal Supremo.";
 answers[57] = choices[57][0];
 units[57] = "1";
 comments[57] = "Id Pregunta: 223. CONSTITUCION1978";
 preguntaids[57] = 223


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[58]= new Array();
 choices[58][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[58][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[58][2] = "Servicio de seguridad gestionada";
 choices[58][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[58] = choices[58][1];
 units[58] = "26";
 comments[58] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[58] = 58


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[59][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[59][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[59][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 681. Pensiones";
 preguntaids[59] = 681


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[60]= new Array();
 choices[60][0] = "Selenium";
 choices[60][1] = "JUnit";
 choices[60][2] = "Jenkins";
 choices[60][3] = "JMeter";
 answers[60] = choices[60][2];
 units[60] = "92";
 comments[60] = "Id Pregunta: 703. INTEGRACION CONTINUA";
 preguntaids[60] = 703


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[61]= new Array();
 choices[61][0] = "Cinco.";
 choices[61][1] = "Dos.";
 choices[61][2] = "Cuatro.";
 choices[61][3] = "Siete.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[61] = 213


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[62]= new Array();
 choices[62][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[62][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[62][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[62][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[62] = choices[62][2];
 units[62] = "47";
 comments[62] = "Id Pregunta: 77. AGE A1 2015";
 preguntaids[62] = 77


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[63][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[63][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[63][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[63] = 201


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Lollipop";
 choices[64][1] = "Jelly Bean";
 choices[64][2] = "Marshmallow";
 choices[64][3] = "KitKat";
 answers[64] = choices[64][2];
 units[64] = "59";
 comments[64] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[64] = 61


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[65]= "66)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[65]= new Array();
 choices[65][0] = "El Rey.";
 choices[65][1] = "El Jefe del Estado.";
 choices[65][2] = "El Gobierno.";
 choices[65][3] = "El Presidente del Gobierno.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[65] = 208


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[66]= "67)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[66]= new Array();
 choices[66][0] = "La Ley General Tributaria.";
 choices[66][1] = "La Ley Presupuestaria.";
 choices[66][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[66][3] = "Ninguna de las respuestas es correcta.";
 answers[66] = choices[66][0];
 units[66] = "10";
 comments[66] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[66] = 488


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[67]= new Array();
 choices[67][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[67][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[67][2] = "Fomentar el despliegue de redes y servicios";
 choices[67][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[67] = choices[67][0];
 units[67] = "19";
 comments[67] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[67] = 754


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[68][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[68][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[68][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[68] = choices[68][2];
 units[68] = "48";
 comments[68] = "Id Pregunta: 87. AGE A1 2015";
 preguntaids[68] = 87


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[69]= "70)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[69]= new Array();
 choices[69][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[69][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[69][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[69][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";
 preguntaids[69] = 160


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[70]= "71)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[70]= new Array();
 choices[70][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[70][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[70][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[70][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[70] = 191


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[71]= "72)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[71]= new Array();
 choices[71][0] = "Transparencia e innovaci&oacute;n";
 choices[71][1] = "Seguridad y reutilizaci&oacute;n";
 choices[71][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[71][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[71] = choices[71][3];
 units[71] = "28";
 comments[71] = "Id Pregunta: 743. Estrategia TIC";
 preguntaids[71] = 743


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta falsa:";
 choices[72]= new Array();
 choices[72][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[72][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[72][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[72][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[72] = 284


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[73]= "74)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[73]= new Array();
 choices[73][0] = "los Secretarios generales t&eacute;cnicos";
 choices[73][1] = "los Directores generales";
 choices[73][2] = "los Secretarios generales";
 choices[73][3] = "los Subsecretarios";
 answers[73] = choices[73][1];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 807. Ley 40/2015";
 preguntaids[73] = 807


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[74]= new Array();
 choices[74][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[74][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[74][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[74][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[74] = choices[74][3];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[74] = 733


