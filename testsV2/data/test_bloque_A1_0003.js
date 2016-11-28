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

//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[0]= new Array();
 choices[0][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[0][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[0][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[0][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[1]= new Array();
 choices[1][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[1][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[1][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[1][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[2]= new Array();
 choices[2][0] = "El Parlamento y el Consejo.";
 choices[2][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[2][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[2][3] = "La Comisi&oacute;n y el Consejo.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[3]= new Array();
 choices[3][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[3][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[3][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[3][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[4]= new Array();
 choices[4][0] = "absoluta de las Cortes Generales.";
 choices[4][1] = "absoluta del Congreso de los Diputados.";
 choices[4][2] = "simple de las Cortes Generales.";
 choices[4][3] = "simple del Congreso de los Diputados.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[5]= "6)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[5]= new Array();
 choices[5][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[5][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[5][2] = "El que hubieren designado las Cortes Generales.";
 choices[5][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[6]= "7)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[6]= new Array();
 choices[6][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[6][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[6][2] = "a y b son correctas";
 choices[6][3] = "a y b son incorrectas";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[7]= "8)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[7]= new Array();
 choices[7][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[7][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[7][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[7][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[7] = choices[7][1];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[8]= "9)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[8]= new Array();
 choices[8][0] = "786 Diputados como m&aacute;ximo.";
 choices[8][1] = "600 Diputados como m&aacute;ximo.";
 choices[8][2] = "650 Diputados como m&aacute;ximo.";
 choices[8][3] = "732 Diputados como m&aacute;ximo.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[9]= new Array();
 choices[9][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[9][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[9][2] = "Todas son correctas.";
 choices[9][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[9] = choices[9][2];
 units[9] = "5";
 comments[9] = "Id Pregunta: 330. UNION EUROPEA";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[10]= new Array();
 choices[10][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[10][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[10][2] = "Iniciativa europea de libre flujo de datos.";
 choices[10][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[11]= "12)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[11]= new Array();
 choices[11][0] = "90";
 choices[11][1] = "50";
 choices[11][2] = "64";
 choices[11][3] = "60";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 331. UNION EUROPEA";


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


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[13]= "14)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[13]= new Array();
 choices[13][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[13][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[13][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[13][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[13] = choices[13][3];
 units[13] = "1";
 comments[13] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[14]= "15)  El sector p&uacute;blico institucional se integra por:";
 choices[14]= new Array();
 choices[14][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[14][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[14][2] = "las Universidades p&uacute;blicas";
 choices[14][3] = "todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[15]= new Array();
 choices[15][0] = "El Consejo Europeo.";
 choices[15][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[15][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[15][3] = "El Parlamento Europeo.";
 answers[15] = choices[15][0];
 units[15] = "5";
 comments[15] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[16]= "17)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[16]= new Array();
 choices[16][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[16][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[16][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[16][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[17]= "18)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[17]= new Array();
 choices[17][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[17][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[17][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[17][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[18]= new Array();
 choices[18][0] = "Veinticinco.";
 choices[18][1] = "Veintisiete.";
 choices[18][2] = "Veintinueve.";
 choices[18][3] = "Cuarenta y uno.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[19]= "20)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[19]= new Array();
 choices[19][0] = "Diez art&iacute;culos.";
 choices[19][1] = "Nueve art&iacute;culos.";
 choices[19][2] = "Once art&iacute;culos.";
 choices[19][3] = "Ocho art&iacute;culos.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[20]= "21)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[20]= new Array();
 choices[20][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[20][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[20][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[20][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[21]= "22)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[21]= new Array();
 choices[21][0] = "X.";
 choices[21][1] = "XIX.";
 choices[21][2] = "XV.";
 choices[21][3] = "XIII.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[22]= "23)  La sede del Parlamento Europeo se encuentra en:";
 choices[22]= new Array();
 choices[22][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[22][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[22][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[22][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[23]= "24)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[23]= new Array();
 choices[23][0] = "un &oacute;rgano superior";
 choices[23][1] = "un &oacute;rgano directivo";
 choices[23][2] = "un &oacute;rgano superior o directivo";
 choices[23][3] = "ninguna es correcta";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[24]= "25)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[24]= new Array();
 choices[24][0] = "Son actos normativos.";
 choices[24][1] = "Poseen alcance general.";
 choices[24][2] = "No son obligatorias.";
 choices[24][3] = "Son actos individuales no normativos.";
 answers[24] = choices[24][3];
 units[24] = "5";
 comments[24] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[25]= "26)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[25]= new Array();
 choices[25][0] = "El rey, a propuesta del Gobierno.";
 choices[25][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[25][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[25][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[25] = choices[25][1];
 units[25] = "1";
 comments[25] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[26][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[26][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[26][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[27]= "28)  Componen la Comisi&oacute;n Europea:";
 choices[27]= new Array();
 choices[27][0] = "Un Comisario por cada Estado miembro.";
 choices[27][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[27][2] = "Dos Comisarios por cada Estado miembro.";
 choices[27][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[28]= "29)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[28]= new Array();
 choices[28][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[28][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[28][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[28][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[29][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[29][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[29][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[29] = choices[29][1];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[30]= "31)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[30]= new Array();
 choices[30][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[30][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[30][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[30][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 803. Ley 40/2015";


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


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[32]= "33)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[32]= new Array();
 choices[32][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[32][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[32][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[32][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[32] = choices[32][3];
 units[32] = "1";
 comments[32] = "Id Pregunta: 253. CONSTITUCION1978";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[33]= new Array();
 choices[33][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[33][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[33][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[33][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[34]= new Array();
 choices[34][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[34][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[34][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[34][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[35]= new Array();
 choices[35][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[35][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[35][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[35][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[36]= new Array();
 choices[36][0] = "No, en ning&uacute;n caso.";
 choices[36][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[36][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[36][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[36] = choices[36][3];
 units[36] = "1";
 comments[36] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[37]= "38)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[37]= new Array();
 choices[37][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[37][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[37][2] = "a y b son correctas";
 choices[37][3] = "a y b son incorrectas";
 answers[37] = choices[37][2];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[38]= "39)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[38]= new Array();
 choices[38][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[38][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[38][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[38][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[38] = choices[38][2];
 units[38] = "1";
 comments[38] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[39]= "40)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[39][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[39][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[39][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[40]= new Array();
 choices[40][0] = "Publicidad.";
 choices[40][1] = "Constituci&oacute;n.";
 choices[40][2] = "Legalidad.";
 choices[40][3] = "Creaci&oacute;n.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[41]= "42)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[41]= new Array();
 choices[41][0] = "Presentar la moci&oacute;n de censura.";
 choices[41][1] = "Presidir las sesiones del Parlamento.";
 choices[41][2] = "Organizar la Secretar&iacute;a General.";
 choices[41][3] = "Preparar las actividades de las Comisiones.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[42]= "43)  Los Reglamentos no se caracterizan por:";
 choices[42]= new Array();
 choices[42][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[42][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[42][2] = "Ser obligatorios.";
 choices[42][3] = "No poseer alcance general.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[43]= "44)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[43]= new Array();
 choices[43][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[43][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[43][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[43][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[43] = choices[43][2];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[44]= new Array();
 choices[44][0] = "Dos Cap&iacute;tulos.";
 choices[44][1] = "Tres Cap&iacute;tulos.";
 choices[44][2] = "Un Cap&iacute;tulo.";
 choices[44][3] = "Cuatro Cap&iacute;tulos.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[45]= new Array();
 choices[45][0] = "Cuatro.";
 choices[45][1] = "Ninguno.";
 choices[45][2] = "Dos.";
 choices[45][3] = "Seis.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[46]= new Array();
 choices[46][0] = "Veinticinco.";
 choices[46][1] = "Veintiuno.";
 choices[46][2] = "Dieciocho.";
 choices[46][3] = "Diecinueve.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[47]= "48)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[47]= new Array();
 choices[47][0] = "Al Presidente del Gobierno.";
 choices[47][1] = "A las Cortes Generales";
 choices[47][2] = "A los electores.";
 choices[47][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[48]= "49)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[48]= new Array();
 choices[48][0] = "por Real Decreto";
 choices[48][1] = "reglamentariamente";
 choices[48][2] = "mediante Ley";
 choices[48][3] = "ninguna es correcta";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[49]= "50)  El Parlamento Europeo celebrar&aacute;:";
 choices[49]= new Array();
 choices[49][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[49][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[49][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[49][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[50]= "51)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[50]= new Array();
 choices[50][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[50][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[50][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[50][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[51]= "52)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[51]= new Array();
 choices[51][0] = "Ley org&aacute;nica.";
 choices[51][1] = "Ley ordinaria.";
 choices[51][2] = "Ley de bases.";
 choices[51][3] = "Ley marco.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[52]= new Array();
 choices[52][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[52][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[52][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[52][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[53]= "54)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[53]= new Array();
 choices[53][0] = "Cuatro.";
 choices[53][1] = "Una.";
 choices[53][2] = "Cinco.";
 choices[53][3] = "Nueve.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[54]= "55)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[54]= new Array();
 choices[54][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[54][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[54][2] = "Cinco a&ntilde;os.";
 choices[54][3] = "Ninguna es correcta.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[55]= new Array();
 choices[55][0] = "El Parlamento y el Consejo.";
 choices[55][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[55][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[55][3] = "La Comisi&oacute;n y el Consejo.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[56]= new Array();
 choices[56][0] = "El 1 de noviembre de 1994.";
 choices[56][1] = "El 1 de noviembre de 1992.";
 choices[56][2] = "El 1 de noviembre de 1995.";
 choices[56][3] = "El 1 de noviembre de 1993.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[57]= new Array();
 choices[57][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[57][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[57][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[57][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[57] = choices[57][0];
 units[57] = "5";
 comments[57] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[58]= "59)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[58]= new Array();
 choices[58][0] = "&oacute;rganos superiores";
 choices[58][1] = "&oacute;rganos directivos";
 choices[58][2] = "&oacute;rganos superiores y directivos";
 choices[58][3] = "ninguna es correcta";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[59]= new Array();
 choices[59][0] = "Crecimiento inteligente.";
 choices[59][1] = "Crecimiento inclusivo.";
 choices[59][2] = "Crecimiento sostenible.";
 choices[59][3] = "Crecimiento integrador.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[60]= "61)  Los Reglamentos no se caracterizan por:";
 choices[60]= new Array();
 choices[60][0] = "No poseer alcance general.";
 choices[60][1] = "Ser obligatorios.";
 choices[60][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[60][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[61]= "62)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[61]= new Array();
 choices[61][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[61][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[61][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[61][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[62]= "63)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[62]= new Array();
 choices[62][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[62][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[62][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[62][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[63]= new Array();
 choices[63][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[63][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[63][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[63][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[64]= "65)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[64]= new Array();
 choices[64][0] = "Decretos Legislativos.";
 choices[64][1] = "Decretos-leyes.";
 choices[64][2] = "Leyes de bases.";
 choices[64][3] = "Reales Decretos del Consejo de Ministros.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[65]= new Array();
 choices[65][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[65][1] = "Solamente el Congreso.";
 choices[65][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[65][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[66]= "67)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[66]= new Array();
 choices[66][0] = "El 23 de julio de 1952.";
 choices[66][1] = "El 18 de abril de 1951.";
 choices[66][2] = "El 16 de abril de 1948.";
 choices[66][3] = "d)Ninguna de las respuestas son correctas.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[67]= "68)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[67]= new Array();
 choices[67][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[67][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[67][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[67][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[68]= "69)  El Colegio de Comisarios se re&uacute;ne:";
 choices[68]= new Array();
 choices[68][0] = "Una vez por semana.";
 choices[68][1] = "Una vez al mes.";
 choices[68][2] = "Dos veces en semana.";
 choices[68][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[69]= "70)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[69]= new Array();
 choices[69][0] = "La Comisi&oacute;n.";
 choices[69][1] = "El Consejo de Europa.";
 choices[69][2] = "El Consejo Europeo.";
 choices[69][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[70]= "71)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[70]= new Array();
 choices[70][0] = "Cinco a&ntilde;os.";
 choices[70][1] = "Seis a&ntilde;os.";
 choices[70][2] = "Cuatro a&ntilde;os.";
 choices[70][3] = "Tres a&ntilde;os.";
 answers[70] = choices[70][0];
 units[70] = "5";
 comments[70] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[71]= new Array();
 choices[71][0] = "De los derechos y deberes fundamentales.";
 choices[71][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[71][2] = "Derechos y libertades.";
 choices[71][3] = "De la Corona.";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[72]= "73)  El pacto fiscal europeo de 2012 incluye:";
 choices[72]= new Array();
 choices[72][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[72][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[72][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[72][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[73]= "74)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[73]= new Array();
 choices[73][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[73][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[73][2] = "Son refrendados por el Rey.";
 choices[73][3] = "Son convocados por el Presidente del Gobierno.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[74]= "75)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[74]= new Array();
 choices[74][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[74][1] = "Publicidad de las normas.";
 choices[74][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[74][3] = "Coordinaci&oacute;n normativa.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 244. CONSTITUCION1978";


