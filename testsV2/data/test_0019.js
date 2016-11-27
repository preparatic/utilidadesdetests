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

//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[0]= "1)  Son servicios declarados compartidos:";
 choices[0]= new Array();
 choices[0][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[0][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[0][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[0][3] = "Todos los anteriores";
 answers[0] = choices[0][3];
 units[0] = "19";
 comments[0] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[1]= new Array();
 choices[1][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[1][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[1][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[1][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[1] = choices[1][1];
 units[1] = "19";
 comments[1] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[2]= "3)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[2]= new Array();
 choices[2][0] = "la Administraci&oacute;n General del Estado";
 choices[2][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[2][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[2][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[3]= "4)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[3][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[3][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[3][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[4]= "5)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[4]= new Array();
 choices[4][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[4][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[4][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[4][3] = "Todas son correctas.";
 answers[4] = choices[4][3];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[5]= new Array();
 choices[5][0] = "ISO/IEC 31000";
 choices[5][1] = "ISO/IEC 14000";
 choices[5][2] = "ISO/IEC 38500";
 choices[5][3] = "ISO/IEC 18000";
 answers[5] = choices[5][2];
 units[5] = "26";
 comments[5] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[6]= "7)  El lenguaje SPARK es un subconjunto de:";
 choices[6]= new Array();
 choices[6][0] = "Java";
 choices[6][1] = "Fortran";
 choices[6][2] = "Ruby";
 choices[6][3] = "Ada";
 answers[6] = choices[6][3];
 units[6] = "73";
 comments[6] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[7]= "8)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[7]= new Array();
 choices[7][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[7][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[7][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[7][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[7] = choices[7][1];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[8]= new Array();
 choices[8][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[8][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[8][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[8][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[8] = choices[8][0];
 units[8] = "19";
 comments[8] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[9]= new Array();
 choices[9][0] = "Maximizar el valor para los clientes";
 choices[9][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[9][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[9][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[9] = choices[9][3];
 units[9] = "34";
 comments[9] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[10]= "11)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[10][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[10][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[10][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[10] = choices[10][3];
 units[10] = "43";
 comments[10] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[11]= new Array();
 choices[11][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[11][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[11][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[11][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[11] = choices[11][1];
 units[11] = "76";
 comments[11] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[12]= "13)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[12]= new Array();
 choices[12][0] = "Los Derechos y Deberes fundamentales.";
 choices[12][1] = "La Corona.";
 choices[12][2] = "El Poder Judicial.";
 choices[12][3] = "Las Cortes Generales.";
 answers[12] = choices[12][2];
 units[12] = "1";
 comments[12] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[13]= "14)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[13]= new Array();
 choices[13][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[13][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[13][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[13][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[13] = choices[13][3];
 units[13] = "77";
 comments[13] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[14]= "15)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[14]= new Array();
 choices[14][0] = "Proveer de manera compartida servicios comunes";
 choices[14][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[14][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[14][3] = "Transparencia";
 answers[14] = choices[14][1];
 units[14] = "28";
 comments[14] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[15]= new Array();
 choices[15][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[15][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[15][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[15][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[16]= new Array();
 choices[16][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[16][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[16][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[16][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[17]= new Array();
 choices[17][0] = "Publicidad.";
 choices[17][1] = "Constituci&oacute;n.";
 choices[17][2] = "Legalidad.";
 choices[17][3] = "Creaci&oacute;n.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[18]= new Array();
 choices[18][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[18][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[18][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[18][3] = "Todos los anteriores";
 answers[18] = choices[18][3];
 units[18] = "19";
 comments[18] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[19]= new Array();
 choices[19][0] = "Orientaci&oacute;n a objetos";
 choices[19][1] = "MapReduce";
 choices[19][2] = "Pipeline filtering";
 choices[19][3] = "Programaci&oacute;n funcional";
 answers[19] = choices[19][1];
 units[19] = "73";
 comments[19] = "Id Pregunta: 659. ";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[20]= "21)  LA estructura de la Estrategia TIC:";
 choices[20]= new Array();
 choices[20][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[20][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[20][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[20][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[20] = choices[20][2];
 units[20] = "28";
 comments[20] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[21][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[21][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[21][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[22]= "23)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[22]= new Array();
 choices[22][0] = "formular solicitudes";
 choices[22][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[22][2] = "presentar declaraciones responsables o comunicaciones";
 choices[22][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[22] = choices[22][1];
 units[22] = "7";
 comments[22] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[23]= new Array();
 choices[23][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[23][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[23][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[23][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[24]= "25)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[24]= new Array();
 choices[24][0] = "El Parlamento Europeo.";
 choices[24][1] = "Todas las respuestas son correctas.";
 choices[24][2] = "La Comisi&oacute;n Europea.";
 choices[24][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[25]= new Array();
 choices[25][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[25][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[25][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[25][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[26]= new Array();
 choices[26][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[26][1] = "La Direcci&oacute;n de la Competencia.";
 choices[26][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[26][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[26] = choices[26][0];
 units[26] = "121";
 comments[26] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[27]= "28)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[27]= new Array();
 choices[27][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[27][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[27][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[27][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 801. Ley 40/2015";


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


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[29]= "30)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Infrastructure as a Service (IaaS)";
 choices[29][1] = "Platform as a Service (PaaS)";
 choices[29][2] = "Software as a Service (SaaS)";
 choices[29][3] = "Application as a Service (AaaS)";
 answers[29] = choices[29][1];
 units[29] = "52";
 comments[29] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[30]= new Array();
 choices[30][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[30][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[30][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[30][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[30] = choices[30][2];
 units[30] = "77";
 comments[30] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[31]= new Array();
 choices[31][0] = "23";
 choices[31][1] = "20";
 choices[31][2] = "14";
 choices[31][3] = "18";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 343. UNION EUROPEA";


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


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[33]= "34)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[33][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[33][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[33][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[33] = choices[33][3];
 units[33] = "14";
 comments[33] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[34]= new Array();
 choices[34][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[34][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[34][2] = "Iniciativa europea de libre flujo de datos.";
 choices[34][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[35]= new Array();
 choices[35][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[35][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[35][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[35][3] = "Sancionar y publicar las leyes.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[36]= new Array();
 choices[36][0] = "Anual.";
 choices[36][1] = "Semestral.";
 choices[36][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[36][3] = "Bienal.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[37]= new Array();
 choices[37][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[37][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[37][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[37][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[37] = choices[37][3];
 units[37] = "66";
 comments[37] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[38]= "39)  Es falso que:";
 choices[38]= new Array();
 choices[38][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[38][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[38][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[38][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[38] = choices[38][1];
 units[38] = "18, 20";
 comments[38] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[39]= "40)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[39]= new Array();
 choices[39][0] = "De ocho a&ntilde;os.";
 choices[39][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[39][2] = "Ambas son correctas.";
 choices[39][3] = "No existe un l&iacute;mite.";
 answers[39] = choices[39][0];
 units[39] = "14";
 comments[39] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[40]= "41)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[40]= new Array();
 choices[40][0] = "786 Diputados como m&aacute;ximo.";
 choices[40][1] = "600 Diputados como m&aacute;ximo.";
 choices[40][2] = "650 Diputados como m&aacute;ximo.";
 choices[40][3] = "732 Diputados como m&aacute;ximo.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[41]= new Array();
 choices[41][0] = "Las respuestas a) y b) son correctas.";
 choices[41][1] = "Las respuestas a) y b) no son correctas.";
 choices[41][2] = "Contenido coherente con los planes sectoriales.";
 choices[41][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[42]= "43)  El Presupuesto por programas sirve para saber...";
 choices[42]= new Array();
 choices[42][0] = "En qu&eacute; nos gastamos el dinero";
 choices[42][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[42][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[42][3] = "Qui&eacute;n se gasta el dinero";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[43]= "44)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[43]= new Array();
 choices[43][0] = "El Instituto de la Mujer.";
 choices[43][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[43][2] = "Ambas son correctas.";
 choices[43][3] = "A y B son incorrectas.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[44]= "45)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[44]= new Array();
 choices[44][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[44][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[44][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[44][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[45]= "46)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[45]= new Array();
 choices[45][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[45][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[45][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[45][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[45] = choices[45][3];
 units[45] = "7";
 comments[45] = "Id Pregunta: 668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[46]= new Array();
 choices[46][0] = "Cassandra";
 choices[46][1] = "Riak";
 choices[46][2] = "Avro";
 choices[46][3] = "Zookeeper";
 answers[46] = choices[46][3];
 units[46] = "73";
 comments[46] = "Id Pregunta: 656. ";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[47]= new Array();
 choices[47][0] = "Agenda digital para Europa";
 choices[47][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[47][2] = "Juventud en movimiento";
 choices[47][3] = "Agenda Web 2.0";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[48]= "49)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[48]= new Array();
 choices[48][0] = "la Administraci&oacute;n General del Estado";
 choices[48][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[48][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[48][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[49]= "50)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[49]= new Array();
 choices[49][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[49][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[49][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[49][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[49] = choices[49][2];
 units[49] = "22";
 comments[49] = "Id Pregunta: 128. ";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[50]= "51)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[50]= new Array();
 choices[50][0] = "Relaciones base y vistas.";
 choices[50][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[50][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[50][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[50] = choices[50][3];
 units[50] = "60";
 comments[50] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[51]= new Array();
 choices[51][0] = "CVS";
 choices[51][1] = "SVN";
 choices[51][2] = "Team Foundation Server";
 choices[51][3] = "Apache Tomcat";
 answers[51] = choices[51][3];
 units[51] = "92";
 comments[51] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[52]= new Array();
 choices[52][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[52][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[52][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[52][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[52] = choices[52][2];
 units[52] = "22";
 comments[52] = "Id Pregunta: 121. ";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[53]= "54)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[53]= new Array();
 choices[53][0] = "El acoso sexual.";
 choices[53][1] = "El acoso por raz&oacute;n del sexo.";
 choices[53][2] = "Ambas son correctas.";
 choices[53][3] = "A y B son incorrectas.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[54]= "55)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[54]= new Array();
 choices[54][0] = "Principio de transparencia.";
 choices[54][1] = "Principio de cooperaci&oacute;n.";
 choices[54][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[54][3] = "Principio de lealtad institucional.";
 answers[54] = choices[54][1];
 units[54] = "10";
 comments[54] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[55]= "56)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[55]= new Array();
 choices[55][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[55][1] = "El Congreso de los Diputados.";
 choices[55][2] = "Las Cortes Generales.";
 choices[55][3] = "El Consejo de Ministros";
 answers[55] = choices[55][3];
 units[55] = "1";
 comments[55] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[56]= "57)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[56]= new Array();
 choices[56][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[56][1] = "Ninguna de las respuestas es correcta.";
 choices[56][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[56][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[57]= new Array();
 choices[57][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[57][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[57][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[57][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "45";
 comments[57] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[58][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[58][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[58][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[59]= new Array();
 choices[59][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[59][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[59][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[59][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[59] = choices[59][1];
 units[59] = "18, 20";
 comments[59] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[60]= new Array();
 choices[60][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[60][1] = "La delimitaci&oacute;n de su territorio.";
 choices[60][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[60][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[61]= "62)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[61]= new Array();
 choices[61][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[61][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[61][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[61][3] = "Todos las anteriores son ciertas.";
 answers[61] = choices[61][3];
 units[61] = "12";
 comments[61] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[62]= new Array();
 choices[62][0] = "La CETIC";
 choices[62][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[62][2] = "La DTIC";
 choices[62][3] = "Ninguno de los anteriores";
 answers[62] = choices[62][1];
 units[62] = "19";
 comments[62] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[63]= "64)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[63]= new Array();
 choices[63][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[63][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[63][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[63][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[63] = choices[63][0];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[64]= "65)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[64]= new Array();
 choices[64][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[64][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[64][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[64][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[64] = choices[64][2];
 units[64] = "108";
 comments[64] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[65]= "66)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[65]= new Array();
 choices[65][0] = "un &oacute;rgano superior";
 choices[65][1] = "un &oacute;rgano directivo";
 choices[65][2] = "un &oacute;rgano superior o directivo";
 choices[65][3] = "ninguna es correcta";
 answers[65] = choices[65][2];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[66]= new Array();
 choices[66][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[66][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[66][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[66][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[66] = choices[66][1];
 units[66] = "7";
 comments[66] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[67]= "68)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[67]= new Array();
 choices[67][0] = "61";
 choices[67][1] = "53";
 choices[67][2] = "65";
 choices[67][3] = "67";
 answers[67] = choices[67][1];
 units[67] = "1";
 comments[67] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[68]= "69)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[68]= new Array();
 choices[68][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[68][1] = "Personas con nacionalidad europea.";
 choices[68][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[68][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[68] = choices[68][3];
 units[68] = "5";
 comments[68] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[69]= "70)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[69]= new Array();
 choices[69][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[69][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[69][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[69][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[70]= "71)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[70]= new Array();
 choices[70][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[70][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[70][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[70][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[71]= new Array();
 choices[71][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[71][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[71][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[71][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[71] = choices[71][3];
 units[71] = "12";
 comments[71] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a los servicios territoriales es correcto:";
 choices[72]= new Array();
 choices[72][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[72][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[72][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[72][3] = "ninguna es correcta";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[73]= new Array();
 choices[73][0] = "A los ministros.";
 choices[73][1] = "Las respuestas a) y b) son correctas.";
 choices[73][2] = "Las respuestas a) y b) no son correctas.";
 choices[73][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[73] = choices[73][1];
 units[73] = "10";
 comments[73] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[74]= "75)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[74]= new Array();
 choices[74][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[74][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[74][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[74][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[74] = choices[74][0];
 units[74] = "12";
 comments[74] = "Id Pregunta: 566. Modelo econ&oacute;mico";


