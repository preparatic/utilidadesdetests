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

//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[0]= new Array();
 choices[0][0] = "El Parlamento y el Consejo.";
 choices[0][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[0][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[0][3] = "La Comisi&oacute;n y el Consejo.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[1]= "2)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[1]= new Array();
 choices[1][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[1][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[1][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[1][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[1] = choices[1][1];
 units[1] = "5";
 comments[1] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[2]= new Array();
 choices[2][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[2][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[2][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[2][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[2] = choices[2][2];
 units[2] = "26";
 comments[2] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[3]= "4)  El lenguaje SPARK es un subconjunto de:";
 choices[3]= new Array();
 choices[3][0] = "Java";
 choices[3][1] = "Fortran";
 choices[3][2] = "Ruby";
 choices[3][3] = "Ada";
 answers[3] = choices[3][3];
 units[3] = "73";
 comments[3] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[4]= "5)  La Administraci&oacute;n General del Estado se organiza:";
 choices[4]= new Array();
 choices[4][0] = "en Ministerios";
 choices[4][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[4][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[4][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[4] = choices[4][1];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[5]= new Array();
 choices[5][0] = "El Tratado de Lisboa";
 choices[5][1] = "El Tratado de Amsterdam";
 choices[5][2] = "El Tratado de Niza";
 choices[5][3] = "El Acta &Uacute;nica Europea";
 answers[5] = choices[5][1];
 units[5] = "15";
 comments[5] = "Id Pregunta: 115. ";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[6]= new Array();
 choices[6][0] = "Ley Org&aacute;nica.";
 choices[6][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[6][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[6][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[7]= new Array();
 choices[7][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[7][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[7][2] = "Todas son correctas.";
 choices[7][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[7] = choices[7][2];
 units[7] = "5";
 comments[7] = "Id Pregunta: 330. UNION EUROPEA";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[8]= "9)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[8]= new Array();
 choices[8][0] = "Son actos normativos.";
 choices[8][1] = "Poseen alcance general.";
 choices[8][2] = "No son obligatorias.";
 choices[8][3] = "Son actos individuales no normativos.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[9]= new Array();
 choices[9][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[9][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[9][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[9][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[9] = choices[9][3];
 units[9] = "46";
 comments[9] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[10]= new Array();
 choices[10][0] = "Las Cortes Generales.";
 choices[10][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[10][2] = "El Gobierno.";
 choices[10][3] = "El Congreso de los Diputados.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[11]= new Array();
 choices[11][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[11][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[11][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[11][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique la afirmaci&oacute;n falsa:";
 choices[12]= new Array();
 choices[12][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[12][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[12][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[12][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[12] = choices[12][1];
 units[12] = "22";
 comments[12] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[13]= new Array();
 choices[13][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[13][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[13][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[13][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[13] = choices[13][0];
 units[13] = "89";
 comments[13] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[14]= new Array();
 choices[14][0] = "El 2 de Octubre de 2015";
 choices[14][1] = "El 15 de Septiembre de 2015";
 choices[14][2] = "El 1 de Octubre de 2015";
 choices[14][3] = "El 5 de Octubre de 2015";
 answers[14] = choices[14][0];
 units[14] = "19";
 comments[14] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[15]= new Array();
 choices[15][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[15][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[15][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][1];
 units[15] = "34, 84";
 comments[15] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[16]= "17)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[16]= new Array();
 choices[16][0] = "Cifrada";
 choices[16][1] = "Conjunta";
 choices[16][2] = "Sistem&aacute;tica";
 choices[16][3] = "Todas son correctas";
 answers[16] = choices[16][3];
 units[16] = "10";
 comments[16] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[17]= new Array();
 choices[17][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[17][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[17][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[17][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[17] = choices[17][0];
 units[17] = "62";
 comments[17] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[18]= "19)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[18]= new Array();
 choices[18][0] = "A la persona demandante.";
 choices[18][1] = "A la persona demandada.";
 choices[18][2] = "Al &oacute;rgano judicial.";
 choices[18][3] = "Al &oacute;rgano administrativo.";
 answers[18] = choices[18][1];
 units[18] = "14";
 comments[18] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[19]= "20)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[19][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[19][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[19][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[20]= "21)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[20]= new Array();
 choices[20][0] = "Establecer tributos.";
 choices[20][1] = "Desarrollar lo establecido en una Ley.";
 choices[20][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[20][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[21]= "22)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[21]= new Array();
 choices[21][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[21][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[21][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[21][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[21] = choices[21][1];
 units[21] = "19";
 comments[21] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[22]= "23)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[22]= new Array();
 choices[22][0] = "los Secretarios generales t&eacute;cnicos";
 choices[22][1] = "los Directores generales";
 choices[22][2] = "los Secretarios generales";
 choices[22][3] = "los Subsecretarios";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta correcta:";
 choices[23]= new Array();
 choices[23][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[23][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[23][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[23][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[23] = choices[23][1];
 units[23] = "98";
 comments[23] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[24]= new Array();
 choices[24][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[24][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[24][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[24][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[25]= "26)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[25]= new Array();
 choices[25][0] = "Ejecutivo";
 choices[25][1] = "Limitativo";
 choices[25][2] = "Estimativo";
 choices[25][3] = "Progresivo";
 answers[25] = choices[25][2];
 units[25] = "10";
 comments[25] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[26]= "27)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[26]= new Array();
 choices[26][0] = "La Ley Org&aacute;nica 2/2011";
 choices[26][1] = "La Ley Org&aacute;nica 2/2012";
 choices[26][2] = "La Ley Org&aacute;nica 3/2012";
 choices[26][3] = "La Ley Org&aacute;nica 2/2002";
 answers[26] = choices[26][1];
 units[26] = "12";
 comments[26] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[27]= "28)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[27][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[27][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[27][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[27] = choices[27][2];
 units[27] = "101";
 comments[27] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[28]= "29)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[28]= new Array();
 choices[28][0] = "El 23 de julio de 1952.";
 choices[28][1] = "El 18 de abril de 1951.";
 choices[28][2] = "El 16 de abril de 1948.";
 choices[28][3] = "d)Ninguna de las respuestas son correctas.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[29]= new Array();
 choices[29][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[29][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[29][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[29][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[30]= "31)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[30]= new Array();
 choices[30][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[30][1] = "Tratarse de un acto no susceptible de recurso";
 choices[30][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[30][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[30] = choices[30][2];
 units[30] = "8";
 comments[30] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[31]= new Array();
 choices[31][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[31][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[31][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[31][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[31] = choices[31][0];
 units[31] = "76";
 comments[31] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[32]= "33)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[32]= new Array();
 choices[32][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[32][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[32][2] = "Son refrendados por el Rey.";
 choices[32][3] = "Son convocados por el Presidente del Gobierno.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[33]= "34)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[33]= new Array();
 choices[33][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[33][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[33][2] = "La normativa reguladora de cada derecho.";
 choices[33][3] = "Ley 50/1997, del Gobierno.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[34]= "35)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[34]= new Array();
 choices[34][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[34][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[34][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[34][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[34] = choices[34][0];
 units[34] = "109";
 comments[34] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[35]= "36)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[35]= new Array();
 choices[35][0] = "De los interesados en el procedimiento";
 choices[35][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[35][2] = "Disposiciones generales";
 choices[35][3] = "De los actos administrativos";
 answers[35] = choices[35][2];
 units[35] = "7";
 comments[35] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[36][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[36][2] = "Ambas son correctas.";
 choices[36][3] = "La A y B son incorrectas.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[37]= new Array();
 choices[37][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[37][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[37][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[37][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[38]= "39)  Se consideran interesados en el procedimiento administrativo:";
 choices[38]= new Array();
 choices[38][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[38][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[38][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][0];
 units[38] = "7";
 comments[38] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[39]= "40)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[39]= new Array();
 choices[39][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[39][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[39][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[39][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[39] = choices[39][3];
 units[39] = "12";
 comments[39] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[40]= "41)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[40]= new Array();
 choices[40][0] = "tienen capacidad de obrar limitada";
 choices[40][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[40][2] = "no tienen capacidad de obrar";
 choices[40][3] = "ninguna es correcta";
 answers[40] = choices[40][2];
 units[40] = "7";
 comments[40] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[41]= new Array();
 choices[41][0] = "Cinco.";
 choices[41][1] = "Dos.";
 choices[41][2] = "Cuatro.";
 choices[41][3] = "Siete.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[42]= "43)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[42]= new Array();
 choices[42][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[42][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[42][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[42][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[42] = choices[42][1];
 units[42] = "48";
 comments[42] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[43]= new Array();
 choices[43][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[43][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[43][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[43][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[44]= new Array();
 choices[44][0] = "un art&iacute;culo";
 choices[44][1] = "dos art&iacute;culos";
 choices[44][2] = "tres art&iacute;culos";
 choices[44][3] = "cuatro art&iacute;culos";
 answers[44] = choices[44][1];
 units[44] = "7";
 comments[44] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[45]= "46)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[45]= new Array();
 choices[45][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[45][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[45][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[45][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[45] = choices[45][2];
 units[45] = "26";
 comments[45] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[46]= new Array();
 choices[46][0] = "Los principios rectores";
 choices[46][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[46][2] = "Los hitos para su desarrollo gradual";
 choices[46][3] = "Todos los anteriores";
 answers[46] = choices[46][3];
 units[46] = "19";
 comments[46] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[47]= "48)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[47]= new Array();
 choices[47][0] = "Clustering";
 choices[47][1] = "Deduplicaci&oacute;n";
 choices[47][2] = "Virtualizaci&oacute;n";
 choices[47][3] = "Contenerizaci&oacute;n";
 answers[47] = choices[47][2];
 units[47] = "124";
 comments[47] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[48]= new Array();
 choices[48][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[48][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[48][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[48][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[48] = choices[48][1];
 units[48] = "77";
 comments[48] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[49]= new Array();
 choices[49][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[49][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[49][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[49][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[49] = choices[49][2];
 units[49] = "22";
 comments[49] = "Id Pregunta: 121. ";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[50]= new Array();
 choices[50][0] = "El Ministro de Econom&iacute;a.";
 choices[50][1] = "El Gobierno.";
 choices[50][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[50][3] = "El Presidente del Gobierno.";
 answers[50] = choices[50][1];
 units[50] = "10";
 comments[50] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[51]= "52)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[51]= new Array();
 choices[51][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[51][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[51][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[51][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[52]= "53)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[52]= new Array();
 choices[52][0] = "Subsecretario";
 choices[52][1] = "Subdirector general";
 choices[52][2] = "Secretario de Estado";
 choices[52][3] = "ninguna es correcta";
 answers[52] = choices[52][1];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[53]= "54)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[53]= new Array();
 choices[53][0] = "el Secretario General";
 choices[53][1] = "el Subdirector General";
 choices[53][2] = "el Secretario de Estado";
 choices[53][3] = "ninguna es correcta";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[54]= new Array();
 choices[54][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[54][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[54][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[54][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[54] = choices[54][1];
 units[54] = "15";
 comments[54] = "Id Pregunta: 112. ";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[55]= new Array();
 choices[55][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[55][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[55][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[55][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[55] = choices[55][0];
 units[55] = "48";
 comments[55] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[56]= new Array();
 choices[56][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[56][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[56][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[56][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[56] = choices[56][1];
 units[56] = "92";
 comments[56] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[57]= "58)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[57]= new Array();
 choices[57][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[57][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[57][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[57][3] = "Todas son correctas.";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[58]= new Array();
 choices[58][0] = "Crecimiento inteligente.";
 choices[58][1] = "Crecimiento inclusivo.";
 choices[58][2] = "Crecimiento sostenible.";
 choices[58][3] = "Crecimiento integrador.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[59]= new Array();
 choices[59][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[59][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[59][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[59][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[60]= new Array();
 choices[60][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[60][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[60][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[60][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[60] = choices[60][3];
 units[60] = "34, 84";
 comments[60] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[61]= "62)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[61]= new Array();
 choices[61][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[61][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[61][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[61][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[61] = choices[61][0];
 units[61] = "60";
 comments[61] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[62]= "63)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Unidad de igualdad.";
 choices[62][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[62][2] = "Ninguna de las anteriores.";
 choices[62][3] = "A y B son correctas.";
 answers[62] = choices[62][1];
 units[62] = "14";
 comments[62] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[63]= "64)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[63]= new Array();
 choices[63][0] = "Los Derechos y Deberes fundamentales.";
 choices[63][1] = "La Corona.";
 choices[63][2] = "El Poder Judicial.";
 choices[63][3] = "Las Cortes Generales.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[64]= "65)  El sector p&uacute;blico institucional se integra por:";
 choices[64]= new Array();
 choices[64][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[64][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[64][2] = "las Universidades p&uacute;blicas";
 choices[64][3] = "todas son correctas";
 answers[64] = choices[64][3];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[65]= new Array();
 choices[65][0] = "Agenda digital para Europa";
 choices[65][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[65][2] = "Juventud en movimiento";
 choices[65][3] = "Agenda Web 2.0";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[66]= new Array();
 choices[66][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[66][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[66][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[66][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[67]= new Array();
 choices[67][0] = "Quince miembros.";
 choices[67][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[67][2] = "Los miembros que determine el Consejo.";
 choices[67][3] = "Un Presidente y quince miembros.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[68]= new Array();
 choices[68][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[68][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[68][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[68][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Subdirectores generales:";
 choices[69]= new Array();
 choices[69][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[69][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[69][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][1];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[70]= "71)  Los Secretarios generales t&eacute;cnicos:";
 choices[70]= new Array();
 choices[70][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[70][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[70][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[70][3] = "todas son correctas";
 answers[70] = choices[70][3];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta falsa:";
 choices[71]= new Array();
 choices[71][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[71][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[71][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[71][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[72]= "73)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[72]= new Array();
 choices[72][0] = "Proveer de manera compartida servicios comunes";
 choices[72][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[72][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[72][3] = "Transparencia";
 answers[72] = choices[72][1];
 units[72] = "28";
 comments[72] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[73]= new Array();
 choices[73][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[73][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[73][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[73][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[74]= "75)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[74]= new Array();
 choices[74][0] = "Tres a&ntilde;os.";
 choices[74][1] = "Dos a&ntilde;os y medio.";
 choices[74][2] = "Cinco a&ntilde;os.";
 choices[74][3] = "Seis a&ntilde;os.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 291. UNION EUROPEA";


