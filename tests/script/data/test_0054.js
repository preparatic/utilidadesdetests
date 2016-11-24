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

//  Id pregunta: 10032 Año de creación de pregunta: 2016
 questions[0]= "1)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[0]= new Array();
 choices[0][0] = "ASF-AL (Apache License 2.0)";
 choices[0][1] = "EUPL (European Union Public License)";
 choices[0][2] = "LGPL (Lesser General Public License)";
 choices[0][3] = "MIT(MIT License)";
 answers[0] = choices[0][1];
 units[0] = "43";
 comments[0] = "Id Pregunta: 10032. AGE A1 2015";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[1]= new Array();
 choices[1][0] = "Cifrado de las comunicaciones";
 choices[1][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[1][2] = "Registro de los accesos";
 choices[1][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[1] = choices[1][1];
 units[1] = "35";
 comments[1] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10375 Año de creación de pregunta: 2016
 questions[2]= "3)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[2]= new Array();
 choices[2][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[2][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[2][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[2][3] = "Todas las respuestas son correctas.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10375. UNION EUROPEA";


//  Id pregunta: 10035 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; es Java Web Start?";
 choices[3]= new Array();
 choices[3][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[3][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[3][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[3][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[3] = choices[3][3];
 units[3] = "64";
 comments[3] = "Id Pregunta: 10035. AGE A1 2015";


//  Id pregunta: 10362 Año de creación de pregunta: 2016
 questions[4]= "5)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[4]= new Array();
 choices[4][0] = "Son actos normativos.";
 choices[4][1] = "Poseen alcance general.";
 choices[4][2] = "No son obligatorias.";
 choices[4][3] = "Son actos individuales no normativos.";
 answers[4] = choices[4][3];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10020 Año de creación de pregunta: 2016
 questions[5]= "6)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[5]= new Array();
 choices[5][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[5][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[5][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[5][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[5] = choices[5][2];
 units[5] = "27";
 comments[5] = "Id Pregunta: 10020. AGE A1 2015";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[6]= new Array();
 choices[6][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[6][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[6][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[6][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10414 Año de creación de pregunta: 2016
 questions[7]= "8)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Un informe de impacto de g&eacute;nero.";
 choices[7][1] = "Un programa de igualdad de oportunidades.";
 choices[7][2] = "Un plan de Igualdad de Oportunidades.";
 choices[7][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10225 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[8]= new Array();
 choices[8][0] = "las Cortes generales.";
 choices[8][1] = "los partidos pol&iacute;ticos.";
 choices[8][2] = "los sindicatos.";
 choices[8][3] = "las Comunidades Aut&oacute;nomas.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10225. CONSTITUCION1978";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[9]= new Array();
 choices[9][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[9][1] = "Anteriormente se denominaba Sonar.";
 choices[9][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[9][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[9] = choices[9][2];
 units[9] = "92";
 comments[9] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10303 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[10]= new Array();
 choices[10][0] = "Veinticinco.";
 choices[10][1] = "Veintisiete.";
 choices[10][2] = "Veintinueve.";
 choices[10][3] = "Cuarenta y uno.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10575 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[11]= new Array();
 choices[11][0] = "MySQL";
 choices[11][1] = "SQLite";
 choices[11][2] = "Zope";
 choices[11][3] = "MariaDB";
 answers[11] = choices[11][2];
 units[11] = "61";
 comments[11] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[12]= new Array();
 choices[12][0] = "Veinticinco.";
 choices[12][1] = "Veintiuno.";
 choices[12][2] = "Dieciocho.";
 choices[12][3] = "Diecinueve.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10145 Año de creación de pregunta: 2016
 questions[13]= "14)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[13][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[13][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[13][3] = "Todas las anteriores son ciertas";
 answers[13] = choices[13][3];
 units[13] = "8";
 comments[13] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10101 Año de creación de pregunta: 2016
 questions[14]= "15)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[14]= new Array();
 choices[14][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[14][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[14][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[14][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[14] = choices[14][1];
 units[14] = "73";
 comments[14] = "Id Pregunta: 10101. ";


//  Id pregunta: 10616 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[15]= new Array();
 choices[15][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[15][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[15][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[15][3] = "Todas las respuestas son correctas.";
 answers[15] = choices[15][2];
 units[15] = "42";
 comments[15] = "Id Pregunta: 10616. Junta de Extremadura A1 2015";


//  Id pregunta: 10443 Año de creación de pregunta: 2016
 questions[16]= "17)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[16]= new Array();
 choices[16][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[16][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[16][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[16][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[16] = choices[16][1];
 units[16] = "43";
 comments[16] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10201 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[17]= new Array();
 choices[17][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[17][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[17][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[17][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[18]= "19)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[18]= new Array();
 choices[18][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[18][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[18][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[18][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[18] = choices[18][0];
 units[18] = "65";
 comments[18] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10214 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[19]= new Array();
 choices[19][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[19][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[19][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[19][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10558 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[20]= new Array();
 choices[20][0] = "En 2015";
 choices[20][1] = "En 2013";
 choices[20][2] = "En 2016";
 choices[20][3] = "En 2007";
 answers[20] = choices[20][1];
 units[20] = "19";
 comments[20] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10001 Año de creación de pregunta: 2016
 questions[21]= "22)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[21]= new Array();
 choices[21][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[21][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[21][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[21][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[21] = choices[21][2];
 units[21] = "26";
 comments[21] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10536 Año de creación de pregunta: 2016
 questions[22]= "23)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[22]= new Array();
 choices[22][0] = "apud acta";
 choices[22][1] = "presencialmente";
 choices[22][2] = "electr&oacute;nicamente";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[23]= "24)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[23]= new Array();
 choices[23][0] = "El servicio de teleasistencia.";
 choices[23][1] = "El servicio de ayuda a domicilio.";
 choices[23][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[23][3] = "Todas las anteriores son correctas.";
 answers[23] = choices[23][3];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10463 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[24]= new Array();
 choices[24][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[24][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[24][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[24][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[24] = choices[24][3];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10463. PRESUPUESTOS GENERALES";


//  Id pregunta: 10206 Año de creación de pregunta: 2016
 questions[25]= "26)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[25]= new Array();
 choices[25][0] = "El Gobierno.";
 choices[25][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[25][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[25][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10206. CONSTITUCION1978";


//  Id pregunta: 10224 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[26]= new Array();
 choices[26][0] = "Art&iacute;culo 16.2.";
 choices[26][1] = "Art&iacute;culo 17.1.";
 choices[26][2] = "Art&iacute;culo 18.1.";
 choices[26][3] = "Art&iacute;culo 18.2.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10245 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[27]= new Array();
 choices[27][0] = "De los derechos y deberes fundamentales.";
 choices[27][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[27][2] = "Derechos y libertades.";
 choices[27][3] = "De la Corona.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10588 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "14";
 choices[28][1] = "11";
 choices[28][2] = "12";
 choices[28][3] = "15";
 answers[28] = choices[28][0];
 units[28] = "19";
 comments[28] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10048 Año de creación de pregunta: 2016
 questions[29]= "30)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[29]= new Array();
 choices[29][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[29][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[29][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[29][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[29] = choices[29][3];
 units[29] = "77";
 comments[29] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[30]= "31)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[30]= new Array();
 choices[30][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[30][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[30][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[30][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[30] = choices[30][2];
 units[30] = "43";
 comments[30] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10146 Año de creación de pregunta: 2016
 questions[31]= "32)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[31]= new Array();
 choices[31][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[31][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[31][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[31][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[31] = choices[31][0];
 units[31] = "8";
 comments[31] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[32]= "33)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[32]= new Array();
 choices[32][0] = "18 miembros.";
 choices[32][1] = "Ninguna es correcta.";
 choices[32][2] = "22 miembros.";
 choices[32][3] = "21 miembros.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10491 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[33]= new Array();
 choices[33][0] = "Un programa presupuestario.";
 choices[33][1] = "Un concepto presupuestario.";
 choices[33][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[33][3] = "Un cr&eacute;dito presupuestario.";
 answers[33] = choices[33][0];
 units[33] = "10";
 comments[33] = "Id Pregunta: 10491. PRESUPUESTOS GENERALES";


//  Id pregunta: 10275 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[34][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[34][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[34][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[34] = choices[34][2];
 units[34] = "22";
 comments[34] = "Id Pregunta: 10275. LEY DE TRANSPARENCIA";


//  Id pregunta: 10268 Año de creación de pregunta: 2016
 questions[35]= "36)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[35]= new Array();
 choices[35][0] = "Cuatro.";
 choices[35][1] = "Una.";
 choices[35][2] = "Cinco.";
 choices[35][3] = "Nueve.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10045 Año de creación de pregunta: 2016
 questions[36]= "37)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[36]= new Array();
 choices[36][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[36][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[36][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[36][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[36] = choices[36][1];
 units[36] = "74";
 comments[36] = "Id Pregunta: 10045. AGE A1 2015";


//  Id pregunta: 10297 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[37]= new Array();
 choices[37][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[37][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[37][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[37][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10021 Año de creación de pregunta: 2016
 questions[38]= "39)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[38]= new Array();
 choices[38][0] = "Gesti&oacute;n de la disponibilidad";
 choices[38][1] = "Gesti&oacute;n de la demanda";
 choices[38][2] = "Gesti&oacute;n de entregas";
 choices[38][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[38] = choices[38][0];
 units[38] = "101";
 comments[38] = "Id Pregunta: 10021. AGE A1 2015";


//  Id pregunta: 10673 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[39]= new Array();
 choices[39][0] = "El aumento de la esperanza de vida.";
 choices[39][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[39][2] = "La reducci&oacute;n del desempleo.";
 choices[39][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "14";
 comments[39] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10392 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[40]= new Array();
 choices[40][0] = "Indirecta.";
 choices[40][1] = "Directa.";
 choices[40][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[40][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[40] = choices[40][1];
 units[40] = "14";
 comments[40] = "Id Pregunta: 10392. POLITICAS DE IGUALDAD";


//  Id pregunta: 10144 Año de creación de pregunta: 2016
 questions[41]= "42)  Sobre el recurso de reposici&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[41][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[41][2] = "Ha desaparecido en la Ley 39/2015";
 choices[41][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[41] = choices[41][0];
 units[41] = "8";
 comments[41] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 10497 Año de creación de pregunta: 2016
 questions[42]= "43)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[42]= new Array();
 choices[42][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[42][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[42][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[42][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[42] = choices[42][3];
 units[42] = "10";
 comments[42] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10149 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[43]= new Array();
 choices[43][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[43][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 10149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 10584 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[44]= new Array();
 choices[44][0] = "Bienalmente";
 choices[44][1] = "Anualmente";
 choices[44][2] = "Semestralmente";
 choices[44][3] = "Cada cuatro a&ntilde;os";
 answers[44] = choices[44][1];
 units[44] = "19";
 comments[44] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10659 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[45]= new Array();
 choices[45][0] = "Orientaci&oacute;n a objetos";
 choices[45][1] = "MapReduce";
 choices[45][2] = "Pipeline filtering";
 choices[45][3] = "Programaci&oacute;n funcional";
 answers[45] = choices[45][1];
 units[45] = "73";
 comments[45] = "Id Pregunta: 10659. ";


//  Id pregunta: 10069 Año de creación de pregunta: 2016
 questions[46]= "47)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[46]= new Array();
 choices[46][0] = "Ejecuci&oacute;n";
 choices[46][1] = "Adjudicaci&oacute;n";
 choices[46][2] = "Licitaci&oacute;n";
 choices[46][3] = "Formalizaci&oacute;n";
 answers[46] = choices[46][3];
 units[46] = "37";
 comments[46] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10326 Año de creación de pregunta: 2016
 questions[47]= "48)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[47]= new Array();
 choices[47][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[47][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[47][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[47][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[47] = choices[47][3];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10326. UNION EUROPEA";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[48]= new Array();
 choices[48][0] = "Las respuestas a) y b) son correctas.";
 choices[48][1] = "Las respuestas a) y b) no son correctas.";
 choices[48][2] = "Contenido coherente con los planes sectoriales.";
 choices[48][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[48] = choices[48][0];
 units[48] = "10";
 comments[48] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10135 Año de creación de pregunta: 2016
 questions[49]= "50)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[49]= new Array();
 choices[49][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[49][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[49][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[49][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[49] = choices[49][0];
 units[49] = "12";
 comments[49] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10418 Año de creación de pregunta: 2016
 questions[50]= "51)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[50]= new Array();
 choices[50][0] = "P&uacute;blica.";
 choices[50][1] = "Privada.";
 choices[50][2] = "A y B son correctas.";
 choices[50][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10418. POLITICAS DE IGUALDAD";


//  Id pregunta: 10505 Año de creación de pregunta: 2016
 questions[51]= "52)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[51]= new Array();
 choices[51][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[51][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[51][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[51][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10505. PRESUPUESTOS GENERALES";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[52]= new Array();
 choices[52][0] = "El Parlamento y el Consejo.";
 choices[52][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[52][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[52][3] = "La Comisi&oacute;n y el Consejo.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10124 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[53]= new Array();
 choices[53][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[53][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[53][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[53][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[53] = choices[53][0];
 units[53] = "22";
 comments[53] = "Id Pregunta: 10124. ";


//  Id pregunta: 10322 Año de creación de pregunta: 2016
 questions[54]= "55)  El Tribunal de Justicia est&aacute; formado por:";
 choices[54]= new Array();
 choices[54][0] = "Un Juez de cada Estado miembro.";
 choices[54][1] = "Por dos Jueces de cada Estado miembro.";
 choices[54][2] = "Por veinte Jueces.";
 choices[54][3] = "Por ocho Jueces.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10609 Año de creación de pregunta: 2016
 questions[55]= "56)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[55]= new Array();
 choices[55][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[55][1] = "Clasificaci&oacute;n por cuenta.";
 choices[55][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[55][3] = "Clasificaci&oacute;n por intercambio.";
 answers[55] = choices[55][3];
 units[55] = "56";
 comments[55] = "Id Pregunta: 10609. Junta de Extremadura A1 2015";


//  Id pregunta: 10023 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[56]= new Array();
 choices[56][0] = "SPARQL";
 choices[56][1] = "UnQL";
 choices[56][2] = "XQUERY";
 choices[56][3] = "RQL";
 answers[56] = choices[56][0];
 units[56] = "74";
 comments[56] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10109 Año de creación de pregunta: 2016
 questions[57]= "58)  Big Data:";
 choices[57]= new Array();
 choices[57][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[57][1] = "No puede emplearse para tratar datos no estructurados";
 choices[57][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][3];
 units[57] = "73";
 comments[57] = "Id Pregunta: 10109. ";


//  Id pregunta: 10506 Año de creación de pregunta: 2016
 questions[58]= "59)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[58]= new Array();
 choices[58][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[58][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[58][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[58][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 10506. PRESUPUESTOS GENERALES";


//  Id pregunta: 10559 Año de creación de pregunta: 2016
 questions[59]= "60)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[59]= new Array();
 choices[59][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[59][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[59][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[59][3] = "Todos los anteriores";
 answers[59] = choices[59][3];
 units[59] = "19";
 comments[59] = "Id Pregunta: 10559. Agenda Digital";


//  Id pregunta: 10257 Año de creación de pregunta: 2016
 questions[60]= "61)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[60]= new Array();
 choices[60][0] = "El Presidente y su gabinete.";
 choices[60][1] = "El Presidente y sus Ministros.";
 choices[60][2] = "El Rey y el Presidente.";
 choices[60][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10257. CONSTITUCION1978";


//  Id pregunta: 10131 Año de creación de pregunta: 2016
 questions[61]= "62)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[61]= new Array();
 choices[61][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[61][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[61][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[61][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[61] = choices[61][0];
 units[61] = "12";
 comments[61] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10310 Año de creación de pregunta: 2016
 questions[62]= "63)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[62]= new Array();
 choices[62][0] = "La Comisi&oacute;n Europea.";
 choices[62][1] = "El Consejo Europeo.";
 choices[62][2] = "El Consejo de Europa.";
 choices[62][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10271 Año de creación de pregunta: 2016
 questions[63]= "64)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[63]= new Array();
 choices[63][0] = "Ley org&aacute;nica.";
 choices[63][1] = "Ley ordinaria.";
 choices[63][2] = "Ley de bases.";
 choices[63][3] = "Ley marco.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 10271. CONSTITUCION1978";


//  Id pregunta: 10120 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[64]= new Array();
 choices[64][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[64][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[64][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[64][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[64] = choices[64][3];
 units[64] = "22";
 comments[64] = "Id Pregunta: 10120. ";


//  Id pregunta: 10522 Año de creación de pregunta: 2016
 questions[65]= "66)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[65]= new Array();
 choices[65][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[65][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[65][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[65][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[65] = choices[65][1];
 units[65] = "7";
 comments[65] = "Id Pregunta: 10522. LEY 39/2015";


//  Id pregunta: 10555 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[66]= new Array();
 choices[66][0] = "Consumidores";
 choices[66][1] = "PYMES y Start-ups";
 choices[66][2] = "La Industria";
 choices[66][3] = "Todos los anteriores";
 answers[66] = choices[66][3];
 units[66] = "17";
 comments[66] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10328 Año de creación de pregunta: 2016
 questions[67]= "68)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[67]= new Array();
 choices[67][0] = "El Presidente del Consejo Europeo.";
 choices[67][1] = "La Comisi&oacute;n.";
 choices[67][2] = "El Consejo.";
 choices[67][3] = "El Parlamento Europeo.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10460 Año de creación de pregunta: 2016
 questions[68]= "69)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[68]= new Array();
 choices[68][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[68][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[68][2] = "La normativa reguladora de cada derecho.";
 choices[68][3] = "Ley 50/1997, del Gobierno.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10476 Año de creación de pregunta: 2016
 questions[69]= "70)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[69]= new Array();
 choices[69][0] = "Al Gobierno.";
 choices[69][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[69][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[69][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[69] = choices[69][2];
 units[69] = "10";
 comments[69] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10333 Año de creación de pregunta: 2016
 questions[70]= "71)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[70]= new Array();
 choices[70][0] = "Las instituciones comunitarias.";
 choices[70][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[70][2] = "Los Estados miembros.";
 choices[70][3] = "Los nacionales de los Estados miembros.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10333. UNION EUROPEA";


//  Id pregunta: 10219 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[71]= new Array();
 choices[71][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[71][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[71][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[71][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 10219. CONSTITUCION1978";


//  Id pregunta: 10234 Año de creación de pregunta: 2016
 questions[72]= "73)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[72]= new Array();
 choices[72][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[72][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[72][2] = "Al Congreso de los Diputados.";
 choices[72][3] = "Al Gobierno.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10234. CONSTITUCION1978";


//  Id pregunta: 10210 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[73]= new Array();
 choices[73][0] = "El rey, a propuesta del Gobierno.";
 choices[73][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[73][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[73][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[73] = choices[73][1];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10210. CONSTITUCION1978";


//  Id pregunta: 10456 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[74]= new Array();
 choices[74][0] = "a) Los cuatro ejercicios siguientes.";
 choices[74][1] = "b) El ejercicio siguiente.";
 choices[74][2] = "c) Los dos ejercicios siguientes.";
 choices[74][3] = "d) Los tres ejercicios siguientes.";
 answers[74] = choices[74][3];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


