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

//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[0]= "1)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[0]= new Array();
 choices[0][0] = "ISO/IEC 25000";
 choices[0][1] = "ISO/IEC 27000";
 choices[0][2] = "ISO 9000";
 choices[0][3] = "ISO 9001";
 answers[0] = choices[0][0];
 units[0] = "93";
 comments[0] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[1]= new Array();
 choices[1][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[1][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[1][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[1][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[1] = choices[1][0];
 units[1] = "26";
 comments[1] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[2]= "3)  Es falso que:";
 choices[2]= new Array();
 choices[2][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[2][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[2][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[2][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[2] = choices[2][1];
 units[2] = "18, 20";
 comments[2] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[3]= new Array();
 choices[3][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[3][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[3][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[3][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[4]= "5)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[4][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[4][2] = "b) y d) son verdaderas";
 choices[4][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[4] = choices[4][1];
 units[4] = "18, 20";
 comments[4] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[5]= "6)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[5]= new Array();
 choices[5][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[5][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[5][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[5][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[5] = choices[5][2];
 units[5] = "22";
 comments[5] = "Id Pregunta: 128. ";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[6]= "7)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[6]= new Array();
 choices[6][0] = "A la persona demandante.";
 choices[6][1] = "A la persona demandada.";
 choices[6][2] = "Al &oacute;rgano judicial.";
 choices[6][3] = "Al &oacute;rgano administrativo.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[7]= "8)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[7]= new Array();
 choices[7][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[7][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[7][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[7][3] = "Todas son correctas.";
 answers[7] = choices[7][0];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[8]= "9)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[8]= new Array();
 choices[8][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[8][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[8][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[8][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[9]= new Array();
 choices[9][0] = "Dos Cap&iacute;tulos.";
 choices[9][1] = "Tres Cap&iacute;tulos.";
 choices[9][2] = "Un Cap&iacute;tulo.";
 choices[9][3] = "Cuatro Cap&iacute;tulos.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[10]= new Array();
 choices[10][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[10][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[10][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[10][3] = "El software funcionando es la medida principal del progreso.";
 answers[10] = choices[10][2];
 units[10] = "34";
 comments[10] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[11]= "12)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[11]= new Array();
 choices[11][0] = "El Presidente y su gabinete.";
 choices[11][1] = "El Presidente y sus Ministros.";
 choices[11][2] = "El Rey y el Presidente.";
 choices[11][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[12]= "13)  Son bases de datos NoSQL:";
 choices[12]= new Array();
 choices[12][0] = "MongoDB y Maria DB";
 choices[12][1] = "HBase y Dynamo";
 choices[12][2] = "MariaDB, Cassandra y BigTable";
 choices[12][3] = "La A) y la C)";
 answers[12] = choices[12][1];
 units[12] = "73";
 comments[12] = "Id Pregunta: 104. ";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[13]= "14)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[13]= new Array();
 choices[13][0] = "192.228.0.0";
 choices[13][1] = "192.228.8.0";
 choices[13][2] = "192.228.16.0";
 choices[13][3] = "192.228.17.0";
 answers[13] = choices[13][2];
 units[13] = "109";
 comments[13] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[14]= "15)  El sector p&uacute;blico institucional se integra por:";
 choices[14]= new Array();
 choices[14][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[14][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[14][2] = "las Universidades p&uacute;blicas";
 choices[14][3] = "todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "7";
 comments[14] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[15]= "16)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[15]= new Array();
 choices[15][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[15][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[15][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[15][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[16]= new Array();
 choices[16][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[16][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[16][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[16][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[17]= new Array();
 choices[17][0] = "Car&aacute;cter sustitutivo";
 choices[17][1] = "Car&aacute;cter obligatorio";
 choices[17][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][3];
 units[17] = "19";
 comments[17] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[18]= new Array();
 choices[18][0] = "Compatibilidad";
 choices[18][1] = "Interoperabilidad";
 choices[18][2] = "Reutilizaci&oacute;n";
 choices[18][3] = "Accesibilidad";
 answers[18] = choices[18][0];
 units[18] = "22";
 comments[18] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[19]= "20)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[19]= new Array();
 choices[19][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[19][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[19][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[19][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[20]= new Array();
 choices[20][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[20][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[20][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[20][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[21]= new Array();
 choices[21][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[21][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[21][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[21][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Org&aacute;nica.";
 choices[22][1] = "Contable.";
 choices[22][2] = "Econ&oacute;mica.";
 choices[22][3] = "Por programas.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[23]= "24)  El recurso de alzada puede interponerse:";
 choices[23]= new Array();
 choices[23][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[23][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[23][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[23][3] = "Ante el Defensor del Pueblo";
 answers[23] = choices[23][1];
 units[23] = "8";
 comments[23] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[24]= "25)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[24]= new Array();
 choices[24][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[24][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[24][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[24][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[24] = choices[24][1];
 units[24] = "56";
 comments[24] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[25]= "26)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[25]= new Array();
 choices[25][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[25][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[25][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[25][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[25] = choices[25][2];
 units[25] = "57";
 comments[25] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[26]= "27)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[26]= new Array();
 choices[26][0] = "la Administraci&oacute;n General del Estado";
 choices[26][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[26][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[26][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[27]= "28)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[27]= new Array();
 choices[27][0] = "Cinco a&ntilde;os.";
 choices[27][1] = "Seis a&ntilde;os.";
 choices[27][2] = "Cuatro a&ntilde;os.";
 choices[27][3] = "Tres a&ntilde;os.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[28]= "29)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[28]= new Array();
 choices[28][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[28][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[28][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[28][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[29]= "30)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[29]= new Array();
 choices[29][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[29][1] = "El Congreso de los Diputados.";
 choices[29][2] = "Las Cortes Generales.";
 choices[29][3] = "El Consejo de Ministros";
 answers[29] = choices[29][3];
 units[29] = "1";
 comments[29] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[30]= new Array();
 choices[30][0] = "DoS";
 choices[30][1] = "Phishing";
 choices[30][2] = "Sniffing";
 choices[30][3] = "Spoofing";
 answers[30] = choices[30][3];
 units[30] = "119";
 comments[30] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[31]= new Array();
 choices[31][0] = "No, en ning&uacute;n caso.";
 choices[31][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[31][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[31][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[31] = choices[31][3];
 units[31] = "1";
 comments[31] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a las unidades administrativas:";
 choices[32]= new Array();
 choices[32][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[32][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[32][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[33]= new Array();
 choices[33][0] = "Backup full.";
 choices[33][1] = "Backup diferencial.";
 choices[33][2] = "Backup incremental.";
 choices[33][3] = "Backup deduplicado.";
 answers[33] = choices[33][3];
 units[33] = "53";
 comments[33] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[34]= "35)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[34]= new Array();
 choices[34][0] = "La mujeres.";
 choices[34][1] = "Lo hombres.";
 choices[34][2] = "Todas las personas.";
 choices[34][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[35]= new Array();
 choices[35][0] = "El rey, a propuesta del Gobierno.";
 choices[35][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[35][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[35][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[36]= new Array();
 choices[36][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[36][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[36][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[36][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[36] = choices[36][3];
 units[36] = "66";
 comments[36] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[37]= "38)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[37]= new Array();
 choices[37][0] = "180 art&iacute;culos.";
 choices[37][1] = "182 art&iacute;culos.";
 choices[37][2] = "185 art&iacute;culos.";
 choices[37][3] = "190 art&iacute;culos.";
 answers[37] = choices[37][1];
 units[37] = "10";
 comments[37] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[38]= "39)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[38]= new Array();
 choices[38][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[38][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[38][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[38][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[38] = choices[38][3];
 units[38] = "7";
 comments[38] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[39]= "40)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[39]= new Array();
 choices[39][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[39][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[39][2] = "a y b son correctas";
 choices[39][3] = "a y b son incorrectas";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[40]= new Array();
 choices[40][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[40][1] = "El Gobierno.";
 choices[40][2] = "El Presidente del Gobierno.";
 choices[40][3] = "El Consejo de Ministros.";
 answers[40] = choices[40][1];
 units[40] = "10";
 comments[40] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[41]= "42)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[41]= new Array();
 choices[41][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[41][1] = "La libertad sexual y religiosa.";
 choices[41][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[41][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[41] = choices[41][3];
 units[41] = "1";
 comments[41] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[42]= "43)  Son servicios declarados compartidos:";
 choices[42]= new Array();
 choices[42][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[42][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[42][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[42][3] = "Todos los anteriores";
 answers[42] = choices[42][3];
 units[42] = "19";
 comments[42] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[43]= "44)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[43]= new Array();
 choices[43][0] = "Los cr&eacute;ditos";
 choices[43][1] = "Las partidas presupuestarias";
 choices[43][2] = "Los derechos";
 choices[43][3] = "Las obligaciones";
 answers[43] = choices[43][3];
 units[43] = "10";
 comments[43] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[44]= new Array();
 choices[44][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[44][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[44][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[44][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[44] = choices[44][1];
 units[44] = "84";
 comments[44] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[45]= "46)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[45]= new Array();
 choices[45][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[45][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[45][2] = "Las Inspecciones Generales de los Servicios";
 choices[45][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[45] = choices[45][1];
 units[45] = "75";
 comments[45] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[46]= new Array();
 choices[46][0] = "En 1988.";
 choices[46][1] = "En 1981.";
 choices[46][2] = "En 1982.";
 choices[46][3] = "En 1986.";
 answers[46] = choices[46][3];
 units[46] = "5";
 comments[46] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[47]= new Array();
 choices[47][0] = "De 1a  4 ";
 choices[47][1] = "De 3 a  7 ";
 choices[47][2] = "De 5 a  9";
 choices[47][3] = "De 7 a 11";
 answers[47] = choices[47][2];
 units[47] = "34, 84";
 comments[47] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique la afirmaci&oacute;n falsa:";
 choices[48]= new Array();
 choices[48][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[48][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[48][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[48][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[48] = choices[48][1];
 units[48] = "22";
 comments[48] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[49]= "50)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[49]= new Array();
 choices[49][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[49][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[49][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[49][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[50]= "51)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[50]= new Array();
 choices[50][0] = "Por unanimidad.";
 choices[50][1] = "Por mayor&iacute;a cualificada.";
 choices[50][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[50][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[51]= "52)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[51]= new Array();
 choices[51][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[51][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[51][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[51][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[51] = choices[51][2];
 units[51] = "57";
 comments[51] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[52]= new Array();
 choices[52][0] = "las Cortes generales.";
 choices[52][1] = "los partidos pol&iacute;ticos.";
 choices[52][2] = "los sindicatos.";
 choices[52][3] = "las Comunidades Aut&oacute;nomas.";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[53]= new Array();
 choices[53][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[53][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[53][2] = "la falta de interoperabilidad.";
 choices[53][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[54]= new Array();
 choices[54][0] = "Categor&iacute;a b&aacute;sica";
 choices[54][1] = "Categor&iacute;a media";
 choices[54][2] = "Categor&iacute;a alta";
 choices[54][3] = "Categor&iacute;a media y alta";
 answers[54] = choices[54][2];
 units[54] = "46";
 comments[54] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[55]= new Array();
 choices[55][0] = "Veinte.";
 choices[55][1] = "Quince.";
 choices[55][2] = "Diez.";
 choices[55][3] = "Doce.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[56]= "57)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[56]= new Array();
 choices[56][0] = "En qu&eacute; nos gastamos el dinero";
 choices[56][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[56][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[56][3] = "Qui&eacute;n se gasta el dinero.";
 answers[56] = choices[56][0];
 units[56] = "10";
 comments[56] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Aplicaci&oacute;n";
 choices[57][1] = "Sesi&oacute;n";
 choices[57][2] = "Presentaci&oacute;n";
 choices[57][3] = "Transporte";
 answers[57] = choices[57][2];
 units[57] = "105";
 comments[57] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[58]= "59)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[58]= new Array();
 choices[58][0] = "Tres a&ntilde;os.";
 choices[58][1] = "Dos a&ntilde;os y medio.";
 choices[58][2] = "Cinco a&ntilde;os.";
 choices[58][3] = "Seis a&ntilde;os.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[59]= new Array();
 choices[59][0] = "El BCE";
 choices[59][1] = "El Parlamento";
 choices[59][2] = "El Consejo";
 choices[59][3] = "La Comisi&oacute;n";
 answers[59] = choices[59][3];
 units[59] = "17";
 comments[59] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[60]= "61)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[60]= new Array();
 choices[60][0] = "Discriminaci&oacute;n indirecta.";
 choices[60][1] = "Discriminaci&oacute;n directa.";
 choices[60][2] = "Discriminaci&oacute;n por maternidad.";
 choices[60][3] = "Discriminaci&oacute;n abusiva.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


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


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[62]= "63)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[62]= new Array();
 choices[62][0] = "El Gobierno.";
 choices[62][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[62][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[62][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[63]= "64)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[63]= new Array();
 choices[63][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[63][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[63][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[63][3] = "Todas son correctas.";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[64]= "65)  La soberan&iacute;a nacional reside en:";
 choices[64]= new Array();
 choices[64][0] = "el Parlamento nacional.";
 choices[64][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[64][2] = "el pueblo espa&ntilde;ol.";
 choices[64][3] = "el Congreso y el Senado.";
 answers[64] = choices[64][3];
 units[64] = "1";
 comments[64] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[65][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[65][2] = "Fomentar el despliegue de redes y servicios";
 choices[65][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[65] = choices[65][0];
 units[65] = "19";
 comments[65] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[66]= new Array();
 choices[66][0] = "A los ministros.";
 choices[66][1] = "Las respuestas a) y b) son correctas.";
 choices[66][2] = "Las respuestas a) y b) no son correctas.";
 choices[66][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


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


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[68]= new Array();
 choices[68][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[68][1] = "Intervenci&oacute;n formal y material.";
 choices[68][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[68][3] = "Intervenci&oacute;n formal y general.";
 answers[68] = choices[68][1];
 units[68] = "10";
 comments[68] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[69]= "70)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[69]= new Array();
 choices[69][0] = "Al Gobierno.";
 choices[69][1] = "A las Cortes Generales.";
 choices[69][2] = "Al Poder Judicial.";
 choices[69][3] = "Al Congreso de los Diputados.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; es SonarQube?";
 choices[70]= new Array();
 choices[70][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[70][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[70][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[70][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[70] = choices[70][2];
 units[70] = "92";
 comments[70] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[71]= "72)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[71]= new Array();
 choices[71][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[71][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[71][2] = "El Presidente del Gobierno";
 choices[71][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[71] = choices[71][1];
 units[71] = "26";
 comments[71] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[72]= new Array();
 choices[72][0] = "al menos por 50 Diputados.";
 choices[72][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[72][2] = "por la Mesa del Congreso de los Diputados.";
 choices[72][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[73]= new Array();
 choices[73][0] = "Varios namenodes y varios datanodes por cluster";
 choices[73][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[73][2] = "1 namenode y varios datanodes por cluster";
 choices[73][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[73] = choices[73][2];
 units[73] = "73";
 comments[73] = "Id Pregunta: 661. ";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[74]= "75)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[74]= new Array();
 choices[74][0] = "20 parlamentarios.";
 choices[74][1] = "29 parlamentarios.";
 choices[74][2] = "18 parlamentarios.";
 choices[74][3] = "23 parlamentarios.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 366. UNION EUROPEA";


