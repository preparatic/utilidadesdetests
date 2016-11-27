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

//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[0]= new Array();
 choices[0][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[0][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[0][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[0][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[1]= "2)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[1]= new Array();
 choices[1][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[1][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[1][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[1][3] = "Todas son correctas.";
 answers[1] = choices[1][3];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[2]= "3)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[2]= new Array();
 choices[2][0] = "Acoso sexual.";
 choices[2][1] = "Acoso por raz&oacute;n de sexo.";
 choices[2][2] = "Acoso laboral.";
 choices[2][3] = "Acoso mental.";
 answers[2] = choices[2][1];
 units[2] = "14";
 comments[2] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[3]= new Array();
 choices[3][0] = "Ley Org&aacute;nica.";
 choices[3][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[3][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[3][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[4]= "5)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[4]= new Array();
 choices[4][0] = "Discriminaci&oacute;n indirecta.";
 choices[4][1] = "Discriminaci&oacute;n directa.";
 choices[4][2] = "Discriminaci&oacute;n por maternidad.";
 choices[4][3] = "Discriminaci&oacute;n abusiva.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[5]= "6)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "en cada Comunidad Aut&oacute;noma";
 choices[5][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[5][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[5][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[5] = choices[5][1];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[6]= "7)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[6]= new Array();
 choices[6][0] = "Ejecuci&oacute;n";
 choices[6][1] = "Adjudicaci&oacute;n";
 choices[6][2] = "Licitaci&oacute;n";
 choices[6][3] = "Formalizaci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "37";
 comments[6] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[7]= new Array();
 choices[7][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[7][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[7][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[7][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[7] = choices[7][1];
 units[7] = "77";
 comments[7] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[8]= "9)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[8]= new Array();
 choices[8][0] = "circulares";
 choices[8][1] = "reglamentos internos";
 choices[8][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[8][3] = "disposiciones de car&aacute;cter general";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[9]= new Array();
 choices[9][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[9][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[9][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[9][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[9] = choices[9][1];
 units[9] = "92";
 comments[9] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[10]= new Array();
 choices[10][0] = "De 1a  4 ";
 choices[10][1] = "De 3 a  7 ";
 choices[10][2] = "De 5 a  9";
 choices[10][3] = "De 7 a 11";
 answers[10] = choices[10][2];
 units[10] = "34, 84";
 comments[10] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[11]= new Array();
 choices[11][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[11][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[11][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[11][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[11] = choices[11][2];
 units[11] = "43";
 comments[11] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[12]= "13)  Las Universidades p&uacute;blicas:";
 choices[12]= new Array();
 choices[12][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[12][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[12][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[12][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[12] = choices[12][1];
 units[12] = "7";
 comments[12] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[13]= new Array();
 choices[13][0] = "Art&iacute;culo 70.";
 choices[13][1] = "Art&iacute;culo 54.";
 choices[13][2] = "Articulo 62.";
 choices[13][3] = "Articulo 55. 5.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[14]= "15)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[14]= new Array();
 choices[14][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[14][1] = "los Subdelegados del Gobierno en las provincias";
 choices[14][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[14][3] = "a y b son correctas";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[15]= new Array();
 choices[15][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[15][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[15][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[15][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[15] = choices[15][3];
 units[15] = "10";
 comments[15] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[16]= "17)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[16]= new Array();
 choices[16][0] = "Intersecci&oacute;n.";
 choices[16][1] = "Uni&oacute;n.";
 choices[16][2] = "Restricci&oacute;n.";
 choices[16][3] = "Diferencia.";
 answers[16] = choices[16][0];
 units[16] = "60";
 comments[16] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[17]= "18)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[17]= new Array();
 choices[17][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[17][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[17][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[17][3] = "Todas las respuestas anteriores son correctas.";
 answers[17] = choices[17][0];
 units[17] = "45";
 comments[17] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[18]= "19)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[18]= new Array();
 choices[18][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[18][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[18][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[18][3] = "todas son correctas";
 answers[18] = choices[18][3];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[19]= new Array();
 choices[19][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[19][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[19][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[19][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[19] = choices[19][3];
 units[19] = "26";
 comments[19] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[20]= new Array();
 choices[20][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[20][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[20][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[20][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[20] = choices[20][1];
 units[20] = "7";
 comments[20] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[21]= "22)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[21]= new Array();
 choices[21][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[21][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[21][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[21][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[21] = choices[21][2];
 units[21] = "22";
 comments[21] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[22]= new Array();
 choices[22][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[22][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[22][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[22][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[22] = choices[22][1];
 units[22] = "1";
 comments[22] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[23]= "24)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[23]= new Array();
 choices[23][0] = "Sello electr&oacute;nico";
 choices[23][1] = "Sede electr&oacute;nica";
 choices[23][2] = "Servidor seguro (SSL/TLS)";
 choices[23][3] = "Empleado p&uacute;blico";
 answers[23] = choices[23][2];
 units[23] = "7";
 comments[23] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[24]= new Array();
 choices[24][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[24][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[24][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[24][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[25]= new Array();
 choices[25][0] = "PostgreSQL";
 choices[25][1] = "Datawarehouse";
 choices[25][2] = "Snowflake";
 choices[25][3] = "CouchDB";
 answers[25] = choices[25][0];
 units[25] = "61";
 comments[25] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[26]= "27)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[26][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[26][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[26][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[26] = choices[26][3];
 units[26] = "7";
 comments[26] = "Id Pregunta: 668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[27]= "28)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[27]= new Array();
 choices[27][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[27][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[27][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[27][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[27] = choices[27][3];
 units[27] = "12";
 comments[27] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[28]= "29)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[28]= new Array();
 choices[28][0] = "los Subsecretarios y Secretarios generales";
 choices[28][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[28][2] = "los Secretarios de Estado";
 choices[28][3] = "los Subdirectores generales";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[29]= "30)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[29]= new Array();
 choices[29][0] = "solo mediante ley";
 choices[29][1] = "reglamentariamente";
 choices[29][2] = "mediante ley o reglamentariamente";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][1];
 units[29] = "7";
 comments[29] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[30]= "31)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[30]= new Array();
 choices[30][0] = "20 parlamentarios.";
 choices[30][1] = "29 parlamentarios.";
 choices[30][2] = "18 parlamentarios.";
 choices[30][3] = "23 parlamentarios.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[31]= new Array();
 choices[31][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[31][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[31][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[31][3] = "El pago de subsidios a parados";
 answers[31] = choices[31][3];
 units[31] = "15";
 comments[31] = "Id Pregunta: 116. ";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[32]= "33)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[32]= new Array();
 choices[32][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[32][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[32][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[32][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[33]= "34)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[33]= new Array();
 choices[33][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[33][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[33][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[33][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[34]= new Array();
 choices[34][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[34][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[34][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[34][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[35]= new Array();
 choices[35][0] = "De los derechos y deberes fundamentales.";
 choices[35][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[35][2] = "Derechos y libertades.";
 choices[35][3] = "De la Corona.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[36]= "37)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[36]= new Array();
 choices[36][0] = "Prevenir las conductas discriminatorias.";
 choices[36][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[36][2] = "Todas son correctas.";
 choices[36][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[37]= new Array();
 choices[37][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[37][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[37][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[37][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[37] = choices[37][1];
 units[37] = "19";
 comments[37] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[38]= new Array();
 choices[38][0] = "a) Los cuatro ejercicios siguientes.";
 choices[38][1] = "b) El ejercicio siguiente.";
 choices[38][2] = "c) Los dos ejercicios siguientes.";
 choices[38][3] = "d) Los tres ejercicios siguientes.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[39]= new Array();
 choices[39][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[39][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[39][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[39][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[39] = choices[39][0];
 units[39] = "19";
 comments[39] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[40]= "41)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[40]= new Array();
 choices[40][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[40][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[40][2] = "a y b son correctas";
 choices[40][3] = "a y b son incorrectas";
 answers[40] = choices[40][0];
 units[40] = "7";
 comments[40] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[41]= "42)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[41]= new Array();
 choices[41][0] = "Rey.";
 choices[41][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[41][2] = "Constituci&oacute;n.";
 choices[41][3] = "Pueblo.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[42]= new Array();
 choices[42][0] = "El Consejo Europeo.";
 choices[42][1] = "El Parlamento Europeo.";
 choices[42][2] = "El Consejo.";
 choices[42][3] = "La Comisi&oacute;n.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[43]= new Array();
 choices[43][0] = "A los ministros.";
 choices[43][1] = "Las respuestas a) y b) son correctas.";
 choices[43][2] = "Las respuestas a) y b) no son correctas.";
 choices[43][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[43] = choices[43][1];
 units[43] = "10";
 comments[43] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[44]= new Array();
 choices[44][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[44][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[44][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[44][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[45]= new Array();
 choices[45][0] = "Art. 13, L.O.3/2007.";
 choices[45][1] = "Art. 14, L.O.3/2007.";
 choices[45][2] = "Art. 11, L.O.3/2007.";
 choices[45][3] = "Ninguna es correcta.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[46]= new Array();
 choices[46][0] = "Dos Cap&iacute;tulos.";
 choices[46][1] = "Tres Cap&iacute;tulos.";
 choices[46][2] = "Un Cap&iacute;tulo.";
 choices[46][3] = "Cuatro Cap&iacute;tulos.";
 answers[46] = choices[46][1];
 units[46] = "1";
 comments[46] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[47]= new Array();
 choices[47][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[47][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[47][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[47][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[47] = choices[47][3];
 units[47] = "46";
 comments[47] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[48]= "49)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[48]= new Array();
 choices[48][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[48][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[48][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[48][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[48] = choices[48][2];
 units[48] = "85";
 comments[48] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[49]= "50)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[49]= new Array();
 choices[49][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[49][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[49][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[49][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[49] = choices[49][2];
 units[49] = "76";
 comments[49] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[50]= "51)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[50]= new Array();
 choices[50][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[50][1] = "mediante resoluci&oacute;n judicial especial";
 choices[50][2] = "&uacute;nicamente mediante poder notarial";
 choices[50][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[51]= "52)  El lenguaje SPARK es un subconjunto de:";
 choices[51]= new Array();
 choices[51][0] = "Java";
 choices[51][1] = "Fortran";
 choices[51][2] = "Ruby";
 choices[51][3] = "Ada";
 answers[51] = choices[51][3];
 units[51] = "73";
 comments[51] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[52]= "53)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[52]= new Array();
 choices[52][0] = "Establecer tributos.";
 choices[52][1] = "Desarrollar lo establecido en una Ley.";
 choices[52][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[52][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[53]= "54)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[53]= new Array();
 choices[53][0] = "Son vinculantes solamente.";
 choices[53][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[53][2] = "Son preceptivos y vinculantes.";
 choices[53][3] = "Son preceptivos y no vinculantes.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[54][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[54][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[54][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[54] = choices[54][1];
 units[54] = "98";
 comments[54] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[55]= "56)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[55]= new Array();
 choices[55][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[55][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[55][2] = "A partir del 1 de enero de 2015";
 choices[55][3] = "A partir del 1 de julio de 2016";
 answers[55] = choices[55][1];
 units[55] = "77";
 comments[55] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Lollipop";
 choices[56][1] = "Jelly Bean";
 choices[56][2] = "Marshmallow";
 choices[56][3] = "KitKat";
 answers[56] = choices[56][2];
 units[56] = "59";
 comments[56] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[57]= "58)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[57]= new Array();
 choices[57][0] = "Ejecutivo";
 choices[57][1] = "Limitativo";
 choices[57][2] = "Estimativo";
 choices[57][3] = "Progresivo";
 answers[57] = choices[57][1];
 units[57] = "10";
 comments[57] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[58]= "59)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[58]= new Array();
 choices[58][0] = "los Subsecretarios y los Secretarios generales";
 choices[58][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[58][2] = "los Secretarios de Estado y los Directores generales";
 choices[58][3] = "los Ministros y los Secretarios de Estado";
 answers[58] = choices[58][3];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[59]= new Array();
 choices[59][0] = "IEEE 802.11p";
 choices[59][1] = "IEEE 802.11r";
 choices[59][2] = "IEEE 802.11v";
 choices[59][3] = "IEEE 802.11w";
 answers[59] = choices[59][1];
 units[59] = "112";
 comments[59] = "Id Pregunta: 572. Tema 112. TAI 2016.";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[60]= new Array();
 choices[60][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[60][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[60][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[60][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[60] = choices[60][2];
 units[60] = "121";
 comments[60] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[61]= "62)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[61]= new Array();
 choices[61][0] = "Cifrada";
 choices[61][1] = "Conjunta";
 choices[61][2] = "Sistem&aacute;tica";
 choices[61][3] = "Todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[62]= "63)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[62][1] = "la Organizaci&oacute;n Territorial";
 choices[62][2] = "la Organizaci&oacute;n sectorial";
 choices[62][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[63][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[63][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[63][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[64]= new Array();
 choices[64][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[64][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[64][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[64][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[64] = choices[64][3];
 units[64] = "10";
 comments[64] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[65]= new Array();
 choices[65][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[65][1] = "Entrada en la Uni&oacute;n Europea";
 choices[65][2] = "Pactos de la Moncloa";
 choices[65][3] = "Ingreso en la ONU";
 answers[65] = choices[65][3];
 units[65] = "12";
 comments[65] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[66]= "67)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[66]= new Array();
 choices[66][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[66][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[66][2] = "Un programa de igualdad.";
 choices[66][3] = "Un estatuto de igualdad.";
 answers[66] = choices[66][0];
 units[66] = "14";
 comments[66] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[67]= "68)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[67]= new Array();
 choices[67][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[67][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[67][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[67][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[68]= new Array();
 choices[68][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[68][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[68][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[68][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[68] = choices[68][3];
 units[68] = "56";
 comments[68] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[69]= new Array();
 choices[69][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[69][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[69][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[69][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[70]= "71)  El Colegio de Comisarios se re&uacute;ne:";
 choices[70]= new Array();
 choices[70][0] = "Una vez por semana.";
 choices[70][1] = "Una vez al mes.";
 choices[70][2] = "Dos veces en semana.";
 choices[70][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[70] = choices[70][0];
 units[70] = "5";
 comments[70] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[71]= "72)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[71]= new Array();
 choices[71][0] = "Subgrupo A1";
 choices[71][1] = "Subgrupo A2";
 choices[71][2] = "Subgrupo B";
 choices[71][3] = "Subgrupo C1";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[72]= "73)  Es falso que:";
 choices[72]= new Array();
 choices[72][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[72][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[72][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[72][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[72] = choices[72][1];
 units[72] = "18, 20";
 comments[72] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[73]= "74)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Anualmente.";
 choices[73][1] = "Ninguna de las respuestas es correcta.";
 choices[73][2] = "Trimestralmente.";
 choices[73][3] = "Semestralmente.";
 answers[73] = choices[73][0];
 units[73] = "10";
 comments[73] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[74]= "75)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[74]= new Array();
 choices[74][0] = "Los Derechos y Deberes fundamentales.";
 choices[74][1] = "La Corona.";
 choices[74][2] = "El Poder Judicial.";
 choices[74][3] = "Las Cortes Generales.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 267. CONSTITUCION1978";


