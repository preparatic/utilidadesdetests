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
var preguntaids = new Array();

//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[0]= new Array();
 choices[0][0] = "732";
 choices[0][1] = "626";
 choices[0][2] = "786";
 choices[0][3] = "360";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[0] = 337


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[1]= new Array();
 choices[1][0] = "MySQL";
 choices[1][1] = "SQLite";
 choices[1][2] = "Zope";
 choices[1][3] = "MariaDB";
 answers[1] = choices[1][2];
 units[1] = "61";
 comments[1] = "Id Pregunta: 577. Tema 61. TAI 2016.";
 preguntaids[1] = 577


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[2]= "3)  La recusaci&oacute;n pueden promoverla...";
 choices[2]= new Array();
 choices[2][0] = "Cualquier &oacute;rgano";
 choices[2][1] = "El interesado";
 choices[2][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[2][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[2] = 828


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[3]= "4)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[3]= new Array();
 choices[3][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[3][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[3][2] = "Un programa de igualdad.";
 choices[3][3] = "Un estatuto de igualdad.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[3] = 410


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[4]= new Array();
 choices[4][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[4][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[4][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[4][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[4] = 199


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[5]= "6)  Es falso que:";
 choices[5]= new Array();
 choices[5][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[5][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[5][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[5][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[5] = choices[5][1];
 units[5] = "20";
 comments[5] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[5] = 752


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[6]= new Array();
 choices[6][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[6][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[6][2] = "el Ministerio del Interior";
 choices[6][3] = "la Administraci&oacute;n General del Estado";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[6] = 814


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[7]= "8)  Tienen la condici&oacute;n de alto cargo:";
 choices[7]= new Array();
 choices[7][0] = "los &oacute;rganos superiores";
 choices[7][1] = "los &oacute;rganos superiores y directivos";
 choices[7][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[7][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[7] = 794


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[8]= "9)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[8]= new Array();
 choices[8][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[8][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[8][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[8][3] = "Todos las anteriores son ciertas.";
 answers[8] = choices[8][3];
 units[8] = "12";
 comments[8] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[8] = 137


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[9]= "10)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Unidad de igualdad.";
 choices[9][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[9][2] = "Ninguna de las anteriores.";
 choices[9][3] = "A y B son correctas.";
 answers[9] = choices[9][1];
 units[9] = "14";
 comments[9] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";
 preguntaids[9] = 433


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[10]= new Array();
 choices[10][0] = "Selenium";
 choices[10][1] = "JUnit";
 choices[10][2] = "Jenkins";
 choices[10][3] = "JMeter";
 answers[10] = choices[10][2];
 units[10] = "92";
 comments[10] = "Id Pregunta: 703. INTEGRACION CONTINUA";
 preguntaids[10] = 703


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[11]= new Array();
 choices[11][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[11][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[11][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][1];
 units[11] = "34, 84";
 comments[11] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[11] = 723


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[12]= "13)  El sector p&uacute;blico institucional se integra por:";
 choices[12]= new Array();
 choices[12][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[12][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[12][2] = "las Universidades p&uacute;blicas";
 choices[12][3] = "todas son correctas";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[12] = 766


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[13]= "14)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[13]= new Array();
 choices[13][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[13][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[13][2] = "La protecci&oacute;n del medio ambiente.";
 choices[13][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[13] = choices[13][0];
 units[13] = "22";
 comments[13] = "Id Pregunta: 125. ";
 preguntaids[13] = 125


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[14]= new Array();
 choices[14][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[14][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[14][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[14][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[14] = choices[14][3];
 units[14] = "22";
 comments[14] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[14] = 714


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[15]= "16)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[15]= new Array();
 choices[15][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[15][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[15][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[15][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[15] = 226


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[16]= new Array();
 choices[16][0] = "a) Los cuatro ejercicios siguientes.";
 choices[16][1] = "b) El ejercicio siguiente.";
 choices[16][2] = "c) Los dos ejercicios siguientes.";
 choices[16][3] = "d) Los tres ejercicios siguientes.";
 answers[16] = choices[16][3];
 units[16] = "10";
 comments[16] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[16] = 458


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[17]= "18)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[17]= new Array();
 choices[17][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[17][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[17][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[17][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[17] = choices[17][1];
 units[17] = "92";
 comments[17] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[17] = 704


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[18]= "19)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[18]= new Array();
 choices[18][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[18][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[18][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[18][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[18] = 786


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[19]= "20)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Paging";
 choices[19][1] = "Roaming";
 choices[19][2] = "Handover";
 choices[19][3] = "Trunking";
 answers[19] = choices[19][0];
 units[19] = "117";
 comments[19] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[19] = 10


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[20]= new Array();
 choices[20][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[20][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[20][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[20][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[20] = choices[20][1];
 units[20] = "92";
 comments[20] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[20] = 698


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[21]= "22)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[21]= new Array();
 choices[21][0] = "P&uacute;blica.";
 choices[21][1] = "Privada.";
 choices[21][2] = "A y B son correctas.";
 choices[21][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[21] = 418


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[22]= new Array();
 choices[22][0] = "Principio de solo una vez";
 choices[22][1] = "Apertura y transparencia";
 choices[22][2] = "Confianza y seguridad";
 choices[22][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[22] = choices[22][3];
 units[22] = "19";
 comments[22] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[22] = 161


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[23]= "24)  La partida presupuestaria es equivalente a...";
 choices[23]= new Array();
 choices[23][0] = "El sujeto que realiza el gasto";
 choices[23][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[23][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[23][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";
 preguntaids[23] = 450


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[24]= "25)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[24]= new Array();
 choices[24][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[24][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[24][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[24][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[24] = choices[24][2];
 units[24] = "8";
 comments[24] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[24] = 143


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[25]= "26)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[25]= new Array();
 choices[25][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[25][1] = "Publicidad de las normas.";
 choices[25][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[25][3] = "Coordinaci&oacute;n normativa.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[25] = 244


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[26]= "27)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[26]= new Array();
 choices[26][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[26][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[26][2] = "A y B son correctas.";
 choices[26][3] = "A y B son incorrectas.";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[26] = 844


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[27]= "28)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[27]= new Array();
 choices[27][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[27][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[27][2] = "Crea una copia del proceso que hace la llamada.";
 choices[27][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[27] = choices[27][2];
 units[27] = "57";
 comments[27] = "Id Pregunta: 28. AGE A1 2015";
 preguntaids[27] = 28


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[28][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[28][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[28][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[28] = choices[28][2];
 units[28] = "7";
 comments[28] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[28] = 667


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[29]= "30)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[29]= new Array();
 choices[29][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[29][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[29][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[29][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[29] = 841


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[30]= "31)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[30]= new Array();
 choices[30][0] = "El Parlamento Europeo.";
 choices[30][1] = "Todas las respuestas son correctas.";
 choices[30][2] = "La Comisi&oacute;n Europea.";
 choices[30][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[30] = 353


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; es SonarQube?";
 choices[31]= new Array();
 choices[31][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[31][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[31][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[31][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[31] = choices[31][2];
 units[31] = "92";
 comments[31] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[31] = 700


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[32]= "33)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[32]= new Array();
 choices[32][0] = "solo mediante ley";
 choices[32][1] = "reglamentariamente";
 choices[32][2] = "mediante ley o reglamentariamente";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 514. LEY 39/2015";
 preguntaids[32] = 514


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[33]= "34)  Sobre el Plan Juncker:";
 choices[33]= new Array();
 choices[33][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[33][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[33][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[33][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[33] = 282


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[34]= new Array();
 choices[34][0] = "El Consejo Nacional de la Mujer.";
 choices[34][1] = "El Consejo de la Mujer.";
 choices[34][2] = "El Instituto de la Mujer.";
 choices[34][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[34] = choices[34][3];
 units[34] = "14";
 comments[34] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[34] = 390


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[35]= new Array();
 choices[35][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[35][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[35][2] = "Fomentar el despliegue de redes y servicios";
 choices[35][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[35] = choices[35][0];
 units[35] = "19";
 comments[35] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[35] = 754


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[36]= new Array();
 choices[36][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[36][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[36][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[36][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[36] = choices[36][0];
 units[36] = "5";
 comments[36] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[36] = 309


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[37]= new Array();
 choices[37][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[37][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[37][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[37][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[37] = choices[37][3];
 units[37] = "78";
 comments[37] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[37] = 47


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[38]= "39)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[38]= new Array();
 choices[38][0] = "2.400 euros";
 choices[38][1] = "4.000 euros";
 choices[38][2] = "3.200 euros";
 choices[38][3] = "1.600 euros";
 answers[38] = choices[38][1];
 units[38] = "37";
 comments[38] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[38] = 89


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[39]= "40)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[39]= new Array();
 choices[39][0] = "Discriminaci&oacute;n indirecta.";
 choices[39][1] = "Discriminaci&oacute;n directa.";
 choices[39][2] = "Discriminaci&oacute;n por maternidad.";
 choices[39][3] = "Discriminaci&oacute;n abusiva.";
 answers[39] = choices[39][1];
 units[39] = "14";
 comments[39] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[39] = 395


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[40]= "41)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[40]= new Array();
 choices[40][0] = "Sean dirigidas por mujeres";
 choices[40][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[40][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[40][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[40] = 384


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[41]= "42)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[41]= new Array();
 choices[41][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[41][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[41][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[41][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[41] = 190


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[42]= new Array();
 choices[42][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[42][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[42][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[42][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[42] = choices[42][0];
 units[42] = "75";
 comments[42] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[42] = 70


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[43]= new Array();
 choices[43][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[43][1] = "Implantar el mercado general europeo";
 choices[43][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[43][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[43] = choices[43][1];
 units[43] = "19";
 comments[43] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[43] = 758


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[44]= new Array();
 choices[44][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[44][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[44][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[44][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[44] = choices[44][0];
 units[44] = "14";
 comments[44] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[44] = 389


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[45]= new Array();
 choices[45][0] = "Directiva 95/46/CE";
 choices[45][1] = "Directiva 1999/93/CE";
 choices[45][2] = "Directiva 2000/31/CE";
 choices[45][3] = "Directiva 2003/98/CE";
 answers[45] = choices[45][1];
 units[45] = "77";
 comments[45] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[45] = 684


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[46]= "47)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[46]= new Array();
 choices[46][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[46][1] = "Tratarse de un acto no susceptible de recurso";
 choices[46][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[46][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[46] = choices[46][2];
 units[46] = "8";
 comments[46] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";
 preguntaids[46] = 140


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[47]= new Array();
 choices[47][0] = "Al Gobierno de la naci&oacute;n";
 choices[47][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[47][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[47][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[47] = 147


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[48]= "49)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[48]= new Array();
 choices[48][0] = "la Administraci&oacute;n General del Estado";
 choices[48][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[48][2] = "las Entidades Locales";
 choices[48][3] = "todas son correctas";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[48] = 537


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[49]= "50)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[49]= new Array();
 choices[49][0] = "Ley org&aacute;nica.";
 choices[49][1] = "Ley ordinaria.";
 choices[49][2] = "Ley de bases.";
 choices[49][3] = "Ley marco.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[49] = 271


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[50]= new Array();
 choices[50][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[50][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[50][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[50][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[50] = choices[50][0];
 units[50] = "26";
 comments[50] = "Id Pregunta: 544. Gobernanza TIC";
 preguntaids[50] = 544


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[51]= "52)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[51]= new Array();
 choices[51][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[51][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[51][2] = "Las Inspecciones Generales de los Servicios";
 choices[51][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[51] = choices[51][1];
 units[51] = "75";
 comments[51] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[51] = 79


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[52]= "53)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[52]= new Array();
 choices[52][0] = "A la persona demandante.";
 choices[52][1] = "A la persona demandada.";
 choices[52][2] = "Al &oacute;rgano judicial.";
 choices[52][3] = "Al &oacute;rgano administrativo.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[52] = 400


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[53]= "54)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[53]= new Array();
 choices[53][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[53][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[53][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[53][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[53] = choices[53][1];
 units[53] = "26";
 comments[53] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[53] = 22


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[54]= new Array();
 choices[54][0] = "Veinte.";
 choices[54][1] = "Quince.";
 choices[54][2] = "Diez.";
 choices[54][3] = "Doce.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[54] = 264


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[55]= new Array();
 choices[55][0] = "Por reembolso de pr&eacute;stamos.";
 choices[55][1] = "Por la venta de bienes.";
 choices[55][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[55][3] = "Por prestaci&oacute;n de servicios.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";
 preguntaids[55] = 496


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[56]= "57)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[56]= new Array();
 choices[56][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[56][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[56][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[56][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 339. UNION EUROPEA";
 preguntaids[56] = 339


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[57]= new Array();
 choices[57][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[57][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[57][2] = "la falta de interoperabilidad.";
 choices[57][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[57] = 285


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[58]= "59)  El Tribunal de Justicia se cre&oacute; en:";
 choices[58]= new Array();
 choices[58][0] = "El Tratado de la CECA.";
 choices[58][1] = "El Tratado de Niza.";
 choices[58][2] = "El Tratado de &Aacute;msterdam.";
 choices[58][3] = "El Tratado de Lisboa.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 308. UNION EUROPEA";
 preguntaids[58] = 308


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[59][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[59][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[59][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 237. CONSTITUCION1978";
 preguntaids[59] = 237


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[60]= new Array();
 choices[60][0] = "Conferencia de Presidentes.";
 choices[60][1] = "Convenios de colaboraci&oacute;n.";
 choices[60][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[60][3] = "Conferencias Sectoriales.";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[60] = 846


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[61]= new Array();
 choices[61][0] = "NoSQL";
 choices[61][1] = "Sistemas de baja latencia";
 choices[61][2] = "MapReduce";
 choices[61][3] = "Business Intelligence";
 answers[61] = choices[61][1];
 units[61] = "73";
 comments[61] = "Id Pregunta: 660. ";
 preguntaids[61] = 660


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[62]= "63)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[62]= new Array();
 choices[62][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[62][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[62][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[62][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 840. Ley 40/2015";
 preguntaids[62] = 840


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[63]= new Array();
 choices[63][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[63][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[63][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[63][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[63] = choices[63][3];
 units[63] = "10";
 comments[63] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";
 preguntaids[63] = 460


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[64]= new Array();
 choices[64][0] = "De los derechos y deberes fundamentales.";
 choices[64][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[64][2] = "Derechos y libertades.";
 choices[64][3] = "De la Corona.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[64] = 221


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[65]= new Array();
 choices[65][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[65][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[65][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[65][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[65] = choices[65][1];
 units[65] = "22";
 comments[65] = "Id Pregunta: 122. ";
 preguntaids[65] = 122


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[66]= new Array();
 choices[66][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[66][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[66][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[66][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[66] = choices[66][2];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[66] = 764


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[67]= "68)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[67]= new Array();
 choices[67][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[67][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[67][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[67][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[67] = 825


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[68]= "69)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[68]= new Array();
 choices[68][0] = "la poblaci&oacute;n del territorio";
 choices[68][1] = "el volumen de gesti&oacute;n";
 choices[68][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][3];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[68] = 816


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[69]= "70)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[69]= new Array();
 choices[69][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[69][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[69][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[69] = 533


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[70]= "71)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[70]= new Array();
 choices[70][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[70][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[70][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[70][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[70] = choices[70][3];
 units[70] = "125";
 comments[70] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[70] = 862


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[71]= "72)  En cuanto al an&aacute;lisis DAFO:";
 choices[71]= new Array();
 choices[71][0] = "Considera detallada y exclusivamente factores internos.";
 choices[71][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[71][2] = "Considera detallada y exclusivamente factores externos.";
 choices[71][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[71] = choices[71][1];
 units[71] = "83";
 comments[71] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[71] = 41


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[72]= "73)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[72]= new Array();
 choices[72][0] = "Windows Phone";
 choices[72][1] = "Blackberry";
 choices[72][2] = "iOS";
 choices[72][3] = "Android";
 answers[72] = choices[72][3];
 units[72] = "59";
 comments[72] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[72] = 64


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[73]= "74)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[73]= new Array();
 choices[73][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[73][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[73][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[73][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[73] = choices[73][1];
 units[73] = "7";
 comments[73] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[73] = 517


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[74]= new Array();
 choices[74][0] = "El Ministro de Econom&iacute;a.";
 choices[74][1] = "El Gobierno.";
 choices[74][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[74][3] = "El Presidente del Gobierno.";
 answers[74] = choices[74][1];
 units[74] = "10";
 comments[74] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";
 preguntaids[74] = 472


