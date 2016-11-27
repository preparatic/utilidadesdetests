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

//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[0]= "1)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[0]= new Array();
 choices[0][0] = "Clustering";
 choices[0][1] = "Deduplicaci&oacute;n";
 choices[0][2] = "Virtualizaci&oacute;n";
 choices[0][3] = "Contenerizaci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "124";
 comments[0] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[1]= "2)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[1]= new Array();
 choices[1][0] = "apud acta";
 choices[1][1] = "presencialmente";
 choices[1][2] = "electr&oacute;nicamente";
 choices[1][3] = "todas son correctas";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[2]= "3)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[2]= new Array();
 choices[2][0] = "el Secretario General";
 choices[2][1] = "el Subdirector General";
 choices[2][2] = "el Secretario de Estado";
 choices[2][3] = "ninguna es correcta";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[3]= "4)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[3]= new Array();
 choices[3][0] = "ISO/IEC 25000";
 choices[3][1] = "ISO/IEC 27000";
 choices[3][2] = "ISO 9000";
 choices[3][3] = "ISO 9001";
 answers[3] = choices[3][0];
 units[3] = "93";
 comments[3] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[4]= new Array();
 choices[4][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[4][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[4][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][1];
 units[4] = "34, 84";
 comments[4] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[5]= "6)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[5]= new Array();
 choices[5][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[5][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[5][2] = "a y b son correctas";
 choices[5][3] = "a y b son incorrectas";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[6]= "7)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[6]= new Array();
 choices[6][0] = "El Presidente del Consejo Europeo.";
 choices[6][1] = "La Comisi&oacute;n.";
 choices[6][2] = "El Consejo.";
 choices[6][3] = "El Parlamento Europeo.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[7]= "8)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[7][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[7][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[7][3] = "Todas las anteriores son ciertas";
 answers[7] = choices[7][3];
 units[7] = "8";
 comments[7] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[8]= "9)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[8]= new Array();
 choices[8][0] = "Al Presidente del Gobierno.";
 choices[8][1] = "A las Cortes Generales";
 choices[8][2] = "A los electores.";
 choices[8][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[9]= "10)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[9]= new Array();
 choices[9][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[9][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[9][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[9][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[10]= new Array();
 choices[10][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[10][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[10][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[10][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[11]= "12)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[11]= new Array();
 choices[11][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[11][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[11][2] = "El Presidente del Gobierno";
 choices[11][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[11] = choices[11][1];
 units[11] = "26";
 comments[11] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[12]= new Array();
 choices[12][0] = "El Presidente del Senado.";
 choices[12][1] = "El Defensor del Pueblo.";
 choices[12][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[12][3] = "El Presidente del Gobierno.";
 answers[12] = choices[12][2];
 units[12] = "1";
 comments[12] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[13]= new Array();
 choices[13][0] = "El Parlamento y el Consejo.";
 choices[13][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[13][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[13][3] = "La Comisi&oacute;n y el Consejo.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[14]= new Array();
 choices[14][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[14][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[14][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[14] = choices[14][1];
 units[14] = "89";
 comments[14] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[15]= "16)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[15]= new Array();
 choices[15][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[15][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[15][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[15][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[15] = choices[15][1];
 units[15] = "92";
 comments[15] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[16]= "17)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[16]= new Array();
 choices[16][0] = "El Tratado de Roma, 1957.";
 choices[16][1] = "El Acta &Uacute;nica Europea.";
 choices[16][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[16][3] = "Ninguna es correcta.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[17]= "18)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[17]= new Array();
 choices[17][0] = "Municipios, provincias y CCAA.";
 choices[17][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[17][2] = "En CCAA, 50 provincias y municipios.";
 choices[17][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[18]= "19)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[18]= new Array();
 choices[18][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[18][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[18][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[18][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[18] = choices[18][2];
 units[18] = "45";
 comments[18] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[19]= "20)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[19]= new Array();
 choices[19][0] = "Un informe de g&eacute;nero.";
 choices[19][1] = "La variable de sexo.";
 choices[19][2] = "La variable de edad.";
 choices[19][3] = "La variable de comportamiento.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[20]= "21)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[20]= new Array();
 choices[20][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[20][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[20][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[20][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Orientaci&oacute;n a objetos";
 choices[21][1] = "MapReduce";
 choices[21][2] = "Pipeline filtering";
 choices[21][3] = "Programaci&oacute;n funcional";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 659. ";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[22]= "23)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[22]= new Array();
 choices[22][0] = "Resoluci&oacute;n.";
 choices[22][1] = "Desistimiento o renuncia.";
 choices[22][2] = "Caducidad.";
 choices[22][3] = "Todas las anteriores.";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[23]= "24)  Tienen la condici&oacute;n de alto cargo:";
 choices[23]= new Array();
 choices[23][0] = "los &oacute;rganos superiores";
 choices[23][1] = "los &oacute;rganos superiores y directivos";
 choices[23][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[23][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[24]= new Array();
 choices[24][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[24][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[24][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[24][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[24] = choices[24][0];
 units[24] = "77";
 comments[24] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[25]= "26)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[25]= new Array();
 choices[25][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[25][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[25][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[25][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[25] = choices[25][1];
 units[25] = "19";
 comments[25] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[26]= new Array();
 choices[26][0] = "Las respuestas a) y b) son correctas.";
 choices[26][1] = "Las respuestas a) y b) no son correctas.";
 choices[26][2] = "Contenido coherente con los planes sectoriales.";
 choices[26][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[26] = choices[26][0];
 units[26] = "10";
 comments[26] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[27]= "28)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[27]= new Array();
 choices[27][0] = "2025";
 choices[27][1] = "2023";
 choices[27][2] = "2030";
 choices[27][3] = "2020";
 answers[27] = choices[27][3];
 units[27] = "28";
 comments[27] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[28]= new Array();
 choices[28][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[28][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[28][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[28][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[28] = choices[28][2];
 units[28] = "71";
 comments[28] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[29]= "30)  Indica la respuesta correcta";
 choices[29]= new Array();
 choices[29][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[29][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[29][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[29][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[29] = choices[29][0];
 units[29] = "34, 84";
 comments[29] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[30]= "31)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[30]= new Array();
 choices[30][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[30][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[30][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[30][3] = "Todas las respuestas son correctas.";
 answers[30] = choices[30][1];
 units[30] = "101";
 comments[30] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[31]= "32)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[31]= new Array();
 choices[31][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[31][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[31][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[31][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[31] = choices[31][2];
 units[31] = "73";
 comments[31] = "Id Pregunta: 652. ";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[32]= "33)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[32]= new Array();
 choices[32][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[32][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[32][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[32][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[32] = choices[32][1];
 units[32] = "95";
 comments[32] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[33]= "34)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[33]= new Array();
 choices[33][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[33][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[33][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[33][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[33] = choices[33][1];
 units[33] = "26";
 comments[33] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[34]= "35)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[34]= new Array();
 choices[34][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[34][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[34][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[34][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[35]= "36)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[35]= new Array();
 choices[35][0] = "De un mes si el acto fuera presunto";
 choices[35][1] = "De un mes si el acto fuera expreso";
 choices[35][2] = "De un mes en cualquier caso";
 choices[35][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[35] = choices[35][1];
 units[35] = "8";
 comments[35] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[36][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[36][2] = "Las respuestas A y B son correctas.";
 choices[36][3] = "Las respuestas A y B son falsas.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[37]= new Array();
 choices[37][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[37][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[37][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[37][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[38]= new Array();
 choices[38][0] = "Cassandra";
 choices[38][1] = "Riak";
 choices[38][2] = "Avro";
 choices[38][3] = "Zookeeper";
 answers[38] = choices[38][3];
 units[38] = "73";
 comments[38] = "Id Pregunta: 656. ";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[39]= new Array();
 choices[39][0] = "Art&iacute;culo 14 CE.";
 choices[39][1] = "Art&iacute;culo 9.2 CE.";
 choices[39][2] = "Art&iacute;culo 9.1 CE.";
 choices[39][3] = "Art&iacute;culo 13 CE.";
 answers[39] = choices[39][2];
 units[39] = "14";
 comments[39] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[40]= "41)  El sector p&uacute;blico institucional se integra por:";
 choices[40]= new Array();
 choices[40][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[40][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[40][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[40][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[41]= "42)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[41]= new Array();
 choices[41][0] = "un art&iacute;culo";
 choices[41][1] = "dos art&iacute;culos";
 choices[41][2] = "tres art&iacute;culos";
 choices[41][3] = "cuatro art&iacute;culos";
 answers[41] = choices[41][1];
 units[41] = "7";
 comments[41] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[42]= new Array();
 choices[42][0] = "Memcached";
 choices[42][1] = "OpCache";
 choices[42][2] = "WinCache Extension for PHP";
 choices[42][3] = "Alternative PHP Cache";
 answers[42] = choices[42][0];
 units[42] = "65";
 comments[42] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[43]= "44)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[43]= new Array();
 choices[43][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[43][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[43][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[43][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[44]= "45)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[44]= new Array();
 choices[44][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[44][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[44][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[44][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[45][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[45][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[45][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[45] = choices[45][1];
 units[45] = "7";
 comments[45] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[46]= "47)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[46]= new Array();
 choices[46][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[46][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[46][2] = "Las Inspecciones Generales de los Servicios";
 choices[46][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[46] = choices[46][1];
 units[46] = "75";
 comments[46] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta falsa";
 choices[47]= new Array();
 choices[47][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[47][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[47][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[47][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[47] = choices[47][3];
 units[47] = "22";
 comments[47] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[48]= new Array();
 choices[48][0] = "verbalmente";
 choices[48][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[48][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[48][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[48] = choices[48][2];
 units[48] = "7";
 comments[48] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[49]= "50)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[49]= new Array();
 choices[49][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[49][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[49][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[49][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[49] = choices[49][3];
 units[49] = "34, 84";
 comments[49] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[50]= "51)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[50]= new Array();
 choices[50][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[50][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[50][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[50][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[51]= new Array();
 choices[51][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[51][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[51][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[51][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[51] = choices[51][2];
 units[51] = "26";
 comments[51] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[52]= "53)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[52]= new Array();
 choices[52][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[52][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[52][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[52][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[53]= new Array();
 choices[53][0] = "Las Cortes Generales.";
 choices[53][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[53][2] = "El Gobierno.";
 choices[53][3] = "El Congreso de los Diputados.";
 answers[53] = choices[53][0];
 units[53] = "10";
 comments[53] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[54]= "55)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[54]= new Array();
 choices[54][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[54][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[54][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[54][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[54] = choices[54][2];
 units[54] = "108";
 comments[54] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[55]= new Array();
 choices[55][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[55][1] = "Intervenci&oacute;n formal y material.";
 choices[55][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[55][3] = "Intervenci&oacute;n formal y general.";
 answers[55] = choices[55][1];
 units[55] = "10";
 comments[55] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[56]= "57)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[56]= new Array();
 choices[56][0] = "Los propios miembros del Tribunal.";
 choices[56][1] = "El Consejo de Europa.";
 choices[56][2] = "El Consejo Europeo.";
 choices[56][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[57][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[57][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[57][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[58]= new Array();
 choices[58][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[58][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[58][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[58][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[59]= "60)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[59]= new Array();
 choices[59][0] = "Subsecretario";
 choices[59][1] = "Subdirector general";
 choices[59][2] = "Secretario de Estado";
 choices[59][3] = "ninguna es correcta";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[60]= new Array();
 choices[60][0] = "La Comisi&oacute;n Permanente.";
 choices[60][1] = "El Presidente.";
 choices[60][2] = "El Pleno.";
 choices[60][3] = "El Vicepresidente.";
 answers[60] = choices[60][3];
 units[60] = "1";
 comments[60] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[61]= "62)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[61]= new Array();
 choices[61][0] = "Al Gobierno.";
 choices[61][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[61][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[61][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[61] = choices[61][2];
 units[61] = "10";
 comments[61] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[62]= new Array();
 choices[62][0] = "El 1 de junio de 1999.";
 choices[62][1] = "El 1 de mayo de 1999.";
 choices[62][2] = "El 1 de abril de 1999.";
 choices[62][3] = "El 1 de marzo de 1999.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[63]= "64)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[63]= new Array();
 choices[63][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[63][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[63][2] = "Son refrendados por el Rey.";
 choices[63][3] = "Son convocados por el Presidente del Gobierno.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[64]= "65)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "El Ministerio de Igualdad.";
 choices[64][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[64][2] = "Ambas son correctas.";
 choices[64][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[65]= new Array();
 choices[65][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[65][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[65][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[65][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[65] = choices[65][3];
 units[65] = "34, 84";
 comments[65] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[66]= new Array();
 choices[66][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[66][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[66][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[66][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la respuesta correcta:";
 choices[67]= new Array();
 choices[67][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[67][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[67][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[67][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[68]= "69)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[68]= new Array();
 choices[68][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[68][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[68][2] = "Son incompatibles ambas actas de diputado.";
 choices[68][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[68] = choices[68][2];
 units[68] = "5";
 comments[68] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[69]= "70)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[69]= new Array();
 choices[69][0] = "192.228.0.0";
 choices[69][1] = "192.228.8.0";
 choices[69][2] = "192.228.16.0";
 choices[69][3] = "192.228.17.0";
 answers[69] = choices[69][2];
 units[69] = "109";
 comments[69] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[70]= "71)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[70][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[70][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[70][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[70] = choices[70][2];
 units[70] = "101";
 comments[70] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[71]= "72)  El Tribunal de Justicia se cre&oacute; en:";
 choices[71]= new Array();
 choices[71][0] = "El Tratado de la CECA.";
 choices[71][1] = "El Tratado de Niza.";
 choices[71][2] = "El Tratado de &Aacute;msterdam.";
 choices[71][3] = "El Tratado de Lisboa.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[72]= new Array();
 choices[72][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[72][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[72][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[72][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[73]= "74)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[73]= new Array();
 choices[73][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[73][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[73][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[73][3] = "Todos las anteriores son ciertas.";
 answers[73] = choices[73][3];
 units[73] = "12";
 comments[73] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[74]= "75)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[74]= new Array();
 choices[74][0] = "Estrat&eacute;gico";
 choices[74][1] = "Operativo";
 choices[74][2] = "T&aacute;ctico";
 choices[74][3] = "Tecnol&oacute;gico";
 answers[74] = choices[74][0];
 units[74] = "36";
 comments[74] = "Id Pregunta: 76. AGE A1 2015";


