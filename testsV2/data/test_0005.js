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

//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[0]= new Array();
 choices[0][0] = "las Cortes generales.";
 choices[0][1] = "los partidos pol&iacute;ticos.";
 choices[0][2] = "los sindicatos.";
 choices[0][3] = "las Comunidades Aut&oacute;nomas.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[1]= "2)  Componen la Comisi&oacute;n Europea:";
 choices[1]= new Array();
 choices[1][0] = "Un Comisario por cada Estado miembro.";
 choices[1][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[1][2] = "Dos Comisarios por cada Estado miembro.";
 choices[1][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[2]= new Array();
 choices[2][0] = "Transferencias de cr&eacute;dito.";
 choices[2][1] = "Incorporaciones de cr&eacute;dito.";
 choices[2][2] = "Imputaciones de cr&eacute;dito.";
 choices[2][3] = "Ampliaciones de cr&eacute;dito.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[3]= new Array();
 choices[3][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[3][1] = "La Direcci&oacute;n de la Competencia.";
 choices[3][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[3][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[3] = choices[3][0];
 units[3] = "121";
 comments[3] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[4]= new Array();
 choices[4][0] = "Programa de Educaci&oacute;n Digital";
 choices[4][1] = "Programa de Salud y Bienestar Social";
 choices[4][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[4][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


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


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[6]= new Array();
 choices[6][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[6][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[6][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[6][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[6] = choices[6][3];
 units[6] = "22";
 comments[6] = "Id Pregunta: 126. ";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Aplicaci&oacute;n";
 choices[7][1] = "Sesi&oacute;n";
 choices[7][2] = "Presentaci&oacute;n";
 choices[7][3] = "Transporte";
 answers[7] = choices[7][2];
 units[7] = "105";
 comments[7] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[8]= new Array();
 choices[8][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[8][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[8][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[8][3] = "La tasa de desempleo ronda el 20%";
 answers[8] = choices[8][2];
 units[8] = "12";
 comments[8] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[9]= new Array();
 choices[9][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[9][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[9][2] = "Servicio de seguridad gestionada";
 choices[9][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[9] = choices[9][1];
 units[9] = "26";
 comments[9] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[10]= new Array();
 choices[10][0] = "Una ley orginaria.";
 choices[10][1] = "Una ley org&aacute;nica.";
 choices[10][2] = "Una ley de bases.";
 choices[10][3] = "Una ley de transferencia.";
 answers[10] = choices[10][1];
 units[10] = "1";
 comments[10] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[11]= "12)  El plan nacional de ciudades inteligentes...";
 choices[11]= new Array();
 choices[11][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[11][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[11][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[11][3] = "No existe";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[12]= "13)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[12]= new Array();
 choices[12][0] = "Prevenir las conductas discriminatorias.";
 choices[12][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[12][2] = "Todas son correctas.";
 choices[12][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[13]= "14)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[13]= new Array();
 choices[13][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[13][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[13][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[13][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[14]= "15)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[14]= new Array();
 choices[14][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[14][1] = "Ninguna de las respuestas es correcta.";
 choices[14][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[14][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[15]= "16)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[15]= new Array();
 choices[15][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[15][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[15][2] = "El Presidente del Gobierno";
 choices[15][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[15] = choices[15][1];
 units[15] = "26";
 comments[15] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[16]= "17)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[16]= new Array();
 choices[16][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[16][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[16][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[16][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[16] = choices[16][0];
 units[16] = "92";
 comments[16] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[17]= "18)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[17][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[17][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[17][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[17] = choices[17][1];
 units[17] = "7";
 comments[17] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[18]= "19)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[18]= new Array();
 choices[18][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[18][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[18][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[18][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[18] = choices[18][2];
 units[18] = "14";
 comments[18] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[19]= "20)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "Con el a&ntilde;o anterior.";
 choices[19][1] = "Con los tres a&ntilde;os anteriores.";
 choices[19][2] = "Con el a&ntilde;o natural.";
 choices[19][3] = "Con los dos a&ntilde;os anteriores.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[20]= new Array();
 choices[20][0] = "Data Mining (miner&iacute;a de datos)";
 choices[20][1] = "Business Intelligence (inteligencia de negocio)";
 choices[20][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[20][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[20] = choices[20][1];
 units[20] = "72";
 comments[20] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[21]= new Array();
 choices[21][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[21][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[21][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[21][3] = "Todas las respuestas son correctas.";
 answers[21] = choices[21][2];
 units[21] = "42";
 comments[21] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[22]= "23)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[22]= new Array();
 choices[22][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[22][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[22][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[22][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[22] = choices[22][2];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[23]= new Array();
 choices[23][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[23][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[23][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[23][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[24]= "25)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[24]= new Array();
 choices[24][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[24][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[24][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[24][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[24] = choices[24][3];
 units[24] = "10";
 comments[24] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[25]= "26)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[25]= new Array();
 choices[25][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[25][1] = "La libertad sexual y religiosa.";
 choices[25][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[25][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[25] = choices[25][3];
 units[25] = "1";
 comments[25] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[26]= "27)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[26]= new Array();
 choices[26][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[26][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[26][2] = "el Subdirector General que el Delegado designe";
 choices[26][3] = "el Secretario de Estado";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[27]= "28)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[27]= new Array();
 choices[27][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[27][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[27][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[27][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[27] = choices[27][2];
 units[27] = "57";
 comments[27] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Universidades p&uacute;blicas:";
 choices[28]= new Array();
 choices[28][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[28][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[28][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[28][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[28] = choices[28][1];
 units[28] = "7";
 comments[28] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[29]= "30)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[29]= new Array();
 choices[29][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[29][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[29][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[29][3] = "Todas son correctas.";
 answers[29] = choices[29][3];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[30]= new Array();
 choices[30][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[30][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[30][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[30][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[30] = choices[30][2];
 units[30] = "71";
 comments[30] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[31]= new Array();
 choices[31][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[31][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[31][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[31][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[31] = choices[31][3];
 units[31] = "56";
 comments[31] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[32]= new Array();
 choices[32][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[32][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[32][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[32][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[32] = choices[32][2];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[33]= new Array();
 choices[33][0] = "La Seguridad Social";
 choices[33][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[33][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[33][3] = "El Banco de Espa&ntilde;a";
 answers[33] = choices[33][3];
 units[33] = "15";
 comments[33] = "Id Pregunta: 113. ";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[34]= "35)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[34]= new Array();
 choices[34][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[34][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[34][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[34][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[34] = choices[34][2];
 units[34] = "101";
 comments[34] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[35]= new Array();
 choices[35][0] = "Varios namenodes y varios datanodes por cluster";
 choices[35][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[35][2] = "1 namenode y varios datanodes por cluster";
 choices[35][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[35] = choices[35][2];
 units[35] = "73";
 comments[35] = "Id Pregunta: 661. ";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[36]= "37)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[36]= new Array();
 choices[36][0] = "GROUP BY.";
 choices[36][1] = "COUNT.";
 choices[36][2] = "WHERE.";
 choices[36][3] = "DISTINCT.";
 answers[36] = choices[36][0];
 units[36] = "60";
 comments[36] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[37][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[37][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[37][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[37] = choices[37][2];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; facilita un ORM?";
 choices[38]= new Array();
 choices[38][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[38][1] = "Conversi&oacute;n de objetos a documentos";
 choices[38][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[38][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[38] = choices[38][0];
 units[38] = "62";
 comments[38] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[39]= "40)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[39]= new Array();
 choices[39][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[39][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[39][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[39][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[40]= "41)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[40]= new Array();
 choices[40][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[40][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[40][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[40][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[41]= "42)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[41]= new Array();
 choices[41][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[41][1] = "Publicidad de las normas.";
 choices[41][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[41][3] = "Coordinaci&oacute;n normativa.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[42]= new Array();
 choices[42][0] = "Agenda digital para Europa";
 choices[42][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[42][2] = "Juventud en movimiento";
 choices[42][3] = "Agenda Web 2.0";
 answers[42] = choices[42][3];
 units[42] = "19";
 comments[42] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[43]= "44)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[43][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[43][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[43][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[43] = choices[43][3];
 units[43] = "22";
 comments[43] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[44]= "45)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[44]= new Array();
 choices[44][0] = "Proveer de manera compartida servicios comunes";
 choices[44][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[44][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[44][3] = "Transparencia";
 answers[44] = choices[44][1];
 units[44] = "28";
 comments[44] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[45]= new Array();
 choices[45][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[45][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[45][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[45][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[45] = choices[45][1];
 units[45] = "26";
 comments[45] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[46]= new Array();
 choices[46][0] = "MySQL";
 choices[46][1] = "SQLite";
 choices[46][2] = "Zope";
 choices[46][3] = "MariaDB";
 answers[46] = choices[46][2];
 units[46] = "61";
 comments[46] = "Id Pregunta: 575. Tema 61. TAI 2016.";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[47]= "48)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[47]= new Array();
 choices[47][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[47][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[47][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[47][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[47] = choices[47][0];
 units[47] = "10";
 comments[47] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[48]= new Array();
 choices[48][0] = "En 1988.";
 choices[48][1] = "En 1981.";
 choices[48][2] = "En 1982.";
 choices[48][3] = "En 1986.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[49]= new Array();
 choices[49][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[49][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[49][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[49][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[49] = choices[49][1];
 units[49] = "63";
 comments[49] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[50]= new Array();
 choices[50][0] = "La CETIC";
 choices[50][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[50][2] = "La DTIC";
 choices[50][3] = "El MHFP";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[51]= new Array();
 choices[51][0] = "Crecimiento inteligente.";
 choices[51][1] = "Crecimiento inclusivo.";
 choices[51][2] = "Crecimiento sostenible.";
 choices[51][3] = "Crecimiento integrador.";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[52]= new Array();
 choices[52][0] = "23";
 choices[52][1] = "20";
 choices[52][2] = "14";
 choices[52][3] = "18";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[53]= "54)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[53]= new Array();
 choices[53][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[53][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[53][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[53][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[53] = choices[53][3];
 units[53] = "77";
 comments[53] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[54]= new Array();
 choices[54][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[54][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[54][2] = "Fomentar el despliegue de redes y servicios";
 choices[54][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[54] = choices[54][0];
 units[54] = "19";
 comments[54] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[55]= new Array();
 choices[55][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[55][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[55][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[55][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[55] = choices[55][1];
 units[55] = "19";
 comments[55] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[56]= "57)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[56]= new Array();
 choices[56][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[56][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[56][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[56][3] = "Todas son correctas.";
 answers[56] = choices[56][3];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[57]= "58)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[57]= new Array();
 choices[57][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[57][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[57][2] = "Un programa de igualdad.";
 choices[57][3] = "Un estatuto de igualdad.";
 answers[57] = choices[57][0];
 units[57] = "14";
 comments[57] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[58]= "59)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[58]= new Array();
 choices[58][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[58][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[58][2] = "Cinco a&ntilde;os.";
 choices[58][3] = "Ninguna es correcta.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta falsa:";
 choices[59]= new Array();
 choices[59][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[59][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[59][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[59][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[59] = choices[59][3];
 units[59] = "5";
 comments[59] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[60]= "61)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[60]= new Array();
 choices[60][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[60][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[60][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[60][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[60] = choices[60][1];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[61]= new Array();
 choices[61][0] = "Al Consejo Europeo.";
 choices[61][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[61][2] = "A la Comisi&oacute;n Europea.";
 choices[61][3] = "Al Parlamento Europeo.";
 answers[61] = choices[61][2];
 units[61] = "5";
 comments[61] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[62]= "63)  El Tribunal de Justicia est&aacute; formado por:";
 choices[62]= new Array();
 choices[62][0] = "Un Juez de cada Estado miembro.";
 choices[62][1] = "Por dos Jueces de cada Estado miembro.";
 choices[62][2] = "Por veinte Jueces.";
 choices[62][3] = "Por ocho Jueces.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[63]= "64)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[63]= new Array();
 choices[63][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[63][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[63][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[63][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[64]= "65)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[64]= new Array();
 choices[64][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[64][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[64][2] = "Ninguna es correcta.";
 choices[64][3] = "A y B son correctas.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[65]= new Array();
 choices[65][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[65][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[65][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[65][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[65] = choices[65][1];
 units[65] = "1";
 comments[65] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[66]= "67)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[66]= new Array();
 choices[66][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[66][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[66][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[66][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[67]= new Array();
 choices[67][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[67][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[67][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[67][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[67] = choices[67][0];
 units[67] = "19";
 comments[67] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[68]= "69)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[68]= new Array();
 choices[68][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[68][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[68][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[68][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[69]= "70)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[69]= new Array();
 choices[69][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[69][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[69][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[69][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[69] = choices[69][2];
 units[69] = "19";
 comments[69] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[70]= new Array();
 choices[70][0] = "El Presidente del Senado.";
 choices[70][1] = "El Defensor del Pueblo.";
 choices[70][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[70][3] = "El Presidente del Gobierno.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[71]= new Array();
 choices[71][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[71][1] = "Anteriormente se denominaba Sonar.";
 choices[71][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[71][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[71] = choices[71][2];
 units[71] = "92";
 comments[71] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[72]= new Array();
 choices[72][0] = "Publicidad.";
 choices[72][1] = "Constituci&oacute;n.";
 choices[72][2] = "Legalidad.";
 choices[72][3] = "Creaci&oacute;n.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[73]= "74)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[73]= new Array();
 choices[73][0] = "Presencia equilibrada.";
 choices[73][1] = "Presencia paritaria.";
 choices[73][2] = "Presencia consensuada.";
 choices[73][3] = "presencia horizontal.";
 answers[73] = choices[73][0];
 units[73] = "14";
 comments[73] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[74]= new Array();
 choices[74][0] = "El Consejo Europeo.";
 choices[74][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[74][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[74][3] = "El Parlamento Europeo.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 313. UNION EUROPEA";


