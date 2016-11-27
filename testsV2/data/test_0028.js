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

//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[0]= "1)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[0]= new Array();
 choices[0][0] = "El Gobierno.";
 choices[0][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[0][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[0][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[1]= "2)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[1]= new Array();
 choices[1][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[1][1] = "Static &amp; Active process for REsolution Bank.";
 choices[1][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[1][3] = "Super Active REsponse for Banks";
 answers[1] = choices[1][0];
 units[1] = "12";
 comments[1] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[2]= new Array();
 choices[2][0] = "Agenda digital para Europa";
 choices[2][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[2][2] = "Juventud en movimiento";
 choices[2][3] = "Agenda Web 2.0";
 answers[2] = choices[2][3];
 units[2] = "19";
 comments[2] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[3]= "4)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[3]= new Array();
 choices[3][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[3][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[3][2] = "Absoluta frente a cualquier otro gasto.";
 choices[3][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[3] = choices[3][2];
 units[3] = "10";
 comments[3] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[4]= "5)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[4]= new Array();
 choices[4][0] = "Windows Phone";
 choices[4][1] = "Blackberry";
 choices[4][2] = "iOS";
 choices[4][3] = "Android";
 answers[4] = choices[4][3];
 units[4] = "59";
 comments[4] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[5]= "6)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[5]= new Array();
 choices[5][0] = "Los Derechos y Deberes fundamentales.";
 choices[5][1] = "La Corona.";
 choices[5][2] = "El Poder Judicial.";
 choices[5][3] = "Las Cortes Generales.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[6]= "7)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[6]= new Array();
 choices[6][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[6][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[6][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[6][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[6] = choices[6][2];
 units[6] = "7";
 comments[6] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[7]= "8)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[7]= new Array();
 choices[7][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[7][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[7][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[7][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[7] = choices[7][3];
 units[7] = "12";
 comments[7] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[8]= new Array();
 choices[8][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[8][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[8][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[8][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[8] = choices[8][1];
 units[8] = "22";
 comments[8] = "Id Pregunta: 122. ";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[9]= new Array();
 choices[9][0] = "Art&iacute;culo 16.2.";
 choices[9][1] = "Art&iacute;culo 17.1.";
 choices[9][2] = "Art&iacute;culo 18.1.";
 choices[9][3] = "Art&iacute;culo 18.2.";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[10]= "11)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[10][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[10][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[10][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[11][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[11][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[11][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[12]= "13)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[12]= new Array();
 choices[12][0] = "ASF-AL (Apache License 2.0)";
 choices[12][1] = "EUPL (European Union Public License)";
 choices[12][2] = "LGPL (Lesser General Public License)";
 choices[12][3] = "MIT(MIT License)";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[13]= new Array();
 choices[13][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[13][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[13][2] = "el Ministerio del Interior";
 choices[13][3] = "la Administraci&oacute;n General del Estado";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[14]= "15)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[14]= new Array();
 choices[14][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[14][1] = "Ninguna de las respuestas es correcta.";
 choices[14][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[14][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[15]= new Array();
 choices[15][0] = "Veinticinco.";
 choices[15][1] = "Veintisiete.";
 choices[15][2] = "Veintinueve.";
 choices[15][3] = "Cuarenta y uno.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[16]= "17)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[16]= new Array();
 choices[16][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[16][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[16][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[16][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[16] = choices[16][2];
 units[16] = "43";
 comments[16] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[17]= new Array();
 choices[17][0] = "Un programa presupuestario.";
 choices[17][1] = "Un concepto presupuestario.";
 choices[17][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[17][3] = "Un cr&eacute;dito presupuestario.";
 answers[17] = choices[17][0];
 units[17] = "10";
 comments[17] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[18]= "19)  El sector p&uacute;blico institucional se integra por:";
 choices[18]= new Array();
 choices[18][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[18][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[18][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[18][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[18] = choices[18][1];
 units[18] = "7";
 comments[18] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[19]= "20)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[19]= new Array();
 choices[19][0] = "Las sociedades mercantiles estatales.";
 choices[19][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[19][2] = "Las respuestas a) y b) son correctas.";
 choices[19][3] = "Las respuestas a) y b) no son correctas.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[20]= new Array();
 choices[20][0] = "Yarn";
 choices[20][1] = "Flume";
 choices[20][2] = "Hive";
 choices[20][3] = "BizAgi";
 answers[20] = choices[20][3];
 units[20] = "73";
 comments[20] = "Id Pregunta: 655. ";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "A los cinco a&ntilde;os.";
 choices[21][1] = "A los dos a&ntilde;os.";
 choices[21][2] = "A los tres a&ntilde;os.";
 choices[21][3] = "A los cuatro a&ntilde;os.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[22]= "23)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[22]= new Array();
 choices[22][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[22][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[22][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[22][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[22] = choices[22][2];
 units[22] = "14";
 comments[22] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[23]= new Array();
 choices[23][0] = "verbalmente";
 choices[23][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[23][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[23][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[23] = choices[23][2];
 units[23] = "7";
 comments[23] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[24]= new Array();
 choices[24][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[24][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[24][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[24][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[24] = choices[24][2];
 units[24] = "26";
 comments[24] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[25]= new Array();
 choices[25][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[25][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[25][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[25][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[25] = choices[25][1];
 units[25] = "18, 20";
 comments[25] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[26]= "27)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[26]= new Array();
 choices[26][0] = "los &oacute;rganos administrativos";
 choices[26][1] = "las entidades dependientes";
 choices[26][2] = "las unidades administrativas";
 choices[26][3] = "los servicios comunes";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[27]= new Array();
 choices[27][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[27][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[27][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[27][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[27] = choices[27][3];
 units[27] = "10";
 comments[27] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[28]= new Array();
 choices[28][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[28][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[28][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[28][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[28] = choices[28][1];
 units[28] = "92";
 comments[28] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[29]= "30)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[29]= new Array();
 choices[29][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[29][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[29][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[29][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[29] = choices[29][3];
 units[29] = "7";
 comments[29] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[30]= "31)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[30]= new Array();
 choices[30][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[30][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[30][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[30][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[30] = choices[30][3];
 units[30] = "14";
 comments[30] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[31]= new Array();
 choices[31][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[31][1] = "Directiva 2004/113/CE del Consejo.";
 choices[31][2] = "Todas son correctas.";
 choices[31][3] = "Todas son falsas.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[32]= "33)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[32]= new Array();
 choices[32][0] = "Interchange of Data between Administrations (IDA)";
 choices[32][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[32][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[32][3] = "Interoperability Electronic European Solution (IEES)";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[33]= "34)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[33]= new Array();
 choices[33][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[33][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[33][2] = "Crea una copia del proceso que hace la llamada.";
 choices[33][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[33] = choices[33][2];
 units[33] = "57";
 comments[33] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[34]= new Array();
 choices[34][0] = "Art. 25 LO, 3/2007.";
 choices[34][1] = "Art. 23 LO, 3/2007.";
 choices[34][2] = "Art. 14 LO, 3/2007.";
 choices[34][3] = "Ninguna es correcta, es el art. 13.";
 answers[34] = choices[34][0];
 units[34] = "14";
 comments[34] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[35]= "36)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[35]= new Array();
 choices[35][0] = "Medidas de igualdad.";
 choices[35][1] = "Objetivos de igualdad.";
 choices[35][2] = "Ambas son correctas.";
 choices[35][3] = "A y B son incorrectas.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[36]= new Array();
 choices[36][0] = "Anual";
 choices[36][1] = "Mensual";
 choices[36][2] = "Semestral";
 choices[36][3] = "Trimestral";
 answers[36] = choices[36][3];
 units[36] = "15";
 comments[36] = "Id Pregunta: 119. ";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[37]= new Array();
 choices[37][0] = "A la CETIC";
 choices[37][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[37][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[37][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[37] = choices[37][3];
 units[37] = "19";
 comments[37] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[38]= new Array();
 choices[38][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[38][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[38][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[38][3] = "La tasa de desempleo ronda el 20%";
 answers[38] = choices[38][2];
 units[38] = "12";
 comments[38] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[39]= new Array();
 choices[39][0] = "El Presidente del Senado";
 choices[39][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[39][2] = "El Presidente del Gobierno";
 choices[39][3] = "El Presidente de las Cortes Generales";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[40]= "41)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[40]= new Array();
 choices[40][0] = "El Rey.";
 choices[40][1] = "El Jefe del Estado.";
 choices[40][2] = "El Gobierno.";
 choices[40][3] = "El Presidente del Gobierno.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[41]= "42)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[41]= new Array();
 choices[41][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[41][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[41][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[41][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[41] = choices[41][0];
 units[41] = "7";
 comments[41] = "Id Pregunta: 671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[42]= new Array();
 choices[42][0] = "El Ministro de Econom&iacute;a.";
 choices[42][1] = "El Gobierno.";
 choices[42][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[42][3] = "El Presidente del Gobierno.";
 answers[42] = choices[42][1];
 units[42] = "10";
 comments[42] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[43]= "44)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[43]= new Array();
 choices[43][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[43][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[43][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[43][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[43] = choices[43][0];
 units[43] = "45";
 comments[43] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[44]= new Array();
 choices[44][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[44][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[44][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[44][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[44] = choices[44][3];
 units[44] = "26";
 comments[44] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[45]= new Array();
 choices[45][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[45][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[45][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[45][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[45] = choices[45][1];
 units[45] = "1";
 comments[45] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[46]= "47)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[46]= new Array();
 choices[46][0] = "X.";
 choices[46][1] = "XIX.";
 choices[46][2] = "XV.";
 choices[46][3] = "XIII.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[47]= new Array();
 choices[47][0] = "CVS";
 choices[47][1] = "SVN";
 choices[47][2] = "Team Foundation Server";
 choices[47][3] = "Apache Tomcat";
 answers[47] = choices[47][3];
 units[47] = "92";
 comments[47] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[48]= new Array();
 choices[48][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[48][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[48][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[48][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[48] = choices[48][0];
 units[48] = "26";
 comments[48] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[49]= new Array();
 choices[49][0] = "No discriminaci&oacute;n";
 choices[49][1] = "Cooperaci&oacute;n";
 choices[49][2] = "Colaboraci&oacute;n";
 choices[49][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[49] = choices[49][2];
 units[49] = "18, 20";
 comments[49] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[50]= "51)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[50]= new Array();
 choices[50][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[50][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[50][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[50][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[51]= "52)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[51]= new Array();
 choices[51][0] = "SMB3";
 choices[51][1] = "AFP";
 choices[51][2] = "NFS";
 choices[51][3] = "FTP";
 answers[51] = choices[51][0];
 units[51] = "59";
 comments[51] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[52]= new Array();
 choices[52][0] = "Ley 3/2015";
 choices[52][1] = "Ley 6/2007";
 choices[52][2] = "Ley 5/1984";
 choices[52][3] = "Ley 5/2006";
 answers[52] = choices[52][0];
 units[52] = "22";
 comments[52] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[53]= new Array();
 choices[53][0] = "Al menos cada 12 meses";
 choices[53][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[53][2] = "Al menos cada 18 meses";
 choices[53][3] = "Al menos cada 24 meses";
 answers[53] = choices[53][3];
 units[53] = "77";
 comments[53] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[54]= "55)  En el lenguaje de modelado UML :";
 choices[54]= new Array();
 choices[54][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[54][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[54][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[54][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[54] = choices[54][2];
 units[54] = "89";
 comments[54] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[55]= new Array();
 choices[55][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[55][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[55][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[55][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[55] = choices[55][0];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[56]= new Array();
 choices[56][0] = "Publicidad.";
 choices[56][1] = "Constituci&oacute;n.";
 choices[56][2] = "Legalidad.";
 choices[56][3] = "Creaci&oacute;n.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[57]= "58)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[57]= new Array();
 choices[57][0] = "la poblaci&oacute;n del territorio";
 choices[57][1] = "el volumen de gesti&oacute;n";
 choices[57][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[57][3] = "todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[58]= new Array();
 choices[58][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[58][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[58][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][1];
 units[58] = "19";
 comments[58] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[59]= "60)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[59]= new Array();
 choices[59][0] = "90";
 choices[59][1] = "50";
 choices[59][2] = "64";
 choices[59][3] = "60";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[60]= new Array();
 choices[60][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[60][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[60][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[60][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[61]= new Array();
 choices[61][0] = "a) Los cuatro ejercicios siguientes.";
 choices[61][1] = "b) El ejercicio siguiente.";
 choices[61][2] = "c) Los dos ejercicios siguientes.";
 choices[61][3] = "d) Los tres ejercicios siguientes.";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[62]= "63)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[62]= new Array();
 choices[62][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[62][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[62][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[62][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[63]= new Array();
 choices[63][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[63][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[63][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[63][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[63] = choices[63][3];
 units[63] = "77";
 comments[63] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[64]= "65)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[64]= new Array();
 choices[64][0] = "la capital del pa&iacute;s";
 choices[64][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[64][2] = "cada una de las provincias";
 choices[64][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[65]= "66)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[65]= new Array();
 choices[65][0] = "por Real Decreto";
 choices[65][1] = "reglamentariamente";
 choices[65][2] = "mediante Ley";
 choices[65][3] = "ninguna es correcta";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[66]= new Array();
 choices[66][0] = "El aumento de la esperanza de vida.";
 choices[66][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[66][2] = "La reducci&oacute;n del desempleo.";
 choices[66][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[66] = choices[66][0];
 units[66] = "14";
 comments[66] = "Id Pregunta: 673. Estructura social";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[67]= "68)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[67]= new Array();
 choices[67][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[67][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[67][2] = "Funcionarios e interinos.";
 choices[67][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[67] = choices[67][3];
 units[67] = "20";
 comments[67] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[68]= new Array();
 choices[68][0] = "Maximizar el valor para los clientes";
 choices[68][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[68][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[68][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[68] = choices[68][3];
 units[68] = "34";
 comments[68] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[69]= "70)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[69]= new Array();
 choices[69][0] = "Sean dirigidas por mujeres";
 choices[69][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[69][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[69][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[69] = choices[69][2];
 units[69] = "14";
 comments[69] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[70]= new Array();
 choices[70][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[70][1] = "La libertad sexual y religiosa.";
 choices[70][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[70][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[70] = choices[70][3];
 units[70] = "1";
 comments[70] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[71]= "72)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[71]= new Array();
 choices[71][0] = "De los interesados en el procedimiento";
 choices[71][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[71][2] = "Disposiciones generales";
 choices[71][3] = "De los actos administrativos";
 answers[71] = choices[71][2];
 units[71] = "7";
 comments[71] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[72]= new Array();
 choices[72][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[72][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[72][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[72][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[72] = choices[72][2];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[73]= "74)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[73]= new Array();
 choices[73][0] = "la Administraci&oacute;n General del Estado";
 choices[73][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[73][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[73][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[73] = choices[73][3];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; es Java Web Start?";
 choices[74]= new Array();
 choices[74][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[74][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[74][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[74][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[74] = choices[74][3];
 units[74] = "64";
 comments[74] = "Id Pregunta: 35. AGE A1 2015";


