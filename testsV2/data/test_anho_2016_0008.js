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
var preguntaids = new Array();

//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[0]= "1)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[0][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[0][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[0][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[0] = choices[0][0];
 units[0] = "45";
 comments[0] = "Id Pregunta: 599. Junta de Extremadura A1 2015";
 preguntaids[0] = 599


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[1]= "2)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[1]= new Array();
 choices[1][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[1][1] = "el C&oacute;digo Civil";
 choices[1][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[1][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[1] = 776


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[2]= "3)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[2]= new Array();
 choices[2][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[2][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[2][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[2][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[2] = 838


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[3]= "4)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[3]= new Array();
 choices[3][0] = "El Presidente y su gabinete.";
 choices[3][1] = "El Presidente y sus Ministros.";
 choices[3][2] = "El Rey y el Presidente.";
 choices[3][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 257. CONSTITUCION1978";
 preguntaids[3] = 257


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[4]= "5)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[4]= new Array();
 choices[4][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[4][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[4][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[4][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[4] = 240


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[5]= new Array();
 choices[5][0] = "Compatibilidad";
 choices[5][1] = "Interoperabilidad";
 choices[5][2] = "Reutilizaci&oacute;n";
 choices[5][3] = "Accesibilidad";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 705. Ley de transparencia";
 preguntaids[5] = 705


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[6]= "7)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[6]= new Array();
 choices[6][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[6][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[6][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[6][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[6] = choices[6][1];
 units[6] = "7";
 comments[6] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[6] = 517


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[7]= "8)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[7]= new Array();
 choices[7][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[7][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[7][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[7][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[7] = choices[7][1];
 units[7] = "106";
 comments[7] = "Id Pregunta: 575. Tema 106. TAI 2016.";
 preguntaids[7] = 575


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[8]= "9)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[8][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[8][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[8][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[8] = choices[8][3];
 units[8] = "22";
 comments[8] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[8] = 712


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[9]= new Array();
 choices[9][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[9][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[9][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[9][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 297. UNION EUROPEA";
 preguntaids[9] = 297


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[10]= "11)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "el Gobierno de la Naci&oacute;n";
 choices[10][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[10][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[10][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[10] = choices[10][3];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[10] = 773


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[11]= "12)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[11]= new Array();
 choices[11][0] = "Un d&iacute;a";
 choices[11][1] = "Dos d&iacute;as";
 choices[11][2] = "Tres d&iacute;as";
 choices[11][3] = "Cuatro d&iacute;as";
 answers[11] = choices[11][3];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[11] = 831


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[12]= "13)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[12]= new Array();
 choices[12][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[12][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[12][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[12][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[12] = choices[12][1];
 units[12] = "26";
 comments[12] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[12] = 22


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[13]= new Array();
 choices[13][0] = "Anualmente";
 choices[13][1] = "Bienalmente";
 choices[13][2] = "Cada cuatro a&ntilde;os";
 choices[13][3] = "No se define ninguna periodicidad";
 answers[13] = choices[13][1];
 units[13] = "19";
 comments[13] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";
 preguntaids[13] = 594


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[14]= "15)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[14]= new Array();
 choices[14][0] = "Intersecci&oacute;n.";
 choices[14][1] = "Uni&oacute;n.";
 choices[14][2] = "Restricci&oacute;n.";
 choices[14][3] = "Diferencia.";
 answers[14] = choices[14][0];
 units[14] = "60";
 comments[14] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[14] = 614


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[15]= new Array();
 choices[15][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[15][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[15][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[15][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[15] = choices[15][2];
 units[15] = "22";
 comments[15] = "Id Pregunta: 129. ";
 preguntaids[15] = 129


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Administraciones P&uacute;blicas:";
 choices[16]= new Array();
 choices[16][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[16][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[16][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[16][3] = "todas son correctas";
 answers[16] = choices[16][1];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[16] = 772


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[17]= new Array();
 choices[17][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[17][1] = "Pasivos financieros y transferencias de capital.";
 choices[17][2] = "Activos financieros y pasivos financieros.";
 choices[17][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[17] = 461


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[18]= new Array();
 choices[18][0] = "No se aplican directamente en los Estados.";
 choices[18][1] = "No son vinculantes.";
 choices[18][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[18][3] = "Tienen alcance general.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[18] = 356


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[19]= "20)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[19]= new Array();
 choices[19][0] = "los Ministros y los Secretarios de Estado";
 choices[19][1] = "los Subsecretarios y Secretarios generales";
 choices[19][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[19][3] = "los Directores generales";
 answers[19] = choices[19][2];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[19] = 793


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[20]= "21)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[20]= new Array();
 choices[20][0] = "Estrasburgo.";
 choices[20][1] = "Bruselas.";
 choices[20][2] = "Luxemburgo.";
 choices[20][3] = "Holanda.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[20] = 293


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[21]= new Array();
 choices[21][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[21][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[21][2] = "c) Todas las respuestas son correctas.";
 choices[21][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[21] = 358


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[22]= new Array();
 choices[22][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[22][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[22][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[22][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[22] = 757


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[23]= new Array();
 choices[23][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[23][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[23][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[23][3] = "La tasa de desempleo ronda el 20%";
 answers[23] = choices[23][2];
 units[23] = "12";
 comments[23] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[23] = 572


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[24]= new Array();
 choices[24][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[24][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[24][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[24][3] = "El pago de subsidios a parados";
 answers[24] = choices[24][3];
 units[24] = "15";
 comments[24] = "Id Pregunta: 116. ";
 preguntaids[24] = 116


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[25]= new Array();
 choices[25][0] = "Art&iacute;culo 70.";
 choices[25][1] = "Art&iacute;culo 54.";
 choices[25][2] = "Articulo 62.";
 choices[25][3] = "Articulo 55. 5.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 243. CONSTITUCION1978";
 preguntaids[25] = 243


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[26][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[26][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[26][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[26] = choices[26][2];
 units[26] = "22";
 comments[26] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[26] = 706


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[27]= "28)  Los Subdirectores generales:";
 choices[27]= new Array();
 choices[27][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[27][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[27][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][1];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[27] = 811


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[28]= "29)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[28]= new Array();
 choices[28][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[28][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[28][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[28][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[28] = 784


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[29]= new Array();
 choices[29][0] = "El Consejo Europeo.";
 choices[29][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[29][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[29][3] = "El Parlamento Europeo.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[29] = 313


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[30]= new Array();
 choices[30][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[30][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[30][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[30][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[30] = choices[30][1];
 units[30] = "60";
 comments[30] = "Id Pregunta: 44. AGE A1 2015";
 preguntaids[30] = 44


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
 preguntaids[31] = 429


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[32]= new Array();
 choices[32][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[32][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[32][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[32][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 180. CONSTITUCION1978";
 preguntaids[32] = 180


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[33]= "34)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Discriminaci&oacute;n indirecta.";
 choices[33][1] = "Discriminaci&oacute;n directa.";
 choices[33][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[33][3] = "Discriminaci&oacute;n abusiva.";
 answers[33] = choices[33][0];
 units[33] = "14";
 comments[33] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";
 preguntaids[33] = 394


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[34]= "35)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[34]= new Array();
 choices[34][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[34][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[34][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[34][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[34] = 800


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[35]= new Array();
 choices[35][0] = "Ley 3/2015";
 choices[35][1] = "Ley 6/2007";
 choices[35][2] = "Ley 5/1984";
 choices[35][3] = "Ley 5/2006";
 answers[35] = choices[35][0];
 units[35] = "22";
 comments[35] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[35] = 711


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[36]= "37)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[36]= new Array();
 choices[36][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[36][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[36][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[36][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[36] = 184


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[37]= new Array();
 choices[37][0] = "La CETIC";
 choices[37][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[37][2] = "La DTIC";
 choices[37][3] = "Ninguno de los anteriores";
 answers[37] = choices[37][1];
 units[37] = "19";
 comments[37] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[37] = 587


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[38]= new Array();
 choices[38][0] = "absoluta de las Cortes Generales.";
 choices[38][1] = "absoluta del Congreso de los Diputados.";
 choices[38][2] = "simple de las Cortes Generales.";
 choices[38][3] = "simple del Congreso de los Diputados.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 173. CONSTITUCION1978";
 preguntaids[38] = 173


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[39]= "40)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[39]= new Array();
 choices[39][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[39][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[39][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[39][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[39] = choices[39][2];
 units[39] = "108";
 comments[39] = "Id Pregunta: 602. Junta de Extremadura A1 2015";
 preguntaids[39] = 602


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[40]= "41)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[40]= new Array();
 choices[40][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[40][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[40][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[40][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[40] = 803


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[41]= "42)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Un informe de impacto de g&eacute;nero.";
 choices[41][1] = "Un programa de igualdad de oportunidades.";
 choices[41][2] = "Un plan de Igualdad de Oportunidades.";
 choices[41][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[41] = choices[41][0];
 units[41] = "14";
 comments[41] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[41] = 414


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[42]= new Array();
 choices[42][0] = "Una ley orginaria.";
 choices[42][1] = "Una ley org&aacute;nica.";
 choices[42][2] = "Una ley de bases.";
 choices[42][3] = "Una ley de transferencia.";
 answers[42] = choices[42][1];
 units[42] = "1";
 comments[42] = "Id Pregunta: 179. CONSTITUCION1978";
 preguntaids[42] = 179


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[43]= new Array();
 choices[43][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[43][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[43][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[43][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[43] = choices[43][0];
 units[43] = "7";
 comments[43] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";
 preguntaids[43] = 157


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[44]= new Array();
 choices[44][0] = "De los derechos y deberes fundamentales.";
 choices[44][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[44][2] = "Derechos y libertades.";
 choices[44][3] = "De la Corona.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[44] = 221


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[45]= new Array();
 choices[45][0] = "Avro";
 choices[45][1] = "Sqoop";
 choices[45][2] = "UIMA";
 choices[45][3] = "Jaql";
 answers[45] = choices[45][1];
 units[45] = "73";
 comments[45] = "Id Pregunta: 662. ";
 preguntaids[45] = 662


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[46]= new Array();
 choices[46][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[46][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[46][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[46][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[46] = 311


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[47]= "48)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[47]= new Array();
 choices[47][0] = "Cifrado de las comunicaciones";
 choices[47][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[47][2] = "Registro de los accesos";
 choices[47][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[47] = choices[47][1];
 units[47] = "35";
 comments[47] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";
 preguntaids[47] = 51


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[48]= "49)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[48]= new Array();
 choices[48][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[48][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[48][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[48][3] = "Todas las respuestas son correctas.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[48] = 375


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[49]= new Array();
 choices[49][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[49][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[49][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[49][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[49] = choices[49][0];
 units[49] = "26";
 comments[49] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[49] = 0


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[50]= "51)  Son bases de datos NoSQL:";
 choices[50]= new Array();
 choices[50][0] = "MongoDB y Maria DB";
 choices[50][1] = "HBase y Dynamo";
 choices[50][2] = "MariaDB, Cassandra y BigTable";
 choices[50][3] = "La A) y la C)";
 answers[50] = choices[50][1];
 units[50] = "73";
 comments[50] = "Id Pregunta: 104. ";
 preguntaids[50] = 104


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[51]= "52)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[51]= new Array();
 choices[51][0] = "Tres a&ntilde;os.";
 choices[51][1] = "Dos a&ntilde;os y medio.";
 choices[51][2] = "Cinco a&ntilde;os.";
 choices[51][3] = "Seis a&ntilde;os.";
 answers[51] = choices[51][2];
 units[51] = "5";
 comments[51] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[51] = 289


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[52]= "53)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[52]= new Array();
 choices[52][0] = "El Presidente del Congreso de los Diputados.";
 choices[52][1] = "El Presidente del Gobierno.";
 choices[52][2] = "El Rey.";
 choices[52][3] = "El Consejo de Ministros.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[52] = 231


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[53]= "54)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[53]= new Array();
 choices[53][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[53][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[53][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[53][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[53] = choices[53][3];
 units[53] = "89";
 comments[53] = "Id Pregunta: 95. AGE A1 2015";
 preguntaids[53] = 95


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[54]= new Array();
 choices[54][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[54][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[54][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[54][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";
 preguntaids[54] = 499


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[55]= "56)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[55]= new Array();
 choices[55][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[55][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[55][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[55][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[55] = choices[55][0];
 units[55] = "1";
 comments[55] = "Id Pregunta: 187. CONSTITUCION1978";
 preguntaids[55] = 187


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[56]= new Array();
 choices[56][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[56][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[56][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[56][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[56] = 220


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[57]= new Array();
 choices[57][0] = "Nivel 7 - MPLS.";
 choices[57][1] = "Nivel 3 - RARP.";
 choices[57][2] = "Nivel 2 - HDLC.";
 choices[57][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[57] = choices[57][2];
 units[57] = "105";
 comments[57] = "Id Pregunta: 7. AGE A1 2015";
 preguntaids[57] = 7


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[58][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[58][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[58][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[58] = choices[58][1];
 units[58] = "1";
 comments[58] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[58] = 205


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[59]= new Array();
 choices[59][0] = "Indirecta.";
 choices[59][1] = "Directa.";
 choices[59][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[59][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";
 preguntaids[59] = 392


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[60]= "61)  Respecto a los servicios territoriales es correcto:";
 choices[60]= new Array();
 choices[60][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[60][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[60][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[60][3] = "ninguna es correcta";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[60] = 820


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[61]= "62)  La sede del Parlamento Europeo se encuentra en:";
 choices[61]= new Array();
 choices[61][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[61][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[61][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[61][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[61] = choices[61][1];
 units[61] = "5";
 comments[61] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[61] = 351


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[62]= new Array();
 choices[62][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[62][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[62][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[62][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[62] = choices[62][2];
 units[62] = "121";
 comments[62] = "Id Pregunta: 29. AGE A1 2015";
 preguntaids[62] = 29


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; es Java Web Start?";
 choices[63]= new Array();
 choices[63][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[63][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[63][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[63][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[63] = choices[63][3];
 units[63] = "64";
 comments[63] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[63] = 35


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[64]= "65)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[64]= new Array();
 choices[64][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[64][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[64][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[64][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";
 preguntaids[64] = 501


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[65]= "66)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[65]= new Array();
 choices[65][0] = "Ley org&aacute;nica.";
 choices[65][1] = "Ley ordinaria.";
 choices[65][2] = "Ley de bases.";
 choices[65][3] = "Ley marco.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[65] = 271


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[66]= new Array();
 choices[66][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[66][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[66][2] = "El que hubieren designado las Cortes Generales.";
 choices[66][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 182. CONSTITUCION1978";
 preguntaids[66] = 182


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[67]= "68)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[67]= new Array();
 choices[67][0] = "El nombre y el tipo de correspondencia.";
 choices[67][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[67][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[67][3] = "El nombre y el grado.";
 answers[67] = choices[67][1];
 units[67] = "85";
 comments[67] = "Id Pregunta: 636. Junta de Extremadura A1 2015";
 preguntaids[67] = 636


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[68]= "69)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[68]= new Array();
 choices[68][0] = "Relaciones base y vistas.";
 choices[68][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[68][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[68][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[68] = choices[68][3];
 units[68] = "60";
 comments[68] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[68] = 637


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[69]= "70)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[69]= new Array();
 choices[69][0] = "Alrededor de un 26% del PIB";
 choices[69][1] = "Alrededor de un 11% del PIB";
 choices[69][2] = "Alrededor de un 34% del PIB";
 choices[69][3] = "Alrededor de un 7% del PIB";
 answers[69] = choices[69][1];
 units[69] = "12";
 comments[69] = "Id Pregunta: 570. Modelo econ&oacute;mico";
 preguntaids[69] = 570


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[70]= new Array();
 choices[70][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[70][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[70][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[70][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";
 preguntaids[70] = 163


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[71]= "72)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[71]= new Array();
 choices[71][0] = "apud acta";
 choices[71][1] = "presencialmente";
 choices[71][2] = "electr&oacute;nicamente";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[71] = 538


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[72]= "73)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[72]= new Array();
 choices[72][0] = "Subsecretario";
 choices[72][1] = "Subdirector general";
 choices[72][2] = "Secretario de Estado";
 choices[72][3] = "ninguna es correcta";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[72] = 791


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[73]= "74)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[73]= new Array();
 choices[73][0] = "El Segundo.";
 choices[73][1] = "El Primero.";
 choices[73][2] = "El Preliminar.";
 choices[73][3] = "El Tercero.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[73] = 266


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[74]= "75)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[74]= new Array();
 choices[74][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[74][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[74][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[74][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";
 preguntaids[74] = 396


