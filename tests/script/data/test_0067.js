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

//  Id pregunta: 10426 Año de creación de pregunta: 2016
 questions[0]= "1)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[0]= new Array();
 choices[0][0] = "Un plan de igualdad.";
 choices[0][1] = "Un informe de impacto de g&eacute;nero.";
 choices[0][2] = "Un programa de igualdad.";
 choices[0][3] = "Todas son correctas.";
 answers[0] = choices[0][1];
 units[0] = "14";
 comments[0] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10046 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[1]= new Array();
 choices[1][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[1][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[1][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[1][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[1] = choices[1][1];
 units[1] = "76";
 comments[1] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[2][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[2][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[2][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[2] = choices[2][2];
 units[2] = "43";
 comments[2] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[3]= new Array();
 choices[3][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[3][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[3][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[3][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[3] = choices[3][3];
 units[3] = "26";
 comments[3] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10553 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[4]= new Array();
 choices[4][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[4][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[4][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[4][3] = "Todas lo son";
 answers[4] = choices[4][0];
 units[4] = "17";
 comments[4] = "Id Pregunta: 10553. Mercado &Uacute;nico Digital";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[5]= new Array();
 choices[5][0] = "El Parlamento y el Consejo.";
 choices[5][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[5][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[5][3] = "La Comisi&oacute;n y el Consejo.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10657 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es el machine learning?";
 choices[6]= new Array();
 choices[6][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[6][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[6][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[6][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[6] = choices[6][0];
 units[6] = "73";
 comments[6] = "Id Pregunta: 10657. ";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[7]= "8)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "Principio de transparencia.";
 choices[7][1] = "Principio de cooperaci&oacute;n.";
 choices[7][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[7][3] = "Principio de lealtad institucional.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10152 Año de creación de pregunta: 2016
 questions[8]= "9)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[8]= new Array();
 choices[8][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[8][1] = "garantizar la conservaci&oacute;n del documento";
 choices[8][2] = "garantizar la autenticidad del documento";
 choices[8][3] = "garantizar la integridad del documento";
 answers[8] = choices[8][0];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 10552 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[9]= new Array();
 choices[9][0] = "Establecer redes de telecomunicaciones continentales";
 choices[9][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[9][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[9][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[9] = choices[9][0];
 units[9] = "17";
 comments[9] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10089 Año de creación de pregunta: 2016
 questions[10]= "11)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[10]= new Array();
 choices[10][0] = "2.400 euros";
 choices[10][1] = "4.000 euros";
 choices[10][2] = "3.200 euros";
 choices[10][3] = "1.600 euros";
 answers[10] = choices[10][1];
 units[10] = "37";
 comments[10] = "Id Pregunta: 10089. AGE A1 2015";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[11]= "12)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[11]= new Array();
 choices[11][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[11][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[11][2] = "a y b son correctas";
 choices[11][3] = "a y b son incorrectas";
 answers[11] = choices[11][0];
 units[11] = "7";
 comments[11] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[12]= "13)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[12]= new Array();
 choices[12][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[12][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[12][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[12][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[12] = choices[12][0];
 units[12] = "10";
 comments[12] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10531 Año de creación de pregunta: 2016
 questions[13]= "14)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[13]= new Array();
 choices[13][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[13][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[13][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[13][3] = "todas son correctas";
 answers[13] = choices[13][3];
 units[13] = "7";
 comments[13] = "Id Pregunta: 10531. LEY 39/2015";


//  Id pregunta: 10018 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Aplicaci&oacute;n";
 choices[14][1] = "Sesi&oacute;n";
 choices[14][2] = "Presentaci&oacute;n";
 choices[14][3] = "Transporte";
 answers[14] = choices[14][2];
 units[14] = "105";
 comments[14] = "Id Pregunta: 10018. AGE A1 2015";


//  Id pregunta: 10058 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[15]= new Array();
 choices[15][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[15][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[15][2] = "Servicio de seguridad gestionada";
 choices[15][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[15] = choices[15][1];
 units[15] = "26";
 comments[15] = "Id Pregunta: 10058. AGE A1 2015";


//  Id pregunta: 10251 Año de creación de pregunta: 2016
 questions[16]= "17)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[16]= new Array();
 choices[16][0] = "Rey.";
 choices[16][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[16][2] = "Constituci&oacute;n.";
 choices[16][3] = "Pueblo.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10251. CONSTITUCION1978";


//  Id pregunta: 10087 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[17][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[17][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[17][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[17] = choices[17][2];
 units[17] = "48";
 comments[17] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[18]= "19)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[18]= new Array();
 choices[18][0] = "El servicio de teleasistencia.";
 choices[18][1] = "El servicio de ayuda a domicilio.";
 choices[18][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[18][3] = "Todas las anteriores son correctas.";
 answers[18] = choices[18][3];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10352 Año de creación de pregunta: 2016
 questions[19]= "20)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[19]= new Array();
 choices[19][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[19][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[19][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[19][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10057 Año de creación de pregunta: 2016
 questions[20]= "21)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[20]= new Array();
 choices[20][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[20][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[20][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[20][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[20] = choices[20][3];
 units[20] = "101";
 comments[20] = "Id Pregunta: 10057. AGE A1 2015";


//  Id pregunta: 10614 Año de creación de pregunta: 2016
 questions[21]= "22)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[21]= new Array();
 choices[21][0] = "192.228.0.0";
 choices[21][1] = "192.228.8.0";
 choices[21][2] = "192.228.16.0";
 choices[21][3] = "192.228.17.0";
 answers[21] = choices[21][2];
 units[21] = "109";
 comments[21] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10660 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[22]= new Array();
 choices[22][0] = "Avro";
 choices[22][1] = "Sqoop";
 choices[22][2] = "UIMA";
 choices[22][3] = "Jaql";
 answers[22] = choices[22][1];
 units[22] = "73";
 comments[22] = "Id Pregunta: 10660. ";


//  Id pregunta: 10630 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[23]= new Array();
 choices[23][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[23][1] = "De nivel alto.";
 choices[23][2] = "De nivel medio y nivel alto.";
 choices[23][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[23] = choices[23][3];
 units[23] = "35";
 comments[23] = "Id Pregunta: 10630. Junta de Extremadura A1 2015";


//  Id pregunta: 10558 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[24]= new Array();
 choices[24][0] = "En 2015";
 choices[24][1] = "En 2013";
 choices[24][2] = "En 2016";
 choices[24][3] = "En 2007";
 answers[24] = choices[24][1];
 units[24] = "19";
 comments[24] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10268 Año de creación de pregunta: 2016
 questions[25]= "26)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[25]= new Array();
 choices[25][0] = "Cuatro.";
 choices[25][1] = "Una.";
 choices[25][2] = "Cinco.";
 choices[25][3] = "Nueve.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10681 Año de creación de pregunta: 2016
 questions[26]= "27)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[26]= new Array();
 choices[26][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[26][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[26][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[26][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10265 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[27]= new Array();
 choices[27][0] = "El Presidente del Senado";
 choices[27][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[27][2] = "El Presidente del Gobierno";
 choices[27][3] = "El Presidente de las Cortes Generales";
 answers[27] = choices[27][2];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10265. CONSTITUCION1978";


//  Id pregunta: 10088 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Diagrama de clases";
 choices[28][1] = "Diagrama de componentes";
 choices[28][2] = "Diagrama de estructura";
 choices[28][3] = "Diagrama de paquetes";
 answers[28] = choices[28][0];
 units[28] = "91";
 comments[28] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10277 Año de creación de pregunta: 2016
 questions[29]= "30)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[29]= new Array();
 choices[29][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[29][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[29][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[29][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[29] = choices[29][2];
 units[29] = "22";
 comments[29] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10109 Año de creación de pregunta: 2016
 questions[30]= "31)  Big Data:";
 choices[30]= new Array();
 choices[30][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[30][1] = "No puede emplearse para tratar datos no estructurados";
 choices[30][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][3];
 units[30] = "73";
 comments[30] = "Id Pregunta: 10109. ";


//  Id pregunta: 10237 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[31][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[31][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[31][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 10237. CONSTITUCION1978";


//  Id pregunta: 10156 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[32]= new Array();
 choices[32][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[32][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[32][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[32][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 10156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 10479 Año de creación de pregunta: 2016
 questions[33]= "34)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[33]= new Array();
 choices[33][0] = "A nivel de art&iacute;culo.";
 choices[33][1] = "A nivel de cap&iacute;tulo.";
 choices[33][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[33][3] = "A nivel de concepto.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[34]= "35)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[34]= new Array();
 choices[34][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[34][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[34][2] = "Son refrendados por el Rey.";
 choices[34][3] = "Son convocados por el Presidente del Gobierno.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10571 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[35]= new Array();
 choices[35][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[35][1] = "Entrada en la Uni&oacute;n Europea";
 choices[35][2] = "Pactos de la Moncloa";
 choices[35][3] = "Ingreso en la ONU";
 answers[35] = choices[35][3];
 units[35] = "12";
 comments[35] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10379 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[36]= new Array();
 choices[36][0] = "Anual.";
 choices[36][1] = "Semestral.";
 choices[36][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[36][3] = "Bienal.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[37]= "38)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[37]= new Array();
 choices[37][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[37][1] = "mediante resoluci&oacute;n judicial especial";
 choices[37][2] = "&uacute;nicamente mediante poder notarial";
 choices[37][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[38]= new Array();
 choices[38][0] = "Es un framework de software libre.";
 choices[38][1] = "Es una base de datos NoSQL.";
 choices[38][2] = "Est&aacute; basado en MapReduce.";
 choices[38][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[38] = choices[38][1];
 units[38] = "73";
 comments[38] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10444 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[39]= new Array();
 choices[39][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[39][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[39][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[39][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[39] = choices[39][1];
 units[39] = "43";
 comments[39] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10358 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[40]= new Array();
 choices[40][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[40][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[40][2] = "c) Todas las respuestas son correctas.";
 choices[40][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10358. UNION EUROPEA";


//  Id pregunta: 10506 Año de creación de pregunta: 2016
 questions[41]= "42)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[41]= new Array();
 choices[41][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[41][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[41][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[41][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[41] = choices[41][3];
 units[41] = "10";
 comments[41] = "Id Pregunta: 10506. PRESUPUESTOS GENERALES";


//  Id pregunta: 10053 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[42]= new Array();
 choices[42][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[42][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[42][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[42][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[42] = choices[42][1];
 units[42] = "84";
 comments[42] = "Id Pregunta: 10053. AGE A1 2015";


//  Id pregunta: 10036 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[43]= new Array();
 choices[43][0] = "JAXP";
 choices[43][1] = "JNI";
 choices[43][2] = "JNDI";
 choices[43][3] = "JDBC";
 answers[43] = choices[43][1];
 units[43] = "64";
 comments[43] = "Id Pregunta: 10036. AGE A1 2015";


//  Id pregunta: 10174 Año de creación de pregunta: 2016
 questions[44]= "45)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[44]= new Array();
 choices[44][0] = "El derecho a la propiedad privada.";
 choices[44][1] = "El derecho de asociaci&oacute;n.";
 choices[44][2] = "El derecho de fundaci&oacute;n.";
 choices[44][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 10174. CONSTITUCION1978";


//  Id pregunta: 10076 Año de creación de pregunta: 2016
 questions[45]= "46)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[45]= new Array();
 choices[45][0] = "Estrat&eacute;gico";
 choices[45][1] = "Operativo";
 choices[45][2] = "T&aacute;ctico";
 choices[45][3] = "Tecnol&oacute;gico";
 answers[45] = choices[45][0];
 units[45] = "36";
 comments[45] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10378 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[46]= new Array();
 choices[46][0] = "Quince miembros.";
 choices[46][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[46][2] = "Los miembros que determine el Consejo.";
 choices[46][3] = "Un Presidente y quince miembros.";
 answers[46] = choices[46][1];
 units[46] = "14";
 comments[46] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10468 Año de creación de pregunta: 2016
 questions[47]= "48)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Hacienda.";
 choices[47][1] = "El Ministerio de Econom&iacute;a.";
 choices[47][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[47][3] = "Ninguna de las respuestas es correcta.";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10468. PRESUPUESTOS GENERALES";


//  Id pregunta: 10434 Año de creación de pregunta: 2016
 questions[48]= "49)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[48][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[48][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[48][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "43";
 comments[48] = "Id Pregunta: 10434. SERVICIOS COMUNES";


//  Id pregunta: 10560 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[49]= new Array();
 choices[49][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[49][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[49][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[49][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 10560. Agenda Digital";


//  Id pregunta: 10647 Año de creación de pregunta: 2016
 questions[50]= "51)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[50]= new Array();
 choices[50][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[50][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[50][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[50][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[50] = choices[50][0];
 units[50] = "101";
 comments[50] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10190 Año de creación de pregunta: 2016
 questions[51]= "52)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[51]= new Array();
 choices[51][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[51][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[51][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[51][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 10190. CONSTITUCION1978";


//  Id pregunta: 10659 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[52]= new Array();
 choices[52][0] = "Orientaci&oacute;n a objetos";
 choices[52][1] = "MapReduce";
 choices[52][2] = "Pipeline filtering";
 choices[52][3] = "Programaci&oacute;n funcional";
 answers[52] = choices[52][1];
 units[52] = "73";
 comments[52] = "Id Pregunta: 10659. ";


//  Id pregunta: 10103 Año de creación de pregunta: 2016
 questions[53]= "54)  En qu&eacute; consiste el principio BASE:";
 choices[53]= new Array();
 choices[53][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[53][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[53][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[53][3] = "Todas las anteriores son falsas";
 answers[53] = choices[53][3];
 units[53] = "73";
 comments[53] = "Id Pregunta: 10103. ";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[54]= new Array();
 choices[54][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[54][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[54][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[54][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[54] = choices[54][2];
 units[54] = "15";
 comments[54] = "Id Pregunta: 10118. ";


//  Id pregunta: 10245 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[55]= new Array();
 choices[55][0] = "De los derechos y deberes fundamentales.";
 choices[55][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[55][2] = "Derechos y libertades.";
 choices[55][3] = "De la Corona.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10446 Año de creación de pregunta: 2016
 questions[56]= "57)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[56]= new Array();
 choices[56][0] = "Ejecutivo";
 choices[56][1] = "Limitativo";
 choices[56][2] = "Estimativo";
 choices[56][3] = "Progresivo";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10653 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[57]= new Array();
 choices[57][0] = "Neo4J ";
 choices[57][1] = "OrientDB ";
 choices[57][2] = "InfoGrid ";
 choices[57][3] = "SimpleDB";
 answers[57] = choices[57][3];
 units[57] = "73";
 comments[57] = "Id Pregunta: 10653. ";


//  Id pregunta: 10616 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[58]= new Array();
 choices[58][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[58][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[58][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[58][3] = "Todas las respuestas son correctas.";
 answers[58] = choices[58][2];
 units[58] = "42";
 comments[58] = "Id Pregunta: 10616. Junta de Extremadura A1 2015";


//  Id pregunta: 10175 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[59]= new Array();
 choices[59][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[59][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[59][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[59][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10131 Año de creación de pregunta: 2016
 questions[60]= "61)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[60]= new Array();
 choices[60][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[60][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[60][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[60][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[60] = choices[60][0];
 units[60] = "12";
 comments[60] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10429 Año de creación de pregunta: 2016
 questions[61]= "62)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[61]= new Array();
 choices[61][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[61][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "Ambas son incorrectas.";
 answers[61] = choices[61][0];
 units[61] = "14";
 comments[61] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[62]= "63)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Discriminaci&oacute;n indirecta.";
 choices[62][1] = "Discriminaci&oacute;n directa.";
 choices[62][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[62][3] = "Discriminaci&oacute;n abusiva.";
 answers[62] = choices[62][0];
 units[62] = "14";
 comments[62] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10568 Año de creación de pregunta: 2016
 questions[63]= "64)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[63]= new Array();
 choices[63][0] = "Alrededor de un 26% del PIB";
 choices[63][1] = "Alrededor de un 11% del PIB";
 choices[63][2] = "Alrededor de un 34% del PIB";
 choices[63][3] = "Alrededor de un 7% del PIB";
 answers[63] = choices[63][1];
 units[63] = "12";
 comments[63] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10577 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[64]= new Array();
 choices[64][0] = "El 2 de Octubre de 2015";
 choices[64][1] = "El 15 de Septiembre de 2015";
 choices[64][2] = "El 1 de Octubre de 2015";
 choices[64][3] = "El 5 de Octubre de 2015";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 10577. Estrategia TIC";


//  Id pregunta: 10146 Año de creación de pregunta: 2016
 questions[65]= "66)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[65]= new Array();
 choices[65][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[65][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[65][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[65][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[65] = choices[65][0];
 units[65] = "8";
 comments[65] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10547 Año de creación de pregunta: 2016
 questions[66]= "67)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[66]= new Array();
 choices[66][0] = "Integrar la estrategia TIC con la de negocio";
 choices[66][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[66][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[66][3] = "Todas las anteriores";
 answers[66] = choices[66][3];
 units[66] = "26";
 comments[66] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10085 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Estimaci&oacute;n del riesgo";
 choices[67][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[67][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[67][3] = "Mapa de riesgos";
 answers[67] = choices[67][3];
 units[67] = "45";
 comments[67] = "Id Pregunta: 10085. AGE A1 2015";


//  Id pregunta: 10612 Año de creación de pregunta: 2016
 questions[68]= "69)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[68]= new Array();
 choices[68][0] = "Intersecci&oacute;n.";
 choices[68][1] = "Uni&oacute;n.";
 choices[68][2] = "Restricci&oacute;n.";
 choices[68][3] = "Diferencia.";
 answers[68] = choices[68][0];
 units[68] = "60";
 comments[68] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10498 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[69]= new Array();
 choices[69][0] = "En t&iacute;tulos-valores.";
 choices[69][1] = "Las respuestas a) y b) son correctas.";
 choices[69][2] = "Las respuestas a) y b) no son correctas.";
 choices[69][3] = "En cuenta.";
 answers[69] = choices[69][1];
 units[69] = "10";
 comments[69] = "Id Pregunta: 10498. PRESUPUESTOS GENERALES";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[70]= new Array();
 choices[70][0] = "PostgreSQL";
 choices[70][1] = "Datawarehouse";
 choices[70][2] = "Snowflake";
 choices[70][3] = "CouchDB";
 answers[70] = choices[70][0];
 units[70] = "61";
 comments[70] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10129 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[71]= new Array();
 choices[71][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[71][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[71][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[71][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[71] = choices[71][2];
 units[71] = "22";
 comments[71] = "Id Pregunta: 10129. ";


//  Id pregunta: 10373 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[72]= new Array();
 choices[72][0] = "Nueve.";
 choices[72][1] = "Diez.";
 choices[72][2] = "Siete.";
 choices[72][3] = "Ocho.";
 answers[72] = choices[72][3];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10225 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[73]= new Array();
 choices[73][0] = "las Cortes generales.";
 choices[73][1] = "los partidos pol&iacute;ticos.";
 choices[73][2] = "los sindicatos.";
 choices[73][3] = "las Comunidades Aut&oacute;nomas.";
 answers[73] = choices[73][1];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10225. CONSTITUCION1978";


//  Id pregunta: 10048 Año de creación de pregunta: 2016
 questions[74]= "75)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[74]= new Array();
 choices[74][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[74][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[74][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[74][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[74] = choices[74][3];
 units[74] = "77";
 comments[74] = "Id Pregunta: 10048. AGE A1 2015";


