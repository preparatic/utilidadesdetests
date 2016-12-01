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

//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[0]= "1)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[0]= new Array();
 choices[0][0] = "Conformidad";
 choices[0][1] = "Responsabilidad";
 choices[0][2] = "Adquisici&oacute;n";
 choices[0][3] = "Desempe&ntilde;o";
 answers[0] = choices[0][0];
 units[0] = "26";
 comments[0] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[0] = 548


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[1]= "2)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[1]= new Array();
 choices[1][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[1][1] = "Unanimidad.";
 choices[1][2] = "Mayor&iacute;a cualificada.";
 choices[1][3] = "Mayor&iacute;a simple.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 365. UNION EUROPEA";
 preguntaids[1] = 365


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[2]= new Array();
 choices[2][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[2][1] = "De nivel alto.";
 choices[2][2] = "De nivel medio y nivel alto.";
 choices[2][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[2] = choices[2][3];
 units[2] = "35";
 comments[2] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[2] = 632


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[3]= "4)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Clustering";
 choices[3][1] = "Deduplicaci&oacute;n";
 choices[3][2] = "Virtualizaci&oacute;n";
 choices[3][3] = "Contenerizaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "124";
 comments[3] = "Id Pregunta: 98. AGE A1 2015";
 preguntaids[3] = 98


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[4]= new Array();
 choices[4][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[4][1] = "Intervenci&oacute;n formal y material.";
 choices[4][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[4][3] = "Intervenci&oacute;n formal y general.";
 answers[4] = choices[4][1];
 units[4] = "10";
 comments[4] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[4] = 480


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[5]= new Array();
 choices[5][0] = "Selenium";
 choices[5][1] = "JUnit";
 choices[5][2] = "Jenkins";
 choices[5][3] = "JMeter";
 answers[5] = choices[5][2];
 units[5] = "92";
 comments[5] = "Id Pregunta: 703. INTEGRACION CONTINUA";
 preguntaids[5] = 703


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[6]= new Array();
 choices[6][0] = "Veinticinco.";
 choices[6][1] = "Veintiuno.";
 choices[6][2] = "Dieciocho.";
 choices[6][3] = "Diecinueve.";
 answers[6] = choices[6][0];
 units[6] = "5";
 comments[6] = "Id Pregunta: 325. UNION EUROPEA";
 preguntaids[6] = 325


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[7]= new Array();
 choices[7][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[7][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[7][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[7][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[7] = 202


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[8]= "9)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[8]= new Array();
 choices[8][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[8][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[8][2] = "Un programa de igualdad.";
 choices[8][3] = "Un estatuto de igualdad.";
 answers[8] = choices[8][0];
 units[8] = "14";
 comments[8] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[8] = 410


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[9]= "10)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[9]= new Array();
 choices[9][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[9][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[9][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[9][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[9] = choices[9][2];
 units[9] = "7";
 comments[9] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[9] = 529


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[10]= "11)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[10]= new Array();
 choices[10][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[10][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[10][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[10][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[10] = choices[10][1];
 units[10] = "43";
 comments[10] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[10] = 439


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[11]= "12)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[11]= new Array();
 choices[11][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[11][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[11][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[11][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 837. Ley 40/2015";
 preguntaids[11] = 837


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[12]= "13)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[12]= new Array();
 choices[12][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[12][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[12][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[12][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 808. Ley 40/2015";
 preguntaids[12] = 808


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[13]= new Array();
 choices[13][0] = "Entre 1973 y 1978";
 choices[13][1] = "Entre 1992 y 1996";
 choices[13][2] = "Entre 1978 y 1985";
 choices[13][3] = "Entre 2008 y 2013";
 answers[13] = choices[13][2];
 units[13] = "12";
 comments[13] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[13] = 564


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[14]= new Array();
 choices[14][0] = "Art&iacute;culo 14 CE.";
 choices[14][1] = "Art&iacute;culo 9.2 CE.";
 choices[14][2] = "Art&iacute;culo 9.1 CE.";
 choices[14][3] = "Art&iacute;culo 13 CE.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[14] = 407


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[15][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[15][2] = "A y B son correctas.";
 choices[15][3] = "A y B son falsas.";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[15] = 848


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[16]= "17)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[16]= new Array();
 choices[16][0] = "Presencia equilibrada.";
 choices[16][1] = "Presencia paritaria.";
 choices[16][2] = "Presencia consensuada.";
 choices[16][3] = "presencia horizontal.";
 answers[16] = choices[16][0];
 units[16] = "14";
 comments[16] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[16] = 425


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
 preguntaids[17] = 246


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[18]= "19)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[18]= new Array();
 choices[18][0] = "Dos.";
 choices[18][1] = "Cuatro.";
 choices[18][2] = "Cinco.";
 choices[18][3] = "Tres.";
 answers[18] = choices[18][1];
 units[18] = "10";
 comments[18] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";
 preguntaids[18] = 491


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[19]= new Array();
 choices[19][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[19][1] = "Excesiva estabilidad de empleo";
 choices[19][2] = "An&eacute;mico crecimiento de la productividad";
 choices[19][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[19] = choices[19][1];
 units[19] = "12";
 comments[19] = "Id Pregunta: 565. Modelo econ&oacute;mico";
 preguntaids[19] = 565


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[20]= "21)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[20]= new Array();
 choices[20][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[20][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[20][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[20][3] = "Todas las respuestas son correctas.";
 answers[20] = choices[20][3];
 units[20] = "50";
 comments[20] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[20] = 622


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[21]= "22)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[21]= new Array();
 choices[21][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[21][1] = "la Organizaci&oacute;n Territorial";
 choices[21][2] = "la Organizaci&oacute;n sectorial";
 choices[21][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[21] = choices[21][2];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[21] = 787


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[22]= "23)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[22]= new Array();
 choices[22][0] = "Dise&ntilde;o del servicio.";
 choices[22][1] = "Transici&oacute;n del servicio.";
 choices[22][2] = "Estrategia del servicio.";
 choices[22][3] = "Operaci&oacute;n del servicio.";
 answers[22] = choices[22][2];
 units[22] = "101";
 comments[22] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[22] = 644


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[23]= "24)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[23]= new Array();
 choices[23][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[23][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[23][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[23][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[23] = choices[23][2];
 units[23] = "1";
 comments[23] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[23] = 190


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[24]= new Array();
 choices[24][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[24][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[24][2] = "Apertura al exterior";
 choices[24][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[24] = choices[24][0];
 units[24] = "17";
 comments[24] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[24] = 762


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[25]= "26)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[25]= new Array();
 choices[25][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[25][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[25][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[25][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[25] = choices[25][0];
 units[25] = "60";
 comments[25] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[25] = 651


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[26]= new Array();
 choices[26][0] = "Cassandra";
 choices[26][1] = "Riak";
 choices[26][2] = "Avro";
 choices[26][3] = "Zookeeper";
 answers[26] = choices[26][3];
 units[26] = "73";
 comments[26] = "Id Pregunta: 658. ";
 preguntaids[26] = 658


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[27]= "28)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[27]= new Array();
 choices[27][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[27][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[27][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[27][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";
 preguntaids[27] = 167


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[28]= new Array();
 choices[28][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[28][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[28][2] = "El que hubieren designado las Cortes Generales.";
 choices[28][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[28] = choices[28][1];
 units[28] = "1";
 comments[28] = "Id Pregunta: 182. CONSTITUCION1978";
 preguntaids[28] = 182


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[29]= "30)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[29]= new Array();
 choices[29][0] = "personalidad jur&iacute;dica propia";
 choices[29][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[29][2] = "personalidad jur&iacute;dica plena";
 choices[29][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[29] = choices[29][1];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[29] = 774


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[30]= "31)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[30]= new Array();
 choices[30][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[30][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[30][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[30][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[30] = choices[30][1];
 units[30] = "14";
 comments[30] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[30] = 412


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[31]= new Array();
 choices[31][0] = "Al Consejo Europeo.";
 choices[31][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[31][2] = "A la Comisi&oacute;n Europea.";
 choices[31][3] = "Al Parlamento Europeo.";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 296. UNION EUROPEA";
 preguntaids[31] = 296


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[32]= "33)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[32]= new Array();
 choices[32][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[32][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[32][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[32][3] = "Todas las respuestas son correctas.";
 answers[32] = choices[32][0];
 units[32] = "101";
 comments[32] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[32] = 648


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[33]= "34)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[33][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[33][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[33][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[33] = 172


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[34]= "35)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[34]= new Array();
 choices[34][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[34][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[34][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[34][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[34] = choices[34][3];
 units[34] = "5";
 comments[34] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[34] = 317


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[35]= "36)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[35]= new Array();
 choices[35][0] = "El Gobierno.";
 choices[35][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[35][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[35][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[35] = 206


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[36]= "37)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[36]= new Array();
 choices[36][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[36][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[36][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[36][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[36] = choices[36][2];
 units[36] = "73";
 comments[36] = "Id Pregunta: 654. ";
 preguntaids[36] = 654


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ala la correcta:";
 choices[37]= new Array();
 choices[37][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[37][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[37][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[37][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[37] = choices[37][1];
 units[37] = "7";
 comments[37] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[37] = 543


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[38]= new Array();
 choices[38][0] = "10 d&iacute;as.";
 choices[38][1] = "15 d&iacute;as.";
 choices[38][2] = "1 mes.";
 choices[38][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[38] = choices[38][0];
 units[38] = "7";
 comments[38] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[38] = 668


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[39]= "40)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[39]= new Array();
 choices[39][0] = "IANA";
 choices[39][1] = "ISOC";
 choices[39][2] = "IETF";
 choices[39][3] = "IAB";
 answers[39] = choices[39][0];
 units[39] = "103";
 comments[39] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[39] = 67


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[40]= new Array();
 choices[40][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[40][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[40][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[40][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[40] = choices[40][2];
 units[40] = "22";
 comments[40] = "Id Pregunta: 129. ";
 preguntaids[40] = 129


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[41]= new Array();
 choices[41][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[41][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[41][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[41][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[41] = choices[41][0];
 units[41] = "15";
 comments[41] = "Id Pregunta: 114. ";
 preguntaids[41] = 114


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[42]= new Array();
 choices[42][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[42][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[42][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[42][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[42] = choices[42][0];
 units[42] = "86";
 comments[42] = "Id Pregunta: 71. AGE A1 2015";
 preguntaids[42] = 71


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[43]= new Array();
 choices[43][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[43][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[43][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[43][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[43] = choices[43][1];
 units[43] = "101";
 comments[43] = "Id Pregunta: 5. AGE A1 2015";
 preguntaids[43] = 5


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[44]= new Array();
 choices[44][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[44][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[44][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[44][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[44] = choices[44][3];
 units[44] = "12";
 comments[44] = "Id Pregunta: 567. Modelo econ&oacute;mico";
 preguntaids[44] = 567


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[45]= "46)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[45]= new Array();
 choices[45][0] = "El Rey.";
 choices[45][1] = "El Jefe del Estado.";
 choices[45][2] = "El Gobierno.";
 choices[45][3] = "El Presidente del Gobierno.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[45] = 208


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[46]= "47)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[46]= new Array();
 choices[46][0] = "Almacenamiento orientado a columnas";
 choices[46][1] = "Framework MapReduce";
 choices[46][2] = "OLTP";
 choices[46][3] = "Bases de datos clave-valor";
 answers[46] = choices[46][2];
 units[46] = "73";
 comments[46] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[46] = 93


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[47]= new Array();
 choices[47][0] = "Los principios rectores";
 choices[47][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[47][2] = "Los hitos para su desarrollo gradual";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 585. Estrategia TIC";
 preguntaids[47] = 585


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[48]= "49)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[48]= new Array();
 choices[48][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[48][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[48][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[48][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";
 preguntaids[48] = 160


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[49]= new Array();
 choices[49][0] = "En 1988.";
 choices[49][1] = "En 1981.";
 choices[49][2] = "En 1982.";
 choices[49][3] = "En 1986.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[49] = 371


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[50]= new Array();
 choices[50][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[50][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[50][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[50][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[50] = 770


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
 preguntaids[51] = 465


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[52]= new Array();
 choices[52][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[52][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[52][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[52][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[52] = choices[52][1];
 units[52] = "84";
 comments[52] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[52] = 53


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[53]= "54)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[53]= new Array();
 choices[53][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[53][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[53][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[53][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[53] = 800


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[54]= "55)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[54]= new Array();
 choices[54][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[54][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[54][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[54][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[54] = choices[54][3];
 units[54] = "7";
 comments[54] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[54] = 27


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[55]= "56)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[55][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[55][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[55][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[55] = choices[55][2];
 units[55] = "22";
 comments[55] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";
 preguntaids[55] = 277


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[56][1] = "Auditor&iacute;a operativa.";
 choices[56][2] = "Auditor&iacute;a de cumplimiento.";
 choices[56][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[56] = 474


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[57]= "58)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "Con el a&ntilde;o anterior.";
 choices[57][1] = "Con los tres a&ntilde;os anteriores.";
 choices[57][2] = "Con el a&ntilde;o natural.";
 choices[57][3] = "Con los dos a&ntilde;os anteriores.";
 answers[57] = choices[57][2];
 units[57] = "10";
 comments[57] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[57] = 468


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[58]= "59)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[58]= new Array();
 choices[58][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[58][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[58][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[58][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[58] = 148


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[59][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[59][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[59][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[59] = 845


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[60]= "61)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[60]= new Array();
 choices[60][0] = "tienen capacidad de obrar limitada";
 choices[60][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[60][2] = "no tienen capacidad de obrar";
 choices[60][3] = "ninguna es correcta";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[60] = 528


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[61]= new Array();
 choices[61][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[61][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[61][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[61][3] = "Todas las respuestas son correctas.";
 answers[61] = choices[61][2];
 units[61] = "42";
 comments[61] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[61] = 618


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[62]= new Array();
 choices[62][0] = "Art&iacute;culo 16.2.";
 choices[62][1] = "Art&iacute;culo 17.1.";
 choices[62][2] = "Art&iacute;culo 18.1.";
 choices[62][3] = "Art&iacute;culo 18.2.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[62] = 249


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[63]= "64)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Incremental, diferencial, completa";
 choices[63][1] = "Completa, incremental, diferencial";
 choices[63][2] = "Completa, diferencial, incremental";
 choices[63][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[63] = choices[63][0];
 units[63] = "53";
 comments[63] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";
 preguntaids[63] = 66


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[64]= new Array();
 choices[64][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[64][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[64][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[64][3] = "El software funcionando es la medida principal del progreso.";
 answers[64] = choices[64][2];
 units[64] = "34";
 comments[64] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[64] = 43


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[65]= "66)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[65]= new Array();
 choices[65][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[65][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[65][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[65][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 534. LEY 39/2015";
 preguntaids[65] = 534


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[66]= "67)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[66]= new Array();
 choices[66][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[66][1] = "mediante resoluci&oacute;n judicial especial";
 choices[66][2] = "&uacute;nicamente mediante poder notarial";
 choices[66][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[66] = choices[66][3];
 units[66] = "7";
 comments[66] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[66] = 532


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[67]= new Array();
 choices[67][0] = "JUnit, Artifactory y SonarQube";
 choices[67][1] = "JUnit, Artifactory y Selenium";
 choices[67][2] = "JUnit, SonarQube y Selenium";
 choices[67][3] = "ArtiFactory, SonarQube y Selenium";
 answers[67] = choices[67][2];
 units[67] = "92";
 comments[67] = "Id Pregunta: 91. AGE A1 2015";
 preguntaids[67] = 91


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[68]= new Array();
 choices[68][0] = "Establecer redes de telecomunicaciones continentales";
 choices[68][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[68][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[68][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[68] = choices[68][0];
 units[68] = "17";
 comments[68] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[68] = 554


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[69]= new Array();
 choices[69][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[69][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[69][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[69][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[69] = choices[69][3];
 units[69] = "106";
 comments[69] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[69] = 74


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[70]= "71)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[70]= new Array();
 choices[70][0] = "la Administraci&oacute;n General del Estado";
 choices[70][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[70][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[70][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[70] = choices[70][3];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[70] = 769


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[71]= new Array();
 choices[71][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[71][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[71][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[71][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[71] = choices[71][0];
 units[71] = "46";
 comments[71] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[71] = 629


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[72]= new Array();
 choices[72][0] = "El Consejo Europeo.";
 choices[72][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[72][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[72][3] = "El Parlamento Europeo.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[72] = 313


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


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[74]= "75)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[74]= new Array();
 choices[74][0] = "Son actos normativos.";
 choices[74][1] = "Poseen alcance general.";
 choices[74][2] = "No son obligatorias.";
 choices[74][3] = "Son actos individuales no normativos.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 362. UNION EUROPEA";
 preguntaids[74] = 362


