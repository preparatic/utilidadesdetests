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

//  Id pregunta: 10587 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[0]= new Array();
 choices[0][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[0][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[0][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[0][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[0] = choices[0][0];
 units[0] = "19";
 comments[0] = "Id Pregunta: 10587. Estrategia TIC";


//  Id pregunta: 10004 Año de creación de pregunta: 2016
 questions[1]= "2)  Un wireframe es:";
 choices[1]= new Array();
 choices[1][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[1][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[1][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[1][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[1] = choices[1][3];
 units[1] = "62";
 comments[1] = "Id Pregunta: 10004. AGE A1 2015";


//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[2]= new Array();
 choices[2][0] = "Veinticinco.";
 choices[2][1] = "Veintiuno.";
 choices[2][2] = "Dieciocho.";
 choices[2][3] = "Diecinueve.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[3]= "4)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[3]= new Array();
 choices[3][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[3][1] = "Personas con nacionalidad europea.";
 choices[3][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[3][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 10376. UNION EUROPEA";


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


//  Id pregunta: 10207 Año de creación de pregunta: 2016
 questions[5]= "6)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[5]= new Array();
 choices[5][0] = "El Delegado del Gobierno.";
 choices[5][1] = "El Subdelegado del Gobierno.";
 choices[5][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[5][3] = "El Gobernador Civil.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 10207. CONSTITUCION1978";


//  Id pregunta: 10337 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[6]= new Array();
 choices[6][0] = "732";
 choices[6][1] = "626";
 choices[6][2] = "786";
 choices[6][3] = "360";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10337. UNION EUROPEA";


//  Id pregunta: 10483 Año de creación de pregunta: 2016
 questions[7]= "8)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[7]= new Array();
 choices[7][0] = "180 art&iacute;culos.";
 choices[7][1] = "182 art&iacute;culos.";
 choices[7][2] = "185 art&iacute;culos.";
 choices[7][3] = "190 art&iacute;culos.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10483. PRESUPUESTOS GENERALES";


//  Id pregunta: 10111 Año de creación de pregunta: 2016
 questions[8]= "9)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[8]= new Array();
 choices[8][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[8][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[8][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[8][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[8] = choices[8][0];
 units[8] = "15";
 comments[8] = "Id Pregunta: 10111. ";


//  Id pregunta: 10229 Año de creación de pregunta: 2016
 questions[9]= "10)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[9]= new Array();
 choices[9][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[9][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[9][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[9][3] = "A las Diputaciones y a las Comarcas.";
 answers[9] = choices[9][3];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10229. CONSTITUCION1978";


//  Id pregunta: 10411 Año de creación de pregunta: 2016
 questions[10]= "11)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[10]= new Array();
 choices[10][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[10][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[10][2] = "Ninguna es correcta.";
 choices[10][3] = "A y B son correctas.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[11]= "12)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[11]= new Array();
 choices[11][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[11][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[11][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[11][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[11] = choices[11][1];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10250 Año de creación de pregunta: 2016
 questions[12]= "13)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[12]= new Array();
 choices[12][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[12][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[12][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[12][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[12] = choices[12][2];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10250. CONSTITUCION1978";


//  Id pregunta: 10267 Año de creación de pregunta: 2016
 questions[13]= "14)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[13]= new Array();
 choices[13][0] = "Los Derechos y Deberes fundamentales.";
 choices[13][1] = "La Corona.";
 choices[13][2] = "El Poder Judicial.";
 choices[13][3] = "Las Cortes Generales.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10267. CONSTITUCION1978";


//  Id pregunta: 10345 Año de creación de pregunta: 2016
 questions[14]= "15)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[14]= new Array();
 choices[14][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[14][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[14][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[14][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[14] = choices[14][3];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10345. UNION EUROPEA";


//  Id pregunta: 10237 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[15][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[15][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[15][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10237. CONSTITUCION1978";


//  Id pregunta: 10079 Año de creación de pregunta: 2016
 questions[16]= "17)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[16]= new Array();
 choices[16][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[16][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[16][2] = "Las Inspecciones Generales de los Servicios";
 choices[16][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[16] = choices[16][1];
 units[16] = "75";
 comments[16] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10484 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[17]= new Array();
 choices[17][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[17][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[17][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[17][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10276 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta falsa";
 choices[18]= new Array();
 choices[18][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[18][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[18][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[18][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[18] = choices[18][3];
 units[18] = "22";
 comments[18] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10114 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[19]= new Array();
 choices[19][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[19][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[19][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[19][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[19] = choices[19][0];
 units[19] = "15";
 comments[19] = "Id Pregunta: 10114. ";


//  Id pregunta: 10248 Año de creación de pregunta: 2016
 questions[20]= "21)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[20]= new Array();
 choices[20][0] = "61";
 choices[20][1] = "53";
 choices[20][2] = "65";
 choices[20][3] = "67";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10248. CONSTITUCION1978";


//  Id pregunta: 10126 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[21]= new Array();
 choices[21][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[21][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[21][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[21][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[21] = choices[21][3];
 units[21] = "22";
 comments[21] = "Id Pregunta: 10126. ";


//  Id pregunta: 10373 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[22]= new Array();
 choices[22][0] = "Nueve.";
 choices[22][1] = "Diez.";
 choices[22][2] = "Siete.";
 choices[22][3] = "Ocho.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10289 Año de creación de pregunta: 2016
 questions[23]= "24)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[23]= new Array();
 choices[23][0] = "Tres a&ntilde;os.";
 choices[23][1] = "Dos a&ntilde;os y medio.";
 choices[23][2] = "Cinco a&ntilde;os.";
 choices[23][3] = "Seis a&ntilde;os.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10289. UNION EUROPEA";


//  Id pregunta: 10399 Año de creación de pregunta: 2016
 questions[24]= "25)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[24]= new Array();
 choices[24][0] = "Acciones de discriminaci&oacute;n.";
 choices[24][1] = "Acciones positivas.";
 choices[24][2] = "Acciones negativas.";
 choices[24][3] = "Acciones neutras.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10439 Año de creación de pregunta: 2016
 questions[25]= "26)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[25]= new Array();
 choices[25][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[25][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[25][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[25][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10209 Año de creación de pregunta: 2016
 questions[26]= "27)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[26]= new Array();
 choices[26][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[26][1] = "El Congreso de los Diputados.";
 choices[26][2] = "Las Cortes Generales.";
 choices[26][3] = "El Consejo de Ministros";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10466 Año de creación de pregunta: 2016
 questions[27]= "28)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[27]= new Array();
 choices[27][0] = "Con el a&ntilde;o anterior.";
 choices[27][1] = "Con los tres a&ntilde;os anteriores.";
 choices[27][2] = "Con el a&ntilde;o natural.";
 choices[27][3] = "Con los dos a&ntilde;os anteriores.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10106 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[28]= new Array();
 choices[28][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[28][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[28][2] = "A) y B) son verdaderas";
 choices[28][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[28] = choices[28][2];
 units[28] = "73";
 comments[28] = "Id Pregunta: 10106. ";


//  Id pregunta: 10277 Año de creación de pregunta: 2016
 questions[29]= "30)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[29]= new Array();
 choices[29][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[29][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[29][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[29][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[29] = choices[29][2];
 units[29] = "22";
 comments[29] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10109 Año de creación de pregunta: 2016
 questions[30]= "31)  Big Data:";
 choices[30]= new Array();
 choices[30][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[30][1] = "No puede emplearse para tratar datos no estructurados";
 choices[30][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][3];
 units[30] = "73";
 comments[30] = "Id Pregunta: 10109. ";


//  Id pregunta: 10360 Año de creación de pregunta: 2016
 questions[31]= "32)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[31]= new Array();
 choices[31][0] = "786 Diputados como m&aacute;ximo.";
 choices[31][1] = "600 Diputados como m&aacute;ximo.";
 choices[31][2] = "650 Diputados como m&aacute;ximo.";
 choices[31][3] = "732 Diputados como m&aacute;ximo.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10360. UNION EUROPEA";


//  Id pregunta: 10211 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[32]= new Array();
 choices[32][0] = "Cuatro.";
 choices[32][1] = "Ninguno.";
 choices[32][2] = "Dos.";
 choices[32][3] = "Seis.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10211. CONSTITUCION1978";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[33]= "34)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[33]= new Array();
 choices[33][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[33][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[33][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[33][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[33] = choices[33][3];
 units[33] = "1";
 comments[33] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10241 Año de creación de pregunta: 2016
 questions[34]= "35)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[34]= new Array();
 choices[34][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[34][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[34][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[34][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10241. CONSTITUCION1978";


//  Id pregunta: 10021 Año de creación de pregunta: 2016
 questions[35]= "36)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[35]= new Array();
 choices[35][0] = "Gesti&oacute;n de la disponibilidad";
 choices[35][1] = "Gesti&oacute;n de la demanda";
 choices[35][2] = "Gesti&oacute;n de entregas";
 choices[35][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[35] = choices[35][0];
 units[35] = "101";
 comments[35] = "Id Pregunta: 10021. AGE A1 2015";


//  Id pregunta: 10405 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[36]= new Array();
 choices[36][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[36][1] = "Directiva 2004/113/CE del Consejo.";
 choices[36][2] = "Todas son correctas.";
 choices[36][3] = "Todas son falsas.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10405. POLITICAS DE IGUALDAD";


//  Id pregunta: 10125 Año de creación de pregunta: 2016
 questions[37]= "38)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[37]= new Array();
 choices[37][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[37][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[37][2] = "La protecci&oacute;n del medio ambiente.";
 choices[37][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[37] = choices[37][0];
 units[37] = "22";
 comments[37] = "Id Pregunta: 10125. ";


//  Id pregunta: 10311 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[38][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[38][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[38][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 10311. UNION EUROPEA";


//  Id pregunta: 10177 Año de creación de pregunta: 2016
 questions[39]= "40)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[39]= new Array();
 choices[39][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[39][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[39][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[39][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10059 Año de creación de pregunta: 2016
 questions[40]= "41)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[40]= new Array();
 choices[40][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[40][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[40][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[40][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[40] = choices[40][3];
 units[40] = "101";
 comments[40] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[41]= "42)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Discriminaci&oacute;n indirecta.";
 choices[41][1] = "Discriminaci&oacute;n directa.";
 choices[41][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[41][3] = "Discriminaci&oacute;n abusiva.";
 answers[41] = choices[41][0];
 units[41] = "14";
 comments[41] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[42]= new Array();
 choices[42][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[42][1] = "Pasivos financieros y transferencias de capital.";
 choices[42][2] = "Activos financieros y pasivos financieros.";
 choices[42][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10578 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[43]= new Array();
 choices[43][0] = "Fue elaborada y aprobada por la CETIC";
 choices[43][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[43][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[43][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[43] = choices[43][1];
 units[43] = "19";
 comments[43] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10658 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[44]= new Array();
 choices[44][0] = "NoSQL";
 choices[44][1] = "Sistemas de baja latencia";
 choices[44][2] = "MapReduce";
 choices[44][3] = "Business Intelligence";
 answers[44] = choices[44][1];
 units[44] = "73";
 comments[44] = "Id Pregunta: 10658. ";


//  Id pregunta: 10595 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[45]= new Array();
 choices[45][0] = "La CETIC";
 choices[45][1] = "Los Ministerios";
 choices[45][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[45][3] = "Ninguno de los anteriores";
 answers[45] = choices[45][1];
 units[45] = "19";
 comments[45] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[46]= "47)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[46]= new Array();
 choices[46][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[46][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[46][2] = "a y b son correctas";
 choices[46][3] = "a y b son incorrectas";
 answers[46] = choices[46][0];
 units[46] = "7";
 comments[46] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10264 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[47]= new Array();
 choices[47][0] = "Veinte.";
 choices[47][1] = "Quince.";
 choices[47][2] = "Diez.";
 choices[47][3] = "Doce.";
 answers[47] = choices[47][1];
 units[47] = "1";
 comments[47] = "Id Pregunta: 10264. CONSTITUCION1978";


//  Id pregunta: 10089 Año de creación de pregunta: 2016
 questions[48]= "49)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[48]= new Array();
 choices[48][0] = "2.400 euros";
 choices[48][1] = "4.000 euros";
 choices[48][2] = "3.200 euros";
 choices[48][3] = "1.600 euros";
 answers[48] = choices[48][1];
 units[48] = "37";
 comments[48] = "Id Pregunta: 10089. AGE A1 2015";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[49]= "50)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[49]= new Array();
 choices[49][0] = "Tener una estructura institucional.";
 choices[49][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[49][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[49][3] = "Todas las respuestas son correctas.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[50]= new Array();
 choices[50][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[50][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[50][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[50][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10169 Año de creación de pregunta: 2016
 questions[51]= "52)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[51]= new Array();
 choices[51][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[51][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[51][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[51][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[51] = choices[51][1];
 units[51] = "19";
 comments[51] = "Id Pregunta: 10169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[52]= new Array();
 choices[52][0] = "Es un framework de software libre.";
 choices[52][1] = "Es una base de datos NoSQL.";
 choices[52][2] = "Est&aacute; basado en MapReduce.";
 choices[52][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[52] = choices[52][1];
 units[52] = "73";
 comments[52] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10359 Año de creación de pregunta: 2016
 questions[53]= "54)  Los Reglamentos no se caracterizan por:";
 choices[53]= new Array();
 choices[53][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[53][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[53][2] = "Ser obligatorios.";
 choices[53][3] = "No poseer alcance general.";
 answers[53] = choices[53][3];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10359. UNION EUROPEA";


//  Id pregunta: 10614 Año de creación de pregunta: 2016
 questions[54]= "55)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[54]= new Array();
 choices[54][0] = "192.228.0.0";
 choices[54][1] = "192.228.8.0";
 choices[54][2] = "192.228.16.0";
 choices[54][3] = "192.228.17.0";
 answers[54] = choices[54][2];
 units[54] = "109";
 comments[54] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10472 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[55][1] = "Auditor&iacute;a operativa.";
 choices[55][2] = "Auditor&iacute;a de cumplimiento.";
 choices[55][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10472. PRESUPUESTOS GENERALES";


//  Id pregunta: 10553 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[56]= new Array();
 choices[56][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[56][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[56][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[56][3] = "Todas lo son";
 answers[56] = choices[56][0];
 units[56] = "17";
 comments[56] = "Id Pregunta: 10553. Mercado &Uacute;nico Digital";


//  Id pregunta: 10069 Año de creación de pregunta: 2016
 questions[57]= "58)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[57]= new Array();
 choices[57][0] = "Ejecuci&oacute;n";
 choices[57][1] = "Adjudicaci&oacute;n";
 choices[57][2] = "Licitaci&oacute;n";
 choices[57][3] = "Formalizaci&oacute;n";
 answers[57] = choices[57][3];
 units[57] = "37";
 comments[57] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10098 Año de creación de pregunta: 2016
 questions[58]= "59)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[58]= new Array();
 choices[58][0] = "Clustering";
 choices[58][1] = "Deduplicaci&oacute;n";
 choices[58][2] = "Virtualizaci&oacute;n";
 choices[58][3] = "Contenerizaci&oacute;n";
 answers[58] = choices[58][2];
 units[58] = "124";
 comments[58] = "Id Pregunta: 10098. AGE A1 2015";


//  Id pregunta: 10058 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[59]= new Array();
 choices[59][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[59][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[59][2] = "Servicio de seguridad gestionada";
 choices[59][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[59] = choices[59][1];
 units[59] = "26";
 comments[59] = "Id Pregunta: 10058. AGE A1 2015";


//  Id pregunta: 10333 Año de creación de pregunta: 2016
 questions[60]= "61)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[60]= new Array();
 choices[60][0] = "Las instituciones comunitarias.";
 choices[60][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[60][2] = "Los Estados miembros.";
 choices[60][3] = "Los nacionales de los Estados miembros.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10333. UNION EUROPEA";


//  Id pregunta: 10255 Año de creación de pregunta: 2016
 questions[61]= "62)  La soberan&iacute;a nacional reside en:";
 choices[61]= new Array();
 choices[61][0] = "el Parlamento nacional.";
 choices[61][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[61][2] = "el pueblo espa&ntilde;ol.";
 choices[61][3] = "el Congreso y el Senado.";
 answers[61] = choices[61][3];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10255. CONSTITUCION1978";


//  Id pregunta: 10523 Año de creación de pregunta: 2016
 questions[62]= "63)  Se consideran interesados en el procedimiento administrativo:";
 choices[62]= new Array();
 choices[62][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[62][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[62][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[62][3] = "todas son correctas";
 answers[62] = choices[62][0];
 units[62] = "7";
 comments[62] = "Id Pregunta: 10523. LEY 39/2015";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[63]= new Array();
 choices[63][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[63][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[63][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[63][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10047 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[64]= new Array();
 choices[64][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[64][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[64][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[64][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[64] = choices[64][3];
 units[64] = "78";
 comments[64] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10580 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[65]= new Array();
 choices[65][0] = "A la CETIC";
 choices[65][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[65][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[65][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 10580. Estrategia TIC";


//  Id pregunta: 10363 Año de creación de pregunta: 2016
 questions[66]= "67)  Los Reglamentos no se caracterizan por:";
 choices[66]= new Array();
 choices[66][0] = "No poseer alcance general.";
 choices[66][1] = "Ser obligatorios.";
 choices[66][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[66][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10195 Año de creación de pregunta: 2016
 questions[67]= "68)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[67]= new Array();
 choices[67][0] = "Al Gobierno.";
 choices[67][1] = "A las Cortes Generales.";
 choices[67][2] = "Al Poder Judicial.";
 choices[67][3] = "Al Congreso de los Diputados.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10195. CONSTITUCION1978";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[68]= "69)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[68]= new Array();
 choices[68][0] = "Estrasburgo.";
 choices[68][1] = "Bruselas.";
 choices[68][2] = "Luxemburgo.";
 choices[68][3] = "Holanda.";
 answers[68] = choices[68][2];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10307 Año de creación de pregunta: 2016
 questions[69]= "70)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[69]= new Array();
 choices[69][0] = "Seis a&ntilde;os.";
 choices[69][1] = "Cinco a&ntilde;os.";
 choices[69][2] = "Cuatro a&ntilde;os.";
 choices[69][3] = "Ocho a&ntilde;os.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10307. UNION EUROPEA";


//  Id pregunta: 10558 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[70]= new Array();
 choices[70][0] = "En 2015";
 choices[70][1] = "En 2013";
 choices[70][2] = "En 2016";
 choices[70][3] = "En 2007";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10056 Año de creación de pregunta: 2016
 questions[71]= "72)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[71][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[71][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[71][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[71] = choices[71][2];
 units[71] = "83";
 comments[71] = "Id Pregunta: 10056. AGE A1 2015";


//  Id pregunta: 10643 Año de creación de pregunta: 2016
 questions[72]= "73)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[72]= new Array();
 choices[72][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[72][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[72][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[72][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[72] = choices[72][2];
 units[72] = "85";
 comments[72] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10182 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[73]= new Array();
 choices[73][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[73][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[73][2] = "El que hubieren designado las Cortes Generales.";
 choices[73][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[73] = choices[73][1];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10182. CONSTITUCION1978";


//  Id pregunta: 10386 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[74]= new Array();
 choices[74][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[74][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[74][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[74][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


