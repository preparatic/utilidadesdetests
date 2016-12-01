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

//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[0]= "1)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[0]= new Array();
 choices[0][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[0][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[0][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[0][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[0] = choices[0][1];
 units[0] = "7";
 comments[0] = "Id Pregunta: 535. LEY 39/2015";
 preguntaids[0] = 535


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[1]= "2)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[1]= new Array();
 choices[1][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[1][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[1][2] = "La normativa reguladora de cada derecho.";
 choices[1][3] = "Ley 50/1997, del Gobierno.";
 answers[1] = choices[1][2];
 units[1] = "10";
 comments[1] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";
 preguntaids[1] = 462


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[2]= "3)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[2]= new Array();
 choices[2][0] = "la poblaci&oacute;n del territorio";
 choices[2][1] = "el volumen de gesti&oacute;n";
 choices[2][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[2][3] = "todas son correctas";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[2] = 816


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[3]= "4)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[3]= new Array();
 choices[3][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[3][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[3][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[3][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[3] = choices[3][1];
 units[3] = "95";
 comments[3] = "Id Pregunta: 9. AGE A1 2015";
 preguntaids[3] = 9


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[4]= new Array();
 choices[4][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[4][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[4][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[4][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[4] = choices[4][0];
 units[4] = "62";
 comments[4] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[4] = 12


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[5]= new Array();
 choices[5][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[5][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[5][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[5][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 319. UNION EUROPEA";
 preguntaids[5] = 319


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[6]= new Array();
 choices[6][0] = "Agenda digital para Europa";
 choices[6][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[6][2] = "Juventud en movimiento";
 choices[6][3] = "Agenda Web 2.0";
 answers[6] = choices[6][3];
 units[6] = "19";
 comments[6] = "Id Pregunta: 760. Europa 2020";
 preguntaids[6] = 760


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[7]= "8)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[7]= new Array();
 choices[7][0] = "Las instituciones comunitarias.";
 choices[7][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[7][2] = "Los Estados miembros.";
 choices[7][3] = "Los nacionales de los Estados miembros.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[7] = 333


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[8]= new Array();
 choices[8][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[8][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[8][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[8][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[8] = choices[8][2];
 units[8] = "1";
 comments[8] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[8] = 233


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[9]= new Array();
 choices[9][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[9][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[9][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[9][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[9] = 309


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; es Java Web Start?";
 choices[10]= new Array();
 choices[10][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[10][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[10][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[10][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[10] = choices[10][3];
 units[10] = "64";
 comments[10] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[10] = 35


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[11]= new Array();
 choices[11][0] = "Un representante de la Administraci&oacute;n local.";
 choices[11][1] = "Un representante del Tribunal de Cuentas.";
 choices[11][2] = "Un representante del Defensor del Pueblo.";
 choices[11][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[11] = choices[11][0];
 units[11] = "22";
 comments[11] = "Id Pregunta: 123. ";
 preguntaids[11] = 123


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[12]= "13)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[12]= new Array();
 choices[12][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[12][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[12][2] = "a y b son correctas";
 choices[12][3] = "a y b son incorrectas";
 answers[12] = choices[12][2];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[12] = 798


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[13]= "14)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[13]= new Array();
 choices[13][0] = "Por unanimidad.";
 choices[13][1] = "Por mayor&iacute;a cualificada.";
 choices[13][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[13][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[13] = choices[13][3];
 units[13] = "5";
 comments[13] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[13] = 312


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[14]= new Array();
 choices[14][0] = "Diagrama de clases";
 choices[14][1] = "Diagrama de componentes";
 choices[14][2] = "Diagrama de estructura";
 choices[14][3] = "Diagrama de paquetes";
 answers[14] = choices[14][0];
 units[14] = "91";
 comments[14] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[14] = 88


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[15]= new Array();
 choices[15][0] = "Perceptible";
 choices[15][1] = "Operable";
 choices[15][2] = "Comprensible";
 choices[15][3] = "Robusto";
 answers[15] = choices[15][2];
 units[15] = "42";
 comments[15] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[15] = 83


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[16]= new Array();
 choices[16][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[16][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[16][2] = "Fomentar el despliegue de redes y servicios";
 choices[16][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[16] = choices[16][0];
 units[16] = "19";
 comments[16] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[16] = 754


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[17]= new Array();
 choices[17][0] = "Consumidores";
 choices[17][1] = "PYMES y Start-ups";
 choices[17][2] = "La Industria";
 choices[17][3] = "Todos los anteriores";
 answers[17] = choices[17][3];
 units[17] = "17";
 comments[17] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[17] = 557


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[18]= "19)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[18]= new Array();
 choices[18][0] = "Ejecutivo";
 choices[18][1] = "Limitativo";
 choices[18][2] = "Estimativo";
 choices[18][3] = "Progresivo";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[18] = 448


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[19]= new Array();
 choices[19][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[19][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[19][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[19][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[19] = choices[19][0];
 units[19] = "14";
 comments[19] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";
 preguntaids[19] = 386


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[20]= new Array();
 choices[20][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[20][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[20][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[20][3] = "El software funcionando es la medida principal del progreso.";
 answers[20] = choices[20][2];
 units[20] = "34";
 comments[20] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[20] = 43


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[21]= new Array();
 choices[21][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[21][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[21][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[21][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[21] = choices[21][1];
 units[21] = "84";
 comments[21] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[21] = 53


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[22]= "23)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[22]= new Array();
 choices[22][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[22][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[22][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[22][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[22] = choices[22][1];
 units[22] = "125";
 comments[22] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[22] = 863


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[23]= "24)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[23]= new Array();
 choices[23][0] = "Decretos Legislativos.";
 choices[23][1] = "Decretos-leyes.";
 choices[23][2] = "Leyes de bases.";
 choices[23][3] = "Reales Decretos del Consejo de Ministros.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[23] = 204


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[24]= new Array();
 choices[24][0] = "Cinco.";
 choices[24][1] = "Dos.";
 choices[24][2] = "Cuatro.";
 choices[24][3] = "Siete.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[24] = 213


//  Id pregunta: 859 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;ntos fasc&iacute;culos tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[25]= new Array();
 choices[25][0] = "12";
 choices[25][1] = "11";
 choices[25][2] = "13";
 choices[25][3] = "10";
 answers[25] = choices[25][0];
 units[25] = "125";
 comments[25] = "Id Pregunta: 859. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[25] = 859


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[26]= "27)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[26]= new Array();
 choices[26][0] = "Un a&ntilde;o prorrogable";
 choices[26][1] = "Dos a&ntilde;os no prorrogables";
 choices[26][2] = "Un a&ntilde;o no prorrogable";
 choices[26][3] = "Dos a&ntilde;os prorrogables";
 answers[26] = choices[26][2];
 units[26] = "37";
 comments[26] = "Id Pregunta: 86. AGE A1 2015";
 preguntaids[26] = 86


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[27]= "28)  ITIL v3, define:";
 choices[27]= new Array();
 choices[27][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[27][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[27][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[27][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[27] = choices[27][0];
 units[27] = "101";
 comments[27] = "Id Pregunta: 606. Junta de Extremadura A1 2015";
 preguntaids[27] = 606


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[28]= "29)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[28][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[28][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[28][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[28] = 270


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[29]= new Array();
 choices[29][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[29][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[29][2] = "c) Todas las respuestas son correctas.";
 choices[29][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[29] = 358


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[30]= "31)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[30]= new Array();
 choices[30][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[30][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[30][2] = "El Presidente del Gobierno";
 choices[30][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[30] = choices[30][1];
 units[30] = "26";
 comments[30] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[30] = 551


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[31]= new Array();
 choices[31][0] = "Ley 3/2015";
 choices[31][1] = "Ley 6/2007";
 choices[31][2] = "Ley 5/1984";
 choices[31][3] = "Ley 5/2006";
 answers[31] = choices[31][0];
 units[31] = "22";
 comments[31] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[31] = 711


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[32]= new Array();
 choices[32][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[32][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[32][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[32][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[32] = choices[32][1];
 units[32] = "77";
 comments[32] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";
 preguntaids[32] = 694


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[33]= new Array();
 choices[33][0] = "3 pilares";
 choices[33][1] = "4 pilares";
 choices[33][2] = "5 pilares";
 choices[33][3] = "7 pilares";
 answers[33] = choices[33][0];
 units[33] = "17";
 comments[33] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";
 preguntaids[33] = 761


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[34]= "35)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[34][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[34][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[34][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[34] = choices[34][3];
 units[34] = "14";
 comments[34] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";
 preguntaids[34] = 387


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[35]= "36)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[35]= new Array();
 choices[35][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[35][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[35][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[35][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[35] = 670


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[36]= "37)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[36]= new Array();
 choices[36][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[36][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[36][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[36][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[36] = choices[36][2];
 units[36] = "12";
 comments[36] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[36] = 136


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[37]= "38)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[37]= new Array();
 choices[37][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[37][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[37][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[37][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[37] = 526


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[38]= new Array();
 choices[38][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[38][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[38][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[38][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[38] = choices[38][3];
 units[38] = "44";
 comments[38] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[38] = 17


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[39]= "40)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[39]= new Array();
 choices[39][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[39][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[39][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[39][3] = "Todos las anteriores son ciertas.";
 answers[39] = choices[39][3];
 units[39] = "12";
 comments[39] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[39] = 137


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[40]= new Array();
 choices[40][0] = "Quince miembros.";
 choices[40][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[40][2] = "Los miembros que determine el Consejo.";
 choices[40][3] = "Un Presidente y quince miembros.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 299. UNION EUROPEA";
 preguntaids[40] = 299


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[41]= "42)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[41]= new Array();
 choices[41][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[41][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[41][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[41][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[41] = choices[41][2];
 units[41] = "12";
 comments[41] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[41] = 134


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[42]= "43)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[42]= new Array();
 choices[42][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[42][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[42][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[42][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[42] = choices[42][0];
 units[42] = "12";
 comments[42] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";
 preguntaids[42] = 135


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[43]= new Array();
 choices[43][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[43][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[43][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[43][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[43] = choices[43][0];
 units[43] = "15";
 comments[43] = "Id Pregunta: 114. ";
 preguntaids[43] = 114


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[44]= new Array();
 choices[44][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[44][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[44][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[44][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[44] = choices[44][3];
 units[44] = "22";
 comments[44] = "Id Pregunta: 120. ";
 preguntaids[44] = 120


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[45]= "46)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[45]= new Array();
 choices[45][0] = "l Consejo General del Poder Judicial";
 choices[45][1] = "El pleno de Tribunal Constitucional";
 choices[45][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[45][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[45] = choices[45][3];
 units[45] = "1";
 comments[45] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[45] = 181


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[46]= "47)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[46]= new Array();
 choices[46][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[46][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[46][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[46][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[46] = choices[46][3];
 units[46] = "28";
 comments[46] = "Id Pregunta: 735. Estrategia TIC";
 preguntaids[46] = 735


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[47][1] = "El responsable de la custodia de los datos enviados.";
 choices[47][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[47][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[47] = choices[47][3];
 units[47] = "35";
 comments[47] = "Id Pregunta: 631. Junta de Extremadura A1 2015";
 preguntaids[47] = 631


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[48]= "49)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[48]= new Array();
 choices[48][0] = "Bases de datos orientadas a filas";
 choices[48][1] = "Bases de datos orientadas a documentos";
 choices[48][2] = "Bases de datos de clave/valor";
 choices[48][3] = "Bases de datos orientadas a objetos";
 answers[48] = choices[48][0];
 units[48] = "73";
 comments[48] = "Id Pregunta: 100. ";
 preguntaids[48] = 100


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[49]= new Array();
 choices[49][0] = "Un diputado y un senador, cada una de ellas";
 choices[49][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[49][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[49][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 192. CONSTITUCION1978";
 preguntaids[49] = 192


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
 preguntaids[50] = 183


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[51]= "52)  La sede del Parlamento Europeo se encuentra en:";
 choices[51]= new Array();
 choices[51][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[51][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[51][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[51][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[51] = 351


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[52]= new Array();
 choices[52][0] = "El 5 de Octubre de 2015";
 choices[52][1] = "El 15 de Octubre de 2015";
 choices[52][2] = "El 15 de Septiembre de 2015";
 choices[52][3] = "El 2 de Octubre de 2015";
 answers[52] = choices[52][2];
 units[52] = "19";
 comments[52] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[52] = 584


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[53][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[53][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[53][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[53] = 506


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[54]= new Array();
 choices[54][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[54][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[54][2] = "la falta de interoperabilidad.";
 choices[54][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[54] = 285


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[55]= new Array();
 choices[55][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[55][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[55][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[55][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[55] = 205


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[56]= new Array();
 choices[56][0] = "Burn-up chart";
 choices[56][1] = "Arquitectural Skype";
 choices[56][2] = "Burn-down chart";
 choices[56][3] = "Definition of done";
 answers[56] = choices[56][1];
 units[56] = "34, 84";
 comments[56] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[56] = 731


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[57]= new Array();
 choices[57][0] = "732";
 choices[57][1] = "626";
 choices[57][2] = "786";
 choices[57][3] = "360";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[57] = 337


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[58]= "59)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[58]= new Array();
 choices[58][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[58][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[58][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[58][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[58] = 779


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[59]= "60)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[59]= new Array();
 choices[59][0] = "Cuatro millones de euros.";
 choices[59][1] = "Seis millones de euros.";
 choices[59][2] = "Siete millones de euros.";
 choices[59][3] = "Cinco millones de euros.";
 answers[59] = choices[59][1];
 units[59] = "10";
 comments[59] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";
 preguntaids[59] = 483


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[60]= "61)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[60]= new Array();
 choices[60][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[60][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[60][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[60][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[60] = 517


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique la afirmaci&oacute;n falsa:";
 choices[61]= new Array();
 choices[61][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[61][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[61][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[61][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[61] = choices[61][1];
 units[61] = "22";
 comments[61] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[61] = 710


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[62]= "63)  En cuanto al an&aacute;lisis DAFO:";
 choices[62]= new Array();
 choices[62][0] = "Considera detallada y exclusivamente factores internos.";
 choices[62][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[62][2] = "Considera detallada y exclusivamente factores externos.";
 choices[62][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[62] = choices[62][1];
 units[62] = "83";
 comments[62] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[62] = 41


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[63]= new Array();
 choices[63][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[63][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[63][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[63][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[63] = choices[63][2];
 units[63] = "22";
 comments[63] = "Id Pregunta: 129. ";
 preguntaids[63] = 129


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[64]= new Array();
 choices[64][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[64][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[64][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[64][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[64] = choices[64][1];
 units[64] = "22";
 comments[64] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[64] = 278


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[65]= new Array();
 choices[65][0] = "De oficio.";
 choices[65][1] = "A solicitud del interesado.";
 choices[65][2] = "De oficio o a solicitud del interesado.";
 choices[65][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[65] = 665


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[66]= "67)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[66]= new Array();
 choices[66][0] = "Municipios, provincias y CCAA.";
 choices[66][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[66][2] = "En CCAA, 50 provincias y municipios.";
 choices[66][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 258. CONSTITUCION1978";
 preguntaids[66] = 258


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[67]= "68)  Es falso que:";
 choices[67]= new Array();
 choices[67][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[67][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[67][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[67][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[67] = choices[67][1];
 units[67] = "20";
 comments[67] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[67] = 752


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[68]= new Array();
 choices[68][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[68][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[68][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[68][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[68] = choices[68][2];
 units[68] = "26";
 comments[68] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[68] = 553


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[69]= "70)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[69]= new Array();
 choices[69][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[69][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[69][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[69][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[69] = choices[69][1];
 units[69] = "58";
 comments[69] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[69] = 643


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[70]= new Array();
 choices[70][0] = "Ley Org&aacute;nica.";
 choices[70][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[70][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[70][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[70] = 203


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; facilita un ORM?";
 choices[71]= new Array();
 choices[71][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[71][1] = "Conversi&oacute;n de objetos a documentos";
 choices[71][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[71][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[71] = choices[71][0];
 units[71] = "62";
 comments[71] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[71] = 49


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[72]= new Array();
 choices[72][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[72][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[72][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[72][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[72] = choices[72][1];
 units[72] = "63";
 comments[72] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[72] = 33


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[73]= new Array();
 choices[73][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[73][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[73][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[73][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[73] = choices[73][1];
 units[73] = "7";
 comments[73] = "Id Pregunta: 539. LEY 39/2015";
 preguntaids[73] = 539


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[74]= new Array();
 choices[74][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[74][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[74][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[74][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[74] = choices[74][0];
 units[74] = "91";
 comments[74] = "Id Pregunta: 6. AGE A1 2015";
 preguntaids[74] = 6


