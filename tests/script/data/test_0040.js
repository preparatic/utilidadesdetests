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

//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[0]= new Array();
 choices[0][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[0][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[0][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[0][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[1]= "2)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[1]= new Array();
 choices[1][0] = "circulares";
 choices[1][1] = "reglamentos internos";
 choices[1][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[1][3] = "disposiciones de car&aacute;cter general";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[2]= "3)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[2]= new Array();
 choices[2][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[2][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[2][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[2][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[2] = choices[2][3];
 units[2] = "28";
 comments[2] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[3]= "4)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[3]= new Array();
 choices[3][0] = "los registros mercantiles";
 choices[3][1] = "los registros de la propiedad";
 choices[3][2] = "los protocolos notariales";
 choices[3][3] = "todas son correctas";
 answers[3] = choices[3][3];
 units[3] = "7";
 comments[3] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[4]= new Array();
 choices[4][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[4][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[4][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[4][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[4] = choices[4][1];
 units[4] = "18, 20";
 comments[4] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[5]= "6)  El Colegio de Comisarios se re&uacute;ne:";
 choices[5]= new Array();
 choices[5][0] = "Una vez por semana.";
 choices[5][1] = "Una vez al mes.";
 choices[5][2] = "Dos veces en semana.";
 choices[5][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[6]= new Array();
 choices[6][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[6][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[6][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[6][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[7]= new Array();
 choices[7][0] = "El Consejo Europeo.";
 choices[7][1] = "El Parlamento Europeo.";
 choices[7][2] = "El Consejo.";
 choices[7][3] = "La Comisi&oacute;n.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[8]= new Array();
 choices[8][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[8][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[8][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[8][3] = "El software funcionando es la medida principal del progreso.";
 answers[8] = choices[8][2];
 units[8] = "34";
 comments[8] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[9]= "10)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[9]= new Array();
 choices[9][0] = "P&uacute;blica.";
 choices[9][1] = "Privada.";
 choices[9][2] = "A y B son correctas.";
 choices[9][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[10]= "11)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[10]= new Array();
 choices[10][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[10][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[10][2] = "El Presidente del Gobierno";
 choices[10][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[10] = choices[10][1];
 units[10] = "26";
 comments[10] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[11]= "12)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[11]= new Array();
 choices[11][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[11][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[11][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[11][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[11] = choices[11][3];
 units[11] = "7";
 comments[11] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[12]= new Array();
 choices[12][0] = "Perceptible";
 choices[12][1] = "Operable";
 choices[12][2] = "Comprensible";
 choices[12][3] = "Robusto";
 answers[12] = choices[12][2];
 units[12] = "42";
 comments[12] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[13]= "14)  Componen la Comisi&oacute;n Europea:";
 choices[13]= new Array();
 choices[13][0] = "Un Comisario por cada Estado miembro.";
 choices[13][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[13][2] = "Dos Comisarios por cada Estado miembro.";
 choices[13][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[14]= new Array();
 choices[14][0] = "Por Real Decreto.";
 choices[14][1] = "Por Orden del Ministerio del Interior.";
 choices[14][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[14][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[15]= "16)  La recusaci&oacute;n se plantear&aacute;...";
 choices[15]= new Array();
 choices[15][0] = "S&oacute;lo verbalmente";
 choices[15][1] = "S&oacute;lo por escrito";
 choices[15][2] = "Verbalmente o por escrito";
 choices[15][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[16]= new Array();
 choices[16][0] = "Yarn";
 choices[16][1] = "Flume";
 choices[16][2] = "Hive";
 choices[16][3] = "BizAgi";
 answers[16] = choices[16][3];
 units[16] = "73";
 comments[16] = "Id Pregunta: 657. ";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[17]= "18)  Los criptosistemas pueden clasificarse en:";
 choices[17]= new Array();
 choices[17][0] = "Concretos, Estables e Inestables.";
 choices[17][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[17][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[17][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[17] = choices[17][3];
 units[17] = "76";
 comments[17] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[18]= "19)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[18]= new Array();
 choices[18][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[18][1] = "Publicidad de las normas.";
 choices[18][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[18][3] = "Coordinaci&oacute;n normativa.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[19]= new Array();
 choices[19][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[19][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[19][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[19][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[19] = choices[19][1];
 units[19] = "101";
 comments[19] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[20]= "21)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[20]= new Array();
 choices[20][0] = "Tres a&ntilde;os.";
 choices[20][1] = "Dos a&ntilde;os y medio.";
 choices[20][2] = "Cinco a&ntilde;os.";
 choices[20][3] = "Seis a&ntilde;os.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[21]= "22)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[21]= new Array();
 choices[21][0] = "Dise&ntilde;o del servicio.";
 choices[21][1] = "Transici&oacute;n del servicio.";
 choices[21][2] = "Estrategia del servicio.";
 choices[21][3] = "Operaci&oacute;n del servicio.";
 answers[21] = choices[21][2];
 units[21] = "101";
 comments[21] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[22]= new Array();
 choices[22][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[22][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[22][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[22][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[22] = choices[22][3];
 units[22] = "78";
 comments[22] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; es Java Web Start?";
 choices[23]= new Array();
 choices[23][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[23][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[23][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[23][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[23] = choices[23][3];
 units[23] = "64";
 comments[23] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[24]= "25)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[24]= new Array();
 choices[24][0] = "El Tratado de Roma, 1957.";
 choices[24][1] = "El Acta &Uacute;nica Europea.";
 choices[24][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[24][3] = "Ninguna es correcta.";
 answers[24] = choices[24][2];
 units[24] = "14";
 comments[24] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[25]= "26)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[25][1] = "Las inversiones reales y financieras.";
 choices[25][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[25][3] = "Las transferencias de capital y las inversiones reales.";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[26]= new Array();
 choices[26][0] = "Entre 1973 y 1978";
 choices[26][1] = "Entre 1992 y 1996";
 choices[26][2] = "Entre 1978 y 1985";
 choices[26][3] = "Entre 2008 y 2013";
 answers[26] = choices[26][2];
 units[26] = "12";
 comments[26] = "Id Pregunta: 564. Modelo econ&oacute;mico";


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


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[28]= "29)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[28]= new Array();
 choices[28][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[28][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[28][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[28][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[29]= "30)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[29]= new Array();
 choices[29][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[29][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[29][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[29][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[30]= new Array();
 choices[30][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[30][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[30][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[30][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[30] = choices[30][1];
 units[30] = "43";
 comments[30] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[31]= "32)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[31]= new Array();
 choices[31][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[31][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[31][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[31][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[32]= new Array();
 choices[32][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[32][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[32][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[32][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[33]= new Array();
 choices[33][0] = "Crecimiento inteligente.";
 choices[33][1] = "Crecimiento inclusivo.";
 choices[33][2] = "Crecimiento sostenible.";
 choices[33][3] = "Crecimiento integrador.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[34]= new Array();
 choices[34][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[34][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[34][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[34][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[35]= new Array();
 choices[35][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[35][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[35][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[35][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[36]= new Array();
 choices[36][0] = "Transferencias de cr&eacute;dito.";
 choices[36][1] = "Incorporaciones de cr&eacute;dito.";
 choices[36][2] = "Imputaciones de cr&eacute;dito.";
 choices[36][3] = "Ampliaciones de cr&eacute;dito.";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; es el machine learning?";
 choices[37]= new Array();
 choices[37][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[37][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[37][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[37][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[37] = choices[37][0];
 units[37] = "73";
 comments[37] = "Id Pregunta: 659. ";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[38]= new Array();
 choices[38][0] = "Directiva 95/46/CE";
 choices[38][1] = "Directiva 1999/93/CE";
 choices[38][2] = "Directiva 2000/31/CE";
 choices[38][3] = "Directiva 2003/98/CE";
 answers[38] = choices[38][1];
 units[38] = "77";
 comments[38] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[39]= "40)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[39]= new Array();
 choices[39][0] = "personalidad jur&iacute;dica propia";
 choices[39][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[39][2] = "personalidad jur&iacute;dica plena";
 choices[39][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[40]= "41)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[40]= new Array();
 choices[40][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[40][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[40][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[40][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[40] = choices[40][2];
 units[40] = "47";
 comments[40] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[41]= new Array();
 choices[41][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[41][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[41][2] = "Servicio de seguridad gestionada";
 choices[41][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[41] = choices[41][1];
 units[41] = "26";
 comments[41] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[42]= "43)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[42]= new Array();
 choices[42][0] = "Interoperabilidad";
 choices[42][1] = "Integridad";
 choices[42][2] = "Capital humano";
 choices[42][3] = "Trazabilidad";
 answers[42] = choices[42][2];
 units[42] = "19";
 comments[42] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[43][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[43][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[43][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[43] = choices[43][2];
 units[43] = "85";
 comments[43] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[44]= new Array();
 choices[44][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[44][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[44][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[44][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[44] = choices[44][1];
 units[44] = "34, 84";
 comments[44] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[45]= new Array();
 choices[45][0] = "Anualmente por el Consejo de Ministros";
 choices[45][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[45][2] = "Al final de cada legislatura por el Gobierno";
 choices[45][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[46]= new Array();
 choices[46][0] = "Bienalmente";
 choices[46][1] = "Anualmente";
 choices[46][2] = "Semestralmente";
 choices[46][3] = "Cada cuatro a&ntilde;os";
 answers[46] = choices[46][1];
 units[46] = "19";
 comments[46] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[47]= "48)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[47][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[47][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[47][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[47] = choices[47][0];
 units[47] = "19";
 comments[47] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[48]= new Array();
 choices[48][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[48][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[48][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[48][3] = "El Senado se compone de 350 senadores.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[49]= new Array();
 choices[49][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[49][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[49][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[49][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[49] = choices[49][0];
 units[49] = "26";
 comments[49] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[50]= "51)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[50]= new Array();
 choices[50][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[50][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[50][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[50][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[51]= "52)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[51]= new Array();
 choices[51][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[51][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[51][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[51][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[52]= "53)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[52]= new Array();
 choices[52][0] = "150 trabajadores/as.";
 choices[52][1] = "200 trabajadores/as.";
 choices[52][2] = "250 trabajadores/as.";
 choices[52][3] = "300 trabajadores/as.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[53]= new Array();
 choices[53][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[53][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[53][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[53][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[53] = choices[53][1];
 units[53] = "44";
 comments[53] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[54]= "55)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[54]= new Array();
 choices[54][0] = "Son actos normativos.";
 choices[54][1] = "Poseen alcance general.";
 choices[54][2] = "No son obligatorias.";
 choices[54][3] = "Son actos individuales no normativos.";
 answers[54] = choices[54][3];
 units[54] = "5";
 comments[54] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[55]= new Array();
 choices[55][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[55][1] = "Autorizar indultos generales.";
 choices[55][2] = "Sancionar las leyes.";
 choices[55][3] = "Promulgar las leyes.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[56]= "57)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[56]= new Array();
 choices[56][0] = "Diciembre de 1987.";
 choices[56][1] = "Septiembre de 1989.";
 choices[56][2] = "Octubre de 1990.";
 choices[56][3] = "Noviembre de 1980.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[57]= new Array();
 choices[57][0] = "3 pilares";
 choices[57][1] = "4 pilares";
 choices[57][2] = "5 pilares";
 choices[57][3] = "7 pilares";
 answers[57] = choices[57][0];
 units[57] = "17";
 comments[57] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[58]= new Array();
 choices[58][0] = "DoS";
 choices[58][1] = "Phishing";
 choices[58][2] = "Sniffing";
 choices[58][3] = "Spoofing";
 answers[58] = choices[58][3];
 units[58] = "119";
 comments[58] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[59]= new Array();
 choices[59][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[59][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[59][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[59][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[59] = choices[59][2];
 units[59] = "17";
 comments[59] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[60]= new Array();
 choices[60][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[60][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[60][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[60][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[60] = choices[60][1];
 units[60] = "12";
 comments[60] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[61]= "62)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[61]= new Array();
 choices[61][0] = "Los Derechos y Deberes fundamentales.";
 choices[61][1] = "La Corona.";
 choices[61][2] = "El Poder Judicial.";
 choices[61][3] = "Las Cortes Generales.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[62]= "63)  La recusaci&oacute;n pueden promoverla...";
 choices[62]= new Array();
 choices[62][0] = "Cualquier &oacute;rgano";
 choices[62][1] = "El interesado";
 choices[62][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[62][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[62] = choices[62][0];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[63]= new Array();
 choices[63][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[63][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[63][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[63][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[64]= new Array();
 choices[64][0] = "Un programa presupuestario.";
 choices[64][1] = "Un concepto presupuestario.";
 choices[64][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[64][3] = "Un cr&eacute;dito presupuestario.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[65]= new Array();
 choices[65][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[65][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[65][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[65][3] = "todas son correctas";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 542. LEY 39/2015";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[66]= new Array();
 choices[66][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[66][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[66][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[66][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[67]= new Array();
 choices[67][0] = "El BCE";
 choices[67][1] = "El Parlamento";
 choices[67][2] = "El Consejo";
 choices[67][3] = "La Comisi&oacute;n";
 answers[67] = choices[67][3];
 units[67] = "17";
 comments[67] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[68]= "69)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[68]= new Array();
 choices[68][0] = "Establecer tributos.";
 choices[68][1] = "Desarrollar lo establecido en una Ley.";
 choices[68][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[68][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[69]= "70)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[69]= new Array();
 choices[69][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[69][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[69][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[69][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[70]= "71)  Son bases de datos NoSQL:";
 choices[70]= new Array();
 choices[70][0] = "MongoDB y Maria DB";
 choices[70][1] = "HBase y Dynamo";
 choices[70][2] = "MariaDB, Cassandra y BigTable";
 choices[70][3] = "La A) y la C)";
 answers[70] = choices[70][1];
 units[70] = "73";
 comments[70] = "Id Pregunta: 104. ";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[71]= "72)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[71]= new Array();
 choices[71][0] = "Al Gobierno.";
 choices[71][1] = "A las Cortes Generales.";
 choices[71][2] = "Al Poder Judicial.";
 choices[71][3] = "Al Congreso de los Diputados.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[72]= new Array();
 choices[72][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[72][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[72][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[72][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[72] = choices[72][0];
 units[72] = "19";
 comments[72] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[73]= new Array();
 choices[73][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[73][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[73][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[73][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[73] = choices[73][0];
 units[73] = "14";
 comments[73] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[74]= new Array();
 choices[74][0] = "El Ministro de Econom&iacute;a.";
 choices[74][1] = "El Gobierno.";
 choices[74][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[74][3] = "El Presidente del Gobierno.";
 answers[74] = choices[74][1];
 units[74] = "10";
 comments[74] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


