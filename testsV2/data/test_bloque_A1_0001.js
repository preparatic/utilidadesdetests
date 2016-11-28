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


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[1]= new Array();
 choices[1][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[1][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[1][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[1][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[2]= "3)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[2]= new Array();
 choices[2][0] = "Los Derechos y Deberes fundamentales.";
 choices[2][1] = "La Corona.";
 choices[2][2] = "El Poder Judicial.";
 choices[2][3] = "Las Cortes Generales.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[3]= "4)  La Administraci&oacute;n General del Estado se organiza:";
 choices[3]= new Array();
 choices[3][0] = "en Ministerios";
 choices[3][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[3][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[3][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[3] = choices[3][1];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[4]= "5)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[4]= new Array();
 choices[4][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[4][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[4][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[4][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[5]= new Array();
 choices[5][0] = "las Cortes generales.";
 choices[5][1] = "los partidos pol&iacute;ticos.";
 choices[5][2] = "los sindicatos.";
 choices[5][3] = "las Comunidades Aut&oacute;nomas.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[6]= "7)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[6]= new Array();
 choices[6][0] = "la poblaci&oacute;n del territorio";
 choices[6][1] = "el volumen de gesti&oacute;n";
 choices[6][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[6][3] = "todas son correctas";
 answers[6] = choices[6][3];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[7]= new Array();
 choices[7][0] = "Dos Cap&iacute;tulos.";
 choices[7][1] = "Tres Cap&iacute;tulos.";
 choices[7][2] = "Un Cap&iacute;tulo.";
 choices[7][3] = "Cuatro Cap&iacute;tulos.";
 answers[7] = choices[7][1];
 units[7] = "1";
 comments[7] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[8]= "9)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[8]= new Array();
 choices[8][0] = "El Tratado de Maastrich.";
 choices[8][1] = "El Tratado de Amsterdam.";
 choices[8][2] = "El Tratado de Par&iacute;s.";
 choices[8][3] = "El Tratado de Roma.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[9]= "10)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[9]= new Array();
 choices[9][0] = "Pas&oacute; de 518 a 626.";
 choices[9][1] = "Pas&oacute; de 434 a 518.";
 choices[9][2] = "Pas&oacute; de 345 a 512.";
 choices[9][3] = "Pas&oacute; de 435 a 610.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[10]= new Array();
 choices[10][0] = "Quince miembros.";
 choices[10][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[10][2] = "Los miembros que determine el Consejo.";
 choices[10][3] = "Un Presidente y quince miembros.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[11]= "12)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[11]= new Array();
 choices[11][0] = "Seis a&ntilde;os.";
 choices[11][1] = "Cinco a&ntilde;os.";
 choices[11][2] = "Cuatro a&ntilde;os.";
 choices[11][3] = "Ocho a&ntilde;os.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[12]= "13)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[12]= new Array();
 choices[12][0] = "Estrasburgo.";
 choices[12][1] = "Bruselas.";
 choices[12][2] = "Luxemburgo.";
 choices[12][3] = "Holanda.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[13]= "14)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[13]= new Array();
 choices[13][0] = "el Gobierno de la Naci&oacute;n";
 choices[13][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[13][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[13][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[14]= "15)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[14]= new Array();
 choices[14][0] = "Tres a&ntilde;os.";
 choices[14][1] = "Dos a&ntilde;os y medio.";
 choices[14][2] = "Cinco a&ntilde;os.";
 choices[14][3] = "Seis a&ntilde;os.";
 answers[14] = choices[14][3];
 units[14] = "5";
 comments[14] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[15]= "16)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[15][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[15][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[15][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[16][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[16][2] = "A y B son correctas.";
 choices[16][3] = "A y B son falsas.";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[17]= "18)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[17]= new Array();
 choices[17][0] = "La Comisi&oacute;n Europea.";
 choices[17][1] = "El Consejo Europeo.";
 choices[17][2] = "El Consejo de Europa.";
 choices[17][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[18]= new Array();
 choices[18][0] = "El Presidente del Senado";
 choices[18][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[18][2] = "El Presidente del Gobierno";
 choices[18][3] = "El Presidente de las Cortes Generales";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[19]= "20)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[19]= new Array();
 choices[19][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[19][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[19][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[20]= "21)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[20]= new Array();
 choices[20][0] = "circulares";
 choices[20][1] = "reglamentos internos";
 choices[20][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[20][3] = "disposiciones de car&aacute;cter general";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[21]= "22)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[21]= new Array();
 choices[21][0] = "Ley Org&aacute;nica.";
 choices[21][1] = "Ley de Bases.";
 choices[21][2] = "Ley ordinaria.";
 choices[21][3] = "Mandato.";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[22]= new Array();
 choices[22][0] = "11";
 choices[22][1] = "12";
 choices[22][2] = "14";
 choices[22][3] = "8";
 answers[22] = choices[22][1];
 units[22] = "1";
 comments[22] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[23]= "24)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[23]= new Array();
 choices[23][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[23][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[23][2] = "el Subdirector General que el Delegado designe";
 choices[23][3] = "el Secretario de Estado";
 answers[23] = choices[23][0];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[24]= "25)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[24]= new Array();
 choices[24][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[24][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[24][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[25]= "26)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[25]= new Array();
 choices[25][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[25][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[25][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[25][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[26]= new Array();
 choices[26][0] = "Al Consejo Europeo.";
 choices[26][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[26][2] = "A la Comisi&oacute;n Europea.";
 choices[26][3] = "Al Parlamento Europeo.";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[27]= "28)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[27]= new Array();
 choices[27][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[27][1] = "Unanimidad.";
 choices[27][2] = "Mayor&iacute;a cualificada.";
 choices[27][3] = "Mayor&iacute;a simple.";
 answers[27] = choices[27][3];
 units[27] = "5";
 comments[27] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[28]= new Array();
 choices[28][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[28][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[28][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[28][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[28] = choices[28][1];
 units[28] = "1";
 comments[28] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[29]= "30)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[29]= new Array();
 choices[29][0] = "Tres a&ntilde;os.";
 choices[29][1] = "Dos a&ntilde;os y medio.";
 choices[29][2] = "Cinco a&ntilde;os.";
 choices[29][3] = "Seis a&ntilde;os.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[30]= new Array();
 choices[30][0] = "Al Consejo Europeo.";
 choices[30][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[30][2] = "A la Comisi&oacute;n Europea.";
 choices[30][3] = "Al Parlamento Europeo.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[31]= new Array();
 choices[31][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[31][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[31][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[31][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[31] = choices[31][3];
 units[31] = "1";
 comments[31] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[32]= "33)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[32]= new Array();
 choices[32][0] = "El Rey.";
 choices[32][1] = "El Jefe del Estado.";
 choices[32][2] = "El Gobierno.";
 choices[32][3] = "El Presidente del Gobierno.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[33]= "34)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[33]= new Array();
 choices[33][0] = "la Administraci&oacute;n General del Estado";
 choices[33][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[33][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[33][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[33] = choices[33][3];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[34]= "35)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[34]= new Array();
 choices[34][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[34][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[34][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[34][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[35]= "36)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[35]= new Array();
 choices[35][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[35][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[35][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[35][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[36][1] = "Por Orden Ministerial.";
 choices[36][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[36][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[37]= "38)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[37]= new Array();
 choices[37][0] = "De las disposiciones favorables.";
 choices[37][1] = "De las disposiciones sancionadoras no favorables.";
 choices[37][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[37][3] = "Las respuestas b) y c) son correctas.";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[38]= "39)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[38]= new Array();
 choices[38][0] = "en cada Comunidad Aut&oacute;noma";
 choices[38][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[38][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[38][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[38] = choices[38][1];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[39]= new Array();
 choices[39][0] = "No se aplican directamente en los Estados.";
 choices[39][1] = "No son vinculantes.";
 choices[39][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[39][3] = "Tienen alcance general.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[40]= "41)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[40]= new Array();
 choices[40][0] = "los Subsecretarios y los Secretarios generales";
 choices[40][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[40][2] = "los Secretarios de Estado y los Directores generales";
 choices[40][3] = "los Ministros y los Secretarios de Estado";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[41]= "42)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[41]= new Array();
 choices[41][0] = "Un Reglamento.";
 choices[41][1] = "Un Decreto.";
 choices[41][2] = "Una Ley.";
 choices[41][3] = "Un Real-Decreto.";
 answers[41] = choices[41][2];
 units[41] = "5";
 comments[41] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[42]= "43)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[42]= new Array();
 choices[42][0] = "3 a&ntilde;os.";
 choices[42][1] = "5 a&ntilde;os.";
 choices[42][2] = "4 a&ntilde;os.";
 choices[42][3] = "6 a&ntilde;os.";
 answers[42] = choices[42][1];
 units[42] = "1";
 comments[42] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[43]= "44)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[43]= new Array();
 choices[43][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[43][1] = "el Consejo de Estado";
 choices[43][2] = "el Congreso";
 choices[43][3] = "las Cortes Generales";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[44]= "45)  La iniciativa legislativa corresponde:";
 choices[44]= new Array();
 choices[44][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[44][1] = "Al rey y al Gobierno.";
 choices[44][2] = "Al Congreso, al Senado y al Rey.";
 choices[44][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[44] = choices[44][3];
 units[44] = "1";
 comments[44] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[45]= new Array();
 choices[45][0] = "Ley Org&aacute;nica.";
 choices[45][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[45][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[45][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[46]= "47)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[46]= new Array();
 choices[46][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[46][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[46][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[46][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a las unidades administrativas:";
 choices[47]= new Array();
 choices[47][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[47][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[47][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[47][3] = "ninguna es correcta";
 answers[47] = choices[47][1];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[48]= new Array();
 choices[48][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[48][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[48][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[48][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[49]= "50)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[49]= new Array();
 choices[49][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[49][1] = "Ninguna de las respuestas es correcta.";
 choices[49][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[49][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[50]= new Array();
 choices[50][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[50][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[50][2] = "el Ministerio del Interior";
 choices[50][3] = "la Administraci&oacute;n General del Estado";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[51]= new Array();
 choices[51][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[51][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[51][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[51][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[52]= "53)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[52]= new Array();
 choices[52][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[52][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[52][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[52][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[53]= "54)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[53]= new Array();
 choices[53][0] = "623";
 choices[53][1] = "649";
 choices[53][2] = "626";
 choices[53][3] = "565";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[54]= "55)  El Tribunal de Justicia se cre&oacute; en:";
 choices[54]= new Array();
 choices[54][0] = "El Tratado de la CECA.";
 choices[54][1] = "El Tratado de Niza.";
 choices[54][2] = "El Tratado de &Aacute;msterdam.";
 choices[54][3] = "El Tratado de Lisboa.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[55][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[55][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[55][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[55] = choices[55][0];
 units[55] = "1";
 comments[55] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[56]= new Array();
 choices[56][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[56][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[56][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[56][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[57]= "58)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[57]= new Array();
 choices[57][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[57][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[57][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[57][3] = "Todas son correctas.";
 answers[57] = choices[57][0];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[58]= "59)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[58]= new Array();
 choices[58][0] = "Subsecretario";
 choices[58][1] = "Subdirector general";
 choices[58][2] = "Secretario de Estado";
 choices[58][3] = "ninguna es correcta";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[59]= "60)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[59]= new Array();
 choices[59][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[59][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[59][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[59][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[60]= "61)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[60]= new Array();
 choices[60][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[60][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[60][2] = "A y B son correctas.";
 choices[60][3] = "A y B son incorrectas.";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[61]= "62)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[61]= new Array();
 choices[61][0] = "Un recurso de incumplimiento.";
 choices[61][1] = "Recurso de carencia.";
 choices[61][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[61][3] = "Ninguna es correcta.";
 answers[61] = choices[61][2];
 units[61] = "5";
 comments[61] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[62]= "63)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[62]= new Array();
 choices[62][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[62][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[62][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[62][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[63]= "64)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[63]= new Array();
 choices[63][0] = "Municipios, provincias y CCAA.";
 choices[63][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[63][2] = "En CCAA, 50 provincias y municipios.";
 choices[63][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta falsa:";
 choices[64]= new Array();
 choices[64][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[64][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[64][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[64][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[65]= new Array();
 choices[65][0] = "Director General";
 choices[65][1] = "Secretario general";
 choices[65][2] = "Subdirector general";
 choices[65][3] = "Subsecretario";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[66]= new Array();
 choices[66][0] = "El Presidente del Gobierno.";
 choices[66][1] = "El Consejo de Ministros.";
 choices[66][2] = "40 Diputados.";
 choices[66][3] = "El Ministerio Fiscal.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[67]= "68)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[67]= new Array();
 choices[67][0] = "la capital del pa&iacute;s";
 choices[67][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[67][2] = "cada una de las provincias";
 choices[67][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[68]= "69)  Sobre el Plan Juncker:";
 choices[68]= new Array();
 choices[68][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[68][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[68][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[68][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[69]= "70)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[69]= new Array();
 choices[69][0] = "Por unanimidad.";
 choices[69][1] = "Por mayor&iacute;a cualificada.";
 choices[69][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[69][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[70]= "71)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[70]= new Array();
 choices[70][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[70][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[70][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[70][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[71]= "72)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[71]= new Array();
 choices[71][0] = "Las instituciones comunitarias.";
 choices[71][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[71][2] = "Los Estados miembros.";
 choices[71][3] = "Los nacionales de los Estados miembros.";
 answers[71] = choices[71][1];
 units[71] = "5";
 comments[71] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[72]= "73)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[72]= new Array();
 choices[72][0] = "l Consejo General del Poder Judicial";
 choices[72][1] = "El pleno de Tribunal Constitucional";
 choices[72][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[72][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[73]= new Array();
 choices[73][0] = "De los derechos y deberes fundamentales.";
 choices[73][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[73][2] = "Derechos y libertades.";
 choices[73][3] = "De la Corona.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[74]= "75)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[74]= new Array();
 choices[74][0] = "Son actos individuales no normativos.";
 choices[74][1] = "Poseen alcance general.";
 choices[74][2] = "Son actos normativos.";
 choices[74][3] = "No son obligatorias.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 369. UNION EUROPEA";


