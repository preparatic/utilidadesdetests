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

//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[0]= new Array();
 choices[0][0] = "Art&iacute;culo 14 CE.";
 choices[0][1] = "Art&iacute;culo 9.2 CE.";
 choices[0][2] = "Art&iacute;culo 9.1 CE.";
 choices[0][3] = "Art&iacute;culo 13 CE.";
 answers[0] = choices[0][2];
 units[0] = "14";
 comments[0] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[1]= "2)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[1]= new Array();
 choices[1][0] = "De ocho a&ntilde;os.";
 choices[1][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[1][2] = "Ambas son correctas.";
 choices[1][3] = "No existe un l&iacute;mite.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[2]= "3)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[2]= new Array();
 choices[2][0] = "Al Presidente del Gobierno.";
 choices[2][1] = "A las Cortes Generales";
 choices[2][2] = "A los electores.";
 choices[2][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[2] = choices[2][3];
 units[2] = "1";
 comments[2] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[3]= "4)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[3]= new Array();
 choices[3][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[3][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[3][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[3][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[4]= new Array();
 choices[4][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[4][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[4][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[4][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[4] = choices[4][3];
 units[4] = "46";
 comments[4] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[5]= "6)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[5][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[5][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[5][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[5] = choices[5][1];
 units[5] = "35";
 comments[5] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[6]= new Array();
 choices[6][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[6][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[6][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[6][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[6] = choices[6][0];
 units[6] = "77";
 comments[6] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[7]= "8)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[7]= new Array();
 choices[7][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[7][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[7][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[7][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[7] = choices[7][3];
 units[7] = "12";
 comments[7] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[8]= "9)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[8]= new Array();
 choices[8][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[8][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[8][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[8][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[8] = choices[8][1];
 units[8] = "19";
 comments[8] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[9]= new Array();
 choices[9][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[9][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[9][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[9][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[9] = choices[9][1];
 units[9] = "18, 20";
 comments[9] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[10]= "11)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[10]= new Array();
 choices[10][0] = "Subsecretario";
 choices[10][1] = "Subdirector general";
 choices[10][2] = "Secretario de Estado";
 choices[10][3] = "ninguna es correcta";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[11]= "12)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[11]= new Array();
 choices[11][0] = "Presencia equilibrada.";
 choices[11][1] = "Presencia paritaria.";
 choices[11][2] = "Presencia consensuada.";
 choices[11][3] = "presencia horizontal.";
 answers[11] = choices[11][0];
 units[11] = "14";
 comments[11] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[12]= "13)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[12]= new Array();
 choices[12][0] = "Acuerdos cualificados.";
 choices[12][1] = "Acuerdos ponderados.";
 choices[12][2] = "Valoraci&oacute;n de los votos.";
 choices[12][3] = "Ponderaci&oacute;n de los votos.";
 answers[12] = choices[12][3];
 units[12] = "5";
 comments[12] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[13]= new Array();
 choices[13][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[13][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[13][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[13][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[13] = choices[13][1];
 units[13] = "19";
 comments[13] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[14]= new Array();
 choices[14][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[14][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[14][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][1];
 units[14] = "19";
 comments[14] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[15][1] = "Auditor&iacute;a operativa.";
 choices[15][2] = "Auditor&iacute;a de cumplimiento.";
 choices[15][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[16]= "17)  Son servicios declarados compartidos:";
 choices[16]= new Array();
 choices[16][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[16][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[16][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[16][3] = "Todos los anteriores";
 answers[16] = choices[16][3];
 units[16] = "19";
 comments[16] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[17]= new Array();
 choices[17][0] = "Conferencia de Presidentes.";
 choices[17][1] = "Convenios de colaboraci&oacute;n.";
 choices[17][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[17][3] = "Conferencias Sectoriales.";
 answers[17] = choices[17][0];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[18]= new Array();
 choices[18][0] = "Entre 1973 y 1978";
 choices[18][1] = "Entre 1992 y 1996";
 choices[18][2] = "Entre 1978 y 1985";
 choices[18][3] = "Entre 2008 y 2013";
 answers[18] = choices[18][2];
 units[18] = "12";
 comments[18] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[19]= "20)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[19]= new Array();
 choices[19][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[19][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[19][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[19][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[20]= "21)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[20]= new Array();
 choices[20][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[20][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[20][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[20][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[20] = choices[20][2];
 units[20] = "27";
 comments[20] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[21]= new Array();
 choices[21][0] = "Data Mining (miner&iacute;a de datos)";
 choices[21][1] = "Business Intelligence (inteligencia de negocio)";
 choices[21][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[21][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[21] = choices[21][1];
 units[21] = "72";
 comments[21] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[22]= "23)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[22]= new Array();
 choices[22][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[22][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[22][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[22][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[22] = choices[22][2];
 units[22] = "7";
 comments[22] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[23]= "24)  La Administraci&oacute;n General del Estado se organiza:";
 choices[23]= new Array();
 choices[23][0] = "en Ministerios";
 choices[23][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[23][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[23][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[23] = choices[23][1];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[24]= "25)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[24]= new Array();
 choices[24][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[24][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[24][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[24][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[24] = choices[24][3];
 units[24] = "62";
 comments[24] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[25]= new Array();
 choices[25][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[25][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[25][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[25][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[25] = choices[25][1];
 units[25] = "84";
 comments[25] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[26]= "27)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[26]= new Array();
 choices[26][0] = "Ley org&aacute;nica.";
 choices[26][1] = "Ley ordinaria.";
 choices[26][2] = "Ley de bases.";
 choices[26][3] = "Ley marco.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[27]= "28)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Clustering";
 choices[27][1] = "Deduplicaci&oacute;n";
 choices[27][2] = "Virtualizaci&oacute;n";
 choices[27][3] = "Contenerizaci&oacute;n";
 answers[27] = choices[27][2];
 units[27] = "124";
 comments[27] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[28]= "29)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[28]= new Array();
 choices[28][0] = "Cabr&aacute; recurso de alzada";
 choices[28][1] = "Cabr&aacute; el nuevo protesto";
 choices[28][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[28][3] = "No cabr&aacute; recurso alguno";
 answers[28] = choices[28][3];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[29]= new Array();
 choices[29][0] = "Lean startup";
 choices[29][1] = "Business Model Canvas";
 choices[29][2] = "Dynamic system Development method";
 choices[29][3] = "Lean software development";
 answers[29] = choices[29][2];
 units[29] = "34";
 comments[29] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[30]= new Array();
 choices[30][0] = "Ley 3/2015";
 choices[30][1] = "Ley 6/2007";
 choices[30][2] = "Ley 5/1984";
 choices[30][3] = "Ley 5/2006";
 answers[30] = choices[30][0];
 units[30] = "22";
 comments[30] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[31]= "32)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[31]= new Array();
 choices[31][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[31][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[31][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[31][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[32]= new Array();
 choices[32][0] = "Las Cortes Generales.";
 choices[32][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[32][2] = "El Gobierno.";
 choices[32][3] = "El Congreso de los Diputados.";
 answers[32] = choices[32][0];
 units[32] = "10";
 comments[32] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[33]= new Array();
 choices[33][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[33][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[33][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[33][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[34]= "35)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[34]= new Array();
 choices[34][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[34][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[34][2] = "Absoluta frente a cualquier otro gasto.";
 choices[34][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[35]= "36)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[35]= new Array();
 choices[35][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[35][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[35][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[35][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[36]= "37)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[36]= new Array();
 choices[36][0] = "Estrasburgo.";
 choices[36][1] = "Bruselas.";
 choices[36][2] = "Luxemburgo.";
 choices[36][3] = "Holanda.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[37]= "38)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[37]= new Array();
 choices[37][0] = "Ejecuci&oacute;n";
 choices[37][1] = "Adjudicaci&oacute;n";
 choices[37][2] = "Licitaci&oacute;n";
 choices[37][3] = "Formalizaci&oacute;n";
 answers[37] = choices[37][3];
 units[37] = "37";
 comments[37] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Europeo.";
 choices[38][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[38][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[38][3] = "El Parlamento Europeo.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[39]= new Array();
 choices[39][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[39][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[39][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[39][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[39] = choices[39][2];
 units[39] = "85";
 comments[39] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[40]= "41)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[40]= new Array();
 choices[40][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[40][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[40][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[40][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[41]= new Array();
 choices[41][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[41][1] = "Calidad de los servicios p&uacute;blicos";
 choices[41][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[41][3] = "Servicio efectivo a los ciudadanos";
 answers[41] = choices[41][1];
 units[41] = "18, 20";
 comments[41] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[42]= "43)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[42]= new Array();
 choices[42][0] = "un art&iacute;culo";
 choices[42][1] = "dos art&iacute;culos";
 choices[42][2] = "tres art&iacute;culos";
 choices[42][3] = "cuatro art&iacute;culos";
 answers[42] = choices[42][1];
 units[42] = "7";
 comments[42] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[43]= new Array();
 choices[43][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[43][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[43][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[43][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[44]= "45)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[44]= new Array();
 choices[44][0] = "Un Reglamento.";
 choices[44][1] = "Un Decreto.";
 choices[44][2] = "Una Ley.";
 choices[44][3] = "Un Real-Decreto.";
 answers[44] = choices[44][2];
 units[44] = "5";
 comments[44] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[45]= "46)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[45]= new Array();
 choices[45][0] = "Las respuestas a) y b) son correctas.";
 choices[45][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[45][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[45][3] = "Las respuestas a) y b) no son correctas.";
 answers[45] = choices[45][0];
 units[45] = "10";
 comments[45] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[46]= new Array();
 choices[46][0] = "117.5";
 choices[46][1] = "117.1";
 choices[46][2] = "116";
 choices[46][3] = "15";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[47]= "48)  El sector p&uacute;blico institucional se integra por:";
 choices[47]= new Array();
 choices[47][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[47][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[47][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[47][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[47] = choices[47][1];
 units[47] = "7";
 comments[47] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[48]= new Array();
 choices[48][0] = "Directiva 95/46/CE";
 choices[48][1] = "Directiva 1999/93/CE";
 choices[48][2] = "Directiva 2000/31/CE";
 choices[48][3] = "Directiva 2003/98/CE";
 answers[48] = choices[48][1];
 units[48] = "77";
 comments[48] = "Id Pregunta: 682. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[49]= new Array();
 choices[49][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[49][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[49][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[49][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[49] = choices[49][0];
 units[49] = "73";
 comments[49] = "Id Pregunta: 654. ";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[50]= "51)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[50][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[50][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[50][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[50] = choices[50][3];
 units[50] = "22";
 comments[50] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[51]= "52)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[51]= new Array();
 choices[51][0] = "B&aacute;sico";
 choices[51][1] = "Medio";
 choices[51][2] = "Alto";
 choices[51][3] = "A los niveles medio y alto";
 answers[51] = choices[51][2];
 units[51] = "35";
 comments[51] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[52]= "53)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[52]= new Array();
 choices[52][0] = "El derecho a la propiedad privada.";
 choices[52][1] = "El derecho de asociaci&oacute;n.";
 choices[52][2] = "El derecho de fundaci&oacute;n.";
 choices[52][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[53]= "54)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[53]= new Array();
 choices[53][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[53][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[53][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[53][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[54]= "55)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[54]= new Array();
 choices[54][0] = "los Ministros y los Secretarios de Estado";
 choices[54][1] = "los Subsecretarios y Secretarios generales";
 choices[54][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[54][3] = "los Directores generales";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[55]= "56)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[55]= new Array();
 choices[55][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[55][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[55][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[55][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[55] = choices[55][3];
 units[55] = "43";
 comments[55] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[56]= "57)  En qu&eacute; consiste el principio BASE:";
 choices[56]= new Array();
 choices[56][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[56][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[56][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[56][3] = "Todas las anteriores son falsas";
 answers[56] = choices[56][3];
 units[56] = "73";
 comments[56] = "Id Pregunta: 103. ";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[57]= new Array();
 choices[57][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[57][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[57][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[57][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[57] = choices[57][0];
 units[57] = "26";
 comments[57] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[58]= "59)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[58]= new Array();
 choices[58][0] = "La Ley Org&aacute;nica 2/2011";
 choices[58][1] = "La Ley Org&aacute;nica 2/2012";
 choices[58][2] = "La Ley Org&aacute;nica 3/2012";
 choices[58][3] = "La Ley Org&aacute;nica 2/2002";
 answers[58] = choices[58][1];
 units[58] = "12";
 comments[58] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[59]= "60)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[59]= new Array();
 choices[59][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[59][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[59][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[59][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[59] = choices[59][1];
 units[59] = "26";
 comments[59] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[60]= new Array();
 choices[60][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[60][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[60][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[60][3] = "El Instituto de la Mujer de Extremadura.";
 answers[60] = choices[60][3];
 units[60] = "14";
 comments[60] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[61][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "La A y B son incorrectas.";
 answers[61] = choices[61][2];
 units[61] = "14";
 comments[61] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[62]= "63)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[62][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[62][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[62][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[63]= "64)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[63]= new Array();
 choices[63][0] = "150 trabajadores/as.";
 choices[63][1] = "200 trabajadores/as.";
 choices[63][2] = "250 trabajadores/as.";
 choices[63][3] = "300 trabajadores/as.";
 answers[63] = choices[63][2];
 units[63] = "14";
 comments[63] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[64]= new Array();
 choices[64][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[64][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[64][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[64][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[65]= "66)  ITIL v3, define:";
 choices[65]= new Array();
 choices[65][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[65][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[65][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[65][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[65] = choices[65][0];
 units[65] = "101";
 comments[65] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[66]= "67)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[66]= new Array();
 choices[66][0] = "Relaciones base y vistas.";
 choices[66][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[66][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[66][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[66] = choices[66][3];
 units[66] = "60";
 comments[66] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[67]= "68)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[67]= new Array();
 choices[67][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[67][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[67][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[67][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[68]= new Array();
 choices[68][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[68][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[68][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[68][3] = "Todas las respuestas son correctas.";
 answers[68] = choices[68][2];
 units[68] = "42";
 comments[68] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[69]= new Array();
 choices[69][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[69][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[69][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[69][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[69] = choices[69][3];
 units[69] = "10";
 comments[69] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[70]= new Array();
 choices[70][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[70][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[70][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[70][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[70] = choices[70][2];
 units[70] = "22";
 comments[70] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[71]= new Array();
 choices[71][0] = "A nivel de secci&oacute;n de programa.";
 choices[71][1] = "A nivel de grupo de programa.";
 choices[71][2] = "Ninguna de las respuestas es correcta.";
 choices[71][3] = "A nivel de programa.";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[72]= "73)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[72]= new Array();
 choices[72][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[72][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[72][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[72][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[72] = choices[72][0];
 units[72] = "35";
 comments[72] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[73]= "74)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[73]= new Array();
 choices[73][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[73][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[73][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[73][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[73] = choices[73][0];
 units[73] = "7";
 comments[73] = "Id Pregunta: 671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[74]= "75)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[74]= new Array();
 choices[74][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[74][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[74][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[74][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


