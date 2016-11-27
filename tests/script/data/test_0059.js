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

//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[0]= "1)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[0]= new Array();
 choices[0][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[0][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[0][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[0][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[0] = choices[0][1];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[1]= "2)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[1]= new Array();
 choices[1][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[1][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[1][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[1][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[1] = choices[1][0];
 units[1] = "31";
 comments[1] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[2]= new Array();
 choices[2][0] = "PostgreSQL";
 choices[2][1] = "Datawarehouse";
 choices[2][2] = "Snowflake";
 choices[2][3] = "CouchDB";
 answers[2] = choices[2][0];
 units[2] = "61";
 comments[2] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[3]= new Array();
 choices[3][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[3][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[3][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[3][3] = "El pago de subsidios a parados";
 answers[3] = choices[3][3];
 units[3] = "15";
 comments[3] = "Id Pregunta: 116. ";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[4][1] = "Auditor&iacute;a operativa.";
 choices[4][2] = "Auditor&iacute;a de cumplimiento.";
 choices[4][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[5]= "6)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[5]= new Array();
 choices[5][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[5][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[5][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[5][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[5] = choices[5][2];
 units[5] = "19";
 comments[5] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[6]= new Array();
 choices[6][0] = "Cuatro.";
 choices[6][1] = "Ninguno.";
 choices[6][2] = "Dos.";
 choices[6][3] = "Seis.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[7]= "8)  Los criptosistemas pueden clasificarse en:";
 choices[7]= new Array();
 choices[7][0] = "Concretos, Estables e Inestables.";
 choices[7][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[7][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[7][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[7] = choices[7][3];
 units[7] = "76";
 comments[7] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[8]= "9)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[8]= new Array();
 choices[8][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[8][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[8][2] = "Al Congreso de los Diputados.";
 choices[8][3] = "Al Gobierno.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[9]= "10)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[9]= new Array();
 choices[9][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[9][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[9][2] = "Un programa de igualdad.";
 choices[9][3] = "Un estatuto de igualdad.";
 answers[9] = choices[9][0];
 units[9] = "14";
 comments[9] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[10]= "11)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[10]= new Array();
 choices[10][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[10][1] = "mediante resoluci&oacute;n judicial especial";
 choices[10][2] = "&uacute;nicamente mediante poder notarial";
 choices[10][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[11]= "12)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[11]= new Array();
 choices[11][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[11][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[11][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[11][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[11] = choices[11][3];
 units[11] = "43";
 comments[11] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[12]= "13)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[12]= new Array();
 choices[12][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[12][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[12][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[12][3] = "Todas son correctas.";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[13][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[13][2] = "Ambas son correctas.";
 choices[13][3] = "La A y B son incorrectas.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[14]= new Array();
 choices[14][0] = "Al Consejo Europeo.";
 choices[14][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[14][2] = "A la Comisi&oacute;n Europea.";
 choices[14][3] = "Al Parlamento Europeo.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[15]= "16)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[15]= new Array();
 choices[15][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[15][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[15][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[15][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[16]= "17)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[16]= new Array();
 choices[16][0] = "Decretos Legislativos.";
 choices[16][1] = "Decretos-leyes.";
 choices[16][2] = "Leyes de bases.";
 choices[16][3] = "Reales Decretos del Consejo de Ministros.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[17]= "18)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[17]= new Array();
 choices[17][0] = "la capital del pa&iacute;s";
 choices[17][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[17][2] = "cada una de las provincias";
 choices[17][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[18]= "19)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[18]= new Array();
 choices[18][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[18][1] = "el Consejo de Estado";
 choices[18][2] = "el Congreso";
 choices[18][3] = "las Cortes Generales";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[19]= "20)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[19]= new Array();
 choices[19][0] = "Ejecutivo";
 choices[19][1] = "Limitativo";
 choices[19][2] = "Estimativo";
 choices[19][3] = "Progresivo";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[20]= new Array();
 choices[20][0] = "El Parlamento y el Consejo.";
 choices[20][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[20][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[20][3] = "La Comisi&oacute;n y el Consejo.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[21]= "22)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[21]= new Array();
 choices[21][0] = "Prevenir las conductas discriminatorias.";
 choices[21][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[21][2] = "Todas son correctas.";
 choices[21][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[22]= "23)  Son bases de datos NoSQL:";
 choices[22]= new Array();
 choices[22][0] = "MongoDB y Maria DB";
 choices[22][1] = "HBase y Dynamo";
 choices[22][2] = "MariaDB, Cassandra y BigTable";
 choices[22][3] = "La A) y la C)";
 answers[22] = choices[22][1];
 units[22] = "73";
 comments[22] = "Id Pregunta: 104. ";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[23]= new Array();
 choices[23][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[23][1] = "Pasivos financieros y transferencias de capital.";
 choices[23][2] = "Activos financieros y pasivos financieros.";
 choices[23][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[24]= "25)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[24]= new Array();
 choices[24][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[24][1] = "Publicidad de las normas.";
 choices[24][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[24][3] = "Coordinaci&oacute;n normativa.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[25]= new Array();
 choices[25][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[25][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[25][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[25][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[25] = choices[25][0];
 units[25] = "73";
 comments[25] = "Id Pregunta: 654. ";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[26]= "27)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[26]= new Array();
 choices[26][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[26][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[26][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[26][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[26] = choices[26][0];
 units[26] = "101";
 comments[26] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[27]= "28)  La recusaci&oacute;n se plantear&aacute;...";
 choices[27]= new Array();
 choices[27][0] = "S&oacute;lo verbalmente";
 choices[27][1] = "S&oacute;lo por escrito";
 choices[27][2] = "Verbalmente o por escrito";
 choices[27][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[28]= new Array();
 choices[28][0] = "Cinco.";
 choices[28][1] = "Dos.";
 choices[28][2] = "Cuatro.";
 choices[28][3] = "Siete.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[29]= "30)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[29]= new Array();
 choices[29][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[29][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[29][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[29][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[29] = choices[29][3];
 units[29] = "12";
 comments[29] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[30]= new Array();
 choices[30][0] = "Directiva 95/46/CE";
 choices[30][1] = "Directiva 1999/93/CE";
 choices[30][2] = "Directiva 2000/31/CE";
 choices[30][3] = "Directiva 2003/98/CE";
 answers[30] = choices[30][1];
 units[30] = "77";
 comments[30] = "Id Pregunta: 682. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[31]= new Array();
 choices[31][0] = "El Parlamento y el Consejo.";
 choices[31][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[31][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[31][3] = "La Comisi&oacute;n y el Consejo.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[32]= "33)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[32]= new Array();
 choices[32][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[32][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[32][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[32][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[33]= "34)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[33]= new Array();
 choices[33][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[33][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[33][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[33][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[33] = choices[33][2];
 units[33] = "7";
 comments[33] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[34]= "35)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[34]= new Array();
 choices[34][0] = "Un informe de g&eacute;nero.";
 choices[34][1] = "La variable de sexo.";
 choices[34][2] = "La variable de edad.";
 choices[34][3] = "La variable de comportamiento.";
 answers[34] = choices[34][1];
 units[34] = "14";
 comments[34] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[35]= new Array();
 choices[35][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[35][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[35][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[35][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[35] = choices[35][3];
 units[35] = "77";
 comments[35] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[36]= new Array();
 choices[36][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[36][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[36][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[36][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[37]= new Array();
 choices[37][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[37][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[37][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[37][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[37] = choices[37][0];
 units[37] = "7";
 comments[37] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[38]= "39)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[38]= new Array();
 choices[38][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[38][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[38][2] = "Ambas son correctas.";
 choices[38][3] = "A y B son incorrectas.";
 answers[38] = choices[38][2];
 units[38] = "14";
 comments[38] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[39]= new Array();
 choices[39][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[39][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[39][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[39][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[39] = choices[39][3];
 units[39] = "22";
 comments[39] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[40][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[40][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[40][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[41]= "42)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[41][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[41][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[41][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[41] = choices[41][2];
 units[41] = "47";
 comments[41] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[42]= "43)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[42]= new Array();
 choices[42][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[42][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[42][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[42][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[42] = choices[42][2];
 units[42] = "22";
 comments[42] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[43]= "44)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[43]= new Array();
 choices[43][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[43][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[43][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[43][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[43] = choices[43][2];
 units[43] = "10";
 comments[43] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[44]= "45)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[44]= new Array();
 choices[44][0] = "De las disposiciones favorables.";
 choices[44][1] = "De las disposiciones sancionadoras no favorables.";
 choices[44][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[44][3] = "Las respuestas b) y c) son correctas.";
 answers[44] = choices[44][3];
 units[44] = "1";
 comments[44] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[45]= new Array();
 choices[45][0] = "Art&iacute;culo 14 CE.";
 choices[45][1] = "Art&iacute;culo 9.2 CE.";
 choices[45][2] = "Art&iacute;culo 9.1 CE.";
 choices[45][3] = "Art&iacute;culo 13 CE.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[46]= "47)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[46]= new Array();
 choices[46][0] = "El presidente de las Cortes Generales.";
 choices[46][1] = "El Presidente del Gobierno.";
 choices[46][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[46][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[47]= "48)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[47]= new Array();
 choices[47][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[47][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[47][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[47][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[48]= "49)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[48]= new Array();
 choices[48][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[48][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[48][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[48][3] = "Todos los anteriores";
 answers[48] = choices[48][3];
 units[48] = "19";
 comments[48] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[49][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[49][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[49][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[49] = choices[49][1];
 units[49] = "98";
 comments[49] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[50]= new Array();
 choices[50][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[50][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[50][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[50][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[51]= "52)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[51]= new Array();
 choices[51][0] = "De un mes si el acto fuera presunto";
 choices[51][1] = "De un mes si el acto fuera expreso";
 choices[51][2] = "De un mes en cualquier caso";
 choices[51][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[51] = choices[51][1];
 units[51] = "8";
 comments[51] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[52]= new Array();
 choices[52][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[52][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[52][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][1];
 units[52] = "19";
 comments[52] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[53]= "54)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[53]= new Array();
 choices[53][0] = "P&uacute;blica.";
 choices[53][1] = "Privada.";
 choices[53][2] = "A y B son correctas.";
 choices[53][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[54]= "55)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[54][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[54][2] = "b) y d) son verdaderas";
 choices[54][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[54] = choices[54][1];
 units[54] = "18, 20";
 comments[54] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[55]= "56)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[55]= new Array();
 choices[55][0] = "El Delegado del Gobierno.";
 choices[55][1] = "El Subdelegado del Gobierno.";
 choices[55][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[55][3] = "El Gobernador Civil.";
 answers[55] = choices[55][2];
 units[55] = "1";
 comments[55] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[56]= new Array();
 choices[56][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[56][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[56][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[56][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[56] = choices[56][0];
 units[56] = "46";
 comments[56] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[57]= new Array();
 choices[57][0] = "Drupal";
 choices[57][1] = "Cassandra";
 choices[57][2] = "Wordpress";
 choices[57][3] = "OpenCMS";
 answers[57] = choices[57][1];
 units[57] = "99";
 comments[57] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[58]= "59)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[58]= new Array();
 choices[58][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[58][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[58][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[58][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[59]= new Array();
 choices[59][0] = "Burn-up chart";
 choices[59][1] = "Arquitectural Skype";
 choices[59][2] = "Burn-down chart";
 choices[59][3] = "Definition of done";
 answers[59] = choices[59][1];
 units[59] = "34, 84";
 comments[59] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[60]= "61)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[60]= new Array();
 choices[60][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[60][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[60][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[60][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[61]= new Array();
 choices[61][0] = "Cassandra";
 choices[61][1] = "Riak";
 choices[61][2] = "Avro";
 choices[61][3] = "Zookeeper";
 answers[61] = choices[61][3];
 units[61] = "73";
 comments[61] = "Id Pregunta: 656. ";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[62]= "63)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[62]= new Array();
 choices[62][0] = "Son actos normativos.";
 choices[62][1] = "Poseen alcance general.";
 choices[62][2] = "No son obligatorias.";
 choices[62][3] = "Son actos individuales no normativos.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[63]= new Array();
 choices[63][0] = "A los cinco a&ntilde;os.";
 choices[63][1] = "A los dos a&ntilde;os.";
 choices[63][2] = "A los tres a&ntilde;os.";
 choices[63][3] = "A los cuatro a&ntilde;os.";
 answers[63] = choices[63][0];
 units[63] = "10";
 comments[63] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[64]= new Array();
 choices[64][0] = "Yarn";
 choices[64][1] = "Flume";
 choices[64][2] = "Hive";
 choices[64][3] = "BizAgi";
 answers[64] = choices[64][3];
 units[64] = "73";
 comments[64] = "Id Pregunta: 655. ";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[65]= "66)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[65]= new Array();
 choices[65][0] = "los Secretarios generales t&eacute;cnicos";
 choices[65][1] = "los Directores generales";
 choices[65][2] = "los Secretarios generales";
 choices[65][3] = "los Subsecretarios";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[66]= new Array();
 choices[66][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[66][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[66][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[66][3] = "El Instituto de la Mujer de Extremadura.";
 answers[66] = choices[66][3];
 units[66] = "14";
 comments[66] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[67]= "68)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[67]= new Array();
 choices[67][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[67][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[67][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[67][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[67] = choices[67][3];
 units[67] = "62";
 comments[67] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[68]= "69)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[68]= new Array();
 choices[68][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[68][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[68][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[68][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[68] = choices[68][3];
 units[68] = "5";
 comments[68] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[69]= "70)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[69]= new Array();
 choices[69][0] = "Tener una estructura institucional.";
 choices[69][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[69][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[69][3] = "Todas las respuestas son correctas.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[70]= "71)  La Administraci&oacute;n General del Estado se organiza:";
 choices[70]= new Array();
 choices[70][0] = "en Ministerios";
 choices[70][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[70][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[70][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[70] = choices[70][1];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[71]= "72)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[71]= new Array();
 choices[71][0] = "Cifrada";
 choices[71][1] = "Conjunta";
 choices[71][2] = "Sistem&aacute;tica";
 choices[71][3] = "Todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[72]= "73)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[72]= new Array();
 choices[72][0] = "Discriminaci&oacute;n indirecta.";
 choices[72][1] = "Discriminaci&oacute;n directa.";
 choices[72][2] = "Discriminaci&oacute;n por maternidad.";
 choices[72][3] = "Discriminaci&oacute;n abusiva.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[73]= "74)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[73]= new Array();
 choices[73][0] = "Estrasburgo.";
 choices[73][1] = "Bruselas.";
 choices[73][2] = "Luxemburgo.";
 choices[73][3] = "Holanda.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[74]= "75)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[74]= new Array();
 choices[74][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[74][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[74][2] = "a y b son correctas";
 choices[74][3] = "a y b son incorrectas";
 answers[74] = choices[74][0];
 units[74] = "7";
 comments[74] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


