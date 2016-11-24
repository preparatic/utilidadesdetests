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

//  Id pregunta: 10192 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[0]= new Array();
 choices[0][0] = "Un diputado y un senador, cada una de ellas";
 choices[0][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[0][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[0][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10192. CONSTITUCION1978";


//  Id pregunta: 10001 Año de creación de pregunta: 2016
 questions[1]= "2)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[1]= new Array();
 choices[1][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[1][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[1][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[1][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[1] = choices[1][2];
 units[1] = "26";
 comments[1] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10451 Año de creación de pregunta: 2016
 questions[2]= "3)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[2]= new Array();
 choices[2][0] = "Los cr&eacute;ditos";
 choices[2][1] = "Las partidas presupuestarias";
 choices[2][2] = "Los derechos";
 choices[2][3] = "Las obligaciones";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10667 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[3]= new Array();
 choices[3][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[3][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[3][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[3][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[3] = choices[3][2];
 units[3] = "7";
 comments[3] = "Id Pregunta: 10667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10368 Año de creación de pregunta: 2016
 questions[4]= "5)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[4]= new Array();
 choices[4][0] = "Un Reglamento.";
 choices[4][1] = "Un Decreto.";
 choices[4][2] = "Una Ley.";
 choices[4][3] = "Un Real-Decreto.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10368. UNION EUROPEA";


//  Id pregunta: 10438 Año de creación de pregunta: 2016
 questions[5]= "6)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[5]= new Array();
 choices[5][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[5][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[5][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[5][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[5] = choices[5][3];
 units[5] = "43";
 comments[5] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10284 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta falsa:";
 choices[6]= new Array();
 choices[6][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[6][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[6][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[6][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10310 Año de creación de pregunta: 2016
 questions[7]= "8)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[7]= new Array();
 choices[7][0] = "La Comisi&oacute;n Europea.";
 choices[7][1] = "El Consejo Europeo.";
 choices[7][2] = "El Consejo de Europa.";
 choices[7][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10599 Año de creación de pregunta: 2016
 questions[8]= "9)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[8]= new Array();
 choices[8][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[8][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[8][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[8][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[8] = choices[8][2];
 units[8] = "45";
 comments[8] = "Id Pregunta: 10599. Junta de Extremadura A1 2015";


//  Id pregunta: 10308 Año de creación de pregunta: 2016
 questions[9]= "10)  El Tribunal de Justicia se cre&oacute; en:";
 choices[9]= new Array();
 choices[9][0] = "El Tratado de la CECA.";
 choices[9][1] = "El Tratado de Niza.";
 choices[9][2] = "El Tratado de &Aacute;msterdam.";
 choices[9][3] = "El Tratado de Lisboa.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 10308. UNION EUROPEA";


//  Id pregunta: 10031 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; es MongoDB?";
 choices[10]= new Array();
 choices[10][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[10][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[10][2] = "Un sistema gestor de base de datos relacional.";
 choices[10][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[10] = choices[10][1];
 units[10] = "73";
 comments[10] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10489 Año de creación de pregunta: 2016
 questions[11]= "12)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[11]= new Array();
 choices[11][0] = "Dos.";
 choices[11][1] = "Cuatro.";
 choices[11][2] = "Cinco.";
 choices[11][3] = "Tres.";
 answers[11] = choices[11][1];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[12]= "13)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[12]= new Array();
 choices[12][0] = "18 miembros.";
 choices[12][1] = "Ninguna es correcta.";
 choices[12][2] = "22 miembros.";
 choices[12][3] = "21 miembros.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10011 Año de creación de pregunta: 2016
 questions[13]= "14)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[13]= new Array();
 choices[13][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[13][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[13][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[13][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[13] = choices[13][1];
 units[13] = "64";
 comments[13] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10343 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[14]= new Array();
 choices[14][0] = "23";
 choices[14][1] = "20";
 choices[14][2] = "14";
 choices[14][3] = "18";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10466 Año de creación de pregunta: 2016
 questions[15]= "16)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[15]= new Array();
 choices[15][0] = "Con el a&ntilde;o anterior.";
 choices[15][1] = "Con los tres a&ntilde;os anteriores.";
 choices[15][2] = "Con el a&ntilde;o natural.";
 choices[15][3] = "Con los dos a&ntilde;os anteriores.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10414 Año de creación de pregunta: 2016
 questions[16]= "17)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Un informe de impacto de g&eacute;nero.";
 choices[16][1] = "Un programa de igualdad de oportunidades.";
 choices[16][2] = "Un plan de Igualdad de Oportunidades.";
 choices[16][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[16] = choices[16][0];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10032 Año de creación de pregunta: 2016
 questions[17]= "18)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[17]= new Array();
 choices[17][0] = "ASF-AL (Apache License 2.0)";
 choices[17][1] = "EUPL (European Union Public License)";
 choices[17][2] = "LGPL (Lesser General Public License)";
 choices[17][3] = "MIT(MIT License)";
 answers[17] = choices[17][1];
 units[17] = "43";
 comments[17] = "Id Pregunta: 10032. AGE A1 2015";


//  Id pregunta: 10412 Año de creación de pregunta: 2016
 questions[18]= "19)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[18]= new Array();
 choices[18][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[18][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[18][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[18][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[18] = choices[18][1];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10412. POLITICAS DE IGUALDAD";


//  Id pregunta: 10218 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[19][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[19][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[19][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10218. CONSTITUCION1978";


//  Id pregunta: 10147 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[20]= new Array();
 choices[20][0] = "Al Gobierno de la naci&oacute;n";
 choices[20][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[20][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[20][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 10147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 10596 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[21]= new Array();
 choices[21][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[21][1] = "Las CMADs";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "Ninguna es correcta";
 answers[21] = choices[21][2];
 units[21] = "19";
 comments[21] = "Id Pregunta: 10596. Estrategia TIC";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[22]= new Array();
 choices[22][0] = "El Parlamento y el Consejo.";
 choices[22][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[22][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[22][3] = "La Comisi&oacute;n y el Consejo.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10404 Año de creación de pregunta: 2016
 questions[23]= "24)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[23]= new Array();
 choices[23][0] = "El Tratado de Roma, 1957.";
 choices[23][1] = "El Acta &Uacute;nica Europea.";
 choices[23][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[23][3] = "Ninguna es correcta.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10404. POLITICAS DE IGUALDAD";


//  Id pregunta: 10471 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Org&aacute;nica.";
 choices[24][1] = "Contable.";
 choices[24][2] = "Econ&oacute;mica.";
 choices[24][3] = "Por programas.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10471. PRESUPUESTOS GENERALES";


//  Id pregunta: 10247 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[25][1] = "Por Orden Ministerial.";
 choices[25][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[25][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10247. CONSTITUCION1978";


//  Id pregunta: 10646 Año de creación de pregunta: 2016
 questions[26]= "27)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[26]= new Array();
 choices[26][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[26][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[26][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][0];
 units[26] = "101";
 comments[26] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10197 Año de creación de pregunta: 2016
 questions[27]= "28)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[27]= new Array();
 choices[27][0] = "Establecer tributos.";
 choices[27][1] = "Desarrollar lo establecido en una Ley.";
 choices[27][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[27][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10197. CONSTITUCION1978";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[28]= "29)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[28]= new Array();
 choices[28][0] = "En qu&eacute; nos gastamos el dinero";
 choices[28][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[28][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[28][3] = "Qui&eacute;n se gasta el dinero.";
 answers[28] = choices[28][0];
 units[28] = "10";
 comments[28] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[29]= new Array();
 choices[29][0] = "las personas jur&iacute;dicas ";
 choices[29][1] = "las entidades con personalidad jur&iacute;dica";
 choices[29][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[29][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[29] = choices[29][1];
 units[29] = "7";
 comments[29] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10340 Año de creación de pregunta: 2016
 questions[30]= "31)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[30]= new Array();
 choices[30][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[30][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[30][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[30][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 10340. UNION EUROPEA";


//  Id pregunta: 10461 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[31]= new Array();
 choices[31][0] = "A los ministros.";
 choices[31][1] = "Las respuestas a) y b) son correctas.";
 choices[31][2] = "Las respuestas a) y b) no son correctas.";
 choices[31][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[31] = choices[31][1];
 units[31] = "10";
 comments[31] = "Id Pregunta: 10461. PRESUPUESTOS GENERALES";


//  Id pregunta: 10234 Año de creación de pregunta: 2016
 questions[32]= "33)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[32]= new Array();
 choices[32][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[32][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[32][2] = "Al Congreso de los Diputados.";
 choices[32][3] = "Al Gobierno.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10234. CONSTITUCION1978";


//  Id pregunta: 10220 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[33]= new Array();
 choices[33][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[33][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[33][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[33][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 10220. CONSTITUCION1978";


//  Id pregunta: 10515 Año de creación de pregunta: 2016
 questions[34]= "35)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[34]= new Array();
 choices[34][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[34][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[34][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[34][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10515. LEY 39/2015";


//  Id pregunta: 10279 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[35][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[35][2] = "Las respuestas A y B son correctas.";
 choices[35][3] = "Las respuestas A y B son falsas.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10279. UNION EUROPEA";


//  Id pregunta: 10680 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[36]= new Array();
 choices[36][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[36][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[36][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[36][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[36] = choices[36][0];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10680. Pensiones";


//  Id pregunta: 10418 Año de creación de pregunta: 2016
 questions[37]= "38)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[37]= new Array();
 choices[37][0] = "P&uacute;blica.";
 choices[37][1] = "Privada.";
 choices[37][2] = "A y B son correctas.";
 choices[37][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 10418. POLITICAS DE IGUALDAD";


//  Id pregunta: 10010 Año de creación de pregunta: 2016
 questions[38]= "39)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Paging";
 choices[38][1] = "Roaming";
 choices[38][2] = "Handover";
 choices[38][3] = "Trunking";
 answers[38] = choices[38][0];
 units[38] = "117";
 comments[38] = "Id Pregunta: 10010. AGE A1 2015";


//  Id pregunta: 10180 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[39]= new Array();
 choices[39][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[39][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[39][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[39][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10180. CONSTITUCION1978";


//  Id pregunta: 10213 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[40]= new Array();
 choices[40][0] = "Cinco.";
 choices[40][1] = "Dos.";
 choices[40][2] = "Cuatro.";
 choices[40][3] = "Siete.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10213. CONSTITUCION1978";


//  Id pregunta: 10221 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[41]= new Array();
 choices[41][0] = "De los derechos y deberes fundamentales.";
 choices[41][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[41][2] = "Derechos y libertades.";
 choices[41][3] = "De la Corona.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10221. CONSTITUCION1978";


//  Id pregunta: 10548 Año de creación de pregunta: 2016
 questions[42]= "43)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[42]= new Array();
 choices[42][0] = "La Administraci&oacute;n General del Estado";
 choices[42][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[42][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[42][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[42] = choices[42][1];
 units[42] = "26";
 comments[42] = "Id Pregunta: 10548. Gobernanza TIC";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[43]= new Array();
 choices[43][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[43][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[43][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[43][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[43] = choices[43][0];
 units[43] = "19";
 comments[43] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[44]= "45)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[44]= new Array();
 choices[44][0] = "Diciembre de 1987.";
 choices[44][1] = "Septiembre de 1989.";
 choices[44][2] = "Octubre de 1990.";
 choices[44][3] = "Noviembre de 1980.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10681 Año de creación de pregunta: 2016
 questions[45]= "46)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[45]= new Array();
 choices[45][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[45][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[45][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[45][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10231 Año de creación de pregunta: 2016
 questions[46]= "47)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[46]= new Array();
 choices[46][0] = "El Presidente del Congreso de los Diputados.";
 choices[46][1] = "El Presidente del Gobierno.";
 choices[46][2] = "El Rey.";
 choices[46][3] = "El Consejo de Ministros.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10350 Año de creación de pregunta: 2016
 questions[47]= "48)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[47]= new Array();
 choices[47][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[47][1] = "Uno de sus miembros.";
 choices[47][2] = "La Comisi&oacute;n.";
 choices[47][3] = "Todas las respuestas son correctas.";
 answers[47] = choices[47][3];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10350. UNION EUROPEA";


//  Id pregunta: 10595 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[48]= new Array();
 choices[48][0] = "La CETIC";
 choices[48][1] = "Los Ministerios";
 choices[48][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[48][3] = "Ninguno de los anteriores";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10101 Año de creación de pregunta: 2016
 questions[49]= "50)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[49]= new Array();
 choices[49][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[49][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[49][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[49][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[49] = choices[49][1];
 units[49] = "73";
 comments[49] = "Id Pregunta: 10101. ";


//  Id pregunta: 10433 Año de creación de pregunta: 2016
 questions[50]= "51)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[50]= new Array();
 choices[50][0] = "Unidad de igualdad.";
 choices[50][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[50][2] = "Ninguna de las anteriores.";
 choices[50][3] = "A y B son correctas.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10433. POLITICAS DE IGUALDAD";


//  Id pregunta: 10285 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[51]= new Array();
 choices[51][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[51][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[51][2] = "la falta de interoperabilidad.";
 choices[51][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 10285. UNION EUROPEA";


//  Id pregunta: 10183 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[52]= new Array();
 choices[52][0] = "al menos por 50 Diputados.";
 choices[52][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[52][2] = "por la Mesa del Congreso de los Diputados.";
 choices[52][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10183. CONSTITUCION1978";


//  Id pregunta: 10429 Año de creación de pregunta: 2016
 questions[53]= "54)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[53][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[53][2] = "Ambas son correctas.";
 choices[53][3] = "Ambas son incorrectas.";
 answers[53] = choices[53][0];
 units[53] = "14";
 comments[53] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[54]= new Array();
 choices[54][0] = "Las respuestas a) y b) son correctas.";
 choices[54][1] = "Las respuestas a) y b) no son correctas.";
 choices[54][2] = "Contenido coherente con los planes sectoriales.";
 choices[54][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10444 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[55]= new Array();
 choices[55][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[55][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[55][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[55][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10355 Año de creación de pregunta: 2016
 questions[56]= "57)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[56]= new Array();
 choices[56][0] = "Son vinculantes solamente.";
 choices[56][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[56][2] = "Son preceptivos y vinculantes.";
 choices[56][3] = "Son preceptivos y no vinculantes.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10647 Año de creación de pregunta: 2016
 questions[57]= "58)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[57]= new Array();
 choices[57][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[57][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[57][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[57][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[57] = choices[57][0];
 units[57] = "101";
 comments[57] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10120 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[58]= new Array();
 choices[58][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[58][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[58][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[58][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[58] = choices[58][3];
 units[58] = "22";
 comments[58] = "Id Pregunta: 10120. ";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[59]= new Array();
 choices[59][0] = "Art&iacute;culo 14 CE.";
 choices[59][1] = "Art&iacute;culo 9.2 CE.";
 choices[59][2] = "Art&iacute;culo 9.1 CE.";
 choices[59][3] = "Art&iacute;culo 13 CE.";
 answers[59] = choices[59][2];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10088 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Diagrama de clases";
 choices[60][1] = "Diagrama de componentes";
 choices[60][2] = "Diagrama de estructura";
 choices[60][3] = "Diagrama de paquetes";
 answers[60] = choices[60][0];
 units[60] = "91";
 comments[60] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10403 Año de creación de pregunta: 2016
 questions[61]= "62)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[61]= new Array();
 choices[61][0] = "Medidas de igualdad.";
 choices[61][1] = "Objetivos de igualdad.";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "A y B son incorrectas.";
 answers[61] = choices[61][2];
 units[61] = "14";
 comments[61] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10124 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[62]= new Array();
 choices[62][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[62][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[62][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[62][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[62] = choices[62][0];
 units[62] = "22";
 comments[62] = "Id Pregunta: 10124. ";


//  Id pregunta: 10606 Año de creación de pregunta: 2016
 questions[63]= "64)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[63]= new Array();
 choices[63][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[63][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[63][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[63][3] = "Todas las respuestas son correctas.";
 answers[63] = choices[63][1];
 units[63] = "101";
 comments[63] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10116 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[64]= new Array();
 choices[64][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[64][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[64][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[64][3] = "El pago de subsidios a parados";
 answers[64] = choices[64][3];
 units[64] = "15";
 comments[64] = "Id Pregunta: 10116. ";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[65]= "66)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[65]= new Array();
 choices[65][0] = "Un recurso de incumplimiento.";
 choices[65][1] = "Recurso de carencia.";
 choices[65][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[65][3] = "Ninguna es correcta.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10497 Año de creación de pregunta: 2016
 questions[66]= "67)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[66]= new Array();
 choices[66][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[66][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[66][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[66][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[66] = choices[66][3];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10415 Año de creación de pregunta: 2016
 questions[67]= "68)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[67]= new Array();
 choices[67][0] = "Un informe de g&eacute;nero.";
 choices[67][1] = "La variable de sexo.";
 choices[67][2] = "La variable de edad.";
 choices[67][3] = "La variable de comportamiento.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10415. POLITICAS DE IGUALDAD";


//  Id pregunta: 10410 Año de creación de pregunta: 2016
 questions[68]= "69)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[68]= new Array();
 choices[68][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[68][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[68][2] = "Un programa de igualdad.";
 choices[68][3] = "Un estatuto de igualdad.";
 answers[68] = choices[68][0];
 units[68] = "14";
 comments[68] = "Id Pregunta: 10410. POLITICAS DE IGUALDAD";


//  Id pregunta: 10617 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[69]= new Array();
 choices[69][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[69][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[69][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[69][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[69] = choices[69][0];
 units[69] = "84";
 comments[69] = "Id Pregunta: 10617. Junta de Extremadura A1 2015";


//  Id pregunta: 10425 Año de creación de pregunta: 2016
 questions[70]= "71)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[70]= new Array();
 choices[70][0] = "Presencia equilibrada.";
 choices[70][1] = "Presencia paritaria.";
 choices[70][2] = "Presencia consensuada.";
 choices[70][3] = "presencia horizontal.";
 answers[70] = choices[70][0];
 units[70] = "14";
 comments[70] = "Id Pregunta: 10425. POLITICAS DE IGUALDAD";


//  Id pregunta: 10091 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[71]= new Array();
 choices[71][0] = "JUnit, Artifactory y SonarQube";
 choices[71][1] = "JUnit, Artifactory y Selenium";
 choices[71][2] = "JUnit, SonarQube y Selenium";
 choices[71][3] = "ArtiFactory, SonarQube y Selenium";
 answers[71] = choices[71][2];
 units[71] = "92";
 comments[71] = "Id Pregunta: 10091. AGE A1 2015";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[72]= "73)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[72]= new Array();
 choices[72][0] = "Estrasburgo.";
 choices[72][1] = "Bruselas.";
 choices[72][2] = "Luxemburgo.";
 choices[72][3] = "Holanda.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10446 Año de creación de pregunta: 2016
 questions[73]= "74)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[73]= new Array();
 choices[73][0] = "Ejecutivo";
 choices[73][1] = "Limitativo";
 choices[73][2] = "Estimativo";
 choices[73][3] = "Progresivo";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10615 Año de creación de pregunta: 2016
 questions[74]= "75)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[74]= new Array();
 choices[74][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[74][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[74][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[74][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[74] = choices[74][0];
 units[74] = "109";
 comments[74] = "Id Pregunta: 10615. Junta de Extremadura A1 2015";


