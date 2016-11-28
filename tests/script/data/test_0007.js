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

//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[0]= "1)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[0][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[0][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[0][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[1]= "2)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[1]= new Array();
 choices[1][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[1][1] = "el Consejo de Estado";
 choices[1][2] = "el Congreso";
 choices[1][3] = "las Cortes Generales";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[2]= new Array();
 choices[2][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[2][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[2][2] = "la falta de interoperabilidad.";
 choices[2][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[3]= "4)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[3]= new Array();
 choices[3][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[3][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[3][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[3][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[4]= "5)  Son servicios declarados compartidos:";
 choices[4]= new Array();
 choices[4][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[4][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[4][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[4][3] = "Todos los anteriores";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[5]= "6)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Principio de transparencia.";
 choices[5][1] = "Principio de cooperaci&oacute;n.";
 choices[5][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[5][3] = "Principio de lealtad institucional.";
 answers[5] = choices[5][1];
 units[5] = "10";
 comments[5] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[6]= "7)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[6]= new Array();
 choices[6][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[6][1] = "Protecci&oacute;n de su salud.";
 choices[6][2] = "Ninguna es correcta.";
 choices[6][3] = "A y B son correctas.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[7]= new Array();
 choices[7][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[7][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[7][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[7][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[8]= new Array();
 choices[8][0] = "Reducir el gasto p&uacute;blico.";
 choices[8][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[8][2] = "Reducir el endeudamiento neto.";
 choices[8][3] = "Al Fondo de Contingencia.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[9]= "10)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Discriminaci&oacute;n indirecta.";
 choices[9][1] = "Discriminaci&oacute;n directa.";
 choices[9][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[9][3] = "Discriminaci&oacute;n abusiva.";
 answers[9] = choices[9][0];
 units[9] = "14";
 comments[9] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[10]= "11)  En las Administraciones P&uacute;blicas...";
 choices[10]= new Array();
 choices[10][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[10][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[10][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[10][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[11]= "12)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[11]= new Array();
 choices[11][0] = "SMB3";
 choices[11][1] = "AFP";
 choices[11][2] = "NFS";
 choices[11][3] = "FTP";
 answers[11] = choices[11][0];
 units[11] = "59";
 comments[11] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[12]= "13)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[12]= new Array();
 choices[12][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[12][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[12][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[12][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[12] = choices[12][0];
 units[12] = "14";
 comments[12] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[13]= new Array();
 choices[13][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[13][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[13][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[13] = choices[13][0];
 units[13] = "84";
 comments[13] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[14][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[14][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[14][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[15]= "16)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[15]= new Array();
 choices[15][0] = "Fat y Ntfs.";
 choices[15][1] = "Extfat y Fat.";
 choices[15][2] = "Fat y Nfst.";
 choices[15][3] = "ext2fs y Ntfs.";
 answers[15] = choices[15][0];
 units[15] = "58";
 comments[15] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[16]= new Array();
 choices[16][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[16][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[16][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[16][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[16] = choices[16][0];
 units[16] = "15";
 comments[16] = "Id Pregunta: 114. ";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[17]= new Array();
 choices[17][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[17][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[17][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[17][3] = "Sancionar y publicar las leyes.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[18][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[18][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[18][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[19]= new Array();
 choices[19][0] = "Al Consejo Europeo.";
 choices[19][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[19][2] = "A la Comisi&oacute;n Europea.";
 choices[19][3] = "Al Parlamento Europeo.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[20]= "21)  El Presupuesto por programas sirve para saber...";
 choices[20]= new Array();
 choices[20][0] = "En qu&eacute; nos gastamos el dinero";
 choices[20][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[20][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[20][3] = "Qui&eacute;n se gasta el dinero";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[21]= new Array();
 choices[21][0] = "El Ministro de Econom&iacute;a.";
 choices[21][1] = "El Gobierno.";
 choices[21][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[21][3] = "El Presidente del Gobierno.";
 answers[21] = choices[21][1];
 units[21] = "10";
 comments[21] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[22]= "23)  El recurso de alzada puede interponerse:";
 choices[22]= new Array();
 choices[22][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[22][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[22][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[22][3] = "Ante el Defensor del Pueblo";
 answers[22] = choices[22][1];
 units[22] = "8";
 comments[22] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[23]= "24)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[23]= new Array();
 choices[23][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[23][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[23][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[23][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[24]= new Array();
 choices[24][0] = "Art&iacute;culo 16.2.";
 choices[24][1] = "Art&iacute;culo 17.1.";
 choices[24][2] = "Art&iacute;culo 18.1.";
 choices[24][3] = "Art&iacute;culo 18.2.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[25]= "26)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[25]= new Array();
 choices[25][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[25][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[25][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[25][3] = "Todas las respuestas son correctas.";
 answers[25] = choices[25][3];
 units[25] = "50";
 comments[25] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[26]= "27)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[26]= new Array();
 choices[26][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[26][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[26][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[26][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[26] = choices[26][1];
 units[26] = "19";
 comments[26] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[27]= "28)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[27]= new Array();
 choices[27][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[27][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[27][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[27][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[27] = choices[27][2];
 units[27] = "7";
 comments[27] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[28]= "29)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[28][1] = "Las inversiones reales y financieras.";
 choices[28][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[28][3] = "Las transferencias de capital y las inversiones reales.";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[29]= "30)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[29]= new Array();
 choices[29][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[29][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[29][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[29][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[29] = choices[29][2];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[30][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[30][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[30][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 845. Ley 40/2015";


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


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[32]= new Array();
 choices[32][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[32][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[32][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[32][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[33]= new Array();
 choices[33][0] = "En 1988.";
 choices[33][1] = "En 1981.";
 choices[33][2] = "En 1982.";
 choices[33][3] = "En 1986.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[34]= new Array();
 choices[34][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[34][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[34][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[34][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[34] = choices[34][1];
 units[34] = "92";
 comments[34] = "Id Pregunta: 716. INTEGRACION CONTINUA";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[35]= new Array();
 choices[35][0] = "Ford";
 choices[35][1] = "Google";
 choices[35][2] = "Toyota";
 choices[35][3] = "Facebook";
 answers[35] = choices[35][2];
 units[35] = "34";
 comments[35] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[36]= "37)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[36]= new Array();
 choices[36][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[36][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[36][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[36][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[36] = choices[36][2];
 units[36] = "76";
 comments[36] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[37][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[37][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[37][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[37] = choices[37][3];
 units[37] = "10";
 comments[37] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[38]= "39)  El Colegio de Comisarios se re&uacute;ne:";
 choices[38]= new Array();
 choices[38][0] = "Una vez por semana.";
 choices[38][1] = "Una vez al mes.";
 choices[38][2] = "Dos veces en semana.";
 choices[38][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[39]= new Array();
 choices[39][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[39][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[39][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[39][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "45";
 comments[39] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[40]= "41)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[40]= new Array();
 choices[40][0] = "El derecho a la propiedad privada.";
 choices[40][1] = "El derecho de asociaci&oacute;n.";
 choices[40][2] = "El derecho de fundaci&oacute;n.";
 choices[40][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[40] = choices[40][1];
 units[40] = "1";
 comments[40] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[41]= "42)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[41]= new Array();
 choices[41][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[41][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[41][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[41][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[41] = choices[41][1];
 units[41] = "95";
 comments[41] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[42]= new Array();
 choices[42][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[42][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[42][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[42][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[42] = choices[42][1];
 units[42] = "34, 84";
 comments[42] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[43]= "44)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[43]= new Array();
 choices[43][0] = "Al Gobierno.";
 choices[43][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[43][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[43][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[43] = choices[43][2];
 units[43] = "10";
 comments[43] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[44]= "45)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[44]= new Array();
 choices[44][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[44][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[44][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[44][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[45]= new Array();
 choices[45][0] = "Versi&oacute;n digital prioritaria.";
 choices[45][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[45][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[45][3] = "Apertura y transparencia.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[46]= "47)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[46]= new Array();
 choices[46][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[46][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[46][2] = "el Subdirector General que el Delegado designe";
 choices[46][3] = "el Secretario de Estado";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[47]= "48)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[47]= new Array();
 choices[47][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[47][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[47][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[47][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[47] = choices[47][0];
 units[47] = "45";
 comments[47] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[48]= new Array();
 choices[48][0] = "Eric Ries";
 choices[48][1] = "Steve Blank";
 choices[48][2] = "Tom Poppendieck";
 choices[48][3] = "Alexander Osterwalder";
 answers[48] = choices[48][2];
 units[48] = "34";
 comments[48] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[49]= new Array();
 choices[49][0] = "Siempre en formato electr&oacute;nico.";
 choices[49][1] = "Siempre en formato papel.";
 choices[49][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[49][3] = "La ley no regula el formato del expediente.";
 answers[49] = choices[49][0];
 units[49] = "7";
 comments[49] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[50]= "51)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[50]= new Array();
 choices[50][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[50][1] = "la Organizaci&oacute;n Territorial";
 choices[50][2] = "la Organizaci&oacute;n sectorial";
 choices[50][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[51]= "52)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[51]= new Array();
 choices[51][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[51][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[51][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[51][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[51] = choices[51][2];
 units[51] = "8";
 comments[51] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[52]= new Array();
 choices[52][0] = "A nivel de secci&oacute;n de programa.";
 choices[52][1] = "A nivel de grupo de programa.";
 choices[52][2] = "Ninguna de las respuestas es correcta.";
 choices[52][3] = "A nivel de programa.";
 answers[52] = choices[52][3];
 units[52] = "10";
 comments[52] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[53]= "54)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[53][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[53][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[53][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[53] = choices[53][2];
 units[53] = "26";
 comments[53] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[54][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[54][2] = "Las respuestas A y B son correctas.";
 choices[54][3] = "Las respuestas A y B son falsas.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[55]= "56)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[55]= new Array();
 choices[55][0] = "circulares";
 choices[55][1] = "reglamentos internos";
 choices[55][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[55][3] = "disposiciones de car&aacute;cter general";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[56]= new Array();
 choices[56][0] = "Anualmente por el Consejo de Ministros";
 choices[56][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[56][2] = "Al final de cada legislatura por el Gobierno";
 choices[56][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[56] = choices[56][0];
 units[56] = "14";
 comments[56] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[57]= "58)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[57]= new Array();
 choices[57][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[57][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[57][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[57][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[57] = choices[57][1];
 units[57] = "48";
 comments[57] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[58]= "59)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[58]= new Array();
 choices[58][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[58][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[58][2] = "Son incompatibles ambas actas de diputado.";
 choices[58][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[59]= new Array();
 choices[59][0] = "De los derechos y deberes fundamentales.";
 choices[59][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[59][2] = "Derechos y libertades.";
 choices[59][3] = "De la Corona.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[60]= "61)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[60]= new Array();
 choices[60][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[60][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[60][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[60][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[61]= "62)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[61]= new Array();
 choices[61][0] = "Seis a&ntilde;os.";
 choices[61][1] = "Cinco a&ntilde;os.";
 choices[61][2] = "Cuatro a&ntilde;os.";
 choices[61][3] = "Ocho a&ntilde;os.";
 answers[61] = choices[61][1];
 units[61] = "5";
 comments[61] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[62]= "63)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[62]= new Array();
 choices[62][0] = "Cuatro.";
 choices[62][1] = "Una.";
 choices[62][2] = "Cinco.";
 choices[62][3] = "Nueve.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[63]= new Array();
 choices[63][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[63][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[63][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[63][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[63] = choices[63][3];
 units[63] = "22";
 comments[63] = "Id Pregunta: 120. ";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[64]= "65)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[64]= new Array();
 choices[64][0] = "Las sociedades mercantiles estatales.";
 choices[64][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[64][2] = "Las respuestas a) y b) son correctas.";
 choices[64][3] = "Las respuestas a) y b) no son correctas.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[65]= new Array();
 choices[65][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[65][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[65][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[65][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[66]= "67)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[66]= new Array();
 choices[66][0] = "la Administraci&oacute;n General del Estado";
 choices[66][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[66][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[66][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[66] = choices[66][3];
 units[66] = "7";
 comments[66] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "Diagrama de clases";
 choices[67][1] = "Diagrama de componentes";
 choices[67][2] = "Diagrama de estructura";
 choices[67][3] = "Diagrama de paquetes";
 answers[67] = choices[67][0];
 units[67] = "91";
 comments[67] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[68]= "69)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[68]= new Array();
 choices[68][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[68][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[68][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[68][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[68] = choices[68][2];
 units[68] = "50";
 comments[68] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[69]= new Array();
 choices[69][0] = "Compatibilidad";
 choices[69][1] = "Interoperabilidad";
 choices[69][2] = "Reutilizaci&oacute;n";
 choices[69][3] = "Accesibilidad";
 answers[69] = choices[69][0];
 units[69] = "22";
 comments[69] = "Id Pregunta: 705. Ley de transparencia";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[70]= new Array();
 choices[70][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[70][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[70][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[70][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[70] = choices[70][3];
 units[70] = "10";
 comments[70] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[71]= "72)  Los Reglamentos no se caracterizan por:";
 choices[71]= new Array();
 choices[71][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[71][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[71][2] = "Ser obligatorios.";
 choices[71][3] = "No poseer alcance general.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[72]= new Array();
 choices[72][0] = "CVS";
 choices[72][1] = "SVN";
 choices[72][2] = "Team Foundation Server";
 choices[72][3] = "Apache Tomcat";
 answers[72] = choices[72][3];
 units[72] = "92";
 comments[72] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[73]= new Array();
 choices[73][0] = "Backlog refinement";
 choices[73][1] = "Backlog refinement";
 choices[73][2] = "A y b son correctas";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][2];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[74]= "75)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[74]= new Array();
 choices[74][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[74][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[74][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[74][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 833. Ley 40/2015";


