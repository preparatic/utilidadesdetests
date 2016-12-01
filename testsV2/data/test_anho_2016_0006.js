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

//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[0]= new Array();
 choices[0][0] = "En t&iacute;tulos-valores.";
 choices[0][1] = "Las respuestas a) y b) son correctas.";
 choices[0][2] = "Las respuestas a) y b) no son correctas.";
 choices[0][3] = "En cuenta.";
 answers[0] = choices[0][1];
 units[0] = "10";
 comments[0] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[0] = 500


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[1]= "2)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[1][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[1][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[1][3] = "cualquiera que sea el estado del procedimiento";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[1] = 527


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[2]= "3)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[2]= new Array();
 choices[2][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[2][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[2][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[2][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[2] = choices[2][0];
 units[2] = "7";
 comments[2] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[2] = 673


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[3]= "4)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[3]= new Array();
 choices[3][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[3][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[3][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[3][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[3] = choices[3][1];
 units[3] = "14";
 comments[3] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";
 preguntaids[3] = 408


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[4]= "5)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[4]= new Array();
 choices[4][0] = "Dos.";
 choices[4][1] = "Cuatro.";
 choices[4][2] = "Cinco.";
 choices[4][3] = "Tres.";
 answers[4] = choices[4][1];
 units[4] = "10";
 comments[4] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";
 preguntaids[4] = 491


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[5]= "6)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[5]= new Array();
 choices[5][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[5][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[5][2] = "Las Inspecciones Generales de los Servicios";
 choices[5][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[5] = choices[5][1];
 units[5] = "75";
 comments[5] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[5] = 79


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[6]= "7)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[6]= new Array();
 choices[6][0] = "El Ministerio de Igualdad.";
 choices[6][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[6][2] = "Ambas son correctas.";
 choices[6][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[6] = 422


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[7]= new Array();
 choices[7][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[7][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[7][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[7][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[7] = choices[7][1];
 units[7] = "43";
 comments[7] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[7] = 441


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[8]= "9)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[8]= new Array();
 choices[8][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[8][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[8][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[8][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[8] = choices[8][3];
 units[8] = "12";
 comments[8] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[8] = 130


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[9]= new Array();
 choices[9][0] = "Art&iacute;culo 16.2.";
 choices[9][1] = "Art&iacute;culo 17.1.";
 choices[9][2] = "Art&iacute;culo 18.1.";
 choices[9][3] = "Art&iacute;culo 18.2.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[9] = 249


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[10]= "11)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[10]= new Array();
 choices[10][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[10][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[10][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[10][3] = "Todas son correctas.";
 answers[10] = choices[10][3];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[10] = 839


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[11]= new Array();
 choices[11][0] = "Car&aacute;cter sustitutivo";
 choices[11][1] = "Car&aacute;cter obligatorio";
 choices[11][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[11] = 583


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[12]= "13)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[12]= new Array();
 choices[12][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[12][1] = "1 de enero de 2015";
 choices[12][2] = "1 de enero de 2016";
 choices[12][3] = "1 de julio de 2016";
 answers[12] = choices[12][3];
 units[12] = "77";
 comments[12] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[12] = 691


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[13]= "14)  El sector p&uacute;blico institucional se integra por:";
 choices[13]= new Array();
 choices[13][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[13][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[13][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[13][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[13] = choices[13][1];
 units[13] = "7";
 comments[13] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[13] = 523


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[14]= "15)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[14]= new Array();
 choices[14][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[14][1] = "garantizar la conservaci&oacute;n del documento";
 choices[14][2] = "garantizar la autenticidad del documento";
 choices[14][3] = "garantizar la integridad del documento";
 answers[14] = choices[14][0];
 units[14] = "7";
 comments[14] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[14] = 152


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[15]= "16)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[15]= new Array();
 choices[15][0] = "Estrasburgo.";
 choices[15][1] = "Bruselas.";
 choices[15][2] = "Luxemburgo.";
 choices[15][3] = "Holanda.";
 answers[15] = choices[15][2];
 units[15] = "5";
 comments[15] = "Id Pregunta: 295. UNION EUROPEA";
 preguntaids[15] = 295


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[16]= "17)  ITIL v3, define:";
 choices[16]= new Array();
 choices[16][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[16][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[16][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[16][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[16] = choices[16][0];
 units[16] = "101";
 comments[16] = "Id Pregunta: 606. Junta de Extremadura A1 2015";
 preguntaids[16] = 606


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[17]= new Array();
 choices[17][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[17][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[17][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[17][3] = "Todas lo son";
 answers[17] = choices[17][0];
 units[17] = "17";
 comments[17] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";
 preguntaids[17] = 555


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[18]= "19)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[18]= new Array();
 choices[18][0] = "Transferencias de cr&eacute;dito.";
 choices[18][1] = "Incorporaciones de cr&eacute;dito.";
 choices[18][2] = "Imputaciones de cr&eacute;dito.";
 choices[18][3] = "Ampliaciones de cr&eacute;dito.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";
 preguntaids[18] = 464


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[19]= new Array();
 choices[19][0] = "Categor&iacute;a b&aacute;sica";
 choices[19][1] = "Categor&iacute;a media";
 choices[19][2] = "Categor&iacute;a alta";
 choices[19][3] = "Categor&iacute;a media y alta";
 answers[19] = choices[19][2];
 units[19] = "46";
 comments[19] = "Id Pregunta: 90. AGE A1 2015";
 preguntaids[19] = 90


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[20]= "21)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[20]= new Array();
 choices[20][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[20][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[20][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[20][3] = "Todas son correctas.";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[20] = 842


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[21]= new Array();
 choices[21][0] = "23";
 choices[21][1] = "20";
 choices[21][2] = "14";
 choices[21][3] = "18";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 343. UNION EUROPEA";
 preguntaids[21] = 343


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[22]= "23)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[22]= new Array();
 choices[22][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[22][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[22][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[22][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 808. Ley 40/2015";
 preguntaids[22] = 808


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[23]= new Array();
 choices[23][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[23][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[23][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[23][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[23] = choices[23][3];
 units[23] = "77";
 comments[23] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[23] = 688


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[24]= "25)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[24]= new Array();
 choices[24][0] = "Con el a&ntilde;o anterior.";
 choices[24][1] = "Con los tres a&ntilde;os anteriores.";
 choices[24][2] = "Con el a&ntilde;o natural.";
 choices[24][3] = "Con los dos a&ntilde;os anteriores.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[24] = 468


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[25]= new Array();
 choices[25][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[25][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[25][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[25][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[25] = choices[25][3];
 units[25] = "66";
 comments[25] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[25] = 37


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[26]= "27)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[26]= new Array();
 choices[26][0] = "Al Presidente del Gobierno.";
 choices[26][1] = "A las Cortes Generales";
 choices[26][2] = "A los electores.";
 choices[26][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 196. CONSTITUCION1978";
 preguntaids[26] = 196


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[27]= "28)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[27]= new Array();
 choices[27][0] = "El derecho a un permiso.";
 choices[27][1] = "Una prestaci&oacute;n por paternidad.";
 choices[27][2] = "Ambas son correctas.";
 choices[27][3] = "18 d&iacute;as de permiso.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[27] = 423


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[28]= new Array();
 choices[28][0] = "Ley Org&aacute;nica.";
 choices[28][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[28][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[28][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[28] = 203


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[29]= "30)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[29]= new Array();
 choices[29][0] = "La Administraci&oacute;n General del Estado";
 choices[29][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[29][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[29][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[29] = choices[29][1];
 units[29] = "26";
 comments[29] = "Id Pregunta: 550. Gobernanza TIC";
 preguntaids[29] = 550


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[30]= "31)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[30]= new Array();
 choices[30][0] = "2025";
 choices[30][1] = "2023";
 choices[30][2] = "2030";
 choices[30][3] = "2020";
 answers[30] = choices[30][3];
 units[30] = "28";
 comments[30] = "Id Pregunta: 739. Estrategia TIC";
 preguntaids[30] = 739


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[31]= "32)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[31]= new Array();
 choices[31][0] = "0";
 choices[31][1] = "1";
 choices[31][2] = "Tantos como peticiones concurrentes tenga.";
 choices[31][3] = "Tantos como le permita la memoria de la JVM.";
 answers[31] = choices[31][1];
 units[31] = "64";
 comments[31] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[31] = 15


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[32]= "33)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[32]= new Array();
 choices[32][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[32][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[32][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][2];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[32] = 819


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[33]= "34)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[33]= new Array();
 choices[33][0] = "circulares";
 choices[33][1] = "reglamentos internos";
 choices[33][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[33][3] = "disposiciones de car&aacute;cter general";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 780. Ley 40/2015";
 preguntaids[33] = 780


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[34]= "35)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[34]= new Array();
 choices[34][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[34][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[34][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[34][3] = "Todas son correctas.";
 answers[34] = choices[34][3];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[34] = 836


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[35]= "36)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[35]= new Array();
 choices[35][0] = "solo mediante ley";
 choices[35][1] = "reglamentariamente";
 choices[35][2] = "mediante ley o reglamentariamente";
 choices[35][3] = "ninguna es correcta";
 answers[35] = choices[35][1];
 units[35] = "7";
 comments[35] = "Id Pregunta: 514. LEY 39/2015";
 preguntaids[35] = 514


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[36]= "37)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[36]= new Array();
 choices[36][0] = "Cinco a&ntilde;os.";
 choices[36][1] = "Cuatro a&ntilde;os.";
 choices[36][2] = "Tres a&ntilde;os.";
 choices[36][3] = "Seis meses.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 302. UNION EUROPEA";
 preguntaids[36] = 302


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[37]= new Array();
 choices[37][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[37][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[37][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[37][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[37] = choices[37][3];
 units[37] = "46";
 comments[37] = "Id Pregunta: 80. AGE A1 2015";
 preguntaids[37] = 80


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[38]= "39)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[38]= new Array();
 choices[38][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[38][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[38][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 781. Ley 40/2015";
 preguntaids[38] = 781


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[39]= new Array();
 choices[39][0] = "NoSQL";
 choices[39][1] = "Sistemas de baja latencia";
 choices[39][2] = "MapReduce";
 choices[39][3] = "Business Intelligence";
 answers[39] = choices[39][1];
 units[39] = "73";
 comments[39] = "Id Pregunta: 660. ";
 preguntaids[39] = 660


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[40]= new Array();
 choices[40][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[40][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[40][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[40][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[40] = 233


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[41]= "42)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[41]= new Array();
 choices[41][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[41][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[41][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[41][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[41] = choices[41][2];
 units[41] = "45";
 comments[41] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[41] = 601


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[42]= "43)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[42]= new Array();
 choices[42][0] = "El Tratado de Roma, 1957.";
 choices[42][1] = "El Acta &Uacute;nica Europea.";
 choices[42][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[42][3] = "Ninguna es correcta.";
 answers[42] = choices[42][2];
 units[42] = "14";
 comments[42] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[42] = 404


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[43]= new Array();
 choices[43][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[43][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[43][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[43][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[43] = choices[43][2];
 units[43] = "22";
 comments[43] = "Id Pregunta: 121. ";
 preguntaids[43] = 121


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[44]= "45)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[44]= new Array();
 choices[44][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[44][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[44][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[44][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[44] = 466


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[45]= "46)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[45]= new Array();
 choices[45][0] = "Gesti&oacute;n de la disponibilidad";
 choices[45][1] = "Gesti&oacute;n de la demanda";
 choices[45][2] = "Gesti&oacute;n de entregas";
 choices[45][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[45] = choices[45][0];
 units[45] = "101";
 comments[45] = "Id Pregunta: 21. AGE A1 2015";
 preguntaids[45] = 21


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[46]= "47)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[46]= new Array();
 choices[46][0] = "Almacenamiento orientado a columnas";
 choices[46][1] = "Framework MapReduce";
 choices[46][2] = "OLTP";
 choices[46][3] = "Bases de datos clave-valor";
 answers[46] = choices[46][2];
 units[46] = "73";
 comments[46] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[46] = 93


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[47]= new Array();
 choices[47][0] = "Por reembolso de pr&eacute;stamos.";
 choices[47][1] = "Por la venta de bienes.";
 choices[47][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[47][3] = "Por prestaci&oacute;n de servicios.";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";
 preguntaids[47] = 496


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[48]= "49)  El Colegio de Comisarios se re&uacute;ne:";
 choices[48]= new Array();
 choices[48][0] = "Una vez por semana.";
 choices[48][1] = "Una vez al mes.";
 choices[48][2] = "Dos veces en semana.";
 choices[48][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 315. UNION EUROPEA";
 preguntaids[48] = 315


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[49]= "50)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[49]= new Array();
 choices[49][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[49][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[49][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[49][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[49] = 775


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[50]= "51)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[50][1] = "Las inversiones reales y financieras.";
 choices[50][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[50][3] = "Las transferencias de capital y las inversiones reales.";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[50] = 471


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[51]= "52)  JNDI se usa para el acceso a:";
 choices[51]= new Array();
 choices[51][0] = "Datos de ficheros";
 choices[51][1] = "Sistemas gestores de bases de datos";
 choices[51][2] = "Directorios de nombres";
 choices[51][3] = "Colas de mensajer&iacute;a";
 answers[51] = choices[51][2];
 units[51] = "64";
 comments[51] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[51] = 13


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[52]= "53)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[52]= new Array();
 choices[52][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[52][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[52][2] = "Ambas son correctas.";
 choices[52][3] = "A y B son incorrectas.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[52] = 401


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[53][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[53][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[53][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[53] = 440


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[54]= "55)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[54]= new Array();
 choices[54][0] = "Ejecuci&oacute;n";
 choices[54][1] = "Adjudicaci&oacute;n";
 choices[54][2] = "Licitaci&oacute;n";
 choices[54][3] = "Formalizaci&oacute;n";
 answers[54] = choices[54][3];
 units[54] = "37";
 comments[54] = "Id Pregunta: 69. AGE A1 2015";
 preguntaids[54] = 69


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[55]= new Array();
 choices[55][0] = "Las respuestas a) y b) son correctas.";
 choices[55][1] = "Las respuestas a) y b) no son correctas.";
 choices[55][2] = "Contenido coherente con los planes sectoriales.";
 choices[55][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[55] = choices[55][0];
 units[55] = "10";
 comments[55] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";
 preguntaids[55] = 467


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[56]= new Array();
 choices[56][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[56][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[56][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[56][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[56] = choices[56][0];
 units[56] = "19";
 comments[56] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[56] = 589


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[57]= new Array();
 choices[57][0] = "La CETIC";
 choices[57][1] = "Los Ministerios";
 choices[57][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][3] = "Ninguno de los anteriores";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 597. Estrategia TIC";
 preguntaids[57] = 597


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[58]= new Array();
 choices[58][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[58][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[58][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[58][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[58] = choices[58][0];
 units[58] = "75";
 comments[58] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[58] = 70


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[59]= "60)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[59]= new Array();
 choices[59][0] = "La Comisi&oacute;n Europea.";
 choices[59][1] = "El Consejo Europeo.";
 choices[59][2] = "El Consejo de Europa.";
 choices[59][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[59] = 310


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[60]= "61)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[60]= new Array();
 choices[60][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[60][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[60][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[60][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[60] = 529


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[61]= "62)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[61]= new Array();
 choices[61][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[61][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[61][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[61][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[61] = choices[61][2];
 units[61] = "8";
 comments[61] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[61] = 143


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[62]= new Array();
 choices[62][0] = "Agenda digital para Europa";
 choices[62][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[62][2] = "Juventud en movimiento";
 choices[62][3] = "Agenda Web 2.0";
 answers[62] = choices[62][3];
 units[62] = "19";
 comments[62] = "Id Pregunta: 760. Europa 2020";
 preguntaids[62] = 760


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[63]= "64)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[63]= new Array();
 choices[63][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[63][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[63][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[63][3] = "todas son correctas";
 answers[63] = choices[63][3];
 units[63] = "7";
 comments[63] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";
 preguntaids[63] = 154


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[64]= "65)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[64]= new Array();
 choices[64][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[64][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[64][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[64][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[64] = 288


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[65]= "66)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[65]= new Array();
 choices[65][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[65][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[65][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[65][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[65] = choices[65][2];
 units[65] = "101";
 comments[65] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[65] = 60


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[66]= "67)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[66]= new Array();
 choices[66][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[66][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[66][2] = "Funcionarios e interinos.";
 choices[66][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[66] = choices[66][3];
 units[66] = "20";
 comments[66] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[66] = 646


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[67]= new Array();
 choices[67][0] = "Orientaci&oacute;n a objetos";
 choices[67][1] = "MapReduce";
 choices[67][2] = "Pipeline filtering";
 choices[67][3] = "Programaci&oacute;n funcional";
 answers[67] = choices[67][1];
 units[67] = "73";
 comments[67] = "Id Pregunta: 661. ";
 preguntaids[67] = 661


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[68]= new Array();
 choices[68][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[68][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[68][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[68][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[68] = 156


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[69]= new Array();
 choices[69][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[69][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[69][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[69][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[69] = choices[69][2];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[69] = 813


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[70]= new Array();
 choices[70][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[70][1] = "Auditor&iacute;a operativa.";
 choices[70][2] = "Auditor&iacute;a de cumplimiento.";
 choices[70][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[70] = 474


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[71]= new Array();
 choices[71][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[71][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[71][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][1];
 units[71] = "92";
 comments[71] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[71] = 701


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[72]= new Array();
 choices[72][0] = "Al menos cada 12 meses";
 choices[72][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[72][2] = "Al menos cada 18 meses";
 choices[72][3] = "Al menos cada 24 meses";
 answers[72] = choices[72][3];
 units[72] = "77";
 comments[72] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[72] = 687


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[73]= new Array();
 choices[73][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[73][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[73][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[73][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[73] = choices[73][0];
 units[73] = "22";
 comments[73] = "Id Pregunta: 124. ";
 preguntaids[73] = 124


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[74]= "75)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[74]= new Array();
 choices[74][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[74][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[74][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[74][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[74] = choices[74][2];
 units[74] = "43";
 comments[74] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[74] = 435


