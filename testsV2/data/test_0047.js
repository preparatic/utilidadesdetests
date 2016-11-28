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

//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[0]= new Array();
 choices[0][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[0][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[0][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[0][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[0] = choices[0][3];
 units[0] = "19";
 comments[0] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[1]= "2)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[1]= new Array();
 choices[1][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[1][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[1][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[1][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[2]= "3)  Son proyectos de Apache relacionados con Big Data:";
 choices[2]= new Array();
 choices[2][0] = "Hadoop";
 choices[2][1] = "Spark";
 choices[2][2] = "A) y B)";
 choices[2][3] = "Niguno de los anteriores";
 answers[2] = choices[2][2];
 units[2] = "73";
 comments[2] = "Id Pregunta: 108. ";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[3]= "4)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[3]= new Array();
 choices[3][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[3][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[3][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[3][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[3] = choices[3][3];
 units[3] = "10";
 comments[3] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[4]= new Array();
 choices[4][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[4][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[4][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[4][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 680. Dependencia";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[5]= new Array();
 choices[5][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[5][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[5][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[5][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[6]= new Array();
 choices[6][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[6][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[6][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[6][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[6] = choices[6][2];
 units[6] = "7";
 comments[6] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[7]= "8)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[7]= new Array();
 choices[7][0] = "Ley org&aacute;nica.";
 choices[7][1] = "Ley ordinaria.";
 choices[7][2] = "Ley de bases.";
 choices[7][3] = "Ley marco.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[8]= new Array();
 choices[8][0] = "a) Los cuatro ejercicios siguientes.";
 choices[8][1] = "b) El ejercicio siguiente.";
 choices[8][2] = "c) Los dos ejercicios siguientes.";
 choices[8][3] = "d) Los tres ejercicios siguientes.";
 answers[8] = choices[8][3];
 units[8] = "10";
 comments[8] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[9]= new Array();
 choices[9][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[9][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[9][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[9][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[9] = choices[9][1];
 units[9] = "92";
 comments[9] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[10]= "11)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[10]= new Array();
 choices[10][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[10][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[10][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[10][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[10] = choices[10][3];
 units[10] = "14";
 comments[10] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[11]= new Array();
 choices[11][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[11][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[11][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[11][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[11] = choices[11][0];
 units[11] = "77";
 comments[11] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[12]= new Array();
 choices[12][0] = "Art&iacute;culo 9.1 CE.";
 choices[12][1] = "Art&iacute;culo 53 CE.";
 choices[12][2] = "Art&iacute;culo 14 CE.";
 choices[12][3] = "Art&iacute;culo 16 CE.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[13]= "14)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[13]= new Array();
 choices[13][0] = "P&uacute;blica.";
 choices[13][1] = "Privada.";
 choices[13][2] = "Ambas son correctas.";
 choices[13][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[13] = choices[13][0];
 units[13] = "14";
 comments[13] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[14]= "15)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[14]= new Array();
 choices[14][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[14][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[14][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[14][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[14] = choices[14][2];
 units[14] = "73";
 comments[14] = "Id Pregunta: 654. ";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[15]= "16)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[15]= new Array();
 choices[15][0] = "los Subsecretarios y Secretarios generales";
 choices[15][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[15][2] = "los Secretarios de Estado";
 choices[15][3] = "los Subdirectores generales";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[16]= "17)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[16]= new Array();
 choices[16][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[16][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[16][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[16][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[16] = choices[16][2];
 units[16] = "50";
 comments[16] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[17]= new Array();
 choices[17][0] = "Nivel 7 - MPLS.";
 choices[17][1] = "Nivel 3 - RARP.";
 choices[17][2] = "Nivel 2 - HDLC.";
 choices[17][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[17] = choices[17][2];
 units[17] = "105";
 comments[17] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[18]= "19)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[18]= new Array();
 choices[18][0] = "Son actos normativos.";
 choices[18][1] = "Poseen alcance general.";
 choices[18][2] = "No son obligatorias.";
 choices[18][3] = "Son actos individuales no normativos.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[19]= "20)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[19]= new Array();
 choices[19][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[19][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[19][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[19][3] = "Todas las respuestas son correctas.";
 answers[19] = choices[19][0];
 units[19] = "101";
 comments[19] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[20]= "21)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[20]= new Array();
 choices[20][0] = "Windows Phone";
 choices[20][1] = "Blackberry";
 choices[20][2] = "iOS";
 choices[20][3] = "Android";
 answers[20] = choices[20][3];
 units[20] = "59";
 comments[20] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[21]= "22)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[21]= new Array();
 choices[21][0] = "Son vinculantes solamente.";
 choices[21][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[21][2] = "Son preceptivos y vinculantes.";
 choices[21][3] = "Son preceptivos y no vinculantes.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[22]= "23)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[22]= new Array();
 choices[22][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[22][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[22][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[22][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[22] = choices[22][0];
 units[22] = "12";
 comments[22] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[23]= new Array();
 choices[23][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[23][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[23][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[23][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[23] = choices[23][0];
 units[23] = "7";
 comments[23] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[24]= "25)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[24]= new Array();
 choices[24][0] = "los Ministros y los Secretarios de Estado";
 choices[24][1] = "los Subsecretarios y Secretarios generales";
 choices[24][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[24][3] = "los Directores generales";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[25]= "26)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[25]= new Array();
 choices[25][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[25][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[25][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[25][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[25] = choices[25][0];
 units[25] = "28";
 comments[25] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[26]= new Array();
 choices[26][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[26][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[26][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[26][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[26] = choices[26][0];
 units[26] = "14";
 comments[26] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[27]= "28)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[27]= new Array();
 choices[27][0] = "90";
 choices[27][1] = "50";
 choices[27][2] = "64";
 choices[27][3] = "60";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[28]= new Array();
 choices[28][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[28][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[28][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[28][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[28] = choices[28][0];
 units[28] = "19";
 comments[28] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[29]= "30)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[29]= new Array();
 choices[29][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[29][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[29][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[29][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[29] = choices[29][3];
 units[29] = "34, 84";
 comments[29] = "Id Pregunta: 733. Metodologias &aacute;giles";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[30]= "31)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[30]= new Array();
 choices[30][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[30][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[30][2] = "Al Congreso de los Diputados.";
 choices[30][3] = "Al Gobierno.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[31]= "32)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[31]= new Array();
 choices[31][0] = "Discriminaci&oacute;n indirecta.";
 choices[31][1] = "Discriminaci&oacute;n directa.";
 choices[31][2] = "Discriminaci&oacute;n por maternidad.";
 choices[31][3] = "Discriminaci&oacute;n abusiva.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[32]= "33)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[32]= new Array();
 choices[32][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[32][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[32][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[32][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 679. Dependencia";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[33]= "34)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[33]= new Array();
 choices[33][0] = "Conformidad";
 choices[33][1] = "Responsabilidad";
 choices[33][2] = "Adquisici&oacute;n";
 choices[33][3] = "Desempe&ntilde;o";
 answers[33] = choices[33][0];
 units[33] = "26";
 comments[33] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[34]= "35)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[34]= new Array();
 choices[34][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[34][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[34][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[34][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; es Java Web Start?";
 choices[35]= new Array();
 choices[35][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[35][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[35][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[35][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[35] = choices[35][3];
 units[35] = "64";
 comments[35] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[36]= "37)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[36]= new Array();
 choices[36][0] = "Interoperabilidad";
 choices[36][1] = "Integridad";
 choices[36][2] = "Capital humano";
 choices[36][3] = "Trazabilidad";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[37]= "38)  Componen la Comisi&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "Un Comisario por cada Estado miembro.";
 choices[37][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[37][2] = "Dos Comisarios por cada Estado miembro.";
 choices[37][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[38]= "39)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[38]= new Array();
 choices[38][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[38][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[38][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[38][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[38] = choices[38][2];
 units[38] = "101";
 comments[38] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[39]= new Array();
 choices[39][0] = "El BCE";
 choices[39][1] = "El Parlamento";
 choices[39][2] = "El Consejo";
 choices[39][3] = "La Comisi&oacute;n";
 answers[39] = choices[39][3];
 units[39] = "17";
 comments[39] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[40]= "41)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[40]= new Array();
 choices[40][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[40][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[40][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[40][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[40] = choices[40][3];
 units[40] = "109";
 comments[40] = "Id Pregunta: 652. Junta de Extremadura A1 2015";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[41]= new Array();
 choices[41][0] = "Drupal";
 choices[41][1] = "Cassandra";
 choices[41][2] = "Wordpress";
 choices[41][3] = "OpenCMS";
 answers[41] = choices[41][1];
 units[41] = "99";
 comments[41] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[42]= "43)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[42]= new Array();
 choices[42][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[42][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[42][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[42][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[42] = choices[42][1];
 units[42] = "92";
 comments[42] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[43]= "44)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[43]= new Array();
 choices[43][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[43][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[43][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[43][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[43] = choices[43][2];
 units[43] = "108";
 comments[43] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[44]= "45)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[44]= new Array();
 choices[44][0] = "Cinco a&ntilde;os.";
 choices[44][1] = "Seis a&ntilde;os.";
 choices[44][2] = "Cuatro a&ntilde;os.";
 choices[44][3] = "Tres a&ntilde;os.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[45]= "46)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[45]= new Array();
 choices[45][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[45][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[45][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[45][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[45] = choices[45][3];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[46]= "47)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[46]= new Array();
 choices[46][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[46][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[46][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[46][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[47]= "48)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[47]= new Array();
 choices[47][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[47][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[47][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[47][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[47] = choices[47][1];
 units[47] = "74";
 comments[47] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[48]= "49)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[48]= new Array();
 choices[48][0] = "CO.PER.";
 choices[48][1] = "COMPER.";
 choices[48][2] = "CO.RE.PER.";
 choices[48][3] = "CO.PE.RRE.";
 answers[48] = choices[48][2];
 units[48] = "5";
 comments[48] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[49][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[49][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[49][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[49] = choices[49][1];
 units[49] = "98";
 comments[49] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[50]= new Array();
 choices[50][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[50][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[50][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[50][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[50] = choices[50][0];
 units[50] = "89";
 comments[50] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[51]= new Array();
 choices[51][0] = "Dos Cap&iacute;tulos.";
 choices[51][1] = "Tres Cap&iacute;tulos.";
 choices[51][2] = "Un Cap&iacute;tulo.";
 choices[51][3] = "Cuatro Cap&iacute;tulos.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[52]= new Array();
 choices[52][0] = "Versi&oacute;n digital prioritaria.";
 choices[52][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[52][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[52][3] = "Apertura y transparencia.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[53]= "54)  Un wireframe es:";
 choices[53]= new Array();
 choices[53][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[53][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[53][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[53][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[53] = choices[53][3];
 units[53] = "62";
 comments[53] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[54]= "55)  En las Administraciones P&uacute;blicas...";
 choices[54]= new Array();
 choices[54][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[54][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[54][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[54][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[55]= new Array();
 choices[55][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[55][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[55][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[55][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[55] = choices[55][1];
 units[55] = "63";
 comments[55] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[56]= "57)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[56]= new Array();
 choices[56][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[56][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[56][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[56][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[57]= new Array();
 choices[57][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[57][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[57][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[57][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[57] = choices[57][2];
 units[57] = "10";
 comments[57] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[58][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[58][2] = "A y B son correctas.";
 choices[58][3] = "A y B son falsas.";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[59]= new Array();
 choices[59][0] = "Quince miembros.";
 choices[59][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[59][2] = "Los miembros que determine el Consejo.";
 choices[59][3] = "Un Presidente y quince miembros.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[60]= "61)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[60]= new Array();
 choices[60][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[60][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[60][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[60][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[61]= "62)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[61]= new Array();
 choices[61][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[61][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[61][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[61][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[61] = choices[61][1];
 units[61] = "7";
 comments[61] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[62]= "63)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[62]= new Array();
 choices[62][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[62][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[62][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[62][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[63]= new Array();
 choices[63][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[63][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[63][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[63][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[63] = choices[63][0];
 units[63] = "15";
 comments[63] = "Id Pregunta: 117. ";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[64]= new Array();
 choices[64][0] = "Consumidores";
 choices[64][1] = "PYMES y Start-ups";
 choices[64][2] = "La Industria";
 choices[64][3] = "Todos los anteriores";
 answers[64] = choices[64][3];
 units[64] = "17";
 comments[64] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[65]= new Array();
 choices[65][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[65][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[65][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[65][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[66]= "67)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[66]= new Array();
 choices[66][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[66][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[66][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[66][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[66] = choices[66][3];
 units[66] = "101";
 comments[66] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[67]= new Array();
 choices[67][0] = "Tres meses.";
 choices[67][1] = "Nueve meses.";
 choices[67][2] = "Cuatro meses.";
 choices[67][3] = "Seis meses.";
 answers[67] = choices[67][0];
 units[67] = "10";
 comments[67] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[68]= new Array();
 choices[68][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[68][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[68][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[68][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[68] = choices[68][1];
 units[68] = "89";
 comments[68] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[69]= new Array();
 choices[69][0] = "Veinticinco.";
 choices[69][1] = "Veintisiete.";
 choices[69][2] = "Veintinueve.";
 choices[69][3] = "Cuarenta y uno.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ala la correcta:";
 choices[70]= new Array();
 choices[70][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[70][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[70][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[70][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[70] = choices[70][1];
 units[70] = "7";
 comments[70] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[71]= "72)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[71]= new Array();
 choices[71][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[71][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[71][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[71][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[71] = choices[71][0];
 units[71] = "10";
 comments[71] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[72]= new Array();
 choices[72][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[72][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[72][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[72][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[72] = choices[72][1];
 units[72] = "76";
 comments[72] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[73]= "74)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[73]= new Array();
 choices[73][0] = "El Presidente del Consejo Europeo.";
 choices[73][1] = "La Comisi&oacute;n.";
 choices[73][2] = "El Consejo.";
 choices[73][3] = "El Parlamento Europeo.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[74]= new Array();
 choices[74][0] = "Car&aacute;cter sustitutivo";
 choices[74][1] = "Car&aacute;cter obligatorio";
 choices[74][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][3];
 units[74] = "19";
 comments[74] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


