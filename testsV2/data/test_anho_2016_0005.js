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

//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[0]= "1)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[0]= new Array();
 choices[0][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[0][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[0][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[0][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[0] = choices[0][1];
 units[0] = "7";
 comments[0] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[1]= "2)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[1]= new Array();
 choices[1][0] = "Un a&ntilde;o prorrogable";
 choices[1][1] = "Dos a&ntilde;os no prorrogables";
 choices[1][2] = "Un a&ntilde;o no prorrogable";
 choices[1][3] = "Dos a&ntilde;os prorrogables";
 answers[1] = choices[1][2];
 units[1] = "37";
 comments[1] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[2]= "3)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[2]= new Array();
 choices[2][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[2][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[2][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[2][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[3]= "4)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Acoso sexual.";
 choices[3][1] = "Acoso por raz&oacute;n de sexo.";
 choices[3][2] = "Acoso laboral.";
 choices[3][3] = "Acoso mental.";
 answers[3] = choices[3][1];
 units[3] = "14";
 comments[3] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[4]= new Array();
 choices[4][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[4][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[4][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[4][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[4] = choices[4][3];
 units[4] = "10";
 comments[4] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la respuesta falsa:";
 choices[5]= new Array();
 choices[5][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[5][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[5][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[5][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[6]= "7)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[6]= new Array();
 choices[6][0] = "formular solicitudes";
 choices[6][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[6][2] = "presentar declaraciones responsables o comunicaciones";
 choices[6][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[6] = choices[6][1];
 units[6] = "7";
 comments[6] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[7]= new Array();
 choices[7][0] = "Al Consejo Europeo.";
 choices[7][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[7][2] = "A la Comisi&oacute;n Europea.";
 choices[7][3] = "Al Parlamento Europeo.";
 answers[7] = choices[7][2];
 units[7] = "5";
 comments[7] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[8]= new Array();
 choices[8][0] = "Car&aacute;cter sustitutivo";
 choices[8][1] = "Car&aacute;cter obligatorio";
 choices[8][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = choices[8][3];
 units[8] = "19";
 comments[8] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[9]= "10)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[9]= new Array();
 choices[9][0] = "Medidas de igualdad.";
 choices[9][1] = "Objetivos de igualdad.";
 choices[9][2] = "Ambas son correctas.";
 choices[9][3] = "A y B son incorrectas.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[10]= new Array();
 choices[10][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[10][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[10][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][2];
 units[10] = "18, 20";
 comments[10] = "Id Pregunta: 742. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[11]= new Array();
 choices[11][0] = "Dos Cap&iacute;tulos.";
 choices[11][1] = "Tres Cap&iacute;tulos.";
 choices[11][2] = "Un Cap&iacute;tulo.";
 choices[11][3] = "Cuatro Cap&iacute;tulos.";
 answers[11] = choices[11][1];
 units[11] = "1";
 comments[11] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[12]= "13)  La sede del Parlamento Europeo se encuentra en:";
 choices[12]= new Array();
 choices[12][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[12][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[12][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[12][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[13]= new Array();
 choices[13][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[13][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[13][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[13][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[13] = choices[13][3];
 units[13] = "66";
 comments[13] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[14]= "15)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[14][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[14][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[14][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[14] = choices[14][0];
 units[14] = "43";
 comments[14] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[15]= "16)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[15]= new Array();
 choices[15][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[15][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[15][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][3];
 units[15] = "7";
 comments[15] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[16]= new Array();
 choices[16][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[16][1] = "La Direcci&oacute;n de la Competencia.";
 choices[16][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[16][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[16] = choices[16][0];
 units[16] = "121";
 comments[16] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[17]= new Array();
 choices[17][0] = "Ley Org&aacute;nica.";
 choices[17][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[17][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[17][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[18]= "19)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[18]= new Array();
 choices[18][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[18][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[18][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[18][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[18] = choices[18][2];
 units[18] = "76";
 comments[18] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[19]= "20)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[19]= new Array();
 choices[19][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[19][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[19][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[19][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[20][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[20][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[21]= "22)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[21]= new Array();
 choices[21][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[21][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[21][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[21][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[21] = choices[21][2];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[22]= new Array();
 choices[22][0] = "Anualmente";
 choices[22][1] = "Bienalmente";
 choices[22][2] = "Cada cuatro a&ntilde;os";
 choices[22][3] = "No se define ninguna periodicidad";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[23]= "24)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[23]= new Array();
 choices[23][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[23][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[23][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[23][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[24]= new Array();
 choices[24][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[24][1] = "La delimitaci&oacute;n de su territorio.";
 choices[24][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[24][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[25]= new Array();
 choices[25][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[25][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[25][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[25][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[25] = choices[25][0];
 units[25] = "19";
 comments[25] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[26]= "27)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[26][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[26][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[26][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[27]= "28)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[27]= new Array();
 choices[27][0] = "A la persona demandante.";
 choices[27][1] = "A la persona demandada.";
 choices[27][2] = "Al &oacute;rgano judicial.";
 choices[27][3] = "Al &oacute;rgano administrativo.";
 answers[27] = choices[27][1];
 units[27] = "14";
 comments[27] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[28]= "29)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[28]= new Array();
 choices[28][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[28][1] = "Uno de sus miembros.";
 choices[28][2] = "La Comisi&oacute;n.";
 choices[28][3] = "Todas las respuestas son correctas.";
 answers[28] = choices[28][3];
 units[28] = "5";
 comments[28] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[29]= "30)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[29]= new Array();
 choices[29][0] = "El Ministerio de Igualdad.";
 choices[29][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[29][2] = "Ambas son correctas.";
 choices[29][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[30]= "31)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[30]= new Array();
 choices[30][0] = "Las instituciones comunitarias.";
 choices[30][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[30][2] = "Los Estados miembros.";
 choices[30][3] = "Los nacionales de los Estados miembros.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[31][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[31][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[31][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[31] = choices[31][2];
 units[31] = "48";
 comments[31] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[32]= "33)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[32]= new Array();
 choices[32][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[32][1] = "La libertad sexual y religiosa.";
 choices[32][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[32][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[32] = choices[32][3];
 units[32] = "1";
 comments[32] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[33]= "34)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[33]= new Array();
 choices[33][0] = "El acoso sexual.";
 choices[33][1] = "El acoso por raz&oacute;n del sexo.";
 choices[33][2] = "Ambas son correctas.";
 choices[33][3] = "A y B son incorrectas.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[34]= new Array();
 choices[34][0] = "JUnit, Artifactory y SonarQube";
 choices[34][1] = "JUnit, Artifactory y Selenium";
 choices[34][2] = "JUnit, SonarQube y Selenium";
 choices[34][3] = "ArtiFactory, SonarQube y Selenium";
 answers[34] = choices[34][2];
 units[34] = "92";
 comments[34] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[35]= "36)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[35]= new Array();
 choices[35][0] = "Pas&oacute; de 518 a 626.";
 choices[35][1] = "Pas&oacute; de 434 a 518.";
 choices[35][2] = "Pas&oacute; de 345 a 512.";
 choices[35][3] = "Pas&oacute; de 435 a 610.";
 answers[35] = choices[35][1];
 units[35] = "5";
 comments[35] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[36]= "37)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[36]= new Array();
 choices[36][0] = "Est&aacute; desarrollado en Java.";
 choices[36][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[36][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[36][3] = "Todas las afirmaciones son correctas.";
 answers[36] = choices[36][2];
 units[36] = "92";
 comments[36] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[37]= new Array();
 choices[37][0] = "al menos por 50 Diputados.";
 choices[37][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[37][2] = "por la Mesa del Congreso de los Diputados.";
 choices[37][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[37] = choices[37][1];
 units[37] = "1";
 comments[37] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[38]= new Array();
 choices[38][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[38][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[38][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[38][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[38] = choices[38][1];
 units[38] = "89";
 comments[38] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[39][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[39][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[39][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[39] = choices[39][0];
 units[39] = "45";
 comments[39] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta correcta:";
 choices[40]= new Array();
 choices[40][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[40][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[40][2] = "A y B son correctas.";
 choices[40][3] = "A y B son falsas.";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[41]= new Array();
 choices[41][0] = "En 2011";
 choices[41][1] = "En 2013";
 choices[41][2] = "En 2015";
 choices[41][3] = "En 2016";
 answers[41] = choices[41][2];
 units[41] = "17";
 comments[41] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la respuesta correcta:";
 choices[42]= new Array();
 choices[42][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[42][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[42][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[42][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[42] = choices[42][0];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[43]= "44)  Sobre el recurso de reposici&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[43][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[43][2] = "Ha desaparecido en la Ley 39/2015";
 choices[43][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[43] = choices[43][0];
 units[43] = "8";
 comments[43] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[44]= "45)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[44]= new Array();
 choices[44][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[44][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[44][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[44][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[44] = choices[44][3];
 units[44] = "1";
 comments[44] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[45]= "46)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[45]= new Array();
 choices[45][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[45][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[45][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[45][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[46]= "47)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[46]= new Array();
 choices[46][0] = "X.";
 choices[46][1] = "XIX.";
 choices[46][2] = "XV.";
 choices[46][3] = "XIII.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[47]= new Array();
 choices[47][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[47][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[47][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[47][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[47] = choices[47][2];
 units[47] = "77";
 comments[47] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[48]= "49)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[48]= new Array();
 choices[48][0] = "Un plan de igualdad.";
 choices[48][1] = "Un informe de impacto de g&eacute;nero.";
 choices[48][2] = "Un programa de igualdad.";
 choices[48][3] = "Todas son correctas.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[49]= "50)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[49]= new Array();
 choices[49][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[49][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[49][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[49][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[49] = choices[49][1];
 units[49] = "106";
 comments[49] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[50]= "51)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[50]= new Array();
 choices[50][0] = "apud acta";
 choices[50][1] = "presencialmente";
 choices[50][2] = "electr&oacute;nicamente";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[51]= new Array();
 choices[51][0] = "El Parlamento y el Consejo.";
 choices[51][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[51][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[51][3] = "La Comisi&oacute;n y el Consejo.";
 answers[51] = choices[51][2];
 units[51] = "5";
 comments[51] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[52]= new Array();
 choices[52][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[52][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[52][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[52][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[52] = choices[52][1];
 units[52] = "76";
 comments[52] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[53]= new Array();
 choices[53][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[53][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[53][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[53][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[54]= new Array();
 choices[54][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[54][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[54][2] = "la falta de interoperabilidad.";
 choices[54][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[55]= new Array();
 choices[55][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[55][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[55][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[55][3] = "Todos los anteriores";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[56]= "57)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[56]= new Array();
 choices[56][0] = "La Comisi&oacute;n Europea.";
 choices[56][1] = "El Consejo Europeo.";
 choices[56][2] = "El Consejo de Europa.";
 choices[56][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[57]= new Array();
 choices[57][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[57][1] = "Implantar el mercado general europeo";
 choices[57][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[57][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 756. Agenda Digital Europea";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[58]= "59)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "Principio de transparencia.";
 choices[58][1] = "Principio de cooperaci&oacute;n.";
 choices[58][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[58][3] = "Principio de lealtad institucional.";
 answers[58] = choices[58][1];
 units[58] = "10";
 comments[58] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[59]= "60)  Los Subdirectores generales:";
 choices[59]= new Array();
 choices[59][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[59][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[59][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[59][3] = "todas son correctas";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[60]= new Array();
 choices[60][0] = "Art&iacute;culo 16.2.";
 choices[60][1] = "Art&iacute;culo 17.1.";
 choices[60][2] = "Art&iacute;culo 18.1.";
 choices[60][3] = "Art&iacute;culo 18.2.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[61]= new Array();
 choices[61][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[61][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[61][2] = "Fomentar el despliegue de redes y servicios";
 choices[61][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[61] = choices[61][0];
 units[61] = "19";
 comments[61] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[62]= new Array();
 choices[62][0] = "Constitucional.";
 choices[62][1] = "Penal.";
 choices[62][2] = "Militar.";
 choices[62][3] = "Tribunales consuetudinarios.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[63]= new Array();
 choices[63][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[63][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[63][2] = "El que hubieren designado las Cortes Generales.";
 choices[63][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[64]= "65)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[64]= new Array();
 choices[64][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[64][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[64][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[64][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[65]= new Array();
 choices[65][0] = "Backup full.";
 choices[65][1] = "Backup diferencial.";
 choices[65][2] = "Backup incremental.";
 choices[65][3] = "Backup deduplicado.";
 answers[65] = choices[65][3];
 units[65] = "53";
 comments[65] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[66]= "67)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[66]= new Array();
 choices[66][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[66][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[66][2] = "Son refrendados por el Rey.";
 choices[66][3] = "Son convocados por el Presidente del Gobierno.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[67]= "68)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[67]= new Array();
 choices[67][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[67][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[67][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[67][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[68]= new Array();
 choices[68][0] = "JAXP";
 choices[68][1] = "JNI";
 choices[68][2] = "JNDI";
 choices[68][3] = "JDBC";
 answers[68] = choices[68][1];
 units[68] = "64";
 comments[68] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[69]= "70)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[69]= new Array();
 choices[69][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[69][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[69][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[69][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[69] = choices[69][0];
 units[69] = "60";
 comments[69] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[70]= new Array();
 choices[70][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[70][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[70][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[70][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[71]= "72)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[71]= new Array();
 choices[71][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[71][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[71][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[71][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[71] = choices[71][2];
 units[71] = "22";
 comments[71] = "Id Pregunta: 128. ";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[72]= "73)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[72]= new Array();
 choices[72][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[72][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[72][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[72][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[72] = choices[72][0];
 units[72] = "31";
 comments[72] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique la afirmaci&oacute;n falsa:";
 choices[73]= new Array();
 choices[73][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[73][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[73][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[73][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[73] = choices[73][1];
 units[73] = "22";
 comments[73] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[74]= "75)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[74]= new Array();
 choices[74][0] = "l Consejo General del Poder Judicial";
 choices[74][1] = "El pleno de Tribunal Constitucional";
 choices[74][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[74][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[74] = choices[74][3];
 units[74] = "1";
 comments[74] = "Id Pregunta: 181. CONSTITUCION1978";


