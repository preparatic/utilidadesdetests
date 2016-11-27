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

//  Id pregunta: 10062 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[0]= new Array();
 choices[0][0] = "B&aacute;sico";
 choices[0][1] = "Medio";
 choices[0][2] = "Alto";
 choices[0][3] = "A los niveles medio y alto";
 answers[0] = choices[0][2];
 units[0] = "35";
 comments[0] = "Id Pregunta: 10062. AGE A1 2015";


//  Id pregunta: 10186 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[1]= new Array();
 choices[1][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[1][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[1][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[1][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10616 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[2]= new Array();
 choices[2][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[2][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[2][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[2][3] = "Todas las respuestas son correctas.";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 10616. Junta de Extremadura A1 2015";


//  Id pregunta: 10671 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[3]= new Array();
 choices[3][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[3][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[3][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[3][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[3] = choices[3][0];
 units[3] = "7";
 comments[3] = "Id Pregunta: 10671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10286 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[4]= new Array();
 choices[4][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[4][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[4][2] = "Iniciativa europea de libre flujo de datos.";
 choices[4][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  El cr&eacute;dito presupuestario es...";
 choices[5]= new Array();
 choices[5][0] = "El sujeto que realiza el gasto";
 choices[5][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[5][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[5][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[6]= new Array();
 choices[6][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[6][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[6][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[6][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[6] = choices[6][2];
 units[6] = "85";
 comments[6] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10356 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[7]= new Array();
 choices[7][0] = "No se aplican directamente en los Estados.";
 choices[7][1] = "No son vinculantes.";
 choices[7][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[7][3] = "Tienen alcance general.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[8]= new Array();
 choices[8][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[8][1] = "Protecci&oacute;n de su salud.";
 choices[8][2] = "Ninguna es correcta.";
 choices[8][3] = "A y B son correctas.";
 answers[8] = choices[8][1];
 units[8] = "14";
 comments[8] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[9]= new Array();
 choices[9][0] = "apud acta";
 choices[9][1] = "presencialmente";
 choices[9][2] = "electr&oacute;nicamente";
 choices[9][3] = "todas son correctas";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10313 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[10]= new Array();
 choices[10][0] = "El Consejo Europeo.";
 choices[10][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[10][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[10][3] = "El Parlamento Europeo.";
 answers[10] = choices[10][0];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10313. UNION EUROPEA";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[11]= new Array();
 choices[11][0] = "absoluta de las Cortes Generales.";
 choices[11][1] = "absoluta del Congreso de los Diputados.";
 choices[11][2] = "simple de las Cortes Generales.";
 choices[11][3] = "simple del Congreso de los Diputados.";
 answers[11] = choices[11][3];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10278 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[12]= new Array();
 choices[12][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[12][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[12][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[12][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[12] = choices[12][1];
 units[12] = "22";
 comments[12] = "Id Pregunta: 10278. LEY DE TRANSPARENCIA";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[13]= new Array();
 choices[13][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[13][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[13][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[13][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[13] = choices[13][3];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10262 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[14]= new Array();
 choices[14][0] = "Constitucional.";
 choices[14][1] = "Penal.";
 choices[14][2] = "Militar.";
 choices[14][3] = "Tribunales consuetudinarios.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10262. CONSTITUCION1978";


//  Id pregunta: 10383 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[15]= new Array();
 choices[15][0] = "El Consejo Nacional de la Mujer";
 choices[15][1] = "El Consejo de la Mujer";
 choices[15][2] = "El Instituto de la Mujer";
 choices[15][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[15] = choices[15][3];
 units[15] = "14";
 comments[15] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10130 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[16]= new Array();
 choices[16][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[16][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[16][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[16][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[16] = choices[16][3];
 units[16] = "12";
 comments[16] = "Id Pregunta: 10130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[17]= new Array();
 choices[17][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[17][1] = "Pasivos financieros y transferencias de capital.";
 choices[17][2] = "Activos financieros y pasivos financieros.";
 choices[17][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[18]= new Array();
 choices[18][0] = "solo mediante ley";
 choices[18][1] = "reglamentariamente";
 choices[18][2] = "mediante ley o reglamentariamente";
 choices[18][3] = "ninguna es correcta";
 answers[18] = choices[18][1];
 units[18] = "7";
 comments[18] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10500 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[19]= new Array();
 choices[19][0] = "El presidente de las Cortes Generales.";
 choices[19][1] = "El Presidente del Gobierno.";
 choices[19][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[19][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[19] = choices[19][3];
 units[19] = "10";
 comments[19] = "Id Pregunta: 10500. PRESUPUESTOS GENERALES";


//  Id pregunta: 10376 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[20]= new Array();
 choices[20][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[20][1] = "Personas con nacionalidad europea.";
 choices[20][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[20][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[21]= new Array();
 choices[21][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[21][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[21][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[21][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[21] = choices[21][2];
 units[21] = "17";
 comments[21] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10492 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[22]= new Array();
 choices[22][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[22][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[22][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[22][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10460 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[23]= new Array();
 choices[23][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[23][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[23][2] = "La normativa reguladora de cada derecho.";
 choices[23][3] = "Ley 50/1997, del Gobierno.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10091 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[24]= new Array();
 choices[24][0] = "JUnit, Artifactory y SonarQube";
 choices[24][1] = "JUnit, Artifactory y Selenium";
 choices[24][2] = "JUnit, SonarQube y Selenium";
 choices[24][3] = "ArtiFactory, SonarQube y Selenium";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 10091. AGE A1 2015";


//  Id pregunta: 10331 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[25]= new Array();
 choices[25][0] = "90";
 choices[25][1] = "50";
 choices[25][2] = "64";
 choices[25][3] = "60";
 answers[25] = choices[25][1];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10194 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[26]= new Array();
 choices[26][0] = "11";
 choices[26][1] = "12";
 choices[26][2] = "14";
 choices[26][3] = "8";
 answers[26] = choices[26][1];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10194. CONSTITUCION1978";


//  Id pregunta: 10423 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[27]= new Array();
 choices[27][0] = "El derecho a un permiso.";
 choices[27][1] = "Una prestaci&oacute;n por paternidad.";
 choices[27][2] = "Ambas son correctas.";
 choices[27][3] = "18 d&iacute;as de permiso.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[28][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[28][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[28][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[28] = choices[28][1];
 units[28] = "7";
 comments[28] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10455 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[29]= new Array();
 choices[29][0] = "En qu&eacute; nos gastamos el dinero";
 choices[29][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[29][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[29][3] = "Qui&eacute;n se gasta el dinero.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10601 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Los criptosistemas pueden clasificarse en:";
 choices[30]= new Array();
 choices[30][0] = "Concretos, Estables e Inestables.";
 choices[30][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[30][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[30][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[30] = choices[30][3];
 units[30] = "76";
 comments[30] = "Id Pregunta: 10601. Junta de Extremadura A1 2015";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[31]= new Array();
 choices[31][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[31][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[31][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[31][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[31] = choices[31][3];
 units[31] = "46";
 comments[31] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[32]= new Array();
 choices[32][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[32][1] = "Las CMADs";
 choices[32][2] = "Ambas son correctas.";
 choices[32][3] = "Ninguna es correcta";
 answers[32] = choices[32][2];
 units[32] = "19";
 comments[32] = "Id Pregunta: 10596. Estrategia TIC";


//  Id pregunta: 10630 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[33]= new Array();
 choices[33][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[33][1] = "De nivel alto.";
 choices[33][2] = "De nivel medio y nivel alto.";
 choices[33][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[33] = choices[33][3];
 units[33] = "35";
 comments[33] = "Id Pregunta: 10630. Junta de Extremadura A1 2015";


//  Id pregunta: 10052 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[34]= new Array();
 choices[34][0] = "ISO/IEC 25000";
 choices[34][1] = "ISO/IEC 27000";
 choices[34][2] = "ISO 9000";
 choices[34][3] = "ISO 9001";
 answers[34] = choices[34][0];
 units[34] = "93";
 comments[34] = "Id Pregunta: 10052. AGE A1 2015";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[35]= new Array();
 choices[35][0] = "Ejecuci&oacute;n";
 choices[35][1] = "Adjudicaci&oacute;n";
 choices[35][2] = "Licitaci&oacute;n";
 choices[35][3] = "Formalizaci&oacute;n";
 answers[35] = choices[35][3];
 units[35] = "37";
 comments[35] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[36]= new Array();
 choices[36][0] = "Sello electr&oacute;nico";
 choices[36][1] = "Sede electr&oacute;nica";
 choices[36][2] = "Servidor seguro (SSL/TLS)";
 choices[36][3] = "Empleado p&uacute;blico";
 answers[36] = choices[36][2];
 units[36] = "7";
 comments[36] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10541 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ala la correcta:";
 choices[37]= new Array();
 choices[37][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[37][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[37][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[37][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[37] = choices[37][1];
 units[37] = "7";
 comments[37] = "Id Pregunta: 10541. LEY 39/2015";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[38]= new Array();
 choices[38][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[38][1] = "La libertad sexual y religiosa.";
 choices[38][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[38][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[39]= new Array();
 choices[39][0] = "El Parlamento y el Consejo.";
 choices[39][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[39][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[39][3] = "La Comisi&oacute;n y el Consejo.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[40]= new Array();
 choices[40][0] = "Son vinculantes solamente.";
 choices[40][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[40][2] = "Son preceptivos y vinculantes.";
 choices[40][3] = "Son preceptivos y no vinculantes.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10388 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[41]= new Array();
 choices[41][0] = "Indirecta.";
 choices[41][1] = "Directa.";
 choices[41][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[41][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 10388. POLITICAS DE IGUALDAD";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[42]= new Array();
 choices[42][0] = "El servicio de teleasistencia.";
 choices[42][1] = "El servicio de ayuda a domicilio.";
 choices[42][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[42][3] = "Todas las anteriores son correctas.";
 answers[42] = choices[42][3];
 units[42] = "14";
 comments[42] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[43]= new Array();
 choices[43][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[43][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[43][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[43][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[43] = choices[43][0];
 units[43] = "31";
 comments[43] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10384 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[44]= new Array();
 choices[44][0] = "Sean dirigidas por mujeres";
 choices[44][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[44][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[44][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[45]= new Array();
 choices[45][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[45][1] = "mediante resoluci&oacute;n judicial especial";
 choices[45][2] = "&uacute;nicamente mediante poder notarial";
 choices[45][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[45] = choices[45][3];
 units[45] = "7";
 comments[45] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10391 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[46]= new Array();
 choices[46][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[46][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[46][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[46][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[46] = choices[46][2];
 units[46] = "14";
 comments[46] = "Id Pregunta: 10391. POLITICAS DE IGUALDAD";


//  Id pregunta: 10617 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[47]= new Array();
 choices[47][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[47][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[47][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[47][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[47] = choices[47][0];
 units[47] = "84";
 comments[47] = "Id Pregunta: 10617. Junta de Extremadura A1 2015";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[48]= new Array();
 choices[48][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[48][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[48][2] = "a y b son correctas";
 choices[48][3] = "a y b son incorrectas";
 answers[48] = choices[48][0];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10216 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[49]= new Array();
 choices[49][0] = "El Presidente del Gobierno.";
 choices[49][1] = "El Consejo de Ministros.";
 choices[49][2] = "40 Diputados.";
 choices[49][3] = "El Ministerio Fiscal.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10528 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[50]= new Array();
 choices[50][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[50][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[50][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[50][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 10528. LEY 39/2015";


//  Id pregunta: 10526 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[51]= new Array();
 choices[51][0] = "tienen capacidad de obrar limitada";
 choices[51][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[51][2] = "no tienen capacidad de obrar";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][2];
 units[51] = "7";
 comments[51] = "Id Pregunta: 10526. LEY 39/2015";


//  Id pregunta: 10158 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[52]= new Array();
 choices[52][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[52][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[52][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[52][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[52] = choices[52][1];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 10386 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[53]= new Array();
 choices[53][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[53][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[53][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[53][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[53] = choices[53][0];
 units[53] = "14";
 comments[53] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


//  Id pregunta: 10478 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[54]= new Array();
 choices[54][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[54][1] = "Intervenci&oacute;n formal y material.";
 choices[54][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[54][3] = "Intervenci&oacute;n formal y general.";
 answers[54] = choices[54][1];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[55][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[55][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[55][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10332 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[56]= new Array();
 choices[56][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[56][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[56][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[56][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10008 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[57]= new Array();
 choices[57][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[57][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[57][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[57][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[57] = choices[57][2];
 units[57] = "26";
 comments[57] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[58]= new Array();
 choices[58][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[58][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[58][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[58][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10382 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[59]= new Array();
 choices[59][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[59][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[59][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[59][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10382. POLITICAS DE IGUALDAD";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[60]= new Array();
 choices[60][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[60][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[60][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[60][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[61]= new Array();
 choices[61][0] = "La Seguridad Social";
 choices[61][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[61][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[61][3] = "El Banco de Espa&ntilde;a";
 answers[61] = choices[61][3];
 units[61] = "15";
 comments[61] = "Id Pregunta: 10113. ";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[62]= new Array();
 choices[62][0] = "Consejos y Servicios.";
 choices[62][1] = "Servicios permanentes y no permanentes.";
 choices[62][2] = "Direcciones Generales.";
 choices[62][3] = "Direcciones ministeriales.";
 answers[62] = choices[62][2];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10318. UNION EUROPEA";


//  Id pregunta: 10112 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[63]= new Array();
 choices[63][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[63][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[63][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[63][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[63] = choices[63][1];
 units[63] = "15";
 comments[63] = "Id Pregunta: 10112. ";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[64]= new Array();
 choices[64][0] = "las personas jur&iacute;dicas ";
 choices[64][1] = "las entidades con personalidad jur&iacute;dica";
 choices[64][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[64][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[64] = choices[64][1];
 units[64] = "7";
 comments[64] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10339 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[65]= new Array();
 choices[65][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[65][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[65][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[65][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10339. UNION EUROPEA";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  En qu&eacute; consiste el principio BASE:";
 choices[66]= new Array();
 choices[66][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[66][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[66][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[66][3] = "Todas las anteriores son falsas";
 answers[66] = choices[66][3];
 units[66] = "73";
 comments[66] = "Id Pregunta: 10103. ";


//  Id pregunta: 10433 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Unidad de igualdad.";
 choices[67][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[67][2] = "Ninguna de las anteriores.";
 choices[67][3] = "A y B son correctas.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10433. POLITICAS DE IGUALDAD";


//  Id pregunta: 10243 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[68]= new Array();
 choices[68][0] = "Art&iacute;culo 70.";
 choices[68][1] = "Art&iacute;culo 54.";
 choices[68][2] = "Articulo 62.";
 choices[68][3] = "Articulo 55. 5.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10061 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Lollipop";
 choices[69][1] = "Jelly Bean";
 choices[69][2] = "Marshmallow";
 choices[69][3] = "KitKat";
 answers[69] = choices[69][2];
 units[69] = "59";
 comments[69] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[70]= new Array();
 choices[70][0] = "La CETIC";
 choices[70][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[70][2] = "La DTIC";
 choices[70][3] = "Ninguno de los anteriores";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[71]= new Array();
 choices[71][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[71][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[71][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[71][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[71] = choices[71][3];
 units[71] = "26";
 comments[71] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10485 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[72]= new Array();
 choices[72][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[72][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[72][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[72][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[72] = choices[72][3];
 units[72] = "10";
 comments[72] = "Id Pregunta: 10485. PRESUPUESTOS GENERALES";


//  Id pregunta: 10279 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta correcta:";
 choices[73]= new Array();
 choices[73][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[73][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[73][2] = "Las respuestas A y B son correctas.";
 choices[73][3] = "Las respuestas A y B son falsas.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10279. UNION EUROPEA";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[74]= new Array();
 choices[74][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[74][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[74][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[74][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10570 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[75]= new Array();
 choices[75][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[75][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[75][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[75][3] = "La tasa de desempleo ronda el 20%";
 answers[75] = choices[75][2];
 units[75] = "12";
 comments[75] = "Id Pregunta: 10570. Modelo econ&oacute;mico";


//  Id pregunta: 10105 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[76]= new Array();
 choices[76][0] = "Gran volumen de informaci&oacute;n";
 choices[76][1] = "Gran variedad de datos";
 choices[76][2] = "Se analizan datos a gran velocidad";
 choices[76][3] = "Todas las anteriores son verdaderas";
 answers[76] = choices[76][3];
 units[76] = "73";
 comments[76] = "Id Pregunta: 10105. ";


//  Id pregunta: 10381 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[77]= new Array();
 choices[77][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[77][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[77][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[77][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[77] = choices[77][0];
 units[77] = "14";
 comments[77] = "Id Pregunta: 10381. POLITICAS DE IGUALDAD";


//  Id pregunta: 10037 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[78]= new Array();
 choices[78][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[78][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[78][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[78][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[78] = choices[78][3];
 units[78] = "66";
 comments[78] = "Id Pregunta: 10037. AGE A1 2015";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[79]= new Array();
 choices[79][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[79][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[79][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[79][3] = "Todas las anteriores son correctas.";
 answers[79] = choices[79][3];
 units[79] = "47";
 comments[79] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10668 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[80]= new Array();
 choices[80][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[80][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[80][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[80][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[80] = choices[80][3];
 units[80] = "7";
 comments[80] = "Id Pregunta: 10668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[81]= new Array();
 choices[81][0] = "Ejecutivo";
 choices[81][1] = "Limitativo";
 choices[81][2] = "Estimativo";
 choices[81][3] = "Progresivo";
 answers[81] = choices[81][2];
 units[81] = "10";
 comments[81] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10207 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[82]= new Array();
 choices[82][0] = "El Delegado del Gobierno.";
 choices[82][1] = "El Subdelegado del Gobierno.";
 choices[82][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[82][3] = "El Gobernador Civil.";
 answers[82] = choices[82][2];
 units[82] = "1";
 comments[82] = "Id Pregunta: 10207. CONSTITUCION1978";


//  Id pregunta: 10564 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[83]= new Array();
 choices[83][0] = "Los ocupados y los parados activos";
 choices[83][1] = "S&oacute;lo los ocupados";
 choices[83][2] = "Los ocupados y los inactivos";
 choices[83][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[83] = choices[83][0];
 units[83] = "12";
 comments[83] = "Id Pregunta: 10564. Modelo econ&oacute;mico";


//  Id pregunta: 10602 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[84]= new Array();
 choices[84][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[84][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[84][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[84][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[84] = choices[84][2];
 units[84] = "76";
 comments[84] = "Id Pregunta: 10602. Junta de Extremadura A1 2015";


//  Id pregunta: 10394 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[85]= new Array();
 choices[85][0] = "Discriminaci&oacute;n indirecta.";
 choices[85][1] = "Discriminaci&oacute;n directa.";
 choices[85][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[85][3] = "Discriminaci&oacute;n abusiva.";
 answers[85] = choices[85][0];
 units[85] = "14";
 comments[85] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[86]= new Array();
 choices[86][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[86][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[86][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[86][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[87]= new Array();
 choices[87][0] = "Varios namenodes y varios datanodes por cluster";
 choices[87][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[87][2] = "1 namenode y varios datanodes por cluster";
 choices[87][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[87] = choices[87][2];
 units[87] = "73";
 comments[87] = "Id Pregunta: 10661. ";


//  Id pregunta: 10187 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[88]= new Array();
 choices[88][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[88][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[88][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[88][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[88] = choices[88][0];
 units[88] = "1";
 comments[88] = "Id Pregunta: 10187. CONSTITUCION1978";


//  Id pregunta: 10464 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[89]= new Array();
 choices[89][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[89][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[89][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[89][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[89] = choices[89][2];
 units[89] = "10";
 comments[89] = "Id Pregunta: 10464. PRESUPUESTOS GENERALES";


//  Id pregunta: 10650 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[90]= new Array();
 choices[90][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[90][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[90][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[90][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[90] = choices[90][3];
 units[90] = "109";
 comments[90] = "Id Pregunta: 10650. Junta de Extremadura A1 2015";


//  Id pregunta: 10256 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[91]= new Array();
 choices[91][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[91][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[91][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[91][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[91] = choices[91][0];
 units[91] = "1";
 comments[91] = "Id Pregunta: 10256. CONSTITUCION1978";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[92]= new Array();
 choices[92][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[92][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[92][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[92][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[92] = choices[92][3];
 units[92] = "10";
 comments[92] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[93]= new Array();
 choices[93][0] = "Perceptible";
 choices[93][1] = "Operable";
 choices[93][2] = "Comprensible";
 choices[93][3] = "Robusto";
 answers[93] = choices[93][2];
 units[93] = "42";
 comments[93] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[94]= new Array();
 choices[94][0] = "Dos Cap&iacute;tulos.";
 choices[94][1] = "Tres Cap&iacute;tulos.";
 choices[94][2] = "Un Cap&iacute;tulo.";
 choices[94][3] = "Cuatro Cap&iacute;tulos.";
 answers[94] = choices[94][1];
 units[94] = "1";
 comments[94] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10184 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[95]= new Array();
 choices[95][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[95][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[95][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[95][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[95] = choices[95][2];
 units[95] = "1";
 comments[95] = "Id Pregunta: 10184. CONSTITUCION1978";


//  Id pregunta: 10090 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[96]= new Array();
 choices[96][0] = "Categor&iacute;a b&aacute;sica";
 choices[96][1] = "Categor&iacute;a media";
 choices[96][2] = "Categor&iacute;a alta";
 choices[96][3] = "Categor&iacute;a media y alta";
 answers[96] = choices[96][2];
 units[96] = "46";
 comments[96] = "Id Pregunta: 10090. AGE A1 2015";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[97]= new Array();
 choices[97][0] = "La Ley General Tributaria.";
 choices[97][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[97][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[97][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[97] = choices[97][2];
 units[97] = "10";
 comments[97] = "Id Pregunta: 10495. PRESUPUESTOS GENERALES";


//  Id pregunta: 10123 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[98]= new Array();
 choices[98][0] = "Un representante de la Administraci&oacute;n local.";
 choices[98][1] = "Un representante del Tribunal de Cuentas.";
 choices[98][2] = "Un representante del Defensor del Pueblo.";
 choices[98][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[98] = choices[98][0];
 units[98] = "22";
 comments[98] = "Id Pregunta: 10123. ";


//  Id pregunta: 10344 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[99]= new Array();
 choices[99][0] = "Pas&oacute; de 518 a 626.";
 choices[99][1] = "Pas&oacute; de 434 a 518.";
 choices[99][2] = "Pas&oacute; de 345 a 512.";
 choices[99][3] = "Pas&oacute; de 435 a 610.";
 answers[99] = choices[99][1];
 units[99] = "5";
 comments[99] = "Id Pregunta: 10344. UNION EUROPEA";


