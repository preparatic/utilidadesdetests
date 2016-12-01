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

//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[0]= new Array();
 choices[0][0] = "Ley 3/2015";
 choices[0][1] = "Ley 6/2007";
 choices[0][2] = "Ley 5/1984";
 choices[0][3] = "Ley 5/2006";
 answers[0] = choices[0][0];
 units[0] = "22";
 comments[0] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[0] = 711


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[1]= "2)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[1]= new Array();
 choices[1][0] = "la capital del pa&iacute;s";
 choices[1][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[1][2] = "cada una de las provincias";
 choices[1][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[1] = 812


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[2]= new Array();
 choices[2][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[2][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[2][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[2][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[2] = 298


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[3]= "4)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[3]= new Array();
 choices[3][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[3][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[3][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[3][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[3] = choices[3][1];
 units[3] = "43";
 comments[3] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[3] = 439


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta falsa";
 choices[4]= new Array();
 choices[4][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[4][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[4][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[4][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[4] = 276


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[5]= "6)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[5]= new Array();
 choices[5][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[5][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[5][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[5][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[5] = choices[5][3];
 units[5] = "41";
 comments[5] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[5] = 82


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[6]= "7)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[6]= new Array();
 choices[6][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[6][1] = "Programa de cartas de servicios";
 choices[6][2] = "Programa para la mejora continua de las organizaciones.";
 choices[6][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[6] = choices[6][2];
 units[6] = "19";
 comments[6] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[6] = 747


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[7]= new Array();
 choices[7][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[7][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[7][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[7][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[7] = choices[7][0];
 units[7] = "91";
 comments[7] = "Id Pregunta: 6. AGE A1 2015";
 preguntaids[7] = 6


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[8]= "9)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[8]= new Array();
 choices[8][0] = "Subsecretario";
 choices[8][1] = "Subdirector general";
 choices[8][2] = "Secretario de Estado";
 choices[8][3] = "ninguna es correcta";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[8] = 791


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[9]= "10)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[9]= new Array();
 choices[9][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[9][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[9][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[9][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[9] = 238


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[10]= "11)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[10]= new Array();
 choices[10][0] = "&oacute;rganos superiores";
 choices[10][1] = "&oacute;rganos directivos";
 choices[10][2] = "&oacute;rganos superiores y directivos";
 choices[10][3] = "ninguna es correcta";
 answers[10] = choices[10][1];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[10] = 796


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[11]= new Array();
 choices[11][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[11] = choices[11][0];
 units[11] = "10";
 comments[11] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";
 preguntaids[11] = 484


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[12]= new Array();
 choices[12][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[12][1] = "Entrada en la Uni&oacute;n Europea";
 choices[12][2] = "Pactos de la Moncloa";
 choices[12][3] = "Ingreso en la ONU";
 answers[12] = choices[12][3];
 units[12] = "12";
 comments[12] = "Id Pregunta: 573. Modelo econ&oacute;mico";
 preguntaids[12] = 573


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[13]= "14)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[13]= new Array();
 choices[13][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[13][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[13][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[13][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[13] = choices[13][2];
 units[13] = "7";
 comments[13] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[13] = 512


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[14]= new Array();
 choices[14][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[14][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[14][2] = "Apertura al exterior";
 choices[14][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[14] = choices[14][0];
 units[14] = "17";
 comments[14] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[14] = 762


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[15]= "16)  Es falso que:";
 choices[15]= new Array();
 choices[15][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[15][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[15][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[15][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[15] = choices[15][1];
 units[15] = "20";
 comments[15] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[15] = 752


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[16]= "17)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[16]= new Array();
 choices[16][0] = "Sello electr&oacute;nico";
 choices[16][1] = "Sede electr&oacute;nica";
 choices[16][2] = "Servidor seguro (SSL/TLS)";
 choices[16][3] = "Empleado p&uacute;blico";
 answers[16] = choices[16][2];
 units[16] = "7";
 comments[16] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[16] = 26


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[17]= "18)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "la Administraci&oacute;n General del Estado";
 choices[17][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[17][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[17][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[17] = 769


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[18]= "19)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[18]= new Array();
 choices[18][0] = "Bases de datos orientadas a filas";
 choices[18][1] = "Bases de datos orientadas a documentos";
 choices[18][2] = "Bases de datos de clave/valor";
 choices[18][3] = "Bases de datos orientadas a objetos";
 answers[18] = choices[18][0];
 units[18] = "73";
 comments[18] = "Id Pregunta: 100. ";
 preguntaids[18] = 100


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[19]= "20)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[19]= new Array();
 choices[19][0] = "El 23 de julio de 1952.";
 choices[19][1] = "El 18 de abril de 1951.";
 choices[19][2] = "El 16 de abril de 1948.";
 choices[19][3] = "d)Ninguna de las respuestas son correctas.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[19] = 349


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[20]= "21)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[20]= new Array();
 choices[20][0] = "A la persona demandante.";
 choices[20][1] = "A la persona demandada.";
 choices[20][2] = "Al &oacute;rgano judicial.";
 choices[20][3] = "Al &oacute;rgano administrativo.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[20] = 400


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[21]= new Array();
 choices[21][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[21][1] = "Calidad de los servicios p&uacute;blicos";
 choices[21][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[21][3] = "Servicio efectivo a los ciudadanos";
 answers[21] = choices[21][1];
 units[21] = "18";
 comments[21] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[21] = 749


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[22]= new Array();
 choices[22][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[22][1] = "La Direcci&oacute;n de la Competencia.";
 choices[22][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[22][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[22] = choices[22][0];
 units[22] = "121";
 comments[22] = "Id Pregunta: 628. Junta de Extremadura A1 2015";
 preguntaids[22] = 628


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[23]= new Array();
 choices[23][0] = "Art. 25 LO, 3/2007.";
 choices[23][1] = "Art. 23 LO, 3/2007.";
 choices[23][2] = "Art. 14 LO, 3/2007.";
 choices[23][3] = "Ninguna es correcta, es el art. 13.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[23] = 416


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[24]= "25)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[24]= new Array();
 choices[24][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[24][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[24][2] = "El Presidente del Gobierno";
 choices[24][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[24] = choices[24][1];
 units[24] = "26";
 comments[24] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[24] = 551


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[25]= "26)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[25]= new Array();
 choices[25][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[25][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[25][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[25][3] = "Todas son correctas.";
 answers[25] = choices[25][3];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[25] = 834


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[26]= new Array();
 choices[26][0] = "La CETIC";
 choices[26][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[26][2] = "La DTIC";
 choices[26][3] = "Ninguno de los anteriores";
 answers[26] = choices[26][1];
 units[26] = "19";
 comments[26] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[26] = 587


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[27]= "28)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[27]= new Array();
 choices[27][0] = "Fat y Ntfs.";
 choices[27][1] = "Extfat y Fat.";
 choices[27][2] = "Fat y Nfst.";
 choices[27][3] = "ext2fs y Ntfs.";
 answers[27] = choices[27][0];
 units[27] = "58";
 comments[27] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[27] = 642


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[28][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[28][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[28][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[28] = choices[28][2];
 units[28] = "53";
 comments[28] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[28] = 65


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[29]= "30)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[29]= new Array();
 choices[29][0] = "Seis a&ntilde;os.";
 choices[29][1] = "Cinco a&ntilde;os.";
 choices[29][2] = "Cuatro a&ntilde;os.";
 choices[29][3] = "Ocho a&ntilde;os.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 307. UNION EUROPEA";
 preguntaids[29] = 307


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[30]= new Array();
 choices[30][0] = "No se aplican directamente en los Estados.";
 choices[30][1] = "No son vinculantes.";
 choices[30][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[30][3] = "Tienen alcance general.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[30] = 356


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[31]= "32)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[31]= new Array();
 choices[31][0] = "Primario, que incluye la agricultura y la pesca";
 choices[31][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[31][2] = "Minero, junto con las exportaciones de comercio";
 choices[31][3] = "Servicios";
 answers[31] = choices[31][3];
 units[31] = "12";
 comments[31] = "Id Pregunta: 569. Modelo econ&oacute;mico";
 preguntaids[31] = 569


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; facilita un ORM?";
 choices[32]= new Array();
 choices[32][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[32][1] = "Conversi&oacute;n de objetos a documentos";
 choices[32][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[32][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[32] = choices[32][0];
 units[32] = "62";
 comments[32] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[32] = 49


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[33]= "34)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[33]= new Array();
 choices[33][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[33][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[33][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[33][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[33] = choices[33][1];
 units[33] = "19";
 comments[33] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";
 preguntaids[33] = 160


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[34][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[34][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[34][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[34] = choices[34][3];
 units[34] = "19";
 comments[34] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[34] = 16


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[35]= new Array();
 choices[35][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[35][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[35][2] = "A) y B) son verdaderas";
 choices[35][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[35] = choices[35][2];
 units[35] = "73";
 comments[35] = "Id Pregunta: 106. ";
 preguntaids[35] = 106


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[36]= new Array();
 choices[36][0] = "absoluta de las Cortes Generales.";
 choices[36][1] = "absoluta del Congreso de los Diputados.";
 choices[36][2] = "simple de las Cortes Generales.";
 choices[36][3] = "simple del Congreso de los Diputados.";
 answers[36] = choices[36][3];
 units[36] = "1";
 comments[36] = "Id Pregunta: 173. CONSTITUCION1978";
 preguntaids[36] = 173


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[37]= "38)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[37]= new Array();
 choices[37][0] = "CO.PER.";
 choices[37][1] = "COMPER.";
 choices[37][2] = "CO.RE.PER.";
 choices[37][3] = "CO.PE.RRE.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 338. UNION EUROPEA";
 preguntaids[37] = 338


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[38]= new Array();
 choices[38][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[38][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[38][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[38][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[38] = choices[38][1];
 units[38] = "22";
 comments[38] = "Id Pregunta: 122. ";
 preguntaids[38] = 122


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[39]= new Array();
 choices[39][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[39][1] = "La delimitaci&oacute;n de su territorio.";
 choices[39][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[39][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[39] = 228


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[40]= new Array();
 choices[40][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[40][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[40][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[40][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[40] = choices[40][0];
 units[40] = "22";
 comments[40] = "Id Pregunta: 124. ";
 preguntaids[40] = 124


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[41]= "42)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[41]= new Array();
 choices[41][0] = "El derecho a la propiedad privada.";
 choices[41][1] = "El derecho de asociaci&oacute;n.";
 choices[41][2] = "El derecho de fundaci&oacute;n.";
 choices[41][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[41] = choices[41][1];
 units[41] = "1";
 comments[41] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[41] = 174


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[42]= new Array();
 choices[42][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[42][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[42][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[42][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[42] = choices[42][2];
 units[42] = "22";
 comments[42] = "Id Pregunta: 121. ";
 preguntaids[42] = 121


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[43]= "44)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[43]= new Array();
 choices[43][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[43][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[43][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[43][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[43] = choices[43][0];
 units[43] = "65";
 comments[43] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[43] = 625


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[44]= "45)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[44]= new Array();
 choices[44][0] = "180 art&iacute;culos.";
 choices[44][1] = "182 art&iacute;culos.";
 choices[44][2] = "185 art&iacute;culos.";
 choices[44][3] = "190 art&iacute;culos.";
 answers[44] = choices[44][1];
 units[44] = "10";
 comments[44] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";
 preguntaids[44] = 485


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[45]= new Array();
 choices[45][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[45][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[45][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[45][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[45] = 309


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[46]= new Array();
 choices[46][0] = "Se definen iteraciones";
 choices[46][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[46][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[46][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[46] = choices[46][1];
 units[46] = "34, 84";
 comments[46] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[46] = 732


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[47]= new Array();
 choices[47][0] = "Al Consejo Europeo.";
 choices[47][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[47][2] = "A la Comisi&oacute;n Europea.";
 choices[47][3] = "Al Parlamento Europeo.";
 answers[47] = choices[47][2];
 units[47] = "5";
 comments[47] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[47] = 320


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[48]= "49)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[48]= new Array();
 choices[48][0] = "Acuerdos cualificados.";
 choices[48][1] = "Acuerdos ponderados.";
 choices[48][2] = "Valoraci&oacute;n de los votos.";
 choices[48][3] = "Ponderaci&oacute;n de los votos.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 329. UNION EUROPEA";
 preguntaids[48] = 329


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[49]= new Array();
 choices[49][0] = "NoSQL";
 choices[49][1] = "Sistemas de baja latencia";
 choices[49][2] = "MapReduce";
 choices[49][3] = "Business Intelligence";
 answers[49] = choices[49][1];
 units[49] = "73";
 comments[49] = "Id Pregunta: 660. ";
 preguntaids[49] = 660


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[50]= "51)  Sobre el Plan Juncker:";
 choices[50]= new Array();
 choices[50][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[50][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[50][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[50][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[50] = 282


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[51]= "52)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[51]= new Array();
 choices[51][0] = "61";
 choices[51][1] = "53";
 choices[51][2] = "65";
 choices[51][3] = "67";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[51] = 248


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[52]= new Array();
 choices[52][0] = "Tres meses.";
 choices[52][1] = "Nueve meses.";
 choices[52][2] = "Cuatro meses.";
 choices[52][3] = "Seis meses.";
 answers[52] = choices[52][0];
 units[52] = "10";
 comments[52] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";
 preguntaids[52] = 469


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[53]= "54)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[53]= new Array();
 choices[53][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[53][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[53][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[53][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[53] = choices[53][0];
 units[53] = "76";
 comments[53] = "Id Pregunta: 855. Xunta de Galicia 2015";
 preguntaids[53] = 855


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[54]= "55)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[54]= new Array();
 choices[54][0] = "Un Reglamento.";
 choices[54][1] = "Un Decreto.";
 choices[54][2] = "Una Ley.";
 choices[54][3] = "Un Real-Decreto.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 368. UNION EUROPEA";
 preguntaids[54] = 368


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[55]= "56)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[55]= new Array();
 choices[55][0] = "Ejecuci&oacute;n";
 choices[55][1] = "Adjudicaci&oacute;n";
 choices[55][2] = "Licitaci&oacute;n";
 choices[55][3] = "Formalizaci&oacute;n";
 answers[55] = choices[55][3];
 units[55] = "37";
 comments[55] = "Id Pregunta: 69. AGE A1 2015";
 preguntaids[55] = 69


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[56]= new Array();
 choices[56][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[56][1] = "Pasivos financieros y transferencias de capital.";
 choices[56][2] = "Activos financieros y pasivos financieros.";
 choices[56][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[56] = 461


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[57]= "58)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[57]= new Array();
 choices[57][0] = "6 principios.";
 choices[57][1] = "7 principios.";
 choices[57][2] = "5 principios.";
 choices[57][3] = "6 directrices.";
 answers[57] = choices[57][2];
 units[57] = "28";
 comments[57] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[57] = 738


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Org&aacute;nica.";
 choices[58][1] = "Contable.";
 choices[58][2] = "Econ&oacute;mica.";
 choices[58][3] = "Por programas.";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[58] = 473


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[59]= "60)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[59]= new Array();
 choices[59][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[59][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[59][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[59][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 654. ";
 preguntaids[59] = 654


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[60]= new Array();
 choices[60][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[60][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[60][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[60][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[60] = 849


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[61]= "62)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[61]= new Array();
 choices[61][0] = "Parcial.";
 choices[61][1] = "Sectorial.";
 choices[61][2] = "Tranversal.";
 choices[61][3] = "Vertical.";
 answers[61] = choices[61][2];
 units[61] = "14";
 comments[61] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[61] = 402


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[62]= "63)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[62]= new Array();
 choices[62][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[62][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[62][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[62][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[62] = 838


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[63]= new Array();
 choices[63][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[63][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[63][2] = "Fomentar el despliegue de redes y servicios";
 choices[63][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[63] = choices[63][0];
 units[63] = "19";
 comments[63] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[63] = 754


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[64]= "65)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[64]= new Array();
 choices[64][0] = "Entradas (entities).";
 choices[64][1] = "Atributos (attribs).";
 choices[64][2] = "M&oacute;dulos (modules).";
 choices[64][3] = "Objetos (objects).";
 answers[64] = choices[64][0];
 units[64] = "74";
 comments[64] = "Id Pregunta: 624. Junta de Extremadura A1 2015";
 preguntaids[64] = 624


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[65]= "66)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[65]= new Array();
 choices[65][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[65][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[65][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[65][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[65] = 825


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[66]= "67)  Son bases de datos NoSQL orientadas a objetos:";
 choices[66]= new Array();
 choices[66][0] = "GemStone";
 choices[66][1] = "Zope Object DB";
 choices[66][2] = "Las dos anteriores";
 choices[66][3] = "Solo B)";
 answers[66] = choices[66][2];
 units[66] = "73";
 comments[66] = "Id Pregunta: 107. ";
 preguntaids[66] = 107


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[67]= new Array();
 choices[67][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[67][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[67][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[67][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[67] = 770


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[68]= new Array();
 choices[68][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[68][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[68][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[68][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[68] = choices[68][1];
 units[68] = "77";
 comments[68] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";
 preguntaids[68] = 689


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[69]= "70)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Un informe de impacto de g&eacute;nero.";
 choices[69][1] = "Un programa de igualdad de oportunidades.";
 choices[69][2] = "Un plan de Igualdad de Oportunidades.";
 choices[69][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[69] = 414


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[70]= "71)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[70]= new Array();
 choices[70][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[70][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[70][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[70][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[70] = 226


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[71]= "72)  El Parlamento Europeo celebrar&aacute;:";
 choices[71]= new Array();
 choices[71][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[71][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[71][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[71][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[71] = 290


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[72]= new Array();
 choices[72][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[72][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[72][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[72][3] = "Todas lo son";
 answers[72] = choices[72][0];
 units[72] = "17";
 comments[72] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";
 preguntaids[72] = 555


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[73]= new Array();
 choices[73][0] = "La CETIC";
 choices[73][1] = "Los Ministerios";
 choices[73][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[73][3] = "Ninguno de los anteriores";
 answers[73] = choices[73][1];
 units[73] = "19";
 comments[73] = "Id Pregunta: 597. Estrategia TIC";
 preguntaids[73] = 597


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[74]= new Array();
 choices[74][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[74][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[74][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[74][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[74] = 332


