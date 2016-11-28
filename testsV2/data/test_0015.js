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

//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[0]= "1)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[0][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[0][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[0][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[0] = choices[0][3];
 units[0] = "14";
 comments[0] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[1]= "2)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[1]= new Array();
 choices[1][0] = "Tres a&ntilde;os.";
 choices[1][1] = "Dos a&ntilde;os y medio.";
 choices[1][2] = "Cinco a&ntilde;os.";
 choices[1][3] = "Seis a&ntilde;os.";
 answers[1] = choices[1][2];
 units[1] = "5";
 comments[1] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[2]= "3)  El Tribunal de Justicia se cre&oacute; en:";
 choices[2]= new Array();
 choices[2][0] = "El Tratado de la CECA.";
 choices[2][1] = "El Tratado de Niza.";
 choices[2][2] = "El Tratado de &Aacute;msterdam.";
 choices[2][3] = "El Tratado de Lisboa.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[3]= new Array();
 choices[3][0] = "Drupal";
 choices[3][1] = "Cassandra";
 choices[3][2] = "Wordpress";
 choices[3][3] = "OpenCMS";
 answers[3] = choices[3][1];
 units[3] = "99";
 comments[3] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[4]= new Array();
 choices[4][0] = "El Consejo Nacional de la Mujer";
 choices[4][1] = "El Consejo de la Mujer";
 choices[4][2] = "El Instituto de la Mujer";
 choices[4][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[4] = choices[4][3];
 units[4] = "14";
 comments[4] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[5]= "6)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Principio de transparencia.";
 choices[5][1] = "Principio de cooperaci&oacute;n.";
 choices[5][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[5][3] = "Principio de lealtad institucional.";
 answers[5] = choices[5][1];
 units[5] = "10";
 comments[5] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[6]= new Array();
 choices[6][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[6][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[6][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[6][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[7]= "8)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[7]= new Array();
 choices[7][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[7][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[7][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[7][3] = "Todas las respuestas son correctas.";
 answers[7] = choices[7][1];
 units[7] = "101";
 comments[7] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[8]= new Array();
 choices[8][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[8][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[8][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[8][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[8] = choices[8][0];
 units[8] = "19";
 comments[8] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[9]= "10)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[9]= new Array();
 choices[9][0] = "Un Reglamento.";
 choices[9][1] = "Un Decreto.";
 choices[9][2] = "Una Ley.";
 choices[9][3] = "Un Real-Decreto.";
 answers[9] = choices[9][2];
 units[9] = "5";
 comments[9] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la respuesta correcta:";
 choices[10]= new Array();
 choices[10][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[10][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[10][2] = "Las respuestas A y B son correctas.";
 choices[10][3] = "Las respuestas A y B son falsas.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[11]= "12)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[11]= new Array();
 choices[11][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[11][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[11][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[11][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[12]= "13)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[12]= new Array();
 choices[12][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[12][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[12][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[12][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[12] = choices[12][0];
 units[12] = "31";
 comments[12] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[13]= "14)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[13]= new Array();
 choices[13][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[13][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[13][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[13][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[13] = choices[13][1];
 units[13] = "7";
 comments[13] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[14]= "15)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[14]= new Array();
 choices[14][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[14][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[14][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[14][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[14] = choices[14][0];
 units[14] = "12";
 comments[14] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[15]= new Array();
 choices[15][0] = "SPARQL";
 choices[15][1] = "UnQL";
 choices[15][2] = "XQUERY";
 choices[15][3] = "RQL";
 answers[15] = choices[15][0];
 units[15] = "74";
 comments[15] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[16]= "17)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[16]= new Array();
 choices[16][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[16][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[16][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[16][3] = "Todas son correctas.";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[17]= "18)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[17]= new Array();
 choices[17][0] = "Cinco a&ntilde;os.";
 choices[17][1] = "Cuatro a&ntilde;os.";
 choices[17][2] = "Tres a&ntilde;os.";
 choices[17][3] = "Seis meses.";
 answers[17] = choices[17][2];
 units[17] = "5";
 comments[17] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[18]= "19)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[18]= new Array();
 choices[18][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[18][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[18][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[18][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Aplicaci&oacute;n";
 choices[19][1] = "Sesi&oacute;n";
 choices[19][2] = "Presentaci&oacute;n";
 choices[19][3] = "Transporte";
 answers[19] = choices[19][2];
 units[19] = "105";
 comments[19] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[20]= new Array();
 choices[20][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[20][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[20][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[20][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[20] = choices[20][3];
 units[20] = "44";
 comments[20] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[21]= new Array();
 choices[21][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[21][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[21][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[21][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[21] = choices[21][1];
 units[21] = "19";
 comments[21] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[22]= "23)  En qu&eacute; consiste el principio BASE:";
 choices[22]= new Array();
 choices[22][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[22][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[22][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[22][3] = "Todas las anteriores son falsas";
 answers[22] = choices[22][3];
 units[22] = "73";
 comments[22] = "Id Pregunta: 103. ";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[23]= "24)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[23]= new Array();
 choices[23][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[23][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[23][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[23][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[23] = choices[23][2];
 units[23] = "28";
 comments[23] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[24]= new Array();
 choices[24][0] = "Memcached";
 choices[24][1] = "OpCache";
 choices[24][2] = "WinCache Extension for PHP";
 choices[24][3] = "Alternative PHP Cache";
 answers[24] = choices[24][0];
 units[24] = "65";
 comments[24] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[25]= new Array();
 choices[25][0] = "B&aacute;sico, medio y alto";
 choices[25][1] = "D&eacute;bil y fuerte";
 choices[25][2] = "Bajo, medio y alto";
 choices[25][3] = "Bajo, sustancial y alto";
 answers[25] = choices[25][3];
 units[25] = "77";
 comments[25] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[26]= new Array();
 choices[26][0] = "Art&iacute;culo 9.1 CE.";
 choices[26][1] = "Art&iacute;culo 53 CE.";
 choices[26][2] = "Art&iacute;culo 14 CE.";
 choices[26][3] = "Art&iacute;culo 16 CE.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[27]= "28)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[27]= new Array();
 choices[27][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[27][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[27][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][0];
 units[27] = "28";
 comments[27] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[28]= "29)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[28][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[28][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[28][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[29]= new Array();
 choices[29][0] = "Conferencia de Presidentes.";
 choices[29][1] = "Convenios de colaboraci&oacute;n.";
 choices[29][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[29][3] = "Conferencias Sectoriales.";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[30]= "31)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Un informe de impacto de g&eacute;nero.";
 choices[30][1] = "Un programa de igualdad de oportunidades.";
 choices[30][2] = "Un plan de Igualdad de Oportunidades.";
 choices[30][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[30] = choices[30][0];
 units[30] = "14";
 comments[30] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[31]= new Array();
 choices[31][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[31][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[31][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[31][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[32]= "33)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[32]= new Array();
 choices[32][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[32][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[32][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[32][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[32] = choices[32][2];
 units[32] = "85";
 comments[32] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[33]= new Array();
 choices[33][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[33][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[33][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][2];
 units[33] = "18, 20";
 comments[33] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[34]= new Array();
 choices[34][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[34][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[34][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[34][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[34] = choices[34][0];
 units[34] = "75";
 comments[34] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[35]= new Array();
 choices[35][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[35][1] = "Anteriormente se denominaba Sonar.";
 choices[35][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[35][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[35] = choices[35][2];
 units[35] = "92";
 comments[35] = "Id Pregunta: 717. INTEGRACION CONTINUA";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; es MongoDB?";
 choices[36]= new Array();
 choices[36][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[36][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[36][2] = "Un sistema gestor de base de datos relacional.";
 choices[36][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[36] = choices[36][1];
 units[36] = "73";
 comments[36] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[37]= "38)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[37]= new Array();
 choices[37][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[37][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[37][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[37][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[37] = choices[37][1];
 units[37] = "95";
 comments[37] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[38]= new Array();
 choices[38][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[38][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[38][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[38][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[38] = choices[38][1];
 units[38] = "78";
 comments[38] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[39]= "40)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[39]= new Array();
 choices[39][0] = "Al Presidente del Gobierno.";
 choices[39][1] = "A las Cortes Generales";
 choices[39][2] = "A los electores.";
 choices[39][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[39] = choices[39][3];
 units[39] = "1";
 comments[39] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[40]= "41)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[40]= new Array();
 choices[40][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[40][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[40][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[40][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[41]= "42)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[41]= new Array();
 choices[41][0] = "un &oacute;rgano superior";
 choices[41][1] = "un &oacute;rgano directivo";
 choices[41][2] = "un &oacute;rgano superior o directivo";
 choices[41][3] = "ninguna es correcta";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[42]= "43)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[42]= new Array();
 choices[42][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[42][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[42][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[42][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[43]= "44)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[43]= new Array();
 choices[43][0] = "Seis a&ntilde;os.";
 choices[43][1] = "Cinco a&ntilde;os.";
 choices[43][2] = "Cuatro a&ntilde;os.";
 choices[43][3] = "Ocho a&ntilde;os.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[44]= "45)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[44]= new Array();
 choices[44][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[44][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[44][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[44][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[45]= new Array();
 choices[45][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[45][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[45][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[45][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[45] = choices[45][3];
 units[45] = "26";
 comments[45] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[46]= "47)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[46]= new Array();
 choices[46][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[46][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[46][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[46][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[47]= "48)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[47]= new Array();
 choices[47][0] = "El derecho a la propiedad privada.";
 choices[47][1] = "El derecho de asociaci&oacute;n.";
 choices[47][2] = "El derecho de fundaci&oacute;n.";
 choices[47][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[47] = choices[47][1];
 units[47] = "1";
 comments[47] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[48]= new Array();
 choices[48][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[48][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[48][2] = "El que hubieren designado las Cortes Generales.";
 choices[48][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[48] = choices[48][1];
 units[48] = "1";
 comments[48] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[49]= new Array();
 choices[49][0] = "Veinticinco.";
 choices[49][1] = "Veintisiete.";
 choices[49][2] = "Veintinueve.";
 choices[49][3] = "Cuarenta y uno.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[50]= "51)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[50]= new Array();
 choices[50][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[50][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[50][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[50][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[50] = choices[50][0];
 units[50] = "12";
 comments[50] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[51]= "52)  Los Subdirectores generales:";
 choices[51]= new Array();
 choices[51][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[51][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[51][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[51][3] = "todas son correctas";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[52]= new Array();
 choices[52][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[52][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[52][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[52][3] = "El Senado se compone de 350 senadores.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[53]= "54)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[53]= new Array();
 choices[53][0] = "Establecer tributos.";
 choices[53][1] = "Desarrollar lo establecido en una Ley.";
 choices[53][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[53][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[54]= new Array();
 choices[54][0] = "Veinte.";
 choices[54][1] = "Quince.";
 choices[54][2] = "Diez.";
 choices[54][3] = "Doce.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[55]= new Array();
 choices[55][0] = "La Ley General Tributaria.";
 choices[55][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[55][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[55][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[56]= "57)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[56]= new Array();
 choices[56][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[56][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[56][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[56][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[56] = choices[56][2];
 units[56] = "57";
 comments[56] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[57]= "58)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[57]= new Array();
 choices[57][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[57][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[57][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[57][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[57] = choices[57][3];
 units[57] = "14";
 comments[57] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[58]= "59)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[58]= new Array();
 choices[58][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[58][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[58][2] = "Cinco a&ntilde;os.";
 choices[58][3] = "Ninguna es correcta.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[59]= "60)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[59]= new Array();
 choices[59][0] = "El Tratado de Maastrich.";
 choices[59][1] = "El Tratado de Amsterdam.";
 choices[59][2] = "El Tratado de Par&iacute;s.";
 choices[59][3] = "El Tratado de Roma.";
 answers[59] = choices[59][3];
 units[59] = "5";
 comments[59] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[60]= "61)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[60]= new Array();
 choices[60][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[60][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[60][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[60][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[61]= new Array();
 choices[61][0] = "a) Los cuatro ejercicios siguientes.";
 choices[61][1] = "b) El ejercicio siguiente.";
 choices[61][2] = "c) Los dos ejercicios siguientes.";
 choices[61][3] = "d) Los tres ejercicios siguientes.";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[62]= "63)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[62][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[62][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[62][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[62] = choices[62][1];
 units[62] = "7";
 comments[62] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[63]= "64)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[63]= new Array();
 choices[63][0] = "CO.PER.";
 choices[63][1] = "COMPER.";
 choices[63][2] = "CO.RE.PER.";
 choices[63][3] = "CO.PE.RRE.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[64]= "65)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[64]= new Array();
 choices[64][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[64][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[64][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[64][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[65]= "66)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[65]= new Array();
 choices[65][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[65][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[65][2] = "A partir del 1 de enero de 2015";
 choices[65][3] = "A partir del 1 de julio de 2016";
 answers[65] = choices[65][1];
 units[65] = "77";
 comments[65] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[66]= new Array();
 choices[66][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[66][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[66][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[66][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 129. ";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[67]= new Array();
 choices[67][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[67][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[67][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[67][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[67] = choices[67][1];
 units[67] = "5";
 comments[67] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[68]= "69)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[68]= new Array();
 choices[68][0] = "Primario, que incluye la agricultura y la pesca";
 choices[68][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[68][2] = "Minero, junto con las exportaciones de comercio";
 choices[68][3] = "Servicios";
 answers[68] = choices[68][3];
 units[68] = "12";
 comments[68] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[69]= "70)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[69]= new Array();
 choices[69][0] = "20 parlamentarios.";
 choices[69][1] = "29 parlamentarios.";
 choices[69][2] = "18 parlamentarios.";
 choices[69][3] = "23 parlamentarios.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[70]= "71)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[70]= new Array();
 choices[70][0] = "De un mes si el acto fuera presunto";
 choices[70][1] = "De un mes si el acto fuera expreso";
 choices[70][2] = "De un mes en cualquier caso";
 choices[70][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[70] = choices[70][1];
 units[70] = "8";
 comments[70] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[71]= "72)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[71]= new Array();
 choices[71][0] = "B&aacute;sico";
 choices[71][1] = "Medio";
 choices[71][2] = "Alto";
 choices[71][3] = "A los niveles medio y alto";
 answers[71] = choices[71][2];
 units[71] = "35";
 comments[71] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[72]= "73)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[72]= new Array();
 choices[72][0] = "El 23 de julio de 1952.";
 choices[72][1] = "El 18 de abril de 1951.";
 choices[72][2] = "El 16 de abril de 1948.";
 choices[72][3] = "d)Ninguna de las respuestas son correctas.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[73]= new Array();
 choices[73][0] = "De 1a  4 ";
 choices[73][1] = "De 3 a  7 ";
 choices[73][2] = "De 5 a  9";
 choices[73][3] = "De 7 a 11";
 answers[73] = choices[73][2];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[74]= new Array();
 choices[74][0] = "El Consejo Europeo.";
 choices[74][1] = "El Parlamento Europeo.";
 choices[74][2] = "El Consejo.";
 choices[74][3] = "La Comisi&oacute;n.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 361. UNION EUROPEA";


