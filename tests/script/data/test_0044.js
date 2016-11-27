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

//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[0][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[0][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[0][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[1]= "2)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[1]= new Array();
 choices[1][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[1][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[1][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[1][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[1] = choices[1][3];
 units[1] = "89";
 comments[1] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[2]= "3)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[2]= new Array();
 choices[2][0] = "2025";
 choices[2][1] = "2023";
 choices[2][2] = "2030";
 choices[2][3] = "2020";
 answers[2] = choices[2][3];
 units[2] = "28";
 comments[2] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[3]= "4)  El Colegio de Comisarios se re&uacute;ne:";
 choices[3]= new Array();
 choices[3][0] = "Una vez por semana.";
 choices[3][1] = "Una vez al mes.";
 choices[3][2] = "Dos veces en semana.";
 choices[3][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[4]= new Array();
 choices[4][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[4][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[4][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[4][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[4] = choices[4][0];
 units[4] = "19";
 comments[4] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[5]= new Array();
 choices[5][0] = "Dos Cap&iacute;tulos.";
 choices[5][1] = "Tres Cap&iacute;tulos.";
 choices[5][2] = "Un Cap&iacute;tulo.";
 choices[5][3] = "Cuatro Cap&iacute;tulos.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Org&aacute;nica.";
 choices[6][1] = "Contable.";
 choices[6][2] = "Econ&oacute;mica.";
 choices[6][3] = "Por programas.";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[7]= new Array();
 choices[7][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[7][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[7][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[7][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[7] = choices[7][1];
 units[7] = "26";
 comments[7] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[8]= "9)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[8]= new Array();
 choices[8][0] = "Ley Org&aacute;nica.";
 choices[8][1] = "Ley de Bases.";
 choices[8][2] = "Ley ordinaria.";
 choices[8][3] = "Mandato.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[9]= "10)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[9]= new Array();
 choices[9][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[9][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[9][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[9][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[9] = choices[9][2];
 units[9] = "10";
 comments[9] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[10]= "11)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Clustering";
 choices[10][1] = "Deduplicaci&oacute;n";
 choices[10][2] = "Virtualizaci&oacute;n";
 choices[10][3] = "Contenerizaci&oacute;n";
 answers[10] = choices[10][2];
 units[10] = "124";
 comments[10] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[11]= "12)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[11]= new Array();
 choices[11][0] = "El acoso sexual.";
 choices[11][1] = "El acoso por raz&oacute;n del sexo.";
 choices[11][2] = "Ambas son correctas.";
 choices[11][3] = "A y B son incorrectas.";
 answers[11] = choices[11][2];
 units[11] = "14";
 comments[11] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[12]= new Array();
 choices[12][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[12][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[12][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[12][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[12] = choices[12][3];
 units[12] = "78";
 comments[12] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[13]= "14)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[13]= new Array();
 choices[13][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[13][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[13][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[13][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[13] = choices[13][2];
 units[13] = "22";
 comments[13] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[14]= "15)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[14][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[14][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[14][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[14] = choices[14][2];
 units[14] = "83";
 comments[14] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[15]= "16)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[15]= new Array();
 choices[15][0] = "Subgrupo A1";
 choices[15][1] = "Subgrupo A2";
 choices[15][2] = "Subgrupo B";
 choices[15][3] = "Subgrupo C1";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[16]= "17)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[16]= new Array();
 choices[16][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[16][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[16][2] = "Ambas son correctas.";
 choices[16][3] = "A y B son incorrectas.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[17]= new Array();
 choices[17][0] = "Directiva 95/46/CE";
 choices[17][1] = "Directiva 1999/93/CE";
 choices[17][2] = "Directiva 2000/31/CE";
 choices[17][3] = "Directiva 2003/98/CE";
 answers[17] = choices[17][1];
 units[17] = "77";
 comments[17] = "Id Pregunta: 682. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[18]= "19)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[18]= new Array();
 choices[18][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[18][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[18][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[18][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[18] = choices[18][2];
 units[18] = "14";
 comments[18] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[19]= "20)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[19]= new Array();
 choices[19][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[19][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[19][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[19][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[20]= "21)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[20]= new Array();
 choices[20][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[20][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[20][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[20][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[21]= new Array();
 choices[21][0] = "El Consejo Nacional de la Mujer.";
 choices[21][1] = "El Consejo de la Mujer.";
 choices[21][2] = "El Instituto de la Mujer.";
 choices[21][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[21] = choices[21][3];
 units[21] = "14";
 comments[21] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[22]= "23)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[22]= new Array();
 choices[22][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[22][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[22][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[22][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[22] = choices[22][2];
 units[22] = "28";
 comments[22] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "Tiene car&aacute;cter facultativo.";
 choices[23][1] = "Tiene car&aacute;cter potestativo. ";
 choices[23][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[23][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[23] = choices[23][1];
 units[23] = "22";
 comments[23] = "Id Pregunta: 127. ";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[24]= "25)  La partida presupuestaria es equivalente a...";
 choices[24]= new Array();
 choices[24][0] = "El sujeto que realiza el gasto";
 choices[24][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[24][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[24][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[24] = choices[24][3];
 units[24] = "10";
 comments[24] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[25]= "26)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[25]= new Array();
 choices[25][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[25][1] = "Publicidad de las normas.";
 choices[25][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[25][3] = "Coordinaci&oacute;n normativa.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[26]= "27)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "en cada Comunidad Aut&oacute;noma";
 choices[26][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[26][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[26][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "De la C&aacute;mara respectiva.";
 choices[27][1] = "Del Rey.";
 choices[27][2] = "Del Tribunal Constitucional.";
 choices[27][3] = "Del Tribunal Supremo.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "Siempre en formato electr&oacute;nico.";
 choices[28][1] = "Siempre en formato papel.";
 choices[28][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[28][3] = "La ley no regula el formato del expediente.";
 answers[28] = choices[28][0];
 units[28] = "7";
 comments[28] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[29]= "30)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[29]= new Array();
 choices[29][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[29][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[29][2] = "a y b son correctas";
 choices[29][3] = "a y b son incorrectas";
 answers[29] = choices[29][0];
 units[29] = "7";
 comments[29] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[30]= "31)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[30]= new Array();
 choices[30][0] = "Est&aacute; desarrollado en Java.";
 choices[30][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[30][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[30][3] = "Todas las afirmaciones son correctas.";
 answers[30] = choices[30][2];
 units[30] = "92";
 comments[30] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[31]= new Array();
 choices[31][0] = "Ford";
 choices[31][1] = "Google";
 choices[31][2] = "Toyota";
 choices[31][3] = "Facebook";
 answers[31] = choices[31][2];
 units[31] = "34";
 comments[31] = "Id Pregunta: 717. Metodologias Lean";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[32]= "33)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Incremental, diferencial, completa";
 choices[32][1] = "Completa, incremental, diferencial";
 choices[32][2] = "Completa, diferencial, incremental";
 choices[32][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[32] = choices[32][0];
 units[32] = "53";
 comments[32] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[33]= new Array();
 choices[33][0] = "SPARQL";
 choices[33][1] = "UnQL";
 choices[33][2] = "XQUERY";
 choices[33][3] = "RQL";
 answers[33] = choices[33][0];
 units[33] = "74";
 comments[33] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[34]= new Array();
 choices[34][0] = "PostgreSQL";
 choices[34][1] = "Datawarehouse";
 choices[34][2] = "Snowflake";
 choices[34][3] = "CouchDB";
 answers[34] = choices[34][0];
 units[34] = "61";
 comments[34] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[35]= "36)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[35]= new Array();
 choices[35][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[35][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[35][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[35][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[35] = choices[35][3];
 units[35] = "14";
 comments[35] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[36]= "37)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[36]= new Array();
 choices[36][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[36][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[36][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[36][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[36] = choices[36][1];
 units[36] = "19";
 comments[36] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[37]= new Array();
 choices[37][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[37][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[37][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[37][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[37] = choices[37][1];
 units[37] = "84";
 comments[37] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[38]= new Array();
 choices[38][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[38][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[38][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[38][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[38] = choices[38][3];
 units[38] = "44";
 comments[38] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[39]= new Array();
 choices[39][0] = "El 1 de noviembre de 1994.";
 choices[39][1] = "El 1 de noviembre de 1992.";
 choices[39][2] = "El 1 de noviembre de 1995.";
 choices[39][3] = "El 1 de noviembre de 1993.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[40]= new Array();
 choices[40][0] = "Los principios rectores";
 choices[40][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[40][2] = "Los hitos para su desarrollo gradual";
 choices[40][3] = "Todos los anteriores";
 answers[40] = choices[40][3];
 units[40] = "19";
 comments[40] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[41]= "42)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[41]= new Array();
 choices[41][0] = "Monol&iacute;tico.";
 choices[41][1] = "Estratificado.";
 choices[41][2] = "Cliente/servidor.";
 choices[41][3] = "Orientado a objetos.";
 answers[41] = choices[41][3];
 units[41] = "56";
 comments[41] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[42]= "43)  La soberan&iacute;a nacional reside en:";
 choices[42]= new Array();
 choices[42][0] = "el Parlamento nacional.";
 choices[42][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[42][2] = "el pueblo espa&ntilde;ol.";
 choices[42][3] = "el Congreso y el Senado.";
 answers[42] = choices[42][3];
 units[42] = "1";
 comments[42] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[43]= new Array();
 choices[43][0] = "Indirecta.";
 choices[43][1] = "Directa.";
 choices[43][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[43][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[43] = choices[43][1];
 units[43] = "14";
 comments[43] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[44]= new Array();
 choices[44][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[44][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[44][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[44][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[45]= "46)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[45]= new Array();
 choices[45][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[45][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[45][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[45][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[45] = choices[45][3];
 units[45] = "43";
 comments[45] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[46][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[46][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[46][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[47]= "48)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[47]= new Array();
 choices[47][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[47][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[47][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[47][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[47] = choices[47][3];
 units[47] = "12";
 comments[47] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[48]= new Array();
 choices[48][0] = "Art. 25 LO, 3/2007.";
 choices[48][1] = "Art. 23 LO, 3/2007.";
 choices[48][2] = "Art. 14 LO, 3/2007.";
 choices[48][3] = "Ninguna es correcta, es el art. 13.";
 answers[48] = choices[48][0];
 units[48] = "14";
 comments[48] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[49]= new Array();
 choices[49][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[49][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[49][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[49][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[50]= "51)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[50]= new Array();
 choices[50][0] = "Prevenir las conductas discriminatorias.";
 choices[50][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[50][2] = "Todas son correctas.";
 choices[50][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[51]= new Array();
 choices[51][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[51][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[51][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[51][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[52]= new Array();
 choices[52][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[52][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[52][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[52][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[52] = choices[52][2];
 units[52] = "7";
 comments[52] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[53]= "54)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[53]= new Array();
 choices[53][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[53][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[53][2] = "Las Inspecciones Generales de los Servicios";
 choices[53][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[53] = choices[53][1];
 units[53] = "75";
 comments[53] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[54]= "55)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[54]= new Array();
 choices[54][0] = "Alrededor de un 26% del PIB";
 choices[54][1] = "Alrededor de un 11% del PIB";
 choices[54][2] = "Alrededor de un 34% del PIB";
 choices[54][3] = "Alrededor de un 7% del PIB";
 answers[54] = choices[54][1];
 units[54] = "12";
 comments[54] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[55]= "56)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[55]= new Array();
 choices[55][0] = "Estrasburgo.";
 choices[55][1] = "Bruselas.";
 choices[55][2] = "Luxemburgo.";
 choices[55][3] = "Holanda.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[56]= "57)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[56]= new Array();
 choices[56][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[56][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[56][2] = "Ninguna es correcta.";
 choices[56][3] = "A y B son correctas.";
 answers[56] = choices[56][0];
 units[56] = "14";
 comments[56] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[57]= "58)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[57]= new Array();
 choices[57][0] = "la Administraci&oacute;n General del Estado";
 choices[57][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[57][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[57][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 757. Ley 40/2015";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[58]= new Array();
 choices[58][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[58][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[58][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[58][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[58] = choices[58][1];
 units[58] = "18, 20";
 comments[58] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[59]= "60)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[59]= new Array();
 choices[59][0] = "Fat y Ntfs.";
 choices[59][1] = "Extfat y Fat.";
 choices[59][2] = "Fat y Nfst.";
 choices[59][3] = "ext2fs y Ntfs.";
 answers[59] = choices[59][0];
 units[59] = "58";
 comments[59] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[60]= "61)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[60]= new Array();
 choices[60][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[60][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[60][2] = "a y b son correctas";
 choices[60][3] = "a y b son incorrectas";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[61]= "62)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[61]= new Array();
 choices[61][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[61][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[61][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[61][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[61] = choices[61][2];
 units[61] = "85";
 comments[61] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[62]= new Array();
 choices[62][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[62][1] = "La delimitaci&oacute;n de su territorio.";
 choices[62][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[62][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[63]= new Array();
 choices[63][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[63][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[63][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[63][3] = "Ninguna de las anteriores.";
 answers[63] = choices[63][1];
 units[63] = "92";
 comments[63] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[64]= "65)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[64]= new Array();
 choices[64][0] = "Presentar la moci&oacute;n de censura.";
 choices[64][1] = "Presidir las sesiones del Parlamento.";
 choices[64][2] = "Organizar la Secretar&iacute;a General.";
 choices[64][3] = "Preparar las actividades de las Comisiones.";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[65]= "66)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[65]= new Array();
 choices[65][0] = "Integrar la estrategia TIC con la de negocio";
 choices[65][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[65][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[65][3] = "Todas las anteriores";
 answers[65] = choices[65][3];
 units[65] = "26";
 comments[65] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[66]= "67)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[66]= new Array();
 choices[66][0] = "Dise&ntilde;o del servicio.";
 choices[66][1] = "Transici&oacute;n del servicio.";
 choices[66][2] = "Estrategia del servicio.";
 choices[66][3] = "Operaci&oacute;n del servicio.";
 answers[66] = choices[66][2];
 units[66] = "101";
 comments[66] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[67]= new Array();
 choices[67][0] = "Anualmente por el Consejo de Ministros";
 choices[67][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[67][2] = "Al final de cada legislatura por el Gobierno";
 choices[67][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[67] = choices[67][0];
 units[67] = "14";
 comments[67] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[68][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[68][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[68][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[68] = choices[68][2];
 units[68] = "53";
 comments[68] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[69]= new Array();
 choices[69][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[69][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[69][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[69][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[69] = choices[69][1];
 units[69] = "89";
 comments[69] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[70]= "71)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[70]= new Array();
 choices[70][0] = "Las respuestas a) y b) son correctas.";
 choices[70][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[70][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[70][3] = "Las respuestas a) y b) no son correctas.";
 answers[70] = choices[70][0];
 units[70] = "10";
 comments[70] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[71]= "72)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[71]= new Array();
 choices[71][0] = "Por unanimidad.";
 choices[71][1] = "Por mayor&iacute;a cualificada.";
 choices[71][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[71][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[72]= "73)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Infrastructure as a Service (IaaS)";
 choices[72][1] = "Platform as a Service (PaaS)";
 choices[72][2] = "Software as a Service (SaaS)";
 choices[72][3] = "Application as a Service (AaaS)";
 answers[72] = choices[72][1];
 units[72] = "52";
 comments[72] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[73]= "74)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[73]= new Array();
 choices[73][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[73][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[73][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[73][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[73] = choices[73][0];
 units[73] = "14";
 comments[73] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[74]= new Array();
 choices[74][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[74][1] = "Solamente el Congreso.";
 choices[74][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[74][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 176. CONSTITUCION1978";


