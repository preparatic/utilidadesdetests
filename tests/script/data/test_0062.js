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

//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[0]= new Array();
 choices[0][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[0][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[0][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[0][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[0] = choices[0][1];
 units[0] = "101";
 comments[0] = "Id Pregunta: 5. AGE A1 2015";
 preguntaids[0] = 5


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[1]= new Array();
 choices[1][0] = "El 1 de noviembre de 1994.";
 choices[1][1] = "El 1 de noviembre de 1992.";
 choices[1][2] = "El 1 de noviembre de 1995.";
 choices[1][3] = "El 1 de noviembre de 1993.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[1] = 348


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[2]= new Array();
 choices[2][0] = "Consumidores";
 choices[2][1] = "PYMES y Start-ups";
 choices[2][2] = "La Industria";
 choices[2][3] = "Todos los anteriores";
 answers[2] = choices[2][3];
 units[2] = "17";
 comments[2] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[2] = 557


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[3]= "4)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[3]= new Array();
 choices[3][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[3][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[3][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[3][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[3] = 240


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[4]= new Array();
 choices[4][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[4][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[4][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[4][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[4] = choices[4][3];
 units[4] = "34, 84";
 comments[4] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[4] = 724


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[5]= "6)  El pacto fiscal europeo de 2012 incluye:";
 choices[5]= new Array();
 choices[5][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[5][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[5][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[5][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 280. UNION EUROPEA";
 preguntaids[5] = 280


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[6]= "7)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[6]= new Array();
 choices[6][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[6][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[6][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[6][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 187. CONSTITUCION1978";
 preguntaids[6] = 187


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[7]= "8)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[7]= new Array();
 choices[7][0] = "Presencia equilibrada.";
 choices[7][1] = "Presencia paritaria.";
 choices[7][2] = "Presencia consensuada.";
 choices[7][3] = "presencia horizontal.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[7] = 425


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[8]= "9)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[8]= new Array();
 choices[8][0] = "150 trabajadores/as.";
 choices[8][1] = "200 trabajadores/as.";
 choices[8][2] = "250 trabajadores/as.";
 choices[8][3] = "300 trabajadores/as.";
 answers[8] = choices[8][2];
 units[8] = "14";
 comments[8] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";
 preguntaids[8] = 420


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[9]= "10)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[9]= new Array();
 choices[9][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[9][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[9][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[9][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[9] = 775


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[10]= new Array();
 choices[10][0] = "Varios namenodes y varios datanodes por cluster";
 choices[10][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[10][2] = "1 namenode y varios datanodes por cluster";
 choices[10][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 663. ";
 preguntaids[10] = 663


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[11]= "12)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[11]= new Array();
 choices[11][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[11][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[11][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[11][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[11] = 226


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[12][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[12][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[12][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[12] = choices[12][3];
 units[12] = "19";
 comments[12] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[12] = 171


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[13]= "14)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[13]= new Array();
 choices[13][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[13][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[13][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[13][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[13] = 191


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[14]= "15)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[14]= new Array();
 choices[14][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[14][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[14][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[14][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[14] = 800


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[15]= "16)  El sector p&uacute;blico institucional se integra por:";
 choices[15]= new Array();
 choices[15][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[15][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[15][2] = "las Universidades p&uacute;blicas";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][3];
 units[15] = "7";
 comments[15] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[15] = 516


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[16]= "17)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[16]= new Array();
 choices[16][0] = "Los cr&eacute;ditos";
 choices[16][1] = "Las partidas presupuestarias";
 choices[16][2] = "Los derechos";
 choices[16][3] = "Las obligaciones";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[16] = 453


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "Tiene car&aacute;cter facultativo.";
 choices[17][1] = "Tiene car&aacute;cter potestativo. ";
 choices[17][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[17][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[17] = choices[17][1];
 units[17] = "22";
 comments[17] = "Id Pregunta: 127. ";
 preguntaids[17] = 127


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[18]= "19)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[18]= new Array();
 choices[18][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[18][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[18][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[18][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[18] = choices[18][0];
 units[18] = "8";
 comments[18] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[18] = 146


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[19]= "20)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[19][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[19][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[19][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[19] = choices[19][0];
 units[19] = "45";
 comments[19] = "Id Pregunta: 599. Junta de Extremadura A1 2015";
 preguntaids[19] = 599


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[20]= "21)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[20]= new Array();
 choices[20][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[20][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[20][2] = "Los interesados en el procedimiento";
 choices[20][3] = "Las alternativas b) y c) son correctas";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[20] = 826


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[21]= new Array();
 choices[21][0] = "El Ministerio de Hacienda.";
 choices[21][1] = "El Ministerio de Econom&iacute;a.";
 choices[21][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[21][3] = "Ninguna de las respuestas es correcta.";
 answers[21] = choices[21][2];
 units[21] = "10";
 comments[21] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[21] = 470


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[22]= new Array();
 choices[22][0] = "Al menos cada 12 meses";
 choices[22][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[22][2] = "Al menos cada 18 meses";
 choices[22][3] = "Al menos cada 24 meses";
 answers[22] = choices[22][3];
 units[22] = "77";
 comments[22] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[22] = 687


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[23]= "24)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[23]= new Array();
 choices[23][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[23][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[23][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[23][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[23] = 672


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[24]= "25)  El plan nacional de ciudades inteligentes...";
 choices[24]= new Array();
 choices[24][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[24][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[24][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[24][3] = "No existe";
 answers[24] = choices[24][1];
 units[24] = "19";
 comments[24] = "Id Pregunta: 563. Ciudades Inteligentes";
 preguntaids[24] = 563


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[25]= "26)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[25]= new Array();
 choices[25][0] = "20 parlamentarios.";
 choices[25][1] = "29 parlamentarios.";
 choices[25][2] = "18 parlamentarios.";
 choices[25][3] = "23 parlamentarios.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[25] = 366


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[26]= "27)  En qu&eacute; consiste el principio BASE:";
 choices[26]= new Array();
 choices[26][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[26][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[26][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[26][3] = "Todas las anteriores son falsas";
 answers[26] = choices[26][3];
 units[26] = "73";
 comments[26] = "Id Pregunta: 103. ";
 preguntaids[26] = 103


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[27]= "28)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[27]= new Array();
 choices[27][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[27][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[27][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[27][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[27] = choices[27][0];
 units[27] = "12";
 comments[27] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";
 preguntaids[27] = 135


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[28]= new Array();
 choices[28][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[28][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[28][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[28][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[28] = choices[28][0];
 units[28] = "62";
 comments[28] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[28] = 12


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[29]= "30)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[29]= new Array();
 choices[29][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[29][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[29][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[29][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[29] = choices[29][2];
 units[29] = "14";
 comments[29] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[29] = 391


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[30]= "31)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[30]= new Array();
 choices[30][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[30][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[30][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[30][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[30] = choices[30][2];
 units[30] = "50";
 comments[30] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[30] = 633


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[31]= new Array();
 choices[31][0] = "Flexibilidad para variar el servicio o producto";
 choices[31][1] = "Eliminar desperdicios";
 choices[31][2] = "Decidir lo m&aacute;s tarde posible";
 choices[31][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[31] = choices[31][0];
 units[31] = "34";
 comments[31] = "Id Pregunta: 721. Metodologias Lean";
 preguntaids[31] = 721


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[32]= new Array();
 choices[32][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[32][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[32][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[32][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[32] = 849


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[33]= new Array();
 choices[33][0] = "Eric Ries";
 choices[33][1] = "Steve Blank";
 choices[33][2] = "Tom Poppendieck";
 choices[33][3] = "Alexander Osterwalder";
 answers[33] = choices[33][2];
 units[33] = "34";
 comments[33] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[33] = 720


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[34]= "35)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[34]= new Array();
 choices[34][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[34][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[34][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[34][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[34] = choices[34][0];
 units[34] = "15";
 comments[34] = "Id Pregunta: 111. ";
 preguntaids[34] = 111


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[35]= "36)  El cr&eacute;dito presupuestario es...";
 choices[35]= new Array();
 choices[35][0] = "El sujeto que realiza el gasto";
 choices[35][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[35][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[35][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";
 preguntaids[35] = 451


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[36]= "37)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[36]= new Array();
 choices[36][0] = "Seguridad Social y AEAT";
 choices[36][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[36][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[36][3] = "Todos los anteriores";
 answers[36] = choices[36][3];
 units[36] = "19";
 comments[36] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[36] = 596


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[37]= new Array();
 choices[37][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[37][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[37][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[37][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[37] = 389


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[38]= "39)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[38]= new Array();
 choices[38][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[38][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[38][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[38][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[38] = choices[38][2];
 units[38] = "45";
 comments[38] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[38] = 601


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[39]= new Array();
 choices[39][0] = "Por Real Decreto.";
 choices[39][1] = "Por Orden del Ministerio del Interior.";
 choices[39][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[39][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[39] = 230


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[40]= "41)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[40]= new Array();
 choices[40][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[40][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[40][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[40][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[40] = choices[40][3];
 units[40] = "26";
 comments[40] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[40] = 552


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[41]= "42)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[41]= new Array();
 choices[41][0] = "el Gobierno de la Naci&oacute;n";
 choices[41][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[41][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[41][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[41] = 773


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[42]= new Array();
 choices[42][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[42][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[42][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[42][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[42] = choices[42][0];
 units[42] = "48";
 comments[42] = "Id Pregunta: 92. AGE A1 2015";
 preguntaids[42] = 92


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[43]= new Array();
 choices[43][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[43][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[43][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[43][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[43] = 332


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[44]= "45)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[44]= new Array();
 choices[44][0] = "Estrasburgo.";
 choices[44][1] = "Bruselas.";
 choices[44][2] = "Luxemburgo.";
 choices[44][3] = "Holanda.";
 answers[44] = choices[44][2];
 units[44] = "5";
 comments[44] = "Id Pregunta: 295. UNION EUROPEA";
 preguntaids[44] = 295


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[45]= new Array();
 choices[45][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[45][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[45][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[45][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[45] = 201


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[46]= "47)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[46]= new Array();
 choices[46][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[46][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[46][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[46][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[46] = choices[46][1];
 units[46] = "48";
 comments[46] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[46] = 615


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique la afirmaci&oacute;n falsa:";
 choices[47]= new Array();
 choices[47][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[47][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[47][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[47][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[47] = choices[47][1];
 units[47] = "22";
 comments[47] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[47] = 710


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[48]= new Array();
 choices[48][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[48][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[48][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[48][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[48] = choices[48][3];
 units[48] = "56";
 comments[48] = "Id Pregunta: 635. Junta de Extremadura A1 2015";
 preguntaids[48] = 635


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[49]= "50)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[49]= new Array();
 choices[49][0] = "El Jefe del Estado.";
 choices[49][1] = "El Tribunal Constitucional.";
 choices[49][2] = "El Congreso de los Diputados.";
 choices[49][3] = "Las Cortes Generales.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[49] = 235


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Diagrama de clases";
 choices[50][1] = "Diagrama de componentes";
 choices[50][2] = "Diagrama de estructura";
 choices[50][3] = "Diagrama de paquetes";
 answers[50] = choices[50][0];
 units[50] = "91";
 comments[50] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[50] = 88


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[51]= new Array();
 choices[51][0] = "23";
 choices[51][1] = "20";
 choices[51][2] = "14";
 choices[51][3] = "18";
 answers[51] = choices[51][1];
 units[51] = "5";
 comments[51] = "Id Pregunta: 343. UNION EUROPEA";
 preguntaids[51] = 343


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[52]= new Array();
 choices[52][0] = "Indirecta.";
 choices[52][1] = "Directa.";
 choices[52][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[52][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[52] = 388


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[53][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[53][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[53][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[53] = 507


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[54]= new Array();
 choices[54][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[54][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[54][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[54][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[54] = 311


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ala la correcta:";
 choices[55]= new Array();
 choices[55][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[55][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[55][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[55][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[55] = choices[55][1];
 units[55] = "7";
 comments[55] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[55] = 543


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[56]= new Array();
 choices[56][0] = "Se definen iteraciones";
 choices[56][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[56][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[56][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[56] = choices[56][1];
 units[56] = "34, 84";
 comments[56] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[56] = 732


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[57]= "58)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[57]= new Array();
 choices[57][0] = "Cifrada";
 choices[57][1] = "Conjunta";
 choices[57][2] = "Sistem&aacute;tica";
 choices[57][3] = "Todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "10";
 comments[57] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";
 preguntaids[57] = 452


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[58]= "59)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "Almacenamiento orientado a columnas";
 choices[58][1] = "Framework MapReduce";
 choices[58][2] = "OLTP";
 choices[58][3] = "Bases de datos clave-valor";
 answers[58] = choices[58][2];
 units[58] = "73";
 comments[58] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[58] = 93


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[59]= new Array();
 choices[59][0] = "Al Gobierno de la naci&oacute;n";
 choices[59][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[59][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[59][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[59] = 147


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[60]= "61)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[60]= new Array();
 choices[60][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[60][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[60][2] = "Se basan en sistemas distribuidos";
 choices[60][3] = "Se basan en el modelo de datos relacional";
 answers[60] = choices[60][2];
 units[60] = "73";
 comments[60] = "Id Pregunta: 102. ";
 preguntaids[60] = 102


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[61]= "62)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[61]= new Array();
 choices[61][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[61][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[61][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[61][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[61] = choices[61][3];
 units[61] = "101";
 comments[61] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[61] = 57


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[62]= "63)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[62]= new Array();
 choices[62][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[62][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[62][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[62][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[62] = choices[62][2];
 units[62] = "7";
 comments[62] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[62] = 512


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[63]= "64)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[63]= new Array();
 choices[63][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[63][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[63][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[63][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[63] = choices[63][2];
 units[63] = "85";
 comments[63] = "Id Pregunta: 645. Junta de Extremadura A1 2015";
 preguntaids[63] = 645


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[64]= "65)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[64]= new Array();
 choices[64][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[64][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[64][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[64][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[64] = choices[64][3];
 units[64] = "7";
 comments[64] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[64] = 530


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[65]= new Array();
 choices[65][0] = "Tres meses.";
 choices[65][1] = "Nueve meses.";
 choices[65][2] = "Cuatro meses.";
 choices[65][3] = "Seis meses.";
 answers[65] = choices[65][0];
 units[65] = "10";
 comments[65] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";
 preguntaids[65] = 469


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[66]= new Array();
 choices[66][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[66][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[66][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[66][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[66] = choices[66][3];
 units[66] = "77";
 comments[66] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[66] = 688


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[67]= new Array();
 choices[67][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[67][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[67][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[67][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[67] = choices[67][1];
 units[67] = "34, 84";
 comments[67] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[67] = 726


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[68]= new Array();
 choices[68][0] = "las Cortes generales.";
 choices[68][1] = "los partidos pol&iacute;ticos.";
 choices[68][2] = "los sindicatos.";
 choices[68][3] = "las Comunidades Aut&oacute;nomas.";
 answers[68] = choices[68][1];
 units[68] = "1";
 comments[68] = "Id Pregunta: 225. CONSTITUCION1978";
 preguntaids[68] = 225


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[69]= "70)  Son bases de datos NoSQL:";
 choices[69]= new Array();
 choices[69][0] = "MongoDB y Maria DB";
 choices[69][1] = "HBase y Dynamo";
 choices[69][2] = "MariaDB, Cassandra y BigTable";
 choices[69][3] = "La A) y la C)";
 answers[69] = choices[69][1];
 units[69] = "73";
 comments[69] = "Id Pregunta: 104. ";
 preguntaids[69] = 104


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[70]= "71)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[70]= new Array();
 choices[70][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[70][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[70][2] = "La protecci&oacute;n del medio ambiente.";
 choices[70][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[70] = choices[70][0];
 units[70] = "22";
 comments[70] = "Id Pregunta: 125. ";
 preguntaids[70] = 125


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[71]= "72)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[71]= new Array();
 choices[71][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[71][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[71][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[71][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[71] = 517


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[72]= new Array();
 choices[72][0] = "La CETIC";
 choices[72][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[72][2] = "La DTIC";
 choices[72][3] = "Ninguno de los anteriores";
 answers[72] = choices[72][1];
 units[72] = "19";
 comments[72] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[72] = 587


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[73]= "74)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[73]= new Array();
 choices[73][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[73][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[73][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[73][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[73] = choices[73][3];
 units[73] = "77";
 comments[73] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[73] = 48


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[74]= "75)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[74]= new Array();
 choices[74][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[74][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[74][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[74][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[74] = 494


