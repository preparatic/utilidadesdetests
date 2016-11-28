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

//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[0]= new Array();
 choices[0][0] = "SPARQL";
 choices[0][1] = "UnQL";
 choices[0][2] = "XQUERY";
 choices[0][3] = "RQL";
 answers[0] = choices[0][0];
 units[0] = "74";
 comments[0] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[1]= new Array();
 choices[1][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[1][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[1][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[1][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[2]= "3)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[2]= new Array();
 choices[2][0] = "Tres a&ntilde;os.";
 choices[2][1] = "Cuatro a&ntilde;os.";
 choices[2][2] = "Cinco a&ntilde;os.";
 choices[2][3] = "Seis a&ntilde;os.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[3]= "4)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[3]= new Array();
 choices[3][0] = "0";
 choices[3][1] = "1";
 choices[3][2] = "Tantos como peticiones concurrentes tenga.";
 choices[3][3] = "Tantos como le permita la memoria de la JVM.";
 answers[3] = choices[3][1];
 units[3] = "64";
 comments[3] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[4]= new Array();
 choices[4][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[4][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[4][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[4][3] = "El software funcionando es la medida principal del progreso.";
 answers[4] = choices[4][2];
 units[4] = "34";
 comments[4] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[5]= new Array();
 choices[5][0] = "Programa de Educaci&oacute;n Digital";
 choices[5][1] = "Programa de Salud y Bienestar Social";
 choices[5][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[5][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[5] = choices[5][3];
 units[5] = "19";
 comments[5] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[6]= "7)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[6]= new Array();
 choices[6][0] = "El nombre y el tipo de correspondencia.";
 choices[6][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[6][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[6][3] = "El nombre y el grado.";
 answers[6] = choices[6][1];
 units[6] = "85";
 comments[6] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[7]= "8)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[7]= new Array();
 choices[7][0] = "Tener una estructura institucional.";
 choices[7][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[7][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[7][3] = "Todas las respuestas son correctas.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[8]= "9)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[8]= new Array();
 choices[8][0] = "En sentencias switch para alterar el control de flujo.";
 choices[8][1] = "Para manejar excepciones.";
 choices[8][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[8][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[8] = choices[8][1];
 units[8] = "64";
 comments[8] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[9]= "10)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[9]= new Array();
 choices[9][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[9][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[9][2] = "La protecci&oacute;n del medio ambiente.";
 choices[9][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[9] = choices[9][0];
 units[9] = "22";
 comments[9] = "Id Pregunta: 125. ";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[10]= new Array();
 choices[10][0] = "Se dejan listos los entornos de desarrollo";
 choices[10][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[10][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[10][3] = "Todas las anteriores son correctas";
 answers[10] = choices[10][3];
 units[10] = "34, 84";
 comments[10] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[11]= "12)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[11]= new Array();
 choices[11][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[11][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[11][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[11][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[12]= "13)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[12]= new Array();
 choices[12][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[12][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[12][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[12][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[12] = choices[12][2];
 units[12] = "22";
 comments[12] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[13]= new Array();
 choices[13][0] = "las personas jur&iacute;dicas ";
 choices[13][1] = "las entidades con personalidad jur&iacute;dica";
 choices[13][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[13][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[13] = choices[13][1];
 units[13] = "7";
 comments[13] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[14]= "15)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[14]= new Array();
 choices[14][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[14][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[14][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[14][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[14] = choices[14][1];
 units[14] = "56";
 comments[14] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[15]= "16)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[15][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[15][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[15][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[16]= "17)  Son proyectos de Apache relacionados con Big Data:";
 choices[16]= new Array();
 choices[16][0] = "Hadoop";
 choices[16][1] = "Spark";
 choices[16][2] = "A) y B)";
 choices[16][3] = "Niguno de los anteriores";
 answers[16] = choices[16][2];
 units[16] = "73";
 comments[16] = "Id Pregunta: 108. ";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[17]= "18)  La Administraci&oacute;n General del Estado se organiza:";
 choices[17]= new Array();
 choices[17][0] = "en Ministerios";
 choices[17][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[17][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[17][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[18]= "19)  El Tribunal de Justicia est&aacute; formado por:";
 choices[18]= new Array();
 choices[18][0] = "Un Juez de cada Estado miembro.";
 choices[18][1] = "Por dos Jueces de cada Estado miembro.";
 choices[18][2] = "Por veinte Jueces.";
 choices[18][3] = "Por ocho Jueces.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[19]= "20)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Discriminaci&oacute;n indirecta.";
 choices[19][1] = "Discriminaci&oacute;n directa.";
 choices[19][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[19][3] = "Discriminaci&oacute;n abusiva.";
 answers[19] = choices[19][0];
 units[19] = "14";
 comments[19] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[20]= "21)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[20]= new Array();
 choices[20][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[20][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[20][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[20][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[20] = choices[20][0];
 units[20] = "109";
 comments[20] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[21]= "22)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[21]= new Array();
 choices[21][0] = "61";
 choices[21][1] = "53";
 choices[21][2] = "65";
 choices[21][3] = "67";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[22]= new Array();
 choices[22][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[22][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[22][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[22][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[22] = choices[22][1];
 units[22] = "26";
 comments[22] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[23]= "24)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[23]= new Array();
 choices[23][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[23][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[23][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[23][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[23] = choices[23][2];
 units[23] = "27";
 comments[23] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[24]= "25)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[24]= new Array();
 choices[24][0] = "Ejecutivo";
 choices[24][1] = "Limitativo";
 choices[24][2] = "Estimativo";
 choices[24][3] = "Progresivo";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[25]= new Array();
 choices[25][0] = "Versi&oacute;n digital prioritaria.";
 choices[25][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[25][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[25][3] = "Apertura y transparencia.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[26]= "27)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[26]= new Array();
 choices[26][0] = "Ejecuci&oacute;n";
 choices[26][1] = "Adjudicaci&oacute;n";
 choices[26][2] = "Licitaci&oacute;n";
 choices[26][3] = "Formalizaci&oacute;n";
 answers[26] = choices[26][3];
 units[26] = "37";
 comments[26] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[27]= "28)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[27]= new Array();
 choices[27][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[27][1] = "Protecci&oacute;n de su salud.";
 choices[27][2] = "Ninguna es correcta.";
 choices[27][3] = "A y B son correctas.";
 answers[27] = choices[27][1];
 units[27] = "14";
 comments[27] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[28]= new Array();
 choices[28][0] = "No discriminaci&oacute;n";
 choices[28][1] = "Cooperaci&oacute;n";
 choices[28][2] = "Colaboraci&oacute;n";
 choices[28][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[28] = choices[28][2];
 units[28] = "18, 20";
 comments[28] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[29]= new Array();
 choices[29][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[29][1] = "Por Orden Ministerial.";
 choices[29][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[29][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[30]= new Array();
 choices[30][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[30][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[30][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[30][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[30] = choices[30][0];
 units[30] = "86";
 comments[30] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[31]= "32)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[31]= new Array();
 choices[31][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[31][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[31][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[31][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; es el machine learning?";
 choices[32]= new Array();
 choices[32][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[32][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[32][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[32][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[32] = choices[32][0];
 units[32] = "73";
 comments[32] = "Id Pregunta: 659. ";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[33]= "34)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[33]= new Array();
 choices[33][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[33][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[33][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[33][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[34]= "35)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[34]= new Array();
 choices[34][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[34][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[34][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[34][3] = "Todos los anteriores";
 answers[34] = choices[34][3];
 units[34] = "19";
 comments[34] = "Id Pregunta: 561. Agenda Digital";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[35]= new Array();
 choices[35][0] = "El Presidente del Senado";
 choices[35][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[35][2] = "El Presidente del Gobierno";
 choices[35][3] = "El Presidente de las Cortes Generales";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[36]= "37)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[36]= new Array();
 choices[36][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[36][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[36][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[36][3] = "Estos sistemas es imposible clasificarlos.";
 answers[36] = choices[36][1];
 units[36] = "119";
 comments[36] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[37]= "38)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[37]= new Array();
 choices[37][0] = "El Ministerio de Igualdad.";
 choices[37][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[37] = choices[37][1];
 units[37] = "14";
 comments[37] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[38]= new Array();
 choices[38][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[38][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[38][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[38][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[38] = choices[38][1];
 units[38] = "77";
 comments[38] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[39]= new Array();
 choices[39][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[39][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[39][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[39][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[40]= new Array();
 choices[40][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[40][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[40][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[40][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[41]= "42)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[41]= new Array();
 choices[41][0] = "El Presidente y su gabinete.";
 choices[41][1] = "El Presidente y sus Ministros.";
 choices[41][2] = "El Rey y el Presidente.";
 choices[41][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[42]= "43)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[42]= new Array();
 choices[42][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[42][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[42][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[42][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[42] = choices[42][0];
 units[42] = "101";
 comments[42] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[43]= new Array();
 choices[43][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[43][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[43][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[43][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[43] = choices[43][0];
 units[43] = "26";
 comments[43] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[44]= new Array();
 choices[44][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[44][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[44][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][1];
 units[44] = "34, 84";
 comments[44] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[45]= "46)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[45][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[45][2] = "el sector p&uacute;blico institucional";
 choices[45][3] = "el sector privado corporativo";
 answers[45] = choices[45][3];
 units[45] = "7";
 comments[45] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[46][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[46][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[46][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[46] = choices[46][1];
 units[46] = "89";
 comments[46] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[47]= new Array();
 choices[47][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[47][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[47][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 592. Estrategia TIC";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[48]= new Array();
 choices[48][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[48][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[48][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[48][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[48] = choices[48][0];
 units[48] = "91";
 comments[48] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[49]= new Array();
 choices[49][0] = "Neo4J ";
 choices[49][1] = "OrientDB ";
 choices[49][2] = "InfoGrid ";
 choices[49][3] = "SimpleDB";
 answers[49] = choices[49][3];
 units[49] = "73";
 comments[49] = "Id Pregunta: 655. ";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[50]= new Array();
 choices[50][0] = "Fue elaborada y aprobada por la CETIC";
 choices[50][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[50][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[50][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[50] = choices[50][1];
 units[50] = "19";
 comments[50] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[51]= new Array();
 choices[51][0] = "Compatibilidad";
 choices[51][1] = "Interoperabilidad";
 choices[51][2] = "Reutilizaci&oacute;n";
 choices[51][3] = "Accesibilidad";
 answers[51] = choices[51][0];
 units[51] = "22";
 comments[51] = "Id Pregunta: 705. Ley de transparencia";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[52]= "53)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[52]= new Array();
 choices[52][0] = "los Subsecretarios y Secretarios generales";
 choices[52][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[52][2] = "los Secretarios de Estado";
 choices[52][3] = "los Subdirectores generales";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[53]= "54)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[53]= new Array();
 choices[53][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[53][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[53][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[53][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[53] = choices[53][3];
 units[53] = "1";
 comments[53] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[54]= "55)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[54]= new Array();
 choices[54][0] = "El Rey.";
 choices[54][1] = "El Jefe del Estado.";
 choices[54][2] = "El Gobierno.";
 choices[54][3] = "El Presidente del Gobierno.";
 answers[54] = choices[54][2];
 units[54] = "1";
 comments[54] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[55]= "56)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[55]= new Array();
 choices[55][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[55][1] = "Programa de cartas de servicios";
 choices[55][2] = "Programa para la mejora continua de las organizaciones.";
 choices[55][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[55] = choices[55][2];
 units[55] = "18, 20";
 comments[55] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[56]= new Array();
 choices[56][0] = "Cinco.";
 choices[56][1] = "Dos.";
 choices[56][2] = "Cuatro.";
 choices[56][3] = "Siete.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[57]= new Array();
 choices[57][0] = "JUnit, Artifactory y SonarQube";
 choices[57][1] = "JUnit, Artifactory y Selenium";
 choices[57][2] = "JUnit, SonarQube y Selenium";
 choices[57][3] = "ArtiFactory, SonarQube y Selenium";
 answers[57] = choices[57][2];
 units[57] = "92";
 comments[57] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[58]= new Array();
 choices[58][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[58][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[58][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[58][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[58] = choices[58][3];
 units[58] = "12";
 comments[58] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[59]= "60)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[59]= new Array();
 choices[59][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[59][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[59][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[59][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[59] = choices[59][3];
 units[59] = "5";
 comments[59] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[60]= "61)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[60]= new Array();
 choices[60][0] = "Acciones de discriminaci&oacute;n.";
 choices[60][1] = "Acciones positivas.";
 choices[60][2] = "Acciones negativas.";
 choices[60][3] = "Acciones neutras.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[61]= "62)  Componen la Comisi&oacute;n Europea:";
 choices[61]= new Array();
 choices[61][0] = "Un Comisario por cada Estado miembro.";
 choices[61][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[61][2] = "Dos Comisarios por cada Estado miembro.";
 choices[61][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[62]= "63)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[62]= new Array();
 choices[62][0] = "Conformidad";
 choices[62][1] = "Responsabilidad";
 choices[62][2] = "Adquisici&oacute;n";
 choices[62][3] = "Desempe&ntilde;o";
 answers[62] = choices[62][0];
 units[62] = "26";
 comments[62] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[63]= new Array();
 choices[63][0] = "Conferencia de Presidentes.";
 choices[63][1] = "Convenios de colaboraci&oacute;n.";
 choices[63][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[63][3] = "Conferencias Sectoriales.";
 answers[63] = choices[63][0];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[64]= new Array();
 choices[64][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[64][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[64][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[64][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[64] = choices[64][0];
 units[64] = "14";
 comments[64] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[65]= new Array();
 choices[65][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[65][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[65][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[65][3] = "todas son correctas";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[66]= "67)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[66]= new Array();
 choices[66][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[66][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[66][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[66][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[67]= new Array();
 choices[67][0] = "Selenium";
 choices[67][1] = "JUnit";
 choices[67][2] = "Jenkins";
 choices[67][3] = "JMeter";
 answers[67] = choices[67][2];
 units[67] = "92";
 comments[67] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[68]= "69)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[68]= new Array();
 choices[68][0] = "La Ley General Tributaria.";
 choices[68][1] = "La Ley Presupuestaria.";
 choices[68][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[68][3] = "Ninguna de las respuestas es correcta.";
 answers[68] = choices[68][0];
 units[68] = "10";
 comments[68] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[69]= "70)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[69]= new Array();
 choices[69][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[69][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[69][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[69][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[69] = choices[69][2];
 units[69] = "43";
 comments[69] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[70]= new Array();
 choices[70][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[70][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[70][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[70][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[71]= "72)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[71]= new Array();
 choices[71][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[71][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[71][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[71][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[71] = choices[71][2];
 units[71] = "7";
 comments[71] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[72]= "73)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[72]= new Array();
 choices[72][0] = "tienen capacidad de obrar limitada";
 choices[72][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[72][2] = "no tienen capacidad de obrar";
 choices[72][3] = "ninguna es correcta";
 answers[72] = choices[72][2];
 units[72] = "7";
 comments[72] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[73]= "74)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[73]= new Array();
 choices[73][0] = "ASF-AL (Apache License 2.0)";
 choices[73][1] = "EUPL (European Union Public License)";
 choices[73][2] = "LGPL (Lesser General Public License)";
 choices[73][3] = "MIT(MIT License)";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[74]= "75)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[74]= new Array();
 choices[74][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[74][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[74][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[74][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 191. CONSTITUCION1978";


