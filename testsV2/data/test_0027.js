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

//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[0]= "1)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[0]= new Array();
 choices[0][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[0][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[0][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[0][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[0] = choices[0][3];
 units[0] = "22";
 comments[0] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[1]= "2)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[1]= new Array();
 choices[1][0] = "El presidente de las Cortes Generales.";
 choices[1][1] = "El Presidente del Gobierno.";
 choices[1][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[1][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[2]= "3)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[2]= new Array();
 choices[2][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[2][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[2][2] = "El Presidente del Gobierno";
 choices[2][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[2] = choices[2][1];
 units[2] = "26";
 comments[2] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[3]= new Array();
 choices[3][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[3][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[3][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[3][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[3] = choices[3][1];
 units[3] = "1";
 comments[3] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[4]= "5)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[4][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[4][2] = "b) y d) son verdaderas";
 choices[4][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[4] = choices[4][1];
 units[4] = "18, 20";
 comments[4] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[5]= "6)  La partida presupuestaria es equivalente a...";
 choices[5]= new Array();
 choices[5][0] = "El sujeto que realiza el gasto";
 choices[5][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[5][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[5][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[6]= "7)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[6]= new Array();
 choices[6][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[6][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[6][2] = "Ambas son correctas.";
 choices[6][3] = "Ambas son incorrectas.";
 answers[6] = choices[6][0];
 units[6] = "14";
 comments[6] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[7]= new Array();
 choices[7][0] = "En t&iacute;tulos-valores.";
 choices[7][1] = "Las respuestas a) y b) son correctas.";
 choices[7][2] = "Las respuestas a) y b) no son correctas.";
 choices[7][3] = "En cuenta.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[8]= new Array();
 choices[8][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[8][1] = "Intervenci&oacute;n formal y material.";
 choices[8][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[8][3] = "Intervenci&oacute;n formal y general.";
 answers[8] = choices[8][1];
 units[8] = "10";
 comments[8] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[9]= "10)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[9]= new Array();
 choices[9][0] = "Sean dirigidas por mujeres";
 choices[9][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[9][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[9][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[10]= "11)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[10]= new Array();
 choices[10][0] = "Subsecretario";
 choices[10][1] = "Subdirector general";
 choices[10][2] = "Secretario de Estado";
 choices[10][3] = "ninguna es correcta";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[11]= new Array();
 choices[11][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[11][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[11][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[11][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[11] = choices[11][1];
 units[11] = "77";
 comments[11] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[12]= new Array();
 choices[12][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[12][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[12][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[12][3] = "El pago de subsidios a parados";
 answers[12] = choices[12][3];
 units[12] = "15";
 comments[12] = "Id Pregunta: 116. ";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[13]= new Array();
 choices[13][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[13][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[13][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[13][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[13] = choices[13][1];
 units[13] = "43";
 comments[13] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[14]= new Array();
 choices[14][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[14][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[14][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[14][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[14] = choices[14][3];
 units[14] = "106";
 comments[14] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[15]= "16)  El recurso de alzada puede interponerse:";
 choices[15]= new Array();
 choices[15][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[15][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[15][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[15][3] = "Ante el Defensor del Pueblo";
 answers[15] = choices[15][1];
 units[15] = "8";
 comments[15] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[16]= "17)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[16]= new Array();
 choices[16][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[16][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[16][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[16][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[16] = choices[16][2];
 units[16] = "47";
 comments[16] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[17][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[17][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[17][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[17] = choices[17][3];
 units[17] = "19";
 comments[17] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[18]= new Array();
 choices[18][0] = "Dos Cap&iacute;tulos.";
 choices[18][1] = "Tres Cap&iacute;tulos.";
 choices[18][2] = "Un Cap&iacute;tulo.";
 choices[18][3] = "Cuatro Cap&iacute;tulos.";
 answers[18] = choices[18][1];
 units[18] = "1";
 comments[18] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[19]= new Array();
 choices[19][0] = "Por Real Decreto.";
 choices[19][1] = "Por Orden del Ministerio del Interior.";
 choices[19][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[19][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[20]= new Array();
 choices[20][0] = "El Consejo Nacional de la Mujer";
 choices[20][1] = "El Consejo de la Mujer";
 choices[20][2] = "El Instituto de la Mujer";
 choices[20][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[20] = choices[20][3];
 units[20] = "14";
 comments[20] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[21]= "22)  Las Administraciones P&uacute;blicas:";
 choices[21]= new Array();
 choices[21][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[21][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[21][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[21][3] = "todas son correctas";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[22]= new Array();
 choices[22][0] = "Fue elaborada y aprobada por la CETIC";
 choices[22][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[22][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[22][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[23]= new Array();
 choices[23][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[23][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[23][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[23][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[23] = choices[23][3];
 units[23] = "19";
 comments[23] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[24]= "25)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[24][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[24][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[24][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[25]= new Array();
 choices[25][0] = "DoS";
 choices[25][1] = "Phishing";
 choices[25][2] = "Sniffing";
 choices[25][3] = "Spoofing";
 answers[25] = choices[25][3];
 units[25] = "119";
 comments[25] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[26]= new Array();
 choices[26][0] = "732";
 choices[26][1] = "626";
 choices[26][2] = "786";
 choices[26][3] = "360";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[27]= new Array();
 choices[27][0] = "El Ministro de Econom&iacute;a.";
 choices[27][1] = "El Gobierno.";
 choices[27][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[27][3] = "El Presidente del Gobierno.";
 answers[27] = choices[27][1];
 units[27] = "10";
 comments[27] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[28][1] = "Por Orden Ministerial.";
 choices[28][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[28][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[29]= new Array();
 choices[29][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[29][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[29][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[29][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[30]= new Array();
 choices[30][0] = "De los derechos y deberes fundamentales.";
 choices[30][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[30][2] = "Derechos y libertades.";
 choices[30][3] = "De la Corona.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[31]= "32)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[31]= new Array();
 choices[31][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[31][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[31][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[31][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[31] = choices[31][2];
 units[31] = "85";
 comments[31] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[32]= new Array();
 choices[32][0] = "Flexibilidad para variar el servicio o producto";
 choices[32][1] = "Eliminar desperdicios";
 choices[32][2] = "Decidir lo m&aacute;s tarde posible";
 choices[32][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[32] = choices[32][0];
 units[32] = "34";
 comments[32] = "Id Pregunta: 719. Metodologias Lean";


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


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[34]= "35)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[34]= new Array();
 choices[34][0] = "Estrasburgo.";
 choices[34][1] = "Bruselas.";
 choices[34][2] = "Luxemburgo.";
 choices[34][3] = "Holanda.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[35]= "36)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[35]= new Array();
 choices[35][0] = "Ejecutivo";
 choices[35][1] = "Limitativo";
 choices[35][2] = "Estimativo";
 choices[35][3] = "Progresivo";
 answers[35] = choices[35][1];
 units[35] = "10";
 comments[35] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[36]= "37)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[36]= new Array();
 choices[36][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[36][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[36][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[36][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[36] = choices[36][0];
 units[36] = "43";
 comments[36] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[37]= "38)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[37]= new Array();
 choices[37][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[37][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[37][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[37][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[37] = choices[37][1];
 units[37] = "7";
 comments[37] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[38]= "39)  En las Administraciones P&uacute;blicas...";
 choices[38]= new Array();
 choices[38][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[38][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[38][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[38][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[38] = choices[38][0];
 units[38] = "10";
 comments[38] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[39]= "40)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[39]= new Array();
 choices[39][0] = "Alrededor de un 26% del PIB";
 choices[39][1] = "Alrededor de un 11% del PIB";
 choices[39][2] = "Alrededor de un 34% del PIB";
 choices[39][3] = "Alrededor de un 7% del PIB";
 answers[39] = choices[39][1];
 units[39] = "12";
 comments[39] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[40]= new Array();
 choices[40][0] = "Crecimiento inteligente.";
 choices[40][1] = "Crecimiento inclusivo.";
 choices[40][2] = "Crecimiento sostenible.";
 choices[40][3] = "Crecimiento integrador.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[41]= "42)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[41]= new Array();
 choices[41][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[41][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[41][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[41][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[41] = choices[41][0];
 units[41] = "34, 84";
 comments[41] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[42]= new Array();
 choices[42][0] = "Un diputado y un senador, cada una de ellas";
 choices[42][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[42][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[42][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[43]= new Array();
 choices[43][0] = "Compatibilidad";
 choices[43][1] = "Interoperabilidad";
 choices[43][2] = "Reutilizaci&oacute;n";
 choices[43][3] = "Accesibilidad";
 answers[43] = choices[43][0];
 units[43] = "22";
 comments[43] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[44]= "45)  Son servicios declarados compartidos:";
 choices[44]= new Array();
 choices[44][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[44][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[44][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[44][3] = "Todos los anteriores";
 answers[44] = choices[44][3];
 units[44] = "19";
 comments[44] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[45]= new Array();
 choices[45][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[45][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[45][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[45][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[45] = choices[45][3];
 units[45] = "22";
 comments[45] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[46]= new Array();
 choices[46][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[46][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[46][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[46][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[46] = choices[46][1];
 units[46] = "18, 20";
 comments[46] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[47]= "48)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[47]= new Array();
 choices[47][0] = "Al Gobierno.";
 choices[47][1] = "A las Cortes Generales.";
 choices[47][2] = "Al Poder Judicial.";
 choices[47][3] = "Al Congreso de los Diputados.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[48]= "49)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[48]= new Array();
 choices[48][0] = "Ejecuci&oacute;n";
 choices[48][1] = "Adjudicaci&oacute;n";
 choices[48][2] = "Licitaci&oacute;n";
 choices[48][3] = "Formalizaci&oacute;n";
 answers[48] = choices[48][3];
 units[48] = "37";
 comments[48] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[49]= "50)  Tienen la condici&oacute;n de alto cargo:";
 choices[49]= new Array();
 choices[49][0] = "los &oacute;rganos superiores";
 choices[49][1] = "los &oacute;rganos superiores y directivos";
 choices[49][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[49][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[50][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[50][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[50][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[51]= "52)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[51]= new Array();
 choices[51][0] = "la Administraci&oacute;n General del Estado";
 choices[51][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[51][2] = "las Entidades Locales";
 choices[51][3] = "todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "7";
 comments[51] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[52]= new Array();
 choices[52][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[52][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[52][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[52][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[52] = choices[52][1];
 units[52] = "19";
 comments[52] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[53][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[53][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[53][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[53] = choices[53][3];
 units[53] = "43";
 comments[53] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[54]= new Array();
 choices[54][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[54][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[54][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[54][3] = "Todas lo son";
 answers[54] = choices[54][0];
 units[54] = "17";
 comments[54] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[55]= "56)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[55]= new Array();
 choices[55][0] = "Al Presidente del Gobierno.";
 choices[55][1] = "A las Cortes Generales";
 choices[55][2] = "A los electores.";
 choices[55][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[55] = choices[55][3];
 units[55] = "1";
 comments[55] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[56]= "57)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[56]= new Array();
 choices[56][0] = "El Tratado de Roma, 1957.";
 choices[56][1] = "El Acta &Uacute;nica Europea.";
 choices[56][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[56][3] = "Ninguna es correcta.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[57]= new Array();
 choices[57][0] = "Al Consejo Europeo.";
 choices[57][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[57][2] = "A la Comisi&oacute;n Europea.";
 choices[57][3] = "Al Parlamento Europeo.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[58]= new Array();
 choices[58][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[58][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[58][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[58][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[58] = choices[58][3];
 units[58] = "26";
 comments[58] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[59]= new Array();
 choices[59][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[59][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[59][2] = "Fomentar el despliegue de redes y servicios";
 choices[59][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[59] = choices[59][0];
 units[59] = "19";
 comments[59] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[60]= "61)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[60]= new Array();
 choices[60][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[60][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[60][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[60][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[60] = choices[60][2];
 units[60] = "22";
 comments[60] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[61]= "62)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[61]= new Array();
 choices[61][0] = "Interoperabilidad";
 choices[61][1] = "Integridad";
 choices[61][2] = "Capital humano";
 choices[61][3] = "Trazabilidad";
 answers[61] = choices[61][2];
 units[61] = "19";
 comments[61] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "VMware ESX";
 choices[62][1] = "XenServer";
 choices[62][2] = "Alfresco";
 choices[62][3] = "Microsoft Hyper-V";
 answers[62] = choices[62][2];
 units[62] = "54";
 comments[62] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[63]= new Array();
 choices[63][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[63][1] = "Entrada en la Uni&oacute;n Europea";
 choices[63][2] = "Pactos de la Moncloa";
 choices[63][3] = "Ingreso en la ONU";
 answers[63] = choices[63][3];
 units[63] = "12";
 comments[63] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[64]= new Array();
 choices[64][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[64][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[64][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[64][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[64] = choices[64][2];
 units[64] = "26";
 comments[64] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[65]= "66)  La iniciativa legislativa corresponde:";
 choices[65]= new Array();
 choices[65][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[65][1] = "Al rey y al Gobierno.";
 choices[65][2] = "Al Congreso, al Senado y al Rey.";
 choices[65][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[66]= new Array();
 choices[66][0] = "Ley 50/1997, del Gobierno.";
 choices[66][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[66][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[66][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[67]= "68)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[67]= new Array();
 choices[67][0] = "Gesti&oacute;n de la disponibilidad";
 choices[67][1] = "Gesti&oacute;n de la demanda";
 choices[67][2] = "Gesti&oacute;n de entregas";
 choices[67][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "101";
 comments[67] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[68]= "69)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[68]= new Array();
 choices[68][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[68][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[68][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[68][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[68] = choices[68][2];
 units[68] = "121";
 comments[68] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[69]= new Array();
 choices[69][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[69][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[69][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[69][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[70]= new Array();
 choices[70][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[70][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[70][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[70][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[70] = choices[70][1];
 units[70] = "12";
 comments[70] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[71]= "72)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[71]= new Array();
 choices[71][0] = "Peters";
 choices[71][1] = "Hollingsworth";
 choices[71][2] = "Manuel Castells";
 choices[71][3] = "Gaebler";
 answers[71] = choices[71][1];
 units[71] = "18, 20";
 comments[71] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[72]= "73)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[72]= new Array();
 choices[72][0] = "2.400 euros";
 choices[72][1] = "4.000 euros";
 choices[72][2] = "3.200 euros";
 choices[72][3] = "1.600 euros";
 answers[72] = choices[72][1];
 units[72] = "37";
 comments[72] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[73]= "74)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[73]= new Array();
 choices[73][0] = "Programaci&oacute;n estructurada.";
 choices[73][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[73][2] = "Programaci&oacute;n extrema.";
 choices[73][3] = "Programaci&oacute;n Espuria.";
 answers[73] = choices[73][2];
 units[73] = "92";
 comments[73] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[74]= "75)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[74]= new Array();
 choices[74][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[74][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[74][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[74][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "50";
 comments[74] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


