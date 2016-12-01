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

//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[0]= new Array();
 choices[0][0] = "Estrasburgo.";
 choices[0][1] = "Bruselas.";
 choices[0][2] = "Luxemburgo.";
 choices[0][3] = "Par&iacute;s.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 305. UNION EUROPEA";
 preguntaids[0] = 305


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[1]= "2)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[1]= new Array();
 choices[1][0] = "Tres a&ntilde;os.";
 choices[1][1] = "Cuatro a&ntilde;os.";
 choices[1][2] = "Cinco a&ntilde;os.";
 choices[1][3] = "Seis a&ntilde;os.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[1] = 324


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[2]= new Array();
 choices[2][0] = "Veinte.";
 choices[2][1] = "Quince.";
 choices[2][2] = "Diez.";
 choices[2][3] = "Doce.";
 answers[2] = choices[2][1];
 units[2] = "1";
 comments[2] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[2] = 264


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[3]= "4)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[3]= new Array();
 choices[3][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[3][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[3][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[3][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[3] = 770


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[4]= new Array();
 choices[4][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[4][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[4][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[4][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[4] = 824


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[5]= "6)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[5]= new Array();
 choices[5][0] = "Cinco a&ntilde;os.";
 choices[5][1] = "Seis a&ntilde;os.";
 choices[5][2] = "Cuatro a&ntilde;os.";
 choices[5][3] = "Tres a&ntilde;os.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 304. UNION EUROPEA";
 preguntaids[5] = 304


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[6]= "7)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[6]= new Array();
 choices[6][0] = "El 23 de julio de 1952.";
 choices[6][1] = "El 18 de abril de 1951.";
 choices[6][2] = "El 16 de abril de 1948.";
 choices[6][3] = "d)Ninguna de las respuestas son correctas.";
 answers[6] = choices[6][0];
 units[6] = "5";
 comments[6] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[6] = 349


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[7]= new Array();
 choices[7][0] = "Al Consejo Europeo.";
 choices[7][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[7][2] = "A la Comisi&oacute;n Europea.";
 choices[7][3] = "Al Parlamento Europeo.";
 answers[7] = choices[7][2];
 units[7] = "5";
 comments[7] = "Id Pregunta: 296. UNION EUROPEA";
 preguntaids[7] = 296


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[8]= new Array();
 choices[8][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[8][1] = "Por Orden Ministerial.";
 choices[8][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[8][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 247. CONSTITUCION1978";
 preguntaids[8] = 247


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[9]= "10)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[9]= new Array();
 choices[9][0] = "un &oacute;rgano superior";
 choices[9][1] = "un &oacute;rgano directivo";
 choices[9][2] = "un &oacute;rgano superior o directivo";
 choices[9][3] = "ninguna es correcta";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[9] = 795


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[10]= "11)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[10]= new Array();
 choices[10][0] = "los &oacute;rganos administrativos";
 choices[10][1] = "las entidades dependientes";
 choices[10][2] = "las unidades administrativas";
 choices[10][3] = "los servicios comunes";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[10] = 799


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[11]= "12)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[11]= new Array();
 choices[11][0] = "&oacute;rganos superiores";
 choices[11][1] = "&oacute;rganos directivos";
 choices[11][2] = "&oacute;rganos superiores y directivos";
 choices[11][3] = "ninguna es correcta";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[11] = 796


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[12]= new Array();
 choices[12][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[12][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[12][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[12][3] = "El Senado se compone de 350 senadores.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[12] = 212


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[13]= "14)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[13]= new Array();
 choices[13][0] = "El Parlamento Europeo.";
 choices[13][1] = "Todas las respuestas son correctas.";
 choices[13][2] = "La Comisi&oacute;n Europea.";
 choices[13][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[13] = 353


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[14]= "15)  Tienen la condici&oacute;n de alto cargo:";
 choices[14]= new Array();
 choices[14][0] = "los &oacute;rganos superiores";
 choices[14][1] = "los &oacute;rganos superiores y directivos";
 choices[14][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[14][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[14] = choices[14][2];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[14] = 794


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[15]= "16)  La recusaci&oacute;n pueden promoverla...";
 choices[15]= new Array();
 choices[15][0] = "Cualquier &oacute;rgano";
 choices[15][1] = "El interesado";
 choices[15][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[15][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[15] = 828


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[16]= "17)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[16]= new Array();
 choices[16][0] = "Cabr&aacute; recurso de alzada";
 choices[16][1] = "Cabr&aacute; el nuevo protesto";
 choices[16][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[16][3] = "No cabr&aacute; recurso alguno";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 832. Ley 40/2015";
 preguntaids[16] = 832


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[17]= "18)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[17]= new Array();
 choices[17][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[17][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[17][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[17][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[17] = 250


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[18]= "19)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[18]= new Array();
 choices[18][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[18][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[18][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[18][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[18] = choices[18][1];
 units[18] = "1";
 comments[18] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[18] = 238


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[19]= "20)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[19]= new Array();
 choices[19][0] = "Diciembre de 1987.";
 choices[19][1] = "Septiembre de 1989.";
 choices[19][2] = "Octubre de 1990.";
 choices[19][3] = "Noviembre de 1980.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 336. UNION EUROPEA";
 preguntaids[19] = 336


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[20]= "21)  El Parlamento Europeo celebrar&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[20][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[20][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[20][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[20] = 290


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[21]= "22)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[21]= new Array();
 choices[21][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[21][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[21][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[21][3] = "Todas son correctas.";
 answers[21] = choices[21][0];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[21] = 835


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[22]= new Array();
 choices[22][0] = "Veinticinco.";
 choices[22][1] = "Veintisiete.";
 choices[22][2] = "Veintinueve.";
 choices[22][3] = "Cuarenta y uno.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 303. UNION EUROPEA";
 preguntaids[22] = 303


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[23]= "24)  El Tribunal de Justicia se cre&oacute; en:";
 choices[23]= new Array();
 choices[23][0] = "El Tratado de la CECA.";
 choices[23][1] = "El Tratado de Niza.";
 choices[23][2] = "El Tratado de &Aacute;msterdam.";
 choices[23][3] = "El Tratado de Lisboa.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 308. UNION EUROPEA";
 preguntaids[23] = 308


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[24]= new Array();
 choices[24][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[24][1] = "La delimitaci&oacute;n de su territorio.";
 choices[24][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[24][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[24] = 228


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[25]= new Array();
 choices[25][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[25][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[25][2] = "Iniciativa europea de libre flujo de datos.";
 choices[25][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[25] = choices[25][2];
 units[25] = "5";
 comments[25] = "Id Pregunta: 286. UNION EUROPEA";
 preguntaids[25] = 286


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[26]= "27)  Los Secretarios generales t&eacute;cnicos:";
 choices[26]= new Array();
 choices[26][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[26][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[26][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[26][3] = "todas son correctas";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[26] = 804


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[27]= "28)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[27]= new Array();
 choices[27][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[27][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[27][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[27][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[27] = choices[27][3];
 units[27] = "5";
 comments[27] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[27] = 317


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[28]= "29)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[28][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[28][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[28][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[28] = 172


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[29]= new Array();
 choices[29][0] = "Quince miembros.";
 choices[29][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[29][2] = "Los miembros que determine el Consejo.";
 choices[29][3] = "Un Presidente y quince miembros.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 299. UNION EUROPEA";
 preguntaids[29] = 299


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[30]= new Array();
 choices[30][0] = "El Presidente del Senado";
 choices[30][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[30][2] = "El Presidente del Gobierno";
 choices[30][3] = "El Presidente de las Cortes Generales";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[30] = 265


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[31]= "32)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[31]= new Array();
 choices[31][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[31][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[31][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[31][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[31] = choices[31][3];
 units[31] = "1";
 comments[31] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[31] = 236


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[32]= "33)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[32]= new Array();
 choices[32][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[32][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[32][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[32][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[32] = choices[32][2];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[32] = 821


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[33]= new Array();
 choices[33][0] = "al menos por 50 Diputados.";
 choices[33][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[33][2] = "por la Mesa del Congreso de los Diputados.";
 choices[33][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[33] = 183


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[34]= "35)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[34]= new Array();
 choices[34][0] = "por Real Decreto";
 choices[34][1] = "reglamentariamente";
 choices[34][2] = "mediante Ley";
 choices[34][3] = "ninguna es correcta";
 answers[34] = choices[34][1];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[34] = 817


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[35]= new Array();
 choices[35][0] = "Conferencia de Presidentes.";
 choices[35][1] = "Convenios de colaboraci&oacute;n.";
 choices[35][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[35][3] = "Conferencias Sectoriales.";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[35] = 846


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[36]= "37)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[36]= new Array();
 choices[36][0] = "3 a&ntilde;os.";
 choices[36][1] = "5 a&ntilde;os.";
 choices[36][2] = "4 a&ntilde;os.";
 choices[36][3] = "6 a&ntilde;os.";
 answers[36] = choices[36][1];
 units[36] = "1";
 comments[36] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[36] = 193


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


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[38]= "39)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "la Administraci&oacute;n General del Estado";
 choices[38][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[38][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[38][3] = "el sector p&uacute;blico y privado institucional";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[38] = 765


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[39]= "40)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[39]= new Array();
 choices[39][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[39][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[39][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[39][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[39] = 809


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[40]= "41)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[40]= new Array();
 choices[40][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[40][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[40][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[40][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[40] = choices[40][1];
 units[40] = "1";
 comments[40] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[40] = 263


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[41]= "42)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[41]= new Array();
 choices[41][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[41][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[41][2] = "a y b son correctas";
 choices[41][3] = "a y b son incorrectas";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[41] = 798


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[42]= "43)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[42]= new Array();
 choices[42][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[42][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[42][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[42][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[42] = 345


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[43]= new Array();
 choices[43][0] = "Nueve.";
 choices[43][1] = "Diez.";
 choices[43][2] = "Siete.";
 choices[43][3] = "Ocho.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 373. UNION EUROPEA";
 preguntaids[43] = 373


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[44]= "45)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[44]= new Array();
 choices[44][0] = "los Secretarios de Estado";
 choices[44][1] = "los Ministros";
 choices[44][2] = "los Subsecretarios";
 choices[44][3] = "los Secretarios generales";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[44] = 810


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[45]= "46)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[45]= new Array();
 choices[45][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[45][1] = "Uno de sus miembros.";
 choices[45][2] = "La Comisi&oacute;n.";
 choices[45][3] = "Todas las respuestas son correctas.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[45] = 350


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[46]= "47)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[46]= new Array();
 choices[46][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[46][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[46][2] = "A y B son correctas.";
 choices[46][3] = "A y B son incorrectas.";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[46] = 844


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[47]= new Array();
 choices[47][0] = "Un diputado y un senador, cada una de ellas";
 choices[47][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[47][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[47][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 192. CONSTITUCION1978";
 preguntaids[47] = 192


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[48]= new Array();
 choices[48][0] = "El Presidente del Gobierno.";
 choices[48][1] = "El Consejo de Ministros.";
 choices[48][2] = "40 Diputados.";
 choices[48][3] = "El Ministerio Fiscal.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 216. CONSTITUCION1978";
 preguntaids[48] = 216


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[49]= new Array();
 choices[49][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[49][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[49][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[49][3] = "A las Diputaciones y a las Comarcas.";
 answers[49] = choices[49][3];
 units[49] = "1";
 comments[49] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[49] = 229


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[50]= new Array();
 choices[50][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[50][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[50][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][1];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[50] = 778


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[51]= "52)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[51]= new Array();
 choices[51][0] = "Municipios, provincias y CCAA.";
 choices[51][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[51][2] = "En CCAA, 50 provincias y municipios.";
 choices[51][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 258. CONSTITUCION1978";
 preguntaids[51] = 258


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[52]= "53)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[52]= new Array();
 choices[52][0] = "la Administraci&oacute;n General del Estado";
 choices[52][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[52][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[52][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[52] = choices[52][3];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[52] = 769


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[53]= "54)  La recusaci&oacute;n se plantear&aacute;...";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo verbalmente";
 choices[53][1] = "S&oacute;lo por escrito";
 choices[53][2] = "Verbalmente o por escrito";
 choices[53][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[53] = 830


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[54]= new Array();
 choices[54][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[54][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[54][2] = "el Ministerio del Interior";
 choices[54][3] = "la Administraci&oacute;n General del Estado";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[54] = 814


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[55]= "56)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[55]= new Array();
 choices[55][0] = "Ley Org&aacute;nica.";
 choices[55][1] = "Ley de Bases.";
 choices[55][2] = "Ley ordinaria.";
 choices[55][3] = "Mandato.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[55] = 189


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[56]= "57)  El Tribunal de Justicia est&aacute; formado por:";
 choices[56]= new Array();
 choices[56][0] = "Un Juez de cada Estado miembro.";
 choices[56][1] = "Por dos Jueces de cada Estado miembro.";
 choices[56][2] = "Por veinte Jueces.";
 choices[56][3] = "Por ocho Jueces.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 322. UNION EUROPEA";
 preguntaids[56] = 322


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[57]= new Array();
 choices[57][0] = "En 1988.";
 choices[57][1] = "En 1981.";
 choices[57][2] = "En 1982.";
 choices[57][3] = "En 1986.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[57] = 371


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a las unidades administrativas:";
 choices[58]= new Array();
 choices[58][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[58][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[58][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[58][3] = "ninguna es correcta";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[58] = 801


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta correcta:";
 choices[59]= new Array();
 choices[59][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[59][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[59][2] = "Las respuestas A y B son correctas.";
 choices[59][3] = "Las respuestas A y B son falsas.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 279. UNION EUROPEA";
 preguntaids[59] = 279


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
 preguntaids[60] = 362


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[61]= "62)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[61]= new Array();
 choices[61][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[61][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[61][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[61][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[61] = choices[61][2];
 units[61] = "5";
 comments[61] = "Id Pregunta: 354. UNION EUROPEA";
 preguntaids[61] = 354


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[62]= new Array();
 choices[62][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[62][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[62][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[62][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[62] = 199


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[63]= "64)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[63]= new Array();
 choices[63][0] = "Decretos Legislativos.";
 choices[63][1] = "Decretos-leyes.";
 choices[63][2] = "Leyes de bases.";
 choices[63][3] = "Reales Decretos del Consejo de Ministros.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[63] = 204


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[64]= new Array();
 choices[64][0] = "Por Real Decreto.";
 choices[64][1] = "Por Orden del Ministerio del Interior.";
 choices[64][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[64][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[64] = 230


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[65][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[65][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[65][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[65] = 845


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[66]= new Array();
 choices[66][0] = "El rey, a propuesta del Gobierno.";
 choices[66][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[66][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[66][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 210. CONSTITUCION1978";
 preguntaids[66] = 210


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[67]= new Array();
 choices[67][0] = "Al Consejo Europeo.";
 choices[67][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[67][2] = "A la Comisi&oacute;n Europea.";
 choices[67][3] = "Al Parlamento Europeo.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[67] = 320


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[68]= new Array();
 choices[68][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[68][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[68][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[68][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[68] = 841


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[69]= new Array();
 choices[69][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[69][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[69][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[69][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[69] = choices[69][1];
 units[69] = "1";
 comments[69] = "Id Pregunta: 175. CONSTITUCION1978";
 preguntaids[69] = 175


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[70]= "71)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[70]= new Array();
 choices[70][0] = "Consejos y Servicios.";
 choices[70][1] = "Servicios permanentes y no permanentes.";
 choices[70][2] = "Direcciones Generales.";
 choices[70][3] = "Direcciones ministeriales.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 318. UNION EUROPEA";
 preguntaids[70] = 318


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[71]= "72)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[71]= new Array();
 choices[71][0] = "Tres a&ntilde;os.";
 choices[71][1] = "Dos a&ntilde;os y medio.";
 choices[71][2] = "Cinco a&ntilde;os.";
 choices[71][3] = "Seis a&ntilde;os.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 291. UNION EUROPEA";
 preguntaids[71] = 291


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[72]= new Array();
 choices[72][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[72][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[72][2] = "la falta de interoperabilidad.";
 choices[72][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[72] = 285


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[73]= "74)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[73]= new Array();
 choices[73][0] = "786 Diputados como m&aacute;ximo.";
 choices[73][1] = "600 Diputados como m&aacute;ximo.";
 choices[73][2] = "650 Diputados como m&aacute;ximo.";
 choices[73][3] = "732 Diputados como m&aacute;ximo.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[73] = 360


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[74]= new Array();
 choices[74][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[74][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[74][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[74][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 214. CONSTITUCION1978";
 preguntaids[74] = 214


