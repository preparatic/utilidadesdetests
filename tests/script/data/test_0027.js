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

//  Id pregunta: 10115 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[0]= new Array();
 choices[0][0] = "El Tratado de Lisboa";
 choices[0][1] = "El Tratado de Amsterdam";
 choices[0][2] = "El Tratado de Niza";
 choices[0][3] = "El Acta &Uacute;nica Europea";
 answers[0] = choices[0][1];
 units[0] = "15";
 comments[0] = "Id Pregunta: 10115. ";


//  Id pregunta: 10549 Año de creación de pregunta: 2016
 questions[1]= "2)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[1]= new Array();
 choices[1][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[1][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[1][2] = "El Presidente del Gobierno";
 choices[1][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[1] = choices[1][1];
 units[1] = "26";
 comments[1] = "Id Pregunta: 10549. Gobernanza TIC";


//  Id pregunta: 10650 Año de creación de pregunta: 2016
 questions[2]= "3)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[2]= new Array();
 choices[2][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[2][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[2][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[2][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[2] = choices[2][3];
 units[2] = "109";
 comments[2] = "Id Pregunta: 10650. Junta de Extremadura A1 2015";


//  Id pregunta: 10464 Año de creación de pregunta: 2016
 questions[3]= "4)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[3]= new Array();
 choices[3][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[3][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[3][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[3][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[3] = choices[3][2];
 units[3] = "10";
 comments[3] = "Id Pregunta: 10464. PRESUPUESTOS GENERALES";


//  Id pregunta: 10592 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[4]= new Array();
 choices[4][0] = "Anualmente";
 choices[4][1] = "Bienalmente";
 choices[4][2] = "Cada cuatro a&ntilde;os";
 choices[4][3] = "No se define ninguna periodicidad";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 10592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 10008 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[5]= new Array();
 choices[5][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[5][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[5][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[5][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[5] = choices[5][2];
 units[5] = "26";
 comments[5] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10277 Año de creación de pregunta: 2016
 questions[6]= "7)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[6]= new Array();
 choices[6][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[6][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[6][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[6][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10665 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, , la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[7][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[7][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[7][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[7] = choices[7][2];
 units[7] = "7";
 comments[7] = "Id Pregunta: 10665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[8]= "9)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[8]= new Array();
 choices[8][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[8][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[8][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[8][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[8] = choices[8][2];
 units[8] = "57";
 comments[8] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[9]= "10)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[9]= new Array();
 choices[9][0] = "Resoluci&oacute;n.";
 choices[9][1] = "Desistimiento o renuncia.";
 choices[9][2] = "Caducidad.";
 choices[9][3] = "Todas las anteriores.";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10593 Año de creación de pregunta: 2016
 questions[10]= "11)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[10]= new Array();
 choices[10][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[10][1] = "La CETIC";
 choices[10][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[10][3] = "El MHFP";
 answers[10] = choices[10][0];
 units[10] = "19";
 comments[10] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10273 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[11]= new Array();
 choices[11][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[11][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[11][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[11][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[11] = choices[11][1];
 units[11] = "92";
 comments[11] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10001 Año de creación de pregunta: 2016
 questions[12]= "13)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[12]= new Array();
 choices[12][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[12][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[12][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[12][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[12] = choices[12][2];
 units[12] = "26";
 comments[12] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10361 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[13]= new Array();
 choices[13][0] = "El Consejo Europeo.";
 choices[13][1] = "El Parlamento Europeo.";
 choices[13][2] = "El Consejo.";
 choices[13][3] = "La Comisi&oacute;n.";
 answers[13] = choices[13][3];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10361. UNION EUROPEA";


//  Id pregunta: 10429 Año de creación de pregunta: 2016
 questions[14]= "15)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[14]= new Array();
 choices[14][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[14][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "Ambas son incorrectas.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10417 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[15][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[15][2] = "Ambas son correctas.";
 choices[15][3] = "La A y B son incorrectas.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 10417. POLITICAS DE IGUALDAD";


//  Id pregunta: 10191 Año de creación de pregunta: 2016
 questions[16]= "17)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[16]= new Array();
 choices[16][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[16][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[16][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[16][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10191. CONSTITUCION1978";


//  Id pregunta: 10555 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[17]= new Array();
 choices[17][0] = "Consumidores";
 choices[17][1] = "PYMES y Start-ups";
 choices[17][2] = "La Industria";
 choices[17][3] = "Todos los anteriores";
 answers[17] = choices[17][3];
 units[17] = "17";
 comments[17] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10135 Año de creación de pregunta: 2016
 questions[18]= "19)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[18]= new Array();
 choices[18][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[18][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[18][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[18][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[18] = choices[18][0];
 units[18] = "12";
 comments[18] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10303 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[19]= new Array();
 choices[19][0] = "Veinticinco.";
 choices[19][1] = "Veintisiete.";
 choices[19][2] = "Veintinueve.";
 choices[19][3] = "Cuarenta y uno.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10580 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[20]= new Array();
 choices[20][0] = "A la CETIC";
 choices[20][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[20][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[20][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[20] = choices[20][3];
 units[20] = "19";
 comments[20] = "Id Pregunta: 10580. Estrategia TIC";


//  Id pregunta: 10537 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[21]= new Array();
 choices[21][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[21][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[21][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[21][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 10537. LEY 39/2015";


//  Id pregunta: 10165 Año de creación de pregunta: 2016
 questions[22]= "23)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[22][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[22][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[22][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[22] = choices[22][0];
 units[22] = "19";
 comments[22] = "Id Pregunta: 10165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 10312 Año de creación de pregunta: 2016
 questions[23]= "24)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[23]= new Array();
 choices[23][0] = "Por unanimidad.";
 choices[23][1] = "Por mayor&iacute;a cualificada.";
 choices[23][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[23][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10470 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[24]= new Array();
 choices[24][0] = "El Ministro de Econom&iacute;a.";
 choices[24][1] = "El Gobierno.";
 choices[24][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[24][3] = "El Presidente del Gobierno.";
 answers[24] = choices[24][1];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10470. PRESUPUESTOS GENERALES";


//  Id pregunta: 10489 Año de creación de pregunta: 2016
 questions[25]= "26)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[25]= new Array();
 choices[25][0] = "Dos.";
 choices[25][1] = "Cuatro.";
 choices[25][2] = "Cinco.";
 choices[25][3] = "Tres.";
 answers[25] = choices[25][1];
 units[25] = "10";
 comments[25] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[26]= "27)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[26]= new Array();
 choices[26][0] = "La Comisi&oacute;n.";
 choices[26][1] = "El Consejo de Europa.";
 choices[26][2] = "El Consejo Europeo.";
 choices[26][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10432 Año de creación de pregunta: 2016
 questions[27]= "28)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[27]= new Array();
 choices[27][0] = "De ocho a&ntilde;os.";
 choices[27][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[27][2] = "Ambas son correctas.";
 choices[27][3] = "No existe un l&iacute;mite.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[28]= "29)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[28]= new Array();
 choices[28][0] = "Pas&oacute; de 518 a 626.";
 choices[28][1] = "Pas&oacute; de 434 a 518.";
 choices[28][2] = "Pas&oacute; de 345 a 512.";
 choices[28][3] = "Pas&oacute; de 435 a 610.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10606 Año de creación de pregunta: 2016
 questions[29]= "30)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[29]= new Array();
 choices[29][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[29][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[29][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[29][3] = "Todas las respuestas son correctas.";
 answers[29] = choices[29][1];
 units[29] = "101";
 comments[29] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10624 Año de creación de pregunta: 2016
 questions[30]= "31)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[30]= new Array();
 choices[30][0] = "En sentencias switch para alterar el control de flujo.";
 choices[30][1] = "Para manejar excepciones.";
 choices[30][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[30][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[30] = choices[30][1];
 units[30] = "64";
 comments[30] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10092 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[31]= new Array();
 choices[31][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[31][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[31][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[31][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[31] = choices[31][0];
 units[31] = "48";
 comments[31] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10456 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[32]= new Array();
 choices[32][0] = "a) Los cuatro ejercicios siguientes.";
 choices[32][1] = "b) El ejercicio siguiente.";
 choices[32][2] = "c) Los dos ejercicios siguientes.";
 choices[32][3] = "d) Los tres ejercicios siguientes.";
 answers[32] = choices[32][3];
 units[32] = "10";
 comments[32] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10364 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[33]= new Array();
 choices[33][0] = "El 1 de junio de 1999.";
 choices[33][1] = "El 1 de mayo de 1999.";
 choices[33][2] = "El 1 de abril de 1999.";
 choices[33][3] = "El 1 de marzo de 1999.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 10364. UNION EUROPEA";


//  Id pregunta: 10161 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[34]= new Array();
 choices[34][0] = "Principio de solo una vez";
 choices[34][1] = "Apertura y transparencia";
 choices[34][2] = "Confianza y seguridad";
 choices[34][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[34] = choices[34][3];
 units[34] = "19";
 comments[34] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[35]= "36)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[35]= new Array();
 choices[35][0] = "Windows Phone";
 choices[35][1] = "Blackberry";
 choices[35][2] = "iOS";
 choices[35][3] = "Android";
 answers[35] = choices[35][3];
 units[35] = "59";
 comments[35] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[36]= new Array();
 choices[36][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[36][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[36][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[36][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[37]= "38)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[37]= new Array();
 choices[37][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[37][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[37][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[37][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[38]= new Array();
 choices[38][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[38][1] = "Anteriormente se denominaba Sonar.";
 choices[38][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[38][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[38] = choices[38][2];
 units[38] = "92";
 comments[38] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10128 Año de creación de pregunta: 2016
 questions[39]= "40)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[39]= new Array();
 choices[39][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[39][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[39][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[39][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[39] = choices[39][2];
 units[39] = "22";
 comments[39] = "Id Pregunta: 10128. ";


//  Id pregunta: 10236 Año de creación de pregunta: 2016
 questions[40]= "41)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[40]= new Array();
 choices[40][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[40][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[40][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[40][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10236. CONSTITUCION1978";


//  Id pregunta: 10219 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[41]= new Array();
 choices[41][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[41][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[41][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[41][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[41] = choices[41][1];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10219. CONSTITUCION1978";


//  Id pregunta: 10019 Año de creación de pregunta: 2016
 questions[42]= "43)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[42]= new Array();
 choices[42][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[42][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[42][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[42][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[42] = choices[42][2];
 units[42] = "47";
 comments[42] = "Id Pregunta: 10019. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10262 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[43]= new Array();
 choices[43][0] = "Constitucional.";
 choices[43][1] = "Penal.";
 choices[43][2] = "Militar.";
 choices[43][3] = "Tribunales consuetudinarios.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10262. CONSTITUCION1978";


//  Id pregunta: 10116 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[44]= new Array();
 choices[44][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[44][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[44][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[44][3] = "El pago de subsidios a parados";
 answers[44] = choices[44][3];
 units[44] = "15";
 comments[44] = "Id Pregunta: 10116. ";


//  Id pregunta: 10050 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[45]= new Array();
 choices[45][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[45][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[45][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[45][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[45] = choices[45][1];
 units[45] = "78";
 comments[45] = "Id Pregunta: 10050. AGE A1 2015";


//  Id pregunta: 10160 Año de creación de pregunta: 2016
 questions[46]= "47)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[46]= new Array();
 choices[46][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[46][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[46][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[46][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[46] = choices[46][1];
 units[46] = "19";
 comments[46] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10060 Año de creación de pregunta: 2016
 questions[47]= "48)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[47]= new Array();
 choices[47][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[47][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[47][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[47][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[47] = choices[47][2];
 units[47] = "101";
 comments[47] = "Id Pregunta: 10060. AGE A1 2015";


//  Id pregunta: 10491 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[48]= new Array();
 choices[48][0] = "Un programa presupuestario.";
 choices[48][1] = "Un concepto presupuestario.";
 choices[48][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[48][3] = "Un cr&eacute;dito presupuestario.";
 answers[48] = choices[48][0];
 units[48] = "10";
 comments[48] = "Id Pregunta: 10491. PRESUPUESTOS GENERALES";


//  Id pregunta: 10335 Año de creación de pregunta: 2016
 questions[49]= "50)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[49]= new Array();
 choices[49][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[49][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[49][2] = "Son incompatibles ambas actas de diputado.";
 choices[49][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[50]= new Array();
 choices[50][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[50][1] = "Pasivos financieros y transferencias de capital.";
 choices[50][2] = "Activos financieros y pasivos financieros.";
 choices[50][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10007 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[51]= new Array();
 choices[51][0] = "Nivel 7 - MPLS.";
 choices[51][1] = "Nivel 3 - RARP.";
 choices[51][2] = "Nivel 2 - HDLC.";
 choices[51][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[51] = choices[51][2];
 units[51] = "105";
 comments[51] = "Id Pregunta: 10007. AGE A1 2015";


//  Id pregunta: 10256 Año de creación de pregunta: 2016
 questions[52]= "53)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[52]= new Array();
 choices[52][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[52][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[52][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[52][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10256. CONSTITUCION1978";


//  Id pregunta: 10121 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[53]= new Array();
 choices[53][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[53][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[53][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[53][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[53] = choices[53][2];
 units[53] = "22";
 comments[53] = "Id Pregunta: 10121. ";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[54]= "55)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[54]= new Array();
 choices[54][0] = "Un recurso de incumplimiento.";
 choices[54][1] = "Recurso de carencia.";
 choices[54][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[54][3] = "Ninguna es correcta.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10426 Año de creación de pregunta: 2016
 questions[55]= "56)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[55]= new Array();
 choices[55][0] = "Un plan de igualdad.";
 choices[55][1] = "Un informe de impacto de g&eacute;nero.";
 choices[55][2] = "Un programa de igualdad.";
 choices[55][3] = "Todas son correctas.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10584 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[56]= new Array();
 choices[56][0] = "Bienalmente";
 choices[56][1] = "Anualmente";
 choices[56][2] = "Semestralmente";
 choices[56][3] = "Cada cuatro a&ntilde;os";
 answers[56] = choices[56][1];
 units[56] = "19";
 comments[56] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10612 Año de creación de pregunta: 2016
 questions[57]= "58)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[57]= new Array();
 choices[57][0] = "Intersecci&oacute;n.";
 choices[57][1] = "Uni&oacute;n.";
 choices[57][2] = "Restricci&oacute;n.";
 choices[57][3] = "Diferencia.";
 answers[57] = choices[57][0];
 units[57] = "60";
 comments[57] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10017 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[58][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[58][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[58][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[58] = choices[58][3];
 units[58] = "44";
 comments[58] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10048 Año de creación de pregunta: 2016
 questions[59]= "60)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[59]= new Array();
 choices[59][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[59][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[59][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[59][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[59] = choices[59][3];
 units[59] = "77";
 comments[59] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10460 Año de creación de pregunta: 2016
 questions[60]= "61)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[60]= new Array();
 choices[60][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[60][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[60][2] = "La normativa reguladora de cada derecho.";
 choices[60][3] = "Ley 50/1997, del Gobierno.";
 answers[60] = choices[60][2];
 units[60] = "10";
 comments[60] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10245 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[61]= new Array();
 choices[61][0] = "De los derechos y deberes fundamentales.";
 choices[61][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[61][2] = "Derechos y libertades.";
 choices[61][3] = "De la Corona.";
 answers[61] = choices[61][1];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[62]= new Array();
 choices[62][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[62][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[62][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[62][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[62] = choices[62][0];
 units[62] = "19";
 comments[62] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10281 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la respuesta falsa:";
 choices[63]= new Array();
 choices[63][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[63][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[63][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[63][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10281. UNION EUROPEA";


//  Id pregunta: 10631 Año de creación de pregunta: 2016
 questions[64]= "65)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[64]= new Array();
 choices[64][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[64][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[64][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[64][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[64] = choices[64][2];
 units[64] = "50";
 comments[64] = "Id Pregunta: 10631. Junta de Extremadura A1 2015";


//  Id pregunta: 10515 Año de creación de pregunta: 2016
 questions[65]= "66)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[65]= new Array();
 choices[65][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[65][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[65][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[65][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[65] = choices[65][1];
 units[65] = "7";
 comments[65] = "Id Pregunta: 10515. LEY 39/2015";


//  Id pregunta: 10487 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[66]= new Array();
 choices[66][0] = "Las Cortes Generales.";
 choices[66][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[66][2] = "El Gobierno.";
 choices[66][3] = "El Congreso de los Diputados.";
 answers[66] = choices[66][0];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10575 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[67]= new Array();
 choices[67][0] = "MySQL";
 choices[67][1] = "SQLite";
 choices[67][2] = "Zope";
 choices[67][3] = "MariaDB";
 answers[67] = choices[67][2];
 units[67] = "61";
 comments[67] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10658 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[68]= new Array();
 choices[68][0] = "NoSQL";
 choices[68][1] = "Sistemas de baja latencia";
 choices[68][2] = "MapReduce";
 choices[68][3] = "Business Intelligence";
 answers[68] = choices[68][1];
 units[68] = "73";
 comments[68] = "Id Pregunta: 10658. ";


//  Id pregunta: 10216 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[69]= new Array();
 choices[69][0] = "El Presidente del Gobierno.";
 choices[69][1] = "El Consejo de Ministros.";
 choices[69][2] = "40 Diputados.";
 choices[69][3] = "El Ministerio Fiscal.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10314 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[70]= new Array();
 choices[70][0] = "Al Consejo Europeo.";
 choices[70][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[70][2] = "A la Comisi&oacute;n Europea.";
 choices[70][3] = "Al Parlamento Europeo.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10439 Año de creación de pregunta: 2016
 questions[71]= "72)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[71]= new Array();
 choices[71][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[71][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[71][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[71][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[71] = choices[71][1];
 units[71] = "43";
 comments[71] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10043 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[72]= new Array();
 choices[72][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[72][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[72][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[72][3] = "El software funcionando es la medida principal del progreso.";
 answers[72] = choices[72][2];
 units[72] = "34";
 comments[72] = "Id Pregunta: 10043. AGE A1 2015";


//  Id pregunta: 10049 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; facilita un ORM?";
 choices[73]= new Array();
 choices[73][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[73][1] = "Conversi&oacute;n de objetos a documentos";
 choices[73][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[73][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[73] = choices[73][0];
 units[73] = "62";
 comments[73] = "Id Pregunta: 10049. AGE A1 2015";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[74]= "75)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[74]= new Array();
 choices[74][0] = "En qu&eacute; nos gastamos el dinero";
 choices[74][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[74][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[74][3] = "Qui&eacute;n se gasta el dinero.";
 answers[74] = choices[74][0];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


