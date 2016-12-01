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

//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[0]= new Array();
 choices[0][0] = "Veinte.";
 choices[0][1] = "Quince.";
 choices[0][2] = "Diez.";
 choices[0][3] = "Doce.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[0] = 264


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[1][1] = "Por Orden Ministerial.";
 choices[1][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[1][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 247. CONSTITUCION1978";
 preguntaids[1] = 247


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[2]= new Array();
 choices[2][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[2][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[2][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[2][3] = "El Senado se compone de 350 senadores.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[2] = 212


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[3]= "4)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[3]= new Array();
 choices[3][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[3][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[3][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[3][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[3] = 250


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[4]= "5)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[4]= new Array();
 choices[4][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[4][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[4][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[4][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[4] = 238


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[5]= new Array();
 choices[5][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[5][1] = "La delimitaci&oacute;n de su territorio.";
 choices[5][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[5][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[5] = 228


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[6]= "7)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[6][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[6][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[6][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[6] = 172


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[7]= new Array();
 choices[7][0] = "El Presidente del Senado";
 choices[7][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[7][2] = "El Presidente del Gobierno";
 choices[7][3] = "El Presidente de las Cortes Generales";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[7] = 265


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[8]= "9)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[8]= new Array();
 choices[8][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[8][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[8][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[8][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[8] = 236


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[9]= new Array();
 choices[9][0] = "al menos por 50 Diputados.";
 choices[9][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[9][2] = "por la Mesa del Congreso de los Diputados.";
 choices[9][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[9] = 183


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[10]= "11)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[10]= new Array();
 choices[10][0] = "3 a&ntilde;os.";
 choices[10][1] = "5 a&ntilde;os.";
 choices[10][2] = "4 a&ntilde;os.";
 choices[10][3] = "6 a&ntilde;os.";
 answers[10] = choices[10][1];
 units[10] = "1";
 comments[10] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[10] = 193


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[11]= new Array();
 choices[11][0] = "No, en ning&uacute;n caso.";
 choices[11][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[11][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[11][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[11] = choices[11][3];
 units[11] = "1";
 comments[11] = "Id Pregunta: 188. CONSTITUCION1978";
 preguntaids[11] = 188


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[12]= "13)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[12]= new Array();
 choices[12][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[12][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[12][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[12][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[12] = choices[12][1];
 units[12] = "1";
 comments[12] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[12] = 263


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[13]= new Array();
 choices[13][0] = "Un diputado y un senador, cada una de ellas";
 choices[13][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[13][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[13][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 192. CONSTITUCION1978";
 preguntaids[13] = 192


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[14]= new Array();
 choices[14][0] = "El Presidente del Gobierno.";
 choices[14][1] = "El Consejo de Ministros.";
 choices[14][2] = "40 Diputados.";
 choices[14][3] = "El Ministerio Fiscal.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 216. CONSTITUCION1978";
 preguntaids[14] = 216


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[15]= new Array();
 choices[15][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[15][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[15][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[15][3] = "A las Diputaciones y a las Comarcas.";
 answers[15] = choices[15][3];
 units[15] = "1";
 comments[15] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[15] = 229


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[16]= "17)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[16]= new Array();
 choices[16][0] = "Municipios, provincias y CCAA.";
 choices[16][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[16][2] = "En CCAA, 50 provincias y municipios.";
 choices[16][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 258. CONSTITUCION1978";
 preguntaids[16] = 258


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[17]= "18)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[17]= new Array();
 choices[17][0] = "Ley Org&aacute;nica.";
 choices[17][1] = "Ley de Bases.";
 choices[17][2] = "Ley ordinaria.";
 choices[17][3] = "Mandato.";
 answers[17] = choices[17][1];
 units[17] = "1";
 comments[17] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[17] = 189


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[18]= new Array();
 choices[18][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[18][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[18][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[18][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[18] = 199


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[19]= "20)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[19]= new Array();
 choices[19][0] = "Decretos Legislativos.";
 choices[19][1] = "Decretos-leyes.";
 choices[19][2] = "Leyes de bases.";
 choices[19][3] = "Reales Decretos del Consejo de Ministros.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[19] = 204


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[20]= new Array();
 choices[20][0] = "Por Real Decreto.";
 choices[20][1] = "Por Orden del Ministerio del Interior.";
 choices[20][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[20][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[20] = 230


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[21]= new Array();
 choices[21][0] = "El rey, a propuesta del Gobierno.";
 choices[21][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[21][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[21][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 210. CONSTITUCION1978";
 preguntaids[21] = 210


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[22]= new Array();
 choices[22][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[22][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[22][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[22][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[22] = choices[22][1];
 units[22] = "1";
 comments[22] = "Id Pregunta: 175. CONSTITUCION1978";
 preguntaids[22] = 175


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[23]= new Array();
 choices[23][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[23][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[23][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[23][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 214. CONSTITUCION1978";
 preguntaids[23] = 214


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[24]= "25)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[24][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[24][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[24][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[24] = 270


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[25]= new Array();
 choices[25][0] = "117.5";
 choices[25][1] = "117.1";
 choices[25][2] = "116";
 choices[25][3] = "15";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[25] = 260


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[26]= "27)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[26]= new Array();
 choices[26][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[26][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[26][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[26][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[26] = 226


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[27]= new Array();
 choices[27][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[27][1] = "Solamente el Congreso.";
 choices[27][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[27][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[27] = 176


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[28]= "29)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[28]= new Array();
 choices[28][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[28][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[28][2] = "Son refrendados por el Rey.";
 choices[28][3] = "Son convocados por el Presidente del Gobierno.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 217. CONSTITUCION1978";
 preguntaids[28] = 217


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[29]= "30)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[29]= new Array();
 choices[29][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[29][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[29][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[29][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[29] = 241


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[30]= "31)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[30]= new Array();
 choices[30][0] = "Establecer tributos.";
 choices[30][1] = "Desarrollar lo establecido en una Ley.";
 choices[30][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[30][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[30] = 197


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[31]= "32)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[31]= new Array();
 choices[31][0] = "Al Gobierno.";
 choices[31][1] = "A las Cortes Generales.";
 choices[31][2] = "Al Poder Judicial.";
 choices[31][3] = "Al Congreso de los Diputados.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[31] = 195


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[32]= "33)  La iniciativa legislativa corresponde:";
 choices[32]= new Array();
 choices[32][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[32][1] = "Al rey y al Gobierno.";
 choices[32][2] = "Al Congreso, al Senado y al Rey.";
 choices[32][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[32] = choices[32][3];
 units[32] = "1";
 comments[32] = "Id Pregunta: 259. CONSTITUCION1978";
 preguntaids[32] = 259


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[33]= new Array();
 choices[33][0] = "Dos Cap&iacute;tulos.";
 choices[33][1] = "Tres Cap&iacute;tulos.";
 choices[33][2] = "Un Cap&iacute;tulo.";
 choices[33][3] = "Cuatro Cap&iacute;tulos.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 246. CONSTITUCION1978";
 preguntaids[33] = 246


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[34]= "35)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[34]= new Array();
 choices[34][0] = "Los Derechos y Deberes fundamentales.";
 choices[34][1] = "La Corona.";
 choices[34][2] = "El Poder Judicial.";
 choices[34][3] = "Las Cortes Generales.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 267. CONSTITUCION1978";
 preguntaids[34] = 267


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[35]= "36)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[35]= new Array();
 choices[35][0] = "Cuatro.";
 choices[35][1] = "Una.";
 choices[35][2] = "Cinco.";
 choices[35][3] = "Nueve.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[35] = 268


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[36]= "37)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[36]= new Array();
 choices[36][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[36][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[36][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[36][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[36] = 190


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[37]= "38)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[37]= new Array();
 choices[37][0] = "El Jefe del Estado.";
 choices[37][1] = "El Tribunal Constitucional.";
 choices[37][2] = "El Congreso de los Diputados.";
 choices[37][3] = "Las Cortes Generales.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[37] = 235


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[38]= "39)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[38]= new Array();
 choices[38][0] = "El derecho a la propiedad privada.";
 choices[38][1] = "El derecho de asociaci&oacute;n.";
 choices[38][2] = "El derecho de fundaci&oacute;n.";
 choices[38][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[38] = 174


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[39]= new Array();
 choices[39][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[39][1] = "Autorizar indultos generales.";
 choices[39][2] = "Sancionar las leyes.";
 choices[39][3] = "Promulgar las leyes.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[39] = 185


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[40]= "41)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[40]= new Array();
 choices[40][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[40][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[40][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[40][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[40] = 177


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[41]= new Array();
 choices[41][0] = "Cuatro.";
 choices[41][1] = "Ninguno.";
 choices[41][2] = "Dos.";
 choices[41][3] = "Seis.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[41] = 211


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[42]= "43)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[42]= new Array();
 choices[42][0] = "l Consejo General del Poder Judicial";
 choices[42][1] = "El pleno de Tribunal Constitucional";
 choices[42][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[42][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[42] = choices[42][3];
 units[42] = "1";
 comments[42] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[42] = 181


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[43]= "44)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[43]= new Array();
 choices[43][0] = "Rey.";
 choices[43][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[43][2] = "Constituci&oacute;n.";
 choices[43][3] = "Pueblo.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[43] = 251


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[44]= "45)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[44]= new Array();
 choices[44][0] = "De las disposiciones favorables.";
 choices[44][1] = "De las disposiciones sancionadoras no favorables.";
 choices[44][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[44][3] = "Las respuestas b) y c) son correctas.";
 answers[44] = choices[44][3];
 units[44] = "1";
 comments[44] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[44] = 252


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[45]= new Array();
 choices[45][0] = "Art&iacute;culo 16.2.";
 choices[45][1] = "Art&iacute;culo 17.1.";
 choices[45][2] = "Art&iacute;culo 18.1.";
 choices[45][3] = "Art&iacute;culo 18.2.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[45] = 249


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[46]= "47)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[46]= new Array();
 choices[46][0] = "Al Presidente del Gobierno.";
 choices[46][1] = "A las Cortes Generales";
 choices[46][2] = "A los electores.";
 choices[46][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 196. CONSTITUCION1978";
 preguntaids[46] = 196


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[47]= new Array();
 choices[47][0] = "Ley Org&aacute;nica.";
 choices[47][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[47][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[47][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[47] = 203


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[48]= new Array();
 choices[48][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[48][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[48][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[48][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[48] = 233


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[49]= new Array();
 choices[49][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[49][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[49][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[49][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[49] = choices[49][1];
 units[49] = "1";
 comments[49] = "Id Pregunta: 219. CONSTITUCION1978";
 preguntaids[49] = 219


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[50]= new Array();
 choices[50][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[50][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[50][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[50][3] = "Sancionar y publicar las leyes.";
 answers[50] = choices[50][2];
 units[50] = "1";
 comments[50] = "Id Pregunta: 242. CONSTITUCION1978";
 preguntaids[50] = 242


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[51]= "52)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[51]= new Array();
 choices[51][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[51][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[51][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[51][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 186. CONSTITUCION1978";
 preguntaids[51] = 186


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[52]= new Array();
 choices[52][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[52][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[52][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[52][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 178. CONSTITUCION1978";
 preguntaids[52] = 178


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[53]= new Array();
 choices[53][0] = "De los derechos y deberes fundamentales.";
 choices[53][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[53][2] = "Derechos y libertades.";
 choices[53][3] = "De la Corona.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 245. CONSTITUCION1978";
 preguntaids[53] = 245


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[54]= "55)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[54]= new Array();
 choices[54][0] = "Diez art&iacute;culos.";
 choices[54][1] = "Nueve art&iacute;culos.";
 choices[54][2] = "Once art&iacute;culos.";
 choices[54][3] = "Ocho art&iacute;culos.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 269. CONSTITUCION1978";
 preguntaids[54] = 269


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[55]= new Array();
 choices[55][0] = "las Cortes generales.";
 choices[55][1] = "los partidos pol&iacute;ticos.";
 choices[55][2] = "los sindicatos.";
 choices[55][3] = "las Comunidades Aut&oacute;nomas.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 225. CONSTITUCION1978";
 preguntaids[55] = 225


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "De la C&aacute;mara respectiva.";
 choices[56][1] = "Del Rey.";
 choices[56][2] = "Del Tribunal Constitucional.";
 choices[56][3] = "Del Tribunal Supremo.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 223. CONSTITUCION1978";
 preguntaids[56] = 223


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[57]= new Array();
 choices[57][0] = "Cinco.";
 choices[57][1] = "Dos.";
 choices[57][2] = "Cuatro.";
 choices[57][3] = "Siete.";
 answers[57] = choices[57][0];
 units[57] = "1";
 comments[57] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[57] = 213


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[58][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[58][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[58][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[58] = 201


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[59]= "60)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[59]= new Array();
 choices[59][0] = "El Rey.";
 choices[59][1] = "El Jefe del Estado.";
 choices[59][2] = "El Gobierno.";
 choices[59][3] = "El Presidente del Gobierno.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[59] = 208


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[60]= "61)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[60]= new Array();
 choices[60][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[60][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[60][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[60][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[60] = 191


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[61]= "62)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[61]= new Array();
 choices[61][0] = "El Presidente y su gabinete.";
 choices[61][1] = "El Presidente y sus Ministros.";
 choices[61][2] = "El Rey y el Presidente.";
 choices[61][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 257. CONSTITUCION1978";
 preguntaids[61] = 257


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[62]= "63)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[62]= new Array();
 choices[62][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[62][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[62][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[62][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[62] = 240


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[63]= new Array();
 choices[63][0] = "Art&iacute;culo 70.";
 choices[63][1] = "Art&iacute;culo 54.";
 choices[63][2] = "Articulo 62.";
 choices[63][3] = "Articulo 55. 5.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 243. CONSTITUCION1978";
 preguntaids[63] = 243


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[64]= new Array();
 choices[64][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[64][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[64][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[64][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 180. CONSTITUCION1978";
 preguntaids[64] = 180


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[65]= "66)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[65]= new Array();
 choices[65][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[65][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[65][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[65][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[65] = 184


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[66]= new Array();
 choices[66][0] = "absoluta de las Cortes Generales.";
 choices[66][1] = "absoluta del Congreso de los Diputados.";
 choices[66][2] = "simple de las Cortes Generales.";
 choices[66][3] = "simple del Congreso de los Diputados.";
 answers[66] = choices[66][3];
 units[66] = "1";
 comments[66] = "Id Pregunta: 173. CONSTITUCION1978";
 preguntaids[66] = 173


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[67]= new Array();
 choices[67][0] = "Una ley orginaria.";
 choices[67][1] = "Una ley org&aacute;nica.";
 choices[67][2] = "Una ley de bases.";
 choices[67][3] = "Una ley de transferencia.";
 answers[67] = choices[67][1];
 units[67] = "1";
 comments[67] = "Id Pregunta: 179. CONSTITUCION1978";
 preguntaids[67] = 179


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[68]= new Array();
 choices[68][0] = "De los derechos y deberes fundamentales.";
 choices[68][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[68][2] = "Derechos y libertades.";
 choices[68][3] = "De la Corona.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[68] = 221


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[69]= "70)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[69]= new Array();
 choices[69][0] = "El Presidente del Congreso de los Diputados.";
 choices[69][1] = "El Presidente del Gobierno.";
 choices[69][2] = "El Rey.";
 choices[69][3] = "El Consejo de Ministros.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[69] = 231


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[70]= new Array();
 choices[70][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[70][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[70][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[70][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 187. CONSTITUCION1978";
 preguntaids[70] = 187


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[71]= new Array();
 choices[71][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[71][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[71][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[71][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[71] = 220


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[72]= "73)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[72][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[72][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[72][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[72] = 205


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[73]= "74)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[73]= new Array();
 choices[73][0] = "Ley org&aacute;nica.";
 choices[73][1] = "Ley ordinaria.";
 choices[73][2] = "Ley de bases.";
 choices[73][3] = "Ley marco.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[73] = 271


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[74]= new Array();
 choices[74][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[74][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[74][2] = "El que hubieren designado las Cortes Generales.";
 choices[74][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 182. CONSTITUCION1978";
 preguntaids[74] = 182


