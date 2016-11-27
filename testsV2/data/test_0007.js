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

//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[0]= new Array();
 choices[0][0] = "Quince miembros.";
 choices[0][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[0][2] = "Los miembros que determine el Consejo.";
 choices[0][3] = "Un Presidente y quince miembros.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[1]= "2)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[1]= new Array();
 choices[1][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[1][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[1][2] = "Se basan en sistemas distribuidos";
 choices[1][3] = "Se basan en el modelo de datos relacional";
 answers[1] = choices[1][2];
 units[1] = "73";
 comments[1] = "Id Pregunta: 102. ";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[2]= "3)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[2]= new Array();
 choices[2][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[2][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[2][2] = "Ninguna es correcta.";
 choices[2][3] = "A y B son correctas.";
 answers[2] = choices[2][1];
 units[2] = "14";
 comments[2] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[3]= "4)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[3]= new Array();
 choices[3][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[3][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[3][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[3][3] = "Todos las anteriores son ciertas.";
 answers[3] = choices[3][3];
 units[3] = "12";
 comments[3] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[4]= "5)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[4]= new Array();
 choices[4][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[4][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[4][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[4][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[4] = choices[4][2];
 units[4] = "47";
 comments[4] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[5]= new Array();
 choices[5][0] = "Anualmente por el Consejo de Ministros";
 choices[5][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[5][2] = "Al final de cada legislatura por el Gobierno";
 choices[5][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[6]= new Array();
 choices[6][0] = "Perceptible";
 choices[6][1] = "Operable";
 choices[6][2] = "Comprensible";
 choices[6][3] = "Robusto";
 answers[6] = choices[6][2];
 units[6] = "42";
 comments[6] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[7]= "8)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[7]= new Array();
 choices[7][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[7][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[7][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[7][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[7] = choices[7][2];
 units[7] = "5";
 comments[7] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[8]= "9)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[8]= new Array();
 choices[8][0] = "Un Reglamento.";
 choices[8][1] = "Un Decreto.";
 choices[8][2] = "Una Ley.";
 choices[8][3] = "Un Real-Decreto.";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[9]= "10)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[9]= new Array();
 choices[9][0] = "ASF-AL (Apache License 2.0)";
 choices[9][1] = "EUPL (European Union Public License)";
 choices[9][2] = "LGPL (Lesser General Public License)";
 choices[9][3] = "MIT(MIT License)";
 answers[9] = choices[9][1];
 units[9] = "43";
 comments[9] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[10]= new Array();
 choices[10][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[10][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[10][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[10][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[10] = choices[10][2];
 units[10] = "12";
 comments[10] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[11]= "12)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[11][1] = "Las inversiones reales y financieras.";
 choices[11][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[11][3] = "Las transferencias de capital y las inversiones reales.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[12]= "13)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[12]= new Array();
 choices[12][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[12][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[12][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[12][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[12] = choices[12][2];
 units[12] = "85";
 comments[12] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[13]= "14)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[13]= new Array();
 choices[13][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[13][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[13][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[13][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[13] = choices[13][1];
 units[13] = "1";
 comments[13] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[14]= "15)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[14]= new Array();
 choices[14][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[14][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[14][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[14][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[14] = choices[14][2];
 units[14] = "27";
 comments[14] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[15]= "16)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[15]= new Array();
 choices[15][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[15][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[15][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[15][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[15] = choices[15][2];
 units[15] = "89";
 comments[15] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[16][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[16][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[16][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[16] = choices[16][0];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[17]= "18)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[17][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[17][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[17][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[17] = choices[17][1];
 units[17] = "1";
 comments[17] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[18]= new Array();
 choices[18][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[18][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[18][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[18][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[19]= "20)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[19]= new Array();
 choices[19][0] = "En qu&eacute; nos gastamos el dinero";
 choices[19][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[19][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[19][3] = "Qui&eacute;n se gasta el dinero.";
 answers[19] = choices[19][0];
 units[19] = "10";
 comments[19] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[20]= "21)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[20]= new Array();
 choices[20][0] = "De ocho a&ntilde;os.";
 choices[20][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[20][2] = "Ambas son correctas.";
 choices[20][3] = "No existe un l&iacute;mite.";
 answers[20] = choices[20][0];
 units[20] = "14";
 comments[20] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[21]= "22)  Las Administraciones P&uacute;blicas:";
 choices[21]= new Array();
 choices[21][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[21][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[21][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[21][3] = "todas son correctas";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[22]= new Array();
 choices[22][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[22][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[22][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[22][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[22] = choices[22][2];
 units[22] = "22";
 comments[22] = "Id Pregunta: 129. ";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[23]= "24)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[23]= new Array();
 choices[23][0] = "Monol&iacute;tico.";
 choices[23][1] = "Estratificado.";
 choices[23][2] = "Cliente/servidor.";
 choices[23][3] = "Orientado a objetos.";
 answers[23] = choices[23][3];
 units[23] = "56";
 comments[23] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[24]= "25)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[24]= new Array();
 choices[24][0] = "la poblaci&oacute;n del territorio";
 choices[24][1] = "el volumen de gesti&oacute;n";
 choices[24][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[25]= "26)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[25]= new Array();
 choices[25][0] = "apud acta";
 choices[25][1] = "presencialmente";
 choices[25][2] = "electr&oacute;nicamente";
 choices[25][3] = "todas son correctas";
 answers[25] = choices[25][3];
 units[25] = "7";
 comments[25] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[26]= "27)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[26][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[26][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[26][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[26] = choices[26][2];
 units[26] = "83";
 comments[26] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[27]= new Array();
 choices[27][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[27][1] = "La Direcci&oacute;n de la Competencia.";
 choices[27][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[27][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[27] = choices[27][0];
 units[27] = "121";
 comments[27] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[28]= "29)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[28]= new Array();
 choices[28][0] = "X.";
 choices[28][1] = "XIX.";
 choices[28][2] = "XV.";
 choices[28][3] = "XIII.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[29]= new Array();
 choices[29][0] = "El Parlamento y el Consejo.";
 choices[29][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[29][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[29][3] = "La Comisi&oacute;n y el Consejo.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[30]= "31)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[30]= new Array();
 choices[30][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[30][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[30][2] = "a y b son correctas";
 choices[30][3] = "a y b son incorrectas";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[31]= new Array();
 choices[31][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[31][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[31][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[31][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[31] = choices[31][0];
 units[31] = "15";
 comments[31] = "Id Pregunta: 114. ";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[32]= new Array();
 choices[32][0] = "El Consejo Europeo.";
 choices[32][1] = "El Parlamento Europeo.";
 choices[32][2] = "El Consejo.";
 choices[32][3] = "La Comisi&oacute;n.";
 answers[32] = choices[32][3];
 units[32] = "5";
 comments[32] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[33]= "34)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[33]= new Array();
 choices[33][0] = "Los cr&eacute;ditos";
 choices[33][1] = "Las partidas presupuestarias";
 choices[33][2] = "Los derechos";
 choices[33][3] = "Las obligaciones";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[34]= new Array();
 choices[34][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[34][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[34][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[34][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[34] = choices[34][0];
 units[34] = "19";
 comments[34] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[35]= new Array();
 choices[35][0] = "El Tratado de Lisboa";
 choices[35][1] = "El Tratado de Amsterdam";
 choices[35][2] = "El Tratado de Niza";
 choices[35][3] = "El Acta &Uacute;nica Europea";
 answers[35] = choices[35][1];
 units[35] = "15";
 comments[35] = "Id Pregunta: 115. ";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[36]= "37)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[36]= new Array();
 choices[36][0] = "Se definen iteraciones";
 choices[36][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[36][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[36][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[36] = choices[36][1];
 units[36] = "34, 84";
 comments[36] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[37]= new Array();
 choices[37][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[37][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[37][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[37][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[37] = choices[37][2];
 units[37] = "47";
 comments[37] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[38]= new Array();
 choices[38][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[38][1] = "Por Orden Ministerial.";
 choices[38][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[38][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[39]= "40)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[39]= new Array();
 choices[39][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[39][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[39][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[39][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[40]= "41)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[40]= new Array();
 choices[40][0] = "la Administraci&oacute;n General del Estado";
 choices[40][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[40][2] = "las Entidades Locales";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "7";
 comments[40] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[41]= new Array();
 choices[41][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[41][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[41][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[41][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[41] = choices[41][2];
 units[41] = "22";
 comments[41] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[42]= "43)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[42]= new Array();
 choices[42][0] = "La Comisi&oacute;n.";
 choices[42][1] = "El Consejo de Europa.";
 choices[42][2] = "El Consejo Europeo.";
 choices[42][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[43]= new Array();
 choices[43][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[43][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[43][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[43][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[43] = choices[43][1];
 units[43] = "1";
 comments[43] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[44]= "45)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[44]= new Array();
 choices[44][0] = "Por unanimidad.";
 choices[44][1] = "Por mayor&iacute;a cualificada.";
 choices[44][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[44][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[45]= "46)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[45]= new Array();
 choices[45][0] = "0";
 choices[45][1] = "1";
 choices[45][2] = "Tantos como peticiones concurrentes tenga.";
 choices[45][3] = "Tantos como le permita la memoria de la JVM.";
 answers[45] = choices[45][1];
 units[45] = "64";
 comments[45] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[46]= new Array();
 choices[46][0] = "De 1a  4 ";
 choices[46][1] = "De 3 a  7 ";
 choices[46][2] = "De 5 a  9";
 choices[46][3] = "De 7 a 11";
 answers[46] = choices[46][2];
 units[46] = "34, 84";
 comments[46] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[47]= "48)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[47]= new Array();
 choices[47][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[47][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[47][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[47][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[48]= "49)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[48]= new Array();
 choices[48][0] = "A la persona demandante.";
 choices[48][1] = "A la persona demandada.";
 choices[48][2] = "Al &oacute;rgano judicial.";
 choices[48][3] = "Al &oacute;rgano administrativo.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[49]= new Array();
 choices[49][0] = "Cuatro.";
 choices[49][1] = "Ninguno.";
 choices[49][2] = "Dos.";
 choices[49][3] = "Seis.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[50]= "51)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[50]= new Array();
 choices[50][0] = "Son vinculantes solamente.";
 choices[50][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[50][2] = "Son preceptivos y vinculantes.";
 choices[50][3] = "Son preceptivos y no vinculantes.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[51]= new Array();
 choices[51][0] = "A los ministros.";
 choices[51][1] = "Las respuestas a) y b) son correctas.";
 choices[51][2] = "Las respuestas a) y b) no son correctas.";
 choices[51][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[51] = choices[51][1];
 units[51] = "10";
 comments[51] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[52]= "53)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[52]= new Array();
 choices[52][0] = "El Delegado del Gobierno.";
 choices[52][1] = "El Subdelegado del Gobierno.";
 choices[52][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[52][3] = "El Gobernador Civil.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[53]= "54)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[53]= new Array();
 choices[53][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[53][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[53][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[53][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[53] = choices[53][1];
 units[53] = "92";
 comments[53] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[54]= new Array();
 choices[54][0] = "Publicidad.";
 choices[54][1] = "Constituci&oacute;n.";
 choices[54][2] = "Legalidad.";
 choices[54][3] = "Creaci&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[55]= "56)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[55]= new Array();
 choices[55][0] = "Transparencia e innovaci&oacute;n";
 choices[55][1] = "Seguridad y reutilizaci&oacute;n";
 choices[55][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[55][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[55] = choices[55][3];
 units[55] = "28";
 comments[55] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[56]= "57)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[56]= new Array();
 choices[56][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[56][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[56][2] = "Ministerio de la Presidencia";
 choices[56][3] = "Ministerio de Fomento";
 answers[56] = choices[56][2];
 units[56] = "22";
 comments[56] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[57]= new Array();
 choices[57][0] = "Car&aacute;cter sustitutivo";
 choices[57][1] = "Car&aacute;cter obligatorio";
 choices[57][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][3];
 units[57] = "19";
 comments[57] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[58]= "59)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[58]= new Array();
 choices[58][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[58][1] = "Static &amp; Active process for REsolution Bank.";
 choices[58][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[58][3] = "Super Active REsponse for Banks";
 answers[58] = choices[58][0];
 units[58] = "12";
 comments[58] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[59]= new Array();
 choices[59][0] = "No discriminaci&oacute;n";
 choices[59][1] = "Cooperaci&oacute;n";
 choices[59][2] = "Colaboraci&oacute;n";
 choices[59][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[59] = choices[59][2];
 units[59] = "18, 20";
 comments[59] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[60]= "61)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[60]= new Array();
 choices[60][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[60][1] = "1 de enero de 2015";
 choices[60][2] = "1 de enero de 2016";
 choices[60][3] = "1 de julio de 2016";
 answers[60] = choices[60][3];
 units[60] = "77";
 comments[60] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[61]= new Array();
 choices[61][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[61][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[61][2] = "A) y B) son verdaderas";
 choices[61][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[61] = choices[61][2];
 units[61] = "73";
 comments[61] = "Id Pregunta: 106. ";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[62]= new Array();
 choices[62][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[62][1] = "Intervenci&oacute;n formal y material.";
 choices[62][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[62][3] = "Intervenci&oacute;n formal y general.";
 answers[62] = choices[62][1];
 units[62] = "10";
 comments[62] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[63]= new Array();
 choices[63][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[63][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[63][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[63][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[63] = choices[63][0];
 units[63] = "14";
 comments[63] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[64]= new Array();
 choices[64][0] = "Cinco.";
 choices[64][1] = "Dos.";
 choices[64][2] = "Cuatro.";
 choices[64][3] = "Siete.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[65]= "66)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[65]= new Array();
 choices[65][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[65][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[65][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[65][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[65] = choices[65][0];
 units[65] = "60";
 comments[65] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[66]= "67)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[66]= new Array();
 choices[66][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[66][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[66][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[66][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[67]= "68)  Son servicios declarados compartidos:";
 choices[67]= new Array();
 choices[67][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[67][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[67][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[67][3] = "Todos los anteriores";
 answers[67] = choices[67][3];
 units[67] = "19";
 comments[67] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[68]= "69)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[68]= new Array();
 choices[68][0] = "los Ministros y los Secretarios de Estado";
 choices[68][1] = "los Subsecretarios y Secretarios generales";
 choices[68][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[68][3] = "los Directores generales";
 answers[68] = choices[68][2];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[69]= "70)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[69]= new Array();
 choices[69][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[69][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[69][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[69][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[69] = choices[69][2];
 units[69] = "19";
 comments[69] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[70]= new Array();
 choices[70][0] = "Burn-up chart";
 choices[70][1] = "Arquitectural Skype";
 choices[70][2] = "Burn-down chart";
 choices[70][3] = "Definition of done";
 answers[70] = choices[70][1];
 units[70] = "34, 84";
 comments[70] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[71]= "72)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[71]= new Array();
 choices[71][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[71][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[71][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[71][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[71] = choices[71][2];
 units[71] = "45";
 comments[71] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[72]= "73)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[72]= new Array();
 choices[72][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[72][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[72][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[72][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[72] = choices[72][2];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[73]= "74)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[73]= new Array();
 choices[73][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[73][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[73][2] = "Los interesados en el procedimiento";
 choices[73][3] = "Las alternativas b) y c) son correctas";
 answers[73] = choices[73][1];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[74]= "75)  Los criptosistemas pueden clasificarse en:";
 choices[74]= new Array();
 choices[74][0] = "Concretos, Estables e Inestables.";
 choices[74][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[74][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[74][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[74] = choices[74][3];
 units[74] = "76";
 comments[74] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


