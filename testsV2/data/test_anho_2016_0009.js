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
var preguntaids = new Array();

//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[0]= "1)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[0]= new Array();
 choices[0][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[0][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[0][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[0][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[0] = choices[0][1];
 units[0] = "19";
 comments[0] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";
 preguntaids[0] = 167


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[1]= new Array();
 choices[1][0] = "DoS";
 choices[1][1] = "Phishing";
 choices[1][2] = "Sniffing";
 choices[1][3] = "Spoofing";
 answers[1] = choices[1][3];
 units[1] = "119";
 comments[1] = "Id Pregunta: 54. AGE A1 2015";
 preguntaids[1] = 54


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[2]= "3)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[2]= new Array();
 choices[2][0] = "Las respuestas a) y b) son correctas.";
 choices[2][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[2][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[2][3] = "Las respuestas a) y b) no son correctas.";
 answers[2] = choices[2][0];
 units[2] = "10";
 comments[2] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";
 preguntaids[2] = 498


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[3]= "4)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[3]= new Array();
 choices[3][0] = "Bases de datos orientadas a filas";
 choices[3][1] = "Bases de datos orientadas a documentos";
 choices[3][2] = "Bases de datos de clave/valor";
 choices[3][3] = "Bases de datos orientadas a objetos";
 answers[3] = choices[3][0];
 units[3] = "73";
 comments[3] = "Id Pregunta: 100. ";
 preguntaids[3] = 100


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[4]= new Array();
 choices[4][0] = "Memcached";
 choices[4][1] = "OpCache";
 choices[4][2] = "WinCache Extension for PHP";
 choices[4][3] = "Alternative PHP Cache";
 answers[4] = choices[4][0];
 units[4] = "65";
 comments[4] = "Id Pregunta: 34. AGE A1 2015";
 preguntaids[4] = 34


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[5]= new Array();
 choices[5][0] = "La Seguridad Social";
 choices[5][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[5][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[5][3] = "El Banco de Espa&ntilde;a";
 answers[5] = choices[5][3];
 units[5] = "15";
 comments[5] = "Id Pregunta: 113. ";
 preguntaids[5] = 113


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[6]= new Array();
 choices[6][0] = "JUnit, Artifactory y SonarQube";
 choices[6][1] = "JUnit, Artifactory y Selenium";
 choices[6][2] = "JUnit, SonarQube y Selenium";
 choices[6][3] = "ArtiFactory, SonarQube y Selenium";
 answers[6] = choices[6][2];
 units[6] = "92";
 comments[6] = "Id Pregunta: 91. AGE A1 2015";
 preguntaids[6] = 91


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[7][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[7][2] = "Ninguna es correcta.";
 choices[7][3] = "A y B son correctas.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";
 preguntaids[7] = 424


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[8]= "9)  Sobre el Plan Juncker:";
 choices[8]= new Array();
 choices[8][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[8][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[8][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[8][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[8] = 282


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[9]= "10)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[9]= new Array();
 choices[9][0] = "El acoso sexual.";
 choices[9][1] = "El acoso por raz&oacute;n del sexo.";
 choices[9][2] = "Ambas son correctas.";
 choices[9][3] = "A y B son incorrectas.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";
 preguntaids[9] = 421


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[10]= "11)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[10]= new Array();
 choices[10][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[10][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[10][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[10][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[10] = choices[10][0];
 units[10] = "28";
 comments[10] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[10] = 741


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[11]= "12)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[11]= new Array();
 choices[11][0] = "Interchange of Data between Administrations (IDA)";
 choices[11][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[11][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[11][3] = "Interoperability Electronic European Solution (IEES)";
 answers[11] = choices[11][1];
 units[11] = "43";
 comments[11] = "Id Pregunta: 84. AGE A1 2015";
 preguntaids[11] = 84


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[12]= new Array();
 choices[12][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[12][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[12][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[12][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[12] = 200


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[13]= "14)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[13]= new Array();
 choices[13][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[13][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[13][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[13][3] = "Todas las respuestas son correctas.";
 answers[13] = choices[13][1];
 units[13] = "101";
 comments[13] = "Id Pregunta: 608. Junta de Extremadura A1 2015";
 preguntaids[13] = 608


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[14]= "15)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[14]= new Array();
 choices[14][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[14][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[14][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[14][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[14] = 786


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[15]= "16)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[15]= new Array();
 choices[15][0] = "Un informe de g&eacute;nero.";
 choices[15][1] = "La variable de sexo.";
 choices[15][2] = "La variable de edad.";
 choices[15][3] = "La variable de comportamiento.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";
 preguntaids[15] = 415


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[16]= new Array();
 choices[16][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[16][1] = "El Gobierno.";
 choices[16][2] = "El Presidente del Gobierno.";
 choices[16][3] = "El Consejo de Ministros.";
 answers[16] = choices[16][1];
 units[16] = "10";
 comments[16] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[16] = 490


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[17]= "18)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[17]= new Array();
 choices[17][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[17][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[17][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[17][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[17] = 777


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta correcta:";
 choices[18]= new Array();
 choices[18][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[18][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[18][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[18][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[18] = choices[18][1];
 units[18] = "98";
 comments[18] = "Id Pregunta: 14. AGE A1 2015";
 preguntaids[18] = 14


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[19]= new Array();
 choices[19][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[19][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[19][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[19][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[19] = 202


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[20]= new Array();
 choices[20][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[20][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[20][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[20][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[20] = 239


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[21]= new Array();
 choices[21][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[21][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[21][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[21][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[21] = choices[21][1];
 units[21] = "125";
 comments[21] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[21] = 858


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[22]= new Array();
 choices[22][0] = "Dos Cap&iacute;tulos.";
 choices[22][1] = "Tres Cap&iacute;tulos.";
 choices[22][2] = "Un Cap&iacute;tulo.";
 choices[22][3] = "Cuatro Cap&iacute;tulos.";
 answers[22] = choices[22][1];
 units[22] = "1";
 comments[22] = "Id Pregunta: 222. CONSTITUCION1978";
 preguntaids[22] = 222


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[23]= "24)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[23]= new Array();
 choices[23][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[23][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[23][2] = "el Subdirector General que el Delegado designe";
 choices[23][3] = "el Secretario de Estado";
 answers[23] = choices[23][0];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[23] = 822


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[24]= "25)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[24]= new Array();
 choices[24][0] = "El Delegado del Gobierno.";
 choices[24][1] = "El Subdelegado del Gobierno.";
 choices[24][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[24][3] = "El Gobernador Civil.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[24] = 207


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[25]= new Array();
 choices[25][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[25][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[25][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[25][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[25] = choices[25][3];
 units[25] = "101";
 comments[25] = "Id Pregunta: 605. Junta de Extremadura A1 2015";
 preguntaids[25] = 605


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[26]= "27)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "en cada Comunidad Aut&oacute;noma";
 choices[26][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[26][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[26][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[26] = 815


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[27]= new Array();
 choices[27][0] = "Anual";
 choices[27][1] = "Mensual";
 choices[27][2] = "Semestral";
 choices[27][3] = "Trimestral";
 answers[27] = choices[27][3];
 units[27] = "15";
 comments[27] = "Id Pregunta: 119. ";
 preguntaids[27] = 119


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[28]= new Array();
 choices[28][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[28][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[28][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[28][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 319. UNION EUROPEA";
 preguntaids[28] = 319


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[29]= new Array();
 choices[29][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[29][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[29][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[29][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 292. UNION EUROPEA";
 preguntaids[29] = 292


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[30]= new Array();
 choices[30][0] = "Flexibilidad para variar el servicio o producto";
 choices[30][1] = "Eliminar desperdicios";
 choices[30][2] = "Decidir lo m&aacute;s tarde posible";
 choices[30][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[30] = choices[30][0];
 units[30] = "34";
 comments[30] = "Id Pregunta: 721. Metodologias Lean";
 preguntaids[30] = 721


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[31]= new Array();
 choices[31][0] = "Neo4J ";
 choices[31][1] = "OrientDB ";
 choices[31][2] = "InfoGrid ";
 choices[31][3] = "SimpleDB";
 answers[31] = choices[31][3];
 units[31] = "73";
 comments[31] = "Id Pregunta: 655. ";
 preguntaids[31] = 655


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[32]= new Array();
 choices[32][0] = "Publicidad.";
 choices[32][1] = "Constituci&oacute;n.";
 choices[32][2] = "Legalidad.";
 choices[32][3] = "Creaci&oacute;n.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[32] = 215


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[33]= new Array();
 choices[33][0] = "El aumento de la esperanza de vida.";
 choices[33][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[33][2] = "La reducci&oacute;n del desempleo.";
 choices[33][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[33] = choices[33][0];
 units[33] = "14";
 comments[33] = "Id Pregunta: 675. Estructura social";
 preguntaids[33] = 675


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[34]= "35)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[34]= new Array();
 choices[34][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[34][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[34][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[34][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[34] = choices[34][3];
 units[34] = "20";
 comments[34] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";
 preguntaids[34] = 750


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto al an&aacute;lisis DAFO:";
 choices[35]= new Array();
 choices[35][0] = "Considera detallada y exclusivamente factores internos.";
 choices[35][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[35][2] = "Considera detallada y exclusivamente factores externos.";
 choices[35][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[35] = choices[35][1];
 units[35] = "83";
 comments[35] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[35] = 41


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[36][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[36][2] = "Ambas son correctas.";
 choices[36][3] = "La A y B son incorrectas.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[36] = 417


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[37]= "38)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[37]= new Array();
 choices[37][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[37][1] = "los Subdelegados del Gobierno en las provincias";
 choices[37][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[37][3] = "a y b son correctas";
 answers[37] = choices[37][3];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[37] = 790


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Europeo.";
 choices[38][1] = "El Parlamento Europeo.";
 choices[38][2] = "El Consejo.";
 choices[38][3] = "La Comisi&oacute;n.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 361. UNION EUROPEA";
 preguntaids[38] = 361


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[39]= new Array();
 choices[39][0] = "A la CETIC";
 choices[39][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[39][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[39][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[39] = choices[39][3];
 units[39] = "19";
 comments[39] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[39] = 582


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[40]= "41)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[40]= new Array();
 choices[40][0] = "Conformidad";
 choices[40][1] = "Responsabilidad";
 choices[40][2] = "Adquisici&oacute;n";
 choices[40][3] = "Desempe&ntilde;o";
 answers[40] = choices[40][0];
 units[40] = "26";
 comments[40] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[40] = 548


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[41]= "42)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[41]= new Array();
 choices[41][0] = "Los cr&eacute;ditos";
 choices[41][1] = "Las partidas presupuestarias";
 choices[41][2] = "Los derechos";
 choices[41][3] = "Las obligaciones";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[41] = 453


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[42]= new Array();
 choices[42][0] = "Ford";
 choices[42][1] = "Google";
 choices[42][2] = "Toyota";
 choices[42][3] = "Facebook";
 answers[42] = choices[42][2];
 units[42] = "34";
 comments[42] = "Id Pregunta: 719. Metodologias Lean";
 preguntaids[42] = 719


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[43]= "44)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[43]= new Array();
 choices[43][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[43][1] = "Ninguna de las respuestas es correcta.";
 choices[43][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[43][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[43] = choices[43][0];
 units[43] = "5";
 comments[43] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[43] = 334


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[44]= "45)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[44]= new Array();
 choices[44][0] = "A la persona demandante.";
 choices[44][1] = "A la persona demandada.";
 choices[44][2] = "Al &oacute;rgano judicial.";
 choices[44][3] = "Al &oacute;rgano administrativo.";
 answers[44] = choices[44][1];
 units[44] = "14";
 comments[44] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[44] = 400


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[45]= "46)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[45]= new Array();
 choices[45][0] = "Ejecutivo";
 choices[45][1] = "Limitativo";
 choices[45][2] = "Estimativo";
 choices[45][3] = "Progresivo";
 answers[45] = choices[45][2];
 units[45] = "10";
 comments[45] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[45] = 448


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[46]= "47)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[46]= new Array();
 choices[46][0] = "Medidas de igualdad.";
 choices[46][1] = "Objetivos de igualdad.";
 choices[46][2] = "Ambas son correctas.";
 choices[46][3] = "A y B son incorrectas.";
 answers[46] = choices[46][2];
 units[46] = "14";
 comments[46] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";
 preguntaids[46] = 403


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[47]= new Array();
 choices[47][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[47][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[47][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][2];
 units[47] = "23";
 comments[47] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";
 preguntaids[47] = 744


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[48]= new Array();
 choices[48][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[48][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[48][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[48][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[48] = choices[48][1];
 units[48] = "22";
 comments[48] = "Id Pregunta: 122. ";
 preguntaids[48] = 122


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[49]= "50)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[49]= new Array();
 choices[49][0] = "Un a&ntilde;o prorrogable";
 choices[49][1] = "Dos a&ntilde;os no prorrogables";
 choices[49][2] = "Un a&ntilde;o no prorrogable";
 choices[49][3] = "Dos a&ntilde;os prorrogables";
 answers[49] = choices[49][2];
 units[49] = "37";
 comments[49] = "Id Pregunta: 86. AGE A1 2015";
 preguntaids[49] = 86


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[50]= "51)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[50]= new Array();
 choices[50][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[50][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[50][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[50][3] = "Todos las anteriores son ciertas.";
 answers[50] = choices[50][3];
 units[50] = "12";
 comments[50] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[50] = 137


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[51]= "52)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[51]= new Array();
 choices[51][0] = "personalidad jur&iacute;dica propia";
 choices[51][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[51][2] = "personalidad jur&iacute;dica plena";
 choices[51][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[51] = 774


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[52]= "53)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Incremental, diferencial, completa";
 choices[52][1] = "Completa, incremental, diferencial";
 choices[52][2] = "Completa, diferencial, incremental";
 choices[52][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[52] = choices[52][0];
 units[52] = "53";
 comments[52] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";
 preguntaids[52] = 66


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[53]= "54)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[53]= new Array();
 choices[53][0] = "18 miembros.";
 choices[53][1] = "Ninguna es correcta.";
 choices[53][2] = "22 miembros.";
 choices[53][3] = "21 miembros.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 347. UNION EUROPEA";
 preguntaids[53] = 347


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[54]= new Array();
 choices[54][0] = "IRIA";
 choices[54][1] = "GALATEA";
 choices[54][2] = "BADARAL";
 choices[54][3] = "SOROLLA";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 446. SERVICIOS COMUNES";
 preguntaids[54] = 446


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[55]= new Array();
 choices[55][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[55][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[55][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[55][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[55] = choices[55][0];
 units[55] = "46";
 comments[55] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[55] = 629


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[56]= new Array();
 choices[56][0] = "Art. 13, L.O.3/2007.";
 choices[56][1] = "Art. 14, L.O.3/2007.";
 choices[56][2] = "Art. 11, L.O.3/2007.";
 choices[56][3] = "Ninguna es correcta.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";
 preguntaids[56] = 398


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[57]= "58)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[57]= new Array();
 choices[57][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[57][1] = "Programa de cartas de servicios";
 choices[57][2] = "Programa para la mejora continua de las organizaciones.";
 choices[57][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[57] = choices[57][2];
 units[57] = "19";
 comments[57] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[57] = 747


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[58]= "59)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[58]= new Array();
 choices[58][0] = "Los cr&eacute;ditos";
 choices[58][1] = "Las partidas presupuestarias";
 choices[58][2] = "Los derechos";
 choices[58][3] = "Las obligaciones";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[58] = 454


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[59]= new Array();
 choices[59][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[59][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[59][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[59][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[59] = choices[59][1];
 units[59] = "101";
 comments[59] = "Id Pregunta: 5. AGE A1 2015";
 preguntaids[59] = 5


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[60]= "61)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[60]= new Array();
 choices[60][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[60][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[60][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[60][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[60] = 524


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[61]= new Array();
 choices[61][0] = "IEEE 802.11p";
 choices[61][1] = "IEEE 802.11r";
 choices[61][2] = "IEEE 802.11v";
 choices[61][3] = "IEEE 802.11w";
 answers[61] = choices[61][1];
 units[61] = "112";
 comments[61] = "Id Pregunta: 574. Tema 112. TAI 2016.";
 preguntaids[61] = 574


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[62]= "63)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[62]= new Array();
 choices[62][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[62][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[62][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[62][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[62] = choices[62][0];
 units[62] = "92";
 comments[62] = "Id Pregunta: 696. INTEGRACION CONTINUA";
 preguntaids[62] = 696


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[63]= "64)  La estructura de la Estrategia TIC:";
 choices[63]= new Array();
 choices[63][0] = "5 principios rectores, 7 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[63][1] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[63][2] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[63][3] = "5 principios rectores, 6 objetivos estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[63] = choices[63][2];
 units[63] = "28";
 comments[63] = "Id Pregunta: 740. Estrategia TIC";
 preguntaids[63] = 740


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[64]= "65)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[64]= new Array();
 choices[64][0] = "el Secretario General";
 choices[64][1] = "el Subdirector General";
 choices[64][2] = "el Secretario de Estado";
 choices[64][3] = "ninguna es correcta";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[64] = 823


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[65]= new Array();
 choices[65][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[65][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[65][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[65][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[65] = choices[65][2];
 units[65] = "17";
 comments[65] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[65] = 558


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[66]= new Array();
 choices[66][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[66][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[66][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[66][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[66] = choices[66][1];
 units[66] = "28";
 comments[66] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[66] = 734


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[67]= "68)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[67]= new Array();
 choices[67][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[67][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[67][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[67][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[67] = 779


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[68]= new Array();
 choices[68][0] = "Constitucional.";
 choices[68][1] = "Penal.";
 choices[68][2] = "Militar.";
 choices[68][3] = "Tribunales consuetudinarios.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 262. CONSTITUCION1978";
 preguntaids[68] = 262


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[69]= "70)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[69]= new Array();
 choices[69][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[69][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[69][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[69][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 340. UNION EUROPEA";
 preguntaids[69] = 340


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[70]= new Array();
 choices[70][0] = "Burn-up chart";
 choices[70][1] = "Arquitectural Skype";
 choices[70][2] = "Burn-down chart";
 choices[70][3] = "Definition of done";
 answers[70] = choices[70][1];
 units[70] = "34, 84";
 comments[70] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[70] = 731


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[71]= "72)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[71]= new Array();
 choices[71][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[71][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[71][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[71][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[71] = 541


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[72]= "73)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Clustering";
 choices[72][1] = "Deduplicaci&oacute;n";
 choices[72][2] = "Virtualizaci&oacute;n";
 choices[72][3] = "Contenerizaci&oacute;n";
 answers[72] = choices[72][2];
 units[72] = "124";
 comments[72] = "Id Pregunta: 98. AGE A1 2015";
 preguntaids[72] = 98


//  Id pregunta: 856 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a la Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta falsa:";
 choices[73]= new Array();
 choices[73][0] = "Proporciona un marco de criterios, recomendaciones y buenas pr&aacute;cticas a tener en cuenta por sus Departamentos y organismos al crear, generar contenidos o evolucionar los sitios y portales web, las sedes electr&oacute;nicas o los sitios relacionados con las nuevas tecnolog&iacute;as web2.0.";
 choices[73][1] = "Se aprob&oacute; mediante la  Resoluci&oacute;n de 21 de marzo de 2013, de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[73][2] = "La Gu&iacute;a de Comunicaci&oacute;n Digital se divide en cuatro partes y cada una de ellas consta de una serie de fasc&iacute;culos que pueden ser utilizados de forma independiente de acuerdo con las necesidades de cada departamento, organismo, unidad promotora o responsable de un sitio web.";
 choices[73][3] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado puede ser utilizada libremente y no requiere autorizaci&oacute;n previa.";
 answers[73] = choices[73][2];
 units[73] = "125";
 comments[73] = "Id Pregunta: 856. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[73] = 856


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[74]= "75)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[74]= new Array();
 choices[74][0] = "P&uacute;blica.";
 choices[74][1] = "Privada.";
 choices[74][2] = "Ambas son correctas.";
 choices[74][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";
 preguntaids[74] = 419


