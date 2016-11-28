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

//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[0]= "1)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[0]= new Array();
 choices[0][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[0][1] = "Uno de sus miembros.";
 choices[0][2] = "La Comisi&oacute;n.";
 choices[0][3] = "Todas las respuestas son correctas.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[1]= "2)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[1]= new Array();
 choices[1][0] = "El Tratado de Maastrich.";
 choices[1][1] = "El Tratado de Amsterdam.";
 choices[1][2] = "El Tratado de Par&iacute;s.";
 choices[1][3] = "El Tratado de Roma.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[2]= "3)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[2]= new Array();
 choices[2][0] = "Pas&oacute; de 518 a 626.";
 choices[2][1] = "Pas&oacute; de 434 a 518.";
 choices[2][2] = "Pas&oacute; de 345 a 512.";
 choices[2][3] = "Pas&oacute; de 435 a 610.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[3]= new Array();
 choices[3][0] = "Quince miembros.";
 choices[3][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[3][2] = "Los miembros que determine el Consejo.";
 choices[3][3] = "Un Presidente y quince miembros.";
 answers[3] = choices[3][1];
 units[3] = "5";
 comments[3] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[4]= "5)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[4]= new Array();
 choices[4][0] = "Seis a&ntilde;os.";
 choices[4][1] = "Cinco a&ntilde;os.";
 choices[4][2] = "Cuatro a&ntilde;os.";
 choices[4][3] = "Ocho a&ntilde;os.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[5]= "6)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[5]= new Array();
 choices[5][0] = "Estrasburgo.";
 choices[5][1] = "Bruselas.";
 choices[5][2] = "Luxemburgo.";
 choices[5][3] = "Holanda.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[6]= "7)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[6]= new Array();
 choices[6][0] = "Tres a&ntilde;os.";
 choices[6][1] = "Dos a&ntilde;os y medio.";
 choices[6][2] = "Cinco a&ntilde;os.";
 choices[6][3] = "Seis a&ntilde;os.";
 answers[6] = choices[6][3];
 units[6] = "5";
 comments[6] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[7]= "8)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[7]= new Array();
 choices[7][0] = "La Comisi&oacute;n Europea.";
 choices[7][1] = "El Consejo Europeo.";
 choices[7][2] = "El Consejo de Europa.";
 choices[7][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[8]= new Array();
 choices[8][0] = "Al Consejo Europeo.";
 choices[8][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[8][2] = "A la Comisi&oacute;n Europea.";
 choices[8][3] = "Al Parlamento Europeo.";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[9]= "10)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[9]= new Array();
 choices[9][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[9][1] = "Unanimidad.";
 choices[9][2] = "Mayor&iacute;a cualificada.";
 choices[9][3] = "Mayor&iacute;a simple.";
 answers[9] = choices[9][3];
 units[9] = "5";
 comments[9] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[10]= "11)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[10]= new Array();
 choices[10][0] = "Tres a&ntilde;os.";
 choices[10][1] = "Dos a&ntilde;os y medio.";
 choices[10][2] = "Cinco a&ntilde;os.";
 choices[10][3] = "Seis a&ntilde;os.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[11]= new Array();
 choices[11][0] = "Al Consejo Europeo.";
 choices[11][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[11][2] = "A la Comisi&oacute;n Europea.";
 choices[11][3] = "Al Parlamento Europeo.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[12]= new Array();
 choices[12][0] = "No se aplican directamente en los Estados.";
 choices[12][1] = "No son vinculantes.";
 choices[12][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[12][3] = "Tienen alcance general.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[13]= "14)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[13]= new Array();
 choices[13][0] = "Un Reglamento.";
 choices[13][1] = "Un Decreto.";
 choices[13][2] = "Una Ley.";
 choices[13][3] = "Un Real-Decreto.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[14]= "15)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[14]= new Array();
 choices[14][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[14][1] = "Ninguna de las respuestas es correcta.";
 choices[14][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[14][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[15]= "16)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[15]= new Array();
 choices[15][0] = "623";
 choices[15][1] = "649";
 choices[15][2] = "626";
 choices[15][3] = "565";
 answers[15] = choices[15][2];
 units[15] = "5";
 comments[15] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[16]= "17)  El Tribunal de Justicia se cre&oacute; en:";
 choices[16]= new Array();
 choices[16][0] = "El Tratado de la CECA.";
 choices[16][1] = "El Tratado de Niza.";
 choices[16][2] = "El Tratado de &Aacute;msterdam.";
 choices[16][3] = "El Tratado de Lisboa.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[17]= "18)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[17]= new Array();
 choices[17][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[17][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[17][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[17][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[17] = choices[17][2];
 units[17] = "5";
 comments[17] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[18]= "19)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[18]= new Array();
 choices[18][0] = "Un recurso de incumplimiento.";
 choices[18][1] = "Recurso de carencia.";
 choices[18][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[18][3] = "Ninguna es correcta.";
 answers[18] = choices[18][2];
 units[18] = "5";
 comments[18] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[19]= "20)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[19]= new Array();
 choices[19][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[19][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[19][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[19][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la respuesta falsa:";
 choices[20]= new Array();
 choices[20][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[20][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[20][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[20][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[21]= "22)  Sobre el Plan Juncker:";
 choices[21]= new Array();
 choices[21][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[21][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[21][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[21][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[22]= "23)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[22]= new Array();
 choices[22][0] = "Por unanimidad.";
 choices[22][1] = "Por mayor&iacute;a cualificada.";
 choices[22][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[22][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[23]= "24)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[23]= new Array();
 choices[23][0] = "Las instituciones comunitarias.";
 choices[23][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[23][2] = "Los Estados miembros.";
 choices[23][3] = "Los nacionales de los Estados miembros.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[24]= "25)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[24]= new Array();
 choices[24][0] = "Son actos individuales no normativos.";
 choices[24][1] = "Poseen alcance general.";
 choices[24][2] = "Son actos normativos.";
 choices[24][3] = "No son obligatorias.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[25]= new Array();
 choices[25][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[25][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[25][2] = "la falta de interoperabilidad.";
 choices[25][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[25] = choices[25][1];
 units[25] = "5";
 comments[25] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[26]= "27)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[26]= new Array();
 choices[26][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[26][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[26][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[27]= "28)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[27]= new Array();
 choices[27][0] = "Acuerdos cualificados.";
 choices[27][1] = "Acuerdos ponderados.";
 choices[27][2] = "Valoraci&oacute;n de los votos.";
 choices[27][3] = "Ponderaci&oacute;n de los votos.";
 answers[27] = choices[27][3];
 units[27] = "5";
 comments[27] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[28]= "29)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[28]= new Array();
 choices[28][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[28][1] = "Personas con nacionalidad europea.";
 choices[28][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[28][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[28] = choices[28][3];
 units[28] = "5";
 comments[28] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[29]= "30)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[29]= new Array();
 choices[29][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[29][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[29][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[29][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[30]= new Array();
 choices[30][0] = "Al Consejo Europeo.";
 choices[30][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[30][2] = "A la Comisi&oacute;n Europea.";
 choices[30][3] = "Al Parlamento Europeo.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[31]= new Array();
 choices[31][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[31][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[31][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[31][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[32]= "33)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[32]= new Array();
 choices[32][0] = "El Presidente del Consejo Europeo.";
 choices[32][1] = "La Comisi&oacute;n.";
 choices[32][2] = "El Consejo.";
 choices[32][3] = "El Parlamento Europeo.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[33]= new Array();
 choices[33][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[33][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[33][2] = "c) Todas las respuestas son correctas.";
 choices[33][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[34]= "35)  El Tribunal de Justicia est&aacute; formado por:";
 choices[34]= new Array();
 choices[34][0] = "Un Juez de cada Estado miembro.";
 choices[34][1] = "Por dos Jueces de cada Estado miembro.";
 choices[34][2] = "Por veinte Jueces.";
 choices[34][3] = "Por ocho Jueces.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[35]= new Array();
 choices[35][0] = "Al Consejo Europeo.";
 choices[35][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[35][2] = "A la Comisi&oacute;n Europea.";
 choices[35][3] = "Al Parlamento Europeo.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[36]= "37)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[36]= new Array();
 choices[36][0] = "20 parlamentarios.";
 choices[36][1] = "29 parlamentarios.";
 choices[36][2] = "18 parlamentarios.";
 choices[36][3] = "23 parlamentarios.";
 answers[36] = choices[36][0];
 units[36] = "5";
 comments[36] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[37]= "38)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[37]= new Array();
 choices[37][0] = "Estrasburgo.";
 choices[37][1] = "Bruselas.";
 choices[37][2] = "Luxemburgo.";
 choices[37][3] = "Holanda.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[38]= "39)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[38]= new Array();
 choices[38][0] = "Cinco a&ntilde;os.";
 choices[38][1] = "Cuatro a&ntilde;os.";
 choices[38][2] = "Tres a&ntilde;os.";
 choices[38][3] = "Seis meses.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[39]= "40)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[39]= new Array();
 choices[39][0] = "Tener una estructura institucional.";
 choices[39][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[39][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[39][3] = "Todas las respuestas son correctas.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[40]= "41)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[40]= new Array();
 choices[40][0] = "Consejos y Servicios.";
 choices[40][1] = "Servicios permanentes y no permanentes.";
 choices[40][2] = "Direcciones Generales.";
 choices[40][3] = "Direcciones ministeriales.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[41]= "42)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[41]= new Array();
 choices[41][0] = "Son vinculantes solamente.";
 choices[41][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[41][2] = "Son preceptivos y vinculantes.";
 choices[41][3] = "Son preceptivos y no vinculantes.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[42]= "43)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[42]= new Array();
 choices[42][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[42][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[42][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[42][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[43]= new Array();
 choices[43][0] = "732";
 choices[43][1] = "626";
 choices[43][2] = "786";
 choices[43][3] = "360";
 answers[43] = choices[43][2];
 units[43] = "5";
 comments[43] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[44]= "45)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[44]= new Array();
 choices[44][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[44][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[44][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[44][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[45]= "46)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[45]= new Array();
 choices[45][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[45][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[45][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[45][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la respuesta correcta:";
 choices[46]= new Array();
 choices[46][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[46][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[46][2] = "Las respuestas A y B son correctas.";
 choices[46][3] = "Las respuestas A y B son falsas.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[47]= "48)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[47]= new Array();
 choices[47][0] = "Los propios miembros del Tribunal.";
 choices[47][1] = "El Consejo de Europa.";
 choices[47][2] = "El Consejo Europeo.";
 choices[47][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[47] = choices[47][0];
 units[47] = "5";
 comments[47] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[48]= new Array();
 choices[48][0] = "Estrasburgo.";
 choices[48][1] = "Bruselas.";
 choices[48][2] = "Luxemburgo.";
 choices[48][3] = "Par&iacute;s.";
 answers[48] = choices[48][1];
 units[48] = "5";
 comments[48] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[49]= new Array();
 choices[49][0] = "Versi&oacute;n digital prioritaria.";
 choices[49][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[49][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[49][3] = "Apertura y transparencia.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[50]= new Array();
 choices[50][0] = "El Parlamento y el Consejo.";
 choices[50][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[50][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[50][3] = "La Comisi&oacute;n y el Consejo.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[51]= new Array();
 choices[51][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[51][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[51][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[51][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[51] = choices[51][3];
 units[51] = "5";
 comments[51] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[52]= "53)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[52]= new Array();
 choices[52][0] = "786 Diputados como m&aacute;ximo.";
 choices[52][1] = "600 Diputados como m&aacute;ximo.";
 choices[52][2] = "650 Diputados como m&aacute;ximo.";
 choices[52][3] = "732 Diputados como m&aacute;ximo.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[53]= new Array();
 choices[53][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[53][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[53][2] = "Todas son correctas.";
 choices[53][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 330. UNION EUROPEA";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[54]= new Array();
 choices[54][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[54][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[54][2] = "Iniciativa europea de libre flujo de datos.";
 choices[54][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[55]= "56)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[55]= new Array();
 choices[55][0] = "90";
 choices[55][1] = "50";
 choices[55][2] = "64";
 choices[55][3] = "60";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[56]= new Array();
 choices[56][0] = "El Consejo Europeo.";
 choices[56][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[56][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[56][3] = "El Parlamento Europeo.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[57]= new Array();
 choices[57][0] = "Veinticinco.";
 choices[57][1] = "Veintisiete.";
 choices[57][2] = "Veintinueve.";
 choices[57][3] = "Cuarenta y uno.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[58]= "59)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[58]= new Array();
 choices[58][0] = "X.";
 choices[58][1] = "XIX.";
 choices[58][2] = "XV.";
 choices[58][3] = "XIII.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[59]= "60)  La sede del Parlamento Europeo se encuentra en:";
 choices[59]= new Array();
 choices[59][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[59][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[59][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[59][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[60]= "61)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[60]= new Array();
 choices[60][0] = "Son actos normativos.";
 choices[60][1] = "Poseen alcance general.";
 choices[60][2] = "No son obligatorias.";
 choices[60][3] = "Son actos individuales no normativos.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[61]= "62)  Componen la Comisi&oacute;n Europea:";
 choices[61]= new Array();
 choices[61][0] = "Un Comisario por cada Estado miembro.";
 choices[61][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[61][2] = "Dos Comisarios por cada Estado miembro.";
 choices[61][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[62]= new Array();
 choices[62][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[62][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[62][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[62][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[63]= "64)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[63]= new Array();
 choices[63][0] = "Presentar la moci&oacute;n de censura.";
 choices[63][1] = "Presidir las sesiones del Parlamento.";
 choices[63][2] = "Organizar la Secretar&iacute;a General.";
 choices[63][3] = "Preparar las actividades de las Comisiones.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[64]= "65)  Los Reglamentos no se caracterizan por:";
 choices[64]= new Array();
 choices[64][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[64][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[64][2] = "Ser obligatorios.";
 choices[64][3] = "No poseer alcance general.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[65]= new Array();
 choices[65][0] = "Veinticinco.";
 choices[65][1] = "Veintiuno.";
 choices[65][2] = "Dieciocho.";
 choices[65][3] = "Diecinueve.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[66]= "67)  El Parlamento Europeo celebrar&aacute;:";
 choices[66]= new Array();
 choices[66][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[66][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[66][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[66][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[67]= "68)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[67]= new Array();
 choices[67][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[67][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[67][2] = "Cinco a&ntilde;os.";
 choices[67][3] = "Ninguna es correcta.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[68]= new Array();
 choices[68][0] = "El Parlamento y el Consejo.";
 choices[68][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[68][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[68][3] = "La Comisi&oacute;n y el Consejo.";
 answers[68] = choices[68][2];
 units[68] = "5";
 comments[68] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[69]= new Array();
 choices[69][0] = "El 1 de noviembre de 1994.";
 choices[69][1] = "El 1 de noviembre de 1992.";
 choices[69][2] = "El 1 de noviembre de 1995.";
 choices[69][3] = "El 1 de noviembre de 1993.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[70]= new Array();
 choices[70][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[70][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[70][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[70][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[70] = choices[70][0];
 units[70] = "5";
 comments[70] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[71]= new Array();
 choices[71][0] = "Crecimiento inteligente.";
 choices[71][1] = "Crecimiento inclusivo.";
 choices[71][2] = "Crecimiento sostenible.";
 choices[71][3] = "Crecimiento integrador.";
 answers[71] = choices[71][1];
 units[71] = "5";
 comments[71] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[72]= "73)  Los Reglamentos no se caracterizan por:";
 choices[72]= new Array();
 choices[72][0] = "No poseer alcance general.";
 choices[72][1] = "Ser obligatorios.";
 choices[72][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[72][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[73]= "74)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[73]= new Array();
 choices[73][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[73][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[73][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[73][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[74]= new Array();
 choices[74][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[74][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[74][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[74][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 298. UNION EUROPEA";


