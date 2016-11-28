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

//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[0]= "1)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[0]= new Array();
 choices[0][0] = "Los cr&eacute;ditos";
 choices[0][1] = "Las partidas presupuestarias";
 choices[0][2] = "Los derechos";
 choices[0][3] = "Las obligaciones";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[1]= "2)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[1]= new Array();
 choices[1][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[1][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[1][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[1][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[1] = choices[1][3];
 units[1] = "101";
 comments[1] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[2]= "3)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[2]= new Array();
 choices[2][0] = "El Jefe del Estado.";
 choices[2][1] = "El Tribunal Constitucional.";
 choices[2][2] = "El Congreso de los Diputados.";
 choices[2][3] = "Las Cortes Generales.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[3]= "4)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[3]= new Array();
 choices[3][0] = "El Presidente del Congreso de los Diputados.";
 choices[3][1] = "El Presidente del Gobierno.";
 choices[3][2] = "El Rey.";
 choices[3][3] = "El Consejo de Ministros.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[4]= "5)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[4]= new Array();
 choices[4][0] = "los Subsecretarios y Secretarios generales";
 choices[4][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[4][2] = "los Secretarios de Estado";
 choices[4][3] = "los Subdirectores generales";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[5]= "6)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[5]= new Array();
 choices[5][0] = "Rey.";
 choices[5][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[5][2] = "Constituci&oacute;n.";
 choices[5][3] = "Pueblo.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[6]= new Array();
 choices[6][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[6][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[6][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[6][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 121. ";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[7]= "8)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[7]= new Array();
 choices[7][0] = "Presencia equilibrada.";
 choices[7][1] = "Presencia paritaria.";
 choices[7][2] = "Presencia consensuada.";
 choices[7][3] = "presencia horizontal.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ala la correcta:";
 choices[8]= new Array();
 choices[8][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[8][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[8][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[8][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[9]= new Array();
 choices[9][0] = "Drupal";
 choices[9][1] = "Cassandra";
 choices[9][2] = "Wordpress";
 choices[9][3] = "OpenCMS";
 answers[9] = choices[9][1];
 units[9] = "99";
 comments[9] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[10]= "11)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[10]= new Array();
 choices[10][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[10][1] = "Programa de cartas de servicios";
 choices[10][2] = "Programa para la mejora continua de las organizaciones.";
 choices[10][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[10] = choices[10][2];
 units[10] = "18, 20";
 comments[10] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[11]= "12)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[11]= new Array();
 choices[11][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[11][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[11][2] = "Al Congreso de los Diputados.";
 choices[11][3] = "Al Gobierno.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[12]= new Array();
 choices[12][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[12][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[12][2] = "Fecha de otorgamiento.";
 choices[12][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 447. SERVICIOS COMUNES";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[13]= "14)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[13]= new Array();
 choices[13][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[13][1] = "1 de enero de 2015";
 choices[13][2] = "1 de enero de 2016";
 choices[13][3] = "1 de julio de 2016";
 answers[13] = choices[13][3];
 units[13] = "77";
 comments[13] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[14]= new Array();
 choices[14][0] = "Diagrama de clases";
 choices[14][1] = "Diagrama de componentes";
 choices[14][2] = "Diagrama de estructura";
 choices[14][3] = "Diagrama de paquetes";
 answers[14] = choices[14][0];
 units[14] = "91";
 comments[14] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[15]= "16)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[15]= new Array();
 choices[15][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[15][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[15][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[15][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[15] = choices[15][2];
 units[15] = "26";
 comments[15] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[16]= new Array();
 choices[16][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[16][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[16][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[16][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[16] = choices[16][1];
 units[16] = "7";
 comments[16] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[17]= "18)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[17]= new Array();
 choices[17][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[17][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[17][2] = "Las Inspecciones Generales de los Servicios";
 choices[17][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[17] = choices[17][1];
 units[17] = "75";
 comments[17] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[18]= "19)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[18]= new Array();
 choices[18][0] = "CO.PER.";
 choices[18][1] = "COMPER.";
 choices[18][2] = "CO.RE.PER.";
 choices[18][3] = "CO.PE.RRE.";
 answers[18] = choices[18][2];
 units[18] = "5";
 comments[18] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[19]= new Array();
 choices[19][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[19][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[19][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[19][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[19] = choices[19][1];
 units[19] = "77";
 comments[19] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[20]= "21)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[20]= new Array();
 choices[20][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[20][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[20][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[20][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[20] = choices[20][2];
 units[20] = "7";
 comments[20] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[21]= new Array();
 choices[21][0] = "Indirecta.";
 choices[21][1] = "Directa.";
 choices[21][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[21][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[21] = choices[21][1];
 units[21] = "14";
 comments[21] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[22]= "23)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[22]= new Array();
 choices[22][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[22][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[22][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[22][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[22] = choices[22][0];
 units[22] = "8";
 comments[22] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[23]= "24)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[23]= new Array();
 choices[23][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[23][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[23][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[23][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[24]= new Array();
 choices[24][0] = "El Consejo Europeo.";
 choices[24][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[24][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[24][3] = "El Parlamento Europeo.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[25]= "26)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[25]= new Array();
 choices[25][0] = "Ejecutivo";
 choices[25][1] = "Limitativo";
 choices[25][2] = "Estimativo";
 choices[25][3] = "Progresivo";
 answers[25] = choices[25][1];
 units[25] = "10";
 comments[25] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[26]= "27)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[26][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[26][2] = "b) y d) son verdaderas";
 choices[26][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[26] = choices[26][1];
 units[26] = "18, 20";
 comments[26] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[27]= new Array();
 choices[27][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[27][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[27][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[27][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[27] = choices[27][1];
 units[27] = "78";
 comments[27] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[28]= new Array();
 choices[28][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[28][1] = "La delimitaci&oacute;n de su territorio.";
 choices[28][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[28][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[29]= new Array();
 choices[29][0] = "Varios namenodes y varios datanodes por cluster";
 choices[29][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[29][2] = "1 namenode y varios datanodes por cluster";
 choices[29][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[29] = choices[29][2];
 units[29] = "73";
 comments[29] = "Id Pregunta: 663. ";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[30]= new Array();
 choices[30][0] = "De los derechos y deberes fundamentales.";
 choices[30][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[30][2] = "Derechos y libertades.";
 choices[30][3] = "De la Corona.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[31]= "32)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[31]= new Array();
 choices[31][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[31][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[31][2] = "Ambas son correctas.";
 choices[31][3] = "Ambas son incorrectas.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[32]= "33)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[32]= new Array();
 choices[32][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[32][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[32][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[32][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[32] = choices[32][3];
 units[32] = "12";
 comments[32] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[33][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[33][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[33][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[33] = choices[33][2];
 units[33] = "85";
 comments[33] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[34]= "35)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[34]= new Array();
 choices[34][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[34][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[34][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[34][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[34] = choices[34][0];
 units[34] = "14";
 comments[34] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[35]= "36)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[35]= new Array();
 choices[35][0] = "192.228.0.0";
 choices[35][1] = "192.228.8.0";
 choices[35][2] = "192.228.16.0";
 choices[35][3] = "192.228.17.0";
 answers[35] = choices[35][2];
 units[35] = "109";
 comments[35] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[36]= new Array();
 choices[36][0] = "Categor&iacute;a b&aacute;sica";
 choices[36][1] = "Categor&iacute;a media";
 choices[36][2] = "Categor&iacute;a alta";
 choices[36][3] = "Categor&iacute;a media y alta";
 answers[36] = choices[36][2];
 units[36] = "46";
 comments[36] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[37]= "38)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[37]= new Array();
 choices[37][0] = "Subgrupo A1";
 choices[37][1] = "Subgrupo A2";
 choices[37][2] = "Subgrupo B";
 choices[37][3] = "Subgrupo C1";
 answers[37] = choices[37][0];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[38][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[38][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[38][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[38] = choices[38][0];
 units[38] = "45";
 comments[38] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[39]= "40)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Paging";
 choices[39][1] = "Roaming";
 choices[39][2] = "Handover";
 choices[39][3] = "Trunking";
 answers[39] = choices[39][0];
 units[39] = "117";
 comments[39] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[40]= "41)  El sector p&uacute;blico institucional se integra por:";
 choices[40]= new Array();
 choices[40][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[40][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[40][2] = "las Universidades p&uacute;blicas";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[41]= new Array();
 choices[41][0] = "Art&iacute;culo 16.2.";
 choices[41][1] = "Art&iacute;culo 17.1.";
 choices[41][2] = "Art&iacute;culo 18.1.";
 choices[41][3] = "Art&iacute;culo 18.2.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[42]= "43)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[42]= new Array();
 choices[42][0] = "Fat y Ntfs.";
 choices[42][1] = "Extfat y Fat.";
 choices[42][2] = "Fat y Nfst.";
 choices[42][3] = "ext2fs y Ntfs.";
 answers[42] = choices[42][0];
 units[42] = "58";
 comments[42] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[43]= "44)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[43]= new Array();
 choices[43][0] = "La Ley Org&aacute;nica 2/2011";
 choices[43][1] = "La Ley Org&aacute;nica 2/2012";
 choices[43][2] = "La Ley Org&aacute;nica 3/2012";
 choices[43][3] = "La Ley Org&aacute;nica 2/2002";
 answers[43] = choices[43][1];
 units[43] = "12";
 comments[43] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[44]= new Array();
 choices[44][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[44][1] = "La Direcci&oacute;n de la Competencia.";
 choices[44][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[44][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[44] = choices[44][0];
 units[44] = "121";
 comments[44] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[45]= "46)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[45]= new Array();
 choices[45][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[45][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[45][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[45][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[45] = choices[45][3];
 units[45] = "14";
 comments[45] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Universidades p&uacute;blicas:";
 choices[46]= new Array();
 choices[46][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[46][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[46][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[46][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[46] = choices[46][1];
 units[46] = "7";
 comments[46] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[47]= new Array();
 choices[47][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[47][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[47][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[47][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[47] = choices[47][1];
 units[47] = "89";
 comments[47] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[48]= new Array();
 choices[48][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[48][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[48][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[48][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[49]= "50)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[49]= new Array();
 choices[49][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[49][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[49][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[49][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 683. Pensiones";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[50]= "51)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[50]= new Array();
 choices[50][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[50][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[50][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[50][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[50] = choices[50][2];
 units[50] = "45";
 comments[50] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[51]= new Array();
 choices[51][0] = "As&iacute;ncrona.";
 choices[51][1] = "Log-shipping.";
 choices[51][2] = "Disk buffering.";
 choices[51][3] = "S&iacute;ncrona.";
 answers[51] = choices[51][3];
 units[51] = "53";
 comments[51] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[52]= "53)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Con el a&ntilde;o anterior.";
 choices[52][1] = "Con los tres a&ntilde;os anteriores.";
 choices[52][2] = "Con el a&ntilde;o natural.";
 choices[52][3] = "Con los dos a&ntilde;os anteriores.";
 answers[52] = choices[52][2];
 units[52] = "10";
 comments[52] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[53]= "54)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[53]= new Array();
 choices[53][0] = "Acoso sexual.";
 choices[53][1] = "Acoso por raz&oacute;n de sexo.";
 choices[53][2] = "Acoso laboral.";
 choices[53][3] = "Acoso mental.";
 answers[53] = choices[53][1];
 units[53] = "14";
 comments[53] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[54]= "55)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[54]= new Array();
 choices[54][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[54][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[54][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[54][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[54] = choices[54][2];
 units[54] = "1";
 comments[54] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[55]= "56)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[55]= new Array();
 choices[55][0] = "El 23 de julio de 1952.";
 choices[55][1] = "El 18 de abril de 1951.";
 choices[55][2] = "El 16 de abril de 1948.";
 choices[55][3] = "d)Ninguna de las respuestas son correctas.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 349. UNION EUROPEA";


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


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[57]= new Array();
 choices[57][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[57][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[57][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[57][3] = "Ninguna de las anteriores.";
 answers[57] = choices[57][1];
 units[57] = "92";
 comments[57] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[58]= "59)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[58]= new Array();
 choices[58][0] = "un art&iacute;culo";
 choices[58][1] = "dos art&iacute;culos";
 choices[58][2] = "tres art&iacute;culos";
 choices[58][3] = "cuatro art&iacute;culos";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[59]= new Array();
 choices[59][0] = "Agenda digital para Europa";
 choices[59][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[59][2] = "Juventud en movimiento";
 choices[59][3] = "Agenda Web 2.0";
 answers[59] = choices[59][3];
 units[59] = "19";
 comments[59] = "Id Pregunta: 760. Europa 2020";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[60]= new Array();
 choices[60][0] = "El Presidente del Senado";
 choices[60][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[60][2] = "El Presidente del Gobierno";
 choices[60][3] = "El Presidente de las Cortes Generales";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la respuesta falsa:";
 choices[61]= new Array();
 choices[61][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[61][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[61][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[61][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[62]= "63)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[62]= new Array();
 choices[62][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[62][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[62][2] = "Los interesados en el procedimiento";
 choices[62][3] = "Las alternativas b) y c) son correctas";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[63]= new Array();
 choices[63][0] = "De los derechos y deberes fundamentales.";
 choices[63][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[63][2] = "Derechos y libertades.";
 choices[63][3] = "De la Corona.";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; es Java Web Start?";
 choices[64]= new Array();
 choices[64][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[64][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[64][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[64][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[64] = choices[64][3];
 units[64] = "64";
 comments[64] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[65]= "66)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[65]= new Array();
 choices[65][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[65][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[65][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[65][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[65] = choices[65][2];
 units[65] = "85";
 comments[65] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[66]= new Array();
 choices[66][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[66][1] = "De nivel alto.";
 choices[66][2] = "De nivel medio y nivel alto.";
 choices[66][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[66] = choices[66][3];
 units[66] = "35";
 comments[66] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[67]= "68)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[67]= new Array();
 choices[67][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[67][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[67][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[67][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[68]= new Array();
 choices[68][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[68][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[68][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[68][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[68] = choices[68][3];
 units[68] = "26";
 comments[68] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[69]= "70)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[69]= new Array();
 choices[69][0] = "90";
 choices[69][1] = "50";
 choices[69][2] = "64";
 choices[69][3] = "60";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[70]= "71)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[70]= new Array();
 choices[70][0] = "El Rey.";
 choices[70][1] = "El Jefe del Estado.";
 choices[70][2] = "El Gobierno.";
 choices[70][3] = "El Presidente del Gobierno.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[71]= "72)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[71]= new Array();
 choices[71][0] = "Cinco a&ntilde;os.";
 choices[71][1] = "Seis a&ntilde;os.";
 choices[71][2] = "Cuatro a&ntilde;os.";
 choices[71][3] = "Tres a&ntilde;os.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[72]= new Array();
 choices[72][0] = "Selenium";
 choices[72][1] = "JUnit";
 choices[72][2] = "Jenkins";
 choices[72][3] = "JMeter";
 answers[72] = choices[72][2];
 units[72] = "92";
 comments[72] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[73]= new Array();
 choices[73][0] = "La CETIC";
 choices[73][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[73][2] = "La DTIC";
 choices[73][3] = "El MHFP";
 answers[73] = choices[73][0];
 units[73] = "19";
 comments[73] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[74]= new Array();
 choices[74][0] = "Por Real Decreto.";
 choices[74][1] = "Por Orden del Ministerio del Interior.";
 choices[74][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[74][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 230. CONSTITUCION1978";


