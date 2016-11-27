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

//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[0]= "1)  JNDI se usa para el acceso a:";
 choices[0]= new Array();
 choices[0][0] = "Datos de ficheros";
 choices[0][1] = "Sistemas gestores de bases de datos";
 choices[0][2] = "Directorios de nombres";
 choices[0][3] = "Colas de mensajer&iacute;a";
 answers[0] = choices[0][2];
 units[0] = "64";
 comments[0] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[1]= "2)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[1]= new Array();
 choices[1][0] = "Subsecretario";
 choices[1][1] = "Subdirector general";
 choices[1][2] = "Secretario de Estado";
 choices[1][3] = "ninguna es correcta";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[2]= new Array();
 choices[2][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[2][1] = "Excesiva estabilidad de empleo";
 choices[2][2] = "An&eacute;mico crecimiento de la productividad";
 choices[2][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[2] = choices[2][1];
 units[2] = "12";
 comments[2] = "Id Pregunta: 563. Modelo econ&oacute;mico";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[3]= "4)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[3]= new Array();
 choices[3][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[3][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[3][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[3][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[3] = choices[3][3];
 units[3] = "43";
 comments[3] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[4]= new Array();
 choices[4][0] = "En 2015";
 choices[4][1] = "En 2013";
 choices[4][2] = "En 2016";
 choices[4][3] = "En 2007";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[5]= "6)  La sede del Parlamento Europeo se encuentra en:";
 choices[5]= new Array();
 choices[5][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[5][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[5][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[5][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[6]= "7)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[6]= new Array();
 choices[6][0] = "Transparencia e innovaci&oacute;n";
 choices[6][1] = "Seguridad y reutilizaci&oacute;n";
 choices[6][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[6][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[6] = choices[6][3];
 units[6] = "28";
 comments[6] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[7]= new Array();
 choices[7][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[7][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[7][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[7][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[7] = choices[7][1];
 units[7] = "26";
 comments[7] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[8]= new Array();
 choices[8][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[8][1] = "El Gobierno.";
 choices[8][2] = "El Presidente del Gobierno.";
 choices[8][3] = "El Consejo de Ministros.";
 answers[8] = choices[8][1];
 units[8] = "10";
 comments[8] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[9]= new Array();
 choices[9][0] = "Por Real Decreto.";
 choices[9][1] = "Por Orden del Ministerio del Interior.";
 choices[9][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[9][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[10]= "11)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[10]= new Array();
 choices[10][0] = "Un informe de g&eacute;nero.";
 choices[10][1] = "La variable de sexo.";
 choices[10][2] = "La variable de edad.";
 choices[10][3] = "La variable de comportamiento.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[11]= new Array();
 choices[11][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[11][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[11][2] = "El que hubieren designado las Cortes Generales.";
 choices[11][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[11] = choices[11][1];
 units[11] = "1";
 comments[11] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[12]= "13)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[12]= new Array();
 choices[12][0] = "Alrededor de un 26% del PIB";
 choices[12][1] = "Alrededor de un 11% del PIB";
 choices[12][2] = "Alrededor de un 34% del PIB";
 choices[12][3] = "Alrededor de un 7% del PIB";
 answers[12] = choices[12][1];
 units[12] = "12";
 comments[12] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[13]= "14)  El Parlamento Europeo celebrar&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[13][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[13][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[13][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[14]= new Array();
 choices[14][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[14][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[14][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[14][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[14] = choices[14][3];
 units[14] = "10";
 comments[14] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[15]= new Array();
 choices[15][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[15][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[15][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[15][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[16]= "17)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Clustering";
 choices[16][1] = "Deduplicaci&oacute;n";
 choices[16][2] = "Virtualizaci&oacute;n";
 choices[16][3] = "Contenerizaci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "124";
 comments[16] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[17]= "18)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[17]= new Array();
 choices[17][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[17][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[17][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[17][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[17] = choices[17][3];
 units[17] = "22";
 comments[17] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


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


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[19]= new Array();
 choices[19][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[19][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[19][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[19][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[19] = choices[19][2];
 units[19] = "85";
 comments[19] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[20]= "21)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[20]= new Array();
 choices[20][0] = "Director General";
 choices[20][1] = "Secretario general";
 choices[20][2] = "Subdirector general";
 choices[20][3] = "Subsecretario";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[21]= "22)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[21]= new Array();
 choices[21][0] = "Proveer de manera compartida servicios comunes";
 choices[21][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[21][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[21][3] = "Transparencia";
 answers[21] = choices[21][1];
 units[21] = "28";
 comments[21] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[22]= "23)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[22]= new Array();
 choices[22][0] = "B&aacute;sico";
 choices[22][1] = "Medio";
 choices[22][2] = "Alto";
 choices[22][3] = "A los niveles medio y alto";
 answers[22] = choices[22][2];
 units[22] = "35";
 comments[22] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[23]= "24)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[23]= new Array();
 choices[23][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[23][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[23][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[23][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[24]= new Array();
 choices[24][0] = "Entre 1973 y 1978";
 choices[24][1] = "Entre 1992 y 1996";
 choices[24][2] = "Entre 1978 y 1985";
 choices[24][3] = "Entre 2008 y 2013";
 answers[24] = choices[24][2];
 units[24] = "12";
 comments[24] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[25]= "26)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[25]= new Array();
 choices[25][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[25][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[25][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[25][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[25] = choices[25][3];
 units[25] = "109";
 comments[25] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[26][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[26][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[26][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[26] = choices[26][2];
 units[26] = "43";
 comments[26] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[27]= new Array();
 choices[27][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[27][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[27][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[27][3] = "El pago de subsidios a parados";
 answers[27] = choices[27][3];
 units[27] = "15";
 comments[27] = "Id Pregunta: 116. ";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[28]= "29)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[28]= new Array();
 choices[28][0] = "6 principios.";
 choices[28][1] = "7 principios.";
 choices[28][2] = "5 principios.";
 choices[28][3] = "6 directrices.";
 answers[28] = choices[28][1];
 units[28] = "28";
 comments[28] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[29]= "30)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[29]= new Array();
 choices[29][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[29][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[29][2] = "Crea una copia del proceso que hace la llamada.";
 choices[29][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[29] = choices[29][2];
 units[29] = "57";
 comments[29] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[30]= "31)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[30]= new Array();
 choices[30][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[30][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[30][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[30][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[31]= "32)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[31]= new Array();
 choices[31][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[31][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[31][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[31][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[31] = choices[31][1];
 units[31] = "58";
 comments[31] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[32]= new Array();
 choices[32][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[32][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[32][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[32][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[32] = choices[32][3];
 units[32] = "78";
 comments[32] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[33]= "34)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[33]= new Array();
 choices[33][0] = "Cuatro millones de euros.";
 choices[33][1] = "Seis millones de euros.";
 choices[33][2] = "Siete millones de euros.";
 choices[33][3] = "Cinco millones de euros.";
 answers[33] = choices[33][1];
 units[33] = "10";
 comments[33] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[34]= "35)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[34]= new Array();
 choices[34][0] = "Intersecci&oacute;n.";
 choices[34][1] = "Uni&oacute;n.";
 choices[34][2] = "Restricci&oacute;n.";
 choices[34][3] = "Diferencia.";
 answers[34] = choices[34][0];
 units[34] = "60";
 comments[34] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[35][1] = "Auditor&iacute;a operativa.";
 choices[35][2] = "Auditor&iacute;a de cumplimiento.";
 choices[35][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[36]= "37)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[36]= new Array();
 choices[36][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[36][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[36][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[36][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[37]= new Array();
 choices[37][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[37][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[37][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[37][3] = "Todas lo son";
 answers[37] = choices[37][0];
 units[37] = "17";
 comments[37] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[38]= "39)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[38]= new Array();
 choices[38][0] = "Presentar la moci&oacute;n de censura.";
 choices[38][1] = "Presidir las sesiones del Parlamento.";
 choices[38][2] = "Organizar la Secretar&iacute;a General.";
 choices[38][3] = "Preparar las actividades de las Comisiones.";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[39]= "40)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[39]= new Array();
 choices[39][0] = "6 TB.";
 choices[39][1] = "5 TB.";
 choices[39][2] = "7 TB.";
 choices[39][3] = "3 TB.";
 answers[39] = choices[39][1];
 units[39] = "53";
 comments[39] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[40]= "41)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[40]= new Array();
 choices[40][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[40][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[40][2] = "Los interesados en el procedimiento";
 choices[40][3] = "Las alternativas b) y c) son correctas";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[41]= "42)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[41][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[41][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[41][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[41] = choices[41][0];
 units[41] = "45";
 comments[41] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[42]= new Array();
 choices[42][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[42][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[42][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[42][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[42] = choices[42][1];
 units[42] = "18, 20";
 comments[42] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[43]= "44)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[43]= new Array();
 choices[43][0] = "Los Derechos y Deberes fundamentales.";
 choices[43][1] = "La Corona.";
 choices[43][2] = "El Poder Judicial.";
 choices[43][3] = "Las Cortes Generales.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[44]= "45)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[44]= new Array();
 choices[44][0] = "IANA";
 choices[44][1] = "ISOC";
 choices[44][2] = "IETF";
 choices[44][3] = "IAB";
 answers[44] = choices[44][0];
 units[44] = "103";
 comments[44] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[45]= new Array();
 choices[45][0] = "Ford";
 choices[45][1] = "Google";
 choices[45][2] = "Toyota";
 choices[45][3] = "Facebook";
 answers[45] = choices[45][2];
 units[45] = "34";
 comments[45] = "Id Pregunta: 717. Metodologias Lean";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[46]= "47)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[46]= new Array();
 choices[46][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[46][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[46][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[46][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[46] = choices[46][2];
 units[46] = "76";
 comments[46] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[47]= new Array();
 choices[47][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[47][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[47][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[47][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[47] = choices[47][1];
 units[47] = "44";
 comments[47] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[48][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[48][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[48][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[48] = choices[48][2];
 units[48] = "48";
 comments[48] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[49]= "50)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[49]= new Array();
 choices[49][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[49][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[49][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[49][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[50]= "51)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[50]= new Array();
 choices[50][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[50][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[50][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[50][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[50] = choices[50][2];
 units[50] = "22";
 comments[50] = "Id Pregunta: 128. ";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[51]= "52)  Los Secretarios generales t&eacute;cnicos:";
 choices[51]= new Array();
 choices[51][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[51][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[51][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[51][3] = "todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[52]= "53)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[52]= new Array();
 choices[52][0] = "los Ministros y los Secretarios de Estado";
 choices[52][1] = "los Subsecretarios y Secretarios generales";
 choices[52][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[52][3] = "los Directores generales";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[53]= "54)  El plan nacional de ciudades inteligentes...";
 choices[53]= new Array();
 choices[53][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[53][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[53][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[53][3] = "No existe";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[54]= new Array();
 choices[54][0] = "Ley Org&aacute;nica.";
 choices[54][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[54][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[54][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[54] = choices[54][2];
 units[54] = "1";
 comments[54] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[55]= new Array();
 choices[55][0] = "El Tratado de Lisboa";
 choices[55][1] = "El Tratado de Amsterdam";
 choices[55][2] = "El Tratado de Niza";
 choices[55][3] = "El Acta &Uacute;nica Europea";
 answers[55] = choices[55][1];
 units[55] = "15";
 comments[55] = "Id Pregunta: 115. ";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[56]= "57)  En el lenguaje de modelado UML :";
 choices[56]= new Array();
 choices[56][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[56][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[56][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[56][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[56] = choices[56][2];
 units[56] = "89";
 comments[56] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[57]= new Array();
 choices[57][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[57][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[57][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[57][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[57] = choices[57][3];
 units[57] = "120";
 comments[57] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[58]= new Array();
 choices[58][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[58][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[58][2] = "el Ministerio del Interior";
 choices[58][3] = "la Administraci&oacute;n General del Estado";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[59]= new Array();
 choices[59][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[59][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[59][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[59][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[59] = choices[59][2];
 units[59] = "10";
 comments[59] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[60]= new Array();
 choices[60][0] = "Indirecta.";
 choices[60][1] = "Directa.";
 choices[60][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[60][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[61]= new Array();
 choices[61][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[61][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[61][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[61][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[62]= new Array();
 choices[62][0] = "B&aacute;sico, medio y alto";
 choices[62][1] = "D&eacute;bil y fuerte";
 choices[62][2] = "Bajo, medio y alto";
 choices[62][3] = "Bajo, sustancial y alto";
 answers[62] = choices[62][3];
 units[62] = "77";
 comments[62] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[63]= "64)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[63]= new Array();
 choices[63][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[63][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[63][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[63][3] = "todas son correctas";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[64]= new Array();
 choices[64][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[64][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[64][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[64][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[64] = choices[64][3];
 units[64] = "10";
 comments[64] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[65]= "66)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[65]= new Array();
 choices[65][0] = "Resoluci&oacute;n.";
 choices[65][1] = "Desistimiento o renuncia.";
 choices[65][2] = "Caducidad.";
 choices[65][3] = "Todas las anteriores.";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[66]= new Array();
 choices[66][0] = "ISO/IEC 31000";
 choices[66][1] = "ISO/IEC 14000";
 choices[66][2] = "ISO/IEC 38500";
 choices[66][3] = "ISO/IEC 18000";
 answers[66] = choices[66][2];
 units[66] = "26";
 comments[66] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[67]= "68)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[67]= new Array();
 choices[67][0] = "Cifrado de las comunicaciones";
 choices[67][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[67][2] = "Registro de los accesos";
 choices[67][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[67] = choices[67][1];
 units[67] = "35";
 comments[67] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[68]= "69)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[68]= new Array();
 choices[68][0] = "GROUP BY.";
 choices[68][1] = "COUNT.";
 choices[68][2] = "WHERE.";
 choices[68][3] = "DISTINCT.";
 answers[68] = choices[68][0];
 units[68] = "60";
 comments[68] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


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


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[70]= new Array();
 choices[70][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[70][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[70][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[70][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[70] = choices[70][2];
 units[70] = "15";
 comments[70] = "Id Pregunta: 118. ";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[71]= new Array();
 choices[71][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[71][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[71][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[71][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[72]= "73)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[72]= new Array();
 choices[72][0] = "La Comisi&oacute;n.";
 choices[72][1] = "El Consejo de Europa.";
 choices[72][2] = "El Consejo Europeo.";
 choices[72][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[72] = choices[72][3];
 units[72] = "5";
 comments[72] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[73]= new Array();
 choices[73][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[73][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[73][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[73][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[73] = choices[73][0];
 units[73] = "19";
 comments[73] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[74]= new Array();
 choices[74][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[74][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[74][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[74][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[74] = choices[74][2];
 units[74] = "7";
 comments[74] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


