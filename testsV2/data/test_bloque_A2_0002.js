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

//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[0]= new Array();
 choices[0][0] = "Un programa presupuestario.";
 choices[0][1] = "Un concepto presupuestario.";
 choices[0][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[0][3] = "Un cr&eacute;dito presupuestario.";
 answers[0] = choices[0][0];
 units[0] = "10";
 comments[0] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";
 preguntaids[0] = 493


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[1]= "2)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[1]= new Array();
 choices[1][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[1][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[1][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[1][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[1] = 825


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[2]= new Array();
 choices[2][0] = "Reducir el gasto p&uacute;blico.";
 choices[2][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[2][2] = "Reducir el endeudamiento neto.";
 choices[2][3] = "Al Fondo de Contingencia.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[2] = 509


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[3]= "4)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[3]= new Array();
 choices[3][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[3][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[3][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[3][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[3] = choices[3][1];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[3] = 768


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[4]= "5)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[4]= new Array();
 choices[4][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[4][1] = "la Organizaci&oacute;n Territorial";
 choices[4][2] = "la Organizaci&oacute;n sectorial";
 choices[4][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[4] = 787


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[5]= "6)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[5]= new Array();
 choices[5][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[5][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[5][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[5][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[5] = 506


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[6]= "7)  La Administraci&oacute;n General del Estado se organiza:";
 choices[6]= new Array();
 choices[6][0] = "en Ministerios";
 choices[6][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[6][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[6][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[6] = choices[6][1];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[6] = 802


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[7]= "8)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[7]= new Array();
 choices[7][0] = "Cuatro millones de euros.";
 choices[7][1] = "Seis millones de euros.";
 choices[7][2] = "Siete millones de euros.";
 choices[7][3] = "Cinco millones de euros.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";
 preguntaids[7] = 483


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[8]= "9)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[8]= new Array();
 choices[8][0] = "Subsecretario";
 choices[8][1] = "Subdirector general";
 choices[8][2] = "Secretario de Estado";
 choices[8][3] = "ninguna es correcta";
 answers[8] = choices[8][1];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[8] = 792


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[9]= new Array();
 choices[9][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[9][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[9][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[9][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[9] = choices[9][3];
 units[9] = "10";
 comments[9] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[9] = 507


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[10]= "11)  La recusaci&oacute;n se plantea...";
 choices[10]= new Array();
 choices[10][0] = "Antes de iniciado el procedimiento";
 choices[10][1] = "Una vez iniciado el procedimiento";
 choices[10][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[10][3] = "En cualquier momento del procedimiento";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[10] = 829


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[11]= "12)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[11]= new Array();
 choices[11][0] = "Ejecutivo";
 choices[11][1] = "Limitativo";
 choices[11][2] = "Estimativo";
 choices[11][3] = "Progresivo";
 answers[11] = choices[11][1];
 units[11] = "10";
 comments[11] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";
 preguntaids[11] = 449


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[12]= "13)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[12]= new Array();
 choices[12][0] = "los Subsecretarios y los Secretarios generales";
 choices[12][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[12][2] = "los Secretarios de Estado y los Directores generales";
 choices[12][3] = "los Ministros y los Secretarios de Estado";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[12] = 788


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[13]= new Array();
 choices[13][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[13][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[13][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[13][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[13] = choices[13][2];
 units[13] = "7";
 comments[13] = "Id Pregunta: 536. LEY 39/2015";
 preguntaids[13] = 536


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[14]= new Array();
 choices[14][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[14][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[14][2] = "Las respuestas a) b) no son correctas.";
 choices[14][3] = "Las respuestas a) y b) son correctas.";
 answers[14] = choices[14][3];
 units[14] = "10";
 comments[14] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[14] = 482


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[15]= "16)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[15]= new Array();
 choices[15][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[15][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[15][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[15][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 840. Ley 40/2015";
 preguntaids[15] = 840


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ala la correcta:";
 choices[16]= new Array();
 choices[16][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[16][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[16][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[16][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[16] = choices[16][1];
 units[16] = "7";
 comments[16] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[16] = 543


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[17]= "18)  En las Administraciones P&uacute;blicas...";
 choices[17]= new Array();
 choices[17][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[17][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[17][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[17][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[17] = choices[17][0];
 units[17] = "10";
 comments[17] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[17] = 455


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[18]= new Array();
 choices[18][0] = "En t&iacute;tulos-valores.";
 choices[18][1] = "Las respuestas a) y b) son correctas.";
 choices[18][2] = "Las respuestas a) y b) no son correctas.";
 choices[18][3] = "En cuenta.";
 answers[18] = choices[18][1];
 units[18] = "10";
 comments[18] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[18] = 500


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[19]= "20)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[19][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[19][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[19][3] = "cualquiera que sea el estado del procedimiento";
 answers[19] = choices[19][3];
 units[19] = "7";
 comments[19] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[19] = 527


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[20]= "21)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[20]= new Array();
 choices[20][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[20][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[20][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[20][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "7";
 comments[20] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[20] = 673


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[21]= "22)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[21]= new Array();
 choices[21][0] = "Dos.";
 choices[21][1] = "Cuatro.";
 choices[21][2] = "Cinco.";
 choices[21][3] = "Tres.";
 answers[21] = choices[21][1];
 units[21] = "10";
 comments[21] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";
 preguntaids[21] = 491


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[22]= "23)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[22]= new Array();
 choices[22][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[22][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[22][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[22][3] = "Todas son correctas.";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[22] = 839


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[23]= "24)  El sector p&uacute;blico institucional se integra por:";
 choices[23]= new Array();
 choices[23][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[23][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[23][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[23][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[23] = 523


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[24]= "25)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[24]= new Array();
 choices[24][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[24][1] = "garantizar la conservaci&oacute;n del documento";
 choices[24][2] = "garantizar la autenticidad del documento";
 choices[24][3] = "garantizar la integridad del documento";
 answers[24] = choices[24][0];
 units[24] = "7";
 comments[24] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[24] = 152


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[25]= "26)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[25]= new Array();
 choices[25][0] = "Transferencias de cr&eacute;dito.";
 choices[25][1] = "Incorporaciones de cr&eacute;dito.";
 choices[25][2] = "Imputaciones de cr&eacute;dito.";
 choices[25][3] = "Ampliaciones de cr&eacute;dito.";
 answers[25] = choices[25][2];
 units[25] = "10";
 comments[25] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";
 preguntaids[25] = 464


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[26]= "27)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[26]= new Array();
 choices[26][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[26][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[26][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[26][3] = "Todas son correctas.";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[26] = 842


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[27]= "28)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[27]= new Array();
 choices[27][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[27][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[27][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[27][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[27] = choices[27][1];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 808. Ley 40/2015";
 preguntaids[27] = 808


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[28]= "29)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "Con el a&ntilde;o anterior.";
 choices[28][1] = "Con los tres a&ntilde;os anteriores.";
 choices[28][2] = "Con el a&ntilde;o natural.";
 choices[28][3] = "Con los dos a&ntilde;os anteriores.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[28] = 468


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[29]= "30)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[29]= new Array();
 choices[29][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[29][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[29][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][2];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[29] = 819


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[30]= "31)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[30]= new Array();
 choices[30][0] = "circulares";
 choices[30][1] = "reglamentos internos";
 choices[30][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[30][3] = "disposiciones de car&aacute;cter general";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 780. Ley 40/2015";
 preguntaids[30] = 780


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[31]= "32)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[31]= new Array();
 choices[31][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[31][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[31][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[31][3] = "Todas son correctas.";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[31] = 836


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[32]= "33)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[32]= new Array();
 choices[32][0] = "solo mediante ley";
 choices[32][1] = "reglamentariamente";
 choices[32][2] = "mediante ley o reglamentariamente";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 514. LEY 39/2015";
 preguntaids[32] = 514


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[33]= "34)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[33]= new Array();
 choices[33][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[33][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[33][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[33][3] = "todas son correctas";
 answers[33] = choices[33][3];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 781. Ley 40/2015";
 preguntaids[33] = 781


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[34]= "35)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[34]= new Array();
 choices[34][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[34][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[34][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[34][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[34] = 466


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[35]= new Array();
 choices[35][0] = "Por reembolso de pr&eacute;stamos.";
 choices[35][1] = "Por la venta de bienes.";
 choices[35][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[35][3] = "Por prestaci&oacute;n de servicios.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";
 preguntaids[35] = 496


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[36]= new Array();
 choices[36][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[36][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[36][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[36][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[36] = 775


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[37]= "38)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[37][1] = "Las inversiones reales y financieras.";
 choices[37][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[37][3] = "Las transferencias de capital y las inversiones reales.";
 answers[37] = choices[37][3];
 units[37] = "10";
 comments[37] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[37] = 471


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[38]= new Array();
 choices[38][0] = "Las respuestas a) y b) son correctas.";
 choices[38][1] = "Las respuestas a) y b) no son correctas.";
 choices[38][2] = "Contenido coherente con los planes sectoriales.";
 choices[38][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[38] = choices[38][0];
 units[38] = "10";
 comments[38] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";
 preguntaids[38] = 467


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[39]= "40)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[39]= new Array();
 choices[39][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[39][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[39][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[39][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[39] = choices[39][2];
 units[39] = "7";
 comments[39] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[39] = 529


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[40]= "41)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[40]= new Array();
 choices[40][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[40][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[40][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[40][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[40] = choices[40][2];
 units[40] = "8";
 comments[40] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[40] = 143


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[41]= "42)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[41]= new Array();
 choices[41][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[41][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[41][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "7";
 comments[41] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";
 preguntaids[41] = 154


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[42]= new Array();
 choices[42][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[42][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[42][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[42][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[42] = choices[42][1];
 units[42] = "7";
 comments[42] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[42] = 156


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[43]= "44)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[43]= new Array();
 choices[43][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[43][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[43][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[43][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[43] = choices[43][2];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[43] = 813


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[44]= new Array();
 choices[44][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[44][1] = "Auditor&iacute;a operativa.";
 choices[44][2] = "Auditor&iacute;a de cumplimiento.";
 choices[44][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[44] = 474


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[45]= "46)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[45][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[45][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[45][3] = "Todas las anteriores son ciertas";
 answers[45] = choices[45][3];
 units[45] = "8";
 comments[45] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";
 preguntaids[45] = 145


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[46]= new Array();
 choices[46][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[46][1] = "Todas las respuestas son correctas.";
 choices[46][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[46][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[46] = choices[46][1];
 units[46] = "10";
 comments[46] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";
 preguntaids[46] = 476


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[47]= new Array();
 choices[47][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[47][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[47][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[47][3] = "todas son correctas";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 542. LEY 39/2015";
 preguntaids[47] = 542


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[48]= "49)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[48]= new Array();
 choices[48][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[48][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[48][2] = "a y b son correctas";
 choices[48][3] = "a y b son incorrectas";
 answers[48] = choices[48][0];
 units[48] = "7";
 comments[48] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[48] = 153


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[49]= "50)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[49]= new Array();
 choices[49][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[49][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[49][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[49][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[49] = 530


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[50]= "51)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[50]= new Array();
 choices[50][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[50][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[50][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[50][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";
 preguntaids[50] = 508


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[51]= new Array();
 choices[51][0] = "Ley 50/1997, del Gobierno.";
 choices[51][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[51][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[51][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[51] = choices[51][1];
 units[51] = "10";
 comments[51] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[51] = 475


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[52]= "53)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[52]= new Array();
 choices[52][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[52][1] = "el Consejo de Estado";
 choices[52][2] = "el Congreso";
 choices[52][3] = "las Cortes Generales";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[52] = 785


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[53]= new Array();
 choices[53][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[53][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[53][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[53][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[53] = choices[53][1];
 units[53] = "10";
 comments[53] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";
 preguntaids[53] = 748


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[54]= new Array();
 choices[54][0] = "Al Gobierno de la naci&oacute;n";
 choices[54][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[54][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[54][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[54] = choices[54][3];
 units[54] = "7";
 comments[54] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[54] = 147


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[55]= "56)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[55]= new Array();
 choices[55][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[55][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[55][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[55][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[55] = choices[55][3];
 units[55] = "7";
 comments[55] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[55] = 526


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[56]= "57)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[56]= new Array();
 choices[56][0] = "la Administraci&oacute;n General del Estado";
 choices[56][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[56][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[56][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[56] = 519


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[57][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[57][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[57][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[57] = 670


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[58]= new Array();
 choices[58][0] = "El Ministro de Econom&iacute;a.";
 choices[58][1] = "El Gobierno.";
 choices[58][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[58][3] = "El Presidente del Gobierno.";
 answers[58] = choices[58][1];
 units[58] = "10";
 comments[58] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";
 preguntaids[58] = 472


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[59]= "60)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[59]= new Array();
 choices[59][0] = "formular solicitudes";
 choices[59][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[59][2] = "presentar declaraciones responsables o comunicaciones";
 choices[59][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[59] = 531


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[60]= new Array();
 choices[60][0] = "Las Cortes Generales.";
 choices[60][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][2] = "El Gobierno.";
 choices[60][3] = "El Congreso de los Diputados.";
 answers[60] = choices[60][0];
 units[60] = "10";
 comments[60] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[60] = 489


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[61]= "62)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[61]= new Array();
 choices[61][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[61][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[61][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[61][3] = "Todas son correctas.";
 answers[61] = choices[61][3];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[61] = 834


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[62]= "63)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[62]= new Array();
 choices[62][0] = "La Ley General Tributaria.";
 choices[62][1] = "La Ley Presupuestaria.";
 choices[62][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[62][3] = "Ninguna de las respuestas es correcta.";
 answers[62] = choices[62][0];
 units[62] = "10";
 comments[62] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[62] = 488


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[63]= "64)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[63]= new Array();
 choices[63][0] = "los Secretarios generales t&eacute;cnicos";
 choices[63][1] = "los Directores generales";
 choices[63][2] = "los Secretarios generales";
 choices[63][3] = "los Subsecretarios";
 answers[63] = choices[63][1];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 807. Ley 40/2015";
 preguntaids[63] = 807


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[64]= "65)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[64]= new Array();
 choices[64][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[64][1] = "el C&oacute;digo Civil";
 choices[64][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[64][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[64] = 776


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[65]= "66)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[65]= new Array();
 choices[65][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[65][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[65][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[65][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[65] = 838


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[66]= "67)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[66]= new Array();
 choices[66][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[66][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[66][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[66][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[66] = choices[66][1];
 units[66] = "7";
 comments[66] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[66] = 517


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[67]= "68)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[67]= new Array();
 choices[67][0] = "el Gobierno de la Naci&oacute;n";
 choices[67][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[67][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[67][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[67] = choices[67][3];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[67] = 773


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[68]= "69)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[68]= new Array();
 choices[68][0] = "Un d&iacute;a";
 choices[68][1] = "Dos d&iacute;as";
 choices[68][2] = "Tres d&iacute;as";
 choices[68][3] = "Cuatro d&iacute;as";
 answers[68] = choices[68][3];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[68] = 831


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Administraciones P&uacute;blicas:";
 choices[69]= new Array();
 choices[69][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[69][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[69][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][1];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[69] = 772


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[70]= new Array();
 choices[70][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[70][1] = "Pasivos financieros y transferencias de capital.";
 choices[70][2] = "Activos financieros y pasivos financieros.";
 choices[70][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[70] = 461


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[71]= "72)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[71]= new Array();
 choices[71][0] = "los Ministros y los Secretarios de Estado";
 choices[71][1] = "los Subsecretarios y Secretarios generales";
 choices[71][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[71][3] = "los Directores generales";
 answers[71] = choices[71][2];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[71] = 793


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[72]= "73)  Los Subdirectores generales:";
 choices[72]= new Array();
 choices[72][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[72][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[72][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[72][3] = "todas son correctas";
 answers[72] = choices[72][1];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[72] = 811


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[73]= "74)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[73]= new Array();
 choices[73][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[73][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[73][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[73][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[73] = 784


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[74]= "75)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[74]= new Array();
 choices[74][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[74][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[74][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[74][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[74] = 800


