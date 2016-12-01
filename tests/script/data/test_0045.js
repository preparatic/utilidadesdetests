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

//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[0][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[0][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[0][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[0] = choices[0][2];
 units[0] = "53";
 comments[0] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[0] = 65


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[1]= "2)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[1]= new Array();
 choices[1][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[1][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[1][2] = "Los interesados en el procedimiento";
 choices[1][3] = "Las alternativas b) y c) son correctas";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[1] = 826


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[2]= new Array();
 choices[2][0] = "Backlog refinement";
 choices[2][1] = "Backlog grooming";
 choices[2][2] = "a y b son correctas";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][2];
 units[2] = "34, 84";
 comments[2] = "Id Pregunta: 729. Metodologias &aacute;giles";
 preguntaids[2] = 729


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[3]= new Array();
 choices[3][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[3][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[3][2] = "Fecha de otorgamiento.";
 choices[3][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[3] = choices[3][1];
 units[3] = "43";
 comments[3] = "Id Pregunta: 447. SERVICIOS COMUNES";
 preguntaids[3] = 447


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[4]= new Array();
 choices[4][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[4][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[4][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[4][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[4] = 205


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[5]= "6)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[5]= new Array();
 choices[5][0] = "Mercurial, Git y Apache Subversion.";
 choices[5][1] = "Gimp, Mercurial y Git.";
 choices[5][2] = "RedMine, Planner y OpenProj.";
 choices[5][3] = "Cassandra, Git y REDIS.";
 answers[5] = choices[5][0];
 units[5] = "92";
 comments[5] = "Id Pregunta: 576. Tema 92. TAI 2016.";
 preguntaids[5] = 576


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[6]= "7)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[6]= new Array();
 choices[6][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[6][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[6][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[6][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[6] = choices[6][2];
 units[6] = "45";
 comments[6] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[6] = 601


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[7]= new Array();
 choices[7][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[7][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[7][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[7][3] = "Todas las anteriores son verdaderas.";
 answers[7] = choices[7][3];
 units[7] = "125";
 comments[7] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[7] = 864


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[8]= "9)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[8]= new Array();
 choices[8][0] = "Interoperabilidad";
 choices[8][1] = "Integridad";
 choices[8][2] = "Capital humano";
 choices[8][3] = "Trazabilidad";
 answers[8] = choices[8][2];
 units[8] = "19";
 comments[8] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[8] = 166


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[9]= "10)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[9]= new Array();
 choices[9][0] = "P&uacute;blica.";
 choices[9][1] = "Privada.";
 choices[9][2] = "A y B son correctas.";
 choices[9][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[9] = 418


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[10]= new Array();
 choices[10][0] = "Conferencia de Presidentes.";
 choices[10][1] = "Convenios de colaboraci&oacute;n.";
 choices[10][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[10][3] = "Conferencias Sectoriales.";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[10] = 846


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[11]= "12)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[11]= new Array();
 choices[11][0] = "El presidente de las Cortes Generales.";
 choices[11][1] = "El Presidente del Gobierno.";
 choices[11][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[11][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[11] = 502


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[12]= new Array();
 choices[12][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[12][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[12][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[12][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[12] = 581


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[13]= "14)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[13][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[13][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[13][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[13] = choices[13][0];
 units[13] = "19";
 comments[13] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";
 preguntaids[13] = 165


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[14]= new Array();
 choices[14][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[14][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[14][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[14][3] = "El Instituto de la Mujer de Extremadura.";
 answers[14] = choices[14][3];
 units[14] = "14";
 comments[14] = "Id Pregunta: 647. Junta de Extremadura A1 2015";
 preguntaids[14] = 647


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[15]= "16)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[15]= new Array();
 choices[15][0] = "Ley org&aacute;nica.";
 choices[15][1] = "Ley ordinaria.";
 choices[15][2] = "Ley de bases.";
 choices[15][3] = "Ley marco.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[15] = 271


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[16]= new Array();
 choices[16][0] = "Es un framework de software libre.";
 choices[16][1] = "Es una base de datos NoSQL.";
 choices[16][2] = "Est&aacute; basado en MapReduce.";
 choices[16][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[16] = choices[16][1];
 units[16] = "73";
 comments[16] = "Id Pregunta: 94. AGE A1 2015";
 preguntaids[16] = 94


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[17]= new Array();
 choices[17][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[17][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[17][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[17][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";
 preguntaids[17] = 486


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


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[19]= "20)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[19]= new Array();
 choices[19][0] = "623";
 choices[19][1] = "649";
 choices[19][2] = "626";
 choices[19][3] = "565";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 341. UNION EUROPEA";
 preguntaids[19] = 341


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[20]= new Array();
 choices[20][0] = "Eric Ries";
 choices[20][1] = "Steve Blank";
 choices[20][2] = "Tom Poppendieck";
 choices[20][3] = "Alexander Osterwalder";
 answers[20] = choices[20][2];
 units[20] = "34";
 comments[20] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[20] = 720


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[21]= "22)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[21]= new Array();
 choices[21][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[21][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[21][2] = "el Ministerio del Interior";
 choices[21][3] = "la Administraci&oacute;n General del Estado";
 answers[21] = choices[21][0];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[21] = 814


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[22]= "23)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[22]= new Array();
 choices[22][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[22][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[22][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[22][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[22] = 177


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[23]= new Array();
 choices[23][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[23][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[23][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[23][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[23] = choices[23][3];
 units[23] = "22";
 comments[23] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[23] = 714


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[24][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[24][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[24][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[24] = choices[24][3];
 units[24] = "19";
 comments[24] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[24] = 16


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[25]= "26)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[25]= new Array();
 choices[25][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[25][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[25][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[25][3] = "Todos las anteriores son ciertas.";
 answers[25] = choices[25][3];
 units[25] = "12";
 comments[25] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[25] = 137


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[26]= "27)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[26]= new Array();
 choices[26][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[26][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[26][2] = "a y b son correctas";
 choices[26][3] = "a y b son incorrectas";
 answers[26] = choices[26][0];
 units[26] = "7";
 comments[26] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[26] = 153


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[27]= new Array();
 choices[27][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[27][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[27][2] = "Gestionar el Registro de Operadores.";
 choices[27][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[27] = choices[27][3];
 units[27] = "121";
 comments[27] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[27] = 24


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[28]= new Array();
 choices[28][0] = "Bienalmente";
 choices[28][1] = "Anualmente";
 choices[28][2] = "Semestralmente";
 choices[28][3] = "Cada cuatro a&ntilde;os";
 answers[28] = choices[28][1];
 units[28] = "19";
 comments[28] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[28] = 586


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[29]= "30)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[29]= new Array();
 choices[29][0] = "Bases de datos orientadas a filas";
 choices[29][1] = "Bases de datos orientadas a documentos";
 choices[29][2] = "Bases de datos de clave/valor";
 choices[29][3] = "Bases de datos orientadas a objetos";
 answers[29] = choices[29][0];
 units[29] = "73";
 comments[29] = "Id Pregunta: 100. ";
 preguntaids[29] = 100


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[30]= "31)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[30]= new Array();
 choices[30][0] = "3 a&ntilde;os.";
 choices[30][1] = "5 a&ntilde;os.";
 choices[30][2] = "4 a&ntilde;os.";
 choices[30][3] = "6 a&ntilde;os.";
 answers[30] = choices[30][1];
 units[30] = "1";
 comments[30] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[30] = 193


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[31]= "32)  En el sistema operativo Unix/Linux, el comando id:";
 choices[31]= new Array();
 choices[31][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[31][1] = "El comando id no existe.";
 choices[31][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[31][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[31] = choices[31][0];
 units[31] = "57";
 comments[31] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[31] = 639


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[32]= new Array();
 choices[32][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[32][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[32][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[32][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[32] = choices[32][3];
 units[32] = "10";
 comments[32] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[32] = 465


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[33]= new Array();
 choices[33][0] = "Por Real Decreto.";
 choices[33][1] = "Por Orden del Ministerio del Interior.";
 choices[33][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[33][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[33] = 230


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Secretarios generales t&eacute;cnicos:";
 choices[34]= new Array();
 choices[34][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[34][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[34][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[34][3] = "todas son correctas";
 answers[34] = choices[34][3];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[34] = 804


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[35]= new Array();
 choices[35][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[35][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[35][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[35][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[35] = choices[35][2];
 units[35] = "22";
 comments[35] = "Id Pregunta: 121. ";
 preguntaids[35] = 121


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[36]= "37)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[36]= new Array();
 choices[36][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[36][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[36][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[36][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[36] = choices[36][3];
 units[36] = "5";
 comments[36] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[36] = 317


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[37]= new Array();
 choices[37][0] = "Cuatro.";
 choices[37][1] = "Una.";
 choices[37][2] = "Cinco.";
 choices[37][3] = "Nueve.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[37] = 268


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[38]= "39)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[38]= new Array();
 choices[38][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[38][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[38][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[38][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[38] = choices[38][3];
 units[38] = "7";
 comments[38] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[38] = 670


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[39]= "40)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[39]= new Array();
 choices[39][0] = "786 Diputados como m&aacute;ximo.";
 choices[39][1] = "600 Diputados como m&aacute;ximo.";
 choices[39][2] = "650 Diputados como m&aacute;ximo.";
 choices[39][3] = "732 Diputados como m&aacute;ximo.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[39] = 360


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta falsa:";
 choices[40]= new Array();
 choices[40][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[40][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[40][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[40][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[40] = 284


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[41]= "42)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[41]= new Array();
 choices[41][0] = "los registros mercantiles";
 choices[41][1] = "los registros de la propiedad";
 choices[41][2] = "los protocolos notariales";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "7";
 comments[41] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[41] = 540


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[42]= "43)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[42]= new Array();
 choices[42][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[42][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[42][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[42][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[42] = choices[42][0];
 units[42] = "34, 84";
 comments[42] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[42] = 727


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[43]= "44)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[43]= new Array();
 choices[43][0] = "Las instituciones comunitarias.";
 choices[43][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[43][2] = "Los Estados miembros.";
 choices[43][3] = "Los nacionales de los Estados miembros.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[43] = 333


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[44]= "45)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[44]= new Array();
 choices[44][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[44][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[44][2] = "La protecci&oacute;n del medio ambiente.";
 choices[44][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[44] = choices[44][0];
 units[44] = "22";
 comments[44] = "Id Pregunta: 125. ";
 preguntaids[44] = 125


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[45]= new Array();
 choices[45][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[45][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[45][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[45][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[45] = 201


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[46]= "47)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[46]= new Array();
 choices[46][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[46][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[46][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[46][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[46] = choices[46][2];
 units[46] = "26";
 comments[46] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[46] = 1


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[47]= "48)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[47]= new Array();
 choices[47][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[47][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[47][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[47][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[47] = choices[47][1];
 units[47] = "125";
 comments[47] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[47] = 863


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[48]= "49)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[48]= new Array();
 choices[48][0] = "solo mediante ley";
 choices[48][1] = "reglamentariamente";
 choices[48][2] = "mediante ley o reglamentariamente";
 choices[48][3] = "ninguna es correcta";
 answers[48] = choices[48][0];
 units[48] = "7";
 comments[48] = "Id Pregunta: 513. LEY 39/2015";
 preguntaids[48] = 513


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[49]= new Array();
 choices[49][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[49][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[49][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[49][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[49] = choices[49][2];
 units[49] = "26";
 comments[49] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[49] = 553


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[50]= "51)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[50]= new Array();
 choices[50][0] = "A la persona demandante.";
 choices[50][1] = "A la persona demandada.";
 choices[50][2] = "Al &oacute;rgano judicial.";
 choices[50][3] = "Al &oacute;rgano administrativo.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[50] = 400


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[51]= "52)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[51]= new Array();
 choices[51][0] = "En qu&eacute; nos gastamos el dinero";
 choices[51][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[51][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[51][3] = "Qui&eacute;n se gasta el dinero.";
 answers[51] = choices[51][0];
 units[51] = "10";
 comments[51] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";
 preguntaids[51] = 457


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[52]= new Array();
 choices[52][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[52][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[52][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[52][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[52] = 770


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[53]= "54)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[53]= new Array();
 choices[53][0] = "Al Gobierno.";
 choices[53][1] = "A las Cortes Generales.";
 choices[53][2] = "Al Poder Judicial.";
 choices[53][3] = "Al Congreso de los Diputados.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[53] = 195


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[54]= "55)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[54]= new Array();
 choices[54][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[54][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[54][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[54][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[54] = choices[54][0];
 units[54] = "8";
 comments[54] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[54] = 146


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[55]= new Array();
 choices[55][0] = "IRIA";
 choices[55][1] = "GALATEA";
 choices[55][2] = "BADARAL";
 choices[55][3] = "SOROLLA";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 446. SERVICIOS COMUNES";
 preguntaids[55] = 446


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Aplicaci&oacute;n";
 choices[56][1] = "Sesi&oacute;n";
 choices[56][2] = "Presentaci&oacute;n";
 choices[56][3] = "Transporte";
 answers[56] = choices[56][2];
 units[56] = "105";
 comments[56] = "Id Pregunta: 18. AGE A1 2015";
 preguntaids[56] = 18


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[57]= new Array();
 choices[57][0] = "A los ministros.";
 choices[57][1] = "Las respuestas a) y b) son correctas.";
 choices[57][2] = "Las respuestas a) y b) no son correctas.";
 choices[57][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[57] = choices[57][1];
 units[57] = "10";
 comments[57] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";
 preguntaids[57] = 463


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[58]= new Array();
 choices[58][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[58][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[58][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[58][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[58] = choices[58][0];
 units[58] = "48";
 comments[58] = "Id Pregunta: 92. AGE A1 2015";
 preguntaids[58] = 92


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[59]= new Array();
 choices[59][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[59][1] = "De nivel alto.";
 choices[59][2] = "De nivel medio y nivel alto.";
 choices[59][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[59] = choices[59][3];
 units[59] = "35";
 comments[59] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[59] = 632


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[60]= "61)  Indica la respuesta correcta";
 choices[60]= new Array();
 choices[60][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[60][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[60][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[60][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[60] = choices[60][0];
 units[60] = "34, 84";
 comments[60] = "Id Pregunta: 730. Metodologias &aacute;giles";
 preguntaids[60] = 730


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[61]= "62)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[61]= new Array();
 choices[61][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[61][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[61][2] = "A y B son correctas.";
 choices[61][3] = "A y B son incorrectas.";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[61] = 844


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta falsa:";
 choices[62]= new Array();
 choices[62][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[62][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[62][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[62][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[62] = 847


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[63]= "64)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[63]= new Array();
 choices[63][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[63][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[63][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[63][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[63] = choices[63][0];
 units[63] = "65";
 comments[63] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[63] = 625


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[64]= "65)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[64]= new Array();
 choices[64][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[64][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[64][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[64][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[64] = choices[64][0];
 units[64] = "101";
 comments[64] = "Id Pregunta: 649. Junta de Extremadura A1 2015";
 preguntaids[64] = 649


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[65]= new Array();
 choices[65][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[65][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[65][2] = "Apertura al exterior";
 choices[65][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[65] = choices[65][0];
 units[65] = "17";
 comments[65] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[65] = 762


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[66]= "67)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[66]= new Array();
 choices[66][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[66][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[66][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[66][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[66] = choices[66][0];
 units[66] = "7";
 comments[66] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[66] = 520


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[67]= new Array();
 choices[67][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[67][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[67][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[67][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[67] = 813


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[68]= "69)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[68][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[68][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[68][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[68] = choices[68][1];
 units[68] = "1";
 comments[68] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[68] = 238


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[69]= new Array();
 choices[69][0] = "a) Los cuatro ejercicios siguientes.";
 choices[69][1] = "b) El ejercicio siguiente.";
 choices[69][2] = "c) Los dos ejercicios siguientes.";
 choices[69][3] = "d) Los tres ejercicios siguientes.";
 answers[69] = choices[69][3];
 units[69] = "10";
 comments[69] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[69] = 458


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "14";
 choices[70][1] = "11";
 choices[70][2] = "12";
 choices[70][3] = "15";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 590. Estrategia TIC";
 preguntaids[70] = 590


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[71]= "72)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[71]= new Array();
 choices[71][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[71][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[71][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[71][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[71] = choices[71][2];
 units[71] = "14";
 comments[71] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[71] = 391


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[72]= "73)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[72]= new Array();
 choices[72][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[72][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[72][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[72][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[72] = 524


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[73]= "74)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[73]= new Array();
 choices[73][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[73][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[73][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[73][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[73] = 250


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[74]= "75)  Las Administraciones P&uacute;blicas:";
 choices[74]= new Array();
 choices[74][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[74][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[74][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[74][3] = "todas son correctas";
 answers[74] = choices[74][1];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[74] = 772


