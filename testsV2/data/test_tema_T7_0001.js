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


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[3]= "4)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[3]= new Array();
 choices[3][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[3][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[3][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[3][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[3] = choices[3][0];
 units[3] = "7";
 comments[3] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[4]= "5)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[4]= new Array();
 choices[4][0] = "el Gobierno de la Naci&oacute;n";
 choices[4][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[4][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[4][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[4] = choices[4][3];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[5][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[5][2] = "A y B son correctas.";
 choices[5][3] = "A y B son falsas.";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[6]= "7)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[6]= new Array();
 choices[6][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[6][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[6][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[6][3] = "todas son correctas";
 answers[6] = choices[6][3];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[7]= "8)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[7]= new Array();
 choices[7][0] = "circulares";
 choices[7][1] = "reglamentos internos";
 choices[7][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[7][3] = "disposiciones de car&aacute;cter general";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[8]= new Array();
 choices[8][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[8][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[8][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[8][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[9]= "10)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[9]= new Array();
 choices[9][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[9][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[9][2] = "el Subdirector General que el Delegado designe";
 choices[9][3] = "el Secretario de Estado";
 answers[9] = choices[9][0];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[10]= "11)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[10]= new Array();
 choices[10][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[10][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[10][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[10][3] = "ninguna es correcta";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[11]= "12)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[11]= new Array();
 choices[11][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[11][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[11][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[11][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[12]= "13)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[12]= new Array();
 choices[12][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[12][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[12][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[12][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[12] = choices[12][2];
 units[12] = "7";
 comments[12] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[13]= "14)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[13]= new Array();
 choices[13][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[13][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[13][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[13][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[13] = choices[13][3];
 units[13] = "7";
 comments[13] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[14]= "15)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[14]= new Array();
 choices[14][0] = "la Administraci&oacute;n General del Estado";
 choices[14][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[14][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[14][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[15]= "16)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "en cada Comunidad Aut&oacute;noma";
 choices[15][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[15][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[15][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[16]= "17)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[16]= new Array();
 choices[16][0] = "los Subsecretarios y los Secretarios generales";
 choices[16][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[16][2] = "los Secretarios de Estado y los Directores generales";
 choices[16][3] = "los Ministros y los Secretarios de Estado";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[17]= "18)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[17]= new Array();
 choices[17][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[17][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[17][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[17][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[17] = choices[17][3];
 units[17] = "7";
 comments[17] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[18]= "19)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[18]= new Array();
 choices[18][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[18][1] = "el Consejo de Estado";
 choices[18][2] = "el Congreso";
 choices[18][3] = "las Cortes Generales";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a las unidades administrativas:";
 choices[19]= new Array();
 choices[19][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[19][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[19][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[19][3] = "ninguna es correcta";
 answers[19] = choices[19][1];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[20]= new Array();
 choices[20][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[20][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[20][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[20][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[20] = choices[20][1];
 units[20] = "7";
 comments[20] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ala la correcta:";
 choices[21]= new Array();
 choices[21][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[21][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[21][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[21][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[22]= new Array();
 choices[22][0] = "verbalmente";
 choices[22][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[22][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[22][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[22] = choices[22][2];
 units[22] = "7";
 comments[22] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[23]= "24)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[23]= new Array();
 choices[23][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[23][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[23][2] = "el Ministerio del Interior";
 choices[23][3] = "la Administraci&oacute;n General del Estado";
 answers[23] = choices[23][0];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[24]= new Array();
 choices[24][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[24][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[24][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[24][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[24] = choices[24][0];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[25]= "26)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[25]= new Array();
 choices[25][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[25][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[25][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[25][3] = "Todas son correctas.";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[26]= "27)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[26]= new Array();
 choices[26][0] = "Subsecretario";
 choices[26][1] = "Subdirector general";
 choices[26][2] = "Secretario de Estado";
 choices[26][3] = "ninguna es correcta";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[27]= "28)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[27]= new Array();
 choices[27][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[27][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[27][2] = "A y B son correctas.";
 choices[27][3] = "A y B son incorrectas.";
 answers[27] = choices[27][2];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[28]= new Array();
 choices[28][0] = "10 d&iacute;as.";
 choices[28][1] = "15 d&iacute;as.";
 choices[28][2] = "1 mes.";
 choices[28][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[28] = choices[28][0];
 units[28] = "7";
 comments[28] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[29]= "30)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[29]= new Array();
 choices[29][0] = "Director General";
 choices[29][1] = "Secretario general";
 choices[29][2] = "Subdirector general";
 choices[29][3] = "Subsecretario";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[30]= "31)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[30]= new Array();
 choices[30][0] = "la capital del pa&iacute;s";
 choices[30][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[30][2] = "cada una de las provincias";
 choices[30][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[31]= "32)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[31]= new Array();
 choices[31][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[31][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[31][2] = "a y b son correctas";
 choices[31][3] = "a y b son incorrectas";
 answers[31] = choices[31][0];
 units[31] = "7";
 comments[31] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a los servicios territoriales es correcto:";
 choices[32]= new Array();
 choices[32][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[32][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[32][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[33]= new Array();
 choices[33][0] = "Al Gobierno de la naci&oacute;n";
 choices[33][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[33][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[33][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[33] = choices[33][3];
 units[33] = "7";
 comments[33] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[34]= new Array();
 choices[34][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[34][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[34][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[34][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[35]= "36)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[35]= new Array();
 choices[35][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[35][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[35][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[35][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[35] = choices[35][1];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[36]= "37)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[36]= new Array();
 choices[36][0] = "el Secretario General";
 choices[36][1] = "el Subdirector General";
 choices[36][2] = "el Secretario de Estado";
 choices[36][3] = "ninguna es correcta";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[37]= "38)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[37]= new Array();
 choices[37][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[37][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[37][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[37][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[38][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[38][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[38][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[38] = choices[38][1];
 units[38] = "7";
 comments[38] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[39]= new Array();
 choices[39][0] = "De oficio.";
 choices[39][1] = "A solicitud del interesado.";
 choices[39][2] = "De oficio o a solicitud del interesado.";
 choices[39][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[39] = choices[39][2];
 units[39] = "7";
 comments[39] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[40]= "41)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[40]= new Array();
 choices[40][0] = "Un d&iacute;a";
 choices[40][1] = "Dos d&iacute;as";
 choices[40][2] = "Tres d&iacute;as";
 choices[40][3] = "Cuatro d&iacute;as";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[41]= new Array();
 choices[41][0] = "Conferencia de Presidentes.";
 choices[41][1] = "Convenios de colaboraci&oacute;n.";
 choices[41][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[41][3] = "Conferencias Sectoriales.";
 answers[41] = choices[41][0];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[42]= "43)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[42]= new Array();
 choices[42][0] = "Cabr&aacute; recurso de alzada";
 choices[42][1] = "Cabr&aacute; el nuevo protesto";
 choices[42][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[42][3] = "No cabr&aacute; recurso alguno";
 answers[42] = choices[42][3];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[43]= new Array();
 choices[43][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[44]= "45)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[44]= new Array();
 choices[44][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[44][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[44][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[44][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[45]= "46)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[45]= new Array();
 choices[45][0] = "los Ministros y los Secretarios de Estado";
 choices[45][1] = "los Subsecretarios y Secretarios generales";
 choices[45][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[45][3] = "los Directores generales";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[46]= "47)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[46]= new Array();
 choices[46][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[46][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[46][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[46][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[47]= "48)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[47]= new Array();
 choices[47][0] = "la Administraci&oacute;n General del Estado";
 choices[47][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[47][2] = "las Entidades Locales";
 choices[47][3] = "todas son correctas";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[48]= "49)  Tienen la condici&oacute;n de alto cargo:";
 choices[48]= new Array();
 choices[48][0] = "los &oacute;rganos superiores";
 choices[48][1] = "los &oacute;rganos superiores y directivos";
 choices[48][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[48][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[48] = choices[48][2];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[49]= "50)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[49]= new Array();
 choices[49][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[49][1] = "garantizar la conservaci&oacute;n del documento";
 choices[49][2] = "garantizar la autenticidad del documento";
 choices[49][3] = "garantizar la integridad del documento";
 answers[49] = choices[49][0];
 units[49] = "7";
 comments[49] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[50]= new Array();
 choices[50][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[50][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[50][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[50][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[50] = choices[50][0];
 units[50] = "7";
 comments[50] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta correcta:";
 choices[51]= new Array();
 choices[51][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[51][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[51][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[51][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[52]= "53)  La recusaci&oacute;n pueden promoverla...";
 choices[52]= new Array();
 choices[52][0] = "Cualquier &oacute;rgano";
 choices[52][1] = "El interesado";
 choices[52][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[52][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[53]= "54)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[53]= new Array();
 choices[53][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[53][1] = "mediante resoluci&oacute;n judicial especial";
 choices[53][2] = "&uacute;nicamente mediante poder notarial";
 choices[53][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[53] = choices[53][3];
 units[53] = "7";
 comments[53] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[54]= new Array();
 choices[54][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[54][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[54][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[54][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[54] = choices[54][1];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[55]= "56)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[55]= new Array();
 choices[55][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[55][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[55][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[55][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[55] = choices[55][0];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[56]= "57)  La recusaci&oacute;n se plantea...";
 choices[56]= new Array();
 choices[56][0] = "Antes de iniciado el procedimiento";
 choices[56][1] = "Una vez iniciado el procedimiento";
 choices[56][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[56][3] = "En cualquier momento del procedimiento";
 answers[56] = choices[56][0];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta falsa:";
 choices[57]= new Array();
 choices[57][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[57][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[57][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[57][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[57] = choices[57][2];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[58]= "59)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[58]= new Array();
 choices[58][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[58][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[58][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[58][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[59]= "60)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[59]= new Array();
 choices[59][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[59][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[59][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[59][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[59] = choices[59][3];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[60]= "61)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[60]= new Array();
 choices[60][0] = "los &oacute;rganos administrativos";
 choices[60][1] = "las entidades dependientes";
 choices[60][2] = "las unidades administrativas";
 choices[60][3] = "los servicios comunes";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[61]= new Array();
 choices[61][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[61][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[61][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[61][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[62][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[62][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[62][3] = "todas son correctas";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[63]= "64)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "la Administraci&oacute;n General del Estado";
 choices[63][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[63][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[63][3] = "el sector p&uacute;blico y privado institucional";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[64]= new Array();
 choices[64][0] = "los Subsecretarios y Secretarios generales";
 choices[64][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[64][2] = "los Secretarios de Estado";
 choices[64][3] = "los Subdirectores generales";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[65]= "66)  La recusaci&oacute;n se plantear&aacute;...";
 choices[65]= new Array();
 choices[65][0] = "S&oacute;lo verbalmente";
 choices[65][1] = "S&oacute;lo por escrito";
 choices[65][2] = "Verbalmente o por escrito";
 choices[65][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[66]= "67)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[66]= new Array();
 choices[66][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[66][1] = "el C&oacute;digo Civil";
 choices[66][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[66][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[67]= "68)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[67]= new Array();
 choices[67][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[67][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[67][2] = "Los interesados en el procedimiento";
 choices[67][3] = "Las alternativas b) y c) son correctas";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[68]= new Array();
 choices[68][0] = "las personas jur&iacute;dicas ";
 choices[68][1] = "las entidades con personalidad jur&iacute;dica";
 choices[68][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[68][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[69]= "70)  El sector p&uacute;blico institucional se integra por:";
 choices[69]= new Array();
 choices[69][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[69][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[69][2] = "las Universidades p&uacute;blicas";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[70]= "71)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[70]= new Array();
 choices[70][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[70][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[70][2] = "a y b son correctas";
 choices[70][3] = "a y b son incorrectas";
 answers[70] = choices[70][2];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[71]= "72)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[71]= new Array();
 choices[71][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[71][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[71][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[71][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[71] = choices[71][1];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[72]= "73)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[72]= new Array();
 choices[72][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[72][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[72][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[72][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[72] = choices[72][2];
 units[72] = "7";
 comments[72] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[73]= new Array();
 choices[73][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[73][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[73][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "7";
 comments[73] = "Id Pregunta: 542. LEY 39/2015";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[74]= "75)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[74]= new Array();
 choices[74][0] = "Resoluci&oacute;n.";
 choices[74][1] = "Desistimiento o renuncia.";
 choices[74][2] = "Caducidad.";
 choices[74][3] = "Todas las anteriores.";
 answers[74] = choices[74][3];
 units[74] = "7";
 comments[74] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";


