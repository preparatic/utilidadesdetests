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

//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[0]= "1)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[0]= new Array();
 choices[0][0] = "la Administraci&oacute;n General del Estado";
 choices[0][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[0][2] = "las Entidades Locales";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][3];
 units[0] = "7";
 comments[0] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[1]= new Array();
 choices[1][0] = "a) Los cuatro ejercicios siguientes.";
 choices[1][1] = "b) El ejercicio siguiente.";
 choices[1][2] = "c) Los dos ejercicios siguientes.";
 choices[1][3] = "d) Los tres ejercicios siguientes.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[2]= new Array();
 choices[2][0] = "ISO/IEC 31000";
 choices[2][1] = "ISO/IEC 14000";
 choices[2][2] = "ISO/IEC 38500";
 choices[2][3] = "ISO/IEC 18000";
 answers[2] = choices[2][2];
 units[2] = "26";
 comments[2] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[3]= new Array();
 choices[3][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[3][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[3][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[3][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[3] = choices[3][2];
 units[3] = "7";
 comments[3] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[4]= new Array();
 choices[4][0] = "Ley Org&aacute;nica.";
 choices[4][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[4][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[4][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[4] = choices[4][2];
 units[4] = "1";
 comments[4] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[5]= "6)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[5]= new Array();
 choices[5][0] = "El Tratado de Maastrich.";
 choices[5][1] = "El Tratado de Amsterdam.";
 choices[5][2] = "El Tratado de Par&iacute;s.";
 choices[5][3] = "El Tratado de Roma.";
 answers[5] = choices[5][3];
 units[5] = "5";
 comments[5] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[6]= "7)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[6]= new Array();
 choices[6][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[6][1] = "Protecci&oacute;n de su salud.";
 choices[6][2] = "Ninguna es correcta.";
 choices[6][3] = "A y B son correctas.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[7]= new Array();
 choices[7][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[7][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[7][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[7][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[7] = choices[7][1];
 units[7] = "77";
 comments[7] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[8]= new Array();
 choices[8][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[8][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[8][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[8][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[8] = choices[8][2];
 units[8] = "43";
 comments[8] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[9]= new Array();
 choices[9][0] = "A nivel de secci&oacute;n de programa.";
 choices[9][1] = "A nivel de grupo de programa.";
 choices[9][2] = "Ninguna de las respuestas es correcta.";
 choices[9][3] = "A nivel de programa.";
 answers[9] = choices[9][3];
 units[9] = "10";
 comments[9] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[10]= new Array();
 choices[10][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[10][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[10][2] = "A) y B) son verdaderas";
 choices[10][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 106. ";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[11]= "12)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[11]= new Array();
 choices[11][0] = "Est&aacute; desarrollado en Java.";
 choices[11][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[11][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[11][3] = "Todas las afirmaciones son correctas.";
 answers[11] = choices[11][2];
 units[11] = "92";
 comments[11] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[12]= new Array();
 choices[12][0] = "Quince miembros.";
 choices[12][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[12][2] = "Los miembros que determine el Consejo.";
 choices[12][3] = "Un Presidente y quince miembros.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[13]= "14)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[13]= new Array();
 choices[13][0] = "Al Gobierno.";
 choices[13][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[13][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[13][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[14]= "15)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[14]= new Array();
 choices[14][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[14][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[14][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[14][3] = "todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 759. Ley 40/2015";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[15]= new Array();
 choices[15][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[15][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[15][2] = "Gestionar el Registro de Operadores.";
 choices[15][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[15] = choices[15][3];
 units[15] = "121";
 comments[15] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[16]= "17)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[16]= new Array();
 choices[16][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[16][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[16][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[16][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[16] = choices[16][0];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[17]= new Array();
 choices[17][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[17][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[17][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[17][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[17] = choices[17][2];
 units[17] = "26";
 comments[17] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[18]= "19)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[18]= new Array();
 choices[18][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[18][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[18][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[18][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[18] = choices[18][2];
 units[18] = "89";
 comments[18] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[19]= new Array();
 choices[19][0] = "Las Cortes Generales.";
 choices[19][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[19][2] = "El Gobierno.";
 choices[19][3] = "El Congreso de los Diputados.";
 answers[19] = choices[19][0];
 units[19] = "10";
 comments[19] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[20]= new Array();
 choices[20][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[20][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[20][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[20][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[20] = choices[20][1];
 units[20] = "101";
 comments[20] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[21]= "22)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[21]= new Array();
 choices[21][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[21][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[21][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[21][3] = "Todas las respuestas son correctas.";
 answers[21] = choices[21][1];
 units[21] = "101";
 comments[21] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[22]= "23)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[22]= new Array();
 choices[22][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[22][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[22][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[22][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[22] = choices[22][1];
 units[22] = "14";
 comments[22] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[23]= "24)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[23]= new Array();
 choices[23][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[23][1] = "mediante resoluci&oacute;n judicial especial";
 choices[23][2] = "&uacute;nicamente mediante poder notarial";
 choices[23][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[24]= new Array();
 choices[24][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[24][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[24][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[24][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[25]= "26)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[25]= new Array();
 choices[25][0] = "Cifrado de las comunicaciones";
 choices[25][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[25][2] = "Registro de los accesos";
 choices[25][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[25] = choices[25][1];
 units[25] = "35";
 comments[25] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[26]= "27)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[26]= new Array();
 choices[26][0] = "los Subsecretarios y los Secretarios generales";
 choices[26][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[26][2] = "los Secretarios de Estado y los Directores generales";
 choices[26][3] = "los Ministros y los Secretarios de Estado";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta:";
 choices[27]= new Array();
 choices[27][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[27][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[27][2] = "A y B son correctas.";
 choices[27][3] = "A y B son falsas.";
 answers[27] = choices[27][2];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[28]= new Array();
 choices[28][0] = "Reducir el gasto p&uacute;blico.";
 choices[28][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[28][2] = "Reducir el endeudamiento neto.";
 choices[28][3] = "Al Fondo de Contingencia.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[29]= "30)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[29]= new Array();
 choices[29][0] = "Director General";
 choices[29][1] = "Secretario general";
 choices[29][2] = "Subdirector general";
 choices[29][3] = "Subsecretario";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[30]= "31)  Son proyectos de Apache relacionados con Big Data:";
 choices[30]= new Array();
 choices[30][0] = "Hadoop";
 choices[30][1] = "Spark";
 choices[30][2] = "A) y B)";
 choices[30][3] = "Niguno de los anteriores";
 answers[30] = choices[30][2];
 units[30] = "73";
 comments[30] = "Id Pregunta: 108. ";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[31]= new Array();
 choices[31][0] = "Al Gobierno de la naci&oacute;n";
 choices[31][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[31][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[31][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[31] = choices[31][3];
 units[31] = "7";
 comments[31] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[32]= new Array();
 choices[32][0] = "El Tratado de Lisboa";
 choices[32][1] = "El Tratado de Amsterdam";
 choices[32][2] = "El Tratado de Niza";
 choices[32][3] = "El Acta &Uacute;nica Europea";
 answers[32] = choices[32][1];
 units[32] = "15";
 comments[32] = "Id Pregunta: 115. ";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[33]= "34)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[33]= new Array();
 choices[33][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[33][1] = "Static &amp; Active process for REsolution Bank.";
 choices[33][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[33][3] = "Super Active REsponse for Banks";
 answers[33] = choices[33][0];
 units[33] = "12";
 comments[33] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[34]= "35)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[34]= new Array();
 choices[34][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[34][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[34][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[34][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[34] = choices[34][3];
 units[34] = "28";
 comments[34] = "Id Pregunta: 733. Estrategia TIC";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[35]= "36)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[35]= new Array();
 choices[35][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[35][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[35][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[35][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[35] = choices[35][2];
 units[35] = "26";
 comments[35] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a los servicios territoriales es correcto:";
 choices[36]= new Array();
 choices[36][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[36][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[36][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[36][3] = "ninguna es correcta";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[37]= new Array();
 choices[37][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[37][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[37][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[37][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[37] = choices[37][0];
 units[37] = "86";
 comments[37] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[38]= "39)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[38]= new Array();
 choices[38][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[38][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[38][2] = "el Ministerio del Interior";
 choices[38][3] = "la Administraci&oacute;n General del Estado";
 answers[38] = choices[38][0];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[39]= new Array();
 choices[39][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[39][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[39][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[39][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "14";
 comments[39] = "Id Pregunta: 680. Pensiones";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[40]= new Array();
 choices[40][0] = "Transferencias de cr&eacute;dito.";
 choices[40][1] = "Incorporaciones de cr&eacute;dito.";
 choices[40][2] = "Imputaciones de cr&eacute;dito.";
 choices[40][3] = "Ampliaciones de cr&eacute;dito.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[41]= "42)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[41]= new Array();
 choices[41][0] = "Gesti&oacute;n de la disponibilidad";
 choices[41][1] = "Gesti&oacute;n de la demanda";
 choices[41][2] = "Gesti&oacute;n de entregas";
 choices[41][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[41] = choices[41][0];
 units[41] = "101";
 comments[41] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[42]= "43)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[42]= new Array();
 choices[42][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[42][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[42][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[42][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[42] = choices[42][2];
 units[42] = "85";
 comments[42] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[43]= "44)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[43]= new Array();
 choices[43][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[43][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[43][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[43][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[44]= new Array();
 choices[44][0] = "Se dejan listos los entornos de desarrollo";
 choices[44][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[44][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[44][3] = "Todas las anteriores son correctas";
 answers[44] = choices[44][3];
 units[44] = "34, 84";
 comments[44] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[45]= "46)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[45]= new Array();
 choices[45][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[45][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[45][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[45][3] = "Todos los anteriores";
 answers[45] = choices[45][3];
 units[45] = "19";
 comments[45] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[46]= "47)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[46]= new Array();
 choices[46][0] = "l Consejo General del Poder Judicial";
 choices[46][1] = "El pleno de Tribunal Constitucional";
 choices[46][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[46][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[47]= "48)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[47]= new Array();
 choices[47][0] = "De los interesados en el procedimiento";
 choices[47][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[47][2] = "Disposiciones generales";
 choices[47][3] = "De los actos administrativos";
 answers[47] = choices[47][2];
 units[47] = "7";
 comments[47] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[48]= new Array();
 choices[48][0] = "De 1a  4 ";
 choices[48][1] = "De 3 a  7 ";
 choices[48][2] = "De 5 a  9";
 choices[48][3] = "De 7 a 11";
 answers[48] = choices[48][2];
 units[48] = "34, 84";
 comments[48] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[49]= "50)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[49]= new Array();
 choices[49][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[49][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[49][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[49][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[49] = choices[49][0];
 units[49] = "10";
 comments[49] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[50]= "51)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[50]= new Array();
 choices[50][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[50][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[50][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[50][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[50] = choices[50][0];
 units[50] = "35";
 comments[50] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[51]= "52)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[51]= new Array();
 choices[51][0] = "El derecho a la propiedad privada.";
 choices[51][1] = "El derecho de asociaci&oacute;n.";
 choices[51][2] = "El derecho de fundaci&oacute;n.";
 choices[51][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[52]= new Array();
 choices[52][0] = "De los derechos y deberes fundamentales.";
 choices[52][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[52][2] = "Derechos y libertades.";
 choices[52][3] = "De la Corona.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[53]= new Array();
 choices[53][0] = "Art&iacute;culo 70.";
 choices[53][1] = "Art&iacute;culo 54.";
 choices[53][2] = "Articulo 62.";
 choices[53][3] = "Articulo 55. 5.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[54]= "55)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[54]= new Array();
 choices[54][0] = "Cabr&aacute; recurso de alzada";
 choices[54][1] = "Cabr&aacute; el nuevo protesto";
 choices[54][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[54][3] = "No cabr&aacute; recurso alguno";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la respuesta correcta:";
 choices[55]= new Array();
 choices[55][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[55][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[55][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[55][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[55] = choices[55][0];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[56]= new Array();
 choices[56][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[56][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[56][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[56][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[56] = choices[56][1];
 units[56] = "43";
 comments[56] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[57]= new Array();
 choices[57][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[57][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[57][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[57][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[57] = choices[57][1];
 units[57] = "7";
 comments[57] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[58]= new Array();
 choices[58][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[58][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[58][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[58][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[59]= new Array();
 choices[59][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[59][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[59][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[59][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[59] = choices[59][1];
 units[59] = "22";
 comments[59] = "Id Pregunta: 122. ";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[60]= "61)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[60]= new Array();
 choices[60][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[60][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[60][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[60][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[61]= new Array();
 choices[61][0] = "CVS";
 choices[61][1] = "SVN";
 choices[61][2] = "Team Foundation Server";
 choices[61][3] = "Apache Tomcat";
 answers[61] = choices[61][3];
 units[61] = "92";
 comments[61] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[62]= "63)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[62]= new Array();
 choices[62][0] = "Interoperabilidad";
 choices[62][1] = "Integridad";
 choices[62][2] = "Capital humano";
 choices[62][3] = "Trazabilidad";
 answers[62] = choices[62][2];
 units[62] = "19";
 comments[62] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[63]= "64)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[63]= new Array();
 choices[63][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[63][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[63][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[63][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[63] = choices[63][1];
 units[63] = "19";
 comments[63] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[64]= new Array();
 choices[64][0] = "Tres meses.";
 choices[64][1] = "Nueve meses.";
 choices[64][2] = "Cuatro meses.";
 choices[64][3] = "Seis meses.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[65]= "66)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[65]= new Array();
 choices[65][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[65][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[65][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[65][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[66]= new Array();
 choices[66][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[66][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[66][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[66][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[67]= "68)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[67]= new Array();
 choices[67][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[67][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[67][2] = "Al Congreso de los Diputados.";
 choices[67][3] = "Al Gobierno.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[68]= "69)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[68]= new Array();
 choices[68][0] = "Por unanimidad.";
 choices[68][1] = "Por mayor&iacute;a cualificada.";
 choices[68][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[68][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[68] = choices[68][3];
 units[68] = "5";
 comments[68] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[69]= new Array();
 choices[69][0] = "Orientaci&oacute;n a objetos";
 choices[69][1] = "MapReduce";
 choices[69][2] = "Pipeline filtering";
 choices[69][3] = "Programaci&oacute;n funcional";
 answers[69] = choices[69][1];
 units[69] = "73";
 comments[69] = "Id Pregunta: 659. ";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[70]= "71)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[70]= new Array();
 choices[70][0] = "Tres a&ntilde;os.";
 choices[70][1] = "Cuatro a&ntilde;os.";
 choices[70][2] = "Cinco a&ntilde;os.";
 choices[70][3] = "Seis a&ntilde;os.";
 answers[70] = choices[70][0];
 units[70] = "5";
 comments[70] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[71]= "72)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[71]= new Array();
 choices[71][0] = "solo mediante ley";
 choices[71][1] = "reglamentariamente";
 choices[71][2] = "mediante ley o reglamentariamente";
 choices[71][3] = "ninguna es correcta";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[72]= "73)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[72]= new Array();
 choices[72][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[72][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[72][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[72][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; facilita un ORM?";
 choices[73]= new Array();
 choices[73][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[73][1] = "Conversi&oacute;n de objetos a documentos";
 choices[73][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[73][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[73] = choices[73][0];
 units[73] = "62";
 comments[73] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[74]= "75)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[74][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[74][2] = "Ninguna es correcta.";
 choices[74][3] = "A y B son correctas.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


