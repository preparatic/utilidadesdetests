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

//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[0]= "1)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[0]= new Array();
 choices[0][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[0][1] = "Ninguna de las respuestas es correcta.";
 choices[0][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[0][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[1]= "2)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[1]= new Array();
 choices[1][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[1][1] = "Programa de cartas de servicios";
 choices[1][2] = "Programa para la mejora continua de las organizaciones.";
 choices[1][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[1] = choices[1][2];
 units[1] = "18, 20";
 comments[1] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[2]= new Array();
 choices[2][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[2][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[2][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[2][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[3]= "4)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[3]= new Array();
 choices[3][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[3][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[3][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[3][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[3] = choices[3][3];
 units[3] = "14";
 comments[3] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[4]= "5)  En cuanto al an&aacute;lisis DAFO:";
 choices[4]= new Array();
 choices[4][0] = "Considera detallada y exclusivamente factores internos.";
 choices[4][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[4][2] = "Considera detallada y exclusivamente factores externos.";
 choices[4][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[4] = choices[4][1];
 units[4] = "83";
 comments[4] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[5]= "6)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[5]= new Array();
 choices[5][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[5][1] = "Uno de sus miembros.";
 choices[5][2] = "La Comisi&oacute;n.";
 choices[5][3] = "Todas las respuestas son correctas.";
 answers[5] = choices[5][3];
 units[5] = "5";
 comments[5] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[6]= new Array();
 choices[6][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[6][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[6][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[6][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[6] = choices[6][1];
 units[6] = "92";
 comments[6] = "Id Pregunta: 714. INTEGRACION CONTINUA";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[7]= "8)  JNDI se usa para el acceso a:";
 choices[7]= new Array();
 choices[7][0] = "Datos de ficheros";
 choices[7][1] = "Sistemas gestores de bases de datos";
 choices[7][2] = "Directorios de nombres";
 choices[7][3] = "Colas de mensajer&iacute;a";
 answers[7] = choices[7][2];
 units[7] = "64";
 comments[7] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[8]= new Array();
 choices[8][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[8][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[8][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[8][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[8] = choices[8][2];
 units[8] = "22";
 comments[8] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[9]= new Array();
 choices[9][0] = "Anual.";
 choices[9][1] = "Semestral.";
 choices[9][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[9][3] = "Bienal.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[10]= "11)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[10]= new Array();
 choices[10][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[10][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[10][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[10][3] = "Estos sistemas es imposible clasificarlos.";
 answers[10] = choices[10][1];
 units[10] = "119";
 comments[10] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[11]= "12)  El plan nacional de ciudades inteligentes...";
 choices[11]= new Array();
 choices[11][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[11][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[11][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[11][3] = "No existe";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[12][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[12][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[12][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[12] = choices[12][0];
 units[12] = "19";
 comments[12] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[13]= "14)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[13]= new Array();
 choices[13][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[13][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[13][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[13][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[13] = choices[13][1];
 units[13] = "1";
 comments[13] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[14]= new Array();
 choices[14][0] = "Cassandra";
 choices[14][1] = "Riak";
 choices[14][2] = "Avro";
 choices[14][3] = "Zookeeper";
 answers[14] = choices[14][3];
 units[14] = "73";
 comments[14] = "Id Pregunta: 656. ";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[15]= "16)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[15]= new Array();
 choices[15][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[15][1] = "1 de enero de 2015";
 choices[15][2] = "1 de enero de 2016";
 choices[15][3] = "1 de julio de 2016";
 answers[15] = choices[15][3];
 units[15] = "77";
 comments[15] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[16][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[16][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[16][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[16] = choices[16][1];
 units[16] = "14";
 comments[16] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[17]= new Array();
 choices[17][0] = "No discriminaci&oacute;n";
 choices[17][1] = "Cooperaci&oacute;n";
 choices[17][2] = "Colaboraci&oacute;n";
 choices[17][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[17] = choices[17][2];
 units[17] = "18, 20";
 comments[17] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[18]= new Array();
 choices[18][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[18][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[18][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[18][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[18] = choices[18][3];
 units[18] = "10";
 comments[18] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[19]= "20)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[19]= new Array();
 choices[19][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[19][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[19][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[19][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[19] = choices[19][2];
 units[19] = "14";
 comments[19] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[20]= "21)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[20]= new Array();
 choices[20][0] = "Subgrupo A1";
 choices[20][1] = "Subgrupo A2";
 choices[20][2] = "Subgrupo B";
 choices[20][3] = "Subgrupo C1";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[21]= "22)  El Tribunal de Justicia se cre&oacute; en:";
 choices[21]= new Array();
 choices[21][0] = "El Tratado de la CECA.";
 choices[21][1] = "El Tratado de Niza.";
 choices[21][2] = "El Tratado de &Aacute;msterdam.";
 choices[21][3] = "El Tratado de Lisboa.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[22]= new Array();
 choices[22][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[22][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[22][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[22][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[22] = choices[22][0];
 units[22] = "46";
 comments[22] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[23]= "24)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[23]= new Array();
 choices[23][0] = "Las respuestas a) y b) son correctas.";
 choices[23][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[23][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[23][3] = "Las respuestas a) y b) no son correctas.";
 answers[23] = choices[23][0];
 units[23] = "10";
 comments[23] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[24]= "25)  Se consideran interesados en el procedimiento administrativo:";
 choices[24]= new Array();
 choices[24][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[24][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[24][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][0];
 units[24] = "7";
 comments[24] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[25]= "26)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[25]= new Array();
 choices[25][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[25][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[25][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[25][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[25] = choices[25][1];
 units[25] = "35";
 comments[25] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[26][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[26][2] = "Ambas son correctas.";
 choices[26][3] = "La A y B son incorrectas.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[27]= "28)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[27]= new Array();
 choices[27][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[27][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[27][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[27][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[27] = choices[27][1];
 units[27] = "63";
 comments[27] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[28]= new Array();
 choices[28][0] = "El Tratado de Lisboa";
 choices[28][1] = "El Tratado de Amsterdam";
 choices[28][2] = "El Tratado de Niza";
 choices[28][3] = "El Acta &Uacute;nica Europea";
 answers[28] = choices[28][1];
 units[28] = "15";
 comments[28] = "Id Pregunta: 115. ";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[29]= new Array();
 choices[29][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[29][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[29][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[29][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[29] = choices[29][2];
 units[29] = "10";
 comments[29] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[30]= new Array();
 choices[30][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[30][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[30][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[30][3] = "todas son correctas";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[31]= new Array();
 choices[31][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[31][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[31][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[31][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[31] = choices[31][2];
 units[31] = "22";
 comments[31] = "Id Pregunta: 121. ";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[32]= "33)  El Presupuesto por programas sirve para saber...";
 choices[32]= new Array();
 choices[32][0] = "En qu&eacute; nos gastamos el dinero";
 choices[32][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[32][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[32][3] = "Qui&eacute;n se gasta el dinero";
 answers[32] = choices[32][2];
 units[32] = "10";
 comments[32] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[33]= new Array();
 choices[33][0] = "Al Consejo Europeo.";
 choices[33][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[33][2] = "A la Comisi&oacute;n Europea.";
 choices[33][3] = "Al Parlamento Europeo.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[34]= new Array();
 choices[34][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[34][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[34][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[34][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[35]= new Array();
 choices[35][0] = "Consumidores";
 choices[35][1] = "PYMES y Start-ups";
 choices[35][2] = "La Industria";
 choices[35][3] = "Todos los anteriores";
 answers[35] = choices[35][3];
 units[35] = "17";
 comments[35] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[36]= "37)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[36]= new Array();
 choices[36][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[36][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[36][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[36][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[37]= "38)  Indica la respuesta correcta";
 choices[37]= new Array();
 choices[37][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[37][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[37][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[37][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[37] = choices[37][0];
 units[37] = "34, 84";
 comments[37] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[38][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[38][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[38][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[38] = choices[38][0];
 units[38] = "7";
 comments[38] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[39]= new Array();
 choices[39][0] = "10 d&iacute;as.";
 choices[39][1] = "15 d&iacute;as.";
 choices[39][2] = "1 mes.";
 choices[39][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[39] = choices[39][0];
 units[39] = "7";
 comments[39] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta correcta:";
 choices[40]= new Array();
 choices[40][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[40][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[40][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[40][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[40] = choices[40][1];
 units[40] = "98";
 comments[40] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[41]= "42)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[41]= new Array();
 choices[41][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[41][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[41][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[41][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 755. Ley 40/2015";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[42]= "43)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[42]= new Array();
 choices[42][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[42][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[42][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[42][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[42] = choices[42][2];
 units[42] = "7";
 comments[42] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[43]= "44)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[43]= new Array();
 choices[43][0] = "Los Derechos y Deberes fundamentales.";
 choices[43][1] = "La Corona.";
 choices[43][2] = "El Poder Judicial.";
 choices[43][3] = "Las Cortes Generales.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[44]= new Array();
 choices[44][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[44][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[44][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[44][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[45]= new Array();
 choices[45][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[45][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[45][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[45][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[46]= new Array();
 choices[46][0] = "Varios namenodes y varios datanodes por cluster";
 choices[46][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[46][2] = "1 namenode y varios datanodes por cluster";
 choices[46][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[46] = choices[46][2];
 units[46] = "73";
 comments[46] = "Id Pregunta: 661. ";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[47]= new Array();
 choices[47][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[47][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[47][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[48]= "49)  El Tribunal de Justicia est&aacute; formado por:";
 choices[48]= new Array();
 choices[48][0] = "Un Juez de cada Estado miembro.";
 choices[48][1] = "Por dos Jueces de cada Estado miembro.";
 choices[48][2] = "Por veinte Jueces.";
 choices[48][3] = "Por ocho Jueces.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[49]= "50)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[49]= new Array();
 choices[49][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[49][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[49][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[49][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[49] = choices[49][2];
 units[49] = "19";
 comments[49] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[50]= "51)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[50]= new Array();
 choices[50][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[50][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[50][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[50][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[51]= "52)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[51]= new Array();
 choices[51][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[51][1] = "Static &amp; Active process for REsolution Bank.";
 choices[51][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[51][3] = "Super Active REsponse for Banks";
 answers[51] = choices[51][0];
 units[51] = "12";
 comments[51] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[52]= "53)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[52]= new Array();
 choices[52][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[52][1] = "El Congreso de los Diputados.";
 choices[52][2] = "Las Cortes Generales.";
 choices[52][3] = "El Consejo de Ministros";
 answers[52] = choices[52][3];
 units[52] = "1";
 comments[52] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[53]= "54)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[53]= new Array();
 choices[53][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[53][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[53][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[53][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[53] = choices[53][1];
 units[53] = "7";
 comments[53] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[54]= "55)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[54]= new Array();
 choices[54][0] = "Infrastructure as a Service (IaaS)";
 choices[54][1] = "Platform as a Service (PaaS)";
 choices[54][2] = "Software as a Service (SaaS)";
 choices[54][3] = "Application as a Service (AaaS)";
 answers[54] = choices[54][1];
 units[54] = "52";
 comments[54] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[55]= "56)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[55]= new Array();
 choices[55][0] = "Las instituciones comunitarias.";
 choices[55][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[55][2] = "Los Estados miembros.";
 choices[55][3] = "Los nacionales de los Estados miembros.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[56]= "57)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[56]= new Array();
 choices[56][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[56][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[56][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[56][3] = "Todos los anteriores";
 answers[56] = choices[56][3];
 units[56] = "19";
 comments[56] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[57]= "58)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[57]= new Array();
 choices[57][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[57][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[57][2] = "el Subdirector General que el Delegado designe";
 choices[57][3] = "el Secretario de Estado";
 answers[57] = choices[57][0];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[58]= new Array();
 choices[58][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[58][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[58][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[58][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[59]= "60)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[59]= new Array();
 choices[59][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[59][1] = "el Consejo de Estado";
 choices[59][2] = "el Congreso";
 choices[59][3] = "las Cortes Generales";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[60]= new Array();
 choices[60][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[60][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[60][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[60][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[60] = choices[60][2];
 units[60] = "77";
 comments[60] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[61]= "62)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[61]= new Array();
 choices[61][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[61][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[61][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[61][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[61] = choices[61][0];
 units[61] = "101";
 comments[61] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[62]= "63)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[62]= new Array();
 choices[62][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[62][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[62][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[62][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[62] = choices[62][2];
 units[62] = "26";
 comments[62] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[63]= new Array();
 choices[63][0] = "Las Cortes Generales.";
 choices[63][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[63][2] = "El Gobierno.";
 choices[63][3] = "El Congreso de los Diputados.";
 answers[63] = choices[63][0];
 units[63] = "10";
 comments[63] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[64]= "65)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[64]= new Array();
 choices[64][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[64][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[64][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[64][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[64] = choices[64][0];
 units[64] = "31";
 comments[64] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[65]= new Array();
 choices[65][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[65][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[65][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[65][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[66]= new Array();
 choices[66][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[66][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[66][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[66][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[67]= new Array();
 choices[67][0] = "De oficio.";
 choices[67][1] = "A solicitud del interesado.";
 choices[67][2] = "De oficio o a solicitud del interesado.";
 choices[67][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[67] = choices[67][2];
 units[67] = "7";
 comments[67] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[68]= new Array();
 choices[68][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[68][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[68][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[68][3] = "Todas son correctas.";
 answers[68] = choices[68][1];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[69]= "70)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[69]= new Array();
 choices[69][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[69][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[69][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[69][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[69] = choices[69][2];
 units[69] = "10";
 comments[69] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[70]= new Array();
 choices[70][0] = "Veinticinco.";
 choices[70][1] = "Veintisiete.";
 choices[70][2] = "Veintinueve.";
 choices[70][3] = "Cuarenta y uno.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[71]= new Array();
 choices[71][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[71][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[71][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[71][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[71] = choices[71][1];
 units[71] = "101";
 comments[71] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[72]= "73)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[72]= new Array();
 choices[72][0] = "El Tratado de Roma, 1957.";
 choices[72][1] = "El Acta &Uacute;nica Europea.";
 choices[72][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[72][3] = "Ninguna es correcta.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[73]= "74)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[73]= new Array();
 choices[73][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[73][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[73][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[73][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[73] = choices[73][3];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[74]= "75)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[74]= new Array();
 choices[74][0] = "Sello electr&oacute;nico";
 choices[74][1] = "Sede electr&oacute;nica";
 choices[74][2] = "Servidor seguro (SSL/TLS)";
 choices[74][3] = "Empleado p&uacute;blico";
 answers[74] = choices[74][2];
 units[74] = "7";
 comments[74] = "Id Pregunta: 26. AGE A1 2015";


