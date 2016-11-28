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

//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[0]= "1)  La Administraci&oacute;n General del Estado se organiza:";
 choices[0]= new Array();
 choices[0][0] = "en Ministerios";
 choices[0][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[0][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[0][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[0] = choices[0][1];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[1]= "2)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[1][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[1][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[1][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[2]= "3)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[2]= new Array();
 choices[2][0] = "la poblaci&oacute;n del territorio";
 choices[2][1] = "el volumen de gesti&oacute;n";
 choices[2][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[2][3] = "todas son correctas";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Org&aacute;nica.";
 choices[3][1] = "Contable.";
 choices[3][2] = "Econ&oacute;mica.";
 choices[3][3] = "Por programas.";
 answers[3] = choices[3][2];
 units[3] = "10";
 comments[3] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[4]= "5)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[4]= new Array();
 choices[4][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[4][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[4][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[4][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[4] = choices[4][0];
 units[4] = "7";
 comments[4] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[5]= "6)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[5]= new Array();
 choices[5][0] = "A los cinco a&ntilde;os.";
 choices[5][1] = "A los dos a&ntilde;os.";
 choices[5][2] = "A los tres a&ntilde;os.";
 choices[5][3] = "A los cuatro a&ntilde;os.";
 answers[5] = choices[5][0];
 units[5] = "10";
 comments[5] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[6]= new Array();
 choices[6][0] = "A nivel de secci&oacute;n de programa.";
 choices[6][1] = "A nivel de grupo de programa.";
 choices[6][2] = "Ninguna de las respuestas es correcta.";
 choices[6][3] = "A nivel de programa.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[7]= "8)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[7]= new Array();
 choices[7][0] = "el Gobierno de la Naci&oacute;n";
 choices[7][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[7][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[7][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[7] = choices[7][3];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[8]= "9)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Principio de transparencia.";
 choices[8][1] = "Principio de cooperaci&oacute;n.";
 choices[8][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[8][3] = "Principio de lealtad institucional.";
 answers[8] = choices[8][1];
 units[8] = "10";
 comments[8] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la respuesta correcta:";
 choices[9]= new Array();
 choices[9][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[9][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[9][2] = "A y B son correctas.";
 choices[9][3] = "A y B son falsas.";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[10]= new Array();
 choices[10][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[10][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[10][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[10][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[11]= "12)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[11]= new Array();
 choices[11][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[11][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[11][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[11][3] = "todas son correctas";
 answers[11] = choices[11][3];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[12]= new Array();
 choices[12][0] = "Transferencias de cr&eacute;dito.";
 choices[12][1] = "Incorporaciones de cr&eacute;dito.";
 choices[12][2] = "Imputaciones de cr&eacute;dito.";
 choices[12][3] = "Ampliaciones de cr&eacute;dito.";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[13]= "14)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[13]= new Array();
 choices[13][0] = "circulares";
 choices[13][1] = "reglamentos internos";
 choices[13][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[13][3] = "disposiciones de car&aacute;cter general";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[14]= new Array();
 choices[14][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[14][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[14][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[14][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[15]= "16)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[15]= new Array();
 choices[15][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[15][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[15][2] = "el Subdirector General que el Delegado designe";
 choices[15][3] = "el Secretario de Estado";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[16]= "17)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[16]= new Array();
 choices[16][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[16][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[16][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[16][3] = "ninguna es correcta";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[17]= "18)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[17]= new Array();
 choices[17][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[17][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[17][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[17][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[18]= "19)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[18]= new Array();
 choices[18][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[18][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[18][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[18][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[19]= "20)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[19]= new Array();
 choices[19][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[19][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[19][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[19][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[19] = choices[19][3];
 units[19] = "7";
 comments[19] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[20]= "21)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "la Administraci&oacute;n General del Estado";
 choices[20][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[20][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[20][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[21]= new Array();
 choices[21][0] = "Las respuestas a) y b) son correctas.";
 choices[21][1] = "Las respuestas a) y b) no son correctas.";
 choices[21][2] = "Contenido coherente con los planes sectoriales.";
 choices[21][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[22]= new Array();
 choices[22][0] = "El Ministro de Econom&iacute;a.";
 choices[22][1] = "El Gobierno.";
 choices[22][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[22][3] = "El Presidente del Gobierno.";
 answers[22] = choices[22][1];
 units[22] = "10";
 comments[22] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[23]= "24)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "en cada Comunidad Aut&oacute;noma";
 choices[23][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[23][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[23][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[23] = choices[23][1];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[24]= "25)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[24]= new Array();
 choices[24][0] = "los Subsecretarios y los Secretarios generales";
 choices[24][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[24][2] = "los Secretarios de Estado y los Directores generales";
 choices[24][3] = "los Ministros y los Secretarios de Estado";
 answers[24] = choices[24][3];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[25]= "26)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[25]= new Array();
 choices[25][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[25][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[25][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[25][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[25] = choices[25][3];
 units[25] = "7";
 comments[25] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[26]= "27)  La partida presupuestaria es equivalente a...";
 choices[26]= new Array();
 choices[26][0] = "El sujeto que realiza el gasto";
 choices[26][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[26][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[26][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[26] = choices[26][3];
 units[26] = "10";
 comments[26] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[27]= "28)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[27]= new Array();
 choices[27][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[27][1] = "el Consejo de Estado";
 choices[27][2] = "el Congreso";
 choices[27][3] = "las Cortes Generales";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[28]= new Array();
 choices[28][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[28][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[28][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[28][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto a las unidades administrativas:";
 choices[29]= new Array();
 choices[29][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[29][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[29][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][1];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[30]= new Array();
 choices[30][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[30][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[30][2] = "Las respuestas a) b) no son correctas.";
 choices[30][3] = "Las respuestas a) y b) son correctas.";
 answers[30] = choices[30][3];
 units[30] = "10";
 comments[30] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[31]= new Array();
 choices[31][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[31][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[31][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[31][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ala la correcta:";
 choices[32]= new Array();
 choices[32][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[32][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[32][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[32][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[33]= new Array();
 choices[33][0] = "verbalmente";
 choices[33][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[33][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[33][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[33] = choices[33][2];
 units[33] = "7";
 comments[33] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[34]= new Array();
 choices[34][0] = "En t&iacute;tulos-valores.";
 choices[34][1] = "Las respuestas a) y b) son correctas.";
 choices[34][2] = "Las respuestas a) y b) no son correctas.";
 choices[34][3] = "En cuenta.";
 answers[34] = choices[34][1];
 units[34] = "10";
 comments[34] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[35]= new Array();
 choices[35][0] = "A los ministros.";
 choices[35][1] = "Las respuestas a) y b) son correctas.";
 choices[35][2] = "Las respuestas a) y b) no son correctas.";
 choices[35][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[35] = choices[35][1];
 units[35] = "10";
 comments[35] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[36]= new Array();
 choices[36][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[36][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[36][2] = "el Ministerio del Interior";
 choices[36][3] = "la Administraci&oacute;n General del Estado";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[37]= new Array();
 choices[37][0] = "Ley 50/1997, del Gobierno.";
 choices[37][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[37][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[37][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[37] = choices[37][1];
 units[37] = "10";
 comments[37] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[38]= new Array();
 choices[38][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[38][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[38][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[38][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[38] = choices[38][0];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[39]= new Array();
 choices[39][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[39][1] = "Todas las respuestas son correctas.";
 choices[39][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[39][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[39] = choices[39][1];
 units[39] = "10";
 comments[39] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[40]= "41)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[40]= new Array();
 choices[40][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[40][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[40][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[40][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[41]= new Array();
 choices[41][0] = "Por reembolso de pr&eacute;stamos.";
 choices[41][1] = "Por la venta de bienes.";
 choices[41][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[41][3] = "Por prestaci&oacute;n de servicios.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[42]= "43)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[42]= new Array();
 choices[42][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[42][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[42][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[42][3] = "Todas son correctas.";
 answers[42] = choices[42][0];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[43]= "44)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[43]= new Array();
 choices[43][0] = "Subsecretario";
 choices[43][1] = "Subdirector general";
 choices[43][2] = "Secretario de Estado";
 choices[43][3] = "ninguna es correcta";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[44]= "45)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[44]= new Array();
 choices[44][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[44][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[44][2] = "A y B son correctas.";
 choices[44][3] = "A y B son incorrectas.";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[45]= new Array();
 choices[45][0] = "10 d&iacute;as.";
 choices[45][1] = "15 d&iacute;as.";
 choices[45][2] = "1 mes.";
 choices[45][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[45] = choices[45][0];
 units[45] = "7";
 comments[45] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[46]= new Array();
 choices[46][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[46][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[46][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[46][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[47]= "48)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[47]= new Array();
 choices[47][0] = "Director General";
 choices[47][1] = "Secretario general";
 choices[47][2] = "Subdirector general";
 choices[47][3] = "Subsecretario";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[48]= "49)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[48]= new Array();
 choices[48][0] = "la capital del pa&iacute;s";
 choices[48][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[48][2] = "cada una de las provincias";
 choices[48][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[49]= "50)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[49]= new Array();
 choices[49][0] = "La Ley General Tributaria.";
 choices[49][1] = "La Ley Presupuestaria.";
 choices[49][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[49][3] = "Ninguna de las respuestas es correcta.";
 answers[49] = choices[49][0];
 units[49] = "10";
 comments[49] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[50]= "51)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[50]= new Array();
 choices[50][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[50][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[50][2] = "a y b son correctas";
 choices[50][3] = "a y b son incorrectas";
 answers[50] = choices[50][0];
 units[50] = "7";
 comments[50] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[51]= "52)  Respecto a los servicios territoriales es correcto:";
 choices[51]= new Array();
 choices[51][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[51][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[51][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[52]= new Array();
 choices[52][0] = "Al Gobierno de la naci&oacute;n";
 choices[52][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[52][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[52][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[52] = choices[52][3];
 units[52] = "7";
 comments[52] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[53]= new Array();
 choices[53][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[53][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[53][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[53][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[53] = choices[53][2];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[54]= "55)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[54]= new Array();
 choices[54][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[54][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[54][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[54][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[54] = choices[54][1];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[55]= "56)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[55]= new Array();
 choices[55][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[55][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[55][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[55][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[55] = choices[55][2];
 units[55] = "8";
 comments[55] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[56]= "57)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[56]= new Array();
 choices[56][0] = "el Secretario General";
 choices[56][1] = "el Subdirector General";
 choices[56][2] = "el Secretario de Estado";
 choices[56][3] = "ninguna es correcta";
 answers[56] = choices[56][0];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[57]= "58)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[57]= new Array();
 choices[57][0] = "Dos.";
 choices[57][1] = "Cuatro.";
 choices[57][2] = "Cinco.";
 choices[57][3] = "Tres.";
 answers[57] = choices[57][1];
 units[57] = "10";
 comments[57] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[58]= "59)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[58]= new Array();
 choices[58][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[58][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[58][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[58][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[59]= new Array();
 choices[59][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[59][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[59][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[59][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[60]= new Array();
 choices[60][0] = "De oficio.";
 choices[60][1] = "A solicitud del interesado.";
 choices[60][2] = "De oficio o a solicitud del interesado.";
 choices[60][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[61]= "62)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[61]= new Array();
 choices[61][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[61][1] = "Tratarse de un acto no susceptible de recurso";
 choices[61][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[61][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[61] = choices[61][2];
 units[61] = "8";
 comments[61] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[62]= "63)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[62]= new Array();
 choices[62][0] = "Un d&iacute;a";
 choices[62][1] = "Dos d&iacute;as";
 choices[62][2] = "Tres d&iacute;as";
 choices[62][3] = "Cuatro d&iacute;as";
 answers[62] = choices[62][3];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[63]= "64)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[63]= new Array();
 choices[63][0] = "A nivel de art&iacute;culo.";
 choices[63][1] = "A nivel de cap&iacute;tulo.";
 choices[63][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[63][3] = "A nivel de concepto.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[64]= "65)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[64]= new Array();
 choices[64][0] = "El Ministerio de Hacienda.";
 choices[64][1] = "El Ministerio de Econom&iacute;a.";
 choices[64][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[64][3] = "Ninguna de las respuestas es correcta.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[65]= "66)  En las Administraciones P&uacute;blicas...";
 choices[65]= new Array();
 choices[65][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[65][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[65][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[65][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[65] = choices[65][0];
 units[65] = "10";
 comments[65] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[66]= new Array();
 choices[66][0] = "Conferencia de Presidentes.";
 choices[66][1] = "Convenios de colaboraci&oacute;n.";
 choices[66][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[66][3] = "Conferencias Sectoriales.";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[67]= "68)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[67]= new Array();
 choices[67][0] = "Cabr&aacute; recurso de alzada";
 choices[67][1] = "Cabr&aacute; el nuevo protesto";
 choices[67][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[67][3] = "No cabr&aacute; recurso alguno";
 answers[67] = choices[67][3];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[68]= new Array();
 choices[68][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[68][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[68][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[68][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[68] = choices[68][2];
 units[68] = "7";
 comments[68] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[69]= new Array();
 choices[69][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[69][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[69][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[69][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[69] = choices[69][2];
 units[69] = "7";
 comments[69] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[70]= "71)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[70]= new Array();
 choices[70][0] = "los Ministros y los Secretarios de Estado";
 choices[70][1] = "los Subsecretarios y Secretarios generales";
 choices[70][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[70][3] = "los Directores generales";
 answers[70] = choices[70][2];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[71]= "72)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[71]= new Array();
 choices[71][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[71][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[71][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[71][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[72]= "73)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[72]= new Array();
 choices[72][0] = "la Administraci&oacute;n General del Estado";
 choices[72][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[72][2] = "las Entidades Locales";
 choices[72][3] = "todas son correctas";
 answers[72] = choices[72][3];
 units[72] = "7";
 comments[72] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[73]= "74)  Tienen la condici&oacute;n de alto cargo:";
 choices[73]= new Array();
 choices[73][0] = "los &oacute;rganos superiores";
 choices[73][1] = "los &oacute;rganos superiores y directivos";
 choices[73][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[73][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[74]= "75)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[74]= new Array();
 choices[74][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[74][1] = "garantizar la conservaci&oacute;n del documento";
 choices[74][2] = "garantizar la autenticidad del documento";
 choices[74][3] = "garantizar la integridad del documento";
 answers[74] = choices[74][0];
 units[74] = "7";
 comments[74] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


