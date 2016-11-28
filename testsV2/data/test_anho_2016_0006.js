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

//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique la afirmaci&oacute;n falsa:";
 choices[0]= new Array();
 choices[0][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[0][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[0][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[0][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[0] = choices[0][1];
 units[0] = "22";
 comments[0] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[1]= new Array();
 choices[1][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[1][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[1][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[1][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[1] = choices[1][1];
 units[1] = "77";
 comments[1] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta correcta:";
 choices[2]= new Array();
 choices[2][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[2][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[2][2] = "Las respuestas A y B son correctas.";
 choices[2][3] = "Las respuestas A y B son falsas.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[3]= "4)  La recusaci&oacute;n se plantear&aacute;...";
 choices[3]= new Array();
 choices[3][0] = "S&oacute;lo verbalmente";
 choices[3][1] = "S&oacute;lo por escrito";
 choices[3][2] = "Verbalmente o por escrito";
 choices[3][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[3] = choices[3][0];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[4]= "5)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[4]= new Array();
 choices[4][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[4][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[4][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[4][3] = "Estos sistemas es imposible clasificarlos.";
 answers[4] = choices[4][1];
 units[4] = "119";
 comments[4] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[5]= "6)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[5]= new Array();
 choices[5][0] = "Ejecutivo";
 choices[5][1] = "Limitativo";
 choices[5][2] = "Estimativo";
 choices[5][3] = "Progresivo";
 answers[5] = choices[5][1];
 units[5] = "10";
 comments[5] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[6]= new Array();
 choices[6][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[6][1] = "el C&oacute;digo Civil";
 choices[6][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[6][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[7]= "8)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[7]= new Array();
 choices[7][0] = "Los propios miembros del Tribunal.";
 choices[7][1] = "El Consejo de Europa.";
 choices[7][2] = "El Consejo Europeo.";
 choices[7][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[8]= new Array();
 choices[8][0] = "al menos por 50 Diputados.";
 choices[8][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[8][2] = "por la Mesa del Congreso de los Diputados.";
 choices[8][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[9]= "10)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[9]= new Array();
 choices[9][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[9][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[9][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[9][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[9] = choices[9][2];
 units[9] = "26";
 comments[9] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[10]= new Array();
 choices[10][0] = "Estrasburgo.";
 choices[10][1] = "Bruselas.";
 choices[10][2] = "Luxemburgo.";
 choices[10][3] = "Par&iacute;s.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[11]= "12)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[11]= new Array();
 choices[11][0] = "El presidente de las Cortes Generales.";
 choices[11][1] = "El Presidente del Gobierno.";
 choices[11][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[11][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[12]= "13)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[12]= new Array();
 choices[12][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[12][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[12][2] = "Los interesados en el procedimiento";
 choices[12][3] = "Las alternativas b) y c) son correctas";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[13]= "14)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[13]= new Array();
 choices[13][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[13][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[13][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[13][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[13] = choices[13][3];
 units[13] = "28";
 comments[13] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[14]= new Array();
 choices[14][0] = "Backup full.";
 choices[14][1] = "Backup diferencial.";
 choices[14][2] = "Backup incremental.";
 choices[14][3] = "Backup deduplicado.";
 answers[14] = choices[14][3];
 units[14] = "53";
 comments[14] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[15]= "16)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[15]= new Array();
 choices[15][0] = "Dise&ntilde;o del servicio.";
 choices[15][1] = "Transici&oacute;n del servicio.";
 choices[15][2] = "Estrategia del servicio.";
 choices[15][3] = "Operaci&oacute;n del servicio.";
 answers[15] = choices[15][2];
 units[15] = "101";
 comments[15] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[16]= new Array();
 choices[16][0] = "las personas jur&iacute;dicas ";
 choices[16][1] = "las entidades con personalidad jur&iacute;dica";
 choices[16][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[16][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[16] = choices[16][1];
 units[16] = "7";
 comments[16] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[17]= new Array();
 choices[17][0] = "Versi&oacute;n digital prioritaria.";
 choices[17][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[17][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[17][3] = "Apertura y transparencia.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[18]= new Array();
 choices[18][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[18][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[18][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[18][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[18] = choices[18][0];
 units[18] = "22";
 comments[18] = "Id Pregunta: 124. ";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[19]= new Array();
 choices[19][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[19][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[19][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[19][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[19] = choices[19][1];
 units[19] = "1";
 comments[19] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[20]= new Array();
 choices[20][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[20][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[20][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[20][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[20] = choices[20][2];
 units[20] = "77";
 comments[20] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[21]= "22)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[21]= new Array();
 choices[21][0] = "B&aacute;sico";
 choices[21][1] = "Medio";
 choices[21][2] = "Alto";
 choices[21][3] = "A los niveles medio y alto";
 answers[21] = choices[21][2];
 units[21] = "35";
 comments[21] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[22]= new Array();
 choices[22][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[22][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[22][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[22][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[23]= "24)  El sector p&uacute;blico institucional se integra por:";
 choices[23]= new Array();
 choices[23][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[23][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[23][2] = "las Universidades p&uacute;blicas";
 choices[23][3] = "todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[24]= new Array();
 choices[24][0] = "Un programa presupuestario.";
 choices[24][1] = "Un concepto presupuestario.";
 choices[24][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[24][3] = "Un cr&eacute;dito presupuestario.";
 answers[24] = choices[24][0];
 units[24] = "10";
 comments[24] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[25]= new Array();
 choices[25][0] = "Ford";
 choices[25][1] = "Google";
 choices[25][2] = "Toyota";
 choices[25][3] = "Facebook";
 answers[25] = choices[25][2];
 units[25] = "34";
 comments[25] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[26]= new Array();
 choices[26][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[26][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[26][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[26][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[26] = choices[26][3];
 units[26] = "10";
 comments[26] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[27]= "28)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[27]= new Array();
 choices[27][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[27][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[27][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[27][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[27] = choices[27][1];
 units[27] = "73";
 comments[27] = "Id Pregunta: 101. ";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[28]= new Array();
 choices[28][0] = "El Parlamento y el Consejo.";
 choices[28][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[28][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[28][3] = "La Comisi&oacute;n y el Consejo.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[29]= "30)  El sector Servicios NO incluye:";
 choices[29]= new Array();
 choices[29][0] = "El Comercio";
 choices[29][1] = "Los Transportes";
 choices[29][2] = "La Energ&iacute;a";
 choices[29][3] = "Las Comunicaciones";
 answers[29] = choices[29][2];
 units[29] = "12";
 comments[29] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[30]= "31)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[30]= new Array();
 choices[30][0] = "SMB3";
 choices[30][1] = "AFP";
 choices[30][2] = "NFS";
 choices[30][3] = "FTP";
 answers[30] = choices[30][0];
 units[30] = "59";
 comments[30] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[31]= new Array();
 choices[31][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[31][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[31][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[31][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[32]= "33)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[32]= new Array();
 choices[32][0] = "IANA";
 choices[32][1] = "ISOC";
 choices[32][2] = "IETF";
 choices[32][3] = "IAB";
 answers[32] = choices[32][0];
 units[32] = "103";
 comments[32] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[33]= new Array();
 choices[33][0] = "Indirecta.";
 choices[33][1] = "Directa.";
 choices[33][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[33][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[33] = choices[33][1];
 units[33] = "14";
 comments[33] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[34]= new Array();
 choices[34][0] = "absoluta de las Cortes Generales.";
 choices[34][1] = "absoluta del Congreso de los Diputados.";
 choices[34][2] = "simple de las Cortes Generales.";
 choices[34][3] = "simple del Congreso de los Diputados.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[35]= new Array();
 choices[35][0] = "JUnit, Artifactory y SonarQube";
 choices[35][1] = "JUnit, Artifactory y Selenium";
 choices[35][2] = "JUnit, SonarQube y Selenium";
 choices[35][3] = "ArtiFactory, SonarQube y Selenium";
 answers[35] = choices[35][2];
 units[35] = "92";
 comments[35] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[36]= "37)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[36]= new Array();
 choices[36][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[36][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[36][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[36][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[36] = choices[36][0];
 units[36] = "92";
 comments[36] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[37]= new Array();
 choices[37][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[37][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[37][2] = "El que hubieren designado las Cortes Generales.";
 choices[37][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[37] = choices[37][1];
 units[37] = "1";
 comments[37] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[38]= "39)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[38]= new Array();
 choices[38][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[38][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[38][2] = "Ninguna es correcta.";
 choices[38][3] = "A y B son correctas.";
 answers[38] = choices[38][1];
 units[38] = "14";
 comments[38] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[39]= "40)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[39]= new Array();
 choices[39][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[39][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[39][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[39][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[39] = choices[39][3];
 units[39] = "109";
 comments[39] = "Id Pregunta: 652. Junta de Extremadura A1 2015";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[40]= "41)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[40]= new Array();
 choices[40][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[40][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[40][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[40][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[40] = choices[40][0];
 units[40] = "28";
 comments[40] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[41][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[41][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[41][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[41] = choices[41][2];
 units[41] = "22";
 comments[41] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[42]= "43)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[42]= new Array();
 choices[42][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[42][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[42][2] = "a y b son correctas";
 choices[42][3] = "a y b son incorrectas";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[43]= "44)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[43]= new Array();
 choices[43][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[43][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[43][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[43][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[44]= "45)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[44]= new Array();
 choices[44][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[44][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[44][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[44][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[45]= "46)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[45]= new Array();
 choices[45][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[45][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[45][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[45][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[45] = choices[45][0];
 units[45] = "109";
 comments[45] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[46]= new Array();
 choices[46][0] = "MySQL";
 choices[46][1] = "SQLite";
 choices[46][2] = "Zope";
 choices[46][3] = "MariaDB";
 answers[46] = choices[46][2];
 units[46] = "61";
 comments[46] = "Id Pregunta: 577. Tema 61. TAI 2016.";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[47]= new Array();
 choices[47][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[47][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[47][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[47][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[47] = choices[47][0];
 units[47] = "14";
 comments[47] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[48]= "49)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[48]= new Array();
 choices[48][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[48][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[48][2] = "La normativa reguladora de cada derecho.";
 choices[48][3] = "Ley 50/1997, del Gobierno.";
 answers[48] = choices[48][2];
 units[48] = "10";
 comments[48] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[49]= new Array();
 choices[49][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[49][1] = "La Direcci&oacute;n de la Competencia.";
 choices[49][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[49][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[49] = choices[49][0];
 units[49] = "121";
 comments[49] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[50]= new Array();
 choices[50][0] = "Art. 25 LO, 3/2007.";
 choices[50][1] = "Art. 23 LO, 3/2007.";
 choices[50][2] = "Art. 14 LO, 3/2007.";
 choices[50][3] = "Ninguna es correcta, es el art. 13.";
 answers[50] = choices[50][0];
 units[50] = "14";
 comments[50] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[51]= new Array();
 choices[51][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[51][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[51][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[51][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[51] = choices[51][3];
 units[51] = "26";
 comments[51] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[52]= "53)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[52]= new Array();
 choices[52][0] = "786 Diputados como m&aacute;ximo.";
 choices[52][1] = "600 Diputados como m&aacute;ximo.";
 choices[52][2] = "650 Diputados como m&aacute;ximo.";
 choices[52][3] = "732 Diputados como m&aacute;ximo.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[53]= "54)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[53]= new Array();
 choices[53][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[53][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[53][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[53][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[54]= new Array();
 choices[54][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[54][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[54][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[54][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[54] = choices[54][2];
 units[54] = "22";
 comments[54] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[55]= new Array();
 choices[55][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[55][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[55][2] = "Todas son correctas.";
 choices[55][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 330. UNION EUROPEA";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[56]= new Array();
 choices[56][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[56][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[56][2] = "Iniciativa europea de libre flujo de datos.";
 choices[56][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[57]= "58)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[57]= new Array();
 choices[57][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[57][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[57][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[57][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[58]= "59)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[58][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[58][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[58][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[58] = choices[58][3];
 units[58] = "26";
 comments[58] = "Id Pregunta: 552. Gobernanza TIC";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[59]= new Array();
 choices[59][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[59][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[59][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[59][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[59] = choices[59][0];
 units[59] = "48";
 comments[59] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[60]= "61)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[60]= new Array();
 choices[60][0] = "Conformidad";
 choices[60][1] = "Responsabilidad";
 choices[60][2] = "Adquisici&oacute;n";
 choices[60][3] = "Desempe&ntilde;o";
 answers[60] = choices[60][0];
 units[60] = "26";
 comments[60] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[61]= "62)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[61]= new Array();
 choices[61][0] = "0";
 choices[61][1] = "1";
 choices[61][2] = "Tantos como peticiones concurrentes tenga.";
 choices[61][3] = "Tantos como le permita la memoria de la JVM.";
 answers[61] = choices[61][1];
 units[61] = "64";
 comments[61] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[62]= "63)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[62]= new Array();
 choices[62][0] = "90";
 choices[62][1] = "50";
 choices[62][2] = "64";
 choices[62][3] = "60";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[63]= "64)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[63]= new Array();
 choices[63][0] = "Discriminaci&oacute;n indirecta.";
 choices[63][1] = "Discriminaci&oacute;n directa.";
 choices[63][2] = "Discriminaci&oacute;n por maternidad.";
 choices[63][3] = "Discriminaci&oacute;n abusiva.";
 answers[63] = choices[63][1];
 units[63] = "14";
 comments[63] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[64]= new Array();
 choices[64][0] = "El Consejo Nacional de la Mujer";
 choices[64][1] = "El Consejo de la Mujer";
 choices[64][2] = "El Instituto de la Mujer";
 choices[64][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[64] = choices[64][3];
 units[64] = "14";
 comments[64] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[65]= "66)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[65]= new Array();
 choices[65][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[65][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[65][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[65][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[65] = choices[65][2];
 units[65] = "14";
 comments[65] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[66]= new Array();
 choices[66][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[66][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[66][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[66][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[66] = choices[66][1];
 units[66] = "76";
 comments[66] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[67]= "68)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[67]= new Array();
 choices[67][0] = "El derecho a un permiso.";
 choices[67][1] = "Una prestaci&oacute;n por paternidad.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "18 d&iacute;as de permiso.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[68]= new Array();
 choices[68][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[68][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[68][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 542. LEY 39/2015";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[69]= new Array();
 choices[69][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[69][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[69][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[69][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[69] = choices[69][3];
 units[69] = "77";
 comments[69] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[70]= "71)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[70][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[70][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[70][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[70] = choices[70][2];
 units[70] = "57";
 comments[70] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[71]= "72)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[71]= new Array();
 choices[71][0] = "Resoluci&oacute;n.";
 choices[71][1] = "Desistimiento o renuncia.";
 choices[71][2] = "Caducidad.";
 choices[71][3] = "Todas las anteriores.";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[72]= "73)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[72]= new Array();
 choices[72][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[72][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[72][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[72][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; es SonarQube?";
 choices[73]= new Array();
 choices[73][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[73][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[73][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[73][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[73] = choices[73][2];
 units[73] = "92";
 comments[73] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[74]= "75)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[74]= new Array();
 choices[74][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[74][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[74][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[74][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[74] = choices[74][3];
 units[74] = "1";
 comments[74] = "Id Pregunta: 227. CONSTITUCION1978";


