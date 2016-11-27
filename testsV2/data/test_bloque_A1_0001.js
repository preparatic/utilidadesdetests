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

//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[0]= new Array();
 choices[0][0] = "Veinticinco.";
 choices[0][1] = "Veintiuno.";
 choices[0][2] = "Dieciocho.";
 choices[0][3] = "Diecinueve.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[1]= "2)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[1]= new Array();
 choices[1][0] = "Un d&iacute;a";
 choices[1][1] = "Dos d&iacute;as";
 choices[1][2] = "Tres d&iacute;as";
 choices[1][3] = "Cuatro d&iacute;as";
 answers[1] = choices[1][3];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[2]= "3)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[2]= new Array();
 choices[2][0] = "&oacute;rganos superiores";
 choices[2][1] = "&oacute;rganos directivos";
 choices[2][2] = "&oacute;rganos superiores y directivos";
 choices[2][3] = "ninguna es correcta";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[3]= new Array();
 choices[3][0] = "las Cortes generales.";
 choices[3][1] = "los partidos pol&iacute;ticos.";
 choices[3][2] = "los sindicatos.";
 choices[3][3] = "las Comunidades Aut&oacute;nomas.";
 answers[3] = choices[3][1];
 units[3] = "1";
 comments[3] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[4]= "5)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[4]= new Array();
 choices[4][0] = "Diez art&iacute;culos.";
 choices[4][1] = "Nueve art&iacute;culos.";
 choices[4][2] = "Once art&iacute;culos.";
 choices[4][3] = "Ocho art&iacute;culos.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[5]= new Array();
 choices[5][0] = "Art&iacute;culo 70.";
 choices[5][1] = "Art&iacute;culo 54.";
 choices[5][2] = "Articulo 62.";
 choices[5][3] = "Articulo 55. 5.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[6]= new Array();
 choices[6][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[6][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[6][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[6][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[7]= "8)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[7]= new Array();
 choices[7][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[7][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[7][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[7][3] = "Todas son correctas.";
 answers[7] = choices[7][3];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[8]= "9)  El sector p&uacute;blico institucional se integra por:";
 choices[8]= new Array();
 choices[8][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[8][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[8][2] = "las Universidades p&uacute;blicas";
 choices[8][3] = "todas son correctas";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[9]= "10)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[9]= new Array();
 choices[9][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[9][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[9][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[9][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[10]= "11)  El Tribunal de Justicia se cre&oacute; en:";
 choices[10]= new Array();
 choices[10][0] = "El Tratado de la CECA.";
 choices[10][1] = "El Tratado de Niza.";
 choices[10][2] = "El Tratado de &Aacute;msterdam.";
 choices[10][3] = "El Tratado de Lisboa.";
 answers[10] = choices[10][0];
 units[10] = "5";
 comments[10] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[11]= new Array();
 choices[11][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[11][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[11][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[11][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[12]= "13)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[12]= new Array();
 choices[12][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[12][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[12][2] = "Al Congreso de los Diputados.";
 choices[12][3] = "Al Gobierno.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[13]= "14)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[13]= new Array();
 choices[13][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[13][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[13][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[13][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[14][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[14][2] = "Las respuestas A y B son correctas.";
 choices[14][3] = "Las respuestas A y B son falsas.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[15]= "16)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[15]= new Array();
 choices[15][0] = "De las disposiciones favorables.";
 choices[15][1] = "De las disposiciones sancionadoras no favorables.";
 choices[15][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[15][3] = "Las respuestas b) y c) son correctas.";
 answers[15] = choices[15][3];
 units[15] = "1";
 comments[15] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[16]= "17)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[16]= new Array();
 choices[16][0] = "Tres a&ntilde;os.";
 choices[16][1] = "Cuatro a&ntilde;os.";
 choices[16][2] = "Cinco a&ntilde;os.";
 choices[16][3] = "Seis a&ntilde;os.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[17]= new Array();
 choices[17][0] = "Dos Cap&iacute;tulos.";
 choices[17][1] = "Tres Cap&iacute;tulos.";
 choices[17][2] = "Un Cap&iacute;tulo.";
 choices[17][3] = "Cuatro Cap&iacute;tulos.";
 answers[17] = choices[17][1];
 units[17] = "1";
 comments[17] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[18]= new Array();
 choices[18][0] = "Por Real Decreto.";
 choices[18][1] = "Por Orden del Ministerio del Interior.";
 choices[18][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[18][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[19]= "20)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[19]= new Array();
 choices[19][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[19][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[19][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[19][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[19] = choices[19][3];
 units[19] = "1";
 comments[19] = "Id Pregunta: 253. CONSTITUCION1978";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[20]= "21)  La soberan&iacute;a nacional reside en:";
 choices[20]= new Array();
 choices[20][0] = "el Parlamento nacional.";
 choices[20][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[20][2] = "el pueblo espa&ntilde;ol.";
 choices[20][3] = "el Congreso y el Senado.";
 answers[20] = choices[20][3];
 units[20] = "1";
 comments[20] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[21]= "22)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[21]= new Array();
 choices[21][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[21][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[21][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[21][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[21] = choices[21][3];
 units[21] = "5";
 comments[21] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[22]= new Array();
 choices[22][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[22][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[22][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[22][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[23]= "24)  Respecto a los servicios territoriales es correcto:";
 choices[23]= new Array();
 choices[23][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[23][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[23][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[23][3] = "ninguna es correcta";
 answers[23] = choices[23][0];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[24]= "25)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[24]= new Array();
 choices[24][0] = "Los Derechos y Deberes fundamentales.";
 choices[24][1] = "La Corona.";
 choices[24][2] = "El Poder Judicial.";
 choices[24][3] = "Las Cortes Generales.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[25]= "26)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[25]= new Array();
 choices[25][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[25][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[25][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[25][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[26]= new Array();
 choices[26][0] = "El rey, a propuesta del Gobierno.";
 choices[26][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[26][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[26][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[26] = choices[26][1];
 units[26] = "1";
 comments[26] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[27]= "28)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[27]= new Array();
 choices[27][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[27][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[27][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[27][3] = "Todas son correctas.";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[28]= new Array();
 choices[28][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[28][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[28][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[28][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[29]= "30)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[29]= new Array();
 choices[29][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[29][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[29][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[29][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[30]= new Array();
 choices[30][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[30][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[30][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[30][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[31]= "32)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[31]= new Array();
 choices[31][0] = "Cuatro.";
 choices[31][1] = "Una.";
 choices[31][2] = "Cinco.";
 choices[31][3] = "Nueve.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[32]= new Array();
 choices[32][0] = "Quince miembros.";
 choices[32][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[32][2] = "Los miembros que determine el Consejo.";
 choices[32][3] = "Un Presidente y quince miembros.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[33]= "34)  El pacto fiscal europeo de 2012 incluye:";
 choices[33]= new Array();
 choices[33][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[33][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[33][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[33][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[34]= "35)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[34]= new Array();
 choices[34][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[34][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[34][2] = "A y B son correctas.";
 choices[34][3] = "A y B son incorrectas.";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[35]= "36)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[35]= new Array();
 choices[35][0] = "Un recurso de incumplimiento.";
 choices[35][1] = "Recurso de carencia.";
 choices[35][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[35][3] = "Ninguna es correcta.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[36]= new Array();
 choices[36][0] = "No se aplican directamente en los Estados.";
 choices[36][1] = "No son vinculantes.";
 choices[36][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[36][3] = "Tienen alcance general.";
 answers[36] = choices[36][0];
 units[36] = "5";
 comments[36] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[37]= "38)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[37]= new Array();
 choices[37][0] = "Tres a&ntilde;os.";
 choices[37][1] = "Dos a&ntilde;os y medio.";
 choices[37][2] = "Cinco a&ntilde;os.";
 choices[37][3] = "Seis a&ntilde;os.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[38]= new Array();
 choices[38][0] = "Nueve.";
 choices[38][1] = "Diez.";
 choices[38][2] = "Siete.";
 choices[38][3] = "Ocho.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[39]= "40)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[39]= new Array();
 choices[39][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[39][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[39][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[39][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[40]= "41)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[40]= new Array();
 choices[40][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[40][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[40][2] = "Son incompatibles ambas actas de diputado.";
 choices[40][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la respuesta falsa:";
 choices[41]= new Array();
 choices[41][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[41][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[41][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[41][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[42]= "43)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[42]= new Array();
 choices[42][0] = "El 23 de julio de 1952.";
 choices[42][1] = "El 18 de abril de 1951.";
 choices[42][2] = "El 16 de abril de 1948.";
 choices[42][3] = "d)Ninguna de las respuestas son correctas.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[43]= "44)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[43]= new Array();
 choices[43][0] = "Municipios, provincias y CCAA.";
 choices[43][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[43][2] = "En CCAA, 50 provincias y municipios.";
 choices[43][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[44]= "45)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[44]= new Array();
 choices[44][0] = "El Parlamento Europeo.";
 choices[44][1] = "Todas las respuestas son correctas.";
 choices[44][2] = "La Comisi&oacute;n Europea.";
 choices[44][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[45]= new Array();
 choices[45][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[45][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[45][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[45][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[46]= "47)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[46]= new Array();
 choices[46][0] = "los Subsecretarios y Secretarios generales";
 choices[46][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[46][2] = "los Secretarios de Estado";
 choices[46][3] = "los Subdirectores generales";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[47]= "48)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[47]= new Array();
 choices[47][0] = "circulares";
 choices[47][1] = "reglamentos internos";
 choices[47][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[47][3] = "disposiciones de car&aacute;cter general";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[48]= "49)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[48]= new Array();
 choices[48][0] = "El Delegado del Gobierno.";
 choices[48][1] = "El Subdelegado del Gobierno.";
 choices[48][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[48][3] = "El Gobernador Civil.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[49]= "50)  Sobre el Plan Juncker:";
 choices[49]= new Array();
 choices[49][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[49][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[49][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[49][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[50]= "51)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[50]= new Array();
 choices[50][0] = "los &oacute;rganos administrativos";
 choices[50][1] = "las entidades dependientes";
 choices[50][2] = "las unidades administrativas";
 choices[50][3] = "los servicios comunes";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[51]= "52)  El Colegio de Comisarios se re&uacute;ne:";
 choices[51]= new Array();
 choices[51][0] = "Una vez por semana.";
 choices[51][1] = "Una vez al mes.";
 choices[51][2] = "Dos veces en semana.";
 choices[51][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[52]= "53)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[52]= new Array();
 choices[52][0] = "Estrasburgo.";
 choices[52][1] = "Bruselas.";
 choices[52][2] = "Luxemburgo.";
 choices[52][3] = "Holanda.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[53]= "54)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[53]= new Array();
 choices[53][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[53][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[53][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[53][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[54]= "55)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[54]= new Array();
 choices[54][0] = "Subgrupo A1";
 choices[54][1] = "Subgrupo A2";
 choices[54][2] = "Subgrupo B";
 choices[54][3] = "Subgrupo C1";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[55]= new Array();
 choices[55][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[55][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[55][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[55][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[55] = choices[55][2];
 units[55] = "1";
 comments[55] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[56]= "57)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[56]= new Array();
 choices[56][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[56][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[56][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[56][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[57]= "58)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[57]= new Array();
 choices[57][0] = "el Gobierno de la Naci&oacute;n";
 choices[57][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[57][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[57][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[58]= new Array();
 choices[58][0] = "Al Consejo Europeo.";
 choices[58][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[58][2] = "A la Comisi&oacute;n Europea.";
 choices[58][3] = "Al Parlamento Europeo.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[59]= new Array();
 choices[59][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[59][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[59][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[59][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[60]= "61)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[60]= new Array();
 choices[60][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[60][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[60][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[60][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[61]= "62)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[61]= new Array();
 choices[61][0] = "la capital del pa&iacute;s";
 choices[61][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[61][2] = "cada una de las provincias";
 choices[61][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[61] = choices[61][1];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[62]= "63)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[62][1] = "la Organizaci&oacute;n Territorial";
 choices[62][2] = "la Organizaci&oacute;n sectorial";
 choices[62][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[63]= "64)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[63]= new Array();
 choices[63][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[63][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[63][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[63][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[63] = choices[63][0];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[64]= new Array();
 choices[64][0] = "De los derechos y deberes fundamentales.";
 choices[64][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[64][2] = "Derechos y libertades.";
 choices[64][3] = "De la Corona.";
 answers[64] = choices[64][1];
 units[64] = "1";
 comments[64] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[65]= "66)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[65]= new Array();
 choices[65][0] = "El Presidente del Congreso de los Diputados.";
 choices[65][1] = "El Presidente del Gobierno.";
 choices[65][2] = "El Rey.";
 choices[65][3] = "El Consejo de Ministros.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[66]= new Array();
 choices[66][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[66][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[66][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[66][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[66] = choices[66][2];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 822. Ley 40/2015";


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


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[68]= "69)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[68]= new Array();
 choices[68][0] = "los Subsecretarios y los Secretarios generales";
 choices[68][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[68][2] = "los Secretarios de Estado y los Directores generales";
 choices[68][3] = "los Ministros y los Secretarios de Estado";
 answers[68] = choices[68][3];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "De la C&aacute;mara respectiva.";
 choices[69][1] = "Del Rey.";
 choices[69][2] = "Del Tribunal Constitucional.";
 choices[69][3] = "Del Tribunal Supremo.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[70]= "71)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[70]= new Array();
 choices[70][0] = "Presentar la moci&oacute;n de censura.";
 choices[70][1] = "Presidir las sesiones del Parlamento.";
 choices[70][2] = "Organizar la Secretar&iacute;a General.";
 choices[70][3] = "Preparar las actividades de las Comisiones.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[71]= "72)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[71]= new Array();
 choices[71][0] = "Consejos y Servicios.";
 choices[71][1] = "Servicios permanentes y no permanentes.";
 choices[71][2] = "Direcciones Generales.";
 choices[71][3] = "Direcciones ministeriales.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[72]= new Array();
 choices[72][0] = "732";
 choices[72][1] = "626";
 choices[72][2] = "786";
 choices[72][3] = "360";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[73]= new Array();
 choices[73][0] = "La Comisi&oacute;n Permanente.";
 choices[73][1] = "El Presidente.";
 choices[73][2] = "El Pleno.";
 choices[73][3] = "El Vicepresidente.";
 answers[73] = choices[73][3];
 units[73] = "1";
 comments[73] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[74]= "75)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[74]= new Array();
 choices[74][0] = "El Segundo.";
 choices[74][1] = "El Primero.";
 choices[74][2] = "El Preliminar.";
 choices[74][3] = "El Tercero.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 266. CONSTITUCION1978";


