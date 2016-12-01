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

//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[0]= "1)  Los Secretarios generales t&eacute;cnicos:";
 choices[0]= new Array();
 choices[0][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[0][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[0][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[0] = 804


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[1]= "2)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[1]= new Array();
 choices[1][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[1][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[1][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[1][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[1] = 317


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[2]= "3)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[2][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[2][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[2][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[2] = 172


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[3]= new Array();
 choices[3][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[3][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[3][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[3][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[3] = choices[3][1];
 units[3] = "92";
 comments[3] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[3] = 698


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[4]= new Array();
 choices[4][0] = "Quince miembros.";
 choices[4][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[4][2] = "Los miembros que determine el Consejo.";
 choices[4][3] = "Un Presidente y quince miembros.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 299. UNION EUROPEA";
 preguntaids[4] = 299


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[5]= new Array();
 choices[5][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[5][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[5][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[5][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";
 preguntaids[5] = 479


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[6]= "7)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[6]= new Array();
 choices[6][0] = "Estrat&eacute;gico";
 choices[6][1] = "Operativo";
 choices[6][2] = "T&aacute;ctico";
 choices[6][3] = "Tecnol&oacute;gico";
 answers[6] = choices[6][0];
 units[6] = "36";
 comments[6] = "Id Pregunta: 76. AGE A1 2015";
 preguntaids[6] = 76


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[7]= "8)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[7]= new Array();
 choices[7][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[7][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[7][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[7][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[7] = choices[7][1];
 units[7] = "35";
 comments[7] = "Id Pregunta: 78. AGE A1 2015";
 preguntaids[7] = 78


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[8]= new Array();
 choices[8][0] = "El Presidente del Senado";
 choices[8][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[8][2] = "El Presidente del Gobierno";
 choices[8][3] = "El Presidente de las Cortes Generales";
 answers[8] = choices[8][2];
 units[8] = "1";
 comments[8] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[8] = 265


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[9]= "10)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[9]= new Array();
 choices[9][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[9][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[9][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[9][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[9] = choices[9][1];
 units[9] = "14";
 comments[9] = "Id Pregunta: 678. Dependencia";
 preguntaids[9] = 678


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[10]= new Array();
 choices[10][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[10][1] = "Calidad de los servicios p&uacute;blicos";
 choices[10][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[10][3] = "Servicio efectivo a los ciudadanos";
 answers[10] = choices[10][1];
 units[10] = "18";
 comments[10] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[10] = 749


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[11]= new Array();
 choices[11][0] = "a) Los cuatro ejercicios siguientes.";
 choices[11][1] = "b) El ejercicio siguiente.";
 choices[11][2] = "c) Los dos ejercicios siguientes.";
 choices[11][3] = "d) Los tres ejercicios siguientes.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[11] = 458


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[12]= "13)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[12]= new Array();
 choices[12][0] = "180 art&iacute;culos.";
 choices[12][1] = "182 art&iacute;culos.";
 choices[12][2] = "185 art&iacute;culos.";
 choices[12][3] = "190 art&iacute;culos.";
 answers[12] = choices[12][1];
 units[12] = "10";
 comments[12] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";
 preguntaids[12] = 485


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[13]= "14)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[13]= new Array();
 choices[13][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[13][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[13][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[13][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[13] = 494


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[14]= new Array();
 choices[14][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[14][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[14][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[14][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[14] = choices[14][2];
 units[14] = "53";
 comments[14] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[14] = 65


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[15]= "16)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[15]= new Array();
 choices[15][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[15][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[15][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[15][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[15] = choices[15][3];
 units[15] = "1";
 comments[15] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[15] = 236


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[16]= "17)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[16]= new Array();
 choices[16][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[16][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[16][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[16][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[16] = choices[16][1];
 units[16] = "74";
 comments[16] = "Id Pregunta: 45. AGE A1 2015";
 preguntaids[16] = 45


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[17]= "18)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[17]= new Array();
 choices[17][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[17][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[17][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[17][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[17] = choices[17][2];
 units[17] = "19";
 comments[17] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";
 preguntaids[17] = 168


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[18]= "19)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[18][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[18][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[18][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[18] = choices[18][2];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[18] = 821


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[19]= new Array();
 choices[19][0] = "al menos por 50 Diputados.";
 choices[19][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[19][2] = "por la Mesa del Congreso de los Diputados.";
 choices[19][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[19] = choices[19][1];
 units[19] = "1";
 comments[19] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[19] = 183


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[20]= "21)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[20]= new Array();
 choices[20][0] = "por Real Decreto";
 choices[20][1] = "reglamentariamente";
 choices[20][2] = "mediante Ley";
 choices[20][3] = "ninguna es correcta";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[20] = 817


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[21]= new Array();
 choices[21][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[21][1] = "Intervenci&oacute;n formal y material.";
 choices[21][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[21][3] = "Intervenci&oacute;n formal y general.";
 answers[21] = choices[21][1];
 units[21] = "10";
 comments[21] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[21] = 480


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[22]= new Array();
 choices[22][0] = "Conferencia de Presidentes.";
 choices[22][1] = "Convenios de colaboraci&oacute;n.";
 choices[22][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[22][3] = "Conferencias Sectoriales.";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[22] = 846


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[23]= new Array();
 choices[23][0] = "La CETIC";
 choices[23][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[23][2] = "La DTIC";
 choices[23][3] = "El MHFP";
 answers[23] = choices[23][0];
 units[23] = "19";
 comments[23] = "Id Pregunta: 593. Estrategia TIC";
 preguntaids[23] = 593


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[24]= "25)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[24]= new Array();
 choices[24][0] = "ASF-AL (Apache License 2.0)";
 choices[24][1] = "EUPL (European Union Public License)";
 choices[24][2] = "LGPL (Lesser General Public License)";
 choices[24][3] = "MIT(MIT License)";
 answers[24] = choices[24][1];
 units[24] = "43";
 comments[24] = "Id Pregunta: 32. AGE A1 2015";
 preguntaids[24] = 32


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Diagrama de clases";
 choices[25][1] = "Diagrama de componentes";
 choices[25][2] = "Diagrama de estructura";
 choices[25][3] = "Diagrama de paquetes";
 answers[25] = choices[25][0];
 units[25] = "91";
 comments[25] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[25] = 88


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[26]= "27)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[26]= new Array();
 choices[26][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[26][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[26][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[26][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[26] = choices[26][0];
 units[26] = "12";
 comments[26] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";
 preguntaids[26] = 135


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[27]= "28)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[27]= new Array();
 choices[27][0] = "3 a&ntilde;os.";
 choices[27][1] = "5 a&ntilde;os.";
 choices[27][2] = "4 a&ntilde;os.";
 choices[27][3] = "6 a&ntilde;os.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[27] = 193


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[28]= new Array();
 choices[28][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[28][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[28][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[28][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[28] = choices[28][0];
 units[28] = "14";
 comments[28] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[28] = 393


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[29]= new Array();
 choices[29][0] = "No, en ning&uacute;n caso.";
 choices[29][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[29][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[29][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[29] = choices[29][3];
 units[29] = "1";
 comments[29] = "Id Pregunta: 188. CONSTITUCION1978";
 preguntaids[29] = 188


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[30]= "31)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[30]= new Array();
 choices[30][0] = "la Administraci&oacute;n General del Estado";
 choices[30][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[30][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[30][3] = "el sector p&uacute;blico y privado institucional";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[30] = 765


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[31]= "32)  Los criptosistemas pueden clasificarse en:";
 choices[31]= new Array();
 choices[31][0] = "Concretos, Estables e Inestables.";
 choices[31][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[31][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[31][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[31] = choices[31][3];
 units[31] = "76";
 comments[31] = "Id Pregunta: 603. Junta de Extremadura A1 2015";
 preguntaids[31] = 603


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[32]= new Array();
 choices[32][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[32][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[32][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[32][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[32] = choices[32][3];
 units[32] = "22";
 comments[32] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[32] = 714


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[33]= "34)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[33]= new Array();
 choices[33][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[33][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[33][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[33][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[33] = choices[33][1];
 units[33] = "14";
 comments[33] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[33] = 412


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[34]= new Array();
 choices[34][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[34][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[34][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[34][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[34] = 809


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[35]= "36)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[35]= new Array();
 choices[35][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[35][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[35][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[35][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[35] = choices[35][3];
 units[35] = "101";
 comments[35] = "Id Pregunta: 59. AGE A1 2015";
 preguntaids[35] = 59


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[36]= "37)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[36]= new Array();
 choices[36][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[36][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[36][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[36][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[36] = choices[36][1];
 units[36] = "1";
 comments[36] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[36] = 263


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[37]= "38)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[37][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[37][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[37][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[37] = choices[37][2];
 units[37] = "83";
 comments[37] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[37] = 56


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[38]= "39)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[38]= new Array();
 choices[38][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[38][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[38][2] = "a y b son correctas";
 choices[38][3] = "a y b son incorrectas";
 answers[38] = choices[38][2];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[38] = 798


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[39]= new Array();
 choices[39][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[39][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[39][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[39][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[39] = choices[39][1];
 units[39] = "19";
 comments[39] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[39] = 581


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[40]= "41)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[40]= new Array();
 choices[40][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[40][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[40][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[40][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[40] = choices[40][3];
 units[40] = "62";
 comments[40] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[40] = 38


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[41]= new Array();
 choices[41][0] = "las personas jur&iacute;dicas ";
 choices[41][1] = "las entidades con personalidad jur&iacute;dica";
 choices[41][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[41][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[41] = choices[41][1];
 units[41] = "7";
 comments[41] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[41] = 151


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[42]= "43)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[42]= new Array();
 choices[42][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[42][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[42][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[42][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[42] = 345


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[43]= "44)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[43]= new Array();
 choices[43][0] = "P&uacute;blica.";
 choices[43][1] = "Privada.";
 choices[43][2] = "A y B son correctas.";
 choices[43][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[43] = 418


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[44]= "45)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[44]= new Array();
 choices[44][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[44][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[44][2] = "A partir del 1 de enero de 2015";
 choices[44][3] = "A partir del 1 de julio de 2016";
 answers[44] = choices[44][1];
 units[44] = "77";
 comments[44] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[44] = 692


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[45]= new Array();
 choices[45][0] = "Nueve.";
 choices[45][1] = "Diez.";
 choices[45][2] = "Siete.";
 choices[45][3] = "Ocho.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 373. UNION EUROPEA";
 preguntaids[45] = 373


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[46]= "47)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[46]= new Array();
 choices[46][0] = "los Secretarios de Estado";
 choices[46][1] = "los Ministros";
 choices[46][2] = "los Subsecretarios";
 choices[46][3] = "los Secretarios generales";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[46] = 810


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[47]= "48)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[47]= new Array();
 choices[47][0] = "Integrar la estrategia TIC con la de negocio";
 choices[47][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[47][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[47][3] = "Todas las anteriores";
 answers[47] = choices[47][3];
 units[47] = "26";
 comments[47] = "Id Pregunta: 549. Gobernanza TIC";
 preguntaids[47] = 549


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[48]= new Array();
 choices[48][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[48][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[48][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[48][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[48] = choices[48][1];
 units[48] = "63";
 comments[48] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[48] = 33


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Estimaci&oacute;n del riesgo";
 choices[49][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[49][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[49][3] = "Mapa de riesgos";
 answers[49] = choices[49][3];
 units[49] = "45";
 comments[49] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[49] = 85


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[50]= new Array();
 choices[50][0] = "Lean startup";
 choices[50][1] = "Business Model Canvas";
 choices[50][2] = "Dynamic system Development method";
 choices[50][3] = "Lean software development";
 answers[50] = choices[50][2];
 units[50] = "34";
 comments[50] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[50] = 722


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[51]= new Array();
 choices[51][0] = "En 2015";
 choices[51][1] = "En 2013";
 choices[51][2] = "En 2016";
 choices[51][3] = "En 2007";
 answers[51] = choices[51][1];
 units[51] = "19";
 comments[51] = "Id Pregunta: 560. Agenda Digital";
 preguntaids[51] = 560


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[52]= "53)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[52]= new Array();
 choices[52][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[52][1] = "La CETIC";
 choices[52][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[52][3] = "El MHFP";
 answers[52] = choices[52][0];
 units[52] = "19";
 comments[52] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[52] = 595


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[53]= "54)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[53]= new Array();
 choices[53][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[53][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[53][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[53][3] = "todas son correctas";
 answers[53] = choices[53][3];
 units[53] = "7";
 comments[53] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[53] = 533


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[54]= new Array();
 choices[54][0] = "Eric Ries";
 choices[54][1] = "Steve Blank";
 choices[54][2] = "Tom Poppendieck";
 choices[54][3] = "Alexander Osterwalder";
 answers[54] = choices[54][2];
 units[54] = "34";
 comments[54] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[54] = 720


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[55]= "56)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[55]= new Array();
 choices[55][0] = "150 trabajadores/as.";
 choices[55][1] = "200 trabajadores/as.";
 choices[55][2] = "250 trabajadores/as.";
 choices[55][3] = "300 trabajadores/as.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";
 preguntaids[55] = 420


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[56]= "57)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[56]= new Array();
 choices[56][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[56][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[56][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[56][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[56] = choices[56][3];
 units[56] = "43";
 comments[56] = "Id Pregunta: 438. SERVICIOS COMUNES";
 preguntaids[56] = 438


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "Siempre en formato electr&oacute;nico.";
 choices[57][1] = "Siempre en formato papel.";
 choices[57][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[57][3] = "La ley no regula el formato del expediente.";
 answers[57] = choices[57][0];
 units[57] = "7";
 comments[57] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[57] = 666


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[58]= new Array();
 choices[58][0] = "No discriminaci&oacute;n";
 choices[58][1] = "Cooperaci&oacute;n";
 choices[58][2] = "Colaboraci&oacute;n";
 choices[58][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[58] = choices[58][2];
 units[58] = "23";
 comments[58] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";
 preguntaids[58] = 746


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[59]= "60)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[59]= new Array();
 choices[59][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[59][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[59][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[59][3] = "Estos sistemas es imposible clasificarlos.";
 answers[59] = choices[59][1];
 units[59] = "119";
 comments[59] = "Id Pregunta: 650. Junta de Extremadura A1 2015";
 preguntaids[59] = 650


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[60]= new Array();
 choices[60][0] = "Bienalmente";
 choices[60][1] = "Anualmente";
 choices[60][2] = "Semestralmente";
 choices[60][3] = "Cada cuatro a&ntilde;os";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[60] = 586


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[61]= "62)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[61]= new Array();
 choices[61][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[61][1] = "Uno de sus miembros.";
 choices[61][2] = "La Comisi&oacute;n.";
 choices[61][3] = "Todas las respuestas son correctas.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[61] = 350


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[62]= "63)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[62]= new Array();
 choices[62][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[62][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[62][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[62][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[62] = choices[62][3];
 units[62] = "10";
 comments[62] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[62] = 510


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[63]= "64)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[63]= new Array();
 choices[63][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[63][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[63][2] = "A y B son correctas.";
 choices[63][3] = "A y B son incorrectas.";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[63] = 844


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[64]= new Array();
 choices[64][0] = "Quince miembros.";
 choices[64][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[64][2] = "Los miembros que determine el Consejo.";
 choices[64][3] = "Un Presidente y quince miembros.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 378. UNION EUROPEA";
 preguntaids[64] = 378


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[65]= "66)  Es falso que:";
 choices[65]= new Array();
 choices[65][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[65][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[65][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[65][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[65] = choices[65][1];
 units[65] = "20";
 comments[65] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[65] = 752


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[66]= "67)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[66][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[66][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[66][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[66] = choices[66][0];
 units[66] = "19";
 comments[66] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";
 preguntaids[66] = 165


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[67]= new Array();
 choices[67][0] = "Indirecta.";
 choices[67][1] = "Directa.";
 choices[67][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[67][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[67] = 388


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[68]= new Array();
 choices[68][0] = "Un diputado y un senador, cada una de ellas";
 choices[68][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[68][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[68][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 192. CONSTITUCION1978";
 preguntaids[68] = 192


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[69]= "70)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[69]= new Array();
 choices[69][0] = "Un plan de igualdad.";
 choices[69][1] = "Un informe de impacto de g&eacute;nero.";
 choices[69][2] = "Un programa de igualdad.";
 choices[69][3] = "Todas son correctas.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[69] = 426


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[70]= "71)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[70]= new Array();
 choices[70][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[70][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[70][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[70][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[70] = choices[70][0];
 units[70] = "7";
 comments[70] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[70] = 520


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[71]= "72)  El lenguaje SPARK es un subconjunto de:";
 choices[71]= new Array();
 choices[71][0] = "Java";
 choices[71][1] = "Fortran";
 choices[71][2] = "Ruby";
 choices[71][3] = "Ada";
 answers[71] = choices[71][3];
 units[71] = "73";
 comments[71] = "Id Pregunta: 81. AGE A1 2015";
 preguntaids[71] = 81


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[72]= "73)  Se consideran interesados en el procedimiento administrativo:";
 choices[72]= new Array();
 choices[72][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[72][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[72][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[72][3] = "todas son correctas";
 answers[72] = choices[72][0];
 units[72] = "7";
 comments[72] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[72] = 525


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[73]= new Array();
 choices[73][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[73][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[73][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[73][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[73] = choices[73][1];
 units[73] = "14";
 comments[73] = "Id Pregunta: 680. Dependencia";
 preguntaids[73] = 680


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[74]= new Array();
 choices[74][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[74][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[74][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[74][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[74] = choices[74][1];
 units[74] = "84";
 comments[74] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[74] = 53


