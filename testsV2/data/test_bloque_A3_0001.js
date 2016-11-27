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

//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[0]= new Array();
 choices[0][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[0][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[0][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[0][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[0] = choices[0][2];
 units[0] = "15";
 comments[0] = "Id Pregunta: 118. ";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[1]= "2)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[1]= new Array();
 choices[1][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[1][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[1][2] = "Ninguna es correcta.";
 choices[1][3] = "A y B son correctas.";
 answers[1] = choices[1][1];
 units[1] = "14";
 comments[1] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[2]= new Array();
 choices[2][0] = "Anual";
 choices[2][1] = "Mensual";
 choices[2][2] = "Semestral";
 choices[2][3] = "Trimestral";
 answers[2] = choices[2][3];
 units[2] = "15";
 comments[2] = "Id Pregunta: 119. ";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[3]= "4)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[3]= new Array();
 choices[3][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[3][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[3][2] = "Ambas son correctas.";
 choices[3][3] = "A y B son incorrectas.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[4]= new Array();
 choices[4][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[4][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[4][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[4][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[4] = choices[4][1];
 units[4] = "12";
 comments[4] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[5]= new Array();
 choices[5][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[5][1] = "Excesiva estabilidad de empleo";
 choices[5][2] = "An&eacute;mico crecimiento de la productividad";
 choices[5][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[5] = choices[5][1];
 units[5] = "12";
 comments[5] = "Id Pregunta: 563. Modelo econ&oacute;mico";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[6]= "7)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[6]= new Array();
 choices[6][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[6][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[6][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[6][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[6] = choices[6][3];
 units[6] = "12";
 comments[6] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[7]= "8)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[7][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[7][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[7][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[7] = choices[7][1];
 units[7] = "14";
 comments[7] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[8]= new Array();
 choices[8][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[8][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[8][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[8][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[8] = choices[8][1];
 units[8] = "15";
 comments[8] = "Id Pregunta: 112. ";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[9]= new Array();
 choices[9][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[9][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[9][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[9][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[9] = choices[9][0];
 units[9] = "14";
 comments[9] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[10]= new Array();
 choices[10][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[10][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[10][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[10][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[10] = choices[10][2];
 units[10] = "12";
 comments[10] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[11]= "12)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[11]= new Array();
 choices[11][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[11][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[11][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[11][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[11] = choices[11][3];
 units[11] = "14";
 comments[11] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[12]= "13)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[12]= new Array();
 choices[12][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[12][1] = "En el extranjero.";
 choices[12][2] = "Ninguna es correcta.";
 choices[12][3] = "Ambas son correctas.";
 answers[12] = choices[12][0];
 units[12] = "14";
 comments[12] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[13]= "14)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[13]= new Array();
 choices[13][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[13][1] = "Protecci&oacute;n de su salud.";
 choices[13][2] = "Ninguna es correcta.";
 choices[13][3] = "A y B son correctas.";
 answers[13] = choices[13][1];
 units[13] = "14";
 comments[13] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[14]= new Array();
 choices[14][0] = "Indirecta.";
 choices[14][1] = "Directa.";
 choices[14][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[14][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[15]= "16)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[15]= new Array();
 choices[15][0] = "Acciones de discriminaci&oacute;n.";
 choices[15][1] = "Acciones positivas.";
 choices[15][2] = "Acciones negativas.";
 choices[15][3] = "Acciones neutras.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[16]= "17)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[16]= new Array();
 choices[16][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[16][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[16][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[16][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[16] = choices[16][2];
 units[16] = "12";
 comments[16] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[17]= new Array();
 choices[17][0] = "Anualmente por el Consejo de Ministros";
 choices[17][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[17][2] = "Al final de cada legislatura por el Gobierno";
 choices[17][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[18]= "19)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[18]= new Array();
 choices[18][0] = "Primario, que incluye la agricultura y la pesca";
 choices[18][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[18][2] = "Minero, junto con las exportaciones de comercio";
 choices[18][3] = "Servicios";
 answers[18] = choices[18][3];
 units[18] = "12";
 comments[18] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[19]= "20)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[19]= new Array();
 choices[19][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[19][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[19][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[19][3] = "Todos las anteriores son ciertas.";
 answers[19] = choices[19][3];
 units[19] = "12";
 comments[19] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[20]= new Array();
 choices[20][0] = "Art. 25 LO, 3/2007.";
 choices[20][1] = "Art. 23 LO, 3/2007.";
 choices[20][2] = "Art. 14 LO, 3/2007.";
 choices[20][3] = "Ninguna es correcta, es el art. 13.";
 answers[20] = choices[20][0];
 units[20] = "14";
 comments[20] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[21]= new Array();
 choices[21][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[21][1] = "Entrada en la Uni&oacute;n Europea";
 choices[21][2] = "Pactos de la Moncloa";
 choices[21][3] = "Ingreso en la ONU";
 answers[21] = choices[21][3];
 units[21] = "12";
 comments[21] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[22]= "23)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[22]= new Array();
 choices[22][0] = "Los ocupados y los parados activos";
 choices[22][1] = "S&oacute;lo los ocupados";
 choices[22][2] = "Los ocupados y los inactivos";
 choices[22][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[22] = choices[22][0];
 units[22] = "12";
 comments[22] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[23]= "24)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[23][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[23][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[23][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[24]= "25)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[24]= new Array();
 choices[24][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[24][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[24][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[24][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[24] = choices[24][0];
 units[24] = "15";
 comments[24] = "Id Pregunta: 111. ";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[25]= "26)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[25]= new Array();
 choices[25][0] = "Sean dirigidas por mujeres";
 choices[25][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[25][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[25][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[25] = choices[25][2];
 units[25] = "14";
 comments[25] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[26]= "27)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[26]= new Array();
 choices[26][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[26][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[26][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[26][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[26] = choices[26][0];
 units[26] = "12";
 comments[26] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[27]= "28)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[27]= new Array();
 choices[27][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[27][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[27][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[27][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[27] = choices[27][1];
 units[27] = "14";
 comments[27] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[28]= "29)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[28]= new Array();
 choices[28][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[28][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[28][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[28][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[28] = choices[28][0];
 units[28] = "12";
 comments[28] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[29]= new Array();
 choices[29][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[29][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[29][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[29][3] = "El pago de subsidios a parados";
 answers[29] = choices[29][3];
 units[29] = "15";
 comments[29] = "Id Pregunta: 116. ";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[30]= "31)  La Poblaci&oacute;n Activa incluye a:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[30][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[30][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[30][3] = "Todo aquel que desea trabajar";
 answers[30] = choices[30][2];
 units[30] = "15";
 comments[30] = "Id Pregunta: 110. ";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[31]= "32)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[31]= new Array();
 choices[31][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[31][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[31][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[31][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[32]= new Array();
 choices[32][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[32][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[32][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[32][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[32] = choices[32][0];
 units[32] = "15";
 comments[32] = "Id Pregunta: 117. ";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[33]= "34)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Acoso sexual.";
 choices[33][1] = "Acoso por raz&oacute;n de sexo.";
 choices[33][2] = "Acoso laboral.";
 choices[33][3] = "Acoso mental.";
 answers[33] = choices[33][1];
 units[33] = "14";
 comments[33] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[34]= "35)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "Medidas de igualdad.";
 choices[34][1] = "Objetivos de igualdad.";
 choices[34][2] = "Ambas son correctas.";
 choices[34][3] = "A y B son incorrectas.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[35]= "36)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[35]= new Array();
 choices[35][0] = "A la persona demandante.";
 choices[35][1] = "A la persona demandada.";
 choices[35][2] = "Al &oacute;rgano judicial.";
 choices[35][3] = "Al &oacute;rgano administrativo.";
 answers[35] = choices[35][1];
 units[35] = "14";
 comments[35] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[36]= "37)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "El Ministerio de Igualdad.";
 choices[36][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[36][2] = "Ambas son correctas.";
 choices[36][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[36] = choices[36][1];
 units[36] = "14";
 comments[36] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[37]= "38)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[37]= new Array();
 choices[37][0] = "El acoso sexual.";
 choices[37][1] = "El acoso por raz&oacute;n del sexo.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "A y B son incorrectas.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[38]= "39)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[38]= new Array();
 choices[38][0] = "Un plan de igualdad.";
 choices[38][1] = "Un informe de impacto de g&eacute;nero.";
 choices[38][2] = "Un programa de igualdad.";
 choices[38][3] = "Todas son correctas.";
 answers[38] = choices[38][1];
 units[38] = "14";
 comments[38] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[39]= new Array();
 choices[39][0] = "Art&iacute;culo 14 CE.";
 choices[39][1] = "Art&iacute;culo 9.2 CE.";
 choices[39][2] = "Art&iacute;culo 9.1 CE.";
 choices[39][3] = "Art&iacute;culo 13 CE.";
 answers[39] = choices[39][2];
 units[39] = "14";
 comments[39] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[40]= "41)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[40]= new Array();
 choices[40][0] = "De ocho a&ntilde;os.";
 choices[40][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[40][2] = "Ambas son correctas.";
 choices[40][3] = "No existe un l&iacute;mite.";
 answers[40] = choices[40][0];
 units[40] = "14";
 comments[40] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[41]= "42)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[41]= new Array();
 choices[41][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[41][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[41][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[41][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[41] = choices[41][0];
 units[41] = "14";
 comments[41] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[42]= "43)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[42]= new Array();
 choices[42][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[42][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[42][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[42][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[42] = choices[42][3];
 units[42] = "12";
 comments[42] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[43]= "44)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[43]= new Array();
 choices[43][0] = "Presencia equilibrada.";
 choices[43][1] = "Presencia paritaria.";
 choices[43][2] = "Presencia consensuada.";
 choices[43][3] = "presencia horizontal.";
 answers[43] = choices[43][0];
 units[43] = "14";
 comments[43] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[44]= new Array();
 choices[44][0] = "Entre 1973 y 1978";
 choices[44][1] = "Entre 1992 y 1996";
 choices[44][2] = "Entre 1978 y 1985";
 choices[44][3] = "Entre 2008 y 2013";
 answers[44] = choices[44][2];
 units[44] = "12";
 comments[44] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[45]= "46)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[45]= new Array();
 choices[45][0] = "La Ley Org&aacute;nica 2/2011";
 choices[45][1] = "La Ley Org&aacute;nica 2/2012";
 choices[45][2] = "La Ley Org&aacute;nica 3/2012";
 choices[45][3] = "La Ley Org&aacute;nica 2/2002";
 answers[45] = choices[45][1];
 units[45] = "12";
 comments[45] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[46]= new Array();
 choices[46][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[46][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[46][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[46][3] = "El Instituto de la Mujer de Extremadura.";
 answers[46] = choices[46][3];
 units[46] = "14";
 comments[46] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[47]= "48)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[47][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[47][2] = "Ambas son correctas.";
 choices[47][3] = "La A y B son incorrectas.";
 answers[47] = choices[47][2];
 units[47] = "14";
 comments[47] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[48]= "49)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[48]= new Array();
 choices[48][0] = "150 trabajadores/as.";
 choices[48][1] = "200 trabajadores/as.";
 choices[48][2] = "250 trabajadores/as.";
 choices[48][3] = "300 trabajadores/as.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[49]= new Array();
 choices[49][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[49][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[49][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[49][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 680. Pensiones";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[50]= "51)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[50]= new Array();
 choices[50][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[50][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[50][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[50][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[51]= new Array();
 choices[51][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[51][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[51][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[51][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[52]= "53)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[52]= new Array();
 choices[52][0] = "El Tratado de Roma, 1957.";
 choices[52][1] = "El Acta &Uacute;nica Europea.";
 choices[52][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[52][3] = "Ninguna es correcta.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[53]= "54)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[53]= new Array();
 choices[53][0] = "El Instituto de la Mujer.";
 choices[53][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[53][2] = "Ambas son correctas.";
 choices[53][3] = "A y B son incorrectas.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[54]= "55)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[54]= new Array();
 choices[54][0] = "P&uacute;blica.";
 choices[54][1] = "Privada.";
 choices[54][2] = "Ambas son correctas.";
 choices[54][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[54] = choices[54][0];
 units[54] = "14";
 comments[54] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[55]= new Array();
 choices[55][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[55][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[55][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[55][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[56]= "57)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[56]= new Array();
 choices[56][0] = "P&uacute;blica.";
 choices[56][1] = "Privada.";
 choices[56][2] = "A y B son correctas.";
 choices[56][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[57]= "58)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[57]= new Array();
 choices[57][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[57][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[57][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[57][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[57] = choices[57][2];
 units[57] = "14";
 comments[57] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[58]= "59)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[58]= new Array();
 choices[58][0] = "Discriminaci&oacute;n indirecta.";
 choices[58][1] = "Discriminaci&oacute;n directa.";
 choices[58][2] = "Discriminaci&oacute;n por maternidad.";
 choices[58][3] = "Discriminaci&oacute;n abusiva.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[59]= new Array();
 choices[59][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[59][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[59][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[59][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[60]= new Array();
 choices[60][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[60][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[60][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[60][3] = "La tasa de desempleo ronda el 20%";
 answers[60] = choices[60][2];
 units[60] = "12";
 comments[60] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[61]= "62)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[61]= new Array();
 choices[61][0] = "La mujeres.";
 choices[61][1] = "Lo hombres.";
 choices[61][2] = "Todas las personas.";
 choices[61][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[61] = choices[61][2];
 units[61] = "14";
 comments[61] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[62]= new Array();
 choices[62][0] = "Art. 13, L.O.3/2007.";
 choices[62][1] = "Art. 14, L.O.3/2007.";
 choices[62][2] = "Art. 11, L.O.3/2007.";
 choices[62][3] = "Ninguna es correcta.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[63]= new Array();
 choices[63][0] = "Quince miembros.";
 choices[63][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[63][2] = "Los miembros que determine el Consejo.";
 choices[63][3] = "Un Presidente y quince miembros.";
 answers[63] = choices[63][1];
 units[63] = "14";
 comments[63] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[64]= "65)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[64][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[64][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[64][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[64] = choices[64][3];
 units[64] = "14";
 comments[64] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[65]= "66)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[65]= new Array();
 choices[65][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[65][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[65][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[65][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[65] = choices[65][1];
 units[65] = "14";
 comments[65] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[66]= "67)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[66]= new Array();
 choices[66][0] = "Prevenir las conductas discriminatorias.";
 choices[66][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[66][2] = "Todas son correctas.";
 choices[66][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[67]= "68)  El sector Servicios NO incluye:";
 choices[67]= new Array();
 choices[67][0] = "El Comercio";
 choices[67][1] = "Los Transportes";
 choices[67][2] = "La Energ&iacute;a";
 choices[67][3] = "Las Comunicaciones";
 answers[67] = choices[67][2];
 units[67] = "12";
 comments[67] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[68]= new Array();
 choices[68][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[68][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[68][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[68][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[68] = choices[68][0];
 units[68] = "15";
 comments[68] = "Id Pregunta: 114. ";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[69]= new Array();
 choices[69][0] = "Anual.";
 choices[69][1] = "Semestral.";
 choices[69][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[69][3] = "Bienal.";
 answers[69] = choices[69][2];
 units[69] = "14";
 comments[69] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[70]= "71)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[70]= new Array();
 choices[70][0] = "Alrededor de un 26% del PIB";
 choices[70][1] = "Alrededor de un 11% del PIB";
 choices[70][2] = "Alrededor de un 34% del PIB";
 choices[70][3] = "Alrededor de un 7% del PIB";
 answers[70] = choices[70][1];
 units[70] = "12";
 comments[70] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[71]= new Array();
 choices[71][0] = "El aumento de la esperanza de vida.";
 choices[71][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[71][2] = "La reducci&oacute;n del desempleo.";
 choices[71][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 673. Estructura social";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[72]= new Array();
 choices[72][0] = "El Consejo Nacional de la Mujer.";
 choices[72][1] = "El Consejo de la Mujer.";
 choices[72][2] = "El Instituto de la Mujer.";
 choices[72][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[72] = choices[72][3];
 units[72] = "14";
 comments[72] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[73]= "74)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[73]= new Array();
 choices[73][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[73][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[73][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[73][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[73] = choices[73][0];
 units[73] = "12";
 comments[73] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[74]= new Array();
 choices[74][0] = "El Tratado de Lisboa";
 choices[74][1] = "El Tratado de Amsterdam";
 choices[74][2] = "El Tratado de Niza";
 choices[74][3] = "El Acta &Uacute;nica Europea";
 answers[74] = choices[74][1];
 units[74] = "15";
 comments[74] = "Id Pregunta: 115. ";


