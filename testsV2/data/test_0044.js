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

//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[0]= new Array();
 choices[0][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[0][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[0][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[0][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[0] = choices[0][0];
 units[0] = "14";
 comments[0] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[0] = 389


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[1]= "2)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[1]= new Array();
 choices[1][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[1][1] = "1 de enero de 2015";
 choices[1][2] = "1 de enero de 2016";
 choices[1][3] = "1 de julio de 2016";
 answers[1] = choices[1][3];
 units[1] = "77";
 comments[1] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[1] = 691


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[2]= "3)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Anualmente.";
 choices[2][1] = "Ninguna de las respuestas es correcta.";
 choices[2][2] = "Trimestralmente.";
 choices[2][3] = "Semestralmente.";
 answers[2] = choices[2][0];
 units[2] = "10";
 comments[2] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[2] = 477


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[3]= "4)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[3]= new Array();
 choices[3][0] = "los Secretarios de Estado";
 choices[3][1] = "los Ministros";
 choices[3][2] = "los Subsecretarios";
 choices[3][3] = "los Secretarios generales";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[3] = 810


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[4]= new Array();
 choices[4][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[4][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[4][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[4][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[4] = 200


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[5]= new Array();
 choices[5][0] = "De 1 a  4 ";
 choices[5][1] = "De 3 a  7 ";
 choices[5][2] = "De 5 a  9";
 choices[5][3] = "De 7 a 11";
 answers[5] = choices[5][2];
 units[5] = "34, 84";
 comments[5] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[5] = 728


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[6]= "7)  El pacto fiscal europeo de 2012 incluye:";
 choices[6]= new Array();
 choices[6][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[6][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[6][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[6][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[6] = choices[6][0];
 units[6] = "5";
 comments[6] = "Id Pregunta: 280. UNION EUROPEA";
 preguntaids[6] = 280


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[7]= "8)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[7][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[7][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[7][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[7] = 172


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


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[9]= "10)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[9]= new Array();
 choices[9][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[9][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[9][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[9][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[9] = choices[9][3];
 units[9] = "5";
 comments[9] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[9] = 345


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[10]= "11)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[10]= new Array();
 choices[10][0] = "Subsecretario";
 choices[10][1] = "Subdirector general";
 choices[10][2] = "Secretario de Estado";
 choices[10][3] = "ninguna es correcta";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[10] = 791


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[11]= "12)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[11]= new Array();
 choices[11][0] = "El Segundo.";
 choices[11][1] = "El Primero.";
 choices[11][2] = "El Preliminar.";
 choices[11][3] = "El Tercero.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[11] = 266


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[12]= new Array();
 choices[12][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[12][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[12][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[12][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[12] = choices[12][2];
 units[12] = "26";
 comments[12] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[12] = 553


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[13]= new Array();
 choices[13][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[13][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[13][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[13][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[13] = choices[13][3];
 units[13] = "10";
 comments[13] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[13] = 465


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[14]= "15)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[14]= new Array();
 choices[14][0] = "Subgrupo A1";
 choices[14][1] = "Subgrupo A2";
 choices[14][2] = "Subgrupo B";
 choices[14][3] = "Subgrupo C1";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[14] = 806


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[15]= new Array();
 choices[15][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[15][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[15][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[15][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 44. AGE A1 2015";
 preguntaids[15] = 44


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[16]= "17)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[16]= new Array();
 choices[16][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[16][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[16][2] = "La protecci&oacute;n del medio ambiente.";
 choices[16][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[16] = choices[16][0];
 units[16] = "22";
 comments[16] = "Id Pregunta: 125. ";
 preguntaids[16] = 125


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[17]= new Array();
 choices[17][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[17][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[17][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[17][3] = "El Instituto de la Mujer de Extremadura.";
 answers[17] = choices[17][3];
 units[17] = "14";
 comments[17] = "Id Pregunta: 647. Junta de Extremadura A1 2015";
 preguntaids[17] = 647


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[18]= "19)  En cuanto al an&aacute;lisis DAFO:";
 choices[18]= new Array();
 choices[18][0] = "Considera detallada y exclusivamente factores internos.";
 choices[18][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[18][2] = "Considera detallada y exclusivamente factores externos.";
 choices[18][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[18] = choices[18][1];
 units[18] = "83";
 comments[18] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[18] = 41


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[19]= "20)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[19]= new Array();
 choices[19][0] = "Windows Phone";
 choices[19][1] = "Blackberry";
 choices[19][2] = "iOS";
 choices[19][3] = "Android";
 answers[19] = choices[19][3];
 units[19] = "59";
 comments[19] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[19] = 64


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[20]= new Array();
 choices[20][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[20][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[20][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[20][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[20] = choices[20][2];
 units[20] = "71";
 comments[20] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[20] = 39


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[21]= new Array();
 choices[21][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[21][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[21][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[21][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[21] = 201


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[22]= "23)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[22]= new Array();
 choices[22][0] = "los registros mercantiles";
 choices[22][1] = "los registros de la propiedad";
 choices[22][2] = "los protocolos notariales";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[22] = 540


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[23]= "24)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[23]= new Array();
 choices[23][0] = "Ley Org&aacute;nica.";
 choices[23][1] = "Ley de Bases.";
 choices[23][2] = "Ley ordinaria.";
 choices[23][3] = "Mandato.";
 answers[23] = choices[23][1];
 units[23] = "1";
 comments[23] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[23] = 189


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[24]= "25)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[24]= new Array();
 choices[24][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[24][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[24][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[24][3] = "Todas las respuestas son correctas.";
 answers[24] = choices[24][3];
 units[24] = "5";
 comments[24] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[24] = 375


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[25]= new Array();
 choices[25][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[25][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[25][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[25][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[25] = choices[25][1];
 units[25] = "125";
 comments[25] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[25] = 858


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[26]= "27)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[26]= new Array();
 choices[26][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[26][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[26][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[26][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 339. UNION EUROPEA";
 preguntaids[26] = 339


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[27]= "28)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[27]= new Array();
 choices[27][0] = "Ejecuci&oacute;n";
 choices[27][1] = "Adjudicaci&oacute;n";
 choices[27][2] = "Licitaci&oacute;n";
 choices[27][3] = "Formalizaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "37";
 comments[27] = "Id Pregunta: 69. AGE A1 2015";
 preguntaids[27] = 69


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[28]= "29)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[28][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[28][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[28][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[28] = 270


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[29]= "30)  La soberan&iacute;a nacional reside en:";
 choices[29]= new Array();
 choices[29][0] = "el Parlamento nacional.";
 choices[29][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[29][2] = "el pueblo espa&ntilde;ol.";
 choices[29][3] = "el Congreso y el Senado.";
 answers[29] = choices[29][3];
 units[29] = "1";
 comments[29] = "Id Pregunta: 255. CONSTITUCION1978";
 preguntaids[29] = 255


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[30]= "31)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[30]= new Array();
 choices[30][0] = "Presentar la moci&oacute;n de censura.";
 choices[30][1] = "Presidir las sesiones del Parlamento.";
 choices[30][2] = "Organizar la Secretar&iacute;a General.";
 choices[30][3] = "Preparar las actividades de las Comisiones.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 367. UNION EUROPEA";
 preguntaids[30] = 367


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[31]= "32)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[31]= new Array();
 choices[31][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[31][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[31][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[31][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 101. ";
 preguntaids[31] = 101


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[32]= "33)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[32]= new Array();
 choices[32][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[32][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[32][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[32][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[32] = choices[32][1];
 units[32] = "63";
 comments[32] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[32] = 613


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[33]= "34)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[33]= new Array();
 choices[33][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[33][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[33][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[33][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 187. CONSTITUCION1978";
 preguntaids[33] = 187


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[34]= new Array();
 choices[34][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[34][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[34][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[34][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 253. CONSTITUCION1978";
 preguntaids[34] = 253


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[35]= new Array();
 choices[35][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[35][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[35][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[35][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[35] = choices[35][1];
 units[35] = "19";
 comments[35] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[35] = 581


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[36]= new Array();
 choices[36][0] = "verbalmente";
 choices[36][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[36][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[36][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[36] = choices[36][2];
 units[36] = "7";
 comments[36] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";
 preguntaids[36] = 159


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[37]= new Array();
 choices[37][0] = "732";
 choices[37][1] = "626";
 choices[37][2] = "786";
 choices[37][3] = "360";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[37] = 337


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[38]= "39)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[38][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[38][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[38][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[38] = choices[38][0];
 units[38] = "19";
 comments[38] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";
 preguntaids[38] = 165


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[39][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[39][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[39][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[39] = choices[39][1];
 units[39] = "86";
 comments[39] = "Id Pregunta: 72. AGE A1 2015";
 preguntaids[39] = 72


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[40]= new Array();
 choices[40][0] = "La Comisi&oacute;n Permanente.";
 choices[40][1] = "El Presidente.";
 choices[40][2] = "El Pleno.";
 choices[40][3] = "El Vicepresidente.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 261. CONSTITUCION1978";
 preguntaids[40] = 261


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[41]= "42)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[41]= new Array();
 choices[41][0] = "Conformidad";
 choices[41][1] = "Responsabilidad";
 choices[41][2] = "Adquisici&oacute;n";
 choices[41][3] = "Desempe&ntilde;o";
 answers[41] = choices[41][0];
 units[41] = "26";
 comments[41] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[41] = 548


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[42]= new Array();
 choices[42][0] = "A la CETIC";
 choices[42][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[42][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[42][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[42] = choices[42][3];
 units[42] = "19";
 comments[42] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[42] = 582


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[43]= new Array();
 choices[43][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[43][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[43][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[43][3] = "Todas las anteriores son verdaderas.";
 answers[43] = choices[43][3];
 units[43] = "125";
 comments[43] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[43] = 864


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[44]= new Array();
 choices[44][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[44][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[44][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[44][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[44] = choices[44][3];
 units[44] = "101";
 comments[44] = "Id Pregunta: 605. Junta de Extremadura A1 2015";
 preguntaids[44] = 605


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[45]= "46)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[45]= new Array();
 choices[45][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[45][1] = "Publicidad de las normas.";
 choices[45][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[45][3] = "Coordinaci&oacute;n normativa.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[45] = 244


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[46]= new Array();
 choices[46][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[46][1] = "Intervenci&oacute;n formal y material.";
 choices[46][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[46][3] = "Intervenci&oacute;n formal y general.";
 answers[46] = choices[46][1];
 units[46] = "10";
 comments[46] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[46] = 480


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[47]= "48)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "A nivel de art&iacute;culo.";
 choices[47][1] = "A nivel de cap&iacute;tulo.";
 choices[47][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[47][3] = "A nivel de concepto.";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[47] = 481


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[48]= "49)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[48]= new Array();
 choices[48][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[48][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[48][2] = "Se basan en sistemas distribuidos";
 choices[48][3] = "Se basan en el modelo de datos relacional";
 answers[48] = choices[48][2];
 units[48] = "73";
 comments[48] = "Id Pregunta: 102. ";
 preguntaids[48] = 102


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[49]= "50)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[49]= new Array();
 choices[49][0] = "la Administraci&oacute;n General del Estado";
 choices[49][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[49][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[49][3] = "el sector p&uacute;blico y privado institucional";
 answers[49] = choices[49][3];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[49] = 765


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[50]= new Array();
 choices[50][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[50][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[50][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[50][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[50] = 507


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[51]= "52)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[51]= new Array();
 choices[51][0] = "Discriminaci&oacute;n indirecta.";
 choices[51][1] = "Discriminaci&oacute;n directa.";
 choices[51][2] = "Discriminaci&oacute;n por maternidad.";
 choices[51][3] = "Discriminaci&oacute;n abusiva.";
 answers[51] = choices[51][1];
 units[51] = "14";
 comments[51] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[51] = 395


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[52]= new Array();
 choices[52][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[52][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[52][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[52][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 833. Ley 40/2015";
 preguntaids[52] = 833


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[53]= "54)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[53]= new Array();
 choices[53][0] = "Interoperabilidad";
 choices[53][1] = "Integridad";
 choices[53][2] = "Capital humano";
 choices[53][3] = "Trazabilidad";
 answers[53] = choices[53][2];
 units[53] = "19";
 comments[53] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[53] = 166


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[54]= "55)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[54][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[54][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[54][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 818. Ley 40/2015";
 preguntaids[54] = 818


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[55]= "56)  Los Reglamentos no se caracterizan por:";
 choices[55]= new Array();
 choices[55][0] = "No poseer alcance general.";
 choices[55][1] = "Ser obligatorios.";
 choices[55][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[55][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 363. UNION EUROPEA";
 preguntaids[55] = 363


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[56]= new Array();
 choices[56][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[56][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[56][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[56][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[56] = choices[56][2];
 units[56] = "1";
 comments[56] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[56] = 233


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[57]= new Array();
 choices[57][0] = "La CETIC";
 choices[57][1] = "Los Ministerios";
 choices[57][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][3] = "Ninguno de los anteriores";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 597. Estrategia TIC";
 preguntaids[57] = 597


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[58]= "59)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[58]= new Array();
 choices[58][0] = "el Gobierno de la Naci&oacute;n";
 choices[58][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[58][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[58][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[58] = choices[58][3];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[58] = 773


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[59]= new Array();
 choices[59][0] = "Backup full.";
 choices[59][1] = "Backup diferencial.";
 choices[59][2] = "Backup incremental.";
 choices[59][3] = "Backup deduplicado.";
 answers[59] = choices[59][3];
 units[59] = "53";
 comments[59] = "Id Pregunta: 852. Xunta de Galicia 2015";
 preguntaids[59] = 852


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[60]= "61)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[60]= new Array();
 choices[60][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[60][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[60][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[60][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[60] = choices[60][2];
 units[60] = "76";
 comments[60] = "Id Pregunta: 604. Junta de Extremadura A1 2015";
 preguntaids[60] = 604


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[61]= new Array();
 choices[61][0] = "IEEE 802.11p";
 choices[61][1] = "IEEE 802.11r";
 choices[61][2] = "IEEE 802.11v";
 choices[61][3] = "IEEE 802.11w";
 answers[61] = choices[61][1];
 units[61] = "112";
 comments[61] = "Id Pregunta: 574. Tema 112. TAI 2016.";
 preguntaids[61] = 574


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[62]= "63)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[62]= new Array();
 choices[62][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[62][1] = "Static &amp; Active process for REsolution Bank.";
 choices[62][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[62][3] = "Super Active REsponse for Banks";
 answers[62] = choices[62][0];
 units[62] = "12";
 comments[62] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[62] = 139


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[63]= "64)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[63]= new Array();
 choices[63][0] = "61";
 choices[63][1] = "53";
 choices[63][2] = "65";
 choices[63][3] = "67";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[63] = 248


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[64]= new Array();
 choices[64][0] = "Ley Org&aacute;nica.";
 choices[64][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[64][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[64][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[64] = 203


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[65]= new Array();
 choices[65][0] = "Cuatro.";
 choices[65][1] = "Ninguno.";
 choices[65][2] = "Dos.";
 choices[65][3] = "Seis.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[65] = 211


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[66]= "67)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[66]= new Array();
 choices[66][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[66][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[66][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "7";
 comments[66] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[66] = 533


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[67]= "68)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[67]= new Array();
 choices[67][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[67][1] = "Anteriormente se denominaba Sonar.";
 choices[67][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[67][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[67] = choices[67][2];
 units[67] = "92";
 comments[67] = "Id Pregunta: 272. INTEGRACION CONTINUA";
 preguntaids[67] = 272


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[68]= "69)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[68]= new Array();
 choices[68][0] = "Sean dirigidas por mujeres";
 choices[68][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[68][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[68][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[68] = choices[68][2];
 units[68] = "14";
 comments[68] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[68] = 384


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[69]= new Array();
 choices[69][0] = "Indirecta.";
 choices[69][1] = "Directa.";
 choices[69][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[69][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[69] = 388


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[70]= "71)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[70]= new Array();
 choices[70][0] = "Decretos Legislativos.";
 choices[70][1] = "Decretos-leyes.";
 choices[70][2] = "Leyes de bases.";
 choices[70][3] = "Reales Decretos del Consejo de Ministros.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[70] = 204


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[71]= new Array();
 choices[71][0] = "En 2015";
 choices[71][1] = "En 2013";
 choices[71][2] = "En 2016";
 choices[71][3] = "En 2007";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 560. Agenda Digital";
 preguntaids[71] = 560


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[72]= "73)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[72]= new Array();
 choices[72][0] = "Dos.";
 choices[72][1] = "Cuatro.";
 choices[72][2] = "Cinco.";
 choices[72][3] = "Tres.";
 answers[72] = choices[72][1];
 units[72] = "10";
 comments[72] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";
 preguntaids[72] = 491


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[73]= "74)  El sector p&uacute;blico institucional se integra por:";
 choices[73]= new Array();
 choices[73][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[73][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[73][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[73][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[73] = choices[73][1];
 units[73] = "7";
 comments[73] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[73] = 523


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[74]= "75)  Son bases de datos NoSQL orientadas a objetos:";
 choices[74]= new Array();
 choices[74][0] = "GemStone";
 choices[74][1] = "Zope Object DB";
 choices[74][2] = "Las dos anteriores";
 choices[74][3] = "Solo B)";
 answers[74] = choices[74][2];
 units[74] = "73";
 comments[74] = "Id Pregunta: 107. ";
 preguntaids[74] = 107


