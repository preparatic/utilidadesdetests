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

//  Id pregunta: 72 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas incorpora la posibilidad de valorar el riesgo y la incertidumbre?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 72. ";


//  Id pregunta: 157 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Overlap";
 choices[1][1] = "Swaping";
 choices[1][2] = "Throughput";
 choices[1][3] = "Overhead";
 answers[1] = choices[1][3];
 units[1] = "35";
 comments[1] = "Id Pregunta: 157. NULL";


//  Id pregunta: 180 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En el contexto de la ordenaci&oacute;n de alternativas en la teor&iacute;a de la DMD, el m&eacute;todo Promethee:";
 choices[2]= new Array();
 choices[2][0] = "S&oacute;lo tiene en cuenta los criterios de mayor peso";
 choices[2][1] = "Se basa en las comparaciones binarias de alternativas";
 choices[2][2] = "Utiliza el c&aacute;lculo de relaciones de superaci&oacute;n entre alternativas";
 choices[2][3] = "Es la generalizaci&oacute;n del m&eacute;todo de la ponderaci&oacute;n lineal";
 answers[2] = choices[2][2];
 units[2] = "34";
 comments[2] = "Id Pregunta: 180. ";


//  Id pregunta: 254 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Entre los m&eacute;todos utilizados para la selecci&oacute;n de bienes y servicios:";
 choices[3]= new Array();
 choices[3][0] = "En general se considera que a mayor entrop&iacute;a, mayor informaci&oacute;n, puesto que las puntuaciones est&aacute;n m&aacute;s ordenadas";
 choices[3][1] = "La normalizaci&oacute;n de las puntuaciones suele ser necesaria para considerarlas a todas sobre la misma escala y para simplificar los c&aacute;lculos";
 choices[3][2] = "En el m&eacute;todo de permutaci&oacute;n, se exigen solamente las evaluaciones cardinales y los pesos ordinales";
 choices[3][3] = "Todas las respuestas anteriores son correctas";
 answers[3] = choices[3][1];
 units[3] = "34";
 comments[3] = "Id Pregunta: 254. ";


//  Id pregunta: 350 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La utilizaci&oacute;n de cartuchos de t&oacute;ner reciclados en impresoras de la Administraci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "No es de inter&eacute;s para la Administraci&oacute;n, ya que estos cartuchos son m&aacute;s caros";
 choices[4][1] = "Es una pol&iacute;tica apropiada para la Administraci&oacute;n, siempre que se garantice la calidad de estos consumibles";
 choices[4][2] = "Debe reservarse para aquellas situaciones en que se utilicen conjuntamente con otros consumibles reciclados";
 choices[4][3] = "Es una situaci&oacute;n coyuntural para situaciones de insuficiencia presupuestaria";
 answers[4] = choices[4][1];
 units[4] = "41";
 comments[4] = "Id Pregunta: 350. ";


//  Id pregunta: 374 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los m&eacute;todos m&aacute;s usuales para ordenar alternativas, seg&uacute;n la teor&iacute;a de la decisi&oacute;n multicriterio discreta son (se&ntilde;alar la falsa):";
 choices[5]= new Array();
 choices[5][0] = "M&eacute;todos UMA";
 choices[5][1] = "M&eacute;todo de ponderaci&oacute;n lineal";
 choices[5][2] = "M&eacute;todo Rusp";
 choices[5][3] = "M&eacute;todo lexicogr&aacute;fico";
 answers[5] = choices[5][2];
 units[5] = "34";
 comments[5] = "Id Pregunta: 374. ";


