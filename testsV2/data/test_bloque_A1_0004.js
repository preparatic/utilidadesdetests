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

//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[0]= new Array();
 choices[0][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[0][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[0][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[0][3] = "A las Diputaciones y a las Comarcas.";
 answers[0] = choices[0][3];
 units[0] = "1";
 comments[0] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Subdirectores generales:";
 choices[1]= new Array();
 choices[1][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[1][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[1][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[1][3] = "todas son correctas";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[2]= new Array();
 choices[2][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[2][1] = "Autorizar indultos generales.";
 choices[2][2] = "Sancionar las leyes.";
 choices[2][3] = "Promulgar las leyes.";
 answers[2] = choices[2][1];
 units[2] = "1";
 comments[2] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[3]= new Array();
 choices[3][0] = "Constitucional.";
 choices[3][1] = "Penal.";
 choices[3][2] = "Militar.";
 choices[3][3] = "Tribunales consuetudinarios.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[4]= "5)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "El Presidente del Congreso de los Diputados.";
 choices[4][1] = "El Presidente del Gobierno.";
 choices[4][2] = "El Rey.";
 choices[4][3] = "El Consejo de Ministros.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[5]= new Array();
 choices[5][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[5][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[5][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[5][3] = "Todas son correctas.";
 answers[5] = choices[5][3];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[6]= "7)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[6]= new Array();
 choices[6][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[6][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[6][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[6][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[6] = choices[6][1];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[7]= "8)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[7]= new Array();
 choices[7][0] = "los Secretarios generales t&eacute;cnicos";
 choices[7][1] = "los Directores generales";
 choices[7][2] = "los Secretarios generales";
 choices[7][3] = "los Subsecretarios";
 answers[7] = choices[7][1];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[8]= "9)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[8]= new Array();
 choices[8][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[8][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[8][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[8][3] = "Todas son correctas.";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[9]= new Array();
 choices[9][0] = "117.5";
 choices[9][1] = "117.1";
 choices[9][2] = "116";
 choices[9][3] = "15";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[10]= "11)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[10]= new Array();
 choices[10][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[10][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[10][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[10][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[11]= "12)  Las Administraciones P&uacute;blicas:";
 choices[11]= new Array();
 choices[11][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[11][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[11][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[11][3] = "todas son correctas";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[12]= "13)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[12]= new Array();
 choices[12][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[12][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[12][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[12][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[13]= new Array();
 choices[13][0] = "El Presidente del Senado.";
 choices[13][1] = "El Defensor del Pueblo.";
 choices[13][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[13][3] = "El Presidente del Gobierno.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[14]= "15)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[14]= new Array();
 choices[14][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[14][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[14][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[14][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[15]= "16)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[15]= new Array();
 choices[15][0] = "18 miembros.";
 choices[15][1] = "Ninguna es correcta.";
 choices[15][2] = "22 miembros.";
 choices[15][3] = "21 miembros.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[16]= "17)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[16]= new Array();
 choices[16][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[16][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[16][2] = "Son incompatibles ambas actas de diputado.";
 choices[16][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[16] = choices[16][2];
 units[16] = "5";
 comments[16] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[17]= "18)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[17]= new Array();
 choices[17][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[17][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[17][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[17][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[17] = choices[17][0];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[18]= "19)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[18]= new Array();
 choices[18][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[18][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[18][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[18][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[18] = choices[18][3];
 units[18] = "1";
 comments[18] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[19]= new Array();
 choices[19][0] = "23";
 choices[19][1] = "20";
 choices[19][2] = "14";
 choices[19][3] = "18";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 343. UNION EUROPEA";


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


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[21]= "22)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[21]= new Array();
 choices[21][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[21][1] = "los Subdelegados del Gobierno en las provincias";
 choices[21][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[21][3] = "a y b son correctas";
 answers[21] = choices[21][3];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[22]= "23)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[22]= new Array();
 choices[22][0] = "personalidad jur&iacute;dica propia";
 choices[22][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[22][2] = "personalidad jur&iacute;dica plena";
 choices[22][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[23]= new Array();
 choices[23][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[23][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[23][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[23][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[24]= new Array();
 choices[24][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[24][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[24][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[24][3] = "Todas son correctas.";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[25]= "26)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[25]= new Array();
 choices[25][0] = "Subgrupo A1";
 choices[25][1] = "Subgrupo A2";
 choices[25][2] = "Subgrupo B";
 choices[25][3] = "Subgrupo C1";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la respuesta falsa:";
 choices[26]= new Array();
 choices[26][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[26][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[26][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[26][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[27]= "28)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[27]= new Array();
 choices[27][0] = "CO.PER.";
 choices[27][1] = "COMPER.";
 choices[27][2] = "CO.RE.PER.";
 choices[27][3] = "CO.PE.RRE.";
 answers[27] = choices[27][2];
 units[27] = "5";
 comments[27] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[28]= "29)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[28]= new Array();
 choices[28][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[28][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[28][2] = "Al Congreso de los Diputados.";
 choices[28][3] = "Al Gobierno.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[29]= new Array();
 choices[29][0] = "Cinco.";
 choices[29][1] = "Dos.";
 choices[29][2] = "Cuatro.";
 choices[29][3] = "Siete.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[30]= new Array();
 choices[30][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[30][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[30][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[30][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[31]= "32)  Los Secretarios generales t&eacute;cnicos:";
 choices[31]= new Array();
 choices[31][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[31][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[31][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[31][3] = "todas son correctas";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[32]= new Array();
 choices[32][0] = "El 1 de junio de 1999.";
 choices[32][1] = "El 1 de mayo de 1999.";
 choices[32][2] = "El 1 de abril de 1999.";
 choices[32][3] = "El 1 de marzo de 1999.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[33]= "34)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[33]= new Array();
 choices[33][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[33][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[33][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[33][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[33] = choices[33][1];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[34]= new Array();
 choices[34][0] = "Tres a&ntilde;os.";
 choices[34][1] = "Cuatro a&ntilde;os.";
 choices[34][2] = "Cinco a&ntilde;os.";
 choices[34][3] = "Seis a&ntilde;os.";
 answers[34] = choices[34][3];
 units[34] = "5";
 comments[34] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[35]= new Array();
 choices[35][0] = "El Consejo Europeo.";
 choices[35][1] = "El Parlamento Europeo.";
 choices[35][2] = "El Consejo.";
 choices[35][3] = "La Comisi&oacute;n.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[36]= "37)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[36]= new Array();
 choices[36][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[36][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[36][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[36][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[37]= new Array();
 choices[37][0] = "Art&iacute;culo 16.2.";
 choices[37][1] = "Art&iacute;culo 17.1.";
 choices[37][2] = "Art&iacute;culo 18.1.";
 choices[37][3] = "Art&iacute;culo 18.2.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[38]= new Array();
 choices[38][0] = "Art&iacute;culo 16.2.";
 choices[38][1] = "Art&iacute;culo 17.1.";
 choices[38][2] = "Art&iacute;culo 18.1.";
 choices[38][3] = "Art&iacute;culo 18.2.";
 answers[38] = choices[38][2];
 units[38] = "1";
 comments[38] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[39]= "40)  La soberan&iacute;a nacional reside en:";
 choices[39]= new Array();
 choices[39][0] = "el Parlamento nacional.";
 choices[39][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[39][2] = "el pueblo espa&ntilde;ol.";
 choices[39][3] = "el Congreso y el Senado.";
 answers[39] = choices[39][3];
 units[39] = "1";
 comments[39] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[40]= "41)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[40]= new Array();
 choices[40][0] = "Tres a&ntilde;os.";
 choices[40][1] = "Cuatro a&ntilde;os.";
 choices[40][2] = "Cinco a&ntilde;os.";
 choices[40][3] = "Seis a&ntilde;os.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 324. UNION EUROPEA";


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


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[42]= "43)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[42]= new Array();
 choices[42][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[42][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[42][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[42][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[43]= "44)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[43]= new Array();
 choices[43][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[43][1] = "El Congreso de los Diputados.";
 choices[43][2] = "Las Cortes Generales.";
 choices[43][3] = "El Consejo de Ministros";
 answers[43] = choices[43][3];
 units[43] = "1";
 comments[43] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[44]= "45)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[44]= new Array();
 choices[44][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[44][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[44][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[44][3] = "todas son correctas";
 answers[44] = choices[44][3];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[45]= "46)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[45]= new Array();
 choices[45][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[45][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[45][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[45][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[45] = choices[45][2];
 units[45] = "5";
 comments[45] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[46]= new Array();
 choices[46][0] = "En 1988.";
 choices[46][1] = "En 1981.";
 choices[46][2] = "En 1982.";
 choices[46][3] = "En 1986.";
 answers[46] = choices[46][3];
 units[46] = "5";
 comments[46] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[47]= new Array();
 choices[47][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[47][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[47][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[47][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[48]= "49)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[48]= new Array();
 choices[48][0] = "Diciembre de 1987.";
 choices[48][1] = "Septiembre de 1989.";
 choices[48][2] = "Octubre de 1990.";
 choices[48][3] = "Noviembre de 1980.";
 answers[48] = choices[48][1];
 units[48] = "5";
 comments[48] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[49]= "50)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[49]= new Array();
 choices[49][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[49][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[49][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[49][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[49] = choices[49][0];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[50]= "51)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[50]= new Array();
 choices[50][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[50][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[50][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[50][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[51]= new Array();
 choices[51][0] = "Veinte.";
 choices[51][1] = "Quince.";
 choices[51][2] = "Diez.";
 choices[51][3] = "Doce.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[52]= new Array();
 choices[52][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[52][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[52][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[52][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[52] = choices[52][1];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[53]= "54)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[53]= new Array();
 choices[53][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[53][1] = "la Organizaci&oacute;n Territorial";
 choices[53][2] = "la Organizaci&oacute;n sectorial";
 choices[53][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[53] = choices[53][2];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[54]= new Array();
 choices[54][0] = "Nueve.";
 choices[54][1] = "Diez.";
 choices[54][2] = "Siete.";
 choices[54][3] = "Ocho.";
 answers[54] = choices[54][3];
 units[54] = "5";
 comments[54] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[55]= "56)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[55]= new Array();
 choices[55][0] = "El Parlamento Europeo.";
 choices[55][1] = "Todas las respuestas son correctas.";
 choices[55][2] = "La Comisi&oacute;n Europea.";
 choices[55][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[56]= "57)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[56]= new Array();
 choices[56][0] = "Subsecretario";
 choices[56][1] = "Subdirector general";
 choices[56][2] = "Secretario de Estado";
 choices[56][3] = "ninguna es correcta";
 answers[56] = choices[56][1];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[57]= "58)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[57]= new Array();
 choices[57][0] = "los Secretarios de Estado";
 choices[57][1] = "los Ministros";
 choices[57][2] = "los Subsecretarios";
 choices[57][3] = "los Secretarios generales";
 answers[57] = choices[57][2];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[58]= "59)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[58]= new Array();
 choices[58][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[58][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[58][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[58][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[59]= new Array();
 choices[59][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[59][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[59][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[59][3] = "Todas son correctas.";
 answers[59] = choices[59][3];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 836. Ley 40/2015";


