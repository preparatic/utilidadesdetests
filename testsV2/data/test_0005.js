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

//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[0]= new Array();
 choices[0][0] = "El Consejo Europeo.";
 choices[0][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[0][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[0][3] = "El Parlamento Europeo.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[0] = 313


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[1]= new Array();
 choices[1][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[1][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[1][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[1][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[1] = choices[1][1];
 units[1] = "23";
 comments[1] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[1] = 745


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[2]= "3)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[2]= new Array();
 choices[2][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[2][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[2][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[2][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[2] = choices[2][3];
 units[2] = "20";
 comments[2] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";
 preguntaids[2] = 750


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[3]= "4)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[3]= new Array();
 choices[3][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[3][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[3][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[3][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[3] = choices[3][1];
 units[3] = "35";
 comments[3] = "Id Pregunta: 78. AGE A1 2015";
 preguntaids[3] = 78


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[4]= new Array();
 choices[4][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[4][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[4][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[4][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[4] = choices[4][1];
 units[4] = "34, 84";
 comments[4] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[4] = 726


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[5]= new Array();
 choices[5][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[5][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[5][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[5] = choices[5][0];
 units[5] = "84";
 comments[5] = "Id Pregunta: 619. Junta de Extremadura A1 2015";
 preguntaids[5] = 619


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[6]= new Array();
 choices[6][0] = "Veinticinco.";
 choices[6][1] = "Veintiuno.";
 choices[6][2] = "Dieciocho.";
 choices[6][3] = "Diecinueve.";
 answers[6] = choices[6][0];
 units[6] = "5";
 comments[6] = "Id Pregunta: 325. UNION EUROPEA";
 preguntaids[6] = 325


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[7]= new Array();
 choices[7][0] = "Un representante de la Administraci&oacute;n local.";
 choices[7][1] = "Un representante del Tribunal de Cuentas.";
 choices[7][2] = "Un representante del Defensor del Pueblo.";
 choices[7][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[7] = choices[7][0];
 units[7] = "22";
 comments[7] = "Id Pregunta: 123. ";
 preguntaids[7] = 123


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[8]= "9)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[8]= new Array();
 choices[8][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[8][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[8][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[8][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 198. CONSTITUCION1978";
 preguntaids[8] = 198


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[9]= "10)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[9]= new Array();
 choices[9][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[9][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[9][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[9][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[9] = 391


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[10]= "11)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[10]= new Array();
 choices[10][0] = "en cada Comunidad Aut&oacute;noma";
 choices[10][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[10][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[10][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[10] = choices[10][1];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[10] = 815


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[11]= new Array();
 choices[11][0] = "CVS";
 choices[11][1] = "SVN";
 choices[11][2] = "Team Foundation Server";
 choices[11][3] = "Apache Tomcat";
 answers[11] = choices[11][3];
 units[11] = "92";
 comments[11] = "Id Pregunta: 702. INTEGRACION CONTINUA";
 preguntaids[11] = 702


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[12]= "13)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Unidad de igualdad.";
 choices[12][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[12][2] = "Ninguna de las anteriores.";
 choices[12][3] = "A y B son correctas.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";
 preguntaids[12] = 433


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[13]= new Array();
 choices[13][0] = "ISO/IEC 31000";
 choices[13][1] = "ISO/IEC 14000";
 choices[13][2] = "ISO/IEC 38500";
 choices[13][3] = "ISO/IEC 18000";
 answers[13] = choices[13][2];
 units[13] = "26";
 comments[13] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[13] = 545


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[14]= new Array();
 choices[14][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[14][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[14][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[14][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[14] = choices[14][0];
 units[14] = "26";
 comments[14] = "Id Pregunta: 544. Gobernanza TIC";
 preguntaids[14] = 544


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[15]= "16)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[15]= new Array();
 choices[15][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[15][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[15][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[15][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[15] = choices[15][3];
 units[15] = "5";
 comments[15] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[15] = 345


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[16]= new Array();
 choices[16][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[16][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[16][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[16][3] = "A las Diputaciones y a las Comarcas.";
 answers[16] = choices[16][3];
 units[16] = "1";
 comments[16] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[16] = 229


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[17]= "18)  La Poblaci&oacute;n Activa incluye a:";
 choices[17]= new Array();
 choices[17][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[17][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[17][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[17][3] = "Todo aquel que desea trabajar";
 answers[17] = choices[17][2];
 units[17] = "15";
 comments[17] = "Id Pregunta: 110. ";
 preguntaids[17] = 110


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[18]= new Array();
 choices[18][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[18][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[18][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[18][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[18] = 393


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[19]= "20)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[19]= new Array();
 choices[19][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[19][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[19][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[19][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[19] = choices[19][2];
 units[19] = "45";
 comments[19] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[19] = 601


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[20]= "21)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[20]= new Array();
 choices[20][0] = "los Subsecretarios y los Secretarios generales";
 choices[20][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[20][2] = "los Secretarios de Estado y los Directores generales";
 choices[20][3] = "los Ministros y los Secretarios de Estado";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[20] = 788


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[21]= new Array();
 choices[21][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[21][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[21][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[21][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[21] = choices[21][0];
 units[21] = "26";
 comments[21] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[21] = 0


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[22]= "23)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[22]= new Array();
 choices[22][0] = "Integrar la estrategia TIC con la de negocio";
 choices[22][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[22][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[22][3] = "Todas las anteriores";
 answers[22] = choices[22][3];
 units[22] = "26";
 comments[22] = "Id Pregunta: 549. Gobernanza TIC";
 preguntaids[22] = 549


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[23]= "24)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[23]= new Array();
 choices[23][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[23][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[23][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[23][3] = "Todos los anteriores";
 answers[23] = choices[23][3];
 units[23] = "19";
 comments[23] = "Id Pregunta: 561. Agenda Digital";
 preguntaids[23] = 561


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[24]= new Array();
 choices[24][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[24][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[24][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[24][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[24] = choices[24][1];
 units[24] = "125";
 comments[24] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[24] = 858


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[25]= "26)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[25]= new Array();
 choices[25][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[25][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[25][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[25][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[25] = choices[25][0];
 units[25] = "7";
 comments[25] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[25] = 673


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[26]= "27)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[26]= new Array();
 choices[26][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[26][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[26][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[26][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[26] = choices[26][2];
 units[26] = "7";
 comments[26] = "Id Pregunta: 534. LEY 39/2015";
 preguntaids[26] = 534


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[27]= "28)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[27]= new Array();
 choices[27][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[27][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[27][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[27][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[27] = choices[27][0];
 units[27] = "35";
 comments[27] = "Id Pregunta: 75. AGE A1 2015";
 preguntaids[27] = 75


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[28]= "29)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[28]= new Array();
 choices[28][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[28][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[28][2] = "Ambas son correctas.";
 choices[28][3] = "A y B son incorrectas.";
 answers[28] = choices[28][2];
 units[28] = "14";
 comments[28] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[28] = 401


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[29]= "30)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[29]= new Array();
 choices[29][0] = "l Consejo General del Poder Judicial";
 choices[29][1] = "El pleno de Tribunal Constitucional";
 choices[29][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[29][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[29] = choices[29][3];
 units[29] = "1";
 comments[29] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[29] = 181


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[30]= new Array();
 choices[30][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[30][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[30][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[30][3] = "El Instituto de la Mujer de Extremadura.";
 answers[30] = choices[30][3];
 units[30] = "14";
 comments[30] = "Id Pregunta: 647. Junta de Extremadura A1 2015";
 preguntaids[30] = 647


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


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[32]= new Array();
 choices[32][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[32][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[32][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[32][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[32] = choices[32][1];
 units[32] = "89";
 comments[32] = "Id Pregunta: 621. Junta de Extremadura A1 2015";
 preguntaids[32] = 621


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[33]= "34)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[33]= new Array();
 choices[33][0] = "623";
 choices[33][1] = "649";
 choices[33][2] = "626";
 choices[33][3] = "565";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 341. UNION EUROPEA";
 preguntaids[33] = 341


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[34]= "35)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[34]= new Array();
 choices[34][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[34][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[34][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[34][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[34] = choices[34][3];
 units[34] = "89";
 comments[34] = "Id Pregunta: 95. AGE A1 2015";
 preguntaids[34] = 95


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[35]= new Array();
 choices[35][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[35][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[35][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[35][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[35] = choices[35][0];
 units[35] = "19";
 comments[35] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[35] = 162


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[36]= "37)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[36]= new Array();
 choices[36][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[36][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[36][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[36][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[36] = 240


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[37]= "38)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[37]= new Array();
 choices[37][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[37][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[37][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[37][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[37] = choices[37][2];
 units[37] = "26";
 comments[37] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[37] = 99


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[38]= "39)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[38]= new Array();
 choices[38][0] = "De los interesados en el procedimiento";
 choices[38][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[38][2] = "Disposiciones generales";
 choices[38][3] = "De los actos administrativos";
 answers[38] = choices[38][2];
 units[38] = "7";
 comments[38] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[38] = 522


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[39]= "40)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[39]= new Array();
 choices[39][0] = "Dise&ntilde;o del servicio.";
 choices[39][1] = "Transici&oacute;n del servicio.";
 choices[39][2] = "Estrategia del servicio.";
 choices[39][3] = "Operaci&oacute;n del servicio.";
 answers[39] = choices[39][2];
 units[39] = "101";
 comments[39] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[39] = 644


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta falsa:";
 choices[40]= new Array();
 choices[40][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[40][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[40][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[40][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[40] = 847


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[41]= "42)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[41]= new Array();
 choices[41][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[41][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[41][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[41][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[41] = choices[41][1];
 units[41] = "106";
 comments[41] = "Id Pregunta: 575. Tema 106. TAI 2016.";
 preguntaids[41] = 575


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[42]= "43)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[42]= new Array();
 choices[42][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[42][1] = "Static &amp; Active process for REsolution Bank.";
 choices[42][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[42][3] = "Super Active REsponse for Banks";
 answers[42] = choices[42][0];
 units[42] = "12";
 comments[42] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[42] = 139


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[43]= "44)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[43]= new Array();
 choices[43][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[43][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[43][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[43][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[43] = 241


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[44]= "45)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[44]= new Array();
 choices[44][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[44][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[44][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[44][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[44] = 466


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[45]= "46)  En el sistema operativo Unix/Linux, el comando id:";
 choices[45]= new Array();
 choices[45][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[45][1] = "El comando id no existe.";
 choices[45][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[45][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[45] = choices[45][0];
 units[45] = "57";
 comments[45] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[45] = 639


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[46]= "47)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[46]= new Array();
 choices[46][0] = "la Administraci&oacute;n General del Estado";
 choices[46][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[46][2] = "las Entidades Locales";
 choices[46][3] = "todas son correctas";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[46] = 537


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a los servicios territoriales es correcto:";
 choices[47]= new Array();
 choices[47][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[47][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[47][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[47][3] = "ninguna es correcta";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[47] = 820


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[48]= "49)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[48]= new Array();
 choices[48][0] = "Con el a&ntilde;o anterior.";
 choices[48][1] = "Con los tres a&ntilde;os anteriores.";
 choices[48][2] = "Con el a&ntilde;o natural.";
 choices[48][3] = "Con los dos a&ntilde;os anteriores.";
 answers[48] = choices[48][2];
 units[48] = "10";
 comments[48] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[48] = 468


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[49]= "50)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[49]= new Array();
 choices[49][0] = "los Subsecretarios y Secretarios generales";
 choices[49][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[49][2] = "los Secretarios de Estado";
 choices[49][3] = "los Subdirectores generales";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[49] = 789


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[50]= new Array();
 choices[50][0] = "Nueve.";
 choices[50][1] = "Diez.";
 choices[50][2] = "Siete.";
 choices[50][3] = "Ocho.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 373. UNION EUROPEA";
 preguntaids[50] = 373


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; es el machine learning?";
 choices[51]= new Array();
 choices[51][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[51][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[51][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[51][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[51] = choices[51][0];
 units[51] = "73";
 comments[51] = "Id Pregunta: 659. ";
 preguntaids[51] = 659


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[52]= "53)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[52]= new Array();
 choices[52][0] = "Sello electr&oacute;nico";
 choices[52][1] = "Sede electr&oacute;nica";
 choices[52][2] = "Servidor seguro (SSL/TLS)";
 choices[52][3] = "Empleado p&uacute;blico";
 answers[52] = choices[52][2];
 units[52] = "7";
 comments[52] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[52] = 26


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[53]= "54)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[53]= new Array();
 choices[53][0] = "Ley Org&aacute;nica.";
 choices[53][1] = "Ley de Bases.";
 choices[53][2] = "Ley ordinaria.";
 choices[53][3] = "Mandato.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[53] = 189


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[54]= "55)  Son bases de datos NoSQL orientadas a objetos:";
 choices[54]= new Array();
 choices[54][0] = "GemStone";
 choices[54][1] = "Zope Object DB";
 choices[54][2] = "Las dos anteriores";
 choices[54][3] = "Solo B)";
 answers[54] = choices[54][2];
 units[54] = "73";
 comments[54] = "Id Pregunta: 107. ";
 preguntaids[54] = 107


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[55]= "56)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[55]= new Array();
 choices[55][0] = "Proveer de manera compartida servicios comunes";
 choices[55][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[55][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[55][3] = "Transparencia";
 answers[55] = choices[55][1];
 units[55] = "28";
 comments[55] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[55] = 742


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[56]= new Array();
 choices[56][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[56][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[56][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[56][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[56] = choices[56][2];
 units[56] = "22";
 comments[56] = "Id Pregunta: 129. ";
 preguntaids[56] = 129


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[57]= new Array();
 choices[57][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[57][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[57][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[57][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[57] = 298


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[58]= new Array();
 choices[58][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[58][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[58][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[58][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[58] = choices[58][0];
 units[58] = "7";
 comments[58] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[58] = 520


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[59]= new Array();
 choices[59][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[59][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[59][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[59][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[59] = 220


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[60]= new Array();
 choices[60][0] = "El 1 de noviembre de 1994.";
 choices[60][1] = "El 1 de noviembre de 1992.";
 choices[60][2] = "El 1 de noviembre de 1995.";
 choices[60][3] = "El 1 de noviembre de 1993.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[60] = 348


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Lollipop";
 choices[61][1] = "Jelly Bean";
 choices[61][2] = "Marshmallow";
 choices[61][3] = "KitKat";
 answers[61] = choices[61][2];
 units[61] = "59";
 comments[61] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[61] = 61


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[62]= "63)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[62]= new Array();
 choices[62][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[62][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[62][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[62][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[62] = choices[62][1];
 units[62] = "92";
 comments[62] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[62] = 704


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[63]= "64)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[63]= new Array();
 choices[63][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[63][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[63][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[63][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[63] = choices[63][3];
 units[63] = "62";
 comments[63] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[63] = 38


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[64]= new Array();
 choices[64][0] = "B&aacute;sico, medio y alto";
 choices[64][1] = "D&eacute;bil y fuerte";
 choices[64][2] = "Bajo, medio y alto";
 choices[64][3] = "Bajo, sustancial y alto";
 answers[64] = choices[64][3];
 units[64] = "77";
 comments[64] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[64] = 686


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[65]= new Array();
 choices[65][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[65][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[65][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = choices[65][1];
 units[65] = "92";
 comments[65] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[65] = 701


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[66]= "67)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[66]= new Array();
 choices[66][0] = "Un recurso de incumplimiento.";
 choices[66][1] = "Recurso de carencia.";
 choices[66][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[66][3] = "Ninguna es correcta.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 370. UNION EUROPEA";
 preguntaids[66] = 370


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[67]= "68)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[67]= new Array();
 choices[67][0] = "Tres a&ntilde;os.";
 choices[67][1] = "Cuatro a&ntilde;os.";
 choices[67][2] = "Cinco a&ntilde;os.";
 choices[67][3] = "Seis a&ntilde;os.";
 answers[67] = choices[67][3];
 units[67] = "5";
 comments[67] = "Id Pregunta: 323. UNION EUROPEA";
 preguntaids[67] = 323


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[68]= new Array();
 choices[68][0] = "La CETIC";
 choices[68][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[68][2] = "La DTIC";
 choices[68][3] = "Ninguno de los anteriores";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[68] = 587


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[69]= new Array();
 choices[69][0] = "Programa de Educaci&oacute;n Digital";
 choices[69][1] = "Programa de Salud y Bienestar Social";
 choices[69][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[69][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[69] = choices[69][3];
 units[69] = "19";
 comments[69] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";
 preguntaids[69] = 756


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[70]= new Array();
 choices[70][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[70][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[70][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[70][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[70] = 559


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[71]= new Array();
 choices[71][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[71][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[71][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[71][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[71] = choices[71][1];
 units[71] = "84";
 comments[71] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[71] = 53


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[72]= new Array();
 choices[72][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[72][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[72][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[72][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[72] = choices[72][1];
 units[72] = "19";
 comments[72] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[72] = 581


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[73]= "74)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[73]= new Array();
 choices[73][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[73][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[73][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[73][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[73] = choices[73][3];
 units[73] = "41";
 comments[73] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[73] = 82


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[74]= new Array();
 choices[74][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[74][1] = "Auditor&iacute;a operativa.";
 choices[74][2] = "Auditor&iacute;a de cumplimiento.";
 choices[74][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[74] = 474


