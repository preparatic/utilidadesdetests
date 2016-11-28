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

//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[0][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[0][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[0][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[0] = choices[0][2];
 units[0] = "43";
 comments[0] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[1]= "2)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[1]= new Array();
 choices[1][0] = "los Secretarios generales t&eacute;cnicos";
 choices[1][1] = "los Directores generales";
 choices[1][2] = "los Secretarios generales";
 choices[1][3] = "los Subsecretarios";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[2]= new Array();
 choices[2][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[2][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[2][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[2][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[3]= "4)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[3]= new Array();
 choices[3][0] = "P&uacute;blica.";
 choices[3][1] = "Privada.";
 choices[3][2] = "A y B son correctas.";
 choices[3][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[4]= "5)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[4]= new Array();
 choices[4][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[4][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[4][2] = "A y B son correctas.";
 choices[4][3] = "A y B son incorrectas.";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[5][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[5][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[5][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[5] = choices[5][2];
 units[5] = "22";
 comments[5] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[6]= "7)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[6]= new Array();
 choices[6][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[6][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[6][2] = "Funcionarios e interinos.";
 choices[6][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[6] = choices[6][3];
 units[6] = "20";
 comments[6] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[7]= "8)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[7]= new Array();
 choices[7][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[7][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[7][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][0];
 units[7] = "28";
 comments[7] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[8]= "9)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[8]= new Array();
 choices[8][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[8][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[8][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[8][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[9]= new Array();
 choices[9][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[9][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[9][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[9][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[10]= new Array();
 choices[10][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[10][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[10][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[10][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[10] = choices[10][3];
 units[10] = "5";
 comments[10] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[11]= "12)  En el lenguaje de modelado UML :";
 choices[11]= new Array();
 choices[11][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[11][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[11][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[11][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[11] = choices[11][2];
 units[11] = "89";
 comments[11] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[12]= new Array();
 choices[12][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[12][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[12][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[12][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[12] = choices[12][1];
 units[12] = "34, 84";
 comments[12] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[13]= "14)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[13]= new Array();
 choices[13][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[13][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[13][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[13][3] = "Todas son correctas.";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[14]= "15)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[14]= new Array();
 choices[14][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[14][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[14][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[14][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[15]= new Array();
 choices[15][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[15][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[15][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[15][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[15] = choices[15][2];
 units[15] = "12";
 comments[15] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[16]= "17)  Componen la Comisi&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "Un Comisario por cada Estado miembro.";
 choices[16][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[16][2] = "Dos Comisarios por cada Estado miembro.";
 choices[16][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[17]= new Array();
 choices[17][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[17][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[17][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[17][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[17] = choices[17][1];
 units[17] = "7";
 comments[17] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[18]= "19)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "la Administraci&oacute;n General del Estado";
 choices[18][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[18][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[18][3] = "el sector p&uacute;blico y privado institucional";
 answers[18] = choices[18][3];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[19]= new Array();
 choices[19][0] = "Entre 1973 y 1978";
 choices[19][1] = "Entre 1992 y 1996";
 choices[19][2] = "Entre 1978 y 1985";
 choices[19][3] = "Entre 2008 y 2013";
 answers[19] = choices[19][2];
 units[19] = "12";
 comments[19] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[20]= new Array();
 choices[20][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[20][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[20][2] = "Fomentar el despliegue de redes y servicios";
 choices[20][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[20] = choices[20][0];
 units[20] = "19";
 comments[20] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[21]= new Array();
 choices[21][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[21][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[21][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[21][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[21] = choices[21][1];
 units[21] = "43";
 comments[21] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[22]= "23)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[22]= new Array();
 choices[22][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[22][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[22][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[22][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[22] = choices[22][2];
 units[22] = "19";
 comments[22] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[23]= new Array();
 choices[23][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[23][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[23][2] = "la falta de interoperabilidad.";
 choices[23][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[24]= "25)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[24]= new Array();
 choices[24][0] = "20 parlamentarios.";
 choices[24][1] = "29 parlamentarios.";
 choices[24][2] = "18 parlamentarios.";
 choices[24][3] = "23 parlamentarios.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[25]= "26)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Unidad de igualdad.";
 choices[25][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[25][2] = "Ninguna de las anteriores.";
 choices[25][3] = "A y B son correctas.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[26]= "27)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[26]= new Array();
 choices[26][0] = "La Administraci&oacute;n General del Estado";
 choices[26][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[26][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[26][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[26] = choices[26][1];
 units[26] = "26";
 comments[26] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[27]= new Array();
 choices[27][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[27][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[27][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[27][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[28]= "29)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[28]= new Array();
 choices[28][0] = "Pas&oacute; de 518 a 626.";
 choices[28][1] = "Pas&oacute; de 434 a 518.";
 choices[28][2] = "Pas&oacute; de 345 a 512.";
 choices[28][3] = "Pas&oacute; de 435 a 610.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[29]= "30)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[29]= new Array();
 choices[29][0] = "Discriminaci&oacute;n indirecta.";
 choices[29][1] = "Discriminaci&oacute;n directa.";
 choices[29][2] = "Discriminaci&oacute;n por maternidad.";
 choices[29][3] = "Discriminaci&oacute;n abusiva.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[30]= new Array();
 choices[30][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[30][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[30][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[30][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[30] = choices[30][0];
 units[30] = "19";
 comments[30] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[31]= new Array();
 choices[31][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[31][1] = "Anteriormente se denominaba Sonar.";
 choices[31][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[31][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[31] = choices[31][2];
 units[31] = "92";
 comments[31] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[32]= "33)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[32]= new Array();
 choices[32][0] = "A los ministros.";
 choices[32][1] = "Las respuestas a) y b) son correctas.";
 choices[32][2] = "Las respuestas a) y b) no son correctas.";
 choices[32][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[32] = choices[32][1];
 units[32] = "10";
 comments[32] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[33]= new Array();
 choices[33][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[33][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[33][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[33][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[34]= new Array();
 choices[34][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[34][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[34][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[34][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[34] = choices[34][1];
 units[34] = "84";
 comments[34] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[35]= "36)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[35]= new Array();
 choices[35][0] = "Ley Org&aacute;nica.";
 choices[35][1] = "Ley de Bases.";
 choices[35][2] = "Ley ordinaria.";
 choices[35][3] = "Mandato.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[36]= "37)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[36]= new Array();
 choices[36][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[36][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[36][2] = "el sector p&uacute;blico institucional";
 choices[36][3] = "el sector privado corporativo";
 answers[36] = choices[36][3];
 units[36] = "7";
 comments[36] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[37]= "38)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[37]= new Array();
 choices[37][0] = "ASF-AL (Apache License 2.0)";
 choices[37][1] = "EUPL (European Union Public License)";
 choices[37][2] = "LGPL (Lesser General Public License)";
 choices[37][3] = "MIT(MIT License)";
 answers[37] = choices[37][1];
 units[37] = "43";
 comments[37] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[38]= new Array();
 choices[38][0] = "Avro";
 choices[38][1] = "Sqoop";
 choices[38][2] = "UIMA";
 choices[38][3] = "Jaql";
 answers[38] = choices[38][1];
 units[38] = "73";
 comments[38] = "Id Pregunta: 662. ";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[39]= new Array();
 choices[39][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[39][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[39][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[39][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[39] = choices[39][2];
 units[39] = "12";
 comments[39] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[40]= "41)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[40]= new Array();
 choices[40][0] = "un art&iacute;culo";
 choices[40][1] = "dos art&iacute;culos";
 choices[40][2] = "tres art&iacute;culos";
 choices[40][3] = "cuatro art&iacute;culos";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[41]= new Array();
 choices[41][0] = "Ley 3/2015";
 choices[41][1] = "Ley 6/2007";
 choices[41][2] = "Ley 5/1984";
 choices[41][3] = "Ley 5/2006";
 answers[41] = choices[41][0];
 units[41] = "22";
 comments[41] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[42]= new Array();
 choices[42][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[42][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[42][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[42][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[42] = choices[42][1];
 units[42] = "26";
 comments[42] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[43]= new Array();
 choices[43][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[43][1] = "Todas las respuestas son correctas.";
 choices[43][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[43][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[43] = choices[43][1];
 units[43] = "10";
 comments[43] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[44]= new Array();
 choices[44][0] = "PostgreSQL";
 choices[44][1] = "Datawarehouse";
 choices[44][2] = "Snowflake";
 choices[44][3] = "CouchDB";
 answers[44] = choices[44][0];
 units[44] = "61";
 comments[44] = "Id Pregunta: 578. Tema 61. TAI 2016.";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[45]= new Array();
 choices[45][0] = "SessionBean";
 choices[45][1] = "JavaBean";
 choices[45][2] = "MBeans";
 choices[45][3] = "MessageDrivenBean";
 answers[45] = choices[45][2];
 units[45] = "64";
 comments[45] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[46]= new Array();
 choices[46][0] = "El Parlamento y el Consejo.";
 choices[46][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[46][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[46][3] = "La Comisi&oacute;n y el Consejo.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[47]= new Array();
 choices[47][0] = "No discriminaci&oacute;n";
 choices[47][1] = "Cooperaci&oacute;n";
 choices[47][2] = "Colaboraci&oacute;n";
 choices[47][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[47] = choices[47][2];
 units[47] = "18, 20";
 comments[47] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[48][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[48][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[48][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[48] = choices[48][0];
 units[48] = "22";
 comments[48] = "Id Pregunta: 124. ";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[49]= new Array();
 choices[49][0] = "Las sociedades mercantiles estatales.";
 choices[49][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[49][2] = "Las respuestas a) y b) son correctas.";
 choices[49][3] = "Las respuestas a) y b) no son correctas.";
 answers[49] = choices[49][2];
 units[49] = "10";
 comments[49] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[50]= new Array();
 choices[50][0] = "al menos por 50 Diputados.";
 choices[50][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[50][2] = "por la Mesa del Congreso de los Diputados.";
 choices[50][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[50] = choices[50][1];
 units[50] = "1";
 comments[50] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[51]= "52)  Big Data:";
 choices[51]= new Array();
 choices[51][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[51][1] = "No puede emplearse para tratar datos no estructurados";
 choices[51][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = choices[51][3];
 units[51] = "73";
 comments[51] = "Id Pregunta: 109. ";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[52]= "53)  Respecto a los servicios territoriales es correcto:";
 choices[52]= new Array();
 choices[52][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[52][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[52][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[52][3] = "ninguna es correcta";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[53]= "54)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[53]= new Array();
 choices[53][0] = "ISO/IEC 25000";
 choices[53][1] = "ISO/IEC 27000";
 choices[53][2] = "ISO 9000";
 choices[53][3] = "ISO 9001";
 answers[53] = choices[53][0];
 units[53] = "93";
 comments[53] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[54]= new Array();
 choices[54][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[54][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[54][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[54][3] = "El Instituto de la Mujer de Extremadura.";
 answers[54] = choices[54][3];
 units[54] = "14";
 comments[54] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[55]= new Array();
 choices[55][0] = "Car&aacute;cter sustitutivo";
 choices[55][1] = "Car&aacute;cter obligatorio";
 choices[55][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[56]= "57)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[56]= new Array();
 choices[56][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[56][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[56][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[56][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[56] = choices[56][3];
 units[56] = "101";
 comments[56] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[57]= new Array();
 choices[57][0] = "11";
 choices[57][1] = "12";
 choices[57][2] = "14";
 choices[57][3] = "8";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[58]= new Array();
 choices[58][0] = "El Presidente del Senado";
 choices[58][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[58][2] = "El Presidente del Gobierno";
 choices[58][3] = "El Presidente de las Cortes Generales";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[59]= "60)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[59]= new Array();
 choices[59][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[59][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[59][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[59][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[60]= "61)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[60]= new Array();
 choices[60][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[60][1] = "Tratarse de un acto no susceptible de recurso";
 choices[60][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[60][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[60] = choices[60][2];
 units[60] = "8";
 comments[60] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[61]= new Array();
 choices[61][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[61][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[61][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[61][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 562. Agenda Digital";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[62]= new Array();
 choices[62][0] = "Memcached";
 choices[62][1] = "OpCache";
 choices[62][2] = "WinCache Extension for PHP";
 choices[62][3] = "Alternative PHP Cache";
 answers[62] = choices[62][0];
 units[62] = "65";
 comments[62] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[63]= "64)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[63]= new Array();
 choices[63][0] = "Cifrada";
 choices[63][1] = "Conjunta";
 choices[63][2] = "Sistem&aacute;tica";
 choices[63][3] = "Todas son correctas";
 answers[63] = choices[63][3];
 units[63] = "10";
 comments[63] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[64]= "65)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[64]= new Array();
 choices[64][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[64][1] = "La CETIC";
 choices[64][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[64][3] = "El MHFP";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[65]= "66)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[65]= new Array();
 choices[65][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[65][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[65][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[65][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[65] = choices[65][1];
 units[65] = "22";
 comments[65] = "Id Pregunta: 713. Portal de Transparencia";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[66]= "67)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[66]= new Array();
 choices[66][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[66][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[66][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[66][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "De la C&aacute;mara respectiva.";
 choices[67][1] = "Del Rey.";
 choices[67][2] = "Del Tribunal Constitucional.";
 choices[67][3] = "Del Tribunal Supremo.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[68]= "69)  Los Subdirectores generales:";
 choices[68]= new Array();
 choices[68][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[68][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[68][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][1];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[69]= "70)  La sede del Parlamento Europeo se encuentra en:";
 choices[69]= new Array();
 choices[69][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[69][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[69][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[69][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[70]= "71)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[70]= new Array();
 choices[70][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[70][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[70][2] = "el Ministerio del Interior";
 choices[70][3] = "la Administraci&oacute;n General del Estado";
 answers[70] = choices[70][0];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[71]= new Array();
 choices[71][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[71][1] = "Implantar el mercado general europeo";
 choices[71][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[71][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 758. Agenda Digital Europea";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[72]= new Array();
 choices[72][0] = "Cincuenta y cuatro.";
 choices[72][1] = "Cincuenta.";
 choices[72][2] = "Cincuenta y cinco.";
 choices[72][3] = "Cincuenta y dos.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[73]= "74)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[73]= new Array();
 choices[73][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[73][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[73][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[73][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[73] = choices[73][1];
 units[73] = "19";
 comments[73] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "Tiene car&aacute;cter facultativo.";
 choices[74][1] = "Tiene car&aacute;cter potestativo. ";
 choices[74][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[74][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[74] = choices[74][1];
 units[74] = "22";
 comments[74] = "Id Pregunta: 127. ";


