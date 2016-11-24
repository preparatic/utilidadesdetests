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

//  Id pregunta: 10600 Año de creación de pregunta: 2016
 questions[0]= "1)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[0]= new Array();
 choices[0][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[0][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[0][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[0][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[0] = choices[0][2];
 units[0] = "108";
 comments[0] = "Id Pregunta: 10600. Junta de Extremadura A1 2015";


//  Id pregunta: 10111 Año de creación de pregunta: 2016
 questions[1]= "2)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[1]= new Array();
 choices[1][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[1][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[1][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[1][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[1] = choices[1][0];
 units[1] = "15";
 comments[1] = "Id Pregunta: 10111. ";


//  Id pregunta: 10203 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[2]= new Array();
 choices[2][0] = "Ley Org&aacute;nica.";
 choices[2][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[2][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[2][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 10203. CONSTITUCION1978";


//  Id pregunta: 10529 Año de creación de pregunta: 2016
 questions[3]= "4)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[3]= new Array();
 choices[3][0] = "formular solicitudes";
 choices[3][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[3][2] = "presentar declaraciones responsables o comunicaciones";
 choices[3][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[3] = choices[3][1];
 units[3] = "7";
 comments[3] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10299 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[4]= new Array();
 choices[4][0] = "Quince miembros.";
 choices[4][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[4][2] = "Los miembros que determine el Consejo.";
 choices[4][3] = "Un Presidente y quince miembros.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10314 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[5]= new Array();
 choices[5][0] = "Al Consejo Europeo.";
 choices[5][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[5][2] = "A la Comisi&oacute;n Europea.";
 choices[5][3] = "Al Parlamento Europeo.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10184 Año de creación de pregunta: 2016
 questions[6]= "7)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[6]= new Array();
 choices[6][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[6][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[6][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[6][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10184. CONSTITUCION1978";


//  Id pregunta: 10022 Año de creación de pregunta: 2016
 questions[7]= "8)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[7]= new Array();
 choices[7][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[7][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[7][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[7][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[7] = choices[7][1];
 units[7] = "26";
 comments[7] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10356 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[8]= new Array();
 choices[8][0] = "No se aplican directamente en los Estados.";
 choices[8][1] = "No son vinculantes.";
 choices[8][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[8][3] = "Tienen alcance general.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[9]= new Array();
 choices[9][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[9][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[9][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[9][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10507 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[10]= new Array();
 choices[10][0] = "Reducir el gasto p&uacute;blico.";
 choices[10][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[10][2] = "Reducir el endeudamiento neto.";
 choices[10][3] = "Al Fondo de Contingencia.";
 answers[10] = choices[10][2];
 units[10] = "10";
 comments[10] = "Id Pregunta: 10507. PRESUPUESTOS GENERALES";


//  Id pregunta: 10661 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[11]= new Array();
 choices[11][0] = "Varios namenodes y varios datanodes por cluster";
 choices[11][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[11][2] = "1 namenode y varios datanodes por cluster";
 choices[11][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[11] = choices[11][2];
 units[11] = "73";
 comments[11] = "Id Pregunta: 10661. ";


//  Id pregunta: 10072 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[12]= new Array();
 choices[12][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[12][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[12][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[12][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[12] = choices[12][1];
 units[12] = "86";
 comments[12] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10171 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[13]= new Array();
 choices[13][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[13][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[13][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[13][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[13] = choices[13][3];
 units[13] = "19";
 comments[13] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10331 Año de creación de pregunta: 2016
 questions[14]= "15)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[14]= new Array();
 choices[14][0] = "90";
 choices[14][1] = "50";
 choices[14][2] = "64";
 choices[14][3] = "60";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[15]= new Array();
 choices[15][0] = "Art&iacute;culo 14 CE.";
 choices[15][1] = "Art&iacute;culo 9.2 CE.";
 choices[15][2] = "Art&iacute;culo 9.1 CE.";
 choices[15][3] = "Art&iacute;culo 13 CE.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10475 Año de creación de pregunta: 2016
 questions[16]= "17)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Anualmente.";
 choices[16][1] = "Ninguna de las respuestas es correcta.";
 choices[16][2] = "Trimestralmente.";
 choices[16][3] = "Semestralmente.";
 answers[16] = choices[16][0];
 units[16] = "10";
 comments[16] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10680 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[17]= new Array();
 choices[17][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[17][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[17][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[17][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 10680. Pensiones";


//  Id pregunta: 10633 Año de creación de pregunta: 2016
 questions[18]= "19)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[18]= new Array();
 choices[18][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[18][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[18][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[18][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[18] = choices[18][3];
 units[18] = "56";
 comments[18] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10346 Año de creación de pregunta: 2016
 questions[19]= "20)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[19]= new Array();
 choices[19][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[19][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[19][2] = "Cinco a&ntilde;os.";
 choices[19][3] = "Ninguna es correcta.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10678 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[20]= new Array();
 choices[20][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10085 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Estimaci&oacute;n del riesgo";
 choices[21][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[21][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[21][3] = "Mapa de riesgos";
 answers[21] = choices[21][3];
 units[21] = "45";
 comments[21] = "Id Pregunta: 10085. AGE A1 2015";


//  Id pregunta: 10059 Año de creación de pregunta: 2016
 questions[22]= "23)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[22]= new Array();
 choices[22][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[22][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[22][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[22][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[22] = choices[22][3];
 units[22] = "101";
 comments[22] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10585 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[23]= new Array();
 choices[23][0] = "La CETIC";
 choices[23][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[23][2] = "La DTIC";
 choices[23][3] = "Ninguno de los anteriores";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10627 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[24]= new Array();
 choices[24][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[24][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[24][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[24][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[24] = choices[24][0];
 units[24] = "46";
 comments[24] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10533 Año de creación de pregunta: 2016
 questions[25]= "26)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[25]= new Array();
 choices[25][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[25][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[25][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[25][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10367 Año de creación de pregunta: 2016
 questions[26]= "27)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[26]= new Array();
 choices[26][0] = "Presentar la moci&oacute;n de censura.";
 choices[26][1] = "Presidir las sesiones del Parlamento.";
 choices[26][2] = "Organizar la Secretar&iacute;a General.";
 choices[26][3] = "Preparar las actividades de las Comisiones.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10396 Año de creación de pregunta: 2016
 questions[27]= "28)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[27]= new Array();
 choices[27][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[27][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[27][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[27][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10279 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la respuesta correcta:";
 choices[28]= new Array();
 choices[28][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[28][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[28][2] = "Las respuestas A y B son correctas.";
 choices[28][3] = "Las respuestas A y B son falsas.";
 answers[28] = choices[28][2];
 units[28] = "5";
 comments[28] = "Id Pregunta: 10279. UNION EUROPEA";


//  Id pregunta: 10432 Año de creación de pregunta: 2016
 questions[29]= "30)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[29]= new Array();
 choices[29][0] = "De ocho a&ntilde;os.";
 choices[29][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[29][2] = "Ambas son correctas.";
 choices[29][3] = "No existe un l&iacute;mite.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10321 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[30]= new Array();
 choices[30][0] = "Cincuenta y cuatro.";
 choices[30][1] = "Cincuenta.";
 choices[30][2] = "Cincuenta y cinco.";
 choices[30][3] = "Cincuenta y dos.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 10321. UNION EUROPEA";


//  Id pregunta: 10362 Año de creación de pregunta: 2016
 questions[31]= "32)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[31]= new Array();
 choices[31][0] = "Son actos normativos.";
 choices[31][1] = "Poseen alcance general.";
 choices[31][2] = "No son obligatorias.";
 choices[31][3] = "Son actos individuales no normativos.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10441 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[32]= new Array();
 choices[32][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[32][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[32][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[32][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10597 Año de creación de pregunta: 2016
 questions[33]= "34)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[33][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[33][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[33][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[33] = choices[33][0];
 units[33] = "45";
 comments[33] = "Id Pregunta: 10597. Junta de Extremadura A1 2015";


//  Id pregunta: 10130 Año de creación de pregunta: 2016
 questions[34]= "35)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[34]= new Array();
 choices[34][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[34][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[34][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[34][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[34] = choices[34][3];
 units[34] = "12";
 comments[34] = "Id Pregunta: 10130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10145 Año de creación de pregunta: 2016
 questions[35]= "36)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[35][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[35][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[35][3] = "Todas las anteriores son ciertas";
 answers[35] = choices[35][3];
 units[35] = "8";
 comments[35] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[36]= new Array();
 choices[36][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[36][1] = "Anteriormente se denominaba Sonar.";
 choices[36][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[36][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[36] = choices[36][2];
 units[36] = "92";
 comments[36] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10578 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[37]= new Array();
 choices[37][0] = "Fue elaborada y aprobada por la CETIC";
 choices[37][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[37][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[37][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[37] = choices[37][1];
 units[37] = "19";
 comments[37] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10478 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[38]= new Array();
 choices[38][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[38][1] = "Intervenci&oacute;n formal y material.";
 choices[38][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[38][3] = "Intervenci&oacute;n formal y general.";
 answers[38] = choices[38][1];
 units[38] = "10";
 comments[38] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


//  Id pregunta: 10590 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[39]= new Array();
 choices[39][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[39][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[39][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[39][3] = "Todos los anteriores";
 answers[39] = choices[39][3];
 units[39] = "19";
 comments[39] = "Id Pregunta: 10590. Estrategia TIC";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[40]= "41)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[40]= new Array();
 choices[40][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[40][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[40][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[40][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[40] = choices[40][2];
 units[40] = "57";
 comments[40] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10444 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[41]= new Array();
 choices[41][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[41][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[41][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[41][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[41] = choices[41][1];
 units[41] = "43";
 comments[41] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[42]= new Array();
 choices[42][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[42][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[42][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[42][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[42] = choices[42][3];
 units[42] = "26";
 comments[42] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10046 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[43][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[43][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[43][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[43] = choices[43][1];
 units[43] = "76";
 comments[43] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10364 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[44]= new Array();
 choices[44][0] = "El 1 de junio de 1999.";
 choices[44][1] = "El 1 de mayo de 1999.";
 choices[44][2] = "El 1 de abril de 1999.";
 choices[44][3] = "El 1 de marzo de 1999.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10364. UNION EUROPEA";


//  Id pregunta: 10381 Año de creación de pregunta: 2016
 questions[45]= "46)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[45]= new Array();
 choices[45][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[45][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[45][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[45][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 10381. POLITICAS DE IGUALDAD";


//  Id pregunta: 10497 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[46]= new Array();
 choices[46][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[46][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[46][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[46][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10657 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; es el machine learning?";
 choices[47]= new Array();
 choices[47][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[47][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[47][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[47][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[47] = choices[47][0];
 units[47] = "73";
 comments[47] = "Id Pregunta: 10657. ";


//  Id pregunta: 10448 Año de creación de pregunta: 2016
 questions[48]= "49)  La partida presupuestaria es equivalente a...";
 choices[48]= new Array();
 choices[48][0] = "El sujeto que realiza el gasto";
 choices[48][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[48][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[48][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[48] = choices[48][3];
 units[48] = "10";
 comments[48] = "Id Pregunta: 10448. PRESUPUESTOS GENERALES";


//  Id pregunta: 10125 Año de creación de pregunta: 2016
 questions[49]= "50)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[49]= new Array();
 choices[49][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[49][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[49][2] = "La protecci&oacute;n del medio ambiente.";
 choices[49][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[49] = choices[49][0];
 units[49] = "22";
 comments[49] = "Id Pregunta: 10125. ";


//  Id pregunta: 10016 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[50][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[50][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[50][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[50] = choices[50][3];
 units[50] = "19";
 comments[50] = "Id Pregunta: 10016. AGE A1 2015";


//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[51]= "52)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[51]= new Array();
 choices[51][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[51][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[51][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[51][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[51] = choices[51][0];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10423 Año de creación de pregunta: 2016
 questions[52]= "53)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[52]= new Array();
 choices[52][0] = "El derecho a un permiso.";
 choices[52][1] = "Una prestaci&oacute;n por paternidad.";
 choices[52][2] = "Ambas son correctas.";
 choices[52][3] = "18 d&iacute;as de permiso.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10201 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[53][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[53][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[53][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10501 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[54]= new Array();
 choices[54][0] = "Las sociedades mercantiles estatales.";
 choices[54][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[54][2] = "Las respuestas a) y b) son correctas.";
 choices[54][3] = "Las respuestas a) y b) no son correctas.";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10501. PRESUPUESTOS GENERALES";


//  Id pregunta: 10185 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[55]= new Array();
 choices[55][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[55][1] = "Autorizar indultos generales.";
 choices[55][2] = "Sancionar las leyes.";
 choices[55][3] = "Promulgar las leyes.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 10185. CONSTITUCION1978";


//  Id pregunta: 10606 Año de creación de pregunta: 2016
 questions[56]= "57)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[56]= new Array();
 choices[56][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[56][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[56][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[56][3] = "Todas las respuestas son correctas.";
 answers[56] = choices[56][1];
 units[56] = "101";
 comments[56] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10039 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[57]= new Array();
 choices[57][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[57][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[57][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[57][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[57] = choices[57][2];
 units[57] = "71";
 comments[57] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10511 Año de creación de pregunta: 2016
 questions[58]= "59)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[58]= new Array();
 choices[58][0] = "solo mediante ley";
 choices[58][1] = "reglamentariamente";
 choices[58][2] = "mediante ley o reglamentariamente";
 choices[58][3] = "ninguna es correcta";
 answers[58] = choices[58][0];
 units[58] = "7";
 comments[58] = "Id Pregunta: 10511. LEY 39/2015";


//  Id pregunta: 10404 Año de creación de pregunta: 2016
 questions[59]= "60)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[59]= new Array();
 choices[59][0] = "El Tratado de Roma, 1957.";
 choices[59][1] = "El Acta &Uacute;nica Europea.";
 choices[59][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[59][3] = "Ninguna es correcta.";
 answers[59] = choices[59][2];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10404. POLITICAS DE IGUALDAD";


//  Id pregunta: 10075 Año de creación de pregunta: 2016
 questions[60]= "61)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[60]= new Array();
 choices[60][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[60][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[60][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[60][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[60] = choices[60][0];
 units[60] = "35";
 comments[60] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10297 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[61]= new Array();
 choices[61][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[61][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[61][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[61][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[61] = choices[61][1];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10493 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[62]= new Array();
 choices[62][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[62][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[62][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[62][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 10493. PRESUPUESTOS GENERALES";


//  Id pregunta: 10378 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[63]= new Array();
 choices[63][0] = "Quince miembros.";
 choices[63][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[63][2] = "Los miembros que determine el Consejo.";
 choices[63][3] = "Un Presidente y quince miembros.";
 answers[63] = choices[63][1];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10348 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[64]= new Array();
 choices[64][0] = "El 1 de noviembre de 1994.";
 choices[64][1] = "El 1 de noviembre de 1992.";
 choices[64][2] = "El 1 de noviembre de 1995.";
 choices[64][3] = "El 1 de noviembre de 1993.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10348. UNION EUROPEA";


//  Id pregunta: 10647 Año de creación de pregunta: 2016
 questions[65]= "66)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[65]= new Array();
 choices[65][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[65][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[65][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[65][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[65] = choices[65][0];
 units[65] = "101";
 comments[65] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10403 Año de creación de pregunta: 2016
 questions[66]= "67)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[66]= new Array();
 choices[66][0] = "Medidas de igualdad.";
 choices[66][1] = "Objetivos de igualdad.";
 choices[66][2] = "Ambas son correctas.";
 choices[66][3] = "A y B son incorrectas.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[67]= "68)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[67]= new Array();
 choices[67][0] = "Un recurso de incumplimiento.";
 choices[67][1] = "Recurso de carencia.";
 choices[67][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[67][3] = "Ninguna es correcta.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10436 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[68][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[68][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[68][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10632 Año de creación de pregunta: 2016
 questions[69]= "70)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[69]= new Array();
 choices[69][0] = "Monol&iacute;tico.";
 choices[69][1] = "Estratificado.";
 choices[69][2] = "Cliente/servidor.";
 choices[69][3] = "Orientado a objetos.";
 answers[69] = choices[69][3];
 units[69] = "56";
 comments[69] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[70]= "71)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[70]= new Array();
 choices[70][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[70][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[70][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[70][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[70] = choices[70][1];
 units[70] = "58";
 comments[70] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10492 Año de creación de pregunta: 2016
 questions[71]= "72)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[71]= new Array();
 choices[71][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[71][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[71][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[71][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[71] = choices[71][2];
 units[71] = "10";
 comments[71] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10343 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[72]= new Array();
 choices[72][0] = "23";
 choices[72][1] = "20";
 choices[72][2] = "14";
 choices[72][3] = "18";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10211 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[73]= new Array();
 choices[73][0] = "Cuatro.";
 choices[73][1] = "Ninguno.";
 choices[73][2] = "Dos.";
 choices[73][3] = "Seis.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10211. CONSTITUCION1978";


//  Id pregunta: 10672 Año de creación de pregunta: 2016
 questions[74]= "75)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[74][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[74][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[74][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[74] = choices[74][2];
 units[74] = "47";
 comments[74] = "Id Pregunta: 10672. Historia Cl&iacute;nica Digital";


