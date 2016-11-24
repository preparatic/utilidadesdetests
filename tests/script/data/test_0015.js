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

//  Id pregunta: 10111 Año de creación de pregunta: 2016
 questions[0]= "1)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[0]= new Array();
 choices[0][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[0][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[0][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[0][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[0] = choices[0][0];
 units[0] = "15";
 comments[0] = "Id Pregunta: 10111. ";


//  Id pregunta: 10506 Año de creación de pregunta: 2016
 questions[1]= "2)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[1]= new Array();
 choices[1][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[1][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[1][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[1][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 10506. PRESUPUESTOS GENERALES";


//  Id pregunta: 10284 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[2][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[2][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[2][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10243 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[3]= new Array();
 choices[3][0] = "Art&iacute;culo 70.";
 choices[3][1] = "Art&iacute;culo 54.";
 choices[3][2] = "Articulo 62.";
 choices[3][3] = "Articulo 55. 5.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10304 Año de creación de pregunta: 2016
 questions[4]= "5)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[4]= new Array();
 choices[4][0] = "Cinco a&ntilde;os.";
 choices[4][1] = "Seis a&ntilde;os.";
 choices[4][2] = "Cuatro a&ntilde;os.";
 choices[4][3] = "Tres a&ntilde;os.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10304. UNION EUROPEA";


//  Id pregunta: 10302 Año de creación de pregunta: 2016
 questions[5]= "6)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[5]= new Array();
 choices[5][0] = "Cinco a&ntilde;os.";
 choices[5][1] = "Cuatro a&ntilde;os.";
 choices[5][2] = "Tres a&ntilde;os.";
 choices[5][3] = "Seis meses.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10302. UNION EUROPEA";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[6]= new Array();
 choices[6][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[6][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[6][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[6][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[7]= "8)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[7]= new Array();
 choices[7][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[7][1] = "mediante resoluci&oacute;n judicial especial";
 choices[7][2] = "&uacute;nicamente mediante poder notarial";
 choices[7][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10256 Año de creación de pregunta: 2016
 questions[8]= "9)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[8]= new Array();
 choices[8][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[8][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[8][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[8][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10256. CONSTITUCION1978";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[9]= new Array();
 choices[9][0] = "las personas jur&iacute;dicas ";
 choices[9][1] = "las entidades con personalidad jur&iacute;dica";
 choices[9][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[9][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[9] = choices[9][1];
 units[9] = "7";
 comments[9] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10112 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[10]= new Array();
 choices[10][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[10][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[10][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[10][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[10] = choices[10][1];
 units[10] = "15";
 comments[10] = "Id Pregunta: 10112. ";


//  Id pregunta: 10574 Año de creación de pregunta: 2016
 questions[11]= "12)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[11]= new Array();
 choices[11][0] = "Mercurial, Git y Apache Subversion.";
 choices[11][1] = "Gimp, Mercurial y Git.";
 choices[11][2] = "RedMine, Planner y OpenProj.";
 choices[11][3] = "Cassandra, Git y REDIS.";
 answers[11] = choices[11][0];
 units[11] = "92";
 comments[11] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10173 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[12]= new Array();
 choices[12][0] = "absoluta de las Cortes Generales.";
 choices[12][1] = "absoluta del Congreso de los Diputados.";
 choices[12][2] = "simple de las Cortes Generales.";
 choices[12][3] = "simple del Congreso de los Diputados.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10008 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[13]= new Array();
 choices[13][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[13][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[13][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[13][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[13] = choices[13][2];
 units[13] = "26";
 comments[13] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[14]= "15)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[14]= new Array();
 choices[14][0] = "En qu&eacute; nos gastamos el dinero";
 choices[14][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[14][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[14][3] = "Qui&eacute;n se gasta el dinero.";
 answers[14] = choices[14][0];
 units[14] = "10";
 comments[14] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10187 Año de creación de pregunta: 2016
 questions[15]= "16)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[15]= new Array();
 choices[15][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[15][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[15][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[15][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10187. CONSTITUCION1978";


//  Id pregunta: 10569 Año de creación de pregunta: 2016
 questions[16]= "17)  El sector Servicios NO incluye:";
 choices[16]= new Array();
 choices[16][0] = "El Comercio";
 choices[16][1] = "Los Transportes";
 choices[16][2] = "La Energ&iacute;a";
 choices[16][3] = "Las Comunicaciones";
 answers[16] = choices[16][2];
 units[16] = "12";
 comments[16] = "Id Pregunta: 10569. Modelo econ&oacute;mico";


//  Id pregunta: 10356 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[17]= new Array();
 choices[17][0] = "No se aplican directamente en los Estados.";
 choices[17][1] = "No son vinculantes.";
 choices[17][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[17][3] = "Tienen alcance general.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10224 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[18]= new Array();
 choices[18][0] = "Art&iacute;culo 16.2.";
 choices[18][1] = "Art&iacute;culo 17.1.";
 choices[18][2] = "Art&iacute;culo 18.1.";
 choices[18][3] = "Art&iacute;culo 18.2.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10182 Año de creación de pregunta: 2016
 questions[19]= "20)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[19]= new Array();
 choices[19][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[19][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[19][2] = "El que hubieren designado las Cortes Generales.";
 choices[19][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[19] = choices[19][1];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10182. CONSTITUCION1978";


//  Id pregunta: 10072 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[20]= new Array();
 choices[20][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[20][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[20][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[20][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10485 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[21]= new Array();
 choices[21][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[21][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[21][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[21][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[21] = choices[21][3];
 units[21] = "10";
 comments[21] = "Id Pregunta: 10485. PRESUPUESTOS GENERALES";


//  Id pregunta: 10040 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[22]= new Array();
 choices[22][0] = "Drupal";
 choices[22][1] = "Cassandra";
 choices[22][2] = "Wordpress";
 choices[22][3] = "OpenCMS";
 answers[22] = choices[22][1];
 units[22] = "99";
 comments[22] = "Id Pregunta: 10040. AGE A1 2015";


//  Id pregunta: 10411 Año de creación de pregunta: 2016
 questions[23]= "24)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[23]= new Array();
 choices[23][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[23][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[23][2] = "Ninguna es correcta.";
 choices[23][3] = "A y B son correctas.";
 answers[23] = choices[23][1];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10000 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[24]= new Array();
 choices[24][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[24][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[24][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[24][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[24] = choices[24][0];
 units[24] = "26";
 comments[24] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10610 Año de creación de pregunta: 2016
 questions[25]= "26)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[25]= new Array();
 choices[25][0] = "GROUP BY.";
 choices[25][1] = "COUNT.";
 choices[25][2] = "WHERE.";
 choices[25][3] = "DISTINCT.";
 answers[25] = choices[25][0];
 units[25] = "60";
 comments[25] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10140 Año de creación de pregunta: 2016
 questions[26]= "27)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[26]= new Array();
 choices[26][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[26][1] = "Tratarse de un acto no susceptible de recurso";
 choices[26][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[26][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[26] = choices[26][2];
 units[26] = "8";
 comments[26] = "Id Pregunta: 10140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 10584 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[27]= new Array();
 choices[27][0] = "Bienalmente";
 choices[27][1] = "Anualmente";
 choices[27][2] = "Semestralmente";
 choices[27][3] = "Cada cuatro a&ntilde;os";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10037 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[28]= new Array();
 choices[28][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[28][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[28][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[28][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[28] = choices[28][3];
 units[28] = "66";
 comments[28] = "Id Pregunta: 10037. AGE A1 2015";


//  Id pregunta: 10580 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[29]= new Array();
 choices[29][0] = "A la CETIC";
 choices[29][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[29][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[29][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[29] = choices[29][3];
 units[29] = "19";
 comments[29] = "Id Pregunta: 10580. Estrategia TIC";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[30]= "31)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[30]= new Array();
 choices[30][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[30][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[30][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[30][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[30] = choices[30][3];
 units[30] = "62";
 comments[30] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10155 Año de creación de pregunta: 2016
 questions[31]= "32)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[31]= new Array();
 choices[31][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[31][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[31][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[31][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10442 Año de creación de pregunta: 2016
 questions[32]= "33)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[32]= new Array();
 choices[32][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[32][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[32][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[32][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[32] = choices[32][3];
 units[32] = "43";
 comments[32] = "Id Pregunta: 10442. SERVICIOS COMUNES";


//  Id pregunta: 10105 Año de creación de pregunta: 2016
 questions[33]= "34)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[33]= new Array();
 choices[33][0] = "Gran volumen de informaci&oacute;n";
 choices[33][1] = "Gran variedad de datos";
 choices[33][2] = "Se analizan datos a gran velocidad";
 choices[33][3] = "Todas las anteriores son verdaderas";
 answers[33] = choices[33][3];
 units[33] = "73";
 comments[33] = "Id Pregunta: 10105. ";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[34]= new Array();
 choices[34][0] = "El Parlamento y el Consejo.";
 choices[34][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[34][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[34][3] = "La Comisi&oacute;n y el Consejo.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[35]= "36)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[35]= new Array();
 choices[35][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[35][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[35][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[35][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[35] = choices[35][1];
 units[35] = "63";
 comments[35] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10338 Año de creación de pregunta: 2016
 questions[36]= "37)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[36]= new Array();
 choices[36][0] = "CO.PER.";
 choices[36][1] = "COMPER.";
 choices[36][2] = "CO.RE.PER.";
 choices[36][3] = "CO.PE.RRE.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 10338. UNION EUROPEA";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[37]= "38)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[37]= new Array();
 choices[37][0] = "Windows Phone";
 choices[37][1] = "Blackberry";
 choices[37][2] = "iOS";
 choices[37][3] = "Android";
 answers[37] = choices[37][3];
 units[37] = "59";
 comments[37] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10545 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[38]= new Array();
 choices[38][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[38][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[38][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[38][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[38] = choices[38][1];
 units[38] = "26";
 comments[38] = "Id Pregunta: 10545. Gobernanza TIC";


//  Id pregunta: 10482 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[39]= new Array();
 choices[39][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[39][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[39][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[39][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[39] = choices[39][0];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10482. PRESUPUESTOS GENERALES";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[40]= "41)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[40]= new Array();
 choices[40][0] = "El servicio de teleasistencia.";
 choices[40][1] = "El servicio de ayuda a domicilio.";
 choices[40][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[40][3] = "Todas las anteriores son correctas.";
 answers[40] = choices[40][3];
 units[40] = "14";
 comments[40] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[41]= "42)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[41]= new Array();
 choices[41][0] = "Principio de transparencia.";
 choices[41][1] = "Principio de cooperaci&oacute;n.";
 choices[41][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[41][3] = "Principio de lealtad institucional.";
 answers[41] = choices[41][1];
 units[41] = "10";
 comments[41] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10207 Año de creación de pregunta: 2016
 questions[42]= "43)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[42]= new Array();
 choices[42][0] = "El Delegado del Gobierno.";
 choices[42][1] = "El Subdelegado del Gobierno.";
 choices[42][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[42][3] = "El Gobernador Civil.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 10207. CONSTITUCION1978";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[43]= "44)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[43]= new Array();
 choices[43][0] = "Pas&oacute; de 518 a 626.";
 choices[43][1] = "Pas&oacute; de 434 a 518.";
 choices[43][2] = "Pas&oacute; de 345 a 512.";
 choices[43][3] = "Pas&oacute; de 435 a 610.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10116 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[44]= new Array();
 choices[44][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[44][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[44][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[44][3] = "El pago de subsidios a parados";
 answers[44] = choices[44][3];
 units[44] = "15";
 comments[44] = "Id Pregunta: 10116. ";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[45]= "46)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[45]= new Array();
 choices[45][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[45][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[45][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[45][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[45] = choices[45][0];
 units[45] = "65";
 comments[45] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10529 Año de creación de pregunta: 2016
 questions[46]= "47)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[46]= new Array();
 choices[46][0] = "formular solicitudes";
 choices[46][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[46][2] = "presentar declaraciones responsables o comunicaciones";
 choices[46][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[46] = choices[46][1];
 units[46] = "7";
 comments[46] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10586 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[47]= new Array();
 choices[47][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[47][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[47][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][1];
 units[47] = "19";
 comments[47] = "Id Pregunta: 10586. Estrategia TIC";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[48]= new Array();
 choices[48][0] = "Es un framework de software libre.";
 choices[48][1] = "Es una base de datos NoSQL.";
 choices[48][2] = "Est&aacute; basado en MapReduce.";
 choices[48][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10432 Año de creación de pregunta: 2016
 questions[49]= "50)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[49]= new Array();
 choices[49][0] = "De ocho a&ntilde;os.";
 choices[49][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[49][2] = "Ambas son correctas.";
 choices[49][3] = "No existe un l&iacute;mite.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10602 Año de creación de pregunta: 2016
 questions[50]= "51)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[50]= new Array();
 choices[50][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[50][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[50][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[50][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[50] = choices[50][2];
 units[50] = "76";
 comments[50] = "Id Pregunta: 10602. Junta de Extremadura A1 2015";


//  Id pregunta: 10582 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[51]= new Array();
 choices[51][0] = "El 5 de Octubre de 2015";
 choices[51][1] = "El 15 de Octubre de 2015";
 choices[51][2] = "El 15 de Septiembre de 2015";
 choices[51][3] = "El 2 de Octubre de 2015";
 answers[51] = choices[51][2];
 units[51] = "19";
 comments[51] = "Id Pregunta: 10582. Estrategia TIC";


//  Id pregunta: 10534 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[52]= new Array();
 choices[52][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[52][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[52][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[52][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[52] = choices[52][2];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10099 Año de creación de pregunta: 2016
 questions[53]= "54)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[53][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[53][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[53][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[53] = choices[53][2];
 units[53] = "26";
 comments[53] = "Id Pregunta: 10099. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10396 Año de creación de pregunta: 2016
 questions[54]= "55)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[54]= new Array();
 choices[54][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[54][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[54][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[54][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[54] = choices[54][0];
 units[54] = "14";
 comments[54] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10313 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[55]= new Array();
 choices[55][0] = "El Consejo Europeo.";
 choices[55][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[55][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[55][3] = "El Parlamento Europeo.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10313. UNION EUROPEA";


//  Id pregunta: 10025 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[56]= new Array();
 choices[56][0] = "SessionBean";
 choices[56][1] = "JavaBean";
 choices[56][2] = "MBeans";
 choices[56][3] = "MessageDrivenBean";
 answers[56] = choices[56][2];
 units[56] = "64";
 comments[56] = "Id Pregunta: 10025. AGE A1 2015";


//  Id pregunta: 10515 Año de creación de pregunta: 2016
 questions[57]= "58)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[57]= new Array();
 choices[57][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[57][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[57][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[57][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[57] = choices[57][1];
 units[57] = "7";
 comments[57] = "Id Pregunta: 10515. LEY 39/2015";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[58]= "59)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[58]= new Array();
 choices[58][0] = "Diciembre de 1987.";
 choices[58][1] = "Septiembre de 1989.";
 choices[58][2] = "Octubre de 1990.";
 choices[58][3] = "Noviembre de 1980.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10186 Año de creación de pregunta: 2016
 questions[59]= "60)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[59]= new Array();
 choices[59][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[59][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[59][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[59][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[60]= new Array();
 choices[60][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[60][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[60][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[60][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10668 Año de creación de pregunta: 2016
 questions[61]= "62)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[61]= new Array();
 choices[61][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[61][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[61][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[61][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[61] = choices[61][3];
 units[61] = "7";
 comments[61] = "Id Pregunta: 10668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10490 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[62]= new Array();
 choices[62][0] = "A los cinco a&ntilde;os.";
 choices[62][1] = "A los dos a&ntilde;os.";
 choices[62][2] = "A los tres a&ntilde;os.";
 choices[62][3] = "A los cuatro a&ntilde;os.";
 answers[62] = choices[62][0];
 units[62] = "10";
 comments[62] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10404 Año de creación de pregunta: 2016
 questions[63]= "64)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[63]= new Array();
 choices[63][0] = "El Tratado de Roma, 1957.";
 choices[63][1] = "El Acta &Uacute;nica Europea.";
 choices[63][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[63][3] = "Ninguna es correcta.";
 answers[63] = choices[63][2];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10404. POLITICAS DE IGUALDAD";


//  Id pregunta: 10493 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[64]= new Array();
 choices[64][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[64][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[64][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[64][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10493. PRESUPUESTOS GENERALES";


//  Id pregunta: 10481 Año de creación de pregunta: 2016
 questions[65]= "66)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[65]= new Array();
 choices[65][0] = "Cuatro millones de euros.";
 choices[65][1] = "Seis millones de euros.";
 choices[65][2] = "Siete millones de euros.";
 choices[65][3] = "Cinco millones de euros.";
 answers[65] = choices[65][1];
 units[65] = "10";
 comments[65] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


//  Id pregunta: 10558 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[66]= new Array();
 choices[66][0] = "En 2015";
 choices[66][1] = "En 2013";
 choices[66][2] = "En 2016";
 choices[66][3] = "En 2007";
 answers[66] = choices[66][1];
 units[66] = "19";
 comments[66] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10439 Año de creación de pregunta: 2016
 questions[67]= "68)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[67]= new Array();
 choices[67][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[67][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[67][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[67][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10646 Año de creación de pregunta: 2016
 questions[68]= "69)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[68]= new Array();
 choices[68][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[68][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[68][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[68][3] = "Todas las respuestas son correctas.";
 answers[68] = choices[68][0];
 units[68] = "101";
 comments[68] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[69]= new Array();
 choices[69][0] = "Perceptible";
 choices[69][1] = "Operable";
 choices[69][2] = "Comprensible";
 choices[69][3] = "Robusto";
 answers[69] = choices[69][2];
 units[69] = "42";
 comments[69] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10595 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[70]= new Array();
 choices[70][0] = "La CETIC";
 choices[70][1] = "Los Ministerios";
 choices[70][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[70][3] = "Ninguno de los anteriores";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10312 Año de creación de pregunta: 2016
 questions[71]= "72)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[71]= new Array();
 choices[71][0] = "Por unanimidad.";
 choices[71][1] = "Por mayor&iacute;a cualificada.";
 choices[71][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[71][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[72]= "73)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[72]= new Array();
 choices[72][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[72][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[72][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[72][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10107 Año de creación de pregunta: 2016
 questions[73]= "74)  Son bases de datos NoSQL orientadas a objetos:";
 choices[73]= new Array();
 choices[73][0] = "GemStone";
 choices[73][1] = "Zope Object DB";
 choices[73][2] = "Las dos anteriores";
 choices[73][3] = "Solo B)";
 answers[73] = choices[73][2];
 units[73] = "73";
 comments[73] = "Id Pregunta: 10107. ";


//  Id pregunta: 10202 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[74][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[74][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[74][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10202. CONSTITUCION1978";


