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

//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[0]= "1)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[0]= new Array();
 choices[0][0] = "El Jefe del Estado.";
 choices[0][1] = "El Tribunal Constitucional.";
 choices[0][2] = "El Congreso de los Diputados.";
 choices[0][3] = "Las Cortes Generales.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[1]= "2)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[1]= new Array();
 choices[1][0] = "el Secretario General";
 choices[1][1] = "el Subdirector General";
 choices[1][2] = "el Secretario de Estado";
 choices[1][3] = "ninguna es correcta";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[2]= new Array();
 choices[2][0] = "El 2 de Octubre de 2015";
 choices[2][1] = "El 15 de Septiembre de 2015";
 choices[2][2] = "El 1 de Octubre de 2015";
 choices[2][3] = "El 5 de Octubre de 2015";
 answers[2] = choices[2][0];
 units[2] = "19";
 comments[2] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[3]= "4)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[3]= new Array();
 choices[3][0] = "Dos.";
 choices[3][1] = "Cuatro.";
 choices[3][2] = "Cinco.";
 choices[3][3] = "Tres.";
 answers[3] = choices[3][1];
 units[3] = "10";
 comments[3] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[4]= "5)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[4]= new Array();
 choices[4][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[4][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[4][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[4][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; es MongoDB?";
 choices[5]= new Array();
 choices[5][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[5][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[5][2] = "Un sistema gestor de base de datos relacional.";
 choices[5][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[5] = choices[5][1];
 units[5] = "73";
 comments[5] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[6]= new Array();
 choices[6][0] = "Al Consejo Europeo.";
 choices[6][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[6][2] = "A la Comisi&oacute;n Europea.";
 choices[6][3] = "Al Parlamento Europeo.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[7]= new Array();
 choices[7][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[7][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[7][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[7][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[7] = choices[7][1];
 units[7] = "84";
 comments[7] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[8]= new Array();
 choices[8][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[8][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[8][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[8][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[9]= new Array();
 choices[9][0] = "De oficio.";
 choices[9][1] = "A solicitud del interesado.";
 choices[9][2] = "De oficio o a solicitud del interesado.";
 choices[9][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[9] = choices[9][2];
 units[9] = "7";
 comments[9] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[10]= new Array();
 choices[10][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[10][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[10][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[10][3] = "Sancionar y publicar las leyes.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[11]= "12)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[11]= new Array();
 choices[11][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[11][1] = "Tratarse de un acto no susceptible de recurso";
 choices[11][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[11][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[11] = choices[11][2];
 units[11] = "8";
 comments[11] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[12]= "13)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[12]= new Array();
 choices[12][0] = "El Presidente y su gabinete.";
 choices[12][1] = "El Presidente y sus Ministros.";
 choices[12][2] = "El Rey y el Presidente.";
 choices[12][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[12] = choices[12][2];
 units[12] = "1";
 comments[12] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[13]= "14)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[13]= new Array();
 choices[13][0] = "Un d&iacute;a";
 choices[13][1] = "Dos d&iacute;as";
 choices[13][2] = "Tres d&iacute;as";
 choices[13][3] = "Cuatro d&iacute;as";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[14]= "15)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[14]= new Array();
 choices[14][0] = "A nivel de art&iacute;culo.";
 choices[14][1] = "A nivel de cap&iacute;tulo.";
 choices[14][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[14][3] = "A nivel de concepto.";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[15]= new Array();
 choices[15][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[15][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[15][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[15][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[16]= "17)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[16]= new Array();
 choices[16][0] = "A la persona demandante.";
 choices[16][1] = "A la persona demandada.";
 choices[16][2] = "Al &oacute;rgano judicial.";
 choices[16][3] = "Al &oacute;rgano administrativo.";
 answers[16] = choices[16][1];
 units[16] = "14";
 comments[16] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[17]= new Array();
 choices[17][0] = "El Ministerio de Hacienda.";
 choices[17][1] = "El Ministerio de Econom&iacute;a.";
 choices[17][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[17][3] = "Ninguna de las respuestas es correcta.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[18]= "19)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[18]= new Array();
 choices[18][0] = "Intersecci&oacute;n.";
 choices[18][1] = "Uni&oacute;n.";
 choices[18][2] = "Restricci&oacute;n.";
 choices[18][3] = "Diferencia.";
 answers[18] = choices[18][0];
 units[18] = "60";
 comments[18] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[19]= "20)  En las Administraciones P&uacute;blicas...";
 choices[19]= new Array();
 choices[19][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[19][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[19][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[19][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[19] = choices[19][0];
 units[19] = "10";
 comments[19] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[20]= new Array();
 choices[20][0] = "No discriminaci&oacute;n";
 choices[20][1] = "Cooperaci&oacute;n";
 choices[20][2] = "Colaboraci&oacute;n";
 choices[20][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[20] = choices[20][2];
 units[20] = "18, 20";
 comments[20] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[21]= "22)  Son servicios declarados compartidos:";
 choices[21]= new Array();
 choices[21][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[21][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[21][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[21][3] = "Todos los anteriores";
 answers[21] = choices[21][3];
 units[21] = "19";
 comments[21] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[22]= "23)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[22]= new Array();
 choices[22][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[22][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[22][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][0];
 units[22] = "28";
 comments[22] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[23]= "24)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[23]= new Array();
 choices[23][0] = "Prevenir las conductas discriminatorias.";
 choices[23][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[23][2] = "Todas son correctas.";
 choices[23][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[24]= "25)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Consejo Europeo.";
 choices[24][1] = "La Comisi&oacute;n.";
 choices[24][2] = "El Consejo.";
 choices[24][3] = "El Parlamento Europeo.";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[25]= new Array();
 choices[25][0] = "Conferencia de Presidentes.";
 choices[25][1] = "Convenios de colaboraci&oacute;n.";
 choices[25][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[25][3] = "Conferencias Sectoriales.";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[26]= "27)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[26]= new Array();
 choices[26][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[26][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[26][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[26][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[26] = choices[26][1];
 units[26] = "19";
 comments[26] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[27]= "28)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[27]= new Array();
 choices[27][0] = "Cabr&aacute; recurso de alzada";
 choices[27][1] = "Cabr&aacute; el nuevo protesto";
 choices[27][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[27][3] = "No cabr&aacute; recurso alguno";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[28]= "29)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[28]= new Array();
 choices[28][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[28][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[28][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[28][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[28] = choices[28][2];
 units[28] = "14";
 comments[28] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[29]= new Array();
 choices[29][0] = "Un diputado y un senador, cada una de ellas";
 choices[29][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[29][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[29][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[30]= "31)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Paging";
 choices[30][1] = "Roaming";
 choices[30][2] = "Handover";
 choices[30][3] = "Trunking";
 answers[30] = choices[30][0];
 units[30] = "117";
 comments[30] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[31]= new Array();
 choices[31][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[31][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[31][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[31][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[32][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[32][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[32][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[32] = choices[32][1];
 units[32] = "98";
 comments[32] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[33]= "34)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[33]= new Array();
 choices[33][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[33][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[33][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[33][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[33] = choices[33][2];
 units[33] = "22";
 comments[33] = "Id Pregunta: 128. ";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[34]= "35)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[34]= new Array();
 choices[34][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[34][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[34][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[34][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[34] = choices[34][2];
 units[34] = "22";
 comments[34] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[35]= "36)  ITIL v3, define:";
 choices[35]= new Array();
 choices[35][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[35][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[35][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[35][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[35] = choices[35][0];
 units[35] = "101";
 comments[35] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[36]= new Array();
 choices[36][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[36][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[36][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[36][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[36] = choices[36][1];
 units[36] = "14";
 comments[36] = "Id Pregunta: 680. Dependencia";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[37]= new Array();
 choices[37][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[37][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[37][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[37][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[38]= new Array();
 choices[38][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[38][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[38][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[38][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[38] = choices[38][2];
 units[38] = "47";
 comments[38] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[39]= new Array();
 choices[39][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[39][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[39][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[39][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[39] = choices[39][1];
 units[39] = "77";
 comments[39] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[40]= new Array();
 choices[40][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[40][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[40][2] = "c) Todas las respuestas son correctas.";
 choices[40][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[41]= "42)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[41]= new Array();
 choices[41][0] = "El Gobierno.";
 choices[41][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[41][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[41][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[42]= "43)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[42]= new Array();
 choices[42][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[42][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[42][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[42][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[42] = choices[42][1];
 units[42] = "64";
 comments[42] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[43]= "44)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Almacenamiento orientado a columnas";
 choices[43][1] = "Framework MapReduce";
 choices[43][2] = "OLTP";
 choices[43][3] = "Bases de datos clave-valor";
 answers[43] = choices[43][2];
 units[43] = "73";
 comments[43] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Lollipop";
 choices[44][1] = "Jelly Bean";
 choices[44][2] = "Marshmallow";
 choices[44][3] = "KitKat";
 answers[44] = choices[44][2];
 units[44] = "59";
 comments[44] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[45]= new Array();
 choices[45][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[45][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[45][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[45][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[45] = choices[45][3];
 units[45] = "66";
 comments[45] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[46]= "47)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[46]= new Array();
 choices[46][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[46][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[46][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[46][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[46] = choices[46][3];
 units[46] = "101";
 comments[46] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[47]= "48)  El Tribunal de Justicia est&aacute; formado por:";
 choices[47]= new Array();
 choices[47][0] = "Un Juez de cada Estado miembro.";
 choices[47][1] = "Por dos Jueces de cada Estado miembro.";
 choices[47][2] = "Por veinte Jueces.";
 choices[47][3] = "Por ocho Jueces.";
 answers[47] = choices[47][0];
 units[47] = "5";
 comments[47] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[48]= "49)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[48]= new Array();
 choices[48][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[48][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[48][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[48][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[48] = choices[48][2];
 units[48] = "7";
 comments[48] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[49]= "50)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[49]= new Array();
 choices[49][0] = "los Ministros y los Secretarios de Estado";
 choices[49][1] = "los Subsecretarios y Secretarios generales";
 choices[49][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[49][3] = "los Directores generales";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[50]= "51)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[50]= new Array();
 choices[50][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[50][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[50][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[50][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "De la C&aacute;mara respectiva.";
 choices[51][1] = "Del Rey.";
 choices[51][2] = "Del Tribunal Constitucional.";
 choices[51][3] = "Del Tribunal Supremo.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[52]= "53)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[52]= new Array();
 choices[52][0] = "la Administraci&oacute;n General del Estado";
 choices[52][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[52][2] = "las Entidades Locales";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "7";
 comments[52] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[53]= new Array();
 choices[53][0] = "Art. 13, L.O.3/2007.";
 choices[53][1] = "Art. 14, L.O.3/2007.";
 choices[53][2] = "Art. 11, L.O.3/2007.";
 choices[53][3] = "Ninguna es correcta.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[54]= new Array();
 choices[54][0] = "Al Consejo Europeo.";
 choices[54][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[54][2] = "A la Comisi&oacute;n Europea.";
 choices[54][3] = "Al Parlamento Europeo.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[55]= new Array();
 choices[55][0] = "Art&iacute;culo 70.";
 choices[55][1] = "Art&iacute;culo 54.";
 choices[55][2] = "Articulo 62.";
 choices[55][3] = "Articulo 55. 5.";
 answers[55] = choices[55][2];
 units[55] = "1";
 comments[55] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[56]= "57)  Tienen la condici&oacute;n de alto cargo:";
 choices[56]= new Array();
 choices[56][0] = "los &oacute;rganos superiores";
 choices[56][1] = "los &oacute;rganos superiores y directivos";
 choices[56][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[56][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[57][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[57][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[57][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[57] = choices[57][1];
 units[57] = "60";
 comments[57] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[58]= "59)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[58]= new Array();
 choices[58][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[58][1] = "garantizar la conservaci&oacute;n del documento";
 choices[58][2] = "garantizar la autenticidad del documento";
 choices[58][3] = "garantizar la integridad del documento";
 answers[58] = choices[58][0];
 units[58] = "7";
 comments[58] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[59]= "60)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[59]= new Array();
 choices[59][0] = "Alrededor de un 26% del PIB";
 choices[59][1] = "Alrededor de un 11% del PIB";
 choices[59][2] = "Alrededor de un 34% del PIB";
 choices[59][3] = "Alrededor de un 7% del PIB";
 answers[59] = choices[59][1];
 units[59] = "12";
 comments[59] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[60]= "61)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[60]= new Array();
 choices[60][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[60][1] = "La libertad sexual y religiosa.";
 choices[60][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[60][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[60] = choices[60][3];
 units[60] = "1";
 comments[60] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[61]= new Array();
 choices[61][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[61][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[61][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[61][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[62]= new Array();
 choices[62][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[62][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[62][2] = "Gestionar el Registro de Operadores.";
 choices[62][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[62] = choices[62][3];
 units[62] = "121";
 comments[62] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; es Java Web Start?";
 choices[63]= new Array();
 choices[63][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[63][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[63][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[63][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[63] = choices[63][3];
 units[63] = "64";
 comments[63] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[64]= "65)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[64]= new Array();
 choices[64][0] = "P&uacute;blica.";
 choices[64][1] = "Privada.";
 choices[64][2] = "Ambas son correctas.";
 choices[64][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[64] = choices[64][0];
 units[64] = "14";
 comments[64] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la respuesta correcta:";
 choices[65]= new Array();
 choices[65][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[65][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[65][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[65][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[66]= "67)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[66]= new Array();
 choices[66][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[66][1] = "Static &amp; Active process for REsolution Bank.";
 choices[66][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[66][3] = "Super Active REsponse for Banks";
 answers[66] = choices[66][0];
 units[66] = "12";
 comments[66] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[67]= "68)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[67]= new Array();
 choices[67][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[67][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[67][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[67][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[67] = choices[67][2];
 units[67] = "22";
 comments[67] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[68]= new Array();
 choices[68][0] = "Anual";
 choices[68][1] = "Mensual";
 choices[68][2] = "Semestral";
 choices[68][3] = "Trimestral";
 answers[68] = choices[68][3];
 units[68] = "15";
 comments[68] = "Id Pregunta: 119. ";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[69]= "70)  La recusaci&oacute;n pueden promoverla...";
 choices[69]= new Array();
 choices[69][0] = "Cualquier &oacute;rgano";
 choices[69][1] = "El interesado";
 choices[69][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[69][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[70]= new Array();
 choices[70][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[70][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[70][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[70][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[70] = choices[70][1];
 units[70] = "26";
 comments[70] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[71]= new Array();
 choices[71][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[71][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[71][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[71][3] = "El Senado se compone de 350 senadores.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[72][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[72][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[72][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[72] = choices[72][1];
 units[72] = "86";
 comments[72] = "Id Pregunta: 72. AGE A1 2015";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[73]= new Array();
 choices[73][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[73][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[73][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[73][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[74]= "75)  Un wireframe es:";
 choices[74]= new Array();
 choices[74][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[74][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[74][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[74][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[74] = choices[74][3];
 units[74] = "62";
 comments[74] = "Id Pregunta: 4. AGE A1 2015";


