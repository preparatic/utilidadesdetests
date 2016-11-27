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

//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[0]= new Array();
 choices[0][0] = "23";
 choices[0][1] = "20";
 choices[0][2] = "14";
 choices[0][3] = "18";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[1]= new Array();
 choices[1][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[1][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[1][2] = "Fomentar el despliegue de redes y servicios";
 choices[1][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[1] = choices[1][0];
 units[1] = "19";
 comments[1] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[2]= "3)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[2]= new Array();
 choices[2][0] = "Cabr&aacute; recurso de alzada";
 choices[2][1] = "Cabr&aacute; el nuevo protesto";
 choices[2][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[2][3] = "No cabr&aacute; recurso alguno";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[3]= "4)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[3]= new Array();
 choices[3][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[3][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[3][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[3][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[3] = choices[3][2];
 units[3] = "22";
 comments[3] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[4]= "5)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[4]= new Array();
 choices[4][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[4][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[4][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[4][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[4] = choices[4][2];
 units[4] = "1";
 comments[4] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[5]= "6)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Almacenamiento orientado a columnas";
 choices[5][1] = "Framework MapReduce";
 choices[5][2] = "OLTP";
 choices[5][3] = "Bases de datos clave-valor";
 answers[5] = choices[5][2];
 units[5] = "73";
 comments[5] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[6]= new Array();
 choices[6][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[6][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[6][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[6][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[6] = choices[6][0];
 units[6] = "28";
 comments[6] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[7]= "8)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[7]= new Array();
 choices[7][0] = "Ejecutivo";
 choices[7][1] = "Limitativo";
 choices[7][2] = "Estimativo";
 choices[7][3] = "Progresivo";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[8]= "9)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[8]= new Array();
 choices[8][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[8][1] = "Publicidad de las normas.";
 choices[8][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[8][3] = "Coordinaci&oacute;n normativa.";
 answers[8] = choices[8][2];
 units[8] = "1";
 comments[8] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[9]= new Array();
 choices[9][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[9][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[9][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[9][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[9] = choices[9][2];
 units[9] = "10";
 comments[9] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[10]= "11)  Las Universidades p&uacute;blicas:";
 choices[10]= new Array();
 choices[10][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[10][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[10][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[10][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[11]= new Array();
 choices[11][0] = "El Presidente del Senado";
 choices[11][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[11][2] = "El Presidente del Gobierno";
 choices[11][3] = "El Presidente de las Cortes Generales";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[12]= "13)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[12]= new Array();
 choices[12][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[12][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[12][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[12][3] = "Todas son correctas.";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[13]= new Array();
 choices[13][0] = "Backup full.";
 choices[13][1] = "Backup diferencial.";
 choices[13][2] = "Backup incremental.";
 choices[13][3] = "Backup deduplicado.";
 answers[13] = choices[13][3];
 units[13] = "53";
 comments[13] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[14]= "15)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[14]= new Array();
 choices[14][0] = "6 TB.";
 choices[14][1] = "5 TB.";
 choices[14][2] = "7 TB.";
 choices[14][3] = "3 TB.";
 answers[14] = choices[14][1];
 units[14] = "53";
 comments[14] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[15]= "16)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[15]= new Array();
 choices[15][0] = "Con el a&ntilde;o anterior.";
 choices[15][1] = "Con los tres a&ntilde;os anteriores.";
 choices[15][2] = "Con el a&ntilde;o natural.";
 choices[15][3] = "Con los dos a&ntilde;os anteriores.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[16]= new Array();
 choices[16][0] = "En 2011";
 choices[16][1] = "En 2013";
 choices[16][2] = "En 2015";
 choices[16][3] = "En 2016";
 answers[16] = choices[16][2];
 units[16] = "17";
 comments[16] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[17]= new Array();
 choices[17][0] = "Fue elaborada y aprobada por la CETIC";
 choices[17][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[17][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[17][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[17] = choices[17][1];
 units[17] = "19";
 comments[17] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Org&aacute;nica.";
 choices[18][1] = "Contable.";
 choices[18][2] = "Econ&oacute;mica.";
 choices[18][3] = "Por programas.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[19]= "20)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[19][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[19][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[19][3] = "Todas las anteriores son ciertas";
 answers[19] = choices[19][3];
 units[19] = "8";
 comments[19] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[20]= "21)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[20]= new Array();
 choices[20][0] = "Cinco a&ntilde;os.";
 choices[20][1] = "Cuatro a&ntilde;os.";
 choices[20][2] = "Tres a&ntilde;os.";
 choices[20][3] = "Seis meses.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[21]= new Array();
 choices[21][0] = "Un programa presupuestario.";
 choices[21][1] = "Un concepto presupuestario.";
 choices[21][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[21][3] = "Un cr&eacute;dito presupuestario.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[22]= "23)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[22]= new Array();
 choices[22][0] = "Al Presidente del Gobierno.";
 choices[22][1] = "A las Cortes Generales";
 choices[22][2] = "A los electores.";
 choices[22][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[22] = choices[22][3];
 units[22] = "1";
 comments[22] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[23]= new Array();
 choices[23][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[23][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[23][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[23][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[24]= "25)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[24]= new Array();
 choices[24][0] = "por Real Decreto";
 choices[24][1] = "reglamentariamente";
 choices[24][2] = "mediante Ley";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[25]= new Array();
 choices[25][0] = "Los principios rectores";
 choices[25][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[25][2] = "Los hitos para su desarrollo gradual";
 choices[25][3] = "Todos los anteriores";
 answers[25] = choices[25][3];
 units[25] = "19";
 comments[25] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[26]= "27)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[26]= new Array();
 choices[26][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[26][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[26][2] = "La normativa reguladora de cada derecho.";
 choices[26][3] = "Ley 50/1997, del Gobierno.";
 answers[26] = choices[26][2];
 units[26] = "10";
 comments[26] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[27]= new Array();
 choices[27][0] = "De los derechos y deberes fundamentales.";
 choices[27][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[27][2] = "Derechos y libertades.";
 choices[27][3] = "De la Corona.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[28]= "29)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[28]= new Array();
 choices[28][0] = "los Subsecretarios y los Secretarios generales";
 choices[28][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[28][2] = "los Secretarios de Estado y los Directores generales";
 choices[28][3] = "los Ministros y los Secretarios de Estado";
 answers[28] = choices[28][3];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[29]= "30)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[29]= new Array();
 choices[29][0] = "Proveer de manera compartida servicios comunes";
 choices[29][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[29][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[29][3] = "Transparencia";
 answers[29] = choices[29][1];
 units[29] = "28";
 comments[29] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[30]= "31)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[30]= new Array();
 choices[30][0] = "Diciembre de 1987.";
 choices[30][1] = "Septiembre de 1989.";
 choices[30][2] = "Octubre de 1990.";
 choices[30][3] = "Noviembre de 1980.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[31]= "32)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[31]= new Array();
 choices[31][0] = "Son actos individuales no normativos.";
 choices[31][1] = "Poseen alcance general.";
 choices[31][2] = "Son actos normativos.";
 choices[31][3] = "No son obligatorias.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[32]= "33)  La recusaci&oacute;n se plantea...";
 choices[32]= new Array();
 choices[32][0] = "Antes de iniciado el procedimiento";
 choices[32][1] = "Una vez iniciado el procedimiento";
 choices[32][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[32][3] = "En cualquier momento del procedimiento";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[33]= "34)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[33]= new Array();
 choices[33][0] = "A los ministros.";
 choices[33][1] = "Las respuestas a) y b) son correctas.";
 choices[33][2] = "Las respuestas a) y b) no son correctas.";
 choices[33][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[33] = choices[33][1];
 units[33] = "10";
 comments[33] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[34]= "35)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[34]= new Array();
 choices[34][0] = "0";
 choices[34][1] = "1";
 choices[34][2] = "Tantos como peticiones concurrentes tenga.";
 choices[34][3] = "Tantos como le permita la memoria de la JVM.";
 answers[34] = choices[34][1];
 units[34] = "64";
 comments[34] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[35]= "36)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[35]= new Array();
 choices[35][0] = "150 trabajadores/as.";
 choices[35][1] = "200 trabajadores/as.";
 choices[35][2] = "250 trabajadores/as.";
 choices[35][3] = "300 trabajadores/as.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[36]= "37)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[36]= new Array();
 choices[36][0] = "623";
 choices[36][1] = "649";
 choices[36][2] = "626";
 choices[36][3] = "565";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[37]= "38)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[37]= new Array();
 choices[37][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[37][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[37][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[37][3] = "Todos las anteriores son ciertas.";
 answers[37] = choices[37][3];
 units[37] = "12";
 comments[37] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[38]= new Array();
 choices[38][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[38][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[38][2] = "la falta de interoperabilidad.";
 choices[38][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[39]= new Array();
 choices[39][0] = "PostgreSQL";
 choices[39][1] = "Datawarehouse";
 choices[39][2] = "Snowflake";
 choices[39][3] = "CouchDB";
 answers[39] = choices[39][0];
 units[39] = "61";
 comments[39] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[40]= "41)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[40]= new Array();
 choices[40][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[40][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[40][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[40][3] = "Todas las anteriores son correctas.";
 answers[40] = choices[40][3];
 units[40] = "47";
 comments[40] = "Id Pregunta: 674. Receta electr&oacute;nica";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[41]= "42)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[41]= new Array();
 choices[41][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[41][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[41][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[41][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[42]= "43)  JNDI se usa para el acceso a:";
 choices[42]= new Array();
 choices[42][0] = "Datos de ficheros";
 choices[42][1] = "Sistemas gestores de bases de datos";
 choices[42][2] = "Directorios de nombres";
 choices[42][3] = "Colas de mensajer&iacute;a";
 answers[42] = choices[42][2];
 units[42] = "64";
 comments[42] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[43]= new Array();
 choices[43][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[43][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[43][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[43][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "62";
 comments[43] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[44]= "45)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[44]= new Array();
 choices[44][0] = "los Secretarios generales t&eacute;cnicos";
 choices[44][1] = "los Directores generales";
 choices[44][2] = "los Secretarios generales";
 choices[44][3] = "los Subsecretarios";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[45]= "46)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[45]= new Array();
 choices[45][0] = "De ocho a&ntilde;os.";
 choices[45][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[45][2] = "Ambas son correctas.";
 choices[45][3] = "No existe un l&iacute;mite.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[46]= "47)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[46]= new Array();
 choices[46][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[46][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[46][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[46][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[47][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[47][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[47][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[47] = choices[47][2];
 units[47] = "48";
 comments[47] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[48]= new Array();
 choices[48][0] = "Ley 3/2015";
 choices[48][1] = "Ley 6/2007";
 choices[48][2] = "Ley 5/1984";
 choices[48][3] = "Ley 5/2006";
 answers[48] = choices[48][0];
 units[48] = "22";
 comments[48] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[49]= "50)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[49]= new Array();
 choices[49][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[49][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[49][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][0];
 units[49] = "28";
 comments[49] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[50]= new Array();
 choices[50][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[50][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[50][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[50][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[50] = choices[50][1];
 units[50] = "22";
 comments[50] = "Id Pregunta: 122. ";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[51]= "52)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[51]= new Array();
 choices[51][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[51][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[51][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[51][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[51] = choices[51][1];
 units[51] = "106";
 comments[51] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[52]= "53)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[52]= new Array();
 choices[52][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[52][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[52][2] = "Crea una copia del proceso que hace la llamada.";
 choices[52][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[52] = choices[52][2];
 units[52] = "57";
 comments[52] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[53]= "54)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[53][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[53][2] = "b) y d) son verdaderas";
 choices[53][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[53] = choices[53][1];
 units[53] = "18, 20";
 comments[53] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto a los servicios territoriales es correcto:";
 choices[54]= new Array();
 choices[54][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[54][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[54][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[54][3] = "ninguna es correcta";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[55]= new Array();
 choices[55][0] = "El Tratado de Lisboa";
 choices[55][1] = "El Tratado de Amsterdam";
 choices[55][2] = "El Tratado de Niza";
 choices[55][3] = "El Acta &Uacute;nica Europea";
 answers[55] = choices[55][1];
 units[55] = "15";
 comments[55] = "Id Pregunta: 115. ";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[56]= "57)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[56]= new Array();
 choices[56][0] = "90";
 choices[56][1] = "50";
 choices[56][2] = "64";
 choices[56][3] = "60";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "A los cinco a&ntilde;os.";
 choices[57][1] = "A los dos a&ntilde;os.";
 choices[57][2] = "A los tres a&ntilde;os.";
 choices[57][3] = "A los cuatro a&ntilde;os.";
 answers[57] = choices[57][0];
 units[57] = "10";
 comments[57] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[58]= "59)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[58]= new Array();
 choices[58][0] = "Ejecuci&oacute;n";
 choices[58][1] = "Adjudicaci&oacute;n";
 choices[58][2] = "Licitaci&oacute;n";
 choices[58][3] = "Formalizaci&oacute;n";
 answers[58] = choices[58][3];
 units[58] = "37";
 comments[58] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[59]= new Array();
 choices[59][0] = "Neo4J ";
 choices[59][1] = "OrientDB ";
 choices[59][2] = "InfoGrid ";
 choices[59][3] = "SimpleDB";
 answers[59] = choices[59][3];
 units[59] = "73";
 comments[59] = "Id Pregunta: 653. ";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[60]= "61)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[60]= new Array();
 choices[60][0] = "Conformidad";
 choices[60][1] = "Responsabilidad";
 choices[60][2] = "Adquisici&oacute;n";
 choices[60][3] = "Desempe&ntilde;o";
 answers[60] = choices[60][0];
 units[60] = "26";
 comments[60] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[61]= "62)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[61]= new Array();
 choices[61][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[61][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[61][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[61][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[61] = choices[61][1];
 units[61] = "92";
 comments[61] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[62]= "63)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[62]= new Array();
 choices[62][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[62][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[62][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[62][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[62] = choices[62][2];
 units[62] = "7";
 comments[62] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[63]= "64)  La Administraci&oacute;n General del Estado se organiza:";
 choices[63]= new Array();
 choices[63][0] = "en Ministerios";
 choices[63][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[63][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[63][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[63] = choices[63][1];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[64]= new Array();
 choices[64][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[64][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[64][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[64][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[64] = choices[64][1];
 units[64] = "26";
 comments[64] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[65]= new Array();
 choices[65][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[65][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[65][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[65][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[66]= "67)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[66]= new Array();
 choices[66][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[66][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[66][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[66][3] = "Todas son correctas.";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[67]= "68)  El Tribunal de Justicia est&aacute; formado por:";
 choices[67]= new Array();
 choices[67][0] = "Un Juez de cada Estado miembro.";
 choices[67][1] = "Por dos Jueces de cada Estado miembro.";
 choices[67][2] = "Por veinte Jueces.";
 choices[67][3] = "Por ocho Jueces.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[68]= new Array();
 choices[68][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[68][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[68][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[68][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[68] = choices[68][2];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[69]= new Array();
 choices[69][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[69][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[69][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[69][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[69] = choices[69][1];
 units[69] = "12";
 comments[69] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[70]= "71)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[70]= new Array();
 choices[70][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[70][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[70][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[70][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[70] = choices[70][2];
 units[70] = "8";
 comments[70] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[71]= "72)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[71]= new Array();
 choices[71][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[71][1] = "1 de enero de 2015";
 choices[71][2] = "1 de enero de 2016";
 choices[71][3] = "1 de julio de 2016";
 answers[71] = choices[71][3];
 units[71] = "77";
 comments[71] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[72]= "73)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[72]= new Array();
 choices[72][0] = "GROUP BY.";
 choices[72][1] = "COUNT.";
 choices[72][2] = "WHERE.";
 choices[72][3] = "DISTINCT.";
 answers[72] = choices[72][0];
 units[72] = "60";
 comments[72] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[73]= new Array();
 choices[73][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[73][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[73][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "7";
 comments[73] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[74]= "75)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "en cada Comunidad Aut&oacute;noma";
 choices[74][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[74][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[74][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[74] = choices[74][1];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 813. Ley 40/2015";


