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

//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[0]= "1)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[0]= new Array();
 choices[0][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[0][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[0][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[0][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[1]= new Array();
 choices[1][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[1][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[1][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[1][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[2]= new Array();
 choices[2][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[2][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[2][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[2][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[2] = choices[2][3];
 units[2] = "1";
 comments[2] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[3]= "4)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[3][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[3][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[3][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[4]= "5)  La iniciativa legislativa corresponde:";
 choices[4]= new Array();
 choices[4][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[4][1] = "Al rey y al Gobierno.";
 choices[4][2] = "Al Congreso, al Senado y al Rey.";
 choices[4][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[5]= "6)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[5]= new Array();
 choices[5][0] = "Los ocupados y los parados activos";
 choices[5][1] = "S&oacute;lo los ocupados";
 choices[5][2] = "Los ocupados y los inactivos";
 choices[5][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[5] = choices[5][0];
 units[5] = "12";
 comments[5] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[6]= new Array();
 choices[6][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[6][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[6][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[6][3] = "El pago de subsidios a parados";
 answers[6] = choices[6][3];
 units[6] = "15";
 comments[6] = "Id Pregunta: 116. ";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[7]= "8)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[7]= new Array();
 choices[7][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[7][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[7][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[7][3] = "Todas las anteriores son correctas.";
 answers[7] = choices[7][3];
 units[7] = "47";
 comments[7] = "Id Pregunta: 676. Receta electr&oacute;nica";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[8]= "9)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[8]= new Array();
 choices[8][0] = "la capital del pa&iacute;s";
 choices[8][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[8][2] = "cada una de las provincias";
 choices[8][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[8] = choices[8][1];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[9]= "10)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[9]= new Array();
 choices[9][0] = "Cifrado de las comunicaciones";
 choices[9][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[9][2] = "Registro de los accesos";
 choices[9][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[9] = choices[9][1];
 units[9] = "35";
 comments[9] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[10]= "11)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[10]= new Array();
 choices[10][0] = "En qu&eacute; nos gastamos el dinero";
 choices[10][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[10][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[10][3] = "Qui&eacute;n se gasta el dinero.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[11]= "12)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[11]= new Array();
 choices[11][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[11][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[11][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[11][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[12]= "13)  El pacto fiscal europeo de 2012 incluye:";
 choices[12]= new Array();
 choices[12][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[12][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[12][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[12][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[13]= "14)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[13][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[13][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[13][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[13] = choices[13][2];
 units[13] = "101";
 comments[13] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[14]= new Array();
 choices[14][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[14][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[14][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[14][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[15]= new Array();
 choices[15][0] = "Art&iacute;culo 16.2.";
 choices[15][1] = "Art&iacute;culo 17.1.";
 choices[15][2] = "Art&iacute;culo 18.1.";
 choices[15][3] = "Art&iacute;culo 18.2.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[16]= "17)  Son bases de datos NoSQL orientadas a objetos:";
 choices[16]= new Array();
 choices[16][0] = "GemStone";
 choices[16][1] = "Zope Object DB";
 choices[16][2] = "Las dos anteriores";
 choices[16][3] = "Solo B)";
 answers[16] = choices[16][2];
 units[16] = "73";
 comments[16] = "Id Pregunta: 107. ";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[17]= new Array();
 choices[17][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[17][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[17][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[17][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[17] = choices[17][0];
 units[17] = "75";
 comments[17] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[18]= "19)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[18]= new Array();
 choices[18][0] = "Los cr&eacute;ditos";
 choices[18][1] = "Las partidas presupuestarias";
 choices[18][2] = "Los derechos";
 choices[18][3] = "Las obligaciones";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[19]= "20)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[19]= new Array();
 choices[19][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[19][1] = "el Consejo de Estado";
 choices[19][2] = "el Congreso";
 choices[19][3] = "las Cortes Generales";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[20]= "21)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[20]= new Array();
 choices[20][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[20][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[20][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[20][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[20] = choices[20][2];
 units[20] = "8";
 comments[20] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[21]= "22)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[21]= new Array();
 choices[21][0] = "Entradas (entities).";
 choices[21][1] = "Atributos (attribs).";
 choices[21][2] = "M&oacute;dulos (modules).";
 choices[21][3] = "Objetos (objects).";
 answers[21] = choices[21][0];
 units[21] = "74";
 comments[21] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[22]= "23)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[22]= new Array();
 choices[22][0] = "Ejecutivo";
 choices[22][1] = "Limitativo";
 choices[22][2] = "Estimativo";
 choices[22][3] = "Progresivo";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; es el machine learning?";
 choices[23]= new Array();
 choices[23][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[23][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[23][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[23][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[23] = choices[23][0];
 units[23] = "73";
 comments[23] = "Id Pregunta: 659. ";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[24]= "25)  JNDI se usa para el acceso a:";
 choices[24]= new Array();
 choices[24][0] = "Datos de ficheros";
 choices[24][1] = "Sistemas gestores de bases de datos";
 choices[24][2] = "Directorios de nombres";
 choices[24][3] = "Colas de mensajer&iacute;a";
 answers[24] = choices[24][2];
 units[24] = "64";
 comments[24] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[25]= new Array();
 choices[25][0] = "IRIA";
 choices[25][1] = "GALATEA";
 choices[25][2] = "BADARAL";
 choices[25][3] = "SOROLLA";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 446. SERVICIOS COMUNES";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[26]= new Array();
 choices[26][0] = "Un programa presupuestario.";
 choices[26][1] = "Un concepto presupuestario.";
 choices[26][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[26][3] = "Un cr&eacute;dito presupuestario.";
 answers[26] = choices[26][0];
 units[26] = "10";
 comments[26] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[27]= "28)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[27]= new Array();
 choices[27][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[27][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[27][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[27][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[27] = choices[27][3];
 units[27] = "109";
 comments[27] = "Id Pregunta: 652. Junta de Extremadura A1 2015";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[28]= "29)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[28]= new Array();
 choices[28][0] = "Estrat&eacute;gico";
 choices[28][1] = "Operativo";
 choices[28][2] = "T&aacute;ctico";
 choices[28][3] = "Tecnol&oacute;gico";
 answers[28] = choices[28][0];
 units[28] = "36";
 comments[28] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[29]= "30)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[29]= new Array();
 choices[29][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[29][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[29][2] = "Son refrendados por el Rey.";
 choices[29][3] = "Son convocados por el Presidente del Gobierno.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[30]= "31)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[30]= new Array();
 choices[30][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[30][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[30][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[30][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[30] = choices[30][3];
 units[30] = "14";
 comments[30] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[31]= "32)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[31]= new Array();
 choices[31][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[31][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[31][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[31][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[32]= "33)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "De un mes si el acto fuera presunto";
 choices[32][1] = "De un mes si el acto fuera expreso";
 choices[32][2] = "De un mes en cualquier caso";
 choices[32][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[32] = choices[32][1];
 units[32] = "8";
 comments[32] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[33]= new Array();
 choices[33][0] = "No se aplican directamente en los Estados.";
 choices[33][1] = "No son vinculantes.";
 choices[33][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[33][3] = "Tienen alcance general.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[34][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[34][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[34][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[35]= new Array();
 choices[35][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[35][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[35][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[35][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[36][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[36][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[36][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[36] = choices[36][3];
 units[36] = "44";
 comments[36] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[37]= "38)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[37]= new Array();
 choices[37][0] = "Conformidad";
 choices[37][1] = "Responsabilidad";
 choices[37][2] = "Adquisici&oacute;n";
 choices[37][3] = "Desempe&ntilde;o";
 answers[37] = choices[37][0];
 units[37] = "26";
 comments[37] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[38]= new Array();
 choices[38][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[38][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[38][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[38][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[38] = choices[38][3];
 units[38] = "106";
 comments[38] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[39]= "40)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[39]= new Array();
 choices[39][0] = "Primario, que incluye la agricultura y la pesca";
 choices[39][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[39][2] = "Minero, junto con las exportaciones de comercio";
 choices[39][3] = "Servicios";
 answers[39] = choices[39][3];
 units[39] = "12";
 comments[39] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[40]= new Array();
 choices[40][0] = "De los derechos y deberes fundamentales.";
 choices[40][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[40][2] = "Derechos y libertades.";
 choices[40][3] = "De la Corona.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[41]= "42)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[41]= new Array();
 choices[41][0] = "la Administraci&oacute;n General del Estado";
 choices[41][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[41][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[41][3] = "el sector p&uacute;blico y privado institucional";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[42]= "43)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[42]= new Array();
 choices[42][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[42][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[42][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[42][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[42] = choices[42][0];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[43]= new Array();
 choices[43][0] = "a) Los cuatro ejercicios siguientes.";
 choices[43][1] = "b) El ejercicio siguiente.";
 choices[43][2] = "c) Los dos ejercicios siguientes.";
 choices[43][3] = "d) Los tres ejercicios siguientes.";
 answers[43] = choices[43][3];
 units[43] = "10";
 comments[43] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[44]= new Array();
 choices[44][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[44][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[44][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[44][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[45]= "46)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[45]= new Array();
 choices[45][0] = "Programaci&oacute;n estructurada.";
 choices[45][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[45][2] = "Programaci&oacute;n extrema.";
 choices[45][3] = "Programaci&oacute;n Espuria.";
 answers[45] = choices[45][2];
 units[45] = "92";
 comments[45] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[46]= "47)  El cr&eacute;dito presupuestario es...";
 choices[46]= new Array();
 choices[46][0] = "El sujeto que realiza el gasto";
 choices[46][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[46][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[46][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[47]= "48)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[47]= new Array();
 choices[47][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[47][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[47][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[47][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[47] = choices[47][1];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[48]= "49)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[48]= new Array();
 choices[48][0] = "Ejecuci&oacute;n";
 choices[48][1] = "Adjudicaci&oacute;n";
 choices[48][2] = "Licitaci&oacute;n";
 choices[48][3] = "Formalizaci&oacute;n";
 answers[48] = choices[48][3];
 units[48] = "37";
 comments[48] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[49]= new Array();
 choices[49][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[49][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[49][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[49][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[49] = choices[49][3];
 units[49] = "34, 84";
 comments[49] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[50]= new Array();
 choices[50][0] = "En t&iacute;tulos-valores.";
 choices[50][1] = "Las respuestas a) y b) son correctas.";
 choices[50][2] = "Las respuestas a) y b) no son correctas.";
 choices[50][3] = "En cuenta.";
 answers[50] = choices[50][1];
 units[50] = "10";
 comments[50] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[51]= "52)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[51]= new Array();
 choices[51][0] = "por Real Decreto";
 choices[51][1] = "reglamentariamente";
 choices[51][2] = "mediante Ley";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[52]= "53)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[52]= new Array();
 choices[52][0] = "Interchange of Data between Administrations (IDA)";
 choices[52][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[52][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[52][3] = "Interoperability Electronic European Solution (IEES)";
 answers[52] = choices[52][1];
 units[52] = "43";
 comments[52] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[53]= "54)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[53]= new Array();
 choices[53][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[53][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[53][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[53][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[54]= new Array();
 choices[54][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[54][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[54][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[54][3] = "El Senado se compone de 350 senadores.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[55]= new Array();
 choices[55][0] = "Indirecta.";
 choices[55][1] = "Directa.";
 choices[55][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[55][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[56]= "57)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[56][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[56][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[56][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[56] = choices[56][3];
 units[56] = "22";
 comments[56] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[57]= "58)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[57]= new Array();
 choices[57][0] = "623";
 choices[57][1] = "649";
 choices[57][2] = "626";
 choices[57][3] = "565";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[58]= "59)  La recusaci&oacute;n se plantea...";
 choices[58]= new Array();
 choices[58][0] = "Antes de iniciado el procedimiento";
 choices[58][1] = "Una vez iniciado el procedimiento";
 choices[58][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[58][3] = "En cualquier momento del procedimiento";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[59]= "60)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[59]= new Array();
 choices[59][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[59][1] = "Tratarse de un acto no susceptible de recurso";
 choices[59][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[59][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[59] = choices[59][2];
 units[59] = "8";
 comments[59] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[60]= new Array();
 choices[60][0] = "Flexibilidad para variar el servicio o producto";
 choices[60][1] = "Eliminar desperdicios";
 choices[60][2] = "Decidir lo m&aacute;s tarde posible";
 choices[60][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[60] = choices[60][0];
 units[60] = "34";
 comments[60] = "Id Pregunta: 721. Metodologias Lean";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[61]= "62)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[61]= new Array();
 choices[61][0] = "2025";
 choices[61][1] = "2023";
 choices[61][2] = "2030";
 choices[61][3] = "2020";
 answers[61] = choices[61][3];
 units[61] = "28";
 comments[61] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[62]= "63)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[62]= new Array();
 choices[62][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[62][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[62][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[62][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[63]= "64)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[63]= new Array();
 choices[63][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[63][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[63][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[63][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[63] = choices[63][0];
 units[63] = "35";
 comments[63] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[64]= new Array();
 choices[64][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[64][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[64][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[64][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[64] = choices[64][0];
 units[64] = "26";
 comments[64] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[65]= new Array();
 choices[65][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[65][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[65][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[65][3] = "Todos los anteriores";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 592. Estrategia TIC";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[66]= "67)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[66]= new Array();
 choices[66][0] = "la poblaci&oacute;n del territorio";
 choices[66][1] = "el volumen de gesti&oacute;n";
 choices[66][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[67]= "68)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[67]= new Array();
 choices[67][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[67][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[67][2] = "Ministerio de la Presidencia";
 choices[67][3] = "Ministerio de Fomento";
 answers[67] = choices[67][2];
 units[67] = "22";
 comments[67] = "Id Pregunta: 708. Portal de Transparencia";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[68]= "69)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[68]= new Array();
 choices[68][0] = "los registros mercantiles";
 choices[68][1] = "los registros de la propiedad";
 choices[68][2] = "los protocolos notariales";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[69]= "70)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[69]= new Array();
 choices[69][0] = "Relaciones base y vistas.";
 choices[69][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[69][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[69][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[69] = choices[69][3];
 units[69] = "60";
 comments[69] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[70]= new Array();
 choices[70][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[70][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[70][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[70][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[71]= "72)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[71]= new Array();
 choices[71][0] = "Director General";
 choices[71][1] = "Secretario general";
 choices[71][2] = "Subdirector general";
 choices[71][3] = "Subsecretario";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[72]= "73)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[72]= new Array();
 choices[72][0] = "El 23 de julio de 1952.";
 choices[72][1] = "El 18 de abril de 1951.";
 choices[72][2] = "El 16 de abril de 1948.";
 choices[72][3] = "d)Ninguna de las respuestas son correctas.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[73]= "74)  El Tribunal de Justicia est&aacute; formado por:";
 choices[73]= new Array();
 choices[73][0] = "Un Juez de cada Estado miembro.";
 choices[73][1] = "Por dos Jueces de cada Estado miembro.";
 choices[73][2] = "Por veinte Jueces.";
 choices[73][3] = "Por ocho Jueces.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[74]= new Array();
 choices[74][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[74][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[74][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[74][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[74] = choices[74][3];
 units[74] = "77";
 comments[74] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";


