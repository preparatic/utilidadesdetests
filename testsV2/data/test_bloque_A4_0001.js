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

//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[0]= "1)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[0]= new Array();
 choices[0][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[0][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[0][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[0][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[0] = choices[0][3];
 units[0] = "18, 20";
 comments[0] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[1]= new Array();
 choices[1][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[1][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[1][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[1][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[1] = choices[1][1];
 units[1] = "18, 20";
 comments[1] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[2]= new Array();
 choices[2][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[2][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[2][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][1];
 units[2] = "19";
 comments[2] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[3]= new Array();
 choices[3][0] = "El BCE";
 choices[3][1] = "El Parlamento";
 choices[3][2] = "El Consejo";
 choices[3][3] = "La Comisi&oacute;n";
 answers[3] = choices[3][3];
 units[3] = "17";
 comments[3] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[4]= new Array();
 choices[4][0] = "Agenda digital para Europa";
 choices[4][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[4][2] = "Juventud en movimiento";
 choices[4][3] = "Agenda Web 2.0";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 760. Europa 2020";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[5]= "6)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[5][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[5][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[5][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[6]= new Array();
 choices[6][0] = "Anualmente";
 choices[6][1] = "Bienalmente";
 choices[6][2] = "Cada cuatro a&ntilde;os";
 choices[6][3] = "No se define ninguna periodicidad";
 answers[6] = choices[6][1];
 units[6] = "19";
 comments[6] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


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


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[8]= new Array();
 choices[8][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[8][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[8][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[8][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[8] = choices[8][1];
 units[8] = "22";
 comments[8] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[9]= "10)  El plan nacional de ciudades inteligentes...";
 choices[9]= new Array();
 choices[9][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[9][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[9][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[9][3] = "No existe";
 answers[9] = choices[9][1];
 units[9] = "19";
 comments[9] = "Id Pregunta: 563. Ciudades Inteligentes";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[10]= "11)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[10]= new Array();
 choices[10][0] = "Interoperabilidad";
 choices[10][1] = "Integridad";
 choices[10][2] = "Capital humano";
 choices[10][3] = "Trazabilidad";
 answers[10] = choices[10][2];
 units[10] = "19";
 comments[10] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[11]= new Array();
 choices[11][0] = "Programa de Educaci&oacute;n Digital";
 choices[11][1] = "Programa de Salud y Bienestar Social";
 choices[11][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[11][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[12]= new Array();
 choices[12][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[12][1] = "Las CMADs";
 choices[12][2] = "Ambas son correctas.";
 choices[12][3] = "Ninguna es correcta";
 answers[12] = choices[12][2];
 units[12] = "19";
 comments[12] = "Id Pregunta: 598. Estrategia TIC";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[13]= new Array();
 choices[13][0] = "Bienalmente";
 choices[13][1] = "Anualmente";
 choices[13][2] = "Semestralmente";
 choices[13][3] = "Cada cuatro a&ntilde;os";
 answers[13] = choices[13][1];
 units[13] = "19";
 comments[13] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[14]= new Array();
 choices[14][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[14][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[14][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[14][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[14] = choices[14][2];
 units[14] = "22";
 comments[14] = "Id Pregunta: 129. ";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[15]= "16)  Es falso que:";
 choices[15]= new Array();
 choices[15][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[15][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[15][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[15][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[15] = choices[15][1];
 units[15] = "18, 20";
 comments[15] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[16]= new Array();
 choices[16][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[16][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[16][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[16][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[16] = choices[16][2];
 units[16] = "22";
 comments[16] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[17]= new Array();
 choices[17][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[17][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[17][2] = "Apertura al exterior";
 choices[17][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[17] = choices[17][0];
 units[17] = "17";
 comments[17] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[18]= new Array();
 choices[18][0] = "Crecimiento sostenible";
 choices[18][1] = "Crecimiento inteligente";
 choices[18][2] = "Crecimiento digital";
 choices[18][3] = "Crecimiento integrador";
 answers[18] = choices[18][2];
 units[18] = "19";
 comments[18] = "Id Pregunta: 759. Europa 2020";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[19]= new Array();
 choices[19][0] = "En 2011";
 choices[19][1] = "En 2013";
 choices[19][2] = "En 2015";
 choices[19][3] = "En 2016";
 answers[19] = choices[19][2];
 units[19] = "17";
 comments[19] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[20]= "21)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[20]= new Array();
 choices[20][0] = "Peters";
 choices[20][1] = "Hollingsworth";
 choices[20][2] = "Manuel Castells";
 choices[20][3] = "Gaebler";
 answers[20] = choices[20][1];
 units[20] = "18, 20";
 comments[20] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[21]= new Array();
 choices[21][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[21][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[21][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[21][3] = "Todas lo son";
 answers[21] = choices[21][0];
 units[21] = "17";
 comments[21] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[22]= new Array();
 choices[22][0] = "La CETIC";
 choices[22][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[22][2] = "La DTIC";
 choices[22][3] = "El MHFP";
 answers[22] = choices[22][0];
 units[22] = "19";
 comments[22] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[23]= new Array();
 choices[23][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[23][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[23][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[23][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[23] = choices[23][0];
 units[23] = "19";
 comments[23] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[24]= new Array();
 choices[24][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[24][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[24][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[24][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[24] = choices[24][1];
 units[24] = "19";
 comments[24] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[25]= new Array();
 choices[25][0] = "Fue elaborada y aprobada por la CETIC";
 choices[25][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[25][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[25][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[25] = choices[25][1];
 units[25] = "19";
 comments[25] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[26]= "27)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[26]= new Array();
 choices[26][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[26][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[26][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[26][3] = "Todos los anteriores";
 answers[26] = choices[26][3];
 units[26] = "19";
 comments[26] = "Id Pregunta: 561. Agenda Digital";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[27]= new Array();
 choices[27][0] = "El 2 de Octubre de 2015";
 choices[27][1] = "El 15 de Septiembre de 2015";
 choices[27][2] = "El 1 de Octubre de 2015";
 choices[27][3] = "El 5 de Octubre de 2015";
 answers[27] = choices[27][0];
 units[27] = "19";
 comments[27] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[28]= new Array();
 choices[28][0] = "No discriminaci&oacute;n";
 choices[28][1] = "Cooperaci&oacute;n";
 choices[28][2] = "Colaboraci&oacute;n";
 choices[28][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[28] = choices[28][2];
 units[28] = "18, 20";
 comments[28] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[29]= "30)  Son servicios declarados compartidos:";
 choices[29]= new Array();
 choices[29][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[29][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[29][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[29][3] = "Todos los anteriores";
 answers[29] = choices[29][3];
 units[29] = "19";
 comments[29] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[30]= "31)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[30]= new Array();
 choices[30][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[30][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[30][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[30][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[30] = choices[30][1];
 units[30] = "19";
 comments[30] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[31]= "32)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[31]= new Array();
 choices[31][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[31][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[31][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[31][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[31] = choices[31][2];
 units[31] = "22";
 comments[31] = "Id Pregunta: 128. ";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[32]= "33)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[32]= new Array();
 choices[32][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[32][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[32][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[32][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[32] = choices[32][2];
 units[32] = "22";
 comments[32] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[33]= "34)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[33]= new Array();
 choices[33][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[33][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[33][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[33][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[33] = choices[33][2];
 units[33] = "22";
 comments[33] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[34]= new Array();
 choices[34][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[34][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[34][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[34][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[34] = choices[34][3];
 units[34] = "19";
 comments[34] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[35]= "36)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[35]= new Array();
 choices[35][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[35][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[35][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[35][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[35] = choices[35][1];
 units[35] = "19";
 comments[35] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[36]= "37)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[36]= new Array();
 choices[36][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[36][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[36][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[36][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[37]= "38)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[37]= new Array();
 choices[37][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[37][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[37][2] = "Funcionarios e interinos.";
 choices[37][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[37] = choices[37][3];
 units[37] = "20";
 comments[37] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[38]= new Array();
 choices[38][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[38][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[38][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[38][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[38] = choices[38][2];
 units[38] = "22";
 comments[38] = "Id Pregunta: 121. ";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[39]= new Array();
 choices[39][0] = "3 pilares";
 choices[39][1] = "4 pilares";
 choices[39][2] = "5 pilares";
 choices[39][3] = "7 pilares";
 answers[39] = choices[39][0];
 units[39] = "17";
 comments[39] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[40]= "41)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[40]= new Array();
 choices[40][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[40][1] = "La CETIC";
 choices[40][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[40][3] = "El MHFP";
 answers[40] = choices[40][0];
 units[40] = "19";
 comments[40] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[41]= new Array();
 choices[41][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[41][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[41][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[41][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[41] = choices[41][2];
 units[41] = "17";
 comments[41] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[42]= new Array();
 choices[42][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[42][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[42][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[42][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[42] = choices[42][1];
 units[42] = "19";
 comments[42] = "Id Pregunta: 562. Agenda Digital";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique la afirmaci&oacute;n falsa:";
 choices[43]= new Array();
 choices[43][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[43][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[43][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[43][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[43] = choices[43][1];
 units[43] = "22";
 comments[43] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[44]= new Array();
 choices[44][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[44][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[44][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[44][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[44] = choices[44][0];
 units[44] = "22";
 comments[44] = "Id Pregunta: 124. ";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[45][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[45][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[45][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[45] = choices[45][2];
 units[45] = "22";
 comments[45] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[46][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[46][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[46][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[47]= new Array();
 choices[47][0] = "En 2015";
 choices[47][1] = "En 2013";
 choices[47][2] = "En 2016";
 choices[47][3] = "En 2007";
 answers[47] = choices[47][1];
 units[47] = "19";
 comments[47] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[48]= "49)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[48]= new Array();
 choices[48][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[48][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[48][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[48][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[48] = choices[48][3];
 units[48] = "22";
 comments[48] = "Id Pregunta: 709. Ley de transparencia";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[49]= new Array();
 choices[49][0] = "Los principios rectores";
 choices[49][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[49][2] = "Los hitos para su desarrollo gradual";
 choices[49][3] = "Todos los anteriores";
 answers[49] = choices[49][3];
 units[49] = "19";
 comments[49] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[50]= "51)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[50][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[50][2] = "b) y d) son verdaderas";
 choices[50][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[50] = choices[50][1];
 units[50] = "18, 20";
 comments[50] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[51]= new Array();
 choices[51][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[51][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[51][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[51][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[51] = choices[51][3];
 units[51] = "22";
 comments[51] = "Id Pregunta: 120. ";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[52]= "53)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[52]= new Array();
 choices[52][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[52][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[52][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[52][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[52] = choices[52][1];
 units[52] = "18, 20";
 comments[52] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[53]= new Array();
 choices[53][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[53][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[53][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[53][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[53] = choices[53][0];
 units[53] = "19";
 comments[53] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[54]= "55)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[54]= new Array();
 choices[54][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[54][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[54][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[54][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[54] = choices[54][1];
 units[54] = "19";
 comments[54] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[55]= new Array();
 choices[55][0] = "A la CETIC";
 choices[55][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[55][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[55][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[56]= new Array();
 choices[56][0] = "Compatibilidad";
 choices[56][1] = "Interoperabilidad";
 choices[56][2] = "Reutilizaci&oacute;n";
 choices[56][3] = "Accesibilidad";
 answers[56] = choices[56][0];
 units[56] = "22";
 comments[56] = "Id Pregunta: 705. Ley de transparencia";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[57]= new Array();
 choices[57][0] = "La CETIC";
 choices[57][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][2] = "La DTIC";
 choices[57][3] = "Ninguno de los anteriores";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[58]= new Array();
 choices[58][0] = "Un representante de la Administraci&oacute;n local.";
 choices[58][1] = "Un representante del Tribunal de Cuentas.";
 choices[58][2] = "Un representante del Defensor del Pueblo.";
 choices[58][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[58] = choices[58][0];
 units[58] = "22";
 comments[58] = "Id Pregunta: 123. ";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[59]= new Array();
 choices[59][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[59][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[59][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[59][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[59] = choices[59][1];
 units[59] = "22";
 comments[59] = "Id Pregunta: 122. ";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[60]= new Array();
 choices[60][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[60][1] = "Implantar el mercado general europeo";
 choices[60][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[60][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 758. Agenda Digital Europea";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[61]= "62)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[61]= new Array();
 choices[61][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[61][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[61][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[61][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[61] = choices[61][3];
 units[61] = "22";
 comments[61] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[62]= new Array();
 choices[62][0] = "El 5 de Octubre de 2015";
 choices[62][1] = "El 15 de Octubre de 2015";
 choices[62][2] = "El 15 de Septiembre de 2015";
 choices[62][3] = "El 2 de Octubre de 2015";
 answers[62] = choices[62][2];
 units[62] = "19";
 comments[62] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[63]= new Array();
 choices[63][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[63][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[63][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][2];
 units[63] = "18, 20";
 comments[63] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[64]= new Array();
 choices[64][0] = "14";
 choices[64][1] = "11";
 choices[64][2] = "12";
 choices[64][3] = "15";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[65][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[65][2] = "Fomentar el despliegue de redes y servicios";
 choices[65][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[65] = choices[65][0];
 units[65] = "19";
 comments[65] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[66]= new Array();
 choices[66][0] = "Ley 3/2015";
 choices[66][1] = "Ley 6/2007";
 choices[66][2] = "Ley 5/1984";
 choices[66][3] = "Ley 5/2006";
 answers[66] = choices[66][0];
 units[66] = "22";
 comments[66] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[67]= new Array();
 choices[67][0] = "Car&aacute;cter sustitutivo";
 choices[67][1] = "Car&aacute;cter obligatorio";
 choices[67][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][3];
 units[67] = "19";
 comments[67] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[68]= "69)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[68]= new Array();
 choices[68][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[68][1] = "Programa de cartas de servicios";
 choices[68][2] = "Programa para la mejora continua de las organizaciones.";
 choices[68][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[68] = choices[68][2];
 units[68] = "18, 20";
 comments[68] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[69]= "70)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[69]= new Array();
 choices[69][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[69][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[69][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[69][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[69] = choices[69][1];
 units[69] = "22";
 comments[69] = "Id Pregunta: 713. Portal de Transparencia";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[70]= "71)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[70]= new Array();
 choices[70][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[70][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[70][2] = "Ministerio de la Presidencia";
 choices[70][3] = "Ministerio de Fomento";
 answers[70] = choices[70][2];
 units[70] = "22";
 comments[70] = "Id Pregunta: 708. Portal de Transparencia";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[71]= new Array();
 choices[71][0] = "Consumidores";
 choices[71][1] = "PYMES y Start-ups";
 choices[71][2] = "La Industria";
 choices[71][3] = "Todos los anteriores";
 answers[71] = choices[71][3];
 units[71] = "17";
 comments[71] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[72]= new Array();
 choices[72][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[72][1] = "Calidad de los servicios p&uacute;blicos";
 choices[72][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[72][3] = "Servicio efectivo a los ciudadanos";
 answers[72] = choices[72][1];
 units[72] = "18, 20";
 comments[72] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[73]= new Array();
 choices[73][0] = "Establecer redes de telecomunicaciones continentales";
 choices[73][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[73][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[73][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[73] = choices[73][0];
 units[73] = "17";
 comments[73] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "Tiene car&aacute;cter facultativo.";
 choices[74][1] = "Tiene car&aacute;cter potestativo. ";
 choices[74][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[74][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[74] = choices[74][1];
 units[74] = "22";
 comments[74] = "Id Pregunta: 127. ";


