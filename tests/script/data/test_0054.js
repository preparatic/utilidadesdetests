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

//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[0]= "1)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[0]= new Array();
 choices[0][0] = "Al Gobierno.";
 choices[0][1] = "A las Cortes Generales.";
 choices[0][2] = "Al Poder Judicial.";
 choices[0][3] = "Al Congreso de los Diputados.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[1]= "2)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[1]= new Array();
 choices[1][0] = "3 a&ntilde;os.";
 choices[1][1] = "5 a&ntilde;os.";
 choices[1][2] = "4 a&ntilde;os.";
 choices[1][3] = "6 a&ntilde;os.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[2]= "3)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[2]= new Array();
 choices[2][0] = "Ejecutivo";
 choices[2][1] = "Limitativo";
 choices[2][2] = "Estimativo";
 choices[2][3] = "Progresivo";
 answers[2] = choices[2][1];
 units[2] = "10";
 comments[2] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[3]= "4)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[3]= new Array();
 choices[3][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[3][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[3][2] = "A partir del 1 de enero de 2015";
 choices[3][3] = "A partir del 1 de julio de 2016";
 answers[3] = choices[3][1];
 units[3] = "77";
 comments[3] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[4]= "5)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[4]= new Array();
 choices[4][0] = "Interchange of Data between Administrations (IDA)";
 choices[4][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[4][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[4][3] = "Interoperability Electronic European Solution (IEES)";
 answers[4] = choices[4][1];
 units[4] = "43";
 comments[4] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[5]= "6)  Sobre el Plan Juncker:";
 choices[5]= new Array();
 choices[5][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[5][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[5][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[5][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[6]= new Array();
 choices[6][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[6][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[6][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[6][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[6] = choices[6][2];
 units[6] = "26";
 comments[6] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[7]= "8)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[7]= new Array();
 choices[7][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[7][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[7][2] = "el sector p&uacute;blico institucional";
 choices[7][3] = "el sector privado corporativo";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 513. LEY 39/2015";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[8]= "9)  Un wireframe es:";
 choices[8]= new Array();
 choices[8][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[8][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[8][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[8][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[8] = choices[8][3];
 units[8] = "62";
 comments[8] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[9]= "10)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[9]= new Array();
 choices[9][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[9][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[9][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[9][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[9] = choices[9][0];
 units[9] = "101";
 comments[9] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[10]= "11)  La soberan&iacute;a nacional reside en:";
 choices[10]= new Array();
 choices[10][0] = "el Parlamento nacional.";
 choices[10][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[10][2] = "el pueblo espa&ntilde;ol.";
 choices[10][3] = "el Congreso y el Senado.";
 answers[10] = choices[10][3];
 units[10] = "1";
 comments[10] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[11]= "12)  La recusaci&oacute;n pueden promoverla...";
 choices[11]= new Array();
 choices[11][0] = "Cualquier &oacute;rgano";
 choices[11][1] = "El interesado";
 choices[11][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[11][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[11] = choices[11][0];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[12]= new Array();
 choices[12][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[12][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[12][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[12][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[13]= "14)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Unidad de igualdad.";
 choices[13][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[13][2] = "Ninguna de las anteriores.";
 choices[13][3] = "A y B son correctas.";
 answers[13] = choices[13][1];
 units[13] = "14";
 comments[13] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[14]= new Array();
 choices[14][0] = "Al Consejo Europeo.";
 choices[14][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[14][2] = "A la Comisi&oacute;n Europea.";
 choices[14][3] = "Al Parlamento Europeo.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 314. UNION EUROPEA";


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


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[16]= "17)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[16]= new Array();
 choices[16][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[16][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[16][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[16][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[17]= new Array();
 choices[17][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[17][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[17][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[17][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[17] = choices[17][1];
 units[17] = "77";
 comments[17] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[18]= new Array();
 choices[18][0] = "Al Consejo Europeo.";
 choices[18][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[18][2] = "A la Comisi&oacute;n Europea.";
 choices[18][3] = "Al Parlamento Europeo.";
 answers[18] = choices[18][2];
 units[18] = "5";
 comments[18] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[19]= "20)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[19]= new Array();
 choices[19][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[19][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[19][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[19][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[19] = choices[19][3];
 units[19] = "34, 84";
 comments[19] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[20]= "21)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[20]= new Array();
 choices[20][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[20][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[20][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[20][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[20] = choices[20][0];
 units[20] = "28";
 comments[20] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[21]= new Array();
 choices[21][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[21][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[21][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[21][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[21] = choices[21][2];
 units[21] = "22";
 comments[21] = "Id Pregunta: 121. ";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[22]= "23)  El Parlamento Europeo celebrar&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[22][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[22][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[22][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[23]= new Array();
 choices[23][0] = "El BCE";
 choices[23][1] = "El Parlamento";
 choices[23][2] = "El Consejo";
 choices[23][3] = "La Comisi&oacute;n";
 answers[23] = choices[23][3];
 units[23] = "17";
 comments[23] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[24]= "25)  La Poblaci&oacute;n Activa incluye a:";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[24][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[24][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[24][3] = "Todo aquel que desea trabajar";
 answers[24] = choices[24][2];
 units[24] = "15";
 comments[24] = "Id Pregunta: 110. ";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[25]= "26)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[25]= new Array();
 choices[25][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[25][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[25][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[25][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[25] = choices[25][1];
 units[25] = "19";
 comments[25] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[26]= "27)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[26]= new Array();
 choices[26][0] = "solo mediante ley";
 choices[26][1] = "reglamentariamente";
 choices[26][2] = "mediante ley o reglamentariamente";
 choices[26][3] = "ninguna es correcta";
 answers[26] = choices[26][1];
 units[26] = "7";
 comments[26] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[27]= "28)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[27]= new Array();
 choices[27][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[27][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[27][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[27][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[28]= new Array();
 choices[28][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[28][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[28][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[28][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[29]= "30)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[29]= new Array();
 choices[29][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[29][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[29][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[29][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[29] = choices[29][1];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[30]= "31)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[30]= new Array();
 choices[30][0] = "Seguridad Social y AEAT";
 choices[30][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[30][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[30][3] = "Todos los anteriores";
 answers[30] = choices[30][3];
 units[30] = "19";
 comments[30] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[31]= new Array();
 choices[31][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[31][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[31][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[31][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[31] = choices[31][2];
 units[31] = "71";
 comments[31] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[32]= new Array();
 choices[32][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[32][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[32][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[32][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[32] = choices[32][0];
 units[32] = "62";
 comments[32] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[33]= "34)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[33]= new Array();
 choices[33][0] = "Estrasburgo.";
 choices[33][1] = "Bruselas.";
 choices[33][2] = "Luxemburgo.";
 choices[33][3] = "Holanda.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[34]= "35)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[34]= new Array();
 choices[34][0] = "Prevenir las conductas discriminatorias.";
 choices[34][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[34][2] = "Todas son correctas.";
 choices[34][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[35]= "36)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[35]= new Array();
 choices[35][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[35][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[35][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[35][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[35] = choices[35][1];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[36]= "37)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[36]= new Array();
 choices[36][0] = "Intersecci&oacute;n.";
 choices[36][1] = "Uni&oacute;n.";
 choices[36][2] = "Restricci&oacute;n.";
 choices[36][3] = "Diferencia.";
 answers[36] = choices[36][0];
 units[36] = "60";
 comments[36] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[37]= new Array();
 choices[37][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[37][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[37][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[37][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[37] = choices[37][0];
 units[37] = "19";
 comments[37] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[38]= "39)  La Administraci&oacute;n General del Estado se organiza:";
 choices[38]= new Array();
 choices[38][0] = "en Ministerios";
 choices[38][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[38][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[38][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[38] = choices[38][1];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[39]= new Array();
 choices[39][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[39][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[39][2] = "Las respuestas a) b) no son correctas.";
 choices[39][3] = "Las respuestas a) y b) son correctas.";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[40]= new Array();
 choices[40][0] = "Un representante de la Administraci&oacute;n local.";
 choices[40][1] = "Un representante del Tribunal de Cuentas.";
 choices[40][2] = "Un representante del Defensor del Pueblo.";
 choices[40][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[40] = choices[40][0];
 units[40] = "22";
 comments[40] = "Id Pregunta: 123. ";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[41]= "42)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[41]= new Array();
 choices[41][0] = "Ejecutivo";
 choices[41][1] = "Limitativo";
 choices[41][2] = "Estimativo";
 choices[41][3] = "Progresivo";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[42]= new Array();
 choices[42][0] = "Quince miembros.";
 choices[42][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[42][2] = "Los miembros que determine el Consejo.";
 choices[42][3] = "Un Presidente y quince miembros.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[43]= "44)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[43]= new Array();
 choices[43][0] = "El Rey.";
 choices[43][1] = "El Jefe del Estado.";
 choices[43][2] = "El Gobierno.";
 choices[43][3] = "El Presidente del Gobierno.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[44]= "45)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[44]= new Array();
 choices[44][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[44][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[44][2] = "Funcionarios e interinos.";
 choices[44][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[44] = choices[44][3];
 units[44] = "20";
 comments[44] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[45]= "46)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[45]= new Array();
 choices[45][0] = "Por unanimidad.";
 choices[45][1] = "Por mayor&iacute;a cualificada.";
 choices[45][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[45][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[46]= new Array();
 choices[46][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[46][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[46][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[46][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[46] = choices[46][3];
 units[46] = "34, 84";
 comments[46] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[47]= "48)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[47]= new Array();
 choices[47][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[47][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[47][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[47][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[47] = choices[47][2];
 units[47] = "76";
 comments[47] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[48]= "49)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[48]= new Array();
 choices[48][0] = "Almacenamiento orientado a columnas";
 choices[48][1] = "Framework MapReduce";
 choices[48][2] = "OLTP";
 choices[48][3] = "Bases de datos clave-valor";
 answers[48] = choices[48][2];
 units[48] = "73";
 comments[48] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[49]= "50)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[49]= new Array();
 choices[49][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[49][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[49][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[49][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[49] = choices[49][2];
 units[49] = "108";
 comments[49] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[50]= "51)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[50]= new Array();
 choices[50][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[50][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[50][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[50][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[50] = choices[50][1];
 units[50] = "19";
 comments[50] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[51]= new Array();
 choices[51][0] = "117.5";
 choices[51][1] = "117.1";
 choices[51][2] = "116";
 choices[51][3] = "15";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[52][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[52][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[52][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[53]= new Array();
 choices[53][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[53][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[53][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[53][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[54]= new Array();
 choices[54][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[54][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[54][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[54][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[54] = choices[54][0];
 units[54] = "14";
 comments[54] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[55]= "56)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[55]= new Array();
 choices[55][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[55][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[55][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[55][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[55] = choices[55][0];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[56]= "57)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[56]= new Array();
 choices[56][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[56][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[56][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[56][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[57]= "58)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[57]= new Array();
 choices[57][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[57][1] = "Ninguna de las respuestas es correcta.";
 choices[57][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[57][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[57] = choices[57][0];
 units[57] = "5";
 comments[57] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[58]= "59)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[58]= new Array();
 choices[58][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[58][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[58][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[58][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[59]= new Array();
 choices[59][0] = "Se dejan listos los entornos de desarrollo";
 choices[59][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[59][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[59][3] = "Todas las anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "34, 84";
 comments[59] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[60]= new Array();
 choices[60][0] = "Nueve.";
 choices[60][1] = "Diez.";
 choices[60][2] = "Siete.";
 choices[60][3] = "Ocho.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[61]= new Array();
 choices[61][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[61][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[61][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[61][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[62]= "63)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[62][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[62][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[62][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[62] = choices[62][2];
 units[62] = "83";
 comments[62] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[63]= new Array();
 choices[63][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[63][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[63][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[63][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[63] = choices[63][0];
 units[63] = "10";
 comments[63] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[64]= "65)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[64]= new Array();
 choices[64][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[64][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[64][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[64][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[64] = choices[64][2];
 units[64] = "7";
 comments[64] = "Id Pregunta: 510. LEY 39/2015";


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


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[66]= "67)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[66]= new Array();
 choices[66][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[66][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[66][2] = "a y b son correctas";
 choices[66][3] = "a y b son incorrectas";
 answers[66] = choices[66][0];
 units[66] = "7";
 comments[66] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[67]= "68)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[67]= new Array();
 choices[67][0] = "Director General";
 choices[67][1] = "Secretario general";
 choices[67][2] = "Subdirector general";
 choices[67][3] = "Subsecretario";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[68]= new Array();
 choices[68][0] = "Jenkins";
 choices[68][1] = "Hudson";
 choices[68][2] = "SonarQube";
 choices[68][3] = "Todas lo son";
 answers[68] = choices[68][3];
 units[68] = "92";
 comments[68] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[69]= new Array();
 choices[69][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[69][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[69][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[69][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[70]= "71)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[70][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[70][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[70][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[70] = choices[70][2];
 units[70] = "57";
 comments[70] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[71]= "72)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[71]= new Array();
 choices[71][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[71][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[71][2] = "La normativa reguladora de cada derecho.";
 choices[71][3] = "Ley 50/1997, del Gobierno.";
 answers[71] = choices[71][2];
 units[71] = "10";
 comments[71] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[72]= new Array();
 choices[72][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[72][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[72][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[72][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[72] = choices[72][1];
 units[72] = "26";
 comments[72] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[73]= "74)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[73]= new Array();
 choices[73][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[73][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[73][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[73][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[74]= "75)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[74]= new Array();
 choices[74][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[74][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[74][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[74][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[74] = choices[74][0];
 units[74] = "8";
 comments[74] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


