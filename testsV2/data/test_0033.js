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

//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[0]= "1)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[0]= new Array();
 choices[0][0] = "por Real Decreto";
 choices[0][1] = "reglamentariamente";
 choices[0][2] = "mediante Ley";
 choices[0][3] = "ninguna es correcta";
 answers[0] = choices[0][1];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[0] = 817


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[1]= "2)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Paging";
 choices[1][1] = "Roaming";
 choices[1][2] = "Handover";
 choices[1][3] = "Trunking";
 answers[1] = choices[1][0];
 units[1] = "117";
 comments[1] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[1] = 10


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[2]= new Array();
 choices[2][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[2][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[2][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[2][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[2] = choices[2][2];
 units[2] = "85";
 comments[2] = "Id Pregunta: 620. Junta de Extremadura A1 2015";
 preguntaids[2] = 620


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[3]= new Array();
 choices[3][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[3][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[3][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[3][3] = "La tasa de desempleo ronda el 20%";
 answers[3] = choices[3][2];
 units[3] = "12";
 comments[3] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[3] = 572


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[4]= new Array();
 choices[4][0] = "De los derechos y deberes fundamentales.";
 choices[4][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[4][2] = "Derechos y libertades.";
 choices[4][3] = "De la Corona.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 245. CONSTITUCION1978";
 preguntaids[4] = 245


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[5]= "6)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[5]= new Array();
 choices[5][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[5][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[5][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[5][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[5] = 205


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[6]= "7)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[6]= new Array();
 choices[6][0] = "Interoperabilidad";
 choices[6][1] = "Integridad";
 choices[6][2] = "Capital humano";
 choices[6][3] = "Trazabilidad";
 answers[6] = choices[6][2];
 units[6] = "19";
 comments[6] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[6] = 166


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[7]= new Array();
 choices[7][0] = "En 2011";
 choices[7][1] = "En 2013";
 choices[7][2] = "En 2015";
 choices[7][3] = "En 2016";
 answers[7] = choices[7][2];
 units[7] = "17";
 comments[7] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[7] = 763


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[8]= new Array();
 choices[8][0] = "Anual.";
 choices[8][1] = "Semestral.";
 choices[8][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[8][3] = "Bienal.";
 answers[8] = choices[8][2];
 units[8] = "14";
 comments[8] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";
 preguntaids[8] = 379


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[9]= new Array();
 choices[9][0] = "Ley 50/1997, del Gobierno.";
 choices[9][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[9][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[9][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[9] = choices[9][1];
 units[9] = "10";
 comments[9] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[9] = 475


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[10][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[10][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[10][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[10] = 505


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[11]= "12)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[11]= new Array();
 choices[11][0] = "A la persona demandante.";
 choices[11][1] = "A la persona demandada.";
 choices[11][2] = "Al &oacute;rgano judicial.";
 choices[11][3] = "Al &oacute;rgano administrativo.";
 answers[11] = choices[11][1];
 units[11] = "14";
 comments[11] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[11] = 400


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la respuesta falsa:";
 choices[12]= new Array();
 choices[12][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[12][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[12][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[12][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[12] = 284


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[13]= "14)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[13]= new Array();
 choices[13][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[13][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[13][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[13][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[13] = 466


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[14]= "15)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[14]= new Array();
 choices[14][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[14][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[14][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[14][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[14] = choices[14][2];
 units[14] = "12";
 comments[14] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[14] = 136


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[15]= new Array();
 choices[15][0] = "Constitucional.";
 choices[15][1] = "Penal.";
 choices[15][2] = "Militar.";
 choices[15][3] = "Tribunales consuetudinarios.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 262. CONSTITUCION1978";
 preguntaids[15] = 262


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[16]= "17)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[16][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[16][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[16][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[16] = choices[16][3];
 units[16] = "22";
 comments[16] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[16] = 712


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[17]= "18)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[17]= new Array();
 choices[17][0] = "90";
 choices[17][1] = "50";
 choices[17][2] = "64";
 choices[17][3] = "60";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 331. UNION EUROPEA";
 preguntaids[17] = 331


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[18]= "19)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "la Administraci&oacute;n General del Estado";
 choices[18][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[18][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[18][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[18] = choices[18][3];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[18] = 769


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[19]= new Array();
 choices[19][0] = "Neo4J ";
 choices[19][1] = "OrientDB ";
 choices[19][2] = "InfoGrid ";
 choices[19][3] = "SimpleDB";
 answers[19] = choices[19][3];
 units[19] = "73";
 comments[19] = "Id Pregunta: 655. ";
 preguntaids[19] = 655


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[20]= "21)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[20]= new Array();
 choices[20][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[20][1] = "Ninguna de las respuestas es correcta.";
 choices[20][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[20][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[20] = 334


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[21]= "22)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[21]= new Array();
 choices[21][0] = "786 Diputados como m&aacute;ximo.";
 choices[21][1] = "600 Diputados como m&aacute;ximo.";
 choices[21][2] = "650 Diputados como m&aacute;ximo.";
 choices[21][3] = "732 Diputados como m&aacute;ximo.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[21] = 360


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[22]= new Array();
 choices[22][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[22][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[22][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[22][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[22] = choices[22][0];
 units[22] = "14";
 comments[22] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[22] = 393


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[23]= "24)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[23][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[23][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[23][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[23] = 270


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[24]= "25)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[24]= new Array();
 choices[24][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[24][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[24][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[24][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[24] = 821


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[25]= "26)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[25]= new Array();
 choices[25][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[25][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[25][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[25][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[25] = 190


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[26]= new Array();
 choices[26][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[26][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[26][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[26][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[26] = choices[26][1];
 units[26] = "44";
 comments[26] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[26] = 73


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[27]= new Array();
 choices[27][0] = "Cinco.";
 choices[27][1] = "Dos.";
 choices[27][2] = "Cuatro.";
 choices[27][3] = "Siete.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[27] = 213


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[28]= new Array();
 choices[28][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[28][1] = "La delimitaci&oacute;n de su territorio.";
 choices[28][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[28][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[28] = 228


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[29]= new Array();
 choices[29][0] = "Bienalmente";
 choices[29][1] = "Anualmente";
 choices[29][2] = "Semestralmente";
 choices[29][3] = "Cada cuatro a&ntilde;os";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[29] = 586


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[30]= "31)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[30]= new Array();
 choices[30][0] = "El presidente de las Cortes Generales.";
 choices[30][1] = "El Presidente del Gobierno.";
 choices[30][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[30][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[30] = choices[30][3];
 units[30] = "10";
 comments[30] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[30] = 502


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[31]= "32)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Anualmente.";
 choices[31][1] = "Ninguna de las respuestas es correcta.";
 choices[31][2] = "Trimestralmente.";
 choices[31][3] = "Semestralmente.";
 answers[31] = choices[31][0];
 units[31] = "10";
 comments[31] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[31] = 477


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[32]= "33)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[32]= new Array();
 choices[32][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[32][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[32][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[32][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[32] = choices[32][2];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[32] = 784


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[33]= new Array();
 choices[33][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[33][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[33][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[33][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[33] = choices[33][1];
 units[33] = "92";
 comments[33] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[33] = 698


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[34]= "35)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[34]= new Array();
 choices[34][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[34][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[34][2] = "A partir del 1 de enero de 2015";
 choices[34][3] = "A partir del 1 de julio de 2016";
 answers[34] = choices[34][1];
 units[34] = "77";
 comments[34] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[34] = 692


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[35]= "36)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[35]= new Array();
 choices[35][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[35][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[35][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[35][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[35] = choices[35][3];
 units[35] = "12";
 comments[35] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[35] = 130


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[36]= "37)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[36]= new Array();
 choices[36][0] = "La Ley Org&aacute;nica 2/2011";
 choices[36][1] = "La Ley Org&aacute;nica 2/2012";
 choices[36][2] = "La Ley Org&aacute;nica 3/2012";
 choices[36][3] = "La Ley Org&aacute;nica 2/2002";
 answers[36] = choices[36][1];
 units[36] = "12";
 comments[36] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[36] = 138


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[37]= new Array();
 choices[37][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[37][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[37][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[37][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[37] = choices[37][2];
 units[37] = "22";
 comments[37] = "Id Pregunta: 129. ";
 preguntaids[37] = 129


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[38]= new Array();
 choices[38][0] = "a) Los cuatro ejercicios siguientes.";
 choices[38][1] = "b) El ejercicio siguiente.";
 choices[38][2] = "c) Los dos ejercicios siguientes.";
 choices[38][3] = "d) Los tres ejercicios siguientes.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[38] = 458


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[39]= "40)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[39]= new Array();
 choices[39][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[39][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[39][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[39][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 59. AGE A1 2015";
 preguntaids[39] = 59


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[40]= new Array();
 choices[40][0] = "las personas jur&iacute;dicas ";
 choices[40][1] = "las entidades con personalidad jur&iacute;dica";
 choices[40][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[40][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[40] = 151


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[41]= new Array();
 choices[41][0] = "Cincuenta y cuatro.";
 choices[41][1] = "Cincuenta.";
 choices[41][2] = "Cincuenta y cinco.";
 choices[41][3] = "Cincuenta y dos.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 321. UNION EUROPEA";
 preguntaids[41] = 321


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[42]= "43)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[42]= new Array();
 choices[42][0] = "Son actos normativos.";
 choices[42][1] = "Poseen alcance general.";
 choices[42][2] = "No son obligatorias.";
 choices[42][3] = "Son actos individuales no normativos.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 362. UNION EUROPEA";
 preguntaids[42] = 362


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[43]= "44)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[43]= new Array();
 choices[43][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[43][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[43][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[43][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[43] = choices[43][3];
 units[43] = "10";
 comments[43] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[43] = 507


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[44]= new Array();
 choices[44][0] = "Orientaci&oacute;n a objetos";
 choices[44][1] = "MapReduce";
 choices[44][2] = "Pipeline filtering";
 choices[44][3] = "Programaci&oacute;n funcional";
 answers[44] = choices[44][1];
 units[44] = "73";
 comments[44] = "Id Pregunta: 661. ";
 preguntaids[44] = 661


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[45]= new Array();
 choices[45][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[45][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[45][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[45][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[45] = choices[45][3];
 units[45] = "22";
 comments[45] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[45] = 714


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[46]= new Array();
 choices[46][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[46][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[46][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[46][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[46] = choices[46][1];
 units[46] = "43";
 comments[46] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[46] = 443


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[47]= "48)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[47]= new Array();
 choices[47][0] = "Infrastructure as a Service (IaaS)";
 choices[47][1] = "Platform as a Service (PaaS)";
 choices[47][2] = "Software as a Service (SaaS)";
 choices[47][3] = "Application as a Service (AaaS)";
 answers[47] = choices[47][1];
 units[47] = "52";
 comments[47] = "Id Pregunta: 63. AGE A1 2015";
 preguntaids[47] = 63


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[48]= new Array();
 choices[48][0] = "Cuatro.";
 choices[48][1] = "Ninguno.";
 choices[48][2] = "Dos.";
 choices[48][3] = "Seis.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[48] = 211


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[49]= new Array();
 choices[49][0] = "Perceptible";
 choices[49][1] = "Operable";
 choices[49][2] = "Comprensible";
 choices[49][3] = "Robusto";
 answers[49] = choices[49][2];
 units[49] = "42";
 comments[49] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[49] = 83


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[50]= new Array();
 choices[50][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[50][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[50][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[50][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[50] = choices[50][1];
 units[50] = "92";
 comments[50] = "Id Pregunta: 716. INTEGRACION CONTINUA";
 preguntaids[50] = 716


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[51]= "52)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[51]= new Array();
 choices[51][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[51][1] = "el Consejo de Estado";
 choices[51][2] = "el Congreso";
 choices[51][3] = "las Cortes Generales";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[51] = 785


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[52]= "53)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[52]= new Array();
 choices[52][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[52][1] = "Static &amp; Active process for REsolution Bank.";
 choices[52][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[52][3] = "Super Active REsponse for Banks";
 answers[52] = choices[52][0];
 units[52] = "12";
 comments[52] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[52] = 139


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[53]= "54)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[53]= new Array();
 choices[53][0] = "ISO/IEC 25000";
 choices[53][1] = "ISO/IEC 27000";
 choices[53][2] = "ISO 9000";
 choices[53][3] = "ISO 9001";
 answers[53] = choices[53][0];
 units[53] = "93";
 comments[53] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[53] = 52


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[54]= new Array();
 choices[54][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[54][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[54][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[54][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[54] = choices[54][3];
 units[54] = "19";
 comments[54] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[54] = 171


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[55]= "56)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[55]= new Array();
 choices[55][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[55][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[55][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[55][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[55] = choices[55][3];
 units[55] = "101";
 comments[55] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[55] = 57


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[56]= new Array();
 choices[56][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[56][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[56][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[56][3] = "El Senado se compone de 350 senadores.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[56] = 212


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[57]= "58)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[57]= new Array();
 choices[57][0] = "&oacute;rganos superiores";
 choices[57][1] = "&oacute;rganos directivos";
 choices[57][2] = "&oacute;rganos superiores y directivos";
 choices[57][3] = "ninguna es correcta";
 answers[57] = choices[57][1];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[57] = 796


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Universidades p&uacute;blicas:";
 choices[58]= new Array();
 choices[58][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[58][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[58][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[58][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[58] = 518


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[59]= "60)  La recusaci&oacute;n se plantear&aacute;...";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo verbalmente";
 choices[59][1] = "S&oacute;lo por escrito";
 choices[59][2] = "Verbalmente o por escrito";
 choices[59][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[59] = 830


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[60]= new Array();
 choices[60][0] = "Establecer redes de telecomunicaciones continentales";
 choices[60][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[60][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[60][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[60] = choices[60][0];
 units[60] = "17";
 comments[60] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[60] = 554


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[61]= new Array();
 choices[61][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[61][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[61][2] = "El que hubieren designado las Cortes Generales.";
 choices[61][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[61] = choices[61][1];
 units[61] = "1";
 comments[61] = "Id Pregunta: 182. CONSTITUCION1978";
 preguntaids[61] = 182


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[62]= new Array();
 choices[62][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[62][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[62][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[62][3] = "Todas las anteriores son verdaderas.";
 answers[62] = choices[62][3];
 units[62] = "125";
 comments[62] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[62] = 864


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[63]= new Array();
 choices[63][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[63][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[63][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[63][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[63] = choices[63][3];
 units[63] = "106";
 comments[63] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[63] = 74


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[64]= "65)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Un informe de impacto de g&eacute;nero.";
 choices[64][1] = "Un programa de igualdad de oportunidades.";
 choices[64][2] = "Un plan de Igualdad de Oportunidades.";
 choices[64][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[64] = choices[64][0];
 units[64] = "14";
 comments[64] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[64] = 414


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[65]= new Array();
 choices[65][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[65][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[65][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[65][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[65] = choices[65][3];
 units[65] = "10";
 comments[65] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[65] = 465


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[66]= "67)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[66]= new Array();
 choices[66][0] = "Seguridad Social y AEAT";
 choices[66][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[66][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[66][3] = "Todos los anteriores";
 answers[66] = choices[66][3];
 units[66] = "19";
 comments[66] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[66] = 596


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
 preguntaids[67] = 214


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a las unidades administrativas:";
 choices[68]= new Array();
 choices[68][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[68][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[68][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[68][3] = "ninguna es correcta";
 answers[68] = choices[68][1];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[68] = 801


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[69]= "70)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[69]= new Array();
 choices[69][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[69][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[69][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[69][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[69] = choices[69][3];
 units[69] = "14";
 comments[69] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[69] = 380


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[70]= "71)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[70]= new Array();
 choices[70][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[70][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[70][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[70][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[70] = choices[70][3];
 units[70] = "1";
 comments[70] = "Id Pregunta: 253. CONSTITUCION1978";
 preguntaids[70] = 253


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[71]= new Array();
 choices[71][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[71][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[71][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[71] = 588


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[72]= "73)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[72]= new Array();
 choices[72][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[72][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[72][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][0];
 units[72] = "28";
 comments[72] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[72] = 737


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[73]= "74)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[73][1] = "Las inversiones reales y financieras.";
 choices[73][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[73][3] = "Las transferencias de capital y las inversiones reales.";
 answers[73] = choices[73][3];
 units[73] = "10";
 comments[73] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[73] = 471


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[74]= "75)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[74]= new Array();
 choices[74][0] = "6 principios.";
 choices[74][1] = "7 principios.";
 choices[74][2] = "5 principios.";
 choices[74][3] = "6 directrices.";
 answers[74] = choices[74][2];
 units[74] = "28";
 comments[74] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[74] = 738


