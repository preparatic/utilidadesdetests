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

//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[0]= "1)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[0]= new Array();
 choices[0][0] = "Bases de datos orientadas a filas";
 choices[0][1] = "Bases de datos orientadas a documentos";
 choices[0][2] = "Bases de datos de clave/valor";
 choices[0][3] = "Bases de datos orientadas a objetos";
 answers[0] = choices[0][0];
 units[0] = "73";
 comments[0] = "Id Pregunta: 100. ";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[1]= "2)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[1]= new Array();
 choices[1][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[1][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[1][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[1][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[1] = choices[1][1];
 units[1] = "95";
 comments[1] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[2]= "3)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[2]= new Array();
 choices[2][0] = "Ejecutivo";
 choices[2][1] = "Limitativo";
 choices[2][2] = "Estimativo";
 choices[2][3] = "Progresivo";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[3]= "4)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[3]= new Array();
 choices[3][0] = "Integrar la estrategia TIC con la de negocio";
 choices[3][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[3][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[3][3] = "Todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "26";
 comments[3] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[4]= new Array();
 choices[4][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[4][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[4][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[4][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[4] = choices[4][2];
 units[4] = "121";
 comments[4] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[5]= new Array();
 choices[5][0] = "Dos Cap&iacute;tulos.";
 choices[5][1] = "Tres Cap&iacute;tulos.";
 choices[5][2] = "Un Cap&iacute;tulo.";
 choices[5][3] = "Cuatro Cap&iacute;tulos.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[6]= new Array();
 choices[6][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[6][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[6][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[6][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[6] = choices[6][1];
 units[6] = "19";
 comments[6] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[7]= new Array();
 choices[7][0] = "El Tratado de Lisboa";
 choices[7][1] = "El Tratado de Amsterdam";
 choices[7][2] = "El Tratado de Niza";
 choices[7][3] = "El Acta &Uacute;nica Europea";
 answers[7] = choices[7][1];
 units[7] = "15";
 comments[7] = "Id Pregunta: 115. ";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[8]= "9)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Paging";
 choices[8][1] = "Roaming";
 choices[8][2] = "Handover";
 choices[8][3] = "Trunking";
 answers[8] = choices[8][0];
 units[8] = "117";
 comments[8] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[9]= new Array();
 choices[9][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[9][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[9][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[9][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[9] = choices[9][1];
 units[9] = "84";
 comments[9] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[10]= "11)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[10]= new Array();
 choices[10][0] = "Prevenir las conductas discriminatorias.";
 choices[10][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[10][2] = "Todas son correctas.";
 choices[10][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[11]= new Array();
 choices[11][0] = "Estrasburgo.";
 choices[11][1] = "Bruselas.";
 choices[11][2] = "Luxemburgo.";
 choices[11][3] = "Par&iacute;s.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[12]= "13)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[12]= new Array();
 choices[12][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[12][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[12][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[12][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[12] = choices[12][3];
 units[12] = "22";
 comments[12] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[13]= "14)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[13]= new Array();
 choices[13][0] = "6 principios.";
 choices[13][1] = "7 principios.";
 choices[13][2] = "5 principios.";
 choices[13][3] = "6 directrices.";
 answers[13] = choices[13][1];
 units[13] = "28";
 comments[13] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[14]= "15)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[14]= new Array();
 choices[14][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[14][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[14][2] = "El Presidente del Gobierno";
 choices[14][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[14] = choices[14][1];
 units[14] = "26";
 comments[14] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[15]= new Array();
 choices[15][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[15][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[15][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[15][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[15] = choices[15][3];
 units[15] = "46";
 comments[15] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[16]= new Array();
 choices[16][0] = "Quince miembros.";
 choices[16][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[16][2] = "Los miembros que determine el Consejo.";
 choices[16][3] = "Un Presidente y quince miembros.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[17]= new Array();
 choices[17][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[17][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[17][2] = "Gestionar el Registro de Operadores.";
 choices[17][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[17] = choices[17][3];
 units[17] = "121";
 comments[17] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[18]= "19)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[18]= new Array();
 choices[18][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[18][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[18][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[18][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[18] = choices[18][1];
 units[18] = "35";
 comments[18] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[19]= new Array();
 choices[19][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[19][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[19][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[19][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[20]= "21)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[20]= new Array();
 choices[20][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[20][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[20][2] = "Ambas son correctas.";
 choices[20][3] = "A y B son incorrectas.";
 answers[20] = choices[20][2];
 units[20] = "14";
 comments[20] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[21]= "22)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[21]= new Array();
 choices[21][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[21][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[21][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[21][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[22]= new Array();
 choices[22][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[22][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[22][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[22][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[22] = choices[22][1];
 units[22] = "7";
 comments[22] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[23]= "24)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[23]= new Array();
 choices[23][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[23][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[23][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[23][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[24]= new Array();
 choices[24][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[24][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[24][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[24][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[24] = choices[24][1];
 units[24] = "77";
 comments[24] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[25]= new Array();
 choices[25][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[25][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[25][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[25][3] = "todas son correctas";
 answers[25] = choices[25][1];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[26]= "27)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[26]= new Array();
 choices[26][0] = "El Instituto de la Mujer.";
 choices[26][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[26][2] = "Ambas son correctas.";
 choices[26][3] = "A y B son incorrectas.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[27]= "28)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[27]= new Array();
 choices[27][0] = "Ley org&aacute;nica.";
 choices[27][1] = "Ley ordinaria.";
 choices[27][2] = "Ley de bases.";
 choices[27][3] = "Ley marco.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[28]= "29)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[28]= new Array();
 choices[28][0] = "El Presidente del Consejo Europeo.";
 choices[28][1] = "La Comisi&oacute;n.";
 choices[28][2] = "El Consejo.";
 choices[28][3] = "El Parlamento Europeo.";
 answers[28] = choices[28][2];
 units[28] = "5";
 comments[28] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[29]= new Array();
 choices[29][0] = "Es un framework de software libre.";
 choices[29][1] = "Es una base de datos NoSQL.";
 choices[29][2] = "Est&aacute; basado en MapReduce.";
 choices[29][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[29] = choices[29][1];
 units[29] = "73";
 comments[29] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[30]= "31)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[30]= new Array();
 choices[30][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[30][1] = "los Subdelegados del Gobierno en las provincias";
 choices[30][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[30][3] = "a y b son correctas";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[31]= "32)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "la Administraci&oacute;n General del Estado";
 choices[31][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[31][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[31][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 757. Ley 40/2015";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[32]= "33)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[32]= new Array();
 choices[32][0] = "Sean dirigidas por mujeres";
 choices[32][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[32][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[32][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ala la correcta:";
 choices[33]= new Array();
 choices[33][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[33][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[33][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[33][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[33] = choices[33][1];
 units[33] = "7";
 comments[33] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[34]= "35)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[34]= new Array();
 choices[34][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[34][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[34][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[34][3] = "Todas son correctas.";
 answers[34] = choices[34][3];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[35]= new Array();
 choices[35][0] = "DoS";
 choices[35][1] = "Phishing";
 choices[35][2] = "Sniffing";
 choices[35][3] = "Spoofing";
 answers[35] = choices[35][3];
 units[35] = "119";
 comments[35] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[36]= new Array();
 choices[36][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[36][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[36][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[36][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[36] = choices[36][3];
 units[36] = "34, 84";
 comments[36] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[37]= new Array();
 choices[37][0] = "El 2 de Octubre de 2015";
 choices[37][1] = "El 15 de Septiembre de 2015";
 choices[37][2] = "El 1 de Octubre de 2015";
 choices[37][3] = "El 5 de Octubre de 2015";
 answers[37] = choices[37][0];
 units[37] = "19";
 comments[37] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[38]= new Array();
 choices[38][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[38][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[38][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[38][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[38] = choices[38][2];
 units[38] = "47";
 comments[38] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[39]= new Array();
 choices[39][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[39][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[39][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[39][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[39] = choices[39][2];
 units[39] = "77";
 comments[39] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[40]= "41)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[40]= new Array();
 choices[40][0] = "Sello electr&oacute;nico";
 choices[40][1] = "Sede electr&oacute;nica";
 choices[40][2] = "Servidor seguro (SSL/TLS)";
 choices[40][3] = "Empleado p&uacute;blico";
 answers[40] = choices[40][2];
 units[40] = "7";
 comments[40] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[41]= new Array();
 choices[41][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[41][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[41][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[41][3] = "El pago de subsidios a parados";
 answers[41] = choices[41][3];
 units[41] = "15";
 comments[41] = "Id Pregunta: 116. ";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[42]= "43)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[42][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[42][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[42][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[43]= "44)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[43]= new Array();
 choices[43][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[43][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[43][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[43][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[44]= "45)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[44]= new Array();
 choices[44][0] = "Los cr&eacute;ditos";
 choices[44][1] = "Las partidas presupuestarias";
 choices[44][2] = "Los derechos";
 choices[44][3] = "Las obligaciones";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[45]= "46)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[45][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[45][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[45][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[45] = choices[45][2];
 units[45] = "83";
 comments[45] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[46]= "47)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Discriminaci&oacute;n indirecta.";
 choices[46][1] = "Discriminaci&oacute;n directa.";
 choices[46][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[46][3] = "Discriminaci&oacute;n abusiva.";
 answers[46] = choices[46][0];
 units[46] = "14";
 comments[46] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[47]= new Array();
 choices[47][0] = "El Consejo Nacional de la Mujer.";
 choices[47][1] = "El Consejo de la Mujer.";
 choices[47][2] = "El Instituto de la Mujer.";
 choices[47][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[47] = choices[47][3];
 units[47] = "14";
 comments[47] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[48]= "49)  La soberan&iacute;a nacional reside en:";
 choices[48]= new Array();
 choices[48][0] = "el Parlamento nacional.";
 choices[48][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[48][2] = "el pueblo espa&ntilde;ol.";
 choices[48][3] = "el Congreso y el Senado.";
 answers[48] = choices[48][3];
 units[48] = "1";
 comments[48] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[49]= "50)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[49]= new Array();
 choices[49][0] = "El derecho a la propiedad privada.";
 choices[49][1] = "El derecho de asociaci&oacute;n.";
 choices[49][2] = "El derecho de fundaci&oacute;n.";
 choices[49][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[49] = choices[49][1];
 units[49] = "1";
 comments[49] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[50]= new Array();
 choices[50][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[50][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[50][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[50][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[50] = choices[50][0];
 units[50] = "43";
 comments[50] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[51]= "52)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[51]= new Array();
 choices[51][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[51][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[51][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[51][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[51] = choices[51][1];
 units[51] = "56";
 comments[51] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[52]= "53)  Los Reglamentos no se caracterizan por:";
 choices[52]= new Array();
 choices[52][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[52][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[52][2] = "Ser obligatorios.";
 choices[52][3] = "No poseer alcance general.";
 answers[52] = choices[52][3];
 units[52] = "5";
 comments[52] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[53]= new Array();
 choices[53][0] = "Art. 13, L.O.3/2007.";
 choices[53][1] = "Art. 14, L.O.3/2007.";
 choices[53][2] = "Art. 11, L.O.3/2007.";
 choices[53][3] = "Ninguna es correcta.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[54]= new Array();
 choices[54][0] = "De los derechos y deberes fundamentales.";
 choices[54][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[54][2] = "Derechos y libertades.";
 choices[54][3] = "De la Corona.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[55]= "56)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[55]= new Array();
 choices[55][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[55][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[55][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[55][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[55] = choices[55][0];
 units[55] = "65";
 comments[55] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[56]= "57)  JNDI se usa para el acceso a:";
 choices[56]= new Array();
 choices[56][0] = "Datos de ficheros";
 choices[56][1] = "Sistemas gestores de bases de datos";
 choices[56][2] = "Directorios de nombres";
 choices[56][3] = "Colas de mensajer&iacute;a";
 answers[56] = choices[56][2];
 units[56] = "64";
 comments[56] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[57]= "58)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[57]= new Array();
 choices[57][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[57][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[57][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[57][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[58]= new Array();
 choices[58][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[58][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[58][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[58][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[58] = choices[58][1];
 units[58] = "1";
 comments[58] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "Siempre en formato electr&oacute;nico.";
 choices[59][1] = "Siempre en formato papel.";
 choices[59][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[59][3] = "La ley no regula el formato del expediente.";
 answers[59] = choices[59][0];
 units[59] = "7";
 comments[59] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[60]= "61)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[60]= new Array();
 choices[60][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[60][1] = "El Congreso de los Diputados.";
 choices[60][2] = "Las Cortes Generales.";
 choices[60][3] = "El Consejo de Ministros";
 answers[60] = choices[60][3];
 units[60] = "1";
 comments[60] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[61]= new Array();
 choices[61][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[61][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[61][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[61][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[61] = choices[61][1];
 units[61] = "78";
 comments[61] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[62]= "63)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[62][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[62][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[62][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[62] = choices[62][3];
 units[62] = "22";
 comments[62] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[63]= new Array();
 choices[63][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[63][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[63][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[63][3] = "Todas lo son";
 answers[63] = choices[63][0];
 units[63] = "17";
 comments[63] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[64]= "65)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[64]= new Array();
 choices[64][0] = "De los interesados en el procedimiento";
 choices[64][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[64][2] = "Disposiciones generales";
 choices[64][3] = "De los actos administrativos";
 answers[64] = choices[64][2];
 units[64] = "7";
 comments[64] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[65]= "66)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[65]= new Array();
 choices[65][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[65][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[65][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[65][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[66]= "67)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[66]= new Array();
 choices[66][0] = "El Tratado de Maastrich.";
 choices[66][1] = "El Tratado de Amsterdam.";
 choices[66][2] = "El Tratado de Par&iacute;s.";
 choices[66][3] = "El Tratado de Roma.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[67]= new Array();
 choices[67][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[67][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[67][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[67][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[67] = choices[67][0];
 units[67] = "73";
 comments[67] = "Id Pregunta: 654. ";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[68]= "69)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[68]= new Array();
 choices[68][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[68][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[68][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[68][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[69]= "70)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[69]= new Array();
 choices[69][0] = "los registros mercantiles";
 choices[69][1] = "los registros de la propiedad";
 choices[69][2] = "los protocolos notariales";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[70]= "71)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[70]= new Array();
 choices[70][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[70][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[70][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[70][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[71]= "72)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[71]= new Array();
 choices[71][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[71][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[71][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[71][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[71] = choices[71][1];
 units[71] = "14";
 comments[71] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[72]= new Array();
 choices[72][0] = "Compatibilidad";
 choices[72][1] = "Interoperabilidad";
 choices[72][2] = "Reutilizaci&oacute;n";
 choices[72][3] = "Accesibilidad";
 answers[72] = choices[72][0];
 units[72] = "22";
 comments[72] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[73]= "74)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[73]= new Array();
 choices[73][0] = "Interchange of Data between Administrations (IDA)";
 choices[73][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[73][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[73][3] = "Interoperability Electronic European Solution (IEES)";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[74]= "75)  En cuanto al an&aacute;lisis DAFO:";
 choices[74]= new Array();
 choices[74][0] = "Considera detallada y exclusivamente factores internos.";
 choices[74][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[74][2] = "Considera detallada y exclusivamente factores externos.";
 choices[74][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[74] = choices[74][1];
 units[74] = "83";
 comments[74] = "Id Pregunta: 41. AGE A1 2015";


