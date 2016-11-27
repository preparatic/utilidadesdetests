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

//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[0]= new Array();
 choices[0][0] = "Veinticinco.";
 choices[0][1] = "Veintiuno.";
 choices[0][2] = "Dieciocho.";
 choices[0][3] = "Diecinueve.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[1]= "2)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[1]= new Array();
 choices[1][0] = "Un d&iacute;a";
 choices[1][1] = "Dos d&iacute;as";
 choices[1][2] = "Tres d&iacute;as";
 choices[1][3] = "Cuatro d&iacute;as";
 answers[1] = choices[1][3];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[2][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[2][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[2][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[3]= "4)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[3]= new Array();
 choices[3][0] = "&oacute;rganos superiores";
 choices[3][1] = "&oacute;rganos directivos";
 choices[3][2] = "&oacute;rganos superiores y directivos";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][1];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[4]= new Array();
 choices[4][0] = "Neo4J ";
 choices[4][1] = "OrientDB ";
 choices[4][2] = "InfoGrid ";
 choices[4][3] = "SimpleDB";
 answers[4] = choices[4][3];
 units[4] = "73";
 comments[4] = "Id Pregunta: 653. ";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[5]= new Array();
 choices[5][0] = "DoS";
 choices[5][1] = "Phishing";
 choices[5][2] = "Sniffing";
 choices[5][3] = "Spoofing";
 answers[5] = choices[5][3];
 units[5] = "119";
 comments[5] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[6]= new Array();
 choices[6][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[6][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[6][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[6][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[7]= new Array();
 choices[7][0] = "las Cortes generales.";
 choices[7][1] = "los partidos pol&iacute;ticos.";
 choices[7][2] = "los sindicatos.";
 choices[7][3] = "las Comunidades Aut&oacute;nomas.";
 answers[7] = choices[7][1];
 units[7] = "1";
 comments[7] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[8]= "9)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[8]= new Array();
 choices[8][0] = "Diez art&iacute;culos.";
 choices[8][1] = "Nueve art&iacute;culos.";
 choices[8][2] = "Once art&iacute;culos.";
 choices[8][3] = "Ocho art&iacute;culos.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[9]= new Array();
 choices[9][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[9][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[9][2] = "Servicio de seguridad gestionada";
 choices[9][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[9] = choices[9][1];
 units[9] = "26";
 comments[9] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[10]= new Array();
 choices[10][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[10][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[10][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[10][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[10] = choices[10][1];
 units[10] = "43";
 comments[10] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[11]= new Array();
 choices[11][0] = "Art&iacute;culo 70.";
 choices[11][1] = "Art&iacute;culo 54.";
 choices[11][2] = "Articulo 62.";
 choices[11][3] = "Articulo 55. 5.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[12]= "13)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[12]= new Array();
 choices[12][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[12][1] = "Programa de cartas de servicios";
 choices[12][2] = "Programa para la mejora continua de las organizaciones.";
 choices[12][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[12] = choices[12][2];
 units[12] = "18, 20";
 comments[12] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[13]= new Array();
 choices[13][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[13][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[13][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[13][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[13] = choices[13][0];
 units[13] = "1";
 comments[13] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[14]= "15)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[14]= new Array();
 choices[14][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[14][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[14][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[14][3] = "Todas son correctas.";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[15]= new Array();
 choices[15][0] = "Memcached";
 choices[15][1] = "OpCache";
 choices[15][2] = "WinCache Extension for PHP";
 choices[15][3] = "Alternative PHP Cache";
 answers[15] = choices[15][0];
 units[15] = "65";
 comments[15] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[16]= new Array();
 choices[16][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[16][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[16][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[16][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[16] = choices[16][2];
 units[16] = "15";
 comments[16] = "Id Pregunta: 118. ";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[17]= "18)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[17]= new Array();
 choices[17][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[17][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[17][2] = "Ninguna es correcta.";
 choices[17][3] = "A y B son correctas.";
 answers[17] = choices[17][1];
 units[17] = "14";
 comments[17] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


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


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[19]= "20)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[19]= new Array();
 choices[19][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[19][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[19][2] = "El Presidente del Gobierno";
 choices[19][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[19] = choices[19][1];
 units[19] = "26";
 comments[19] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[20]= new Array();
 choices[20][0] = "Reducir el gasto p&uacute;blico.";
 choices[20][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[20][2] = "Reducir el endeudamiento neto.";
 choices[20][3] = "Al Fondo de Contingencia.";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[21]= new Array();
 choices[21][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[21][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[21][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[21][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[22]= "23)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[22]= new Array();
 choices[22][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[22][1] = "Tratarse de un acto no susceptible de recurso";
 choices[22][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[22][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[22] = choices[22][2];
 units[22] = "8";
 comments[22] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[23]= new Array();
 choices[23][0] = "SessionBean";
 choices[23][1] = "JavaBean";
 choices[23][2] = "MBeans";
 choices[23][3] = "MessageDrivenBean";
 answers[23] = choices[23][2];
 units[23] = "64";
 comments[23] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[24]= new Array();
 choices[24][0] = "Transferencias de cr&eacute;dito.";
 choices[24][1] = "Incorporaciones de cr&eacute;dito.";
 choices[24][2] = "Imputaciones de cr&eacute;dito.";
 choices[24][3] = "Ampliaciones de cr&eacute;dito.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[25]= "26)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[25]= new Array();
 choices[25][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[25][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[25][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[25][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[25] = choices[25][2];
 units[25] = "19";
 comments[25] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[26]= "27)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[26]= new Array();
 choices[26][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[26][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[26][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[26][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[26] = choices[26][2];
 units[26] = "73";
 comments[26] = "Id Pregunta: 652. ";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[27]= new Array();
 choices[27][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[27][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[27][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[27][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[27] = choices[27][2];
 units[27] = "17";
 comments[27] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[28]= "29)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[28]= new Array();
 choices[28][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[28][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[28][2] = "La normativa reguladora de cada derecho.";
 choices[28][3] = "Ley 50/1997, del Gobierno.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[29]= "30)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[29]= new Array();
 choices[29][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[29][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[29][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[29][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[29] = choices[29][3];
 units[29] = "22";
 comments[29] = "Id Pregunta: 707. Ley de transparencia";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[30]= new Array();
 choices[30][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[30][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[30][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[30][3] = "Todas lo son";
 answers[30] = choices[30][0];
 units[30] = "17";
 comments[30] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[31]= "32)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[31]= new Array();
 choices[31][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[31][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[31][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[31][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[31] = choices[31][0];
 units[31] = "92";
 comments[31] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[32]= "33)  El sector p&uacute;blico institucional se integra por:";
 choices[32]= new Array();
 choices[32][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[32][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[32][2] = "las Universidades p&uacute;blicas";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][3];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[33]= new Array();
 choices[33][0] = "Eric Ries";
 choices[33][1] = "Steve Blank";
 choices[33][2] = "Tom Poppendieck";
 choices[33][3] = "Alexander Osterwalder";
 answers[33] = choices[33][2];
 units[33] = "34";
 comments[33] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[34]= new Array();
 choices[34][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[34][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[34][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[34][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[34] = choices[34][3];
 units[34] = "44";
 comments[34] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[35]= "36)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[35]= new Array();
 choices[35][0] = "Transparencia e innovaci&oacute;n";
 choices[35][1] = "Seguridad y reutilizaci&oacute;n";
 choices[35][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[35][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[35] = choices[35][3];
 units[35] = "28";
 comments[35] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[36]= new Array();
 choices[36][0] = "ISO/IEC 31000";
 choices[36][1] = "ISO/IEC 14000";
 choices[36][2] = "ISO/IEC 38500";
 choices[36][3] = "ISO/IEC 18000";
 answers[36] = choices[36][2];
 units[36] = "26";
 comments[36] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[37]= new Array();
 choices[37][0] = "Anual";
 choices[37][1] = "Mensual";
 choices[37][2] = "Semestral";
 choices[37][3] = "Trimestral";
 answers[37] = choices[37][3];
 units[37] = "15";
 comments[37] = "Id Pregunta: 119. ";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[38]= "39)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[38]= new Array();
 choices[38][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[38][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[38][2] = "Ambas son correctas.";
 choices[38][3] = "A y B son incorrectas.";
 answers[38] = choices[38][2];
 units[38] = "14";
 comments[38] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[39][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[39][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[39][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[39] = choices[39][1];
 units[39] = "86";
 comments[39] = "Id Pregunta: 72. AGE A1 2015";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[40]= new Array();
 choices[40][0] = "Las sociedades mercantiles estatales.";
 choices[40][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[40][2] = "Las respuestas a) y b) son correctas.";
 choices[40][3] = "Las respuestas a) y b) no son correctas.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[41]= "42)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[41]= new Array();
 choices[41][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[41][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[41][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[41][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[42]= "43)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[42]= new Array();
 choices[42][0] = "Bases de datos orientadas a filas";
 choices[42][1] = "Bases de datos orientadas a documentos";
 choices[42][2] = "Bases de datos de clave/valor";
 choices[42][3] = "Bases de datos orientadas a objetos";
 answers[42] = choices[42][0];
 units[42] = "73";
 comments[42] = "Id Pregunta: 100. ";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[43]= "44)  El Tribunal de Justicia se cre&oacute; en:";
 choices[43]= new Array();
 choices[43][0] = "El Tratado de la CECA.";
 choices[43][1] = "El Tratado de Niza.";
 choices[43][2] = "El Tratado de &Aacute;msterdam.";
 choices[43][3] = "El Tratado de Lisboa.";
 answers[43] = choices[43][0];
 units[43] = "5";
 comments[43] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[44]= "45)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[44]= new Array();
 choices[44][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[44][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[44][2] = "el sector p&uacute;blico institucional";
 choices[44][3] = "el sector privado corporativo";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 513. LEY 39/2015";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[45]= new Array();
 choices[45][0] = "Principio de solo una vez";
 choices[45][1] = "Apertura y transparencia";
 choices[45][2] = "Confianza y seguridad";
 choices[45][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[45] = choices[45][3];
 units[45] = "19";
 comments[45] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[46]= new Array();
 choices[46][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[46][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[46][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[46][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[46] = choices[46][3];
 units[46] = "101";
 comments[46] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[47]= "48)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[47]= new Array();
 choices[47][0] = "0";
 choices[47][1] = "1";
 choices[47][2] = "Tantos como peticiones concurrentes tenga.";
 choices[47][3] = "Tantos como le permita la memoria de la JVM.";
 answers[47] = choices[47][1];
 units[47] = "64";
 comments[47] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[48]= new Array();
 choices[48][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[48][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[48][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[48][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[48] = choices[48][1];
 units[48] = "5";
 comments[48] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[49]= "50)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[49]= new Array();
 choices[49][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[49][1] = "garantizar la conservaci&oacute;n del documento";
 choices[49][2] = "garantizar la autenticidad del documento";
 choices[49][3] = "garantizar la integridad del documento";
 answers[49] = choices[49][0];
 units[49] = "7";
 comments[49] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[50]= "51)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[50]= new Array();
 choices[50][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[50][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[50][2] = "a y b son correctas";
 choices[50][3] = "a y b son incorrectas";
 answers[50] = choices[50][0];
 units[50] = "7";
 comments[50] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[51]= "52)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[51]= new Array();
 choices[51][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[51][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[51][2] = "Al Congreso de los Diputados.";
 choices[51][3] = "Al Gobierno.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[52]= new Array();
 choices[52][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[52][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[52][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[52][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[53]= new Array();
 choices[53][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[53][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[53][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[53][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[53] = choices[53][1];
 units[53] = "12";
 comments[53] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[54]= new Array();
 choices[54][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[54][1] = "Excesiva estabilidad de empleo";
 choices[54][2] = "An&eacute;mico crecimiento de la productividad";
 choices[54][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[54] = choices[54][1];
 units[54] = "12";
 comments[54] = "Id Pregunta: 563. Modelo econ&oacute;mico";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[55]= new Array();
 choices[55][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[55][1] = "Las CMADs";
 choices[55][2] = "Ambas son correctas.";
 choices[55][3] = "Ninguna es correcta";
 answers[55] = choices[55][2];
 units[55] = "19";
 comments[55] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[56]= "57)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[56]= new Array();
 choices[56][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[56][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[56][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[56][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[57]= "58)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[57]= new Array();
 choices[57][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[57][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[57][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[57][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[57] = choices[57][3];
 units[57] = "12";
 comments[57] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[58][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[58][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[58][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[59]= new Array();
 choices[59][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[59][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[59][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[59][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[59] = choices[59][0];
 units[59] = "75";
 comments[59] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la respuesta correcta:";
 choices[60]= new Array();
 choices[60][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[60][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[60][2] = "Las respuestas A y B son correctas.";
 choices[60][3] = "Las respuestas A y B son falsas.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[61]= "62)  Indica la respuesta correcta";
 choices[61]= new Array();
 choices[61][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[61][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[61][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[61][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[61] = choices[61][0];
 units[61] = "34, 84";
 comments[61] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[62]= new Array();
 choices[62][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[62][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[62][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[62][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[62] = choices[62][1];
 units[62] = "15";
 comments[62] = "Id Pregunta: 112. ";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[63]= "64)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[63][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[63][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[63][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[63] = choices[63][1];
 units[63] = "7";
 comments[63] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[64]= "65)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[64]= new Array();
 choices[64][0] = "De las disposiciones favorables.";
 choices[64][1] = "De las disposiciones sancionadoras no favorables.";
 choices[64][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[64][3] = "Las respuestas b) y c) son correctas.";
 answers[64] = choices[64][3];
 units[64] = "1";
 comments[64] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[65]= new Array();
 choices[65][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[65][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[65][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[65][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[66]= new Array();
 choices[66][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[66][1] = "De nivel alto.";
 choices[66][2] = "De nivel medio y nivel alto.";
 choices[66][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[66] = choices[66][3];
 units[66] = "35";
 comments[66] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[67]= "68)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[67]= new Array();
 choices[67][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[67][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[67][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[67][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[67] = choices[67][2];
 units[67] = "12";
 comments[67] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[68]= new Array();
 choices[68][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[68][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[68][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[68][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[68] = choices[68][3];
 units[68] = "34, 84";
 comments[68] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[69]= new Array();
 choices[69][0] = "Tres a&ntilde;os.";
 choices[69][1] = "Cuatro a&ntilde;os.";
 choices[69][2] = "Cinco a&ntilde;os.";
 choices[69][3] = "Seis a&ntilde;os.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[70]= "71)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[70]= new Array();
 choices[70][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[70][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[70][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[70][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[70] = choices[70][3];
 units[70] = "14";
 comments[70] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[71]= new Array();
 choices[71][0] = "Dos Cap&iacute;tulos.";
 choices[71][1] = "Tres Cap&iacute;tulos.";
 choices[71][2] = "Un Cap&iacute;tulo.";
 choices[71][3] = "Cuatro Cap&iacute;tulos.";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[72]= new Array();
 choices[72][0] = "Por Real Decreto.";
 choices[72][1] = "Por Orden del Ministerio del Interior.";
 choices[72][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[72][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[73]= "74)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[73]= new Array();
 choices[73][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[73][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[73][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[73][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "57";
 comments[73] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[74]= "75)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[74]= new Array();
 choices[74][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[74][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[74][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[74][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[74] = choices[74][3];
 units[74] = "1";
 comments[74] = "Id Pregunta: 253. CONSTITUCION1978";


