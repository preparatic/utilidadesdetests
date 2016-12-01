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

//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[0]= "1)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[0]= new Array();
 choices[0][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[0][1] = "mediante resoluci&oacute;n judicial especial";
 choices[0][2] = "&uacute;nicamente mediante poder notarial";
 choices[0][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[0] = choices[0][3];
 units[0] = "7";
 comments[0] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[0] = 532


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[1]= "2)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[1]= new Array();
 choices[1][0] = "El Tratado de Maastrich.";
 choices[1][1] = "El Tratado de Amsterdam.";
 choices[1][2] = "El Tratado de Par&iacute;s.";
 choices[1][3] = "El Tratado de Roma.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 342. UNION EUROPEA";
 preguntaids[1] = 342


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[2]= "3)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[2]= new Array();
 choices[2][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[2][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[2][2] = "Los interesados en el procedimiento";
 choices[2][3] = "Las alternativas b) y c) son correctas";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[2] = 826


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[3]= new Array();
 choices[3][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[3][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[3][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[3][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[3] = choices[3][3];
 units[3] = "46";
 comments[3] = "Id Pregunta: 80. AGE A1 2015";
 preguntaids[3] = 80


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[4]= "5)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[4]= new Array();
 choices[4][0] = "Acuerdos cualificados.";
 choices[4][1] = "Acuerdos ponderados.";
 choices[4][2] = "Valoraci&oacute;n de los votos.";
 choices[4][3] = "Ponderaci&oacute;n de los votos.";
 answers[4] = choices[4][3];
 units[4] = "5";
 comments[4] = "Id Pregunta: 329. UNION EUROPEA";
 preguntaids[4] = 329


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[5]= "6)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[5]= new Array();
 choices[5][0] = "Son vinculantes solamente.";
 choices[5][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[5][2] = "Son preceptivos y vinculantes.";
 choices[5][3] = "Son preceptivos y no vinculantes.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 355. UNION EUROPEA";
 preguntaids[5] = 355


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[6]= "7)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[6]= new Array();
 choices[6][0] = "Prevenir las conductas discriminatorias.";
 choices[6][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[6][2] = "Todas son correctas.";
 choices[6][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[6] = choices[6][2];
 units[6] = "14";
 comments[6] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[6] = 409


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[7]= "8)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[7]= new Array();
 choices[7][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[7][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[7][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[7][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[7] = choices[7][0];
 units[7] = "34, 84";
 comments[7] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[7] = 727


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[8]= new Array();
 choices[8][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[8][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[8][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[8][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[8] = choices[8][3];
 units[8] = "26";
 comments[8] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[8] = 546


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[9]= "10)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[9]= new Array();
 choices[9][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[9][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[9][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[9][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[9] = choices[9][2];
 units[9] = "5";
 comments[9] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[9] = 288


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[10]= "11)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[10]= new Array();
 choices[10][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[10][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[10][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[10][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[10] = choices[10][2];
 units[10] = "22";
 comments[10] = "Id Pregunta: 128. ";
 preguntaids[10] = 128


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[11]= "12)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[11]= new Array();
 choices[11][0] = "la Administraci&oacute;n General del Estado";
 choices[11][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[11][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[11][3] = "el sector p&uacute;blico y privado institucional";
 answers[11] = choices[11][3];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[11] = 765


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[12]= "13)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[12]= new Array();
 choices[12][0] = "Entradas (entities).";
 choices[12][1] = "Atributos (attribs).";
 choices[12][2] = "M&oacute;dulos (modules).";
 choices[12][3] = "Objetos (objects).";
 answers[12] = choices[12][0];
 units[12] = "74";
 comments[12] = "Id Pregunta: 624. Junta de Extremadura A1 2015";
 preguntaids[12] = 624


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[13]= new Array();
 choices[13][0] = "La Ley General Tributaria.";
 choices[13][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[13][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[13][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";
 preguntaids[13] = 497


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[14]= new Array();
 choices[14][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[14][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[14][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[14][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[14] = choices[14][0];
 units[14] = "86";
 comments[14] = "Id Pregunta: 71. AGE A1 2015";
 preguntaids[14] = 71


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[15]= "16)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[15]= new Array();
 choices[15][0] = "Al Gobierno.";
 choices[15][1] = "A las Cortes Generales.";
 choices[15][2] = "Al Poder Judicial.";
 choices[15][3] = "Al Congreso de los Diputados.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[15] = 195


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Estimaci&oacute;n del riesgo";
 choices[16][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[16][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[16][3] = "Mapa de riesgos";
 answers[16] = choices[16][3];
 units[16] = "45";
 comments[16] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[16] = 85


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "Entre 1973 y 1978";
 choices[17][1] = "Entre 1992 y 1996";
 choices[17][2] = "Entre 1978 y 1985";
 choices[17][3] = "Entre 2008 y 2013";
 answers[17] = choices[17][2];
 units[17] = "12";
 comments[17] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[17] = 564


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[18]= "19)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[18]= new Array();
 choices[18][0] = "A nivel de art&iacute;culo.";
 choices[18][1] = "A nivel de cap&iacute;tulo.";
 choices[18][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[18][3] = "A nivel de concepto.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[18] = 481


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[19]= new Array();
 choices[19][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[19][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[19][2] = "Iniciativa europea de libre flujo de datos.";
 choices[19][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 286. UNION EUROPEA";
 preguntaids[19] = 286


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[20]= "21)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[20]= new Array();
 choices[20][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[20][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[20][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[20][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[20] = choices[20][3];
 units[20] = "10";
 comments[20] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[20] = 510


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[21]= new Array();
 choices[21][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[21][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[21][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[21][3] = "Sancionar y publicar las leyes.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 242. CONSTITUCION1978";
 preguntaids[21] = 242


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[22]= "23)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[22]= new Array();
 choices[22][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[22][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[22][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[22][3] = "Todas son correctas.";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[22] = 839


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[23]= "24)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[23]= new Array();
 choices[23][0] = "El 23 de julio de 1952.";
 choices[23][1] = "El 18 de abril de 1951.";
 choices[23][2] = "El 16 de abril de 1948.";
 choices[23][3] = "d)Ninguna de las respuestas son correctas.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[23] = 349


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[24]= "25)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[24]= new Array();
 choices[24][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[24][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[24][2] = "Cinco a&ntilde;os.";
 choices[24][3] = "Ninguna es correcta.";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[24] = 346


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[25]= "26)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[25]= new Array();
 choices[25][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[25][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[25][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[25][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[25] = choices[25][1];
 units[25] = "58";
 comments[25] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[25] = 643


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[26][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[26][2] = "Ambas son correctas.";
 choices[26][3] = "La A y B son incorrectas.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[26] = 417


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[27]= "28)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[27]= new Array();
 choices[27][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[27][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[27][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][0];
 units[27] = "28";
 comments[27] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[27] = 737


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[28]= "29)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[28]= new Array();
 choices[28][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[28][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[28][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[28][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[28] = choices[28][2];
 units[28] = "28";
 comments[28] = "Id Pregunta: 736. Estrategia TIC";
 preguntaids[28] = 736


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[29]= new Array();
 choices[29][0] = "Data Mining (miner&iacute;a de datos)";
 choices[29][1] = "Business Intelligence (inteligencia de negocio)";
 choices[29][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[29][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[29] = choices[29][1];
 units[29] = "72";
 comments[29] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[29] = 68


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[30]= new Array();
 choices[30][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[30][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[30][2] = "Todas son correctas.";
 choices[30][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[30] = 330


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[31]= "32)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[31]= new Array();
 choices[31][0] = "Los cr&eacute;ditos";
 choices[31][1] = "Las partidas presupuestarias";
 choices[31][2] = "Los derechos";
 choices[31][3] = "Las obligaciones";
 answers[31] = choices[31][3];
 units[31] = "10";
 comments[31] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[31] = 454


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[32]= "33)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[32]= new Array();
 choices[32][0] = "El Segundo.";
 choices[32][1] = "El Primero.";
 choices[32][2] = "El Preliminar.";
 choices[32][3] = "El Tercero.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[32] = 266


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[33]= new Array();
 choices[33][0] = "Anual.";
 choices[33][1] = "Semestral.";
 choices[33][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[33][3] = "Bienal.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";
 preguntaids[33] = 379


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[34]= "35)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "De un mes si el acto fuera presunto";
 choices[34][1] = "De un mes si el acto fuera expreso";
 choices[34][2] = "De un mes en cualquier caso";
 choices[34][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[34] = choices[34][1];
 units[34] = "8";
 comments[34] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[34] = 142


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[35]= "36)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[35]= new Array();
 choices[35][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[35][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[35][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[35][3] = "todas son correctas";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";
 preguntaids[35] = 154


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[36]= new Array();
 choices[36][0] = "Cuatro.";
 choices[36][1] = "Ninguno.";
 choices[36][2] = "Dos.";
 choices[36][3] = "Seis.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[36] = 211


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[37]= "38)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[37]= new Array();
 choices[37][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[37][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[37][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[37][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[37] = 466


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[38]= new Array();
 choices[38][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[38][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[38][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[38][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[38] = choices[38][1];
 units[38] = "63";
 comments[38] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[38] = 33


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[39]= new Array();
 choices[39][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[39][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[39][2] = "Servicio de seguridad gestionada";
 choices[39][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[39] = choices[39][1];
 units[39] = "26";
 comments[39] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[39] = 58


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[40]= "41)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[40]= new Array();
 choices[40][0] = "Los propios miembros del Tribunal.";
 choices[40][1] = "El Consejo de Europa.";
 choices[40][2] = "El Consejo Europeo.";
 choices[40][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[40] = 301


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[41]= "42)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[41]= new Array();
 choices[41][0] = "180 art&iacute;culos.";
 choices[41][1] = "182 art&iacute;culos.";
 choices[41][2] = "185 art&iacute;culos.";
 choices[41][3] = "190 art&iacute;culos.";
 answers[41] = choices[41][1];
 units[41] = "10";
 comments[41] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";
 preguntaids[41] = 485


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[42]= new Array();
 choices[42][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[42][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[42][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[42][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[42] = choices[42][0];
 units[42] = "48";
 comments[42] = "Id Pregunta: 92. AGE A1 2015";
 preguntaids[42] = 92


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[43]= new Array();
 choices[43][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[43][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[43][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[43][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[43] = choices[43][3];
 units[43] = "101";
 comments[43] = "Id Pregunta: 605. Junta de Extremadura A1 2015";
 preguntaids[43] = 605


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[44][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[44][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[44][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[44] = choices[44][2];
 units[44] = "22";
 comments[44] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[44] = 275


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[45]= "46)  En qu&eacute; consiste el principio BASE:";
 choices[45]= new Array();
 choices[45][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[45][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[45][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[45][3] = "Todas las anteriores son falsas";
 answers[45] = choices[45][3];
 units[45] = "73";
 comments[45] = "Id Pregunta: 103. ";
 preguntaids[45] = 103


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[46]= "47)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[46]= new Array();
 choices[46][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[46][1] = "Ninguna de las respuestas es correcta.";
 choices[46][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[46][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[46] = 334


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[47]= new Array();
 choices[47][0] = "En 2011";
 choices[47][1] = "En 2013";
 choices[47][2] = "En 2015";
 choices[47][3] = "En 2016";
 answers[47] = choices[47][2];
 units[47] = "17";
 comments[47] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[47] = 763


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[48]= new Array();
 choices[48][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[48][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[48][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[48][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[48] = choices[48][1];
 units[48] = "44";
 comments[48] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[48] = 73


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[49]= "50)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[49]= new Array();
 choices[49][0] = "Tres a&ntilde;os.";
 choices[49][1] = "Dos a&ntilde;os y medio.";
 choices[49][2] = "Cinco a&ntilde;os.";
 choices[49][3] = "Seis a&ntilde;os.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[49] = 289


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[50]= "51)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[50]= new Array();
 choices[50][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[50][1] = "1 de enero de 2015";
 choices[50][2] = "1 de enero de 2016";
 choices[50][3] = "1 de julio de 2016";
 answers[50] = choices[50][3];
 units[50] = "77";
 comments[50] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[50] = 691


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[51]= "52)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[51]= new Array();
 choices[51][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[51][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[51][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[51][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[51] = choices[51][2];
 units[51] = "89";
 comments[51] = "Id Pregunta: 627. Junta de Extremadura A1 2015";
 preguntaids[51] = 627


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
 preguntaids[52] = 734


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[53]= "54)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[53]= new Array();
 choices[53][0] = "Intersecci&oacute;n.";
 choices[53][1] = "Uni&oacute;n.";
 choices[53][2] = "Restricci&oacute;n.";
 choices[53][3] = "Diferencia.";
 answers[53] = choices[53][0];
 units[53] = "60";
 comments[53] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[53] = 614


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[54]= "55)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[54]= new Array();
 choices[54][0] = "3 a&ntilde;os.";
 choices[54][1] = "5 a&ntilde;os.";
 choices[54][2] = "4 a&ntilde;os.";
 choices[54][3] = "6 a&ntilde;os.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[54] = 193


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[55]= "56)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[55]= new Array();
 choices[55][0] = "Con el a&ntilde;o anterior.";
 choices[55][1] = "Con los tres a&ntilde;os anteriores.";
 choices[55][2] = "Con el a&ntilde;o natural.";
 choices[55][3] = "Con los dos a&ntilde;os anteriores.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[55] = 468


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[56]= new Array();
 choices[56][0] = "Perceptible";
 choices[56][1] = "Operable";
 choices[56][2] = "Comprensible";
 choices[56][3] = "Robusto";
 answers[56] = choices[56][2];
 units[56] = "42";
 comments[56] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[56] = 83


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[57]= "58)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[57]= new Array();
 choices[57][0] = "Dise&ntilde;o del servicio.";
 choices[57][1] = "Transici&oacute;n del servicio.";
 choices[57][2] = "Estrategia del servicio.";
 choices[57][3] = "Operaci&oacute;n del servicio.";
 answers[57] = choices[57][2];
 units[57] = "101";
 comments[57] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[57] = 644


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[58][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[58][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[58][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[58] = 845


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[59]= new Array();
 choices[59][0] = "A la CETIC";
 choices[59][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[59][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[59][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[59] = choices[59][3];
 units[59] = "19";
 comments[59] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[59] = 582


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[60]= "61)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[60]= new Array();
 choices[60][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[60][1] = "Static &amp; Active process for REsolution Bank.";
 choices[60][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[60][3] = "Super Active REsponse for Banks";
 answers[60] = choices[60][0];
 units[60] = "12";
 comments[60] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[60] = 139


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[61]= new Array();
 choices[61][0] = "a) Los cuatro ejercicios siguientes.";
 choices[61][1] = "b) El ejercicio siguiente.";
 choices[61][2] = "c) Los dos ejercicios siguientes.";
 choices[61][3] = "d) Los tres ejercicios siguientes.";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[61] = 458


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[62]= "63)  La Administraci&oacute;n General del Estado se organiza:";
 choices[62]= new Array();
 choices[62][0] = "en Ministerios";
 choices[62][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[62][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[62][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[62] = 802


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[63]= "64)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[63]= new Array();
 choices[63][0] = "Decretos Legislativos.";
 choices[63][1] = "Decretos-leyes.";
 choices[63][2] = "Leyes de bases.";
 choices[63][3] = "Reales Decretos del Consejo de Ministros.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[63] = 204


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[64]= new Array();
 choices[64][0] = "Drupal";
 choices[64][1] = "Cassandra";
 choices[64][2] = "Wordpress";
 choices[64][3] = "OpenCMS";
 answers[64] = choices[64][1];
 units[64] = "99";
 comments[64] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[64] = 40


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[65]= new Array();
 choices[65][0] = "Una ley orginaria.";
 choices[65][1] = "Una ley org&aacute;nica.";
 choices[65][2] = "Una ley de bases.";
 choices[65][3] = "Una ley de transferencia.";
 answers[65] = choices[65][1];
 units[65] = "1";
 comments[65] = "Id Pregunta: 179. CONSTITUCION1978";
 preguntaids[65] = 179


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[66]= new Array();
 choices[66][0] = "Car&aacute;cter sustitutivo";
 choices[66][1] = "Car&aacute;cter obligatorio";
 choices[66][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][3];
 units[66] = "19";
 comments[66] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[66] = 583


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[67]= new Array();
 choices[67][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[67][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[67][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[67][3] = "Todos los anteriores";
 answers[67] = choices[67][3];
 units[67] = "19";
 comments[67] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[67] = 592


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "VMware ESX";
 choices[68][1] = "XenServer";
 choices[68][2] = "Alfresco";
 choices[68][3] = "Microsoft Hyper-V";
 answers[68] = choices[68][2];
 units[68] = "54";
 comments[68] = "Id Pregunta: 96. AGE A1 2015";
 preguntaids[68] = 96


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[69]= "70)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[69]= new Array();
 choices[69][0] = "tienen capacidad de obrar limitada";
 choices[69][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[69][2] = "no tienen capacidad de obrar";
 choices[69][3] = "ninguna es correcta";
 answers[69] = choices[69][2];
 units[69] = "7";
 comments[69] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[69] = 528


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[70]= "71)  Son bases de datos NoSQL orientadas a objetos:";
 choices[70]= new Array();
 choices[70][0] = "GemStone";
 choices[70][1] = "Zope Object DB";
 choices[70][2] = "Las dos anteriores";
 choices[70][3] = "Solo B)";
 answers[70] = choices[70][2];
 units[70] = "73";
 comments[70] = "Id Pregunta: 107. ";
 preguntaids[70] = 107


//  Id pregunta: 859 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;ntos fasc&iacute;culos tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[71]= new Array();
 choices[71][0] = "12";
 choices[71][1] = "11";
 choices[71][2] = "13";
 choices[71][3] = "10";
 answers[71] = choices[71][0];
 units[71] = "125";
 comments[71] = "Id Pregunta: 859. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[71] = 859


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[72]= new Array();
 choices[72][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[72][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[72][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[72][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[72] = choices[72][0];
 units[72] = "22";
 comments[72] = "Id Pregunta: 124. ";
 preguntaids[72] = 124


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[73]= "74)  Sobre el Plan Juncker:";
 choices[73]= new Array();
 choices[73][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[73][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[73][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[73][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[73] = 282


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la respuesta correcta:";
 choices[74]= new Array();
 choices[74][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[74][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[74][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[74][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 797. Ley 40/2015";
 preguntaids[74] = 797


