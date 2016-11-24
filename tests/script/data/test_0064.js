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

//  Id pregunta: 10587 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[0]= new Array();
 choices[0][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[0][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[0][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[0][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[0] = choices[0][0];
 units[0] = "19";
 comments[0] = "Id Pregunta: 10587. Estrategia TIC";


//  Id pregunta: 10379 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[1]= new Array();
 choices[1][0] = "Anual.";
 choices[1][1] = "Semestral.";
 choices[1][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[1][3] = "Bienal.";
 answers[1] = choices[1][2];
 units[1] = "14";
 comments[1] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10634 Año de creación de pregunta: 2016
 questions[2]= "3)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[2]= new Array();
 choices[2][0] = "El nombre y el tipo de correspondencia.";
 choices[2][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[2][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[2][3] = "El nombre y el grado.";
 answers[2] = choices[2][1];
 units[2] = "85";
 comments[2] = "Id Pregunta: 10634. Junta de Extremadura A1 2015";


//  Id pregunta: 10112 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[3]= new Array();
 choices[3][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[3][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[3][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[3][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[3] = choices[3][1];
 units[3] = "15";
 comments[3] = "Id Pregunta: 10112. ";


//  Id pregunta: 10292 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[4]= new Array();
 choices[4][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[4][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[4][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[4][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10161 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[5]= new Array();
 choices[5][0] = "Principio de solo una vez";
 choices[5][1] = "Apertura y transparencia";
 choices[5][2] = "Confianza y seguridad";
 choices[5][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[5] = choices[5][3];
 units[5] = "19";
 comments[5] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[6]= new Array();
 choices[6][0] = "El Parlamento y el Consejo.";
 choices[6][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[6][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[6][3] = "La Comisi&oacute;n y el Consejo.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10299 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[7]= new Array();
 choices[7][0] = "Quince miembros.";
 choices[7][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[7][2] = "Los miembros que determine el Consejo.";
 choices[7][3] = "Un Presidente y quince miembros.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10671 Año de creación de pregunta: 2016
 questions[8]= "9)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[8]= new Array();
 choices[8][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[8][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[8][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[8][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[8] = choices[8][0];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10533 Año de creación de pregunta: 2016
 questions[9]= "10)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[9]= new Array();
 choices[9][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[9][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[9][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[9][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[9] = choices[9][1];
 units[9] = "7";
 comments[9] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[10]= new Array();
 choices[10][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[10][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[10][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[10][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[10] = choices[10][3];
 units[10] = "26";
 comments[10] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10182 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[11]= new Array();
 choices[11][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[11][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[11][2] = "El que hubieren designado las Cortes Generales.";
 choices[11][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[11] = choices[11][1];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10182. CONSTITUCION1978";


//  Id pregunta: 10565 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[12]= new Array();
 choices[12][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[12][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[12][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[12][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[12] = choices[12][3];
 units[12] = "12";
 comments[12] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10460 Año de creación de pregunta: 2016
 questions[13]= "14)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[13]= new Array();
 choices[13][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[13][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[13][2] = "La normativa reguladora de cada derecho.";
 choices[13][3] = "Ley 50/1997, del Gobierno.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10044 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[14]= new Array();
 choices[14][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[14][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[14][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[14][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[14] = choices[14][1];
 units[14] = "60";
 comments[14] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10224 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[15]= new Array();
 choices[15][0] = "Art&iacute;culo 16.2.";
 choices[15][1] = "Art&iacute;culo 17.1.";
 choices[15][2] = "Art&iacute;culo 18.1.";
 choices[15][3] = "Art&iacute;culo 18.2.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10622 Año de creación de pregunta: 2016
 questions[16]= "17)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[16]= new Array();
 choices[16][0] = "Entradas (entities).";
 choices[16][1] = "Atributos (attribs).";
 choices[16][2] = "M&oacute;dulos (modules).";
 choices[16][3] = "Objetos (objects).";
 answers[16] = choices[16][0];
 units[16] = "74";
 comments[16] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10381 Año de creación de pregunta: 2016
 questions[17]= "18)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[17][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[17][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[17][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 10381. POLITICAS DE IGUALDAD";


//  Id pregunta: 10486 Año de creación de pregunta: 2016
 questions[18]= "19)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[18]= new Array();
 choices[18][0] = "La Ley General Tributaria.";
 choices[18][1] = "La Ley Presupuestaria.";
 choices[18][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[18][3] = "Ninguna de las respuestas es correcta.";
 answers[18] = choices[18][0];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10486. PRESUPUESTOS GENERALES";


//  Id pregunta: 10147 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[19]= new Array();
 choices[19][0] = "Al Gobierno de la naci&oacute;n";
 choices[19][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[19][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[19][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[19] = choices[19][3];
 units[19] = "7";
 comments[19] = "Id Pregunta: 10147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 10395 Año de creación de pregunta: 2016
 questions[20]= "21)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[20]= new Array();
 choices[20][0] = "Discriminaci&oacute;n indirecta.";
 choices[20][1] = "Discriminaci&oacute;n directa.";
 choices[20][2] = "Discriminaci&oacute;n por maternidad.";
 choices[20][3] = "Discriminaci&oacute;n abusiva.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 10395. POLITICAS DE IGUALDAD";


//  Id pregunta: 10159 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[21]= new Array();
 choices[21][0] = "verbalmente";
 choices[21][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[21][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[21][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[21] = choices[21][2];
 units[21] = "7";
 comments[21] = "Id Pregunta: 10159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 10013 Año de creación de pregunta: 2016
 questions[22]= "23)  JNDI se usa para el acceso a:";
 choices[22]= new Array();
 choices[22][0] = "Datos de ficheros";
 choices[22][1] = "Sistemas gestores de bases de datos";
 choices[22][2] = "Directorios de nombres";
 choices[22][3] = "Colas de mensajer&iacute;a";
 answers[22] = choices[22][2];
 units[22] = "64";
 comments[22] = "Id Pregunta: 10013. AGE A1 2015";


//  Id pregunta: 10591 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[23]= new Array();
 choices[23][0] = "La CETIC";
 choices[23][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[23][2] = "La DTIC";
 choices[23][3] = "El MHFP";
 answers[23] = choices[23][0];
 units[23] = "19";
 comments[23] = "Id Pregunta: 10591. Estrategia TIC";


//  Id pregunta: 10329 Año de creación de pregunta: 2016
 questions[24]= "25)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[24]= new Array();
 choices[24][0] = "Acuerdos cualificados.";
 choices[24][1] = "Acuerdos ponderados.";
 choices[24][2] = "Valoraci&oacute;n de los votos.";
 choices[24][3] = "Ponderaci&oacute;n de los votos.";
 answers[24] = choices[24][3];
 units[24] = "5";
 comments[24] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10422 Año de creación de pregunta: 2016
 questions[25]= "26)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "El Ministerio de Igualdad.";
 choices[25][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[25][2] = "Ambas son correctas.";
 choices[25][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 10422. POLITICAS DE IGUALDAD";


//  Id pregunta: 10127 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "Tiene car&aacute;cter facultativo.";
 choices[26][1] = "Tiene car&aacute;cter potestativo. ";
 choices[26][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[26][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[26] = choices[26][1];
 units[26] = "22";
 comments[26] = "Id Pregunta: 10127. ";


//  Id pregunta: 10202 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[27]= new Array();
 choices[27][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[27][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[27][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[27][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10202. CONSTITUCION1978";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[28]= "29)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[28]= new Array();
 choices[28][0] = "18 miembros.";
 choices[28][1] = "Ninguna es correcta.";
 choices[28][2] = "22 miembros.";
 choices[28][3] = "21 miembros.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10680 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[29]= new Array();
 choices[29][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[29][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[29][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[29][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10680. Pensiones";


//  Id pregunta: 10456 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[30]= new Array();
 choices[30][0] = "a) Los cuatro ejercicios siguientes.";
 choices[30][1] = "b) El ejercicio siguiente.";
 choices[30][2] = "c) Los dos ejercicios siguientes.";
 choices[30][3] = "d) Los tres ejercicios siguientes.";
 answers[30] = choices[30][3];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[31]= "32)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[31][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[31][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[31][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[31] = choices[31][2];
 units[31] = "43";
 comments[31] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10186 Año de creación de pregunta: 2016
 questions[32]= "33)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[32]= new Array();
 choices[32][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[32][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[32][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[32][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10627 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[33]= new Array();
 choices[33][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[33][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[33][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[33][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[33] = choices[33][0];
 units[33] = "46";
 comments[33] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10467 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[34]= new Array();
 choices[34][0] = "Tres meses.";
 choices[34][1] = "Nueve meses.";
 choices[34][2] = "Cuatro meses.";
 choices[34][3] = "Seis meses.";
 answers[34] = choices[34][0];
 units[34] = "10";
 comments[34] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


//  Id pregunta: 10666 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el cumplimiento de tr&aacute;mites por defecto es de:";
 choices[35]= new Array();
 choices[35][0] = "10 d&iacute;as.";
 choices[35][1] = "15 d&iacute;as.";
 choices[35][2] = "1 mes.";
 choices[35][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[35] = choices[35][0];
 units[35] = "7";
 comments[35] = "Id Pregunta: 10666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[36]= new Array();
 choices[36][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[36][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[36][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[36][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10573 Año de creación de pregunta: 2016
 questions[37]= "38)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[37]= new Array();
 choices[37][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[37][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[37][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[37][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[37] = choices[37][1];
 units[37] = "106";
 comments[37] = "Id Pregunta: 10573. Tema 106. TAI 2016.";


//  Id pregunta: 10335 Año de creación de pregunta: 2016
 questions[38]= "39)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[38]= new Array();
 choices[38][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[38][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[38][2] = "Son incompatibles ambas actas de diputado.";
 choices[38][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10282 Año de creación de pregunta: 2016
 questions[39]= "40)  Sobre el Plan Juncker:";
 choices[39]= new Array();
 choices[39][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[39][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[39][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[39][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10282. UNION EUROPEA";


//  Id pregunta: 10322 Año de creación de pregunta: 2016
 questions[40]= "41)  El Tribunal de Justicia est&aacute; formado por:";
 choices[40]= new Array();
 choices[40][0] = "Un Juez de cada Estado miembro.";
 choices[40][1] = "Por dos Jueces de cada Estado miembro.";
 choices[40][2] = "Por veinte Jueces.";
 choices[40][3] = "Por ocho Jueces.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[41]= new Array();
 choices[41][0] = "No, en ning&uacute;n caso.";
 choices[41][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[41][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[41][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[41] = choices[41][3];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10097 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[42]= new Array();
 choices[42][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[42][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[42][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[42][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[42] = choices[42][2];
 units[42] = "22";
 comments[42] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10311 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[43]= new Array();
 choices[43][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[43][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[43][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[43][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[43] = choices[43][2];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10311. UNION EUROPEA";


//  Id pregunta: 10374 Año de creación de pregunta: 2016
 questions[44]= "45)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[44]= new Array();
 choices[44][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[44][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[44][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[44][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10582 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[45]= new Array();
 choices[45][0] = "El 5 de Octubre de 2015";
 choices[45][1] = "El 15 de Octubre de 2015";
 choices[45][2] = "El 15 de Septiembre de 2015";
 choices[45][3] = "El 2 de Octubre de 2015";
 answers[45] = choices[45][2];
 units[45] = "19";
 comments[45] = "Id Pregunta: 10582. Estrategia TIC";


//  Id pregunta: 10363 Año de creación de pregunta: 2016
 questions[46]= "47)  Los Reglamentos no se caracterizan por:";
 choices[46]= new Array();
 choices[46][0] = "No poseer alcance general.";
 choices[46][1] = "Ser obligatorios.";
 choices[46][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[46][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10397 Año de creación de pregunta: 2016
 questions[47]= "48)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[47]= new Array();
 choices[47][0] = "Acoso sexual.";
 choices[47][1] = "Acoso por raz&oacute;n de sexo.";
 choices[47][2] = "Acoso laboral.";
 choices[47][3] = "Acoso mental.";
 answers[47] = choices[47][1];
 units[47] = "14";
 comments[47] = "Id Pregunta: 10397. POLITICAS DE IGUALDAD";


//  Id pregunta: 10517 Año de creación de pregunta: 2016
 questions[48]= "49)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[48]= new Array();
 choices[48][0] = "la Administraci&oacute;n General del Estado";
 choices[48][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[48][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[48][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[49]= "50)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[49]= new Array();
 choices[49][0] = "Estrasburgo.";
 choices[49][1] = "Bruselas.";
 choices[49][2] = "Luxemburgo.";
 choices[49][3] = "Holanda.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10371 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[50]= new Array();
 choices[50][0] = "En 1988.";
 choices[50][1] = "En 1981.";
 choices[50][2] = "En 1982.";
 choices[50][3] = "En 1986.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10371. UNION EUROPEA";


//  Id pregunta: 10626 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[51]= new Array();
 choices[51][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[51][1] = "La Direcci&oacute;n de la Competencia.";
 choices[51][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[51][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[51] = choices[51][0];
 units[51] = "121";
 comments[51] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[52]= "53)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[52]= new Array();
 choices[52][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[52][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[52][2] = "a y b son correctas";
 choices[52][3] = "a y b son incorrectas";
 answers[52] = choices[52][0];
 units[52] = "7";
 comments[52] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10258 Año de creación de pregunta: 2016
 questions[53]= "54)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[53]= new Array();
 choices[53][0] = "Municipios, provincias y CCAA.";
 choices[53][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[53][2] = "En CCAA, 50 provincias y municipios.";
 choices[53][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10258. CONSTITUCION1978";


//  Id pregunta: 10274 Año de creación de pregunta: 2016
 questions[54]= "55)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[54]= new Array();
 choices[54][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[54][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[54][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[54][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[54] = choices[54][3];
 units[54] = "22";
 comments[54] = "Id Pregunta: 10274. LEY DE TRANSPARENCIA";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[55]= new Array();
 choices[55][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[55][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[55][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[55][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10019 Año de creación de pregunta: 2016
 questions[56]= "57)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[56]= new Array();
 choices[56][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[56][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[56][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[56][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[56] = choices[56][2];
 units[56] = "47";
 comments[56] = "Id Pregunta: 10019. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10285 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[57]= new Array();
 choices[57][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[57][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[57][2] = "la falta de interoperabilidad.";
 choices[57][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 10285. UNION EUROPEA";


//  Id pregunta: 10350 Año de creación de pregunta: 2016
 questions[58]= "59)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[58]= new Array();
 choices[58][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[58][1] = "Uno de sus miembros.";
 choices[58][2] = "La Comisi&oacute;n.";
 choices[58][3] = "Todas las respuestas son correctas.";
 answers[58] = choices[58][3];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10350. UNION EUROPEA";


//  Id pregunta: 10192 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[59]= new Array();
 choices[59][0] = "Un diputado y un senador, cada una de ellas";
 choices[59][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[59][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[59][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10192. CONSTITUCION1978";


//  Id pregunta: 10207 Año de creación de pregunta: 2016
 questions[60]= "61)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[60]= new Array();
 choices[60][0] = "El Delegado del Gobierno.";
 choices[60][1] = "El Subdelegado del Gobierno.";
 choices[60][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[60][3] = "El Gobernador Civil.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10207. CONSTITUCION1978";


//  Id pregunta: 10457 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[61]= new Array();
 choices[61][0] = "A nivel de secci&oacute;n de programa.";
 choices[61][1] = "A nivel de grupo de programa.";
 choices[61][2] = "Ninguna de las respuestas es correcta.";
 choices[61][3] = "A nivel de programa.";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 10457. PRESUPUESTOS GENERALES";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[62]= new Array();
 choices[62][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[62][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[62][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[62][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10226 Año de creación de pregunta: 2016
 questions[63]= "64)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[63]= new Array();
 choices[63][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[63][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[63][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[63][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10361 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[64]= new Array();
 choices[64][0] = "El Consejo Europeo.";
 choices[64][1] = "El Parlamento Europeo.";
 choices[64][2] = "El Consejo.";
 choices[64][3] = "La Comisi&oacute;n.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10361. UNION EUROPEA";


//  Id pregunta: 10536 Año de creación de pregunta: 2016
 questions[65]= "66)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[65]= new Array();
 choices[65][0] = "apud acta";
 choices[65][1] = "presencialmente";
 choices[65][2] = "electr&oacute;nicamente";
 choices[65][3] = "todas son correctas";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10160 Año de creación de pregunta: 2016
 questions[66]= "67)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[66]= new Array();
 choices[66][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[66][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[66][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[66][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[66] = choices[66][1];
 units[66] = "19";
 comments[66] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[67]= "68)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[67]= new Array();
 choices[67][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[67][1] = "Personas con nacionalidad europea.";
 choices[67][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[67][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[67] = choices[67][3];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10315 Año de creación de pregunta: 2016
 questions[68]= "69)  El Colegio de Comisarios se re&uacute;ne:";
 choices[68]= new Array();
 choices[68][0] = "Una vez por semana.";
 choices[68][1] = "Una vez al mes.";
 choices[68][2] = "Dos veces en semana.";
 choices[68][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10315. UNION EUROPEA";


//  Id pregunta: 10317 Año de creación de pregunta: 2016
 questions[69]= "70)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[69]= new Array();
 choices[69][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[69][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[69][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[69][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10317. UNION EUROPEA";


//  Id pregunta: 10172 Año de creación de pregunta: 2016
 questions[70]= "71)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[70][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[70][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[70][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10385 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[71]= new Array();
 choices[71][0] = "Anualmente por el Consejo de Ministros";
 choices[71][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[71][2] = "Al final de cada legislatura por el Gobierno";
 choices[71][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 10385. POLITICAS DE IGUALDAD";


//  Id pregunta: 10180 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[72]= new Array();
 choices[72][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[72][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[72][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[72][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10180. CONSTITUCION1978";


//  Id pregunta: 10340 Año de creación de pregunta: 2016
 questions[73]= "74)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[73]= new Array();
 choices[73][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[73][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[73][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[73][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10340. UNION EUROPEA";


//  Id pregunta: 10562 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[74]= new Array();
 choices[74][0] = "Entre 1973 y 1978";
 choices[74][1] = "Entre 1992 y 1996";
 choices[74][2] = "Entre 1978 y 1985";
 choices[74][3] = "Entre 2008 y 2013";
 answers[74] = choices[74][2];
 units[74] = "12";
 comments[74] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


