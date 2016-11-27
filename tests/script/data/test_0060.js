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

//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[0]= "1)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[0]= new Array();
 choices[0][0] = "El derecho a la propiedad privada.";
 choices[0][1] = "El derecho de asociaci&oacute;n.";
 choices[0][2] = "El derecho de fundaci&oacute;n.";
 choices[0][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[1]= "2)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[1]= new Array();
 choices[1][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[1][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[1][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[1][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[2]= new Array();
 choices[2][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[2][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[2][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[2][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[2] = choices[2][1];
 units[2] = "7";
 comments[2] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[3]= new Array();
 choices[3][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[3][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[3][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[3][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[3] = choices[3][3];
 units[3] = "66";
 comments[3] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[4]= new Array();
 choices[4][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[4][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[4][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[4][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[5]= "6)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[5]= new Array();
 choices[5][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[5][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[5][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[5][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 758. Ley 40/2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[6]= new Array();
 choices[6][0] = "Categor&iacute;a b&aacute;sica";
 choices[6][1] = "Categor&iacute;a media";
 choices[6][2] = "Categor&iacute;a alta";
 choices[6][3] = "Categor&iacute;a media y alta";
 answers[6] = choices[6][2];
 units[6] = "46";
 comments[6] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[7]= new Array();
 choices[7][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[7][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[7][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[7][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[8]= "9)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[8]= new Array();
 choices[8][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[8][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[8][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[8][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[9]= "10)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[9]= new Array();
 choices[9][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[9][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[9][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[9][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[9] = choices[9][2];
 units[9] = "7";
 comments[9] = "Id Pregunta: 510. LEY 39/2015";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[10]= "11)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[10]= new Array();
 choices[10][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[10][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[10][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[10][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[10] = choices[10][0];
 units[10] = "12";
 comments[10] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[11]= "12)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[11]= new Array();
 choices[11][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[11][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[11][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[11][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[12]= "13)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[12]= new Array();
 choices[12][0] = "La Ley Org&aacute;nica 2/2011";
 choices[12][1] = "La Ley Org&aacute;nica 2/2012";
 choices[12][2] = "La Ley Org&aacute;nica 3/2012";
 choices[12][3] = "La Ley Org&aacute;nica 2/2002";
 answers[12] = choices[12][1];
 units[12] = "12";
 comments[12] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[13]= "14)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[13]= new Array();
 choices[13][0] = "Ejecutivo";
 choices[13][1] = "Limitativo";
 choices[13][2] = "Estimativo";
 choices[13][3] = "Progresivo";
 answers[13] = choices[13][1];
 units[13] = "10";
 comments[13] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[14]= new Array();
 choices[14][0] = "Maximizar el valor para los clientes";
 choices[14][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[14][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[14][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[14] = choices[14][3];
 units[14] = "34";
 comments[14] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[15]= new Array();
 choices[15][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[15][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[15][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[15][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[15] = choices[15][3];
 units[15] = "7";
 comments[15] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[16]= "17)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[16]= new Array();
 choices[16][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[16][1] = "Anteriormente se denominaba Sonar.";
 choices[16][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[16][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[16] = choices[16][2];
 units[16] = "92";
 comments[16] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[17]= "18)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[17]= new Array();
 choices[17][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[17][1] = "garantizar la conservaci&oacute;n del documento";
 choices[17][2] = "garantizar la autenticidad del documento";
 choices[17][3] = "garantizar la integridad del documento";
 answers[17] = choices[17][0];
 units[17] = "7";
 comments[17] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[18]= new Array();
 choices[18][0] = "La Ley General Tributaria.";
 choices[18][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[18][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[18][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[19]= new Array();
 choices[19][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[19][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[19][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[19][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[19] = choices[19][3];
 units[19] = "10";
 comments[19] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[20]= "21)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[20]= new Array();
 choices[20][0] = "Fat y Ntfs.";
 choices[20][1] = "Extfat y Fat.";
 choices[20][2] = "Fat y Nfst.";
 choices[20][3] = "ext2fs y Ntfs.";
 answers[20] = choices[20][0];
 units[20] = "58";
 comments[20] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[21]= "22)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[21]= new Array();
 choices[21][0] = "De ocho a&ntilde;os.";
 choices[21][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "No existe un l&iacute;mite.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[22]= "23)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[22]= new Array();
 choices[22][0] = "A la persona demandante.";
 choices[22][1] = "A la persona demandada.";
 choices[22][2] = "Al &oacute;rgano judicial.";
 choices[22][3] = "Al &oacute;rgano administrativo.";
 answers[22] = choices[22][1];
 units[22] = "14";
 comments[22] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[23]= "24)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[23]= new Array();
 choices[23][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[23][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[23][2] = "a y b son correctas";
 choices[23][3] = "a y b son incorrectas";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; facilita un ORM?";
 choices[24]= new Array();
 choices[24][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[24][1] = "Conversi&oacute;n de objetos a documentos";
 choices[24][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[24][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[24] = choices[24][0];
 units[24] = "62";
 comments[24] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[25]= new Array();
 choices[25][0] = "Selenium";
 choices[25][1] = "JUnit";
 choices[25][2] = "Jenkins";
 choices[25][3] = "JMeter";
 answers[25] = choices[25][2];
 units[25] = "92";
 comments[25] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[26]= "27)  Big Data:";
 choices[26]= new Array();
 choices[26][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[26][1] = "No puede emplearse para tratar datos no estructurados";
 choices[26][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][3];
 units[26] = "73";
 comments[26] = "Id Pregunta: 109. ";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[27]= "28)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[27]= new Array();
 choices[27][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[27][1] = "La libertad sexual y religiosa.";
 choices[27][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[27][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[27] = choices[27][3];
 units[27] = "1";
 comments[27] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[28]= "29)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[28]= new Array();
 choices[28][0] = "Los cr&eacute;ditos";
 choices[28][1] = "Las partidas presupuestarias";
 choices[28][2] = "Los derechos";
 choices[28][3] = "Las obligaciones";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[29]= new Array();
 choices[29][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[29][1] = "El Gobierno.";
 choices[29][2] = "El Presidente del Gobierno.";
 choices[29][3] = "El Consejo de Ministros.";
 answers[29] = choices[29][1];
 units[29] = "10";
 comments[29] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[30]= new Array();
 choices[30][0] = "Ley 3/2015";
 choices[30][1] = "Ley 6/2007";
 choices[30][2] = "Ley 5/1984";
 choices[30][3] = "Ley 5/2006";
 answers[30] = choices[30][0];
 units[30] = "22";
 comments[30] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[31]= "32)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[31]= new Array();
 choices[31][0] = "Cinco a&ntilde;os.";
 choices[31][1] = "Cuatro a&ntilde;os.";
 choices[31][2] = "Tres a&ntilde;os.";
 choices[31][3] = "Seis meses.";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[32]= "33)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[32]= new Array();
 choices[32][0] = "Subsecretario";
 choices[32][1] = "Subdirector general";
 choices[32][2] = "Secretario de Estado";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[33]= "34)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[33]= new Array();
 choices[33][0] = "Gran volumen de informaci&oacute;n";
 choices[33][1] = "Gran variedad de datos";
 choices[33][2] = "Se analizan datos a gran velocidad";
 choices[33][3] = "Todas las anteriores son verdaderas";
 answers[33] = choices[33][3];
 units[33] = "73";
 comments[33] = "Id Pregunta: 105. ";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[34]= "35)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[34]= new Array();
 choices[34][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[34][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[34][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[34][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[34] = choices[34][2];
 units[34] = "57";
 comments[34] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[35]= new Array();
 choices[35][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[35][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[35][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[35][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[35] = choices[35][0];
 units[35] = "19";
 comments[35] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[36]= new Array();
 choices[36][0] = "Cuatro.";
 choices[36][1] = "Una.";
 choices[36][2] = "Cinco.";
 choices[36][3] = "Nueve.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[37]= new Array();
 choices[37][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[37][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[37][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[37][3] = "Todas son correctas.";
 answers[37] = choices[37][0];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[38]= "39)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[38]= new Array();
 choices[38][0] = "un art&iacute;culo";
 choices[38][1] = "dos art&iacute;culos";
 choices[38][2] = "tres art&iacute;culos";
 choices[38][3] = "cuatro art&iacute;culos";
 answers[38] = choices[38][1];
 units[38] = "7";
 comments[38] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[39]= "40)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[39]= new Array();
 choices[39][0] = "Conformidad";
 choices[39][1] = "Responsabilidad";
 choices[39][2] = "Adquisici&oacute;n";
 choices[39][3] = "Desempe&ntilde;o";
 answers[39] = choices[39][0];
 units[39] = "26";
 comments[39] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[40]= "41)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[40]= new Array();
 choices[40][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[40][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[40][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[40][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[40] = choices[40][2];
 units[40] = "26";
 comments[40] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[41]= "42)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[41]= new Array();
 choices[41][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[41][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[41][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[41][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[42]= "43)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[42]= new Array();
 choices[42][0] = "20 parlamentarios.";
 choices[42][1] = "29 parlamentarios.";
 choices[42][2] = "18 parlamentarios.";
 choices[42][3] = "23 parlamentarios.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[43]= "44)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[43]= new Array();
 choices[43][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[43][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[43][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[43][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[43] = choices[43][3];
 units[43] = "10";
 comments[43] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[44]= "45)  La recusaci&oacute;n pueden promoverla...";
 choices[44]= new Array();
 choices[44][0] = "Cualquier &oacute;rgano";
 choices[44][1] = "El interesado";
 choices[44][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[44][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[44] = choices[44][0];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[45][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[45][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[45][3] = "todas son correctas";
 answers[45] = choices[45][1];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[46]= "47)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[46][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[46][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[46][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[46] = choices[46][2];
 units[46] = "101";
 comments[46] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[47]= new Array();
 choices[47][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[47][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[47][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[47][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[47] = choices[47][0];
 units[47] = "73";
 comments[47] = "Id Pregunta: 654. ";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[48]= "49)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[48]= new Array();
 choices[48][0] = "2.400 euros";
 choices[48][1] = "4.000 euros";
 choices[48][2] = "3.200 euros";
 choices[48][3] = "1.600 euros";
 answers[48] = choices[48][1];
 units[48] = "37";
 comments[48] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[49]= "50)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[49]= new Array();
 choices[49][0] = "los Secretarios de Estado";
 choices[49][1] = "los Ministros";
 choices[49][2] = "los Subsecretarios";
 choices[49][3] = "los Secretarios generales";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[50]= new Array();
 choices[50][0] = "Crecimiento inteligente.";
 choices[50][1] = "Crecimiento inclusivo.";
 choices[50][2] = "Crecimiento sostenible.";
 choices[50][3] = "Crecimiento integrador.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[51]= "52)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[51]= new Array();
 choices[51][0] = "En qu&eacute; nos gastamos el dinero";
 choices[51][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[51][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[51][3] = "Qui&eacute;n se gasta el dinero.";
 answers[51] = choices[51][0];
 units[51] = "10";
 comments[51] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[52]= "53)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[52]= new Array();
 choices[52][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[52][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[52][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[52][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[53]= "54)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[53]= new Array();
 choices[53][0] = "Ejecutivo";
 choices[53][1] = "Limitativo";
 choices[53][2] = "Estimativo";
 choices[53][3] = "Progresivo";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[54]= "55)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[54]= new Array();
 choices[54][0] = "El Presidente del Consejo Europeo.";
 choices[54][1] = "La Comisi&oacute;n.";
 choices[54][2] = "El Consejo.";
 choices[54][3] = "El Parlamento Europeo.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[55]= new Array();
 choices[55][0] = "Siempre en formato electr&oacute;nico.";
 choices[55][1] = "Siempre en formato papel.";
 choices[55][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[55][3] = "La ley no regula el formato del expediente.";
 answers[55] = choices[55][0];
 units[55] = "7";
 comments[55] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[56]= new Array();
 choices[56][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[56][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[56][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[56][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[56] = choices[56][3];
 units[56] = "56";
 comments[56] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[57]= new Array();
 choices[57][0] = "El Presidente del Senado";
 choices[57][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[57][2] = "El Presidente del Gobierno";
 choices[57][3] = "El Presidente de las Cortes Generales";
 answers[57] = choices[57][2];
 units[57] = "1";
 comments[57] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[58]= new Array();
 choices[58][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[58][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[58][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[58][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[58] = choices[58][1];
 units[58] = "22";
 comments[58] = "Id Pregunta: 122. ";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[59]= "60)  El sector p&uacute;blico institucional se integra por:";
 choices[59]= new Array();
 choices[59][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[59][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[59][2] = "las Universidades p&uacute;blicas";
 choices[59][3] = "todas son correctas";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[60]= "61)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[60]= new Array();
 choices[60][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[60][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[60][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[60][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[60] = choices[60][2];
 units[60] = "12";
 comments[60] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[61]= "62)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[61]= new Array();
 choices[61][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[61][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[61][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[61][3] = "todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[62]= new Array();
 choices[62][0] = "Cifrada";
 choices[62][1] = "Conjunta";
 choices[62][2] = "Sistem&aacute;tica";
 choices[62][3] = "Todas son correctas";
 answers[62] = choices[62][3];
 units[62] = "10";
 comments[62] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[63]= "64)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[63]= new Array();
 choices[63][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[63][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[63][2] = "Ministerio de la Presidencia";
 choices[63][3] = "Ministerio de Fomento";
 answers[63] = choices[63][2];
 units[63] = "22";
 comments[63] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[64]= new Array();
 choices[64][0] = "No, en ning&uacute;n caso.";
 choices[64][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[64][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[64][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[64] = choices[64][3];
 units[64] = "1";
 comments[64] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[65]= new Array();
 choices[65][0] = "Al Gobierno de la naci&oacute;n";
 choices[65][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[65][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[65][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[66]= new Array();
 choices[66][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[66][1] = "Directiva 2004/113/CE del Consejo.";
 choices[66][2] = "Todas son correctas.";
 choices[66][3] = "Todas son falsas.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[67]= "68)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[67]= new Array();
 choices[67][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[67][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[67][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[67][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[67] = choices[67][2];
 units[67] = "85";
 comments[67] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[68]= new Array();
 choices[68][0] = "Los principios rectores";
 choices[68][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[68][2] = "Los hitos para su desarrollo gradual";
 choices[68][3] = "Todos los anteriores";
 answers[68] = choices[68][3];
 units[68] = "19";
 comments[68] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[69]= "70)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[69]= new Array();
 choices[69][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[69][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[69][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[69][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[69] = choices[69][1];
 units[69] = "26";
 comments[69] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[70]= "71)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[70]= new Array();
 choices[70][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[70][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[70][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[70][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[70] = choices[70][2];
 units[70] = "7";
 comments[70] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[71]= "72)  Son bases de datos NoSQL orientadas a objetos:";
 choices[71]= new Array();
 choices[71][0] = "GemStone";
 choices[71][1] = "Zope Object DB";
 choices[71][2] = "Las dos anteriores";
 choices[71][3] = "Solo B)";
 answers[71] = choices[71][2];
 units[71] = "73";
 comments[71] = "Id Pregunta: 107. ";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[72]= new Array();
 choices[72][0] = "Indirecta.";
 choices[72][1] = "Directa.";
 choices[72][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[72][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[73]= "74)  Los criptosistemas pueden clasificarse en:";
 choices[73]= new Array();
 choices[73][0] = "Concretos, Estables e Inestables.";
 choices[73][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[73][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[73][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[73] = choices[73][3];
 units[73] = "76";
 comments[73] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[74]= "75)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[74]= new Array();
 choices[74][0] = "El Tratado de Roma, 1957.";
 choices[74][1] = "El Acta &Uacute;nica Europea.";
 choices[74][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[74][3] = "Ninguna es correcta.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


