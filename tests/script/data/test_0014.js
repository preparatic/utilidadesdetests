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

//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[0]= "1)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[0]= new Array();
 choices[0][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[0][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[0][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[0][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[1]= "2)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Discriminaci&oacute;n indirecta.";
 choices[1][1] = "Discriminaci&oacute;n directa.";
 choices[1][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[1][3] = "Discriminaci&oacute;n abusiva.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[2]= new Array();
 choices[2][0] = "Conferencia de Presidentes.";
 choices[2][1] = "Convenios de colaboraci&oacute;n.";
 choices[2][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[2][3] = "Conferencias Sectoriales.";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[3]= "4)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[3]= new Array();
 choices[3][0] = "El Parlamento Europeo.";
 choices[3][1] = "Todas las respuestas son correctas.";
 choices[3][2] = "La Comisi&oacute;n Europea.";
 choices[3][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[3] = choices[3][1];
 units[3] = "5";
 comments[3] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[4]= new Array();
 choices[4][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[4][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[4][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[4][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[5]= "6)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[5]= new Array();
 choices[5][0] = "Reducir el gasto p&uacute;blico.";
 choices[5][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[5][2] = "Reducir el endeudamiento neto.";
 choices[5][3] = "Al Fondo de Contingencia.";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[6]= "7)  La recusaci&oacute;n se plantea...";
 choices[6]= new Array();
 choices[6][0] = "Antes de iniciado el procedimiento";
 choices[6][1] = "Una vez iniciado el procedimiento";
 choices[6][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[6][3] = "En cualquier momento del procedimiento";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[7]= "8)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[7]= new Array();
 choices[7][0] = "l Consejo General del Poder Judicial";
 choices[7][1] = "El pleno de Tribunal Constitucional";
 choices[7][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[7][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[7] = choices[7][3];
 units[7] = "1";
 comments[7] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[8]= "9)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[8]= new Array();
 choices[8][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[8][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[8][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[8][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[8] = choices[8][3];
 units[8] = "43";
 comments[8] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[9]= new Array();
 choices[9][0] = "El Presidente del Senado";
 choices[9][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[9][2] = "El Presidente del Gobierno";
 choices[9][3] = "El Presidente de las Cortes Generales";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[10]= "11)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[10]= new Array();
 choices[10][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[10][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[10][2] = "El Presidente del Gobierno";
 choices[10][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[10] = choices[10][1];
 units[10] = "26";
 comments[10] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[11]= "12)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[11]= new Array();
 choices[11][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[11][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[11][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[11][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[11] = choices[11][3];
 units[11] = "1";
 comments[11] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[12]= "13)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[12]= new Array();
 choices[12][0] = "Ejecutivo";
 choices[12][1] = "Limitativo";
 choices[12][2] = "Estimativo";
 choices[12][3] = "Progresivo";
 answers[12] = choices[12][1];
 units[12] = "10";
 comments[12] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; es el machine learning?";
 choices[13]= new Array();
 choices[13][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[13][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[13][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[13][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[13] = choices[13][0];
 units[13] = "73";
 comments[13] = "Id Pregunta: 657. ";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[14]= new Array();
 choices[14][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[14][1] = "Calidad de los servicios p&uacute;blicos";
 choices[14][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[14][3] = "Servicio efectivo a los ciudadanos";
 answers[14] = choices[14][1];
 units[14] = "18, 20";
 comments[14] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[15]= "16)  La Poblaci&oacute;n Activa incluye a:";
 choices[15]= new Array();
 choices[15][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[15][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[15][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[15][3] = "Todo aquel que desea trabajar";
 answers[15] = choices[15][2];
 units[15] = "15";
 comments[15] = "Id Pregunta: 110. ";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[16]= new Array();
 choices[16][0] = "verbalmente";
 choices[16][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[16][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[16][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[16] = choices[16][2];
 units[16] = "7";
 comments[16] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[17]= "18)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[17]= new Array();
 choices[17][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[17][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[17][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[17][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[17] = choices[17][0];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[18]= "19)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[18]= new Array();
 choices[18][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[18][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[18][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[18][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[19]= "20)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[19]= new Array();
 choices[19][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[19][1] = "la Organizaci&oacute;n Territorial";
 choices[19][2] = "la Organizaci&oacute;n sectorial";
 choices[19][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[19] = choices[19][2];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[20]= "21)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[20]= new Array();
 choices[20][0] = "Diez art&iacute;culos.";
 choices[20][1] = "Nueve art&iacute;culos.";
 choices[20][2] = "Once art&iacute;culos.";
 choices[20][3] = "Ocho art&iacute;culos.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[21]= "22)  Son bases de datos NoSQL:";
 choices[21]= new Array();
 choices[21][0] = "MongoDB y Maria DB";
 choices[21][1] = "HBase y Dynamo";
 choices[21][2] = "MariaDB, Cassandra y BigTable";
 choices[21][3] = "La A) y la C)";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 104. ";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[22]= "23)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[22]= new Array();
 choices[22][0] = "Son vinculantes solamente.";
 choices[22][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[22][2] = "Son preceptivos y vinculantes.";
 choices[22][3] = "Son preceptivos y no vinculantes.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[23]= new Array();
 choices[23][0] = "Anualmente por el Consejo de Ministros";
 choices[23][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[23][2] = "Al final de cada legislatura por el Gobierno";
 choices[23][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[24]= "25)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[24]= new Array();
 choices[24][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[24][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[24][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[24][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[24] = choices[24][3];
 units[24] = "41";
 comments[24] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[25]= "26)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[25]= new Array();
 choices[25][0] = "Un d&iacute;a";
 choices[25][1] = "Dos d&iacute;as";
 choices[25][2] = "Tres d&iacute;as";
 choices[25][3] = "Cuatro d&iacute;as";
 answers[25] = choices[25][3];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[26]= new Array();
 choices[26][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[26][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[26][2] = "A) y B) son verdaderas";
 choices[26][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[26] = choices[26][2];
 units[26] = "73";
 comments[26] = "Id Pregunta: 106. ";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[27]= "28)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[27]= new Array();
 choices[27][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[27][1] = "Static &amp; Active process for REsolution Bank.";
 choices[27][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[27][3] = "Super Active REsponse for Banks";
 answers[27] = choices[27][0];
 units[27] = "12";
 comments[27] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "VMware ESX";
 choices[28][1] = "XenServer";
 choices[28][2] = "Alfresco";
 choices[28][3] = "Microsoft Hyper-V";
 answers[28] = choices[28][2];
 units[28] = "54";
 comments[28] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[29]= new Array();
 choices[29][0] = "Por Real Decreto.";
 choices[29][1] = "Por Orden del Ministerio del Interior.";
 choices[29][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[29][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[30]= "31)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[30]= new Array();
 choices[30][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[30][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[30][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[30][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[31]= new Array();
 choices[31][0] = "Maximizar el valor para los clientes";
 choices[31][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[31][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[31][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[31] = choices[31][3];
 units[31] = "34";
 comments[31] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[32]= "33)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[32]= new Array();
 choices[32][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[32][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[32][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[32][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[33]= "34)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[33]= new Array();
 choices[33][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[33][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[33][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[33][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[34]= "35)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[34]= new Array();
 choices[34][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[34][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[34][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[34][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[34] = choices[34][3];
 units[34] = "7";
 comments[34] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Lollipop";
 choices[35][1] = "Jelly Bean";
 choices[35][2] = "Marshmallow";
 choices[35][3] = "KitKat";
 answers[35] = choices[35][2];
 units[35] = "59";
 comments[35] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[36]= new Array();
 choices[36][0] = "Diagrama de clases";
 choices[36][1] = "Diagrama de componentes";
 choices[36][2] = "Diagrama de estructura";
 choices[36][3] = "Diagrama de paquetes";
 answers[36] = choices[36][0];
 units[36] = "91";
 comments[36] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[37]= "38)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[37]= new Array();
 choices[37][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[37][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[37][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[37][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[37] = choices[37][0];
 units[37] = "92";
 comments[37] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[38]= new Array();
 choices[38][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[38][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[38][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[38][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[38] = choices[38][0];
 units[38] = "14";
 comments[38] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[39]= "40)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[39]= new Array();
 choices[39][0] = "3 a&ntilde;os.";
 choices[39][1] = "5 a&ntilde;os.";
 choices[39][2] = "4 a&ntilde;os.";
 choices[39][3] = "6 a&ntilde;os.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[40]= "41)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[40]= new Array();
 choices[40][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[40][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[40][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[40][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[40] = choices[40][1];
 units[40] = "92";
 comments[40] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[41]= "42)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[41]= new Array();
 choices[41][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[41][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[41][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[41][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[42]= new Array();
 choices[42][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[42][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[42][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[42][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[42] = choices[42][3];
 units[42] = "120";
 comments[42] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[43]= new Array();
 choices[43][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[43][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[43][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[43][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[43] = choices[43][2];
 units[43] = "77";
 comments[43] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[44]= "45)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[44]= new Array();
 choices[44][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[44][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[44][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[44][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[45]= "46)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[45]= new Array();
 choices[45][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[45][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[45][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[45][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[45] = choices[45][0];
 units[45] = "34, 84";
 comments[45] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[46]= "47)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[46][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[46][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[46][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[47]= "48)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[47]= new Array();
 choices[47][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[47][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[47][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[47][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[47] = choices[47][1];
 units[47] = "73";
 comments[47] = "Id Pregunta: 101. ";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[48]= new Array();
 choices[48][0] = "El Presidente del Senado.";
 choices[48][1] = "El Defensor del Pueblo.";
 choices[48][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[48][3] = "El Presidente del Gobierno.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[49]= "50)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[49]= new Array();
 choices[49][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[49][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[49][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[49][3] = "Todas son correctas.";
 answers[49] = choices[49][3];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[50]= "51)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[50]= new Array();
 choices[50][0] = "Fat y Ntfs.";
 choices[50][1] = "Extfat y Fat.";
 choices[50][2] = "Fat y Nfst.";
 choices[50][3] = "ext2fs y Ntfs.";
 answers[50] = choices[50][0];
 units[50] = "58";
 comments[50] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[51]= "52)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[51]= new Array();
 choices[51][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[51][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[51][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[51][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[51] = choices[51][2];
 units[51] = "26";
 comments[51] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[52]= new Array();
 choices[52][0] = "IEEE 802.11p";
 choices[52][1] = "IEEE 802.11r";
 choices[52][2] = "IEEE 802.11v";
 choices[52][3] = "IEEE 802.11w";
 answers[52] = choices[52][1];
 units[52] = "112";
 comments[52] = "Id Pregunta: 572. Tema 112. TAI 2016.";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[53]= new Array();
 choices[53][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[53][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[53][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[53][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[54]= "55)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[54]= new Array();
 choices[54][0] = "Estrasburgo.";
 choices[54][1] = "Bruselas.";
 choices[54][2] = "Luxemburgo.";
 choices[54][3] = "Holanda.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[55]= "56)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[55]= new Array();
 choices[55][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[55][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[55][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[55][3] = "Todas las respuestas son correctas.";
 answers[55] = choices[55][3];
 units[55] = "5";
 comments[55] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[56]= "57)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[56]= new Array();
 choices[56][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[56][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[56][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[56][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[56] = choices[56][0];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[57]= "58)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[57]= new Array();
 choices[57][0] = "Rey.";
 choices[57][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[57][2] = "Constituci&oacute;n.";
 choices[57][3] = "Pueblo.";
 answers[57] = choices[57][2];
 units[57] = "1";
 comments[57] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[58]= "59)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[58]= new Array();
 choices[58][0] = "Tres a&ntilde;os.";
 choices[58][1] = "Dos a&ntilde;os y medio.";
 choices[58][2] = "Cinco a&ntilde;os.";
 choices[58][3] = "Seis a&ntilde;os.";
 answers[58] = choices[58][3];
 units[58] = "5";
 comments[58] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[59]= new Array();
 choices[59][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[59][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[59][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[59][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[59] = choices[59][1];
 units[59] = "18, 20";
 comments[59] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[60]= "61)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[60]= new Array();
 choices[60][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[60][1] = "En el extranjero.";
 choices[60][2] = "Ninguna es correcta.";
 choices[60][3] = "Ambas son correctas.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[61]= "62)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[61]= new Array();
 choices[61][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[61][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[61][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[61][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[61] = choices[61][3];
 units[61] = "28";
 comments[61] = "Id Pregunta: 733. Estrategia TIC";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[62]= "63)  El Tribunal de Justicia se cre&oacute; en:";
 choices[62]= new Array();
 choices[62][0] = "El Tratado de la CECA.";
 choices[62][1] = "El Tratado de Niza.";
 choices[62][2] = "El Tratado de &Aacute;msterdam.";
 choices[62][3] = "El Tratado de Lisboa.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[63]= "64)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[63]= new Array();
 choices[63][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[63][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[63][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[63][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[63] = choices[63][0];
 units[63] = "12";
 comments[63] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[64]= "65)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[64]= new Array();
 choices[64][0] = "Dise&ntilde;o del servicio.";
 choices[64][1] = "Transici&oacute;n del servicio.";
 choices[64][2] = "Estrategia del servicio.";
 choices[64][3] = "Operaci&oacute;n del servicio.";
 answers[64] = choices[64][2];
 units[64] = "101";
 comments[64] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "La Seguridad Social";
 choices[65][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[65][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[65][3] = "El Banco de Espa&ntilde;a";
 answers[65] = choices[65][3];
 units[65] = "15";
 comments[65] = "Id Pregunta: 113. ";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[66]= new Array();
 choices[66][0] = "Art&iacute;culo 16.2.";
 choices[66][1] = "Art&iacute;culo 17.1.";
 choices[66][2] = "Art&iacute;culo 18.1.";
 choices[66][3] = "Art&iacute;culo 18.2.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[67]= "68)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[67]= new Array();
 choices[67][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[67][1] = "Ninguna de las respuestas es correcta.";
 choices[67][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[67][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[68]= "69)  JNDI se usa para el acceso a:";
 choices[68]= new Array();
 choices[68][0] = "Datos de ficheros";
 choices[68][1] = "Sistemas gestores de bases de datos";
 choices[68][2] = "Directorios de nombres";
 choices[68][3] = "Colas de mensajer&iacute;a";
 answers[68] = choices[68][2];
 units[68] = "64";
 comments[68] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[69]= new Array();
 choices[69][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[69][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[69][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[69][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[69] = choices[69][0];
 units[69] = "22";
 comments[69] = "Id Pregunta: 124. ";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[70]= new Array();
 choices[70][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[70][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[70][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[70][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[70] = choices[70][3];
 units[70] = "5";
 comments[70] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[71]= new Array();
 choices[71][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[71][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[71][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[71][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[72]= new Array();
 choices[72][0] = "Car&aacute;cter sustitutivo";
 choices[72][1] = "Car&aacute;cter obligatorio";
 choices[72][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][3];
 units[72] = "19";
 comments[72] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[73]= "74)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[73]= new Array();
 choices[73][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[73][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[73][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[73][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[73] = choices[73][0];
 units[73] = "43";
 comments[73] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[74]= "75)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[74]= new Array();
 choices[74][0] = "CO.PER.";
 choices[74][1] = "COMPER.";
 choices[74][2] = "CO.RE.PER.";
 choices[74][3] = "CO.PE.RRE.";
 answers[74] = choices[74][2];
 units[74] = "5";
 comments[74] = "Id Pregunta: 338. UNION EUROPEA";


