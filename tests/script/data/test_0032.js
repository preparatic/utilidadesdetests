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

//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[0]= new Array();
 choices[0][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[0][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[0][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[0][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[0] = choices[0][3];
 units[0] = "46";
 comments[0] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[1]= "2)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[1]= new Array();
 choices[1][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[1][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[1][2] = "a y b son correctas";
 choices[1][3] = "a y b son incorrectas";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[2]= "3)  La recusaci&oacute;n se plantear&aacute;...";
 choices[2]= new Array();
 choices[2][0] = "S&oacute;lo verbalmente";
 choices[2][1] = "S&oacute;lo por escrito";
 choices[2][2] = "Verbalmente o por escrito";
 choices[2][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[3]= new Array();
 choices[3][0] = "Cinco.";
 choices[3][1] = "Dos.";
 choices[3][2] = "Cuatro.";
 choices[3][3] = "Siete.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[4]= new Array();
 choices[4][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[4][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[4][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[4][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[4] = choices[4][0];
 units[4] = "77";
 comments[4] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[5][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[5][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[5][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[5] = choices[5][1];
 units[5] = "98";
 comments[5] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[6]= new Array();
 choices[6][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[6][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[6][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[6][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[6] = choices[6][0];
 units[6] = "89";
 comments[6] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[7]= "8)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[7]= new Array();
 choices[7][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[7][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[7][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[7][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[7] = choices[7][1];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[8]= "9)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[8]= new Array();
 choices[8][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[8][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[8][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[8][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[9]= "10)  La Poblaci&oacute;n Activa incluye a:";
 choices[9]= new Array();
 choices[9][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[9][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[9][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[9][3] = "Todo aquel que desea trabajar";
 answers[9] = choices[9][2];
 units[9] = "15";
 comments[9] = "Id Pregunta: 110. ";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ala la correcta:";
 choices[10]= new Array();
 choices[10][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[10][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[10][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[10][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[11]= new Array();
 choices[11][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[11][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[11][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[11][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[11] = choices[11][2];
 units[11] = "77";
 comments[11] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[12]= new Array();
 choices[12][0] = "El Consejo Europeo.";
 choices[12][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[12][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[12][3] = "El Parlamento Europeo.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[13]= new Array();
 choices[13][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[13][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[13][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[13][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[13] = choices[13][1];
 units[13] = "78";
 comments[13] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[14]= "15)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[14]= new Array();
 choices[14][0] = "La Ley Org&aacute;nica 2/2011";
 choices[14][1] = "La Ley Org&aacute;nica 2/2012";
 choices[14][2] = "La Ley Org&aacute;nica 3/2012";
 choices[14][3] = "La Ley Org&aacute;nica 2/2002";
 answers[14] = choices[14][1];
 units[14] = "12";
 comments[14] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[15]= "16)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[15]= new Array();
 choices[15][0] = "Establecer tributos.";
 choices[15][1] = "Desarrollar lo establecido en una Ley.";
 choices[15][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[15][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[16]= new Array();
 choices[16][0] = "Yarn";
 choices[16][1] = "Flume";
 choices[16][2] = "Hive";
 choices[16][3] = "BizAgi";
 answers[16] = choices[16][3];
 units[16] = "73";
 comments[16] = "Id Pregunta: 655. ";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[17]= "18)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[17]= new Array();
 choices[17][0] = "Proveer de manera compartida servicios comunes";
 choices[17][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[17][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[17][3] = "Transparencia";
 answers[17] = choices[17][1];
 units[17] = "28";
 comments[17] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[18]= "19)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[18]= new Array();
 choices[18][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[18][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[18][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[18][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[19]= "20)  Se consideran interesados en el procedimiento administrativo:";
 choices[19]= new Array();
 choices[19][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[19][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[19][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][0];
 units[19] = "7";
 comments[19] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[20]= "21)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[20]= new Array();
 choices[20][0] = "A la persona demandante.";
 choices[20][1] = "A la persona demandada.";
 choices[20][2] = "Al &oacute;rgano judicial.";
 choices[20][3] = "Al &oacute;rgano administrativo.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[21]= new Array();
 choices[21][0] = "Car&aacute;cter sustitutivo";
 choices[21][1] = "Car&aacute;cter obligatorio";
 choices[21][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][3];
 units[21] = "19";
 comments[21] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[22]= "23)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[22]= new Array();
 choices[22][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[22][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[22][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[22][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[23]= "24)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[23]= new Array();
 choices[23][0] = "Un recurso de incumplimiento.";
 choices[23][1] = "Recurso de carencia.";
 choices[23][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[23][3] = "Ninguna es correcta.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[24]= "25)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[24]= new Array();
 choices[24][0] = "B&aacute;sico";
 choices[24][1] = "Medio";
 choices[24][2] = "Alto";
 choices[24][3] = "A los niveles medio y alto";
 answers[24] = choices[24][2];
 units[24] = "35";
 comments[24] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[25]= "26)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[25]= new Array();
 choices[25][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[25][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[25][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[25][3] = "Todas las anteriores son correctas.";
 answers[25] = choices[25][3];
 units[25] = "47";
 comments[25] = "Id Pregunta: 674. Receta electr&oacute;nica";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[26]= "27)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[26]= new Array();
 choices[26][0] = "circulares";
 choices[26][1] = "reglamentos internos";
 choices[26][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[26][3] = "disposiciones de car&aacute;cter general";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[27]= "28)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[27]= new Array();
 choices[27][0] = "solo mediante ley";
 choices[27][1] = "reglamentariamente";
 choices[27][2] = "mediante ley o reglamentariamente";
 choices[27][3] = "ninguna es correcta";
 answers[27] = choices[27][0];
 units[27] = "7";
 comments[27] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[28][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[28][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[28][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[28] = choices[28][0];
 units[28] = "19";
 comments[28] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[29]= new Array();
 choices[29][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[29][1] = "El responsable de la custodia de los datos enviados.";
 choices[29][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[29][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[29] = choices[29][3];
 units[29] = "35";
 comments[29] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[30]= "31)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[30]= new Array();
 choices[30][0] = "Estrasburgo.";
 choices[30][1] = "Bruselas.";
 choices[30][2] = "Luxemburgo.";
 choices[30][3] = "Holanda.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[31]= "32)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[31]= new Array();
 choices[31][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[31][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[31][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[31][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[32]= "33)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[32]= new Array();
 choices[32][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[32][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[32][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[32][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[32] = choices[32][2];
 units[32] = "12";
 comments[32] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[33]= "34)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[33]= new Array();
 choices[33][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[33][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[33][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[33][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[34]= new Array();
 choices[34][0] = "Se dejan listos los entornos de desarrollo";
 choices[34][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[34][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[34][3] = "Todas las anteriores son correctas";
 answers[34] = choices[34][3];
 units[34] = "34, 84";
 comments[34] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[35]= "36)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[35]= new Array();
 choices[35][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[35][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[35][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[35][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[35] = choices[35][2];
 units[35] = "7";
 comments[35] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[36]= new Array();
 choices[36][0] = "El 2 de Octubre de 2015";
 choices[36][1] = "El 15 de Septiembre de 2015";
 choices[36][2] = "El 1 de Octubre de 2015";
 choices[36][3] = "El 5 de Octubre de 2015";
 answers[36] = choices[36][0];
 units[36] = "19";
 comments[36] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[37]= new Array();
 choices[37][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[37][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[37][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[37][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[37] = choices[37][3];
 units[37] = "101";
 comments[37] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[38]= new Array();
 choices[38][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[38][1] = "La delimitaci&oacute;n de su territorio.";
 choices[38][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[38][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[38] = choices[38][2];
 units[38] = "1";
 comments[38] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[39]= "40)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[39]= new Array();
 choices[39][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[39][1] = "la Organizaci&oacute;n Territorial";
 choices[39][2] = "la Organizaci&oacute;n sectorial";
 choices[39][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[40]= "41)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[40]= new Array();
 choices[40][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[40][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[40][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[40][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[40] = choices[40][0];
 units[40] = "15";
 comments[40] = "Id Pregunta: 111. ";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[41]= "42)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[41]= new Array();
 choices[41][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[41][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[41][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[41][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[41] = choices[41][2];
 units[41] = "5";
 comments[41] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[42]= new Array();
 choices[42][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[42][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[42][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[42][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[42] = choices[42][1];
 units[42] = "77";
 comments[42] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[43]= new Array();
 choices[43][0] = "Ley 3/2015";
 choices[43][1] = "Ley 6/2007";
 choices[43][2] = "Ley 5/1984";
 choices[43][3] = "Ley 5/2006";
 answers[43] = choices[43][0];
 units[43] = "22";
 comments[43] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[44]= new Array();
 choices[44][0] = "Un programa presupuestario.";
 choices[44][1] = "Un concepto presupuestario.";
 choices[44][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[44][3] = "Un cr&eacute;dito presupuestario.";
 answers[44] = choices[44][0];
 units[44] = "10";
 comments[44] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[45]= new Array();
 choices[45][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[45][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[45][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[45][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[45] = choices[45][0];
 units[45] = "7";
 comments[45] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[46]= new Array();
 choices[46][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[46][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[46][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[46][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[46] = choices[46][3];
 units[46] = "56";
 comments[46] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[47]= new Array();
 choices[47][0] = "B&aacute;sico, medio y alto";
 choices[47][1] = "D&eacute;bil y fuerte";
 choices[47][2] = "Bajo, medio y alto";
 choices[47][3] = "Bajo, sustancial y alto";
 answers[47] = choices[47][3];
 units[47] = "77";
 comments[47] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[48]= new Array();
 choices[48][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[48][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[48][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[48][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[48] = choices[48][0];
 units[48] = "14";
 comments[48] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[49]= new Array();
 choices[49][0] = "El Parlamento y el Consejo.";
 choices[49][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[49][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[49][3] = "La Comisi&oacute;n y el Consejo.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[50]= new Array();
 choices[50][0] = "Compatibilidad";
 choices[50][1] = "Interoperabilidad";
 choices[50][2] = "Reutilizaci&oacute;n";
 choices[50][3] = "Accesibilidad";
 answers[50] = choices[50][0];
 units[50] = "22";
 comments[50] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[51]= "52)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[51]= new Array();
 choices[51][0] = "&oacute;rganos superiores";
 choices[51][1] = "&oacute;rganos directivos";
 choices[51][2] = "&oacute;rganos superiores y directivos";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[52]= "53)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[52]= new Array();
 choices[52][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[52][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[52][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[52][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 755. Ley 40/2015";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[53]= "54)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[53]= new Array();
 choices[53][0] = "Cabr&aacute; recurso de alzada";
 choices[53][1] = "Cabr&aacute; el nuevo protesto";
 choices[53][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[53][3] = "No cabr&aacute; recurso alguno";
 answers[53] = choices[53][3];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[54]= "55)  Son proyectos de Apache relacionados con Big Data:";
 choices[54]= new Array();
 choices[54][0] = "Hadoop";
 choices[54][1] = "Spark";
 choices[54][2] = "A) y B)";
 choices[54][3] = "Niguno de los anteriores";
 answers[54] = choices[54][2];
 units[54] = "73";
 comments[54] = "Id Pregunta: 108. ";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[55]= "56)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[55]= new Array();
 choices[55][0] = "La Comisi&oacute;n.";
 choices[55][1] = "El Consejo de Europa.";
 choices[55][2] = "El Consejo Europeo.";
 choices[55][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[55] = choices[55][3];
 units[55] = "5";
 comments[55] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la respuesta falsa";
 choices[56]= new Array();
 choices[56][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[56][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[56][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[56][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[56] = choices[56][3];
 units[56] = "22";
 comments[56] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[57]= new Array();
 choices[57][0] = "De los derechos y deberes fundamentales.";
 choices[57][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[57][2] = "Derechos y libertades.";
 choices[57][3] = "De la Corona.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[58]= new Array();
 choices[58][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[58][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[58][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[58][3] = "todas son correctas";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[59]= "60)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[59]= new Array();
 choices[59][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[59][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[59][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[59][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[59] = choices[59][1];
 units[59] = "19";
 comments[59] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[60]= "61)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[60]= new Array();
 choices[60][0] = "Presentar la moci&oacute;n de censura.";
 choices[60][1] = "Presidir las sesiones del Parlamento.";
 choices[60][2] = "Organizar la Secretar&iacute;a General.";
 choices[60][3] = "Preparar las actividades de las Comisiones.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[61]= new Array();
 choices[61][0] = "Las sociedades mercantiles estatales.";
 choices[61][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[61][2] = "Las respuestas a) y b) son correctas.";
 choices[61][3] = "Las respuestas a) y b) no son correctas.";
 answers[61] = choices[61][2];
 units[61] = "10";
 comments[61] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a las unidades administrativas:";
 choices[62]= new Array();
 choices[62][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[62][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[62][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[62][3] = "ninguna es correcta";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[63]= "64)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[63]= new Array();
 choices[63][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[63][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[63][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[63][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[63] = choices[63][3];
 units[63] = "41";
 comments[63] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[64]= new Array();
 choices[64][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[64][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[64][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[64][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[64] = choices[64][2];
 units[64] = "22";
 comments[64] = "Id Pregunta: 129. ";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[65]= "66)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[65]= new Array();
 choices[65][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[65][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[65][2] = "A y B son correctas.";
 choices[65][3] = "A y B son incorrectas.";
 answers[65] = choices[65][2];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[66]= "67)  Los Subdirectores generales:";
 choices[66]= new Array();
 choices[66][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[66][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[66][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[67]= "68)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[67][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[67][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[67][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[68]= "69)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[68]= new Array();
 choices[68][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[68][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[68][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[68][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[69]= "70)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[69]= new Array();
 choices[69][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[69][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[69][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[69][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[70]= "71)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[70]= new Array();
 choices[70][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[70][1] = "Publicidad de las normas.";
 choices[70][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[70][3] = "Coordinaci&oacute;n normativa.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[71]= "72)  Los criptosistemas pueden clasificarse en:";
 choices[71]= new Array();
 choices[71][0] = "Concretos, Estables e Inestables.";
 choices[71][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[71][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[71][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[71] = choices[71][3];
 units[71] = "76";
 comments[71] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[72]= "73)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[72]= new Array();
 choices[72][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[72][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[72][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[72][3] = "Todas las respuestas son correctas.";
 answers[72] = choices[72][1];
 units[72] = "101";
 comments[72] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[73]= "74)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[73]= new Array();
 choices[73][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[73][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[73][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[73][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[73] = choices[73][0];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[74]= "75)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[74]= new Array();
 choices[74][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[74][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[74][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[74][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[74] = choices[74][0];
 units[74] = "60";
 comments[74] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


