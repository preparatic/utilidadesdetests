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

//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[0]= "1)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[0]= new Array();
 choices[0][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[0][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[0][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[0][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[1]= new Array();
 choices[1][0] = "Anual";
 choices[1][1] = "Mensual";
 choices[1][2] = "Semestral";
 choices[1][3] = "Trimestral";
 answers[1] = choices[1][3];
 units[1] = "15";
 comments[1] = "Id Pregunta: 119. ";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[2]= "3)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[2]= new Array();
 choices[2][0] = "El derecho a la propiedad privada.";
 choices[2][1] = "El derecho de asociaci&oacute;n.";
 choices[2][2] = "El derecho de fundaci&oacute;n.";
 choices[2][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[2] = choices[2][1];
 units[2] = "1";
 comments[2] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[3]= "4)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[3]= new Array();
 choices[3][0] = "Proveer de manera compartida servicios comunes";
 choices[3][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[3][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[3][3] = "Transparencia";
 answers[3] = choices[3][1];
 units[3] = "28";
 comments[3] = "Id Pregunta: 742. Estrategia TIC";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[4]= new Array();
 choices[4][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[4][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[4][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[4][3] = "El Senado se compone de 350 senadores.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "Tiene car&aacute;cter facultativo.";
 choices[5][1] = "Tiene car&aacute;cter potestativo. ";
 choices[5][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[5][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 127. ";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[6]= "7)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[6]= new Array();
 choices[6][0] = "ISO/IEC 25000";
 choices[6][1] = "ISO/IEC 27000";
 choices[6][2] = "ISO 9000";
 choices[6][3] = "ISO 9001";
 answers[6] = choices[6][0];
 units[6] = "93";
 comments[6] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[7]= new Array();
 choices[7][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[7][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[7][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[7][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[7] = choices[7][1];
 units[7] = "19";
 comments[7] = "Id Pregunta: 581. Estrategia TIC";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[8]= "9)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[8]= new Array();
 choices[8][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[8][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[8][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[8][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[9]= "10)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[9]= new Array();
 choices[9][0] = "Interoperabilidad";
 choices[9][1] = "Integridad";
 choices[9][2] = "Capital humano";
 choices[9][3] = "Trazabilidad";
 answers[9] = choices[9][2];
 units[9] = "19";
 comments[9] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[10]= "11)  Se consideran interesados en el procedimiento administrativo:";
 choices[10]= new Array();
 choices[10][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[10][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[10][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[10][3] = "todas son correctas";
 answers[10] = choices[10][0];
 units[10] = "7";
 comments[10] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[11]= "12)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[11]= new Array();
 choices[11][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[11][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[11][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[11][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[12]= "13)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[12]= new Array();
 choices[12][0] = "El acoso sexual.";
 choices[12][1] = "El acoso por raz&oacute;n del sexo.";
 choices[12][2] = "Ambas son correctas.";
 choices[12][3] = "A y B son incorrectas.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[13]= "14)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[13]= new Array();
 choices[13][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[13][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[13][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[13][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 683. Pensiones";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[14]= "15)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[14]= new Array();
 choices[14][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[14][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[14][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[14][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[14] = choices[14][2];
 units[14] = "8";
 comments[14] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[15]= "16)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[15]= new Array();
 choices[15][0] = "solo mediante ley";
 choices[15][1] = "reglamentariamente";
 choices[15][2] = "mediante ley o reglamentariamente";
 choices[15][3] = "ninguna es correcta";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[16]= new Array();
 choices[16][0] = "a) Los cuatro ejercicios siguientes.";
 choices[16][1] = "b) El ejercicio siguiente.";
 choices[16][2] = "c) Los dos ejercicios siguientes.";
 choices[16][3] = "d) Los tres ejercicios siguientes.";
 answers[16] = choices[16][3];
 units[16] = "10";
 comments[16] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[17]= new Array();
 choices[17][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[17][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[17][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[17][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[17] = choices[17][3];
 units[17] = "19";
 comments[17] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[18]= new Array();
 choices[18][0] = "Versi&oacute;n digital prioritaria.";
 choices[18][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[18][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[18][3] = "Apertura y transparencia.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[19]= "20)  El pacto fiscal europeo de 2012 incluye:";
 choices[19]= new Array();
 choices[19][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[19][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[19][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[19][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[20]= "21)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[20][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[20][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[20][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[20] = choices[20][0];
 units[20] = "45";
 comments[20] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[21]= "22)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[21]= new Array();
 choices[21][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[21][1] = "Publicidad de las normas.";
 choices[21][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[21][3] = "Coordinaci&oacute;n normativa.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[22]= "23)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[22]= new Array();
 choices[22][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[22][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[22][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[22][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[22] = choices[22][1];
 units[22] = "22";
 comments[22] = "Id Pregunta: 713. Portal de Transparencia";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[23]= "24)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[23]= new Array();
 choices[23][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[23][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[23][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[23][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[24]= new Array();
 choices[24][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[24][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[24][2] = "A y B son correctas.";
 choices[24][3] = "A y B son incorrectas.";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[25]= "26)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[25]= new Array();
 choices[25][0] = "La Comisi&oacute;n Europea.";
 choices[25][1] = "El Consejo Europeo.";
 choices[25][2] = "El Consejo de Europa.";
 choices[25][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[26]= "27)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[26]= new Array();
 choices[26][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[26][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[26][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[26][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la respuesta falsa";
 choices[27]= new Array();
 choices[27][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[27][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[27][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[27][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[27] = choices[27][3];
 units[27] = "22";
 comments[27] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[28]= new Array();
 choices[28][0] = "Constitucional.";
 choices[28][1] = "Penal.";
 choices[28][2] = "Militar.";
 choices[28][3] = "Tribunales consuetudinarios.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[29]= new Array();
 choices[29][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[29][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[29][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[29][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[30]= new Array();
 choices[30][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[30][1] = "Directiva 2004/113/CE del Consejo.";
 choices[30][2] = "Todas son correctas.";
 choices[30][3] = "Todas son falsas.";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[31]= new Array();
 choices[31][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[31][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[31][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[31][3] = "Ninguna de las anteriores.";
 answers[31] = choices[31][1];
 units[31] = "92";
 comments[31] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[32]= new Array();
 choices[32][0] = "JUnit, Artifactory y SonarQube";
 choices[32][1] = "JUnit, Artifactory y Selenium";
 choices[32][2] = "JUnit, SonarQube y Selenium";
 choices[32][3] = "ArtiFactory, SonarQube y Selenium";
 answers[32] = choices[32][2];
 units[32] = "92";
 comments[32] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[33]= new Array();
 choices[33][0] = "Backlog refinement";
 choices[33][1] = "Backlog refinement";
 choices[33][2] = "A y b son correctas";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][2];
 units[33] = "34, 84";
 comments[33] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[34]= "35)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[34]= new Array();
 choices[34][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[34][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[34][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[34][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[34] = choices[34][2];
 units[34] = "26";
 comments[34] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[35]= new Array();
 choices[35][0] = "Indirecta.";
 choices[35][1] = "Directa.";
 choices[35][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[35][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[35] = choices[35][1];
 units[35] = "14";
 comments[35] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[36]= "37)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[36]= new Array();
 choices[36][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[36][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[36][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[36][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[36] = choices[36][1];
 units[36] = "7";
 comments[36] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[37][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[37][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[37][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[37] = choices[37][3];
 units[37] = "5";
 comments[37] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[38]= "39)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[38]= new Array();
 choices[38][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[38][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[38][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[38][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[38] = choices[38][1];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[39]= new Array();
 choices[39][0] = "De los derechos y deberes fundamentales.";
 choices[39][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[39][2] = "Derechos y libertades.";
 choices[39][3] = "De la Corona.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[40]= "41)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[40][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[40][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[40][3] = "cualquiera que sea el estado del procedimiento";
 answers[40] = choices[40][3];
 units[40] = "7";
 comments[40] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[41]= "42)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[41]= new Array();
 choices[41][0] = "la Administraci&oacute;n General del Estado";
 choices[41][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[41][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[41][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[42]= "43)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[42]= new Array();
 choices[42][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[42][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[42][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[42][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[42] = choices[42][0];
 units[42] = "14";
 comments[42] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[43]= "44)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[43]= new Array();
 choices[43][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[43][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[43][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[43][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[43] = choices[43][3];
 units[43] = "109";
 comments[43] = "Id Pregunta: 652. Junta de Extremadura A1 2015";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[44]= new Array();
 choices[44][0] = "En 2011";
 choices[44][1] = "En 2013";
 choices[44][2] = "En 2015";
 choices[44][3] = "En 2016";
 answers[44] = choices[44][2];
 units[44] = "17";
 comments[44] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[45]= "46)  Componen la Comisi&oacute;n Europea:";
 choices[45]= new Array();
 choices[45][0] = "Un Comisario por cada Estado miembro.";
 choices[45][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[45][2] = "Dos Comisarios por cada Estado miembro.";
 choices[45][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[46]= "47)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[46]= new Array();
 choices[46][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[46][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[46][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[46][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[46] = choices[46][2];
 units[46] = "28";
 comments[46] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[47]= new Array();
 choices[47][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[47][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[47][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[47][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[47] = choices[47][1];
 units[47] = "1";
 comments[47] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[48]= "49)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[48]= new Array();
 choices[48][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[48][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[48][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[48][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[48] = choices[48][2];
 units[48] = "57";
 comments[48] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[49]= new Array();
 choices[49][0] = "Un programa presupuestario.";
 choices[49][1] = "Un concepto presupuestario.";
 choices[49][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[49][3] = "Un cr&eacute;dito presupuestario.";
 answers[49] = choices[49][0];
 units[49] = "10";
 comments[49] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[50]= "51)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[50]= new Array();
 choices[50][0] = "Un informe de g&eacute;nero.";
 choices[50][1] = "La variable de sexo.";
 choices[50][2] = "La variable de edad.";
 choices[50][3] = "La variable de comportamiento.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[51]= new Array();
 choices[51][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[51][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[51][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[51][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[52]= "53)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[52]= new Array();
 choices[52][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[52][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[52][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[52][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[53][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[53][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[53][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[53] = choices[53][0];
 units[53] = "45";
 comments[53] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[54]= new Array();
 choices[54][0] = "Orientaci&oacute;n a objetos";
 choices[54][1] = "MapReduce";
 choices[54][2] = "Pipeline filtering";
 choices[54][3] = "Programaci&oacute;n funcional";
 answers[54] = choices[54][1];
 units[54] = "73";
 comments[54] = "Id Pregunta: 661. ";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[55]= "56)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[55]= new Array();
 choices[55][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[55][1] = "Protecci&oacute;n de su salud.";
 choices[55][2] = "Ninguna es correcta.";
 choices[55][3] = "A y B son correctas.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[56]= "57)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[56]= new Array();
 choices[56][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[56][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[56][2] = "Ambas son correctas.";
 choices[56][3] = "A y B son incorrectas.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[57]= "58)  Los Reglamentos no se caracterizan por:";
 choices[57]= new Array();
 choices[57][0] = "No poseer alcance general.";
 choices[57][1] = "Ser obligatorios.";
 choices[57][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[57][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[57] = choices[57][0];
 units[57] = "5";
 comments[57] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[58]= "59)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[58]= new Array();
 choices[58][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[58][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[58][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[58][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[58] = choices[58][3];
 units[58] = "89";
 comments[58] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[59]= new Array();
 choices[59][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[59][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[59][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[59][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[59] = choices[59][3];
 units[59] = "78";
 comments[59] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Aplicaci&oacute;n";
 choices[60][1] = "Sesi&oacute;n";
 choices[60][2] = "Presentaci&oacute;n";
 choices[60][3] = "Transporte";
 answers[60] = choices[60][2];
 units[60] = "105";
 comments[60] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[61]= "62)  Son bases de datos NoSQL:";
 choices[61]= new Array();
 choices[61][0] = "MongoDB y Maria DB";
 choices[61][1] = "HBase y Dynamo";
 choices[61][2] = "MariaDB, Cassandra y BigTable";
 choices[61][3] = "La A) y la C)";
 answers[61] = choices[61][1];
 units[61] = "73";
 comments[61] = "Id Pregunta: 104. ";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[62]= new Array();
 choices[62][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[62][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[62][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[62][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[62] = choices[62][2];
 units[62] = "85";
 comments[62] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


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


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[64]= "65)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[64]= new Array();
 choices[64][0] = "SMB3";
 choices[64][1] = "AFP";
 choices[64][2] = "NFS";
 choices[64][3] = "FTP";
 answers[64] = choices[64][0];
 units[64] = "59";
 comments[64] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[65]= "66)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[65]= new Array();
 choices[65][0] = "De los interesados en el procedimiento";
 choices[65][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[65][2] = "Disposiciones generales";
 choices[65][3] = "De los actos administrativos";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[66]= "67)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[66]= new Array();
 choices[66][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[66][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[66][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[66][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[66] = choices[66][2];
 units[66] = "57";
 comments[66] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[67]= new Array();
 choices[67][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[67][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[67][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[67][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[67] = choices[67][1];
 units[67] = "19";
 comments[67] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[68]= "69)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[68][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[68][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[68][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[68] = choices[68][2];
 units[68] = "101";
 comments[68] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[69]= new Array();
 choices[69][0] = "Compatibilidad";
 choices[69][1] = "Interoperabilidad";
 choices[69][2] = "Reutilizaci&oacute;n";
 choices[69][3] = "Accesibilidad";
 answers[69] = choices[69][0];
 units[69] = "22";
 comments[69] = "Id Pregunta: 705. Ley de transparencia";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[70]= new Array();
 choices[70][0] = "Nueve.";
 choices[70][1] = "Diez.";
 choices[70][2] = "Siete.";
 choices[70][3] = "Ocho.";
 answers[70] = choices[70][3];
 units[70] = "5";
 comments[70] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[71]= "72)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[71]= new Array();
 choices[71][0] = "Los ocupados y los parados activos";
 choices[71][1] = "S&oacute;lo los ocupados";
 choices[71][2] = "Los ocupados y los inactivos";
 choices[71][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[71] = choices[71][0];
 units[71] = "12";
 comments[71] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[72]= new Array();
 choices[72][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[72][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[72][2] = "Iniciativa europea de libre flujo de datos.";
 choices[72][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[73]= "74)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[73]= new Array();
 choices[73][0] = "623";
 choices[73][1] = "649";
 choices[73][2] = "626";
 choices[73][3] = "565";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[74]= "75)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[74]= new Array();
 choices[74][0] = "Rey.";
 choices[74][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[74][2] = "Constituci&oacute;n.";
 choices[74][3] = "Pueblo.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 251. CONSTITUCION1978";


