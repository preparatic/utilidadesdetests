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

//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[0]= "1)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[0]= new Array();
 choices[0][0] = "Seis a&ntilde;os.";
 choices[0][1] = "Cinco a&ntilde;os.";
 choices[0][2] = "Cuatro a&ntilde;os.";
 choices[0][3] = "Ocho a&ntilde;os.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 307. UNION EUROPEA";
 preguntaids[0] = 307


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la respuesta falsa:";
 choices[1]= new Array();
 choices[1][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[1][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[1][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[1][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[1] = 281


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[2]= "3)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[2]= new Array();
 choices[2][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[2][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[2][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[2][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 186. CONSTITUCION1978";
 preguntaids[2] = 186


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[3]= new Array();
 choices[3][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[3][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[3][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[3][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 178. CONSTITUCION1978";
 preguntaids[3] = 178


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


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[5]= "6)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[5]= new Array();
 choices[5][0] = "Diez art&iacute;culos.";
 choices[5][1] = "Nueve art&iacute;culos.";
 choices[5][2] = "Once art&iacute;culos.";
 choices[5][3] = "Ocho art&iacute;culos.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 269. CONSTITUCION1978";
 preguntaids[5] = 269


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[6]= new Array();
 choices[6][0] = "las Cortes generales.";
 choices[6][1] = "los partidos pol&iacute;ticos.";
 choices[6][2] = "los sindicatos.";
 choices[6][3] = "las Comunidades Aut&oacute;nomas.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 225. CONSTITUCION1978";
 preguntaids[6] = 225


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[7]= "8)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[7]= new Array();
 choices[7][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[7][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[7][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[7][3] = "Todas son correctas.";
 answers[7] = choices[7][3];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[7] = 834


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "De la C&aacute;mara respectiva.";
 choices[8][1] = "Del Rey.";
 choices[8][2] = "Del Tribunal Constitucional.";
 choices[8][3] = "Del Tribunal Supremo.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 223. CONSTITUCION1978";
 preguntaids[8] = 223


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[9]= new Array();
 choices[9][0] = "Cinco.";
 choices[9][1] = "Dos.";
 choices[9][2] = "Cuatro.";
 choices[9][3] = "Siete.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[9] = 213


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[10]= new Array();
 choices[10][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[10][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[10][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[10][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[10] = 201


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[11]= "12)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[11]= new Array();
 choices[11][0] = "El Rey.";
 choices[11][1] = "El Jefe del Estado.";
 choices[11][2] = "El Gobierno.";
 choices[11][3] = "El Presidente del Gobierno.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[11] = 208


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[12]= "13)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[12]= new Array();
 choices[12][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[12][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[12][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[12][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[12] = choices[12][2];
 units[12] = "1";
 comments[12] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[12] = 191


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la respuesta falsa:";
 choices[13]= new Array();
 choices[13][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[13][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[13][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[13][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[13] = 284


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[14]= "15)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[14]= new Array();
 choices[14][0] = "los Secretarios generales t&eacute;cnicos";
 choices[14][1] = "los Directores generales";
 choices[14][2] = "los Secretarios generales";
 choices[14][3] = "los Subsecretarios";
 answers[14] = choices[14][1];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 807. Ley 40/2015";
 preguntaids[14] = 807


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[15]= new Array();
 choices[15][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[15][1] = "el C&oacute;digo Civil";
 choices[15][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[15][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[15] = 776


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[16]= "17)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[16]= new Array();
 choices[16][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[16][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[16][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[16][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[16] = choices[16][1];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[16] = 838


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[17]= "18)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[17]= new Array();
 choices[17][0] = "El Presidente y su gabinete.";
 choices[17][1] = "El Presidente y sus Ministros.";
 choices[17][2] = "El Rey y el Presidente.";
 choices[17][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 257. CONSTITUCION1978";
 preguntaids[17] = 257


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[18]= "19)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[18]= new Array();
 choices[18][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[18][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[18][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[18][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[18] = 240


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[19]= new Array();
 choices[19][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[19][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[19][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[19][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 297. UNION EUROPEA";
 preguntaids[19] = 297


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[20]= "21)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "el Gobierno de la Naci&oacute;n";
 choices[20][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[20][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[20][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[20] = 773


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[21]= "22)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[21]= new Array();
 choices[21][0] = "Un d&iacute;a";
 choices[21][1] = "Dos d&iacute;as";
 choices[21][2] = "Tres d&iacute;as";
 choices[21][3] = "Cuatro d&iacute;as";
 answers[21] = choices[21][3];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[21] = 831


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[22]= "23)  Las Administraciones P&uacute;blicas:";
 choices[22]= new Array();
 choices[22][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[22][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[22][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[22] = 772


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[23]= new Array();
 choices[23][0] = "No se aplican directamente en los Estados.";
 choices[23][1] = "No son vinculantes.";
 choices[23][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[23][3] = "Tienen alcance general.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[23] = 356


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[24]= "25)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[24]= new Array();
 choices[24][0] = "los Ministros y los Secretarios de Estado";
 choices[24][1] = "los Subsecretarios y Secretarios generales";
 choices[24][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[24][3] = "los Directores generales";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[24] = 793


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[25]= "26)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[25]= new Array();
 choices[25][0] = "Estrasburgo.";
 choices[25][1] = "Bruselas.";
 choices[25][2] = "Luxemburgo.";
 choices[25][3] = "Holanda.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[25] = 293


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[26]= new Array();
 choices[26][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[26][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[26][2] = "c) Todas las respuestas son correctas.";
 choices[26][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[26] = 358


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[27]= new Array();
 choices[27][0] = "Art&iacute;culo 70.";
 choices[27][1] = "Art&iacute;culo 54.";
 choices[27][2] = "Articulo 62.";
 choices[27][3] = "Articulo 55. 5.";
 answers[27] = choices[27][2];
 units[27] = "1";
 comments[27] = "Id Pregunta: 243. CONSTITUCION1978";
 preguntaids[27] = 243


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[28]= "29)  Los Subdirectores generales:";
 choices[28]= new Array();
 choices[28][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[28][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[28][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[28][3] = "todas son correctas";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[28] = 811


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[29]= "30)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[29]= new Array();
 choices[29][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[29][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[29][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[29][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[29] = choices[29][2];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[29] = 784


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[30]= new Array();
 choices[30][0] = "El Consejo Europeo.";
 choices[30][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[30][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[30][3] = "El Parlamento Europeo.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[30] = 313


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[31]= new Array();
 choices[31][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[31][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[31][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[31][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 180. CONSTITUCION1978";
 preguntaids[31] = 180


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[32]= "33)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[32]= new Array();
 choices[32][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[32][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[32][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[32][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[32] = 800


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[33]= "34)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[33]= new Array();
 choices[33][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[33][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[33][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[33][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[33] = 184


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[34]= new Array();
 choices[34][0] = "absoluta de las Cortes Generales.";
 choices[34][1] = "absoluta del Congreso de los Diputados.";
 choices[34][2] = "simple de las Cortes Generales.";
 choices[34][3] = "simple del Congreso de los Diputados.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 173. CONSTITUCION1978";
 preguntaids[34] = 173


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[35]= "36)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[35]= new Array();
 choices[35][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[35][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[35][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[35][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[35] = choices[35][3];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[35] = 803


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[36]= new Array();
 choices[36][0] = "Una ley orginaria.";
 choices[36][1] = "Una ley org&aacute;nica.";
 choices[36][2] = "Una ley de bases.";
 choices[36][3] = "Una ley de transferencia.";
 answers[36] = choices[36][1];
 units[36] = "1";
 comments[36] = "Id Pregunta: 179. CONSTITUCION1978";
 preguntaids[36] = 179


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[37]= new Array();
 choices[37][0] = "De los derechos y deberes fundamentales.";
 choices[37][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[37][2] = "Derechos y libertades.";
 choices[37][3] = "De la Corona.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[37] = 221


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[38][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[38][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[38][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[38] = 311


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[39]= "40)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[39]= new Array();
 choices[39][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[39][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[39][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[39][3] = "Todas las respuestas son correctas.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[39] = 375


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[40]= "41)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[40]= new Array();
 choices[40][0] = "Tres a&ntilde;os.";
 choices[40][1] = "Dos a&ntilde;os y medio.";
 choices[40][2] = "Cinco a&ntilde;os.";
 choices[40][3] = "Seis a&ntilde;os.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[40] = 289


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[41]= "42)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[41]= new Array();
 choices[41][0] = "El Presidente del Congreso de los Diputados.";
 choices[41][1] = "El Presidente del Gobierno.";
 choices[41][2] = "El Rey.";
 choices[41][3] = "El Consejo de Ministros.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[41] = 231


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[42]= "43)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[42]= new Array();
 choices[42][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[42][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[42][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[42][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 187. CONSTITUCION1978";
 preguntaids[42] = 187


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[43]= new Array();
 choices[43][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[43][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[43][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[43][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[43] = 220


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[44]= "45)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[44]= new Array();
 choices[44][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[44][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[44][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[44][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[44] = 205


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a los servicios territoriales es correcto:";
 choices[45]= new Array();
 choices[45][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[45][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[45][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[45][3] = "ninguna es correcta";
 answers[45] = choices[45][0];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[45] = 820


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[46]= "47)  La sede del Parlamento Europeo se encuentra en:";
 choices[46]= new Array();
 choices[46][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[46][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[46][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[46][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[46] = 351


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[47]= "48)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[47]= new Array();
 choices[47][0] = "Ley org&aacute;nica.";
 choices[47][1] = "Ley ordinaria.";
 choices[47][2] = "Ley de bases.";
 choices[47][3] = "Ley marco.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[47] = 271


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[48]= new Array();
 choices[48][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[48][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[48][2] = "El que hubieren designado las Cortes Generales.";
 choices[48][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[48] = choices[48][1];
 units[48] = "1";
 comments[48] = "Id Pregunta: 182. CONSTITUCION1978";
 preguntaids[48] = 182


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[49]= "50)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[49]= new Array();
 choices[49][0] = "Subsecretario";
 choices[49][1] = "Subdirector general";
 choices[49][2] = "Secretario de Estado";
 choices[49][3] = "ninguna es correcta";
 answers[49] = choices[49][0];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[49] = 791


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[50]= "51)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[50]= new Array();
 choices[50][0] = "El Segundo.";
 choices[50][1] = "El Primero.";
 choices[50][2] = "El Preliminar.";
 choices[50][3] = "El Tercero.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[50] = 266


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[51]= "52)  Sobre el Plan Juncker:";
 choices[51]= new Array();
 choices[51][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[51][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[51][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[51][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[51] = 282


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[52]= new Array();
 choices[52][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[52][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[52][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[52][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[52] = choices[52][3];
 units[52] = "1";
 comments[52] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[52] = 200


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[53]= "54)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[53]= new Array();
 choices[53][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[53][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[53][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[53][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[53] = 786


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[54]= "55)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[54]= new Array();
 choices[54][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[54][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[54][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[54][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[54] = 777


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
 preguntaids[55] = 202


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[56]= new Array();
 choices[56][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[56][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[56][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[56][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[56] = 239


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[57]= new Array();
 choices[57][0] = "Dos Cap&iacute;tulos.";
 choices[57][1] = "Tres Cap&iacute;tulos.";
 choices[57][2] = "Un Cap&iacute;tulo.";
 choices[57][3] = "Cuatro Cap&iacute;tulos.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 222. CONSTITUCION1978";
 preguntaids[57] = 222


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[58]= "59)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[58]= new Array();
 choices[58][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[58][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[58][2] = "el Subdirector General que el Delegado designe";
 choices[58][3] = "el Secretario de Estado";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[58] = 822


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[59]= "60)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[59]= new Array();
 choices[59][0] = "El Delegado del Gobierno.";
 choices[59][1] = "El Subdelegado del Gobierno.";
 choices[59][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[59][3] = "El Gobernador Civil.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[59] = 207


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[60]= "61)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[60]= new Array();
 choices[60][0] = "en cada Comunidad Aut&oacute;noma";
 choices[60][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[60][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[60][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[60] = choices[60][1];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[60] = 815


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[61]= new Array();
 choices[61][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[61][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[61][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[61][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 319. UNION EUROPEA";
 preguntaids[61] = 319


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
 preguntaids[62] = 292


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[63]= new Array();
 choices[63][0] = "Publicidad.";
 choices[63][1] = "Constituci&oacute;n.";
 choices[63][2] = "Legalidad.";
 choices[63][3] = "Creaci&oacute;n.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[63] = 215


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[64]= new Array();
 choices[64][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[64][1] = "los Subdelegados del Gobierno en las provincias";
 choices[64][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[64][3] = "a y b son correctas";
 answers[64] = choices[64][3];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[64] = 790


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[65]= new Array();
 choices[65][0] = "El Consejo Europeo.";
 choices[65][1] = "El Parlamento Europeo.";
 choices[65][2] = "El Consejo.";
 choices[65][3] = "La Comisi&oacute;n.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 361. UNION EUROPEA";
 preguntaids[65] = 361


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[66]= "67)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[66]= new Array();
 choices[66][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[66][1] = "Ninguna de las respuestas es correcta.";
 choices[66][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[66][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[66] = 334


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[67]= new Array();
 choices[67][0] = "personalidad jur&iacute;dica propia";
 choices[67][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[67][2] = "personalidad jur&iacute;dica plena";
 choices[67][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[67] = 774


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[68]= "69)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[68]= new Array();
 choices[68][0] = "18 miembros.";
 choices[68][1] = "Ninguna es correcta.";
 choices[68][2] = "22 miembros.";
 choices[68][3] = "21 miembros.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 347. UNION EUROPEA";
 preguntaids[68] = 347


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[69]= "70)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[69]= new Array();
 choices[69][0] = "el Secretario General";
 choices[69][1] = "el Subdirector General";
 choices[69][2] = "el Secretario de Estado";
 choices[69][3] = "ninguna es correcta";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[69] = 823


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[70]= "71)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[70]= new Array();
 choices[70][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[70][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[70][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[70][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[70] = choices[70][0];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[70] = 779


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[71]= new Array();
 choices[71][0] = "Constitucional.";
 choices[71][1] = "Penal.";
 choices[71][2] = "Militar.";
 choices[71][3] = "Tribunales consuetudinarios.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 262. CONSTITUCION1978";
 preguntaids[71] = 262


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[72]= "73)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[72]= new Array();
 choices[72][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[72][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[72][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[72][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 340. UNION EUROPEA";
 preguntaids[72] = 340


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[73]= "74)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[73]= new Array();
 choices[73][0] = "Por unanimidad.";
 choices[73][1] = "Por mayor&iacute;a cualificada.";
 choices[73][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[73][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[73] = 312


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[74]= "75)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[74]= new Array();
 choices[74][0] = "Son vinculantes solamente.";
 choices[74][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[74][2] = "Son preceptivos y vinculantes.";
 choices[74][3] = "Son preceptivos y no vinculantes.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 355. UNION EUROPEA";
 preguntaids[74] = 355


