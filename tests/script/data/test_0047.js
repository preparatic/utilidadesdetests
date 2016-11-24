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

//  Id pregunta: 10312 Año de creación de pregunta: 2016
 questions[0]= "1)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[0]= new Array();
 choices[0][0] = "Por unanimidad.";
 choices[0][1] = "Por mayor&iacute;a cualificada.";
 choices[0][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[0][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10144 Año de creación de pregunta: 2016
 questions[1]= "2)  Sobre el recurso de reposici&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[1][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[1][2] = "Ha desaparecido en la Ley 39/2015";
 choices[1][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[1] = choices[1][0];
 units[1] = "8";
 comments[1] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 10166 Año de creación de pregunta: 2016
 questions[2]= "3)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[2]= new Array();
 choices[2][0] = "Interoperabilidad";
 choices[2][1] = "Integridad";
 choices[2][2] = "Capital humano";
 choices[2][3] = "Trazabilidad";
 answers[2] = choices[2][2];
 units[2] = "19";
 comments[2] = "Id Pregunta: 10166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 10467 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[3]= new Array();
 choices[3][0] = "Tres meses.";
 choices[3][1] = "Nueve meses.";
 choices[3][2] = "Cuatro meses.";
 choices[3][3] = "Seis meses.";
 answers[3] = choices[3][0];
 units[3] = "10";
 comments[3] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


//  Id pregunta: 10286 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[4]= new Array();
 choices[4][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[4][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[4][2] = "Iniciativa europea de libre flujo de datos.";
 choices[4][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10328 Año de creación de pregunta: 2016
 questions[5]= "6)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[5]= new Array();
 choices[5][0] = "El Presidente del Consejo Europeo.";
 choices[5][1] = "La Comisi&oacute;n.";
 choices[5][2] = "El Consejo.";
 choices[5][3] = "El Parlamento Europeo.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10408 Año de creación de pregunta: 2016
 questions[6]= "7)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[6]= new Array();
 choices[6][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[6][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[6][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[6][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10409 Año de creación de pregunta: 2016
 questions[7]= "8)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[7]= new Array();
 choices[7][0] = "Prevenir las conductas discriminatorias.";
 choices[7][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[7][2] = "Todas son correctas.";
 choices[7][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[7] = choices[7][2];
 units[7] = "14";
 comments[7] = "Id Pregunta: 10409. POLITICAS DE IGUALDAD";


//  Id pregunta: 10058 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[8]= new Array();
 choices[8][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[8][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[8][2] = "Servicio de seguridad gestionada";
 choices[8][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[8] = choices[8][1];
 units[8] = "26";
 comments[8] = "Id Pregunta: 10058. AGE A1 2015";


//  Id pregunta: 10213 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[9]= new Array();
 choices[9][0] = "Cinco.";
 choices[9][1] = "Dos.";
 choices[9][2] = "Cuatro.";
 choices[9][3] = "Siete.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10213. CONSTITUCION1978";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[10]= "11)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[10]= new Array();
 choices[10][0] = "Resoluci&oacute;n.";
 choices[10][1] = "Desistimiento o renuncia.";
 choices[10][2] = "Caducidad.";
 choices[10][3] = "Todas las anteriores.";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10626 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[11]= new Array();
 choices[11][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[11][1] = "La Direcci&oacute;n de la Competencia.";
 choices[11][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[11][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[11] = choices[11][0];
 units[11] = "121";
 comments[11] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10617 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[12]= new Array();
 choices[12][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[12][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[12][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[12][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[12] = choices[12][0];
 units[12] = "84";
 comments[12] = "Id Pregunta: 10617. Junta de Extremadura A1 2015";


//  Id pregunta: 10512 Año de creación de pregunta: 2016
 questions[13]= "14)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[13]= new Array();
 choices[13][0] = "solo mediante ley";
 choices[13][1] = "reglamentariamente";
 choices[13][2] = "mediante ley o reglamentariamente";
 choices[13][3] = "ninguna es correcta";
 answers[13] = choices[13][1];
 units[13] = "7";
 comments[13] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10006 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[14]= new Array();
 choices[14][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[14][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[14][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[14][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[14] = choices[14][0];
 units[14] = "91";
 comments[14] = "Id Pregunta: 10006. AGE A1 2015";


//  Id pregunta: 10076 Año de creación de pregunta: 2016
 questions[15]= "16)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[15]= new Array();
 choices[15][0] = "Estrat&eacute;gico";
 choices[15][1] = "Operativo";
 choices[15][2] = "T&aacute;ctico";
 choices[15][3] = "Tecnol&oacute;gico";
 answers[15] = choices[15][0];
 units[15] = "36";
 comments[15] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[16]= "17)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[16]= new Array();
 choices[16][0] = "La Comisi&oacute;n.";
 choices[16][1] = "El Consejo de Europa.";
 choices[16][2] = "El Consejo Europeo.";
 choices[16][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[17]= new Array();
 choices[17][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[17][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[17][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[17][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[17] = choices[17][2];
 units[17] = "43";
 comments[17] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[18]= new Array();
 choices[18][0] = "PostgreSQL";
 choices[18][1] = "Datawarehouse";
 choices[18][2] = "Snowflake";
 choices[18][3] = "CouchDB";
 answers[18] = choices[18][0];
 units[18] = "61";
 comments[18] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10099 Año de creación de pregunta: 2016
 questions[19]= "20)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[19][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[19][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[19][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[19] = choices[19][2];
 units[19] = "26";
 comments[19] = "Id Pregunta: 10099. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10534 Año de creación de pregunta: 2016
 questions[20]= "21)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[20]= new Array();
 choices[20][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[20][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[20][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[20][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[20] = choices[20][2];
 units[20] = "7";
 comments[20] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Es un framework de software libre.";
 choices[21][1] = "Es una base de datos NoSQL.";
 choices[21][2] = "Est&aacute; basado en MapReduce.";
 choices[21][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10063 Año de creación de pregunta: 2016
 questions[22]= "23)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Infrastructure as a Service (IaaS)";
 choices[22][1] = "Platform as a Service (PaaS)";
 choices[22][2] = "Software as a Service (SaaS)";
 choices[22][3] = "Application as a Service (AaaS)";
 answers[22] = choices[22][1];
 units[22] = "52";
 comments[22] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10316 Año de creación de pregunta: 2016
 questions[23]= "24)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[23]= new Array();
 choices[23][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[23][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[23][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[23][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10316. UNION EUROPEA";


//  Id pregunta: 10287 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[24]= new Array();
 choices[24][0] = "Versi&oacute;n digital prioritaria.";
 choices[24][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[24][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[24][3] = "Apertura y transparencia.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10075 Año de creación de pregunta: 2016
 questions[25]= "26)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[25]= new Array();
 choices[25][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[25][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[25][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[25][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[25] = choices[25][0];
 units[25] = "35";
 comments[25] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10024 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[26]= new Array();
 choices[26][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[26][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[26][2] = "Gestionar el Registro de Operadores.";
 choices[26][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[26] = choices[26][3];
 units[26] = "121";
 comments[26] = "Id Pregunta: 10024. AGE A1 2015";


//  Id pregunta: 10305 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[27]= new Array();
 choices[27][0] = "Estrasburgo.";
 choices[27][1] = "Bruselas.";
 choices[27][2] = "Luxemburgo.";
 choices[27][3] = "Par&iacute;s.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[28]= new Array();
 choices[28][0] = "las personas jur&iacute;dicas ";
 choices[28][1] = "las entidades con personalidad jur&iacute;dica";
 choices[28][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[28][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[28] = choices[28][1];
 units[28] = "7";
 comments[28] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10204 Año de creación de pregunta: 2016
 questions[29]= "30)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[29]= new Array();
 choices[29][0] = "Decretos Legislativos.";
 choices[29][1] = "Decretos-leyes.";
 choices[29][2] = "Leyes de bases.";
 choices[29][3] = "Reales Decretos del Consejo de Ministros.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10204. CONSTITUCION1978";


//  Id pregunta: 10562 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[30]= new Array();
 choices[30][0] = "Entre 1973 y 1978";
 choices[30][1] = "Entre 1992 y 1996";
 choices[30][2] = "Entre 1978 y 1985";
 choices[30][3] = "Entre 2008 y 2013";
 answers[30] = choices[30][2];
 units[30] = "12";
 comments[30] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


//  Id pregunta: 10190 Año de creación de pregunta: 2016
 questions[31]= "32)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[31]= new Array();
 choices[31][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[31][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[31][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[31][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 10190. CONSTITUCION1978";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[32]= new Array();
 choices[32][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[32][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[32][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[32][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[32] = choices[32][3];
 units[32] = "26";
 comments[32] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10070 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[33]= new Array();
 choices[33][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[33][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[33][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[33][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[33] = choices[33][0];
 units[33] = "75";
 comments[33] = "Id Pregunta: 10070. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[34]= "35)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[34]= new Array();
 choices[34][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[34][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[34][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[34][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[34] = choices[34][2];
 units[34] = "43";
 comments[34] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10477 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[35]= new Array();
 choices[35][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[35][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[35][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[35][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


//  Id pregunta: 10496 Año de creación de pregunta: 2016
 questions[36]= "37)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[36]= new Array();
 choices[36][0] = "Las respuestas a) y b) son correctas.";
 choices[36][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[36][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[36][3] = "Las respuestas a) y b) no son correctas.";
 answers[36] = choices[36][0];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10017 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[37]= new Array();
 choices[37][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[37][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[37][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[37][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[37] = choices[37][3];
 units[37] = "44";
 comments[37] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[38]= new Array();
 choices[38][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[38][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[38][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[38][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10356 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[39]= new Array();
 choices[39][0] = "No se aplican directamente en los Estados.";
 choices[39][1] = "No son vinculantes.";
 choices[39][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[39][3] = "Tienen alcance general.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10041 Año de creación de pregunta: 2016
 questions[40]= "41)  En cuanto al an&aacute;lisis DAFO:";
 choices[40]= new Array();
 choices[40][0] = "Considera detallada y exclusivamente factores internos.";
 choices[40][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[40][2] = "Considera detallada y exclusivamente factores externos.";
 choices[40][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[40] = choices[40][1];
 units[40] = "83";
 comments[40] = "Id Pregunta: 10041. AGE A1 2015";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[41]= "42)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[41]= new Array();
 choices[41][0] = "Pas&oacute; de 518 a 626.";
 choices[41][1] = "Pas&oacute; de 434 a 518.";
 choices[41][2] = "Pas&oacute; de 345 a 512.";
 choices[41][3] = "Pas&oacute; de 435 a 610.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10135 Año de creación de pregunta: 2016
 questions[42]= "43)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[42]= new Array();
 choices[42][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[42][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[42][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[42][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[42] = choices[42][0];
 units[42] = "12";
 comments[42] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10214 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[43]= new Array();
 choices[43][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[43][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[43][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[43][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10084 Año de creación de pregunta: 2016
 questions[44]= "45)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[44]= new Array();
 choices[44][0] = "Interchange of Data between Administrations (IDA)";
 choices[44][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[44][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[44][3] = "Interoperability Electronic European Solution (IEES)";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[45]= "46)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[45]= new Array();
 choices[45][0] = "Estrasburgo.";
 choices[45][1] = "Bruselas.";
 choices[45][2] = "Luxemburgo.";
 choices[45][3] = "Holanda.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10559 Año de creación de pregunta: 2016
 questions[46]= "47)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[46]= new Array();
 choices[46][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[46][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[46][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[46][3] = "Todos los anteriores";
 answers[46] = choices[46][3];
 units[46] = "19";
 comments[46] = "Id Pregunta: 10559. Agenda Digital";


//  Id pregunta: 10382 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[47]= new Array();
 choices[47][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[47][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[47][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[47][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[47] = choices[47][0];
 units[47] = "14";
 comments[47] = "Id Pregunta: 10382. POLITICAS DE IGUALDAD";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[48]= new Array();
 choices[48][0] = "Art&iacute;culo 14 CE.";
 choices[48][1] = "Art&iacute;culo 9.2 CE.";
 choices[48][2] = "Art&iacute;culo 9.1 CE.";
 choices[48][3] = "Art&iacute;culo 13 CE.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10030 Año de creación de pregunta: 2016
 questions[49]= "50)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[49]= new Array();
 choices[49][0] = "SMB3";
 choices[49][1] = "AFP";
 choices[49][2] = "NFS";
 choices[49][3] = "FTP";
 answers[49] = choices[49][0];
 units[49] = "59";
 comments[49] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10404 Año de creación de pregunta: 2016
 questions[50]= "51)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[50]= new Array();
 choices[50][0] = "El Tratado de Roma, 1957.";
 choices[50][1] = "El Acta &Uacute;nica Europea.";
 choices[50][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[50][3] = "Ninguna es correcta.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10404. POLITICAS DE IGUALDAD";


//  Id pregunta: 10564 Año de creación de pregunta: 2016
 questions[51]= "52)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[51]= new Array();
 choices[51][0] = "Los ocupados y los parados activos";
 choices[51][1] = "S&oacute;lo los ocupados";
 choices[51][2] = "Los ocupados y los inactivos";
 choices[51][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[51] = choices[51][0];
 units[51] = "12";
 comments[51] = "Id Pregunta: 10564. Modelo econ&oacute;mico";


//  Id pregunta: 10601 Año de creación de pregunta: 2016
 questions[52]= "53)  Los criptosistemas pueden clasificarse en:";
 choices[52]= new Array();
 choices[52][0] = "Concretos, Estables e Inestables.";
 choices[52][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[52][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[52][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[52] = choices[52][3];
 units[52] = "76";
 comments[52] = "Id Pregunta: 10601. Junta de Extremadura A1 2015";


//  Id pregunta: 10508 Año de creación de pregunta: 2016
 questions[53]= "54)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[53]= new Array();
 choices[53][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[53][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[53][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[53][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10508. PRESUPUESTOS GENERALES";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[54]= "55)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[54]= new Array();
 choices[54][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[54][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[54][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[54][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[54] = choices[54][2];
 units[54] = "57";
 comments[54] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10385 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[55]= new Array();
 choices[55][0] = "Anualmente por el Consejo de Ministros";
 choices[55][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[55][2] = "Al final de cada legislatura por el Gobierno";
 choices[55][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 10385. POLITICAS DE IGUALDAD";


//  Id pregunta: 10429 Año de creación de pregunta: 2016
 questions[56]= "57)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[56]= new Array();
 choices[56][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[56][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[56][2] = "Ambas son correctas.";
 choices[56][3] = "Ambas son incorrectas.";
 answers[56] = choices[56][0];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10016 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[57][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[57][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[57][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[57] = choices[57][3];
 units[57] = "19";
 comments[57] = "Id Pregunta: 10016. AGE A1 2015";


//  Id pregunta: 10240 Año de creación de pregunta: 2016
 questions[58]= "59)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[58]= new Array();
 choices[58][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[58][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[58][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[58][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 10240. CONSTITUCION1978";


//  Id pregunta: 10353 Año de creación de pregunta: 2016
 questions[59]= "60)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[59]= new Array();
 choices[59][0] = "El Parlamento Europeo.";
 choices[59][1] = "Todas las respuestas son correctas.";
 choices[59][2] = "La Comisi&oacute;n Europea.";
 choices[59][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 10353. UNION EUROPEA";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[60]= new Array();
 choices[60][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[60][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[60][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[60][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[61]= "62)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[61]= new Array();
 choices[61][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[61][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[61][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[61][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[61] = choices[61][1];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10268 Año de creación de pregunta: 2016
 questions[62]= "63)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[62]= new Array();
 choices[62][0] = "Cuatro.";
 choices[62][1] = "Una.";
 choices[62][2] = "Cinco.";
 choices[62][3] = "Nueve.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10104 Año de creación de pregunta: 2016
 questions[63]= "64)  Son bases de datos NoSQL:";
 choices[63]= new Array();
 choices[63][0] = "MongoDB y Maria DB";
 choices[63][1] = "HBase y Dynamo";
 choices[63][2] = "MariaDB, Cassandra y BigTable";
 choices[63][3] = "La A) y la C)";
 answers[63] = choices[63][1];
 units[63] = "73";
 comments[63] = "Id Pregunta: 10104. ";


//  Id pregunta: 10475 Año de creación de pregunta: 2016
 questions[64]= "65)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Anualmente.";
 choices[64][1] = "Ninguna de las respuestas es correcta.";
 choices[64][2] = "Trimestralmente.";
 choices[64][3] = "Semestralmente.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10123 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[65]= new Array();
 choices[65][0] = "Un representante de la Administraci&oacute;n local.";
 choices[65][1] = "Un representante del Tribunal de Cuentas.";
 choices[65][2] = "Un representante del Defensor del Pueblo.";
 choices[65][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[65] = choices[65][0];
 units[65] = "22";
 comments[65] = "Id Pregunta: 10123. ";


//  Id pregunta: 10179 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[66]= new Array();
 choices[66][0] = "Una ley orginaria.";
 choices[66][1] = "Una ley org&aacute;nica.";
 choices[66][2] = "Una ley de bases.";
 choices[66][3] = "Una ley de transferencia.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10228 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[67]= new Array();
 choices[67][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[67][1] = "La delimitaci&oacute;n de su territorio.";
 choices[67][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[67][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10228. CONSTITUCION1978";


//  Id pregunta: 10283 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[68]= new Array();
 choices[68][0] = "Crecimiento inteligente.";
 choices[68][1] = "Crecimiento inclusivo.";
 choices[68][2] = "Crecimiento sostenible.";
 choices[68][3] = "Crecimiento integrador.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10283. UNION EUROPEA";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[69]= "70)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[69]= new Array();
 choices[69][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[69][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[69][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[69][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[69] = choices[69][1];
 units[69] = "63";
 comments[69] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10343 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[70]= new Array();
 choices[70][0] = "23";
 choices[70][1] = "20";
 choices[70][2] = "14";
 choices[70][3] = "18";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10031 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; es MongoDB?";
 choices[71]= new Array();
 choices[71][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[71][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[71][2] = "Un sistema gestor de base de datos relacional.";
 choices[71][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[71] = choices[71][1];
 units[71] = "73";
 comments[71] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10148 Año de creación de pregunta: 2016
 questions[72]= "73)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[72]= new Array();
 choices[72][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[72][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[72][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[72][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[72] = choices[72][2];
 units[72] = "7";
 comments[72] = "Id Pregunta: 10148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 10622 Año de creación de pregunta: 2016
 questions[73]= "74)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[73]= new Array();
 choices[73][0] = "Entradas (entities).";
 choices[73][1] = "Atributos (attribs).";
 choices[73][2] = "M&oacute;dulos (modules).";
 choices[73][3] = "Objetos (objects).";
 answers[73] = choices[73][0];
 units[73] = "74";
 comments[73] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10282 Año de creación de pregunta: 2016
 questions[74]= "75)  Sobre el Plan Juncker:";
 choices[74]= new Array();
 choices[74][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[74][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[74][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[74][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10282. UNION EUROPEA";


