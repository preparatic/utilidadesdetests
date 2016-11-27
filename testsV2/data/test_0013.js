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

//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[0]= new Array();
 choices[0][0] = "La CETIC";
 choices[0][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[0][2] = "La DTIC";
 choices[0][3] = "El MHFP";
 answers[0] = choices[0][0];
 units[0] = "19";
 comments[0] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[1]= new Array();
 choices[1][0] = "732";
 choices[1][1] = "626";
 choices[1][2] = "786";
 choices[1][3] = "360";
 answers[1] = choices[1][2];
 units[1] = "5";
 comments[1] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[2]= "3)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[2]= new Array();
 choices[2][0] = "0";
 choices[2][1] = "1";
 choices[2][2] = "Tantos como peticiones concurrentes tenga.";
 choices[2][3] = "Tantos como le permita la memoria de la JVM.";
 answers[2] = choices[2][1];
 units[2] = "64";
 comments[2] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[3]= new Array();
 choices[3][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[3][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[3][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[3][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[3] = choices[3][0];
 units[3] = "19";
 comments[3] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[4]= new Array();
 choices[4][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[4][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[4][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[4][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[4] = choices[4][3];
 units[4] = "66";
 comments[4] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[5]= new Array();
 choices[5][0] = "Publicidad.";
 choices[5][1] = "Constituci&oacute;n.";
 choices[5][2] = "Legalidad.";
 choices[5][3] = "Creaci&oacute;n.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[6]= new Array();
 choices[6][0] = "Por Real Decreto.";
 choices[6][1] = "Por Orden del Ministerio del Interior.";
 choices[6][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[6][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[7]= new Array();
 choices[7][0] = "Tres meses.";
 choices[7][1] = "Nueve meses.";
 choices[7][2] = "Cuatro meses.";
 choices[7][3] = "Seis meses.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[8]= "9)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[8]= new Array();
 choices[8][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[8][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[8][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[8][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[8] = choices[8][3];
 units[8] = "18, 20";
 comments[8] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[9]= new Array();
 choices[9][0] = "Orientaci&oacute;n a objetos";
 choices[9][1] = "MapReduce";
 choices[9][2] = "Pipeline filtering";
 choices[9][3] = "Programaci&oacute;n funcional";
 answers[9] = choices[9][1];
 units[9] = "73";
 comments[9] = "Id Pregunta: 659. ";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; facilita un ORM?";
 choices[10]= new Array();
 choices[10][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[10][1] = "Conversi&oacute;n de objetos a documentos";
 choices[10][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[10][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[10] = choices[10][0];
 units[10] = "62";
 comments[10] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[11]= new Array();
 choices[11][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[11][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[11][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[11][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[11] = choices[11][3];
 units[11] = "22";
 comments[11] = "Id Pregunta: 120. ";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[12]= "13)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[12]= new Array();
 choices[12][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[12][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[12][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[12][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[13]= "14)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[13]= new Array();
 choices[13][0] = "Por unanimidad.";
 choices[13][1] = "Por mayor&iacute;a cualificada.";
 choices[13][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[13][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[13] = choices[13][3];
 units[13] = "5";
 comments[13] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[14]= new Array();
 choices[14][0] = "Cifrado de las comunicaciones";
 choices[14][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[14][2] = "Registro de los accesos";
 choices[14][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[14] = choices[14][1];
 units[14] = "35";
 comments[14] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[15]= "16)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "en cada Comunidad Aut&oacute;noma";
 choices[15][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[15][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[15][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[16]= new Array();
 choices[16][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[16][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[16][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[16][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[16] = choices[16][3];
 units[16] = "46";
 comments[16] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[17]= new Array();
 choices[17][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[17][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[17][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[17][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[17] = choices[17][1];
 units[17] = "28";
 comments[17] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[18]= "19)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[18]= new Array();
 choices[18][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[18][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[18][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[18][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[19]= "20)  El pacto fiscal europeo de 2012 incluye:";
 choices[19]= new Array();
 choices[19][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[19][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[19][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[19][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[20]= "21)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[20]= new Array();
 choices[20][0] = "El Presidente y su gabinete.";
 choices[20][1] = "El Presidente y sus Ministros.";
 choices[20][2] = "El Rey y el Presidente.";
 choices[20][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[21]= "22)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[21]= new Array();
 choices[21][0] = "La Ley Org&aacute;nica 2/2011";
 choices[21][1] = "La Ley Org&aacute;nica 2/2012";
 choices[21][2] = "La Ley Org&aacute;nica 3/2012";
 choices[21][3] = "La Ley Org&aacute;nica 2/2002";
 answers[21] = choices[21][1];
 units[21] = "12";
 comments[21] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[22]= "23)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[22]= new Array();
 choices[22][0] = "Un informe de g&eacute;nero.";
 choices[22][1] = "La variable de sexo.";
 choices[22][2] = "La variable de edad.";
 choices[22][3] = "La variable de comportamiento.";
 answers[22] = choices[22][1];
 units[22] = "14";
 comments[22] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[23]= new Array();
 choices[23][0] = "Veinticinco.";
 choices[23][1] = "Veintiuno.";
 choices[23][2] = "Dieciocho.";
 choices[23][3] = "Diecinueve.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto a las unidades administrativas:";
 choices[24]= new Array();
 choices[24][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[24][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[24][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[25]= new Array();
 choices[25][0] = "Ley Org&aacute;nica.";
 choices[25][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[25][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[25][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[26]= new Array();
 choices[26][0] = "SessionBean";
 choices[26][1] = "JavaBean";
 choices[26][2] = "MBeans";
 choices[26][3] = "MessageDrivenBean";
 answers[26] = choices[26][2];
 units[26] = "64";
 comments[26] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Administraciones P&uacute;blicas:";
 choices[27]= new Array();
 choices[27][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[27][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[27][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][1];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[28]= "29)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[28]= new Array();
 choices[28][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[28][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[28][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[28][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[28] = choices[28][0];
 units[28] = "45";
 comments[28] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[29]= "30)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[29]= new Array();
 choices[29][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[29][1] = "Programa de cartas de servicios";
 choices[29][2] = "Programa para la mejora continua de las organizaciones.";
 choices[29][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[29] = choices[29][2];
 units[29] = "18, 20";
 comments[29] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[30]= "31)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[30]= new Array();
 choices[30][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[30][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[30][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[30][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[31]= "32)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[31]= new Array();
 choices[31][0] = "Proveer de manera compartida servicios comunes";
 choices[31][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[31][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[31][3] = "Transparencia";
 answers[31] = choices[31][1];
 units[31] = "28";
 comments[31] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[32]= "33)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[32]= new Array();
 choices[32][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[32][1] = "El Congreso de los Diputados.";
 choices[32][2] = "Las Cortes Generales.";
 choices[32][3] = "El Consejo de Ministros";
 answers[32] = choices[32][3];
 units[32] = "1";
 comments[32] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[33]= new Array();
 choices[33][0] = "El 1 de noviembre de 1994.";
 choices[33][1] = "El 1 de noviembre de 1992.";
 choices[33][2] = "El 1 de noviembre de 1995.";
 choices[33][3] = "El 1 de noviembre de 1993.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[34]= "35)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[34]= new Array();
 choices[34][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[34][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[34][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[34][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[35]= "36)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[35][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[35][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[35][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique la afirmaci&oacute;n falsa:";
 choices[36]= new Array();
 choices[36][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[36][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[36][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[36][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[36] = choices[36][1];
 units[36] = "22";
 comments[36] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[37]= "38)  El Tribunal de Justicia se cre&oacute; en:";
 choices[37]= new Array();
 choices[37][0] = "El Tratado de la CECA.";
 choices[37][1] = "El Tratado de Niza.";
 choices[37][2] = "El Tratado de &Aacute;msterdam.";
 choices[37][3] = "El Tratado de Lisboa.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[38]= new Array();
 choices[38][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[38][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[38][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[38][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[38] = choices[38][0];
 units[38] = "22";
 comments[38] = "Id Pregunta: 124. ";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[39]= "40)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Incremental, diferencial, completa";
 choices[39][1] = "Completa, incremental, diferencial";
 choices[39][2] = "Completa, diferencial, incremental";
 choices[39][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[39] = choices[39][0];
 units[39] = "53";
 comments[39] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[40]= "41)  Los Reglamentos no se caracterizan por:";
 choices[40]= new Array();
 choices[40][0] = "No poseer alcance general.";
 choices[40][1] = "Ser obligatorios.";
 choices[40][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[40][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[41]= "42)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[41]= new Array();
 choices[41][0] = "Interchange of Data between Administrations (IDA)";
 choices[41][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[41][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[41][3] = "Interoperability Electronic European Solution (IEES)";
 answers[41] = choices[41][1];
 units[41] = "43";
 comments[41] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[42]= "43)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[42]= new Array();
 choices[42][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[42][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[42][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[42][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[42] = choices[42][1];
 units[42] = "74";
 comments[42] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[43]= new Array();
 choices[43][0] = "El Parlamento y el Consejo.";
 choices[43][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[43][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[43][3] = "La Comisi&oacute;n y el Consejo.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[44]= new Array();
 choices[44][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[44][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[44][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[44][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[44] = choices[44][3];
 units[44] = "77";
 comments[44] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[45]= "46)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Unidad de igualdad.";
 choices[45][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[45][2] = "Ninguna de las anteriores.";
 choices[45][3] = "A y B son correctas.";
 answers[45] = choices[45][1];
 units[45] = "14";
 comments[45] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[46]= "47)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[46]= new Array();
 choices[46][0] = "Subsecretario";
 choices[46][1] = "Subdirector general";
 choices[46][2] = "Secretario de Estado";
 choices[46][3] = "ninguna es correcta";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[47]= new Array();
 choices[47][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[47][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[47][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[47][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[47] = choices[47][2];
 units[47] = "26";
 comments[47] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[48]= new Array();
 choices[48][0] = "Backlog refinement";
 choices[48][1] = "Backlog refinement";
 choices[48][2] = "A y b son correctas";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][2];
 units[48] = "34, 84";
 comments[48] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[49]= new Array();
 choices[49][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[49][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[49][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[49][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[50]= "51)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[50]= new Array();
 choices[50][0] = "La Ley General Tributaria.";
 choices[50][1] = "La Ley Presupuestaria.";
 choices[50][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[50][3] = "Ninguna de las respuestas es correcta.";
 answers[50] = choices[50][0];
 units[50] = "10";
 comments[50] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[51]= new Array();
 choices[51][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[51][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[51][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[51][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[51] = choices[51][1];
 units[51] = "7";
 comments[51] = "Id Pregunta: 662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[52]= "53)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[52]= new Array();
 choices[52][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[52][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[52][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[52][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[52] = choices[52][2];
 units[52] = "22";
 comments[52] = "Id Pregunta: 128. ";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[53]= "54)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[53]= new Array();
 choices[53][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[53][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[53][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[53][3] = "Todas las respuestas son correctas.";
 answers[53] = choices[53][1];
 units[53] = "101";
 comments[53] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[54]= "55)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[54]= new Array();
 choices[54][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[54][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[54][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[54][3] = "Todos las anteriores son ciertas.";
 answers[54] = choices[54][3];
 units[54] = "12";
 comments[54] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[55]= new Array();
 choices[55][0] = "Anual.";
 choices[55][1] = "Semestral.";
 choices[55][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[55][3] = "Bienal.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[56]= "57)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[56]= new Array();
 choices[56][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[56][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[56][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[56][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[57]= "58)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[57]= new Array();
 choices[57][0] = "los Subsecretarios y Secretarios generales";
 choices[57][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[57][2] = "los Secretarios de Estado";
 choices[57][3] = "los Subdirectores generales";
 answers[57] = choices[57][2];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[58]= new Array();
 choices[58][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[58][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[58][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[58][3] = "El Senado se compone de 350 senadores.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[59]= "60)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[59]= new Array();
 choices[59][0] = "Cifrada";
 choices[59][1] = "Conjunta";
 choices[59][2] = "Sistem&aacute;tica";
 choices[59][3] = "Todas son correctas";
 answers[59] = choices[59][3];
 units[59] = "10";
 comments[59] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[60]= "61)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[60]= new Array();
 choices[60][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[60][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[60][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[60][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[60] = choices[60][1];
 units[60] = "64";
 comments[60] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[61]= "62)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[61][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[61][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[61][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[61] = choices[61][0];
 units[61] = "45";
 comments[61] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[62]= "63)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[62]= new Array();
 choices[62][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[62][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[62][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[62][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[62] = choices[62][1];
 units[62] = "106";
 comments[62] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[63]= "64)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[63][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[63][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[63][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[63] = choices[63][0];
 units[63] = "43";
 comments[63] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[64]= "65)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[64]= new Array();
 choices[64][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[64][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[64][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[64][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[65]= "66)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[65]= new Array();
 choices[65][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[65][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[65][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[65][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[65] = choices[65][2];
 units[65] = "14";
 comments[65] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[66]= new Array();
 choices[66][0] = "No se aplican directamente en los Estados.";
 choices[66][1] = "No son vinculantes.";
 choices[66][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[66][3] = "Tienen alcance general.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[67]= "68)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[67]= new Array();
 choices[67][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[67][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[67][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[67][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[68]= new Array();
 choices[68][0] = "Por reembolso de pr&eacute;stamos.";
 choices[68][1] = "Por la venta de bienes.";
 choices[68][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[68][3] = "Por prestaci&oacute;n de servicios.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[69]= new Array();
 choices[69][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[69][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[69][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[69][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[69] = choices[69][0];
 units[69] = "84";
 comments[69] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[70]= new Array();
 choices[70][0] = "Jenkins";
 choices[70][1] = "Hudson";
 choices[70][2] = "SonarQube";
 choices[70][3] = "Todas lo son";
 answers[70] = choices[70][3];
 units[70] = "92";
 comments[70] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[71]= "72)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[71][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[71][2] = "b) y d) son verdaderas";
 choices[71][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[71] = choices[71][1];
 units[71] = "18, 20";
 comments[71] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[72]= new Array();
 choices[72][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[72][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[72][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[72][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[72] = choices[72][0];
 units[72] = "19";
 comments[72] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[73][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[73][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[73][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[74]= "75)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[74]= new Array();
 choices[74][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[74][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[74][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[74][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[74] = choices[74][0];
 units[74] = "31";
 comments[74] = "Id Pregunta: 2. AGE A1 2015";


