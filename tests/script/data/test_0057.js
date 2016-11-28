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

//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[0]= "1)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[0]= new Array();
 choices[0][0] = "El derecho a un permiso.";
 choices[0][1] = "Una prestaci&oacute;n por paternidad.";
 choices[0][2] = "Ambas son correctas.";
 choices[0][3] = "18 d&iacute;as de permiso.";
 answers[0] = choices[0][2];
 units[0] = "14";
 comments[0] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[1]= new Array();
 choices[1][0] = "Un representante de la Administraci&oacute;n local.";
 choices[1][1] = "Un representante del Tribunal de Cuentas.";
 choices[1][2] = "Un representante del Defensor del Pueblo.";
 choices[1][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[1] = choices[1][0];
 units[1] = "22";
 comments[1] = "Id Pregunta: 123. ";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[2]= "3)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[2]= new Array();
 choices[2][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[2][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[2][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[2][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 128. ";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[3]= "4)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[3]= new Array();
 choices[3][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[3][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[3][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[3][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[3] = choices[3][1];
 units[3] = "14";
 comments[3] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[4]= "5)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "El Ministerio de Igualdad.";
 choices[4][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[4][2] = "Ambas son correctas.";
 choices[4][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[5]= "6)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[5]= new Array();
 choices[5][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[5][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[5][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[5][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es Java Web Start?";
 choices[6]= new Array();
 choices[6][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[6][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[6][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[6][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[6] = choices[6][3];
 units[6] = "64";
 comments[6] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[7]= new Array();
 choices[7][0] = "las personas jur&iacute;dicas ";
 choices[7][1] = "las entidades con personalidad jur&iacute;dica";
 choices[7][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[7][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[7] = choices[7][1];
 units[7] = "7";
 comments[7] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[8]= new Array();
 choices[8][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[8][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[8][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[8][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[8] = choices[8][1];
 units[8] = "28";
 comments[8] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[9]= "10)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[9]= new Array();
 choices[9][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[9][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[9][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[9][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[9] = choices[9][1];
 units[9] = "95";
 comments[9] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[10]= "11)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[10]= new Array();
 choices[10][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[10][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[10][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[10][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[10] = choices[10][3];
 units[10] = "1";
 comments[10] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[11]= new Array();
 choices[11][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[11][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[11][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[11][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[11] = choices[11][0];
 units[11] = "26";
 comments[11] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[12]= "13)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[12]= new Array();
 choices[12][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[12][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[12][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[12][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[12] = choices[12][0];
 units[12] = "35";
 comments[12] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[13]= "14)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[13]= new Array();
 choices[13][0] = "Un a&ntilde;o prorrogable";
 choices[13][1] = "Dos a&ntilde;os no prorrogables";
 choices[13][2] = "Un a&ntilde;o no prorrogable";
 choices[13][3] = "Dos a&ntilde;os prorrogables";
 answers[13] = choices[13][2];
 units[13] = "37";
 comments[13] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[14]= "15)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[14]= new Array();
 choices[14][0] = "Un Reglamento.";
 choices[14][1] = "Un Decreto.";
 choices[14][2] = "Una Ley.";
 choices[14][3] = "Un Real-Decreto.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[15]= "16)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[15]= new Array();
 choices[15][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[15][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[15][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[15][3] = "Todos las anteriores son ciertas.";
 answers[15] = choices[15][3];
 units[15] = "12";
 comments[15] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[16]= new Array();
 choices[16][0] = "Anual";
 choices[16][1] = "Mensual";
 choices[16][2] = "Semestral";
 choices[16][3] = "Trimestral";
 answers[16] = choices[16][3];
 units[16] = "15";
 comments[16] = "Id Pregunta: 119. ";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[17]= "18)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[17]= new Array();
 choices[17][0] = "Tres a&ntilde;os.";
 choices[17][1] = "Dos a&ntilde;os y medio.";
 choices[17][2] = "Cinco a&ntilde;os.";
 choices[17][3] = "Seis a&ntilde;os.";
 answers[17] = choices[17][2];
 units[17] = "5";
 comments[17] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[18]= "19)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[18]= new Array();
 choices[18][0] = "Est&aacute; desarrollado en Java.";
 choices[18][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[18][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[18][3] = "Todas las afirmaciones son correctas.";
 answers[18] = choices[18][2];
 units[18] = "92";
 comments[18] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[19]= "20)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[19]= new Array();
 choices[19][0] = "Al Presidente del Gobierno.";
 choices[19][1] = "A las Cortes Generales";
 choices[19][2] = "A los electores.";
 choices[19][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[19] = choices[19][3];
 units[19] = "1";
 comments[19] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[20]= "21)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[20][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[20][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[20][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[20] = choices[20][1];
 units[20] = "7";
 comments[20] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[21]= "22)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[21]= new Array();
 choices[21][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[21][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[21][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[21][3] = "Todas son correctas.";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[22]= "23)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[22]= new Array();
 choices[22][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[22][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[22][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[22][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[22] = choices[22][3];
 units[22] = "28";
 comments[22] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[23]= new Array();
 choices[23][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[23][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[23][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[23][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[23] = choices[23][3];
 units[23] = "22";
 comments[23] = "Id Pregunta: 126. ";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[24]= new Array();
 choices[24][0] = "El 2 de Octubre de 2015";
 choices[24][1] = "El 15 de Septiembre de 2015";
 choices[24][2] = "El 1 de Octubre de 2015";
 choices[24][3] = "El 5 de Octubre de 2015";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[25]= "26)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[25]= new Array();
 choices[25][0] = "por Real Decreto";
 choices[25][1] = "reglamentariamente";
 choices[25][2] = "mediante Ley";
 choices[25][3] = "ninguna es correcta";
 answers[25] = choices[25][1];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[26]= new Array();
 choices[26][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[26][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[26][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[26][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[27]= new Array();
 choices[27][0] = "personalidad jur&iacute;dica propia";
 choices[27][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[27][2] = "personalidad jur&iacute;dica plena";
 choices[27][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[27] = choices[27][1];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 774. Ley 40/2015";


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


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[29]= new Array();
 choices[29][0] = "Publicidad.";
 choices[29][1] = "Constituci&oacute;n.";
 choices[29][2] = "Legalidad.";
 choices[29][3] = "Creaci&oacute;n.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[30]= "31)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[30]= new Array();
 choices[30][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[30][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[30][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[30][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[31]= new Array();
 choices[31][0] = "Al Consejo Europeo.";
 choices[31][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[31][2] = "A la Comisi&oacute;n Europea.";
 choices[31][3] = "Al Parlamento Europeo.";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[32]= "33)  La recusaci&oacute;n pueden promoverla...";
 choices[32]= new Array();
 choices[32][0] = "Cualquier &oacute;rgano";
 choices[32][1] = "El interesado";
 choices[32][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[32][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[33]= new Array();
 choices[33][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[33][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[33][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[33][3] = "El Senado se compone de 350 senadores.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[34]= "35)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[34][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[34][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[34][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[34] = choices[34][2];
 units[34] = "47";
 comments[34] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[35]= "36)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[35]= new Array();
 choices[35][0] = "A nivel de art&iacute;culo.";
 choices[35][1] = "A nivel de cap&iacute;tulo.";
 choices[35][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[35][3] = "A nivel de concepto.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[36]= "37)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Anualmente.";
 choices[36][1] = "Ninguna de las respuestas es correcta.";
 choices[36][2] = "Trimestralmente.";
 choices[36][3] = "Semestralmente.";
 answers[36] = choices[36][0];
 units[36] = "10";
 comments[36] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[37]= "38)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[37]= new Array();
 choices[37][0] = "Municipios, provincias y CCAA.";
 choices[37][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[37][2] = "En CCAA, 50 provincias y municipios.";
 choices[37][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[38]= "39)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[38]= new Array();
 choices[38][0] = "Conformidad";
 choices[38][1] = "Responsabilidad";
 choices[38][2] = "Adquisici&oacute;n";
 choices[38][3] = "Desempe&ntilde;o";
 answers[38] = choices[38][0];
 units[38] = "26";
 comments[38] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[39]= "40)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[39]= new Array();
 choices[39][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[39][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[39][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[39][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[40]= "41)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[40]= new Array();
 choices[40][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[40][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[40][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[40][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[41]= new Array();
 choices[41][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[41][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[41][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[41][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[42]= "43)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[42]= new Array();
 choices[42][0] = "los Secretarios de Estado";
 choices[42][1] = "los Ministros";
 choices[42][2] = "los Subsecretarios";
 choices[42][3] = "los Secretarios generales";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[43]= "44)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[43]= new Array();
 choices[43][0] = "los Ministros y los Secretarios de Estado";
 choices[43][1] = "los Subsecretarios y Secretarios generales";
 choices[43][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[43][3] = "los Directores generales";
 answers[43] = choices[43][2];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[44]= new Array();
 choices[44][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[44][1] = "Entrada en la Uni&oacute;n Europea";
 choices[44][2] = "Pactos de la Moncloa";
 choices[44][3] = "Ingreso en la ONU";
 answers[44] = choices[44][3];
 units[44] = "12";
 comments[44] = "Id Pregunta: 573. Modelo econ&oacute;mico";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[45]= "46)  Los criptosistemas pueden clasificarse en:";
 choices[45]= new Array();
 choices[45][0] = "Concretos, Estables e Inestables.";
 choices[45][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[45][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[45][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[45] = choices[45][3];
 units[45] = "76";
 comments[45] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[46]= "47)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[46]= new Array();
 choices[46][0] = "el Secretario General";
 choices[46][1] = "el Subdirector General";
 choices[46][2] = "el Secretario de Estado";
 choices[46][3] = "ninguna es correcta";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[47]= "48)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[47]= new Array();
 choices[47][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[47][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[47][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[47][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[47] = choices[47][2];
 units[47] = "50";
 comments[47] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[48]= new Array();
 choices[48][0] = "Ley Org&aacute;nica.";
 choices[48][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[48][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[48][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[49]= new Array();
 choices[49][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[49][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[49][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[49][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[49] = choices[49][2];
 units[49] = "7";
 comments[49] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[50]= new Array();
 choices[50][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[50][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[50][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[50][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[51]= "52)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[51]= new Array();
 choices[51][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[51][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[51][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[51][3] = "Todas las respuestas son correctas.";
 answers[51] = choices[51][3];
 units[51] = "50";
 comments[51] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[52]= "53)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[52]= new Array();
 choices[52][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[52][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[52][2] = "Son incompatibles ambas actas de diputado.";
 choices[52][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[53]= "54)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[53]= new Array();
 choices[53][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[53][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[53][2] = "Un programa de igualdad.";
 choices[53][3] = "Un estatuto de igualdad.";
 answers[53] = choices[53][0];
 units[53] = "14";
 comments[53] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[54]= new Array();
 choices[54][0] = "Dos Cap&iacute;tulos.";
 choices[54][1] = "Tres Cap&iacute;tulos.";
 choices[54][2] = "Un Cap&iacute;tulo.";
 choices[54][3] = "Cuatro Cap&iacute;tulos.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[55]= "56)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[55]= new Array();
 choices[55][0] = "Gran volumen de informaci&oacute;n";
 choices[55][1] = "Gran variedad de datos";
 choices[55][2] = "Se analizan datos a gran velocidad";
 choices[55][3] = "Todas las anteriores son verdaderas";
 answers[55] = choices[55][3];
 units[55] = "73";
 comments[55] = "Id Pregunta: 105. ";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[56]= new Array();
 choices[56][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[56][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[56][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[56][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[56] = choices[56][0];
 units[56] = "19";
 comments[56] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[57]= "58)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[57]= new Array();
 choices[57][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[57][1] = "Protecci&oacute;n de su salud.";
 choices[57][2] = "Ninguna es correcta.";
 choices[57][3] = "A y B son correctas.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[58]= "59)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[58]= new Array();
 choices[58][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[58] = choices[58][0];
 units[58] = "10";
 comments[58] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[59]= new Array();
 choices[59][0] = "Eric Ries";
 choices[59][1] = "Steve Blank";
 choices[59][2] = "Tom Poppendieck";
 choices[59][3] = "Alexander Osterwalder";
 answers[59] = choices[59][2];
 units[59] = "34";
 comments[59] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[60]= "61)  Los Secretarios generales t&eacute;cnicos:";
 choices[60]= new Array();
 choices[60][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[60][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[60][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[60][3] = "todas son correctas";
 answers[60] = choices[60][3];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[61]= "62)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[61]= new Array();
 choices[61][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[61][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[61][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[61][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[62]= "63)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[62]= new Array();
 choices[62][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[62][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[62][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[62][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[62] = choices[62][3];
 units[62] = "41";
 comments[62] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[63]= "64)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[63][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[63][2] = "el sector p&uacute;blico institucional";
 choices[63][3] = "el sector privado corporativo";
 answers[63] = choices[63][3];
 units[63] = "7";
 comments[63] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[64]= "65)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[64]= new Array();
 choices[64][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[64][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[64][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[64][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[64] = choices[64][1];
 units[64] = "1";
 comments[64] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[65]= new Array();
 choices[65][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[65][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[65][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[65][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[65] = choices[65][2];
 units[65] = "85";
 comments[65] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[66]= "67)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[66]= new Array();
 choices[66][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[66][1] = "Clasificaci&oacute;n por cuenta.";
 choices[66][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[66][3] = "Clasificaci&oacute;n por intercambio.";
 answers[66] = choices[66][3];
 units[66] = "56";
 comments[66] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[67]= "68)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[67]= new Array();
 choices[67][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[67][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[67][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[67][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[68]= new Array();
 choices[68][0] = "El Consejo Nacional de la Mujer.";
 choices[68][1] = "El Consejo de la Mujer.";
 choices[68][2] = "El Instituto de la Mujer.";
 choices[68][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[68] = choices[68][3];
 units[68] = "14";
 comments[68] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[69]= new Array();
 choices[69][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[69][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[69][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[69][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[70]= new Array();
 choices[70][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[70][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[70][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[70][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[70] = choices[70][1];
 units[70] = "1";
 comments[70] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[71]= new Array();
 choices[71][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[71][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[71][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[71][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[71] = choices[71][0];
 units[71] = "19";
 comments[71] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[72]= new Array();
 choices[72][0] = "Art&iacute;culo 70.";
 choices[72][1] = "Art&iacute;culo 54.";
 choices[72][2] = "Articulo 62.";
 choices[72][3] = "Articulo 55. 5.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[73]= new Array();
 choices[73][0] = "Bienalmente";
 choices[73][1] = "Anualmente";
 choices[73][2] = "Semestralmente";
 choices[73][3] = "Cada cuatro a&ntilde;os";
 answers[73] = choices[73][1];
 units[73] = "19";
 comments[73] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[74]= "75)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[74]= new Array();
 choices[74][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[74][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[74][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[74][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[74] = choices[74][2];
 units[74] = "8";
 comments[74] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


