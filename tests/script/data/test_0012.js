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

//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[0]= "1)  El sector p&uacute;blico institucional se integra por:";
 choices[0]= new Array();
 choices[0][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[0][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[0][2] = "las Universidades p&uacute;blicas";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[1]= "2)  Tienen la condici&oacute;n de alto cargo:";
 choices[1]= new Array();
 choices[1][0] = "los &oacute;rganos superiores";
 choices[1][1] = "los &oacute;rganos superiores y directivos";
 choices[1][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[1][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[2]= new Array();
 choices[2][0] = "Cuatro.";
 choices[2][1] = "Ninguno.";
 choices[2][2] = "Dos.";
 choices[2][3] = "Seis.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[3]= "4)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[3][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[3][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[3][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[3] = choices[3][2];
 units[3] = "83";
 comments[3] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[4]= "5)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[4]= new Array();
 choices[4][0] = "El Segundo.";
 choices[4][1] = "El Primero.";
 choices[4][2] = "El Preliminar.";
 choices[4][3] = "El Tercero.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[5]= "6)  WS-Security contiene especificaciones sobre:";
 choices[5]= new Array();
 choices[5][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[5][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[5][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[5][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[5] = choices[5][1];
 units[5] = "119";
 comments[5] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[6]= "7)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[6]= new Array();
 choices[6][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[6][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[6][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[6][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[6] = choices[6][1];
 units[6] = "7";
 comments[6] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[7]= "8)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[7][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[7][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[7][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[7] = choices[7][3];
 units[7] = "14";
 comments[7] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[8]= "9)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[8]= new Array();
 choices[8][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[8][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[8][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[8][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[9]= "10)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[9]= new Array();
 choices[9][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[9][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[9][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[9][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[9] = choices[9][0];
 units[9] = "35";
 comments[9] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[10]= "11)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[10]= new Array();
 choices[10][0] = "Sean dirigidas por mujeres";
 choices[10][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[10][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[10][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[11]= new Array();
 choices[11][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[11][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[11][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[11][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[12]= new Array();
 choices[12][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[12][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[12][2] = "Las respuestas a) b) no son correctas.";
 choices[12][3] = "Las respuestas a) y b) son correctas.";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[13]= new Array();
 choices[13][0] = "Cuatro.";
 choices[13][1] = "Una.";
 choices[13][2] = "Cinco.";
 choices[13][3] = "Nueve.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[14]= new Array();
 choices[14][0] = "Al Gobierno de la naci&oacute;n";
 choices[14][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[14][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[14][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[14] = choices[14][3];
 units[14] = "7";
 comments[14] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[15]= "16)  El sector p&uacute;blico institucional se integra por:";
 choices[15]= new Array();
 choices[15][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[15][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[15][2] = "las Universidades p&uacute;blicas";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][3];
 units[15] = "7";
 comments[15] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[16]= "17)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[16]= new Array();
 choices[16][0] = "Establecer tributos.";
 choices[16][1] = "Desarrollar lo establecido en una Ley.";
 choices[16][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[16][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[17]= "18)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[17]= new Array();
 choices[17][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[17][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[17][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[17][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[18]= "19)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[18]= new Array();
 choices[18][0] = "Seguridad Social y AEAT";
 choices[18][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[18][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[18][3] = "Todos los anteriores";
 answers[18] = choices[18][3];
 units[18] = "19";
 comments[18] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[19]= "20)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[19]= new Array();
 choices[19][0] = "Cuatro millones de euros.";
 choices[19][1] = "Seis millones de euros.";
 choices[19][2] = "Siete millones de euros.";
 choices[19][3] = "Cinco millones de euros.";
 answers[19] = choices[19][1];
 units[19] = "10";
 comments[19] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[20]= new Array();
 choices[20][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[20][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[20][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[20][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[20] = choices[20][1];
 units[20] = "5";
 comments[20] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[21]= "22)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[21]= new Array();
 choices[21][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[21][1] = "garantizar la conservaci&oacute;n del documento";
 choices[21][2] = "garantizar la autenticidad del documento";
 choices[21][3] = "garantizar la integridad del documento";
 answers[21] = choices[21][0];
 units[21] = "7";
 comments[21] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[22]= new Array();
 choices[22][0] = "Es un framework de software libre.";
 choices[22][1] = "Es una base de datos NoSQL.";
 choices[22][2] = "Est&aacute; basado en MapReduce.";
 choices[22][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[22] = choices[22][1];
 units[22] = "73";
 comments[22] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[23]= new Array();
 choices[23][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[23][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[23][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[23][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[23] = choices[23][0];
 units[23] = "26";
 comments[23] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[24]= "25)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[24]= new Array();
 choices[24][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[24][1] = "1 de enero de 2015";
 choices[24][2] = "1 de enero de 2016";
 choices[24][3] = "1 de julio de 2016";
 answers[24] = choices[24][3];
 units[24] = "77";
 comments[24] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[25]= "26)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[25]= new Array();
 choices[25][0] = "De los interesados en el procedimiento";
 choices[25][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[25][2] = "Disposiciones generales";
 choices[25][3] = "De los actos administrativos";
 answers[25] = choices[25][2];
 units[25] = "7";
 comments[25] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[26]= "27)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[26]= new Array();
 choices[26][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[26][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[26][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[26][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[26] = choices[26][2];
 units[26] = "45";
 comments[26] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; es Java Web Start?";
 choices[27]= new Array();
 choices[27][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[27][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[27][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[27][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[27] = choices[27][3];
 units[27] = "64";
 comments[27] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[28]= "29)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[28]= new Array();
 choices[28][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[28][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[28][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[28][3] = "Todos las anteriores son ciertas.";
 answers[28] = choices[28][3];
 units[28] = "12";
 comments[28] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto a los servicios territoriales es correcto:";
 choices[29]= new Array();
 choices[29][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[29][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[29][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[30]= "31)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[30]= new Array();
 choices[30][0] = "192.228.0.0";
 choices[30][1] = "192.228.8.0";
 choices[30][2] = "192.228.16.0";
 choices[30][3] = "192.228.17.0";
 answers[30] = choices[30][2];
 units[30] = "109";
 comments[30] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[31]= new Array();
 choices[31][0] = "732";
 choices[31][1] = "626";
 choices[31][2] = "786";
 choices[31][3] = "360";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[32]= "33)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[32]= new Array();
 choices[32][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[32][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[32][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][3];
 units[32] = "7";
 comments[32] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[33]= "34)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[33]= new Array();
 choices[33][0] = "Ley org&aacute;nica.";
 choices[33][1] = "Ley ordinaria.";
 choices[33][2] = "Ley de bases.";
 choices[33][3] = "Ley marco.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[34]= new Array();
 choices[34][0] = "Al Consejo Europeo.";
 choices[34][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[34][2] = "A la Comisi&oacute;n Europea.";
 choices[34][3] = "Al Parlamento Europeo.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[35]= "36)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[35]= new Array();
 choices[35][0] = "Se definen iteraciones";
 choices[35][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[35][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[35][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[35] = choices[35][1];
 units[35] = "34, 84";
 comments[35] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[36]= "37)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[36][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[36][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[36][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[37]= new Array();
 choices[37][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[37][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[37][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][2];
 units[37] = "18, 20";
 comments[37] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[38]= new Array();
 choices[38][0] = "Tres a&ntilde;os.";
 choices[38][1] = "Cuatro a&ntilde;os.";
 choices[38][2] = "Cinco a&ntilde;os.";
 choices[38][3] = "Seis a&ntilde;os.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[39]= new Array();
 choices[39][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[39][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[39][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[39][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[39] = choices[39][0];
 units[39] = "19";
 comments[39] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[40]= "41)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[40]= new Array();
 choices[40][0] = "la Administraci&oacute;n General del Estado";
 choices[40][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[40][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[40][3] = "el sector p&uacute;blico y privado institucional";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[41]= "42)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[41]= new Array();
 choices[41][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[41][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[41][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[41][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[42]= new Array();
 choices[42][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[42][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[42][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[42][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[42] = choices[42][1];
 units[42] = "76";
 comments[42] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[43]= new Array();
 choices[43][0] = "Eric Ries";
 choices[43][1] = "Steve Blank";
 choices[43][2] = "Tom Poppendieck";
 choices[43][3] = "Alexander Osterwalder";
 answers[43] = choices[43][2];
 units[43] = "34";
 comments[43] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[44]= "45)  El Tribunal de Justicia est&aacute; formado por:";
 choices[44]= new Array();
 choices[44][0] = "Un Juez de cada Estado miembro.";
 choices[44][1] = "Por dos Jueces de cada Estado miembro.";
 choices[44][2] = "Por veinte Jueces.";
 choices[44][3] = "Por ocho Jueces.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[45]= "46)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[45]= new Array();
 choices[45][0] = "Un a&ntilde;o prorrogable";
 choices[45][1] = "Dos a&ntilde;os no prorrogables";
 choices[45][2] = "Un a&ntilde;o no prorrogable";
 choices[45][3] = "Dos a&ntilde;os prorrogables";
 answers[45] = choices[45][2];
 units[45] = "37";
 comments[45] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[46]= "47)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[46]= new Array();
 choices[46][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[46][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[46][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[46][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[46] = choices[46][1];
 units[46] = "56";
 comments[46] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[47]= "48)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[47]= new Array();
 choices[47][0] = "circulares";
 choices[47][1] = "reglamentos internos";
 choices[47][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[47][3] = "disposiciones de car&aacute;cter general";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[48]= "49)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[48]= new Array();
 choices[48][0] = "Los Derechos y Deberes fundamentales.";
 choices[48][1] = "La Corona.";
 choices[48][2] = "El Poder Judicial.";
 choices[48][3] = "Las Cortes Generales.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[49]= new Array();
 choices[49][0] = "MySQL";
 choices[49][1] = "SQLite";
 choices[49][2] = "Zope";
 choices[49][3] = "MariaDB";
 answers[49] = choices[49][2];
 units[49] = "61";
 comments[49] = "Id Pregunta: 577. Tema 61. TAI 2016.";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[50]= "51)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[50]= new Array();
 choices[50][0] = "Diez art&iacute;culos.";
 choices[50][1] = "Nueve art&iacute;culos.";
 choices[50][2] = "Once art&iacute;culos.";
 choices[50][3] = "Ocho art&iacute;culos.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[51]= new Array();
 choices[51][0] = "Flexibilidad para variar el servicio o producto";
 choices[51][1] = "Eliminar desperdicios";
 choices[51][2] = "Decidir lo m&aacute;s tarde posible";
 choices[51][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[51] = choices[51][0];
 units[51] = "34";
 comments[51] = "Id Pregunta: 721. Metodologias Lean";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[52]= new Array();
 choices[52][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[52][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[52][2] = "A y B son correctas.";
 choices[52][3] = "A y B son incorrectas.";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[53]= "54)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[53][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[53][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[53][3] = "cualquiera que sea el estado del procedimiento";
 answers[53] = choices[53][3];
 units[53] = "7";
 comments[53] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[54]= new Array();
 choices[54][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[54][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[54][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[54][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[55]= "56)  En qu&eacute; consiste el principio BASE:";
 choices[55]= new Array();
 choices[55][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[55][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[55][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[55][3] = "Todas las anteriores son falsas";
 answers[55] = choices[55][3];
 units[55] = "73";
 comments[55] = "Id Pregunta: 103. ";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[56]= "57)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[56]= new Array();
 choices[56][0] = "A los ministros.";
 choices[56][1] = "Las respuestas a) y b) son correctas.";
 choices[56][2] = "Las respuestas a) y b) no son correctas.";
 choices[56][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[56] = choices[56][1];
 units[56] = "10";
 comments[56] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[57]= "58)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[57]= new Array();
 choices[57][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[57][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[57][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[57][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[57] = choices[57][2];
 units[57] = "47";
 comments[57] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ala la correcta:";
 choices[58]= new Array();
 choices[58][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[58][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[58][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[58][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[59]= new Array();
 choices[59][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[59][1] = "Autorizar indultos generales.";
 choices[59][2] = "Sancionar las leyes.";
 choices[59][3] = "Promulgar las leyes.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[60]= "61)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[60]= new Array();
 choices[60][0] = "Alrededor de un 26% del PIB";
 choices[60][1] = "Alrededor de un 11% del PIB";
 choices[60][2] = "Alrededor de un 34% del PIB";
 choices[60][3] = "Alrededor de un 7% del PIB";
 answers[60] = choices[60][1];
 units[60] = "12";
 comments[60] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[61]= "62)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[61]= new Array();
 choices[61][0] = "Conformidad";
 choices[61][1] = "Responsabilidad";
 choices[61][2] = "Adquisici&oacute;n";
 choices[61][3] = "Desempe&ntilde;o";
 answers[61] = choices[61][0];
 units[61] = "26";
 comments[61] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[62]= "63)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[62]= new Array();
 choices[62][0] = "20 parlamentarios.";
 choices[62][1] = "29 parlamentarios.";
 choices[62][2] = "18 parlamentarios.";
 choices[62][3] = "23 parlamentarios.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[63]= "64)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[63]= new Array();
 choices[63][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[63][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[63][2] = "Son incompatibles ambas actas de diputado.";
 choices[63][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[64]= new Array();
 choices[64][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[64][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[64][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[64][3] = "Todas las respuestas son correctas.";
 answers[64] = choices[64][2];
 units[64] = "42";
 comments[64] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[65]= "66)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[65]= new Array();
 choices[65][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[65][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[65][2] = "Al Congreso de los Diputados.";
 choices[65][3] = "Al Gobierno.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[66]= new Array();
 choices[66][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[66][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[66][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[66][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[66] = choices[66][1];
 units[66] = "15";
 comments[66] = "Id Pregunta: 112. ";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[67]= "68)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[67]= new Array();
 choices[67][0] = "Gesti&oacute;n de la disponibilidad";
 choices[67][1] = "Gesti&oacute;n de la demanda";
 choices[67][2] = "Gesti&oacute;n de entregas";
 choices[67][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "101";
 comments[67] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[68]= new Array();
 choices[68][0] = "Selenium";
 choices[68][1] = "JUnit";
 choices[68][2] = "Jenkins";
 choices[68][3] = "JMeter";
 answers[68] = choices[68][2];
 units[68] = "92";
 comments[68] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[69]= new Array();
 choices[69][0] = "Cincuenta y cuatro.";
 choices[69][1] = "Cincuenta.";
 choices[69][2] = "Cincuenta y cinco.";
 choices[69][3] = "Cincuenta y dos.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[70]= "71)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[70]= new Array();
 choices[70][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[70][1] = "Anteriormente se denominaba Sonar.";
 choices[70][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[70][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[70] = choices[70][2];
 units[70] = "92";
 comments[70] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[71]= new Array();
 choices[71][0] = "El Ministro de Econom&iacute;a.";
 choices[71][1] = "El Gobierno.";
 choices[71][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[71][3] = "El Presidente del Gobierno.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[72]= new Array();
 choices[72][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[72][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[72][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[72][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[73]= new Array();
 choices[73][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[73][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[73][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[73][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[73] = choices[73][3];
 units[73] = "66";
 comments[73] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[74]= new Array();
 choices[74][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[74][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[74][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[74][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 180. CONSTITUCION1978";


