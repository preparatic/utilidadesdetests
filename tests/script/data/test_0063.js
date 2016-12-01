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

//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[0]= "1)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[0]= new Array();
 choices[0][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[0][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[0][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[0][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[0] = choices[0][2];
 units[0] = "27";
 comments[0] = "Id Pregunta: 20. AGE A1 2015";
 preguntaids[0] = 20


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[1]= new Array();
 choices[1][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[1][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[1][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[1][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[1] = choices[1][1];
 units[1] = "22";
 comments[1] = "Id Pregunta: 122. ";
 preguntaids[1] = 122


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[2]= new Array();
 choices[2][0] = "Las sociedades mercantiles estatales.";
 choices[2][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[2][2] = "Las respuestas a) y b) son correctas.";
 choices[2][3] = "Las respuestas a) y b) no son correctas.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[2] = 503


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[3]= "4)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[3]= new Array();
 choices[3][0] = "Primario, que incluye la agricultura y la pesca";
 choices[3][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[3][2] = "Minero, junto con las exportaciones de comercio";
 choices[3][3] = "Servicios";
 answers[3] = choices[3][3];
 units[3] = "12";
 comments[3] = "Id Pregunta: 569. Modelo econ&oacute;mico";
 preguntaids[3] = 569


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[4]= "5)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[4]= new Array();
 choices[4][0] = "Dise&ntilde;o del servicio.";
 choices[4][1] = "Transici&oacute;n del servicio.";
 choices[4][2] = "Estrategia del servicio.";
 choices[4][3] = "Operaci&oacute;n del servicio.";
 answers[4] = choices[4][2];
 units[4] = "101";
 comments[4] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[4] = 644


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique la afirmaci&oacute;n falsa:";
 choices[5]= new Array();
 choices[5][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[5][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[5][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[5][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[5] = 710


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[6]= "7)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[6]= new Array();
 choices[6][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[6][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[6][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[6][3] = "Todos las anteriores son ciertas.";
 answers[6] = choices[6][3];
 units[6] = "12";
 comments[6] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[6] = 137


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[7]= new Array();
 choices[7][0] = "El Parlamento y el Consejo.";
 choices[7][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[7][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[7][3] = "La Comisi&oacute;n y el Consejo.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 357. UNION EUROPEA";
 preguntaids[7] = 357


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la respuesta correcta:";
 choices[8]= new Array();
 choices[8][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[8][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[8][2] = "Las respuestas A y B son correctas.";
 choices[8][3] = "Las respuestas A y B son falsas.";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 279. UNION EUROPEA";
 preguntaids[8] = 279


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[9]= "10)  Son proyectos de Apache relacionados con Big Data:";
 choices[9]= new Array();
 choices[9][0] = "Hadoop";
 choices[9][1] = "Spark";
 choices[9][2] = "A) y B)";
 choices[9][3] = "Niguno de los anteriores";
 answers[9] = choices[9][2];
 units[9] = "73";
 comments[9] = "Id Pregunta: 108. ";
 preguntaids[9] = 108


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[10]= new Array();
 choices[10][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[10][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[10][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[10][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[10] = choices[10][2];
 units[10] = "7";
 comments[10] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";
 preguntaids[10] = 149


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[11]= "12)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[11]= new Array();
 choices[11][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[11][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[11][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[11][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[11] = choices[11][3];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[11] = 803


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[12]= "13)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[12]= new Array();
 choices[12][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[12][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[12][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[12][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[12] = choices[12][1];
 units[12] = "48";
 comments[12] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[12] = 615


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[13]= "14)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[13]= new Array();
 choices[13][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[13][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[13][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[13][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 186. CONSTITUCION1978";
 preguntaids[13] = 186


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[14]= new Array();
 choices[14][0] = "Crecimiento inteligente.";
 choices[14][1] = "Crecimiento inclusivo.";
 choices[14][2] = "Crecimiento sostenible.";
 choices[14][3] = "Crecimiento integrador.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 283. UNION EUROPEA";
 preguntaids[14] = 283


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[15]= "16)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[15]= new Array();
 choices[15][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[15][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[15][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[15][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[15] = 517


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[16]= "17)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[16]= new Array();
 choices[16][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[16][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[16][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[16][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[16] = 270


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[17]= "18)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[17]= new Array();
 choices[17][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[17][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[17][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[17][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[17] = choices[17][3];
 units[17] = "1";
 comments[17] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[17] = 227


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[18]= new Array();
 choices[18][0] = "El Ministro de Econom&iacute;a.";
 choices[18][1] = "El Gobierno.";
 choices[18][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[18][3] = "El Presidente del Gobierno.";
 answers[18] = choices[18][1];
 units[18] = "10";
 comments[18] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";
 preguntaids[18] = 472


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[19]= "20)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[19]= new Array();
 choices[19][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[19][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[19][2] = "el Subdirector General que el Delegado designe";
 choices[19][3] = "el Secretario de Estado";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[19] = 822


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[20]= new Array();
 choices[20][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[20][1] = "Calidad de los servicios p&uacute;blicos";
 choices[20][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[20][3] = "Servicio efectivo a los ciudadanos";
 answers[20] = choices[20][1];
 units[20] = "18";
 comments[20] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[20] = 749


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[21]= new Array();
 choices[21][0] = "Ley Org&aacute;nica.";
 choices[21][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[21][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[21][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[21] = 203


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[22]= new Array();
 choices[22][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[22][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[22][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[22][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[22] = 332


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[23]= "24)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[23]= new Array();
 choices[23][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[23][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[23][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[23][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[23] = choices[23][1];
 units[23] = "92";
 comments[23] = "Id Pregunta: 715. INTEGRACION CONTINUA";
 preguntaids[23] = 715


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[24]= "25)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[24]= new Array();
 choices[24][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[24][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[24][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[24][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[24] = choices[24][3];
 units[24] = "43";
 comments[24] = "Id Pregunta: 438. SERVICIOS COMUNES";
 preguntaids[24] = 438


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[25]= new Array();
 choices[25][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[25][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[25][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[25][3] = "El Senado se compone de 350 senadores.";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[25] = 212


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[26]= new Array();
 choices[26][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[26][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[26][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[26][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[26] = choices[26][3];
 units[26] = "57";
 comments[26] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[26] = 640


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[27]= "28)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "A nivel de art&iacute;culo.";
 choices[27][1] = "A nivel de cap&iacute;tulo.";
 choices[27][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[27][3] = "A nivel de concepto.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[27] = 481


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[28]= "29)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[28]= new Array();
 choices[28][0] = "Proveer de manera compartida servicios comunes";
 choices[28][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[28][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[28][3] = "Transparencia";
 answers[28] = choices[28][1];
 units[28] = "28";
 comments[28] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[28] = 742


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[29]= "30)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[29]= new Array();
 choices[29][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[29][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[29][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[29][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[29] = choices[29][0];
 units[29] = "35";
 comments[29] = "Id Pregunta: 75. AGE A1 2015";
 preguntaids[29] = 75


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[30]= "31)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[30]= new Array();
 choices[30][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[30][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[30][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[30][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[30] = choices[30][3];
 units[30] = "77";
 comments[30] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[30] = 48


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[31]= new Array();
 choices[31][0] = "al menos por 50 Diputados.";
 choices[31][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[31][2] = "por la Mesa del Congreso de los Diputados.";
 choices[31][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[31] = 183


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[32]= "33)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[32]= new Array();
 choices[32][0] = "Windows Phone";
 choices[32][1] = "Blackberry";
 choices[32][2] = "iOS";
 choices[32][3] = "Android";
 answers[32] = choices[32][3];
 units[32] = "59";
 comments[32] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[32] = 64


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[33]= "34)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[33]= new Array();
 choices[33][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[33][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[33][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[33][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[33] = choices[33][1];
 units[33] = "43";
 comments[33] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[33] = 439


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[34]= new Array();
 choices[34][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[34][1] = "Directiva 2004/113/CE del Consejo.";
 choices[34][2] = "Todas son correctas.";
 choices[34][3] = "Todas son falsas.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";
 preguntaids[34] = 405


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[35]= new Array();
 choices[35][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[35][1] = "Anteriormente se denominaba Sonar.";
 choices[35][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[35][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[35] = choices[35][2];
 units[35] = "92";
 comments[35] = "Id Pregunta: 717. INTEGRACION CONTINUA";
 preguntaids[35] = 717


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[36]= new Array();
 choices[36][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[36][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[36][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[36][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[36] = choices[36][3];
 units[36] = "19";
 comments[36] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[36] = 171


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[37]= new Array();
 choices[37][0] = "No, en ning&uacute;n caso.";
 choices[37][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[37][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[37][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 188. CONSTITUCION1978";
 preguntaids[37] = 188


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[38]= new Array();
 choices[38][0] = "Memcached";
 choices[38][1] = "OpCache";
 choices[38][2] = "WinCache Extension for PHP";
 choices[38][3] = "Alternative PHP Cache";
 answers[38] = choices[38][0];
 units[38] = "65";
 comments[38] = "Id Pregunta: 34. AGE A1 2015";
 preguntaids[38] = 34


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[39]= "40)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[39]= new Array();
 choices[39][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[39][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[39][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[39][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 340. UNION EUROPEA";
 preguntaids[39] = 340


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[40]= new Array();
 choices[40][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[40][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[40][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[40][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[40] = choices[40][0];
 units[40] = "14";
 comments[40] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[40] = 389


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[41]= "42)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[41]= new Array();
 choices[41][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[41][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[41][2] = "La normativa reguladora de cada derecho.";
 choices[41][3] = "Ley 50/1997, del Gobierno.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";
 preguntaids[41] = 462


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[42]= new Array();
 choices[42][0] = "As&iacute;ncrona.";
 choices[42][1] = "Log-shipping.";
 choices[42][2] = "Disk buffering.";
 choices[42][3] = "S&iacute;ncrona.";
 answers[42] = choices[42][3];
 units[42] = "53";
 comments[42] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[42] = 851


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[43]= new Array();
 choices[43][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[43][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[43][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[43][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[43] = 444


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[44]= "45)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[44]= new Array();
 choices[44][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[44][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[44][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[44][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[44] = choices[44][0];
 units[44] = "14";
 comments[44] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[44] = 381


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[45]= "46)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[45]= new Array();
 choices[45][0] = "Tres a&ntilde;os.";
 choices[45][1] = "Dos a&ntilde;os y medio.";
 choices[45][2] = "Cinco a&ntilde;os.";
 choices[45][3] = "Seis a&ntilde;os.";
 answers[45] = choices[45][2];
 units[45] = "5";
 comments[45] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[45] = 289


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[46]= "47)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[46]= new Array();
 choices[46][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[46][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[46][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[46][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[46] = 506


//  Id pregunta: 857 Año de creación de pregunta: 2016
 questions[47]= "48)  Sobre el multiling&uuml;ismo en los sitios web p&uacute;blicos, se&ntilde;ale la respuesta falsa:";
 choices[47]= new Array();
 choices[47][0] = "Los responsables de contenidos y responsables t&eacute;cnicos de portales de cualquier organismo de la Administraci&oacute;n General del Estado deben tener en cuenta que Espa&ntilde;a es un pa&iacute;s multiling&uuml;e y que deben velar para que el idioma no constituya una barrera al acceso a los contenidos de las webs p&uacute;blicas.";
 choices[47][1] = "Cada Comunidad Aut&oacute;noma debe encargarse de la traducci&oacute;n de los contenidos de sus p&aacute;ginas web para facilitar y acercar los servicios prestados por la Administraci&oacute;n a los ciudadanos y empresas.";
 choices[47][2] = "Como criterio general, todos los contenidos de los portales ser&aacute;n accesibles, adem&aacute;s de en castellano, lengua espa&ntilde;ola oficial del Estado, en las siguientes lenguas idiomas cooficiales de las respectivas Comunidades Aut&oacute;nomas de Espa&ntilde;a: catal&aacute;n, euskera, gallego y valenciano.";
 choices[47][3] = "Para facilitar la traducci&oacute;n a las lenguas cooficiales y al ingl&eacute;s, se est&aacute; preparando una Plataforma de traducci&oacute;n autom&aacute;tica com&uacute;n de la AGE: PLATA que estar&aacute; disponible con gran calidad al catal&aacute;n, gallego y con necesidad de revisi&oacute;n asistida en el caso del euskera y el ingl&eacute;s.";
 answers[47] = choices[47][1];
 units[47] = "125";
 comments[47] = "Id Pregunta: 857. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[47] = 857


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[48]= new Array();
 choices[48][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[48][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[48][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[48][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[48] = choices[48][3];
 units[48] = "66";
 comments[48] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[48] = 37


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[49]= "50)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[49]= new Array();
 choices[49][0] = "Integrar la estrategia TIC con la de negocio";
 choices[49][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[49][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[49][3] = "Todas las anteriores";
 answers[49] = choices[49][3];
 units[49] = "26";
 comments[49] = "Id Pregunta: 549. Gobernanza TIC";
 preguntaids[49] = 549


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[50]= new Array();
 choices[50][0] = "Se definen iteraciones";
 choices[50][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[50][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[50][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[50] = choices[50][1];
 units[50] = "34, 84";
 comments[50] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[50] = 732


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[51]= new Array();
 choices[51][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[51][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[51][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[51][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[51] = choices[51][3];
 units[51] = "22";
 comments[51] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[51] = 714


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[52]= "53)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[52]= new Array();
 choices[52][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[52][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[52][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[52][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[52] = choices[52][2];
 units[52] = "53";
 comments[52] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[52] = 65


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[53]= new Array();
 choices[53][0] = "Neo4J ";
 choices[53][1] = "OrientDB ";
 choices[53][2] = "InfoGrid ";
 choices[53][3] = "SimpleDB";
 answers[53] = choices[53][3];
 units[53] = "73";
 comments[53] = "Id Pregunta: 655. ";
 preguntaids[53] = 655


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[54]= "55)  El sector p&uacute;blico institucional se integra por:";
 choices[54]= new Array();
 choices[54][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[54][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[54][2] = "las Universidades p&uacute;blicas";
 choices[54][3] = "todas son correctas";
 answers[54] = choices[54][3];
 units[54] = "7";
 comments[54] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[54] = 516


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[55]= "56)  El Presupuesto por programas sirve para saber...";
 choices[55]= new Array();
 choices[55][0] = "En qu&eacute; nos gastamos el dinero";
 choices[55][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[55][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[55][3] = "Qui&eacute;n se gasta el dinero";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";
 preguntaids[55] = 456


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[56]= "57)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[56]= new Array();
 choices[56][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[56][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[56][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[56][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[56] = 764


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[57]= "58)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[57]= new Array();
 choices[57][0] = "Por unanimidad.";
 choices[57][1] = "Por mayor&iacute;a cualificada.";
 choices[57][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[57][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[57] = 312


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[58]= "59)  La soberan&iacute;a nacional reside en:";
 choices[58]= new Array();
 choices[58][0] = "el Parlamento nacional.";
 choices[58][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[58][2] = "el pueblo espa&ntilde;ol.";
 choices[58][3] = "el Congreso y el Senado.";
 answers[58] = choices[58][3];
 units[58] = "1";
 comments[58] = "Id Pregunta: 255. CONSTITUCION1978";
 preguntaids[58] = 255


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[59]= new Array();
 choices[59][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[59][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[59][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[59][3] = "El software funcionando es la medida principal del progreso.";
 answers[59] = choices[59][2];
 units[59] = "34";
 comments[59] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[59] = 43


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[60]= "61)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[60]= new Array();
 choices[60][0] = "Decretos Legislativos.";
 choices[60][1] = "Decretos-leyes.";
 choices[60][2] = "Leyes de bases.";
 choices[60][3] = "Reales Decretos del Consejo de Ministros.";
 answers[60] = choices[60][0];
 units[60] = "1";
 comments[60] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[60] = 204


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[61]= new Array();
 choices[61][0] = "Por Real Decreto.";
 choices[61][1] = "Por Orden del Ministerio del Interior.";
 choices[61][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[61][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[61] = 230


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[62][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[62][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[62][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[62] = choices[62][3];
 units[62] = "19";
 comments[62] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[62] = 16


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[63]= new Array();
 choices[63][0] = "23";
 choices[63][1] = "20";
 choices[63][2] = "14";
 choices[63][3] = "18";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 343. UNION EUROPEA";
 preguntaids[63] = 343


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto a las unidades administrativas:";
 choices[64]= new Array();
 choices[64][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[64][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[64][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[64][3] = "ninguna es correcta";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[64] = 801


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[65]= new Array();
 choices[65][0] = "El Consejo Nacional de la Mujer";
 choices[65][1] = "El Consejo de la Mujer";
 choices[65][2] = "El Instituto de la Mujer";
 choices[65][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[65] = choices[65][3];
 units[65] = "14";
 comments[65] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[65] = 383


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; es el machine learning?";
 choices[66]= new Array();
 choices[66][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[66][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[66][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[66][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[66] = choices[66][0];
 units[66] = "73";
 comments[66] = "Id Pregunta: 659. ";
 preguntaids[66] = 659


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[67]= "68)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[67]= new Array();
 choices[67][0] = "Un d&iacute;a";
 choices[67][1] = "Dos d&iacute;as";
 choices[67][2] = "Tres d&iacute;as";
 choices[67][3] = "Cuatro d&iacute;as";
 answers[67] = choices[67][3];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[67] = 831


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[68]= "69)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[68]= new Array();
 choices[68][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[68][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[68][2] = "Se basan en sistemas distribuidos";
 choices[68][3] = "Se basan en el modelo de datos relacional";
 answers[68] = choices[68][2];
 units[68] = "73";
 comments[68] = "Id Pregunta: 102. ";
 preguntaids[68] = 102


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[69]= "70)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[69]= new Array();
 choices[69][0] = "Cinco a&ntilde;os.";
 choices[69][1] = "Seis a&ntilde;os.";
 choices[69][2] = "Cuatro a&ntilde;os.";
 choices[69][3] = "Tres a&ntilde;os.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 304. UNION EUROPEA";
 preguntaids[69] = 304


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[70]= "71)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "Principio de transparencia.";
 choices[70][1] = "Principio de cooperaci&oacute;n.";
 choices[70][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[70][3] = "Principio de lealtad institucional.";
 answers[70] = choices[70][1];
 units[70] = "10";
 comments[70] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[70] = 504


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[71]= new Array();
 choices[71][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[71][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[71][2] = "Las respuestas a) b) no son correctas.";
 choices[71][3] = "Las respuestas a) y b) son correctas.";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[71] = 482


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[72]= new Array();
 choices[72][0] = "El Presidente del Senado";
 choices[72][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[72][2] = "El Presidente del Gobierno";
 choices[72][3] = "El Presidente de las Cortes Generales";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[72] = 265


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[73]= new Array();
 choices[73][0] = "Publicidad.";
 choices[73][1] = "Constituci&oacute;n.";
 choices[73][2] = "Legalidad.";
 choices[73][3] = "Creaci&oacute;n.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[73] = 215


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la respuesta falsa";
 choices[74]= new Array();
 choices[74][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[74][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[74][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[74][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[74] = choices[74][3];
 units[74] = "22";
 comments[74] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[74] = 276


