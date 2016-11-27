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

//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[0]= "1)  El recurso de alzada puede interponerse:";
 choices[0]= new Array();
 choices[0][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[0][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[0][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[0][3] = "Ante el Defensor del Pueblo";
 answers[0] = choices[0][1];
 units[0] = "8";
 comments[0] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


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


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[2]= new Array();
 choices[2][0] = "Constitucional.";
 choices[2][1] = "Penal.";
 choices[2][2] = "Militar.";
 choices[2][3] = "Tribunales consuetudinarios.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Lollipop";
 choices[3][1] = "Jelly Bean";
 choices[3][2] = "Marshmallow";
 choices[3][3] = "KitKat";
 answers[3] = choices[3][2];
 units[3] = "59";
 comments[3] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[4]= "5)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[4]= new Array();
 choices[4][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[4][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[4][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[4][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[5]= "6)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[5]= new Array();
 choices[5][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[5][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[5][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[5][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[5] = choices[5][1];
 units[5] = "19";
 comments[5] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[6]= "7)  Se consideran interesados en el procedimiento administrativo:";
 choices[6]= new Array();
 choices[6][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[6][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[6][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[6][3] = "todas son correctas";
 answers[6] = choices[6][0];
 units[6] = "7";
 comments[6] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[7][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[7][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[7][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[8]= "9)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[8]= new Array();
 choices[8][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[8][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[8][2] = "Los interesados en el procedimiento";
 choices[8][3] = "Las alternativas b) y c) son correctas";
 answers[8] = choices[8][1];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[9]= new Array();
 choices[9][0] = "CVS";
 choices[9][1] = "SVN";
 choices[9][2] = "Team Foundation Server";
 choices[9][3] = "Apache Tomcat";
 answers[9] = choices[9][3];
 units[9] = "92";
 comments[9] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[10]= "11)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[10]= new Array();
 choices[10][0] = "La Administraci&oacute;n General del Estado";
 choices[10][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[10][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[10][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[10] = choices[10][1];
 units[10] = "26";
 comments[10] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[11]= "12)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[11]= new Array();
 choices[11][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[11][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[11][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[11][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[11] = choices[11][2];
 units[11] = "14";
 comments[11] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[12]= "13)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[12]= new Array();
 choices[12][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[12][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[12][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[12][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[12] = choices[12][3];
 units[12] = "18, 20";
 comments[12] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[13]= "14)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[13]= new Array();
 choices[13][0] = "Las respuestas a) y b) son correctas.";
 choices[13][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[13][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[13][3] = "Las respuestas a) y b) no son correctas.";
 answers[13] = choices[13][0];
 units[13] = "10";
 comments[13] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[14]= "15)  La soberan&iacute;a nacional reside en:";
 choices[14]= new Array();
 choices[14][0] = "el Parlamento nacional.";
 choices[14][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[14][2] = "el pueblo espa&ntilde;ol.";
 choices[14][3] = "el Congreso y el Senado.";
 answers[14] = choices[14][3];
 units[14] = "1";
 comments[14] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; es SonarQube?";
 choices[15]= new Array();
 choices[15][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[15][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[15][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[15][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[15] = choices[15][2];
 units[15] = "92";
 comments[15] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[16]= new Array();
 choices[16][0] = "SPARQL";
 choices[16][1] = "UnQL";
 choices[16][2] = "XQUERY";
 choices[16][3] = "RQL";
 answers[16] = choices[16][0];
 units[16] = "74";
 comments[16] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[17]= "18)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[17]= new Array();
 choices[17][0] = "6 TB.";
 choices[17][1] = "8 TB.";
 choices[17][2] = "7 TB.";
 choices[17][3] = "4 TB.";
 answers[17] = choices[17][3];
 units[17] = "53";
 comments[17] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[18]= new Array();
 choices[18][0] = "3 pilares";
 choices[18][1] = "4 pilares";
 choices[18][2] = "5 pilares";
 choices[18][3] = "7 pilares";
 answers[18] = choices[18][0];
 units[18] = "17";
 comments[18] = "Id Pregunta: 759. Mercado &Uacute;nico Digital";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; es el machine learning?";
 choices[19]= new Array();
 choices[19][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[19][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[19][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[19][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[19] = choices[19][0];
 units[19] = "73";
 comments[19] = "Id Pregunta: 657. ";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[20]= new Array();
 choices[20][0] = "El rey, a propuesta del Gobierno.";
 choices[20][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[20][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[20][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[21]= "22)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[21]= new Array();
 choices[21][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[21][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[21][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[21][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[22]= new Array();
 choices[22][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[22][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[22][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[22][3] = "Todas las respuestas son correctas.";
 answers[22] = choices[22][2];
 units[22] = "42";
 comments[22] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[23]= "24)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[23]= new Array();
 choices[23][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[23][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[23][2] = "Ninguna es correcta.";
 choices[23][3] = "A y B son correctas.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[24]= "25)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[24]= new Array();
 choices[24][0] = "apud acta";
 choices[24][1] = "presencialmente";
 choices[24][2] = "electr&oacute;nicamente";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[25]= "26)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[25]= new Array();
 choices[25][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[25][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[25][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[25][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[26]= new Array();
 choices[26][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[26][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[26][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[26][3] = "La tasa de desempleo ronda el 20%";
 answers[26] = choices[26][2];
 units[26] = "12";
 comments[26] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[27]= "28)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[27]= new Array();
 choices[27][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[27][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[27][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[27][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[27] = choices[27][3];
 units[27] = "89";
 comments[27] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[28]= "29)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[28]= new Array();
 choices[28][0] = "la poblaci&oacute;n del territorio";
 choices[28][1] = "el volumen de gesti&oacute;n";
 choices[28][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[28][3] = "todas son correctas";
 answers[28] = choices[28][3];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la respuesta correcta:";
 choices[29]= new Array();
 choices[29][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[29][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[29][2] = "Las respuestas A y B son correctas.";
 choices[29][3] = "Las respuestas A y B son falsas.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[30]= "31)  El sector p&uacute;blico institucional se integra por:";
 choices[30]= new Array();
 choices[30][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[30][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[30][2] = "las Universidades p&uacute;blicas";
 choices[30][3] = "todas son correctas";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[31]= new Array();
 choices[31][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[31][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[31][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[31][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[31] = choices[31][0];
 units[31] = "84";
 comments[31] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[32]= "33)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[32]= new Array();
 choices[32][0] = "Transferencias de cr&eacute;dito.";
 choices[32][1] = "Incorporaciones de cr&eacute;dito.";
 choices[32][2] = "Imputaciones de cr&eacute;dito.";
 choices[32][3] = "Ampliaciones de cr&eacute;dito.";
 answers[32] = choices[32][2];
 units[32] = "10";
 comments[32] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[33]= "34)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[33]= new Array();
 choices[33][0] = "Los ocupados y los parados activos";
 choices[33][1] = "S&oacute;lo los ocupados";
 choices[33][2] = "Los ocupados y los inactivos";
 choices[33][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[33] = choices[33][0];
 units[33] = "12";
 comments[33] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[34][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[34][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[34][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[34] = choices[34][2];
 units[34] = "7";
 comments[34] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[35]= "36)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[35]= new Array();
 choices[35][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[35][1] = "mediante resoluci&oacute;n judicial especial";
 choices[35][2] = "&uacute;nicamente mediante poder notarial";
 choices[35][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[36][1] = "Por Orden Ministerial.";
 choices[36][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[36][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[37]= "38)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[37][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[37][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[37][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[38]= "39)  En el lenguaje de modelado UML :";
 choices[38]= new Array();
 choices[38][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[38][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[38][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[38][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[38] = choices[38][2];
 units[38] = "89";
 comments[38] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[39]= "40)  Sobre el recurso de reposici&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[39][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[39][2] = "Ha desaparecido en la Ley 39/2015";
 choices[39][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[39] = choices[39][0];
 units[39] = "8";
 comments[39] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[40]= "41)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[40]= new Array();
 choices[40][0] = "El Tratado de Roma, 1957.";
 choices[40][1] = "El Acta &Uacute;nica Europea.";
 choices[40][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[40][3] = "Ninguna es correcta.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[41]= "42)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[41]= new Array();
 choices[41][0] = "A nivel de art&iacute;culo.";
 choices[41][1] = "A nivel de cap&iacute;tulo.";
 choices[41][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[41][3] = "A nivel de concepto.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[42]= new Array();
 choices[42][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[42][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[42][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[42][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[42] = choices[42][3];
 units[42] = "19";
 comments[42] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[43]= new Array();
 choices[43][0] = "Crecimiento sostenible";
 choices[43][1] = "Crecimiento inteligente";
 choices[43][2] = "Crecimiento digital";
 choices[43][3] = "Crecimiento integrador";
 answers[43] = choices[43][2];
 units[43] = "19";
 comments[43] = "Id Pregunta: 757. Europa 2020";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[44]= new Array();
 choices[44][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[44][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[44][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[44][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[45]= "46)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[45]= new Array();
 choices[45][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[45][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[45][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[45][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[45] = choices[45][2];
 units[45] = "28";
 comments[45] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[46]= new Array();
 choices[46][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[46][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[46][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[46][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[46] = choices[46][0];
 units[46] = "45";
 comments[46] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[47]= "48)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[47]= new Array();
 choices[47][0] = "Transparencia e innovaci&oacute;n";
 choices[47][1] = "Seguridad y reutilizaci&oacute;n";
 choices[47][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[47][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[47] = choices[47][3];
 units[47] = "28";
 comments[47] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[48]= new Array();
 choices[48][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[48][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[48][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[48][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[48] = choices[48][1];
 units[48] = "34, 84";
 comments[48] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "De la C&aacute;mara respectiva.";
 choices[49][1] = "Del Rey.";
 choices[49][2] = "Del Tribunal Constitucional.";
 choices[49][3] = "Del Tribunal Supremo.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[50]= new Array();
 choices[50][0] = "En t&iacute;tulos-valores.";
 choices[50][1] = "Las respuestas a) y b) son correctas.";
 choices[50][2] = "Las respuestas a) y b) no son correctas.";
 choices[50][3] = "En cuenta.";
 answers[50] = choices[50][1];
 units[50] = "10";
 comments[50] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[51]= "52)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[51]= new Array();
 choices[51][0] = "la capital del pa&iacute;s";
 choices[51][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[51][2] = "cada una de las provincias";
 choices[51][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[52]= new Array();
 choices[52][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[52][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[52][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[52][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[52] = choices[52][2];
 units[52] = "77";
 comments[52] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[53]= "54)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[53]= new Array();
 choices[53][0] = "De los interesados en el procedimiento";
 choices[53][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[53][2] = "Disposiciones generales";
 choices[53][3] = "De los actos administrativos";
 answers[53] = choices[53][2];
 units[53] = "7";
 comments[53] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[54]= "55)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[54]= new Array();
 choices[54][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[54][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[54][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[54][3] = "Todas las respuestas son correctas.";
 answers[54] = choices[54][1];
 units[54] = "101";
 comments[54] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[55]= new Array();
 choices[55][0] = "De 1a  4 ";
 choices[55][1] = "De 3 a  7 ";
 choices[55][2] = "De 5 a  9";
 choices[55][3] = "De 7 a 11";
 answers[55] = choices[55][2];
 units[55] = "34, 84";
 comments[55] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[56]= new Array();
 choices[56][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[56][1] = "Solamente el Congreso.";
 choices[56][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[56][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[57]= "58)  En el sistema operativo Unix/Linux, el comando id:";
 choices[57]= new Array();
 choices[57][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[57][1] = "El comando id no existe.";
 choices[57][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[57][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[57] = choices[57][0];
 units[57] = "57";
 comments[57] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "14";
 choices[58][1] = "11";
 choices[58][2] = "12";
 choices[58][3] = "15";
 answers[58] = choices[58][0];
 units[58] = "19";
 comments[58] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[59]= "60)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[59]= new Array();
 choices[59][0] = "Un informe de g&eacute;nero.";
 choices[59][1] = "La variable de sexo.";
 choices[59][2] = "La variable de edad.";
 choices[59][3] = "La variable de comportamiento.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[60]= "61)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[60]= new Array();
 choices[60][0] = "Son actos individuales no normativos.";
 choices[60][1] = "Poseen alcance general.";
 choices[60][2] = "Son actos normativos.";
 choices[60][3] = "No son obligatorias.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[61]= "62)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[61]= new Array();
 choices[61][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[61][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[61][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[61][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[61] = choices[61][2];
 units[61] = "57";
 comments[61] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[62]= new Array();
 choices[62][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[62][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[62][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[62][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[63]= "64)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[63]= new Array();
 choices[63][0] = "Acciones de discriminaci&oacute;n.";
 choices[63][1] = "Acciones positivas.";
 choices[63][2] = "Acciones negativas.";
 choices[63][3] = "Acciones neutras.";
 answers[63] = choices[63][1];
 units[63] = "14";
 comments[63] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[64][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[64][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[64][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[65]= "66)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[65]= new Array();
 choices[65][0] = "De las disposiciones favorables.";
 choices[65][1] = "De las disposiciones sancionadoras no favorables.";
 choices[65][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[65][3] = "Las respuestas b) y c) son correctas.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[66]= new Array();
 choices[66][0] = "Cinco.";
 choices[66][1] = "Dos.";
 choices[66][2] = "Cuatro.";
 choices[66][3] = "Siete.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[67]= "68)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[67]= new Array();
 choices[67][0] = "Dos.";
 choices[67][1] = "Cuatro.";
 choices[67][2] = "Cinco.";
 choices[67][3] = "Tres.";
 answers[67] = choices[67][1];
 units[67] = "10";
 comments[67] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[68]= new Array();
 choices[68][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[68][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[68][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[68][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta falsa:";
 choices[69]= new Array();
 choices[69][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[69][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[69][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[69][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[70]= new Array();
 choices[70][0] = "Backup full.";
 choices[70][1] = "Backup diferencial.";
 choices[70][2] = "Backup incremental.";
 choices[70][3] = "Backup deduplicado.";
 answers[70] = choices[70][3];
 units[70] = "53";
 comments[70] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[71]= "72)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[71]= new Array();
 choices[71][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[71][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[71][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[71][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[72]= "73)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[72]= new Array();
 choices[72][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[72][1] = "La CETIC";
 choices[72][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[72][3] = "El MHFP";
 answers[72] = choices[72][0];
 units[72] = "19";
 comments[72] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[73]= new Array();
 choices[73][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[73][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[73][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[73][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[73] = choices[73][0];
 units[73] = "14";
 comments[73] = "Id Pregunta: 680. Pensiones";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[74]= "75)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[74]= new Array();
 choices[74][0] = "P&uacute;blica.";
 choices[74][1] = "Privada.";
 choices[74][2] = "Ambas son correctas.";
 choices[74][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


