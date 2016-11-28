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

//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[0]= new Array();
 choices[0][0] = "Crecimiento inteligente.";
 choices[0][1] = "Crecimiento inclusivo.";
 choices[0][2] = "Crecimiento sostenible.";
 choices[0][3] = "Crecimiento integrador.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[1]= new Array();
 choices[1][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[1][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[1][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[1][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[1] = choices[1][3];
 units[1] = "106";
 comments[1] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[2]= new Array();
 choices[2][0] = "Perceptible";
 choices[2][1] = "Operable";
 choices[2][2] = "Comprensible";
 choices[2][3] = "Robusto";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[3]= new Array();
 choices[3][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[3][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[3][2] = "Fomentar el despliegue de redes y servicios";
 choices[3][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[3] = choices[3][0];
 units[3] = "19";
 comments[3] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[4]= new Array();
 choices[4][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[4][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[4][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[4][3] = "El pago de subsidios a parados";
 answers[4] = choices[4][3];
 units[4] = "15";
 comments[4] = "Id Pregunta: 116. ";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[5]= "6)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[5]= new Array();
 choices[5][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[5][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[5][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[5][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[5] = choices[5][2];
 units[5] = "7";
 comments[5] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[6]= "7)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[6]= new Array();
 choices[6][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[6][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[6][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[6][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "Gran volumen de informaci&oacute;n";
 choices[7][1] = "Gran variedad de datos";
 choices[7][2] = "Se analizan datos a gran velocidad";
 choices[7][3] = "Todas las anteriores son verdaderas";
 answers[7] = choices[7][3];
 units[7] = "73";
 comments[7] = "Id Pregunta: 105. ";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[8]= "9)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[8]= new Array();
 choices[8][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[8][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[8][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[8][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[8] = choices[8][2];
 units[8] = "28";
 comments[8] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[9]= "10)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[9]= new Array();
 choices[9][0] = "El Ministerio de Hacienda.";
 choices[9][1] = "El Ministerio de Econom&iacute;a.";
 choices[9][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[9][3] = "Ninguna de las respuestas es correcta.";
 answers[9] = choices[9][2];
 units[9] = "10";
 comments[9] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[10]= new Array();
 choices[10][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[10][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[10][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[10][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[11]= "12)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[11]= new Array();
 choices[11][0] = "De ocho a&ntilde;os.";
 choices[11][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[11][2] = "Ambas son correctas.";
 choices[11][3] = "No existe un l&iacute;mite.";
 answers[11] = choices[11][0];
 units[11] = "14";
 comments[11] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[12]= "13)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[12]= new Array();
 choices[12][0] = "Conformidad";
 choices[12][1] = "Responsabilidad";
 choices[12][2] = "Adquisici&oacute;n";
 choices[12][3] = "Desempe&ntilde;o";
 answers[12] = choices[12][0];
 units[12] = "26";
 comments[12] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[13]= new Array();
 choices[13][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[13][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[13][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[13][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[13] = choices[13][3];
 units[13] = "77";
 comments[13] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[14]= "15)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[14]= new Array();
 choices[14][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[14][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[14][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[14][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[15]= "16)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[15]= new Array();
 choices[15][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[15][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[15][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[15][3] = "Todos los anteriores";
 answers[15] = choices[15][3];
 units[15] = "19";
 comments[15] = "Id Pregunta: 561. Agenda Digital";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[16]= new Array();
 choices[16][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[16][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[16][2] = "la falta de interoperabilidad.";
 choices[16][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[17]= "18)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[17]= new Array();
 choices[17][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[17][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[17][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[17][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[17] = choices[17][1];
 units[17] = "14";
 comments[17] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[18]= "19)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[18]= new Array();
 choices[18][0] = "Primario, que incluye la agricultura y la pesca";
 choices[18][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[18][2] = "Minero, junto con las exportaciones de comercio";
 choices[18][3] = "Servicios";
 answers[18] = choices[18][3];
 units[18] = "12";
 comments[18] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[19]= new Array();
 choices[19][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[19][1] = "La delimitaci&oacute;n de su territorio.";
 choices[19][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[19][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[20]= "21)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[20]= new Array();
 choices[20][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[20][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[20][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[20][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[21]= new Array();
 choices[21][0] = "De oficio.";
 choices[21][1] = "A solicitud del interesado.";
 choices[21][2] = "De oficio o a solicitud del interesado.";
 choices[21][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[21] = choices[21][2];
 units[21] = "7";
 comments[21] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[22]= "23)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[22]= new Array();
 choices[22][0] = "Subgrupo A1";
 choices[22][1] = "Subgrupo A2";
 choices[22][2] = "Subgrupo B";
 choices[22][3] = "Subgrupo C1";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[23]= "24)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[23]= new Array();
 choices[23][0] = "Presencia equilibrada.";
 choices[23][1] = "Presencia paritaria.";
 choices[23][2] = "Presencia consensuada.";
 choices[23][3] = "presencia horizontal.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[24]= "25)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[24]= new Array();
 choices[24][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[24][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[24][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[24][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[24] = choices[24][2];
 units[24] = "108";
 comments[24] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[25]= "26)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[25]= new Array();
 choices[25][0] = "ASF-AL (Apache License 2.0)";
 choices[25][1] = "EUPL (European Union Public License)";
 choices[25][2] = "LGPL (Lesser General Public License)";
 choices[25][3] = "MIT(MIT License)";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[26]= new Array();
 choices[26][0] = "Categor&iacute;a b&aacute;sica";
 choices[26][1] = "Categor&iacute;a media";
 choices[26][2] = "Categor&iacute;a alta";
 choices[26][3] = "Categor&iacute;a media y alta";
 answers[26] = choices[26][2];
 units[26] = "46";
 comments[26] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[27]= new Array();
 choices[27][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[27][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[27][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[27][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[27] = choices[27][0];
 units[27] = "19";
 comments[27] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[28]= "29)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[28]= new Array();
 choices[28][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[28][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[28][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[28][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[28] = choices[28][0];
 units[28] = "15";
 comments[28] = "Id Pregunta: 111. ";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[29]= "30)  En el sistema operativo Unix/Linux, el comando id:";
 choices[29]= new Array();
 choices[29][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[29][1] = "El comando id no existe.";
 choices[29][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[29][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[29] = choices[29][0];
 units[29] = "57";
 comments[29] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[30]= "31)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[30][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[30][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[30][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[30] = choices[30][2];
 units[30] = "101";
 comments[30] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[31]= new Array();
 choices[31][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[31][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[31][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[31][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[32]= new Array();
 choices[32][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[32][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[32][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[32][3] = "El Instituto de la Mujer de Extremadura.";
 answers[32] = choices[32][3];
 units[32] = "14";
 comments[32] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[33]= new Array();
 choices[33][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[33][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[33][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[33][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[33] = choices[33][3];
 units[33] = "46";
 comments[33] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[34]= new Array();
 choices[34][0] = "En 2015";
 choices[34][1] = "En 2013";
 choices[34][2] = "En 2016";
 choices[34][3] = "En 2007";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[35]= "36)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[35]= new Array();
 choices[35][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[35][1] = "El Congreso de los Diputados.";
 choices[35][2] = "Las Cortes Generales.";
 choices[35][3] = "El Consejo de Ministros";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[36]= new Array();
 choices[36][0] = "Constitucional.";
 choices[36][1] = "Penal.";
 choices[36][2] = "Militar.";
 choices[36][3] = "Tribunales consuetudinarios.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[37]= new Array();
 choices[37][0] = "Cincuenta y cuatro.";
 choices[37][1] = "Cincuenta.";
 choices[37][2] = "Cincuenta y cinco.";
 choices[37][3] = "Cincuenta y dos.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[38]= new Array();
 choices[38][0] = "Principio de solo una vez";
 choices[38][1] = "Apertura y transparencia";
 choices[38][2] = "Confianza y seguridad";
 choices[38][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[38] = choices[38][3];
 units[38] = "19";
 comments[38] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[39]= new Array();
 choices[39][0] = "Conferencia de Presidentes.";
 choices[39][1] = "Convenios de colaboraci&oacute;n.";
 choices[39][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[39][3] = "Conferencias Sectoriales.";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; es SonarQube?";
 choices[40]= new Array();
 choices[40][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[40][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[40][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[40][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[40] = choices[40][2];
 units[40] = "92";
 comments[40] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[41]= "42)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[41]= new Array();
 choices[41][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[41][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[41][2] = "el Subdirector General que el Delegado designe";
 choices[41][3] = "el Secretario de Estado";
 answers[41] = choices[41][0];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[42]= "43)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[42]= new Array();
 choices[42][0] = "La Ley General Tributaria.";
 choices[42][1] = "La Ley Presupuestaria.";
 choices[42][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[42][3] = "Ninguna de las respuestas es correcta.";
 answers[42] = choices[42][0];
 units[42] = "10";
 comments[42] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[43]= "44)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Anualmente.";
 choices[43][1] = "Ninguna de las respuestas es correcta.";
 choices[43][2] = "Trimestralmente.";
 choices[43][3] = "Semestralmente.";
 answers[43] = choices[43][0];
 units[43] = "10";
 comments[43] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[44]= new Array();
 choices[44][0] = "Art&iacute;culo 9.1 CE.";
 choices[44][1] = "Art&iacute;culo 53 CE.";
 choices[44][2] = "Art&iacute;culo 14 CE.";
 choices[44][3] = "Art&iacute;culo 16 CE.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[45]= new Array();
 choices[45][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[45][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[45][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[45][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[45] = choices[45][1];
 units[45] = "15";
 comments[45] = "Id Pregunta: 112. ";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[46]= "47)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[46]= new Array();
 choices[46][0] = "Se definen iteraciones";
 choices[46][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[46][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[46][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[46] = choices[46][1];
 units[46] = "34, 84";
 comments[46] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[47]= "48)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[47]= new Array();
 choices[47][0] = "los registros mercantiles";
 choices[47][1] = "los registros de la propiedad";
 choices[47][2] = "los protocolos notariales";
 choices[47][3] = "todas son correctas";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[48]= new Array();
 choices[48][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[48][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[48][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[48][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[49]= new Array();
 choices[49][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[49][1] = "Intervenci&oacute;n formal y material.";
 choices[49][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[49][3] = "Intervenci&oacute;n formal y general.";
 answers[49] = choices[49][1];
 units[49] = "10";
 comments[49] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[50]= new Array();
 choices[50][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[50][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[50][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[50][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[50] = choices[50][1];
 units[50] = "12";
 comments[50] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[51]= "52)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[51]= new Array();
 choices[51][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[51][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[51][2] = "A partir del 1 de enero de 2015";
 choices[51][3] = "A partir del 1 de julio de 2016";
 answers[51] = choices[51][1];
 units[51] = "77";
 comments[51] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[52]= new Array();
 choices[52][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[52][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[52][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[52][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[52] = choices[52][1];
 units[52] = "28";
 comments[52] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[53]= "54)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[53]= new Array();
 choices[53][0] = "los Subsecretarios y los Secretarios generales";
 choices[53][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[53][2] = "los Secretarios de Estado y los Directores generales";
 choices[53][3] = "los Ministros y los Secretarios de Estado";
 answers[53] = choices[53][3];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[54]= new Array();
 choices[54][0] = "En 1988.";
 choices[54][1] = "En 1981.";
 choices[54][2] = "En 1982.";
 choices[54][3] = "En 1986.";
 answers[54] = choices[54][3];
 units[54] = "5";
 comments[54] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[55]= new Array();
 choices[55][0] = "Drupal";
 choices[55][1] = "Cassandra";
 choices[55][2] = "Wordpress";
 choices[55][3] = "OpenCMS";
 answers[55] = choices[55][1];
 units[55] = "99";
 comments[55] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[56]= "57)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[56]= new Array();
 choices[56][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[56][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[56][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[56][3] = "Todas son correctas.";
 answers[56] = choices[56][3];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[57]= "58)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[57]= new Array();
 choices[57][0] = "Fat y Ntfs.";
 choices[57][1] = "Extfat y Fat.";
 choices[57][2] = "Fat y Nfst.";
 choices[57][3] = "ext2fs y Ntfs.";
 answers[57] = choices[57][0];
 units[57] = "58";
 comments[57] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[58]= new Array();
 choices[58][0] = "Al Consejo Europeo.";
 choices[58][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[58][2] = "A la Comisi&oacute;n Europea.";
 choices[58][3] = "Al Parlamento Europeo.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[59]= new Array();
 choices[59][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[59][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[59][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[59][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[59] = choices[59][2];
 units[59] = "7";
 comments[59] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[60]= "61)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[60][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[60][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[60][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[60] = choices[60][3];
 units[60] = "22";
 comments[60] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[61]= "62)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[61]= new Array();
 choices[61][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[61][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[61][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[61][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[62]= "63)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[62]= new Array();
 choices[62][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[62][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[62][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[62][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[62] = choices[62][0];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[63]= "64)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[63]= new Array();
 choices[63][0] = "SMB3";
 choices[63][1] = "AFP";
 choices[63][2] = "NFS";
 choices[63][3] = "FTP";
 answers[63] = choices[63][0];
 units[63] = "59";
 comments[63] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[64]= new Array();
 choices[64][0] = "El 2 de Octubre de 2015";
 choices[64][1] = "El 15 de Septiembre de 2015";
 choices[64][2] = "El 1 de Octubre de 2015";
 choices[64][3] = "El 5 de Octubre de 2015";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[65]= "66)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[65]= new Array();
 choices[65][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[65][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[65][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[65][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[66]= "67)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[66]= new Array();
 choices[66][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[66][1] = "Uno de sus miembros.";
 choices[66][2] = "La Comisi&oacute;n.";
 choices[66][3] = "Todas las respuestas son correctas.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[67]= new Array();
 choices[67][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[67][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[67][2] = "Apertura al exterior";
 choices[67][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[67] = choices[67][0];
 units[67] = "17";
 comments[67] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[68]= "69)  El sector p&uacute;blico institucional se integra por:";
 choices[68]= new Array();
 choices[68][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[68][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[68][2] = "las Universidades p&uacute;blicas";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; es MongoDB?";
 choices[69]= new Array();
 choices[69][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[69][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[69][2] = "Un sistema gestor de base de datos relacional.";
 choices[69][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[69] = choices[69][1];
 units[69] = "73";
 comments[69] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[70]= new Array();
 choices[70][0] = "En 2011";
 choices[70][1] = "En 2013";
 choices[70][2] = "En 2015";
 choices[70][3] = "En 2016";
 answers[70] = choices[70][2];
 units[70] = "17";
 comments[70] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[71]= "72)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[71]= new Array();
 choices[71][0] = "Discriminaci&oacute;n indirecta.";
 choices[71][1] = "Discriminaci&oacute;n directa.";
 choices[71][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[71][3] = "Discriminaci&oacute;n abusiva.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[72]= "73)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[72]= new Array();
 choices[72][0] = "Estrasburgo.";
 choices[72][1] = "Bruselas.";
 choices[72][2] = "Luxemburgo.";
 choices[72][3] = "Holanda.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[73][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[73][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[73][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[73] = choices[73][0];
 units[73] = "84";
 comments[73] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[74]= new Array();
 choices[74][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[74][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[74][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[74][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 233. CONSTITUCION1978";


