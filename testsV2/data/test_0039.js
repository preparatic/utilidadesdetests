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

//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; es MongoDB?";
 choices[0]= new Array();
 choices[0][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[0][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[0][2] = "Un sistema gestor de base de datos relacional.";
 choices[0][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[0] = choices[0][1];
 units[0] = "73";
 comments[0] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[1]= "2)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[1]= new Array();
 choices[1][0] = "Seguridad Social y AEAT";
 choices[1][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[1][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[1][3] = "Todos los anteriores";
 answers[1] = choices[1][3];
 units[1] = "19";
 comments[1] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[2]= "3)  El sector p&uacute;blico institucional se integra por:";
 choices[2]= new Array();
 choices[2][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[2][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[2][2] = "las Universidades p&uacute;blicas";
 choices[2][3] = "todas son correctas";
 answers[2] = choices[2][3];
 units[2] = "7";
 comments[2] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[3]= new Array();
 choices[3][0] = "Quince miembros.";
 choices[3][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[3][2] = "Los miembros que determine el Consejo.";
 choices[3][3] = "Un Presidente y quince miembros.";
 answers[3] = choices[3][1];
 units[3] = "14";
 comments[3] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[4]= new Array();
 choices[4][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[4][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[4][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[4][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[5]= "6)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[5]= new Array();
 choices[5][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[5][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[5][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[5][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[6]= "7)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[6]= new Array();
 choices[6][0] = "Sean dirigidas por mujeres";
 choices[6][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[6][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[6][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[6] = choices[6][2];
 units[6] = "14";
 comments[6] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[7]= "8)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[7]= new Array();
 choices[7][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[7][1] = "el C&oacute;digo Civil";
 choices[7][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[7][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[7] = choices[7][0];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[8]= "9)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[8]= new Array();
 choices[8][0] = "A nivel de art&iacute;culo.";
 choices[8][1] = "A nivel de cap&iacute;tulo.";
 choices[8][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[8][3] = "A nivel de concepto.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[9]= "10)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[9]= new Array();
 choices[9][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[9][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[9][2] = "Los interesados en el procedimiento";
 choices[9][3] = "Las alternativas b) y c) son correctas";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[10]= "11)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[10]= new Array();
 choices[10][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[10][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[10][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[10][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[10] = choices[10][1];
 units[10] = "92";
 comments[10] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[11]= new Array();
 choices[11][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[11][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[11][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[11][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[11] = choices[11][1];
 units[11] = "44";
 comments[11] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[12]= new Array();
 choices[12][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[12][1] = "Anteriormente se denominaba Sonar.";
 choices[12][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[12][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[12] = choices[12][2];
 units[12] = "92";
 comments[12] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[13]= "14)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[13]= new Array();
 choices[13][0] = "los Secretarios generales t&eacute;cnicos";
 choices[13][1] = "los Directores generales";
 choices[13][2] = "los Secretarios generales";
 choices[13][3] = "los Subsecretarios";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[14]= new Array();
 choices[14][0] = "El 1 de junio de 1999.";
 choices[14][1] = "El 1 de mayo de 1999.";
 choices[14][2] = "El 1 de abril de 1999.";
 choices[14][3] = "El 1 de marzo de 1999.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[15]= new Array();
 choices[15][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[15][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[15][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[15][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[16]= "17)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[16]= new Array();
 choices[16][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[16][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[16][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[16][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[16] = choices[16][0];
 units[16] = "45";
 comments[16] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[17]= "18)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[17]= new Array();
 choices[17][0] = "El nombre y el tipo de correspondencia.";
 choices[17][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[17][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[17][3] = "El nombre y el grado.";
 answers[17] = choices[17][1];
 units[17] = "85";
 comments[17] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[18]= new Array();
 choices[18][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[18][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[18][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[18][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[18] = choices[18][3];
 units[18] = "10";
 comments[18] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[19]= new Array();
 choices[19][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[19][1] = "Las CMADs";
 choices[19][2] = "Ambas son correctas.";
 choices[19][3] = "Ninguna es correcta";
 answers[19] = choices[19][2];
 units[19] = "19";
 comments[19] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[20]= "21)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[20]= new Array();
 choices[20][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[20][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[20][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[20][3] = "Todas son correctas.";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[21]= "22)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[21]= new Array();
 choices[21][0] = "Decretos Legislativos.";
 choices[21][1] = "Decretos-leyes.";
 choices[21][2] = "Leyes de bases.";
 choices[21][3] = "Reales Decretos del Consejo de Ministros.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[22]= "23)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[22]= new Array();
 choices[22][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[22][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[22][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[22][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[23]= "24)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[23]= new Array();
 choices[23][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[23][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[23][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[23][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[23] = choices[23][2];
 units[23] = "47";
 comments[23] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[24]= new Array();
 choices[24][0] = "ISO/IEC 31000";
 choices[24][1] = "ISO/IEC 14000";
 choices[24][2] = "ISO/IEC 38500";
 choices[24][3] = "ISO/IEC 18000";
 answers[24] = choices[24][2];
 units[24] = "26";
 comments[24] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[25]= "26)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[25]= new Array();
 choices[25][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[25][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[25][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[25][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[26]= new Array();
 choices[26][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[26][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[26][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[26][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[26] = choices[26][2];
 units[26] = "22";
 comments[26] = "Id Pregunta: 121. ";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[27]= new Array();
 choices[27][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[27][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[27][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[27][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[27] = choices[27][1];
 units[27] = "22";
 comments[27] = "Id Pregunta: 122. ";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[28]= new Array();
 choices[28][0] = "Constitucional.";
 choices[28][1] = "Penal.";
 choices[28][2] = "Militar.";
 choices[28][3] = "Tribunales consuetudinarios.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[29]= new Array();
 choices[29][0] = "Los principios rectores";
 choices[29][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[29][2] = "Los hitos para su desarrollo gradual";
 choices[29][3] = "Todos los anteriores";
 answers[29] = choices[29][3];
 units[29] = "19";
 comments[29] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[30]= new Array();
 choices[30][0] = "a) Los cuatro ejercicios siguientes.";
 choices[30][1] = "b) El ejercicio siguiente.";
 choices[30][2] = "c) Los dos ejercicios siguientes.";
 choices[30][3] = "d) Los tres ejercicios siguientes.";
 answers[30] = choices[30][3];
 units[30] = "10";
 comments[30] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[31]= "32)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[31]= new Array();
 choices[31][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[31][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[31][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[31][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[31] = choices[31][2];
 units[31] = "12";
 comments[31] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[32]= new Array();
 choices[32][0] = "A nivel de secci&oacute;n de programa.";
 choices[32][1] = "A nivel de grupo de programa.";
 choices[32][2] = "Ninguna de las respuestas es correcta.";
 choices[32][3] = "A nivel de programa.";
 answers[32] = choices[32][3];
 units[32] = "10";
 comments[32] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[33]= new Array();
 choices[33][0] = "NoSQL";
 choices[33][1] = "Sistemas de baja latencia";
 choices[33][2] = "MapReduce";
 choices[33][3] = "Business Intelligence";
 answers[33] = choices[33][1];
 units[33] = "73";
 comments[33] = "Id Pregunta: 658. ";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[34]= new Array();
 choices[34][0] = "Avro";
 choices[34][1] = "Sqoop";
 choices[34][2] = "UIMA";
 choices[34][3] = "Jaql";
 answers[34] = choices[34][1];
 units[34] = "73";
 comments[34] = "Id Pregunta: 660. ";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[35]= "36)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[35]= new Array();
 choices[35][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[35][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[35][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[35][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[36]= "37)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[36]= new Array();
 choices[36][0] = "Interchange of Data between Administrations (IDA)";
 choices[36][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[36][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[36][3] = "Interoperability Electronic European Solution (IEES)";
 answers[36] = choices[36][1];
 units[36] = "43";
 comments[36] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[37]= new Array();
 choices[37][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[37][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[37][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[37][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[38]= new Array();
 choices[38][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[38][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[38][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[38][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[39]= "40)  Respecto a los servicios territoriales es correcto:";
 choices[39]= new Array();
 choices[39][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[39][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[39][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[39][3] = "ninguna es correcta";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[40]= new Array();
 choices[40][0] = "La Comisi&oacute;n Permanente.";
 choices[40][1] = "El Presidente.";
 choices[40][2] = "El Pleno.";
 choices[40][3] = "El Vicepresidente.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[41]= "42)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[41]= new Array();
 choices[41][0] = "Los ocupados y los parados activos";
 choices[41][1] = "S&oacute;lo los ocupados";
 choices[41][2] = "Los ocupados y los inactivos";
 choices[41][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[41] = choices[41][0];
 units[41] = "12";
 comments[41] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[42]= "43)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[42]= new Array();
 choices[42][0] = "Son actos normativos.";
 choices[42][1] = "Poseen alcance general.";
 choices[42][2] = "No son obligatorias.";
 choices[42][3] = "Son actos individuales no normativos.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[43]= "44)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[43]= new Array();
 choices[43][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[43][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[43][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[43][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[43] = choices[43][3];
 units[43] = "43";
 comments[43] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[44]= "45)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[44]= new Array();
 choices[44][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[44][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[44][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[44][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[45]= "46)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[45]= new Array();
 choices[45][0] = "Estrat&eacute;gico";
 choices[45][1] = "Operativo";
 choices[45][2] = "T&aacute;ctico";
 choices[45][3] = "Tecnol&oacute;gico";
 answers[45] = choices[45][0];
 units[45] = "36";
 comments[45] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[46]= "47)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[46]= new Array();
 choices[46][0] = "Gesti&oacute;n de la disponibilidad";
 choices[46][1] = "Gesti&oacute;n de la demanda";
 choices[46][2] = "Gesti&oacute;n de entregas";
 choices[46][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[46] = choices[46][0];
 units[46] = "101";
 comments[46] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[47]= "48)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[47]= new Array();
 choices[47][0] = "90";
 choices[47][1] = "50";
 choices[47][2] = "64";
 choices[47][3] = "60";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[48]= new Array();
 choices[48][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[48][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[48][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[48][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[49]= new Array();
 choices[49][0] = "Perceptible";
 choices[49][1] = "Operable";
 choices[49][2] = "Comprensible";
 choices[49][3] = "Robusto";
 answers[49] = choices[49][2];
 units[49] = "42";
 comments[49] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[50]= "51)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[50]= new Array();
 choices[50][0] = "Programaci&oacute;n estructurada.";
 choices[50][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[50][2] = "Programaci&oacute;n extrema.";
 choices[50][3] = "Programaci&oacute;n Espuria.";
 answers[50] = choices[50][2];
 units[50] = "92";
 comments[50] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[51]= "52)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[51]= new Array();
 choices[51][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[51][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[51][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[51][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[52]= "53)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[52]= new Array();
 choices[52][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[52][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[52][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[52][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[52] = choices[52][3];
 units[52] = "7";
 comments[52] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[53]= new Array();
 choices[53][0] = "De los derechos y deberes fundamentales.";
 choices[53][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[53][2] = "Derechos y libertades.";
 choices[53][3] = "De la Corona.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[54]= new Array();
 choices[54][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[54][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[54][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[54][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[54] = choices[54][2];
 units[54] = "43";
 comments[54] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[55]= new Array();
 choices[55][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[55][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[55][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[55][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[55] = choices[55][3];
 units[55] = "46";
 comments[55] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[56]= "57)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[56]= new Array();
 choices[56][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[56][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[56][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[56][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[56] = choices[56][2];
 units[56] = "28";
 comments[56] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[57]= "58)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[57][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[57][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[57][3] = "cualquiera que sea el estado del procedimiento";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[58]= "59)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[58]= new Array();
 choices[58][0] = "Bases de datos orientadas a filas";
 choices[58][1] = "Bases de datos orientadas a documentos";
 choices[58][2] = "Bases de datos de clave/valor";
 choices[58][3] = "Bases de datos orientadas a objetos";
 answers[58] = choices[58][0];
 units[58] = "73";
 comments[58] = "Id Pregunta: 100. ";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta falsa:";
 choices[59]= new Array();
 choices[59][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[59][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[59][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[59][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[59] = choices[59][3];
 units[59] = "5";
 comments[59] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[60]= "61)  La recusaci&oacute;n pueden promoverla...";
 choices[60]= new Array();
 choices[60][0] = "Cualquier &oacute;rgano";
 choices[60][1] = "El interesado";
 choices[60][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[60][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[61]= new Array();
 choices[61][0] = "Cinco.";
 choices[61][1] = "Dos.";
 choices[61][2] = "Cuatro.";
 choices[61][3] = "Siete.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[62]= "63)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[62]= new Array();
 choices[62][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[62][1] = "Publicidad de las normas.";
 choices[62][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[62][3] = "Coordinaci&oacute;n normativa.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[63]= "64)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[63]= new Array();
 choices[63][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[63][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[63][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[63][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[63] = choices[63][3];
 units[63] = "14";
 comments[63] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "Estrasburgo.";
 choices[64][1] = "Bruselas.";
 choices[64][2] = "Luxemburgo.";
 choices[64][3] = "Par&iacute;s.";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[65]= new Array();
 choices[65][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[65][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[65][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[65][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[65] = choices[65][1];
 units[65] = "76";
 comments[65] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[66]= "67)  Son servicios declarados compartidos:";
 choices[66]= new Array();
 choices[66][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[66][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[66][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[66][3] = "Todos los anteriores";
 answers[66] = choices[66][3];
 units[66] = "19";
 comments[66] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[67]= new Array();
 choices[67][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[67][1] = "Autorizar indultos generales.";
 choices[67][2] = "Sancionar las leyes.";
 choices[67][3] = "Promulgar las leyes.";
 answers[67] = choices[67][1];
 units[67] = "1";
 comments[67] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[68]= new Array();
 choices[68][0] = "Establecer redes de telecomunicaciones continentales";
 choices[68][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[68][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[68][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[68] = choices[68][0];
 units[68] = "17";
 comments[68] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[69]= "70)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[69]= new Array();
 choices[69][0] = "Relaciones base y vistas.";
 choices[69][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[69][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[69][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[69] = choices[69][3];
 units[69] = "60";
 comments[69] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[70]= new Array();
 choices[70][0] = "Un representante de la Administraci&oacute;n local.";
 choices[70][1] = "Un representante del Tribunal de Cuentas.";
 choices[70][2] = "Un representante del Defensor del Pueblo.";
 choices[70][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[70] = choices[70][0];
 units[70] = "22";
 comments[70] = "Id Pregunta: 123. ";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[71]= "72)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[71]= new Array();
 choices[71][0] = "un art&iacute;culo";
 choices[71][1] = "dos art&iacute;culos";
 choices[71][2] = "tres art&iacute;culos";
 choices[71][3] = "cuatro art&iacute;culos";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[72][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[72][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[72][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[73]= "74)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[73]= new Array();
 choices[73][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[73][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[73][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[73][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 510. LEY 39/2015";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[74]= new Array();
 choices[74][0] = "JUnit, Artifactory y SonarQube";
 choices[74][1] = "JUnit, Artifactory y Selenium";
 choices[74][2] = "JUnit, SonarQube y Selenium";
 choices[74][3] = "ArtiFactory, SonarQube y Selenium";
 answers[74] = choices[74][2];
 units[74] = "92";
 comments[74] = "Id Pregunta: 91. AGE A1 2015";