//  Id pregunta: 502 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  En la decisi&oacute;n de alternativas para la adquisici&oacute;n de sistemas de tecnolog&iacute;as de la informaci&oacute;n no se usa ";
 choices[6]= new Array();
 choices[6][0] = "Las cadenas de Petri ";
 choices[6][1] = "Ponderaci&oacute;n lineal";
 choices[6][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[6][3] = "Gr&aacute;ficos R&aacute;dar";
 answers[6] = choices[6][0];
 units[6] = "34";
 comments[6] = "Id Pregunta: 502. Modificada por JCED Preparatic XVII";


//  Id pregunta: 517 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  SSD-AAPP es una herramienta para";
 choices[7]= new Array();
 choices[7][0] = "Mejorar el desarrollo de los sistemas de informaci&oacute;n";
 choices[7][1] = "Reducir el gasto de adquisici&oacute;n de equipos inform&aacute;ticos";
 choices[7][2] = "Permitir la implantaci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n y la Comunicaci&oacute;n en la Administraci&oacute;n";
 choices[7][3] = "Permitir al comprador evaluar las ofertas para la adquisici&oacute;n de bienes y servicios inform&aacute;ticos";
 answers[7] = choices[7][3];
 units[7] = "34";
 comments[7] = "Id Pregunta: 517. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 540 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Respecto a las t&eacute;cnicas de selecci&oacute;n de proyectos alternativos ...";
 choices[8]= new Array();
 choices[8][0] = "3 t&eacute;cnicas usadas de evaluaci&oacute;n de inversiones son las del Pay-back, VAN y TIR";
 choices[8][1] = "El Valor Actual Neto (VAN) compara el desembolso inicial con el valor de los flujos netos de caja originados";
 choices[8][2] = "El pay-back es el periodo de tiempo que tarda en recuperarse el desembolso inicial con los flujos de caja";
 choices[8][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[8] = choices[8][3];
 units[8] = "38";
 comments[8] = "Id Pregunta: 540. ";


//  Id pregunta: 4415 AÃ±o de creación de pregunta: 2007-01-01
 questions[9]= "10)  En el m&eacute;todo TOPSIS de decisi&oacute;n entre alternativas...";
 choices[9]= new Array();
 choices[9][0] = "La alternativa seleccionada debe ser aqu&eacute;lla que est&eacute; lo m&aacute;s cerca posible de la soluci&oacute;n ideal positiva y lo m&aacute;s lejos posible de la soluci&oacute;n ideal negativa.";
 choices[9][1] = "La idea es comparar cada permutaci&oacute;n posible de alternativas con la informaci&oacute;n ordinal de evaluaciones que aporta para cada criterio la matriz de decisi&oacute;n.";
 choices[9][2] = "En cada comparaci&oacute;n se asocia: &iacute;ndice de concordancia (mide argumentos a favor de la alternativa) e &iacute;ndice de discordancia (mide argumentos en contra).";
 choices[9][3] = "Se ignora la cuant&iacute;a de la diferencia entre alternativas para cada criterio, s&oacute;lo se&ntilde;ala si existe o no, y considera la importancia del criterio para el decisor.";
 answers[9] = choices[9][0];
 units[9] = "34";
 comments[9] = "Id Pregunta: 4415. ";


//  Id pregunta: 4551 AÃ±o de creación de pregunta: 2007-01-01
 questions[10]= "11)  El RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que la adquisicion de programas de ordenador a medida:";
 choices[10]= new Array();
 choices[10][0] = "se considera contrato de obra .";
 choices[10][1] = "se considera contrato de servicios.";
 choices[10][2] = "se considera contrato de suministro.";
 choices[10][3] = "se considera contrato de consultoria y asistencia.";
 answers[10] = choices[10][1];
 units[10] = "41";
 comments[10] = "Id Pregunta: 4551. ";


//  Id pregunta: 4552 AÃ±o de creación de pregunta: 2007-01-01
 questions[11]= "12)  El articulo 60 del RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que en ning&uacute;n caso podr&aacute;n contratar con la Administraci&oacute;n las personas en quienes concurra alguna de las circunstancias siguientes:";
 choices[11]= new Array();
 choices[11][0] = "haber dado lugar, por causa de la que hubiesen sido declarados culpables ,a la suspensi&oacute;n de cualquier contrato celebrado con Ia Administraci&oacute;n";
 choices[11][1] = "no hallarse al corriente en el cumplimiento de las obligaciones tributarias o de Seguridad Social impuestas por las disposiciones vigentes, en los t&eacute;rminos que reglamentariamente se determine.";
 choices[11][2] = "no hallarse debidamente clasificadas, en su caso conforme a lo dispuesto en la Ley de Contratos del Sector P&uacute;blico o no acreditar la suficiente solvencia econ&oacute;mica, practica y t&eacute;cnica.";
 choices[11][3] = "haber incurrido en falsedad al facilitar a la Administraci&oacute;n las declaraciones exigibles en el cumplimiento de las disposiciones de esta Ley y de sus normas de desarrollo.";
 answers[11] = choices[11][1];
 units[11] = "41";
 comments[11] = "Id Pregunta: 4552. ";


//  Id pregunta: 4661 AÃ±o de creación de pregunta: 2007-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes normas no regula los contratos administrativos de bienes y servicios informaticos?";
 choices[12]= new Array();
 choices[12][0] = "Real Decreto Legislativo 3/2011";
 choices[12][1] = "RD 589/2005";
 choices[12][2] = "RD 209/2003";
 choices[12][3] = "RD 2572/1973";
 answers[12] = choices[12][2];
 units[12] = "41";
 comments[12] = "Id Pregunta: 4661. ";


//  Id pregunta: 4890 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  La adquisici&oacute;n de una licencia mediante la que se cede el derecho de uso de un programa de ordenador, seg&uacute;n el RD Legislativo 3/2011, tiene categor&iacute;a de:";
 choices[13]= new Array();
 choices[13][0] = "Contrato de suministros";
 choices[13][1] = "Contrato de consultor&iacute;a y asistencia";
 choices[13][2] = "Contrato de servicios";
 choices[13][3] = "Contrato de arrendamiento";
 answers[13] = choices[13][0];
 units[13] = "41";
 comments[13] = "Id Pregunta: 4890. ";


//  Id pregunta: 4894 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  &iquest;Qui&eacute;n es el &oacute;rgano de contrataci&oacute;n en la adquisici&oacute;n de equipos y sistemas para el tratamiento de la informaci&oacute;n declarados de adquisici&oacute;n centralizada, una vez establecido el acuerdo marco?";
 choices[14]= new Array();
 choices[14][0] = "El Ministerio de Hacienda";
 choices[14][1] = "Las Juntas de Contrataci&oacute;n";
 choices[14][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 choices[14][3] = "El Ministerio de Administraciones P&uacute;blicas.";
 answers[14] = choices[14][2];
 units[14] = "41";
 comments[14] = "Id Pregunta: 4894. La Junta de Contrataci&oacute;n Centralizada (JCC) es el &oacute;rgano de contrataci&oacute;n en la adopci&oacute;n de tipos del AM. La JCC ha desconcentrado en la DG Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada la adjudicaci&oacute;n de AM posterior a la adopci&oacute;n de tipos.";


//  Id pregunta: 5014 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0 el umbral de saciedad m&aacute;ximo para un criterio";
 choices[15]= new Array();
 choices[15][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[15][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[15][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[15][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[15] = choices[15][2];
 units[15] = "34";
 comments[15] = "Id Pregunta: 5014. Examen TIC A 2007";


//  Id pregunta: 5024 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  Cual de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.3.0";
 choices[16]= new Array();
 choices[16][0] = "Ponderaci&oacute;n Lineal";
 choices[16][1] = "Permutaci&oacute;n";
 choices[16][2] = "Prometh&eacute;e";
 choices[16][3] = "Distancia al Ideal (TOPSIS)";
 answers[16] = choices[16][1];
 units[16] = "34";
 comments[16] = "Id Pregunta: 5024. Examen TIC A 2007";


//  Id pregunta: 5582 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  La nueva ley de contratos del sector p&uacute;blico es";
 choices[17]= new Array();
 choices[17][0] = "el Real Decreto Legislativo 2/2000";
 choices[17][1] = "la Ley 30/2007";
 choices[17][2] = "el Real Decreto Legislativo 3/2011";
 choices[17][3] = "el Real Decreto Legislativo 2/2002";
 answers[17] = choices[17][2];
 units[17] = "41";
 comments[17] = "Id Pregunta: 5582. NULL";


//  Id pregunta: 5586 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Qu&eacute; porcentaje sobre el importe de adjudicaci&oacute;n supone la garant&iacute;a definitiva, en un contrato con las administraciones p&uacute;blicas, seg&uacute;n el nuevo RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[18]= new Array();
 choices[18][0] = "Un 4%";
 choices[18][1] = "Un 5%";
 choices[18][2] = "Un 6%";
 choices[18][3] = "Un 8%";
 answers[18] = choices[18][1];
 units[18] = "41";
 comments[18] = "Id Pregunta: 5586. ";


//  Id pregunta: 5593 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes entidades no est&aacute; sometida al RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[19]= new Array();
 choices[19][0] = "Entidades Locales";
 choices[19][1] = "Fundaciones p&uacute;blicas";
 choices[19][2] = "Mutuas de Accidentes de Trabajo y Enfermedades Profesionales de la Seguridad Social";
 choices[19][3] = "Todas las entidades anteriores est&aacute;n sometidas al RD Legislativo 3/2011.";
 answers[19] = choices[19][3];
 units[19] = "41";
 comments[19] = "Id Pregunta: 5593. ";


//  Id pregunta: 5596 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Los acuerdos marco, articulados en el RD Legislativo 3/2011 de contratos del sector p&uacute;blico...";
 choices[20]= new Array();
 choices[20][0] = "Permiten a las distintas administraciones p&uacute;blicas llegar a un acuerdo entre s&iacute; sobre puntos de contrataci&oacute;n comunes";
 choices[20][1] = "La duraci&oacute;n del acuerdo marco, podr&aacute;, con caracter general, superar los 4 a&ntilde;os de duraci&oacute;n";
 choices[20][2] = "Permiten a los &oacute;rganos de contrataci&oacute;n llegar a un acuerdo con uno o varios empresarios para fijar las condiciones de los contratos adjudicados en un per&iacute;odo de tiempo determinado";
 choices[20][3] = "Suponen la creaci&oacute;n de la comisi&oacute;n de acuerdos marco, dependiente del ministerio de econom&iacute;a y hacienda";
 answers[20] = choices[20][2];
 units[20] = "41";
 comments[20] = "Id Pregunta: 5596. ";


//  Id pregunta: 5597 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  En el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, los contratos de adquisici&oacute;n de programas de ordenador desarrollados a medida son";
 choices[21]= new Array();
 choices[21][0] = "Contratos de servicios";
 choices[21][1] = "Contratos de suministro";
 choices[21][2] = "Contratos de desarrollo l&oacute;gico";
 choices[21][3] = "No se hace referencia expl&iacute;cita a este tipo de contratos en la citada ley";
 answers[21] = choices[21][0];
 units[21] = "41";
 comments[21] = "Id Pregunta: 5597. ";


//  Id pregunta: 5994 AÃ±o de creación de pregunta: 2010-01-01
 questions[22]= "23)  NO es un m&eacute;todo din&aacute;mico de estudio de la rentabilidad de inversi&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "La tasa de rentabilidad media.";
 choices[22][1] = "La tasa de valor actual.";
 choices[22][2] = "La tasa interna de rentabilidad.";
 choices[22][3] = "El &iacute;ndice de rentabilidad.";
 answers[22] = choices[22][0];
 units[22] = "38";
 comments[22] = "Id Pregunta: 5994. TIC A 2009";


//  Id pregunta: 6130 AÃ±o de creación de pregunta: 2010-01-01
 questions[23]= "24)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[23]= new Array();
 choices[23][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[23][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[23][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[23][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[23] = choices[23][1];
 units[23] = "34";
 comments[23] = "Id Pregunta: 6130. TIC A 2009";


//  Id pregunta: 6600 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  Un contrato de suministros del Ministerio del Interior estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es: ";
 choices[24]= new Array();
 choices[24][0] = "Superior a 134.000 euros";
 choices[24][1] = "Superior a 125.000";
 choices[24][2] = "Superior a 206.000";
 choices[24][3] = "Superior a 193.000";
 answers[24] = choices[24][0];
 units[24] = "41";
 comments[24] = "Id Pregunta: 6600. Art&iacute;culo 15.1.a) RD Legislativo 3/2011. Cifra modificada por Orden HAP/2425/2013.";


//  Id pregunta: 7356 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  El m&eacute;todo Pay-Back de an&aacute;lisis de una inversi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Prima las inversiones con menor tiempo de recuperaci&oacute;n";
 choices[25][1] = "Es un m&eacute;todo din&aacute;mico";
 choices[25][2] = "Tiene en cuenta el momento en el que se producen los flujos de caja";
 choices[25][3] = "Todas son INCORRECTAS";
 answers[25] = choices[25][0];
 units[25] = "38";
 comments[25] = "Id Pregunta: 7356. NULL";


//  Id pregunta: 8241 AÃ±o de creación de pregunta: 2011-01-01
 questions[26]= "27)  De las siguientes sentencias, indicar la correcta: ";
 choices[26]= new Array();
 choices[26][0] = "Cuanto mayor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 choices[26][1] = "Cuanto menor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n. ";
 choices[26][2] = "Cuando el Payback es mayor que el m&aacute;ximo per&iacute;odo definido por la empresa, entonces se debe aceptar el proyecto. ";
 choices[26][3] = "El Payback de un sistema, no muestra si es atractivo o no para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 answers[26] = choices[26][1];
 units[26] = "38";
 comments[26] = "Id Pregunta: 8241. Examen TIC A2 2010";


//  Id pregunta: 8374 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos usados en la planificaci&oacute;n de la capacidad de los sistemas inform&aacute;ticos es de tipo anal&iacute;tico?";
 choices[27]= new Array();
 choices[27][0] = "Benchmarking.";
 choices[27][1] = "Teor&iacute;a de colas.";
 choices[27][2] = "Simulaci&oacute;n.";
 choices[27][3] = "Reglas basadas en la experiencia.";
 answers[27] = choices[27][1];
 units[27] = "35,38";
 comments[27] = "Id Pregunta: 8374. Examen TIC A2 2010";


//  Id pregunta: 8882 AÃ±o de creación de pregunta: 2011-01-01
 questions[28]= "29)  La garant&iacute;a provisional";
 choices[28]= new Array();
 choices[28][0] = "Es potestativa para el &oacute;rgano de contrataci&oacute;n";
 choices[28][1] = "Con car&aacute;cter general se exige a los adjudicatarios de los contratos administrativos.";
 choices[28][2] = "El &oacute;rgano de contrataci&oacute;n podr&aacute; eximir al adjudicatario de la obligaci&oacute;n de constituir la garant&iacute;a&nbsp;provisional";
 choices[28][3] = "Su importe no podr&aacute; ser superior al 5% del presupuesto del contrato";
 answers[28] = choices[28][0];
 units[28] = "41";
 comments[28] = "Id Pregunta: 8882. ";


//  Id pregunta: 9283 AÃ±o de creación de pregunta: 2013-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes NO es una prerrogativa de la Administraci&oacute;n seg&uacute;n el Texto Refundido de la Ley de Contratos del Sector P&uacute;blico?";
 choices[29]= new Array();
 choices[29][0] = "Disminuir la cuant&iacute;a econ&oacute;mica del contrato por razones de d&eacute;ficit excesivo.";
 choices[29][1] = "Acordar la resoluci&oacute;n del contrato y determinar los efectos de &eacute;sta. ";
 choices[29][2] = "Modificar los contratos por razones de inter&eacute;s p&uacute;blico. ";
 choices[29][3] = "Interpretar los contratos.";
 answers[29] = choices[29][0];
 units[29] = "41";
 comments[29] = "Id Pregunta: 9283. Art. 210 RD Legislativo 3/2011";


//  Id pregunta: 9287 AÃ±o de creación de pregunta: 2013-01-01
 questions[30]= "31)  &iquest;Qu&eacute; es SOROLLA?";
 choices[30]= new Array();
 choices[30][0] = "Un sistema inform&aacute;tico de apoyo a la gesti&oacute;n econ&oacute;mica de los Centros Gestores del Gasto, cuya titularidad corresponde a la IGAE.";
 choices[30][1] = "Una aplicaci&oacute;n desarrollada por la Direcci&oacute;n General de Modernizaci&oacute;n e Impulso de la Administraci&oacute;n Electr&oacute;nica para facilitar la contrataci&oacute;n electr&oacute;nica. ";
 choices[30][2] = "El SW de subastas electr&oacute;nicas m&aacute;s usado en la Administraci&oacute;n espa&ntilde;ola. ";
 choices[30][3] = "Ninguna de las anteriores.";
 answers[30] = choices[30][0];
 units[30] = "41";
 comments[30] = "Id Pregunta: 9287. ";


//  Id pregunta: 9288 AÃ±o de creación de pregunta: 2013-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a la contrataci&oacute;n precomercial.";
 choices[31]= new Array();
 choices[31][0] = "Son contratos de investigaci&oacute;n y desarrollo remunerados por la empresa adjudicataria, siempre que el &oacute;rgano de contrataci&oacute;n comparta con &eacute;stas los riesgos y los beneficios de la investigaci&oacute;n cient&iacute;fica y t&eacute;cnica necesaria para desarrollar soluciones innovadoras que superen las disponibles en el mercado. ";
 choices[31][1] = "Establecen condiciones para la comercializaci&oacute;n y asimilaci&oacute;n de la I+D, mediante su normalizaci&oacute;n. ";
 choices[31][2] = "La Agenda Digital para Europa los recomienda como forma de atraer inversi&oacute;n privada para la investigaci&oacute;n en tiempos de crisis. ";
 choices[31][3] = "En Espa&ntilde;a han sido introducidos por la LES, y est&aacute;n fuera del &aacute;mbito de aplicaci&oacute;n de la Ley de Contratos. ";
 answers[31] = choices[31][0];
 units[31] = "41";
 comments[31] = "Id Pregunta: 9288. NULL";


//  Id pregunta: 9377 AÃ±o de creación de pregunta: 2013-01-01
 questions[32]= "33)  &iquest;Qu&eacute; m&eacute;todo de asignaci&oacute;n de pesos no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[32]= new Array();
 choices[32][0] = "Asignaci&oacute;n directa";
 choices[32][1] = "Entrop&iacute;a";
 choices[32][2] = "SAATY";
 choices[32][3] = "La herramienta SSD-AAPP soporta todos los m&eacute;todos anteriores de asignaci&oacute;n de pesos";
 answers[32] = choices[32][3];
 units[32] = "34";
 comments[32] = "Id Pregunta: 9377. ";


//  Id pregunta: 9480 AÃ±o de creación de pregunta: 2013-01-01
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[33]= new Array();
 choices[33][0] = "Cuando una inversi&oacute;n tiene VAN positivo, la TIR es superior al coste de capital invertido";
 choices[33][1] = "Cuando una inversi&oacute;n tiene VAN negativo, la TIR es inferior al coste de capital invertido";
 choices[33][2] = "VAN y TIR son m&eacute;todos din&aacute;micos de selecci&oacute;n de inversiones";
 choices[33][3] = "Todas las afirmaciones anteriores son correctas";
 answers[33] = choices[33][3];
 units[33] = "38";
 comments[33] = "Id Pregunta: 9480. ";


//  Id pregunta: 9482 AÃ±o de creación de pregunta: 2013-01-01
 questions[34]= "35)  &iquest;Qu&eacute; t&eacute;cnicas de rentabilidad de inversiones TIC considera M&eacute;tricav3?";
 choices[34]= new Array();
 choices[34][0] = "Retorno de la inversi&oacute;n";
 choices[34][1] = "VAN";
 choices[34][2] = "Las dos opciones anteriores son correctas";
 choices[34][3] = "Todas las opciones son incorrectas";
 answers[34] = choices[34][2];
 units[34] = "38";
 comments[34] = "Id Pregunta: 9482. ";


//  Id pregunta: 9645 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[35]= new Array();
 choices[35][0] = "Mesas de contrataci&oacute;n";
 choices[35][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[35][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[35][3] = "Todos los anteriores";
 answers[35] = choices[35][0];
 units[35] = "41";
 comments[35] = "Id Pregunta: 9645. Art. 324, Art. 325 RD Legislativo 3/2011";


//  Id pregunta: 9762 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  Un contradto de regulaci&oacute;n armonizada ser&aacute; nulo si:";
 choices[36]= new Array();
 choices[36][0] = "No se publica en DOUE";
 choices[36][1] = "Si se incumplen las normas de adjudicaci&oacute;n del acuerdo marco.";
 choices[36][2] = "Si hay sistema din&aacute;mino de contrataci&oacute;n y se incumplen las normas de adjudicaci&oacute;n.";
 choices[36][3] = "Todas las anteriores.";
 answers[36] = choices[36][3];
 units[36] = "41";
 comments[36] = "Id Pregunta: 9762. Art. 37. RD Legislativo 3/2011.";


//  Id pregunta: 9998 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  El recurso especial en materia de contrataci&oacute;n permite la impugnaci&oacute;n, previa alrecurso contencioso-administrativo, de";
 choices[37]= new Array();
 choices[37][0] = "los actos de tr&aacute;mite que no resuelven la licitaci&oacute;n.";
 choices[37][1] = "las penalizaciones impuestas por ejecuci&oacute;n defectuosa.";
 choices[37][2] = "los acuerdos de adjudicaci&oacute;n.";
 choices[37][3] = "la resoluci&oacute;n del recurso de Alzada.";
 answers[37] = choices[37][2];
 units[37] = "41";
 comments[37] = "Id Pregunta: 9998. ";


//  Id pregunta: 10212 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "M&eacute;todo PROMETHEE";
 choices[38][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[38][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[38][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[38] = choices[38][0];
 units[38] = "34";
 comments[38] = "Id Pregunta: 10212. ";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta es m&aacute;s adecuado cuando se trata de obtener un subconjunto de alternativas aceptables?";
 choices[39]= new Array();
 choices[39][0] = "El m&eacute;todo de la Utilidad Multiatributo";
 choices[39][1] = "Los m&eacute;todos de concordancia";
 choices[39][2] = "Los m&eacute;todos basados en permutaciones";
 choices[39][3] = "El m&eacute;todo de la Programaci&oacute;n compromiso";
 answers[39] = choices[39][1];
 units[39] = "34";
 comments[39] = "Id Pregunta: 10213. ";


//  Id pregunta: 11116 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  Seleccione la opci&oacute;n verdadera respecto a la clasificaci&oacute;n de las empresas en contratos";
 choices[40]= new Array();
 choices[40][0] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y contratos de servicios de valor estimado mayor que 500.000&euro;";
 choices[40][1] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 500.000&euro; y contratos de servicios de valor estimado mayor que 200.000&euro;";
 choices[40][2] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y en todo caso para contratos de servicios";
 choices[40][3] = "S&oacute;lo es exigible en contratos de obras en todo caso y contratos de servicios de valor estimado mayor que 200.000&euro;";
 answers[40] = choices[40][1];
 units[40] = "41";
 comments[40] = "Id Pregunta: 11116. ";


//  Id pregunta: 11239 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  El &aacute;mbito subjetivo del texto refundido de la ley de contratos del sector p&uacute;blico:";
 choices[41]= new Array();
 choices[41][0] = "La ley aplica a la totalidad del sector p&uacute;blico todos sus articulos.";
 choices[41][1] = "Aquellos expedientes de contrataci&oacute;n incoados por las Administraciones P&uacute;blicas son de naturaleza administrativa.";
 choices[41][2] = "Todos los contratos de los Poderes Adjudicadores que no son Administraci&oacute;n P&uacute;blica sujetos a la directiva europea son considerados contratos SARA, independientemente de su cuant&iacute;a.";
 choices[41][3] = "Ninguna es verdadera.";
 answers[41] = choices[41][1];
 units[41] = "41";
 comments[41] = "Id Pregunta: 11239. ";


//  Id pregunta: 11240 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  Las pr&oacute;rrogas de los contratos.";
 choices[42]= new Array();
 choices[42][0] = "Se puede incluir en todos los contratos";
 choices[42][1] = "Todos los contratos son prorrogables una vez finalizados.";
 choices[42][2] = "Su duraci&oacute;n no puede ser superior al periodo de licitaci&oacute;n.";
 choices[42][3] = "La pr&oacute;rroga se acordar&aacute; por el &oacute;rgano de contrataci&oacute;n y ser&aacute; confirmada posteriormente por el licitador.";
 answers[42] = choices[42][2];
 units[42] = "41";
 comments[42] = "Id Pregunta: 11240. ";


//  Id pregunta: 11246 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  En un contrato tramitado por urgencia por su necesidad inaplazable o cuya adjudicaci&oacute;n se deba acelerar por inter&eacute;s p&uacute;blico:";
 choices[43]= new Array();
 choices[43][0] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as h&aacute;biles.";
 choices[43][1] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as h&aacute;biles.";
 choices[43][2] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as naturales.";
 choices[43][3] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as naturales.";
 answers[43] = choices[43][0];
 units[43] = "41";
 comments[43] = "Id Pregunta: 11246. ";


//  Id pregunta: 11493 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Qu&eacute; contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada, seg&uacute;n la Ley de Contratos del Sector P&uacute;blico?";
 choices[44]= new Array();
 choices[44][0] = "Todos los contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada.";
 choices[44][1] = "Aquellos cuyo valor estimado es igual o superior a 134.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 207.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[44][2] = "Aquellos cuyo valor estimado es igual o superior a 207.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 134.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[44][3] = "Ning&uacute;n contrato de suministro, ni de servicio, est&aacute; sujeto a regulaci&oacute;n armonizada.";
 answers[44] = choices[44][1];
 units[44] = "41";
 comments[44] = "Id Pregunta: 11493. Orden HAP/2425/2013, de 23 de diciembre, por la que se publican los l&iacute;mites de los distintos tipos de contratos a efectos de la contrataci&oacute;n del sector p&uacute;blico a partir del 1 de enero de 2014";


//  Id pregunta: 11496 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  La tasa de rentabilidad que se emplea para calcular el Valor Actual Neto (VAN) de una inversi&oacute;n es:";
 choices[45]= new Array();
 choices[45][0] = "La tasa de rentabilidad esperada para esa inversi&oacute;n.";
 choices[45][1] = "La tasa de rentabilidad exigida para esa inversi&oacute;n.";
 choices[45][2] = "La tasa de inflaci&oacute;n.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = choices[45][1];
 units[45] = "38";
 comments[45] = "Id Pregunta: 11496. NULL";


//  Id pregunta: 11765 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Qu&eacute; normativa supondr&aacute; la aprobaci&oacute;n de una nueva ley de contratos?";
 choices[46]= new Array();
 choices[46][0] = "El Reglamento de la Intervenci&oacute;n General del Estado";
 choices[46][1] = "El Acuerdo sobre Libre Comercio de la OCDE";
 choices[46][2] = "Las nuevas Directivas europeas en materia de contrataci&oacute;n&nbsp;";
 choices[46][3] = "El Reglamento funcional del Tribunal Administrativo Central de Recursos Contractuales";
 answers[46] = choices[46][2];
 units[46] = "41";
 comments[46] = "Id Pregunta: 11765. ";


//  Id pregunta: 11770 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones no podr&aacute; informar un expediente de contrataci&oacute;n si la documentaci&oacute;n del mismo no incluye: ";
 choices[47]= new Array();
 choices[47][0] = "Presupuesto, objeto y justificaci&oacute;n de la necesidad&nbsp;";
 choices[47][1] = "Presupuesto, objeto y certificado de exclusividad";
 choices[47][2] = "Pliego de cl&aacute;usulas administrativas y memoria econ&oacute;mica";
 choices[47][3] = "Objeto, justificaci&oacute;n temporal y ratio perfiles/horas";
 answers[47] = choices[47][0];
 units[47] = "24, 41";
 comments[47] = "Id Pregunta: 11770. ";


//  Id pregunta: 11776 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Qu&eacute; consecuencias tiene la declaraci&oacute;n judicial de existencia de cesi&oacute;n ilegal de trabajadores, en caso de que un trabajador de una empresa externa demande judicialmente y obtenga un pronunciamiento en tal sentido?";
 choices[48]= new Array();
 choices[48][0] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores produce autom&aacute;ticamente la incorporaci&oacute;n del trabajador demandante a la plantilla de la Administraci&oacute;n, como trabajador fijo,&nbsp; manteniendo las condiciones laborales que ten&iacute;a reconocida con la empresa contratista";
 choices[48][1] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores no produce efectos sobre la relaci&oacute;n laboral entre el trabajador que demande y la empresa contratista, sin perjuicio de las responsabilidades disciplinarias y en su caso penales del funcionario responsable de la irregularidad";
 choices[48][2] = "El trabajador podr&aacute; optar por incorporarse a la plantilla de la Administraci&oacute;n, como trabajador indefinido no fijo, y podr&aacute;n derivarse responsabilidades disciplinarias y penales contra el funcionario responsable de la irregularidad, entre otras posibles consecuencias&nbsp;";
 choices[48][3] = "El trabajador continuar&aacute; prestando servicios en la empresa contratista, si bien tendr&aacute; las mismas condiciones, econ&oacute;micas y de horario, mientras dure la contrata con la Administraci&oacute;n, que el funcionario responsable del servicio externalizado";
 answers[48] = choices[48][2];
 units[48] = "41";
 comments[48] = "Id Pregunta: 11776. ";


