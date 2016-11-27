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

//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a las unidades administrativas:";
 choices[0]= new Array();
 choices[0][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[0][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[0][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[0][3] = "ninguna es correcta";
 answers[0] = choices[0][1];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[1]= "2)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[1][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[1][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[1][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[1] = choices[1][0];
 units[1] = "45";
 comments[1] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[2]= "3)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[2]= new Array();
 choices[2][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[2][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[2][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[2][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[3]= new Array();
 choices[3][0] = "Consumidores";
 choices[3][1] = "PYMES y Start-ups";
 choices[3][2] = "La Industria";
 choices[3][3] = "Todos los anteriores";
 answers[3] = choices[3][3];
 units[3] = "17";
 comments[3] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[4]= new Array();
 choices[4][0] = "No se aplican directamente en los Estados.";
 choices[4][1] = "No son vinculantes.";
 choices[4][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[4][3] = "Tienen alcance general.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; es Java Web Start?";
 choices[5]= new Array();
 choices[5][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[5][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[5][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[5][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[5] = choices[5][3];
 units[5] = "64";
 comments[5] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[6]= new Array();
 choices[6][0] = "Agenda digital para Europa";
 choices[6][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[6][2] = "Juventud en movimiento";
 choices[6][3] = "Agenda Web 2.0";
 answers[6] = choices[6][3];
 units[6] = "19";
 comments[6] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[7]= new Array();
 choices[7][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[7][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[7][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[7][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[7] = choices[7][2];
 units[7] = "19";
 comments[7] = "Id Pregunta: 753. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[8]= "9)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[8]= new Array();
 choices[8][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[8][1] = "el C&oacute;digo Civil";
 choices[8][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[8][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[9]= "10)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[9]= new Array();
 choices[9][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[9][1] = "garantizar la conservaci&oacute;n del documento";
 choices[9][2] = "garantizar la autenticidad del documento";
 choices[9][3] = "garantizar la integridad del documento";
 answers[9] = choices[9][0];
 units[9] = "7";
 comments[9] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[10]= "11)  La Administraci&oacute;n General del Estado se organiza:";
 choices[10]= new Array();
 choices[10][0] = "en Ministerios";
 choices[10][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[10][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[10][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[10] = choices[10][1];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[11]= "12)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[11]= new Array();
 choices[11][0] = "Subsecretario";
 choices[11][1] = "Subdirector general";
 choices[11][2] = "Secretario de Estado";
 choices[11][3] = "ninguna es correcta";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[12]= new Array();
 choices[12][0] = "El Tratado de Lisboa";
 choices[12][1] = "El Tratado de Amsterdam";
 choices[12][2] = "El Tratado de Niza";
 choices[12][3] = "El Acta &Uacute;nica Europea";
 answers[12] = choices[12][1];
 units[12] = "15";
 comments[12] = "Id Pregunta: 115. ";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[13]= new Array();
 choices[13][0] = "El Consejo Europeo.";
 choices[13][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[13][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[13][3] = "El Parlamento Europeo.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[14]= new Array();
 choices[14][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[14][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[14][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[14][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[14] = choices[14][2];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[15]= new Array();
 choices[15][0] = "Las respuestas a) y b) son correctas.";
 choices[15][1] = "Las respuestas a) y b) no son correctas.";
 choices[15][2] = "Contenido coherente con los planes sectoriales.";
 choices[15][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[15] = choices[15][0];
 units[15] = "10";
 comments[15] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[16]= new Array();
 choices[16][0] = "El Presidente del Senado";
 choices[16][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[16][2] = "El Presidente del Gobierno";
 choices[16][3] = "El Presidente de las Cortes Generales";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[17]= "18)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[17]= new Array();
 choices[17][0] = "Resoluci&oacute;n.";
 choices[17][1] = "Desistimiento o renuncia.";
 choices[17][2] = "Caducidad.";
 choices[17][3] = "Todas las anteriores.";
 answers[17] = choices[17][3];
 units[17] = "7";
 comments[17] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[18]= new Array();
 choices[18][0] = "El Consejo Nacional de la Mujer.";
 choices[18][1] = "El Consejo de la Mujer.";
 choices[18][2] = "El Instituto de la Mujer.";
 choices[18][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[18] = choices[18][3];
 units[18] = "14";
 comments[18] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[19]= "20)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[19]= new Array();
 choices[19][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[19][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[19][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[19][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[19] = choices[19][0];
 units[19] = "45";
 comments[19] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[20]= new Array();
 choices[20][0] = "En 1988.";
 choices[20][1] = "En 1981.";
 choices[20][2] = "En 1982.";
 choices[20][3] = "En 1986.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[21]= new Array();
 choices[21][0] = "Car&aacute;cter sustitutivo";
 choices[21][1] = "Car&aacute;cter obligatorio";
 choices[21][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][3];
 units[21] = "19";
 comments[21] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[22]= "23)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[22]= new Array();
 choices[22][0] = "Interoperabilidad";
 choices[22][1] = "Integridad";
 choices[22][2] = "Capital humano";
 choices[22][3] = "Trazabilidad";
 answers[22] = choices[22][2];
 units[22] = "19";
 comments[22] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[23]= new Array();
 choices[23][0] = "Cassandra";
 choices[23][1] = "Riak";
 choices[23][2] = "Avro";
 choices[23][3] = "Zookeeper";
 answers[23] = choices[23][3];
 units[23] = "73";
 comments[23] = "Id Pregunta: 656. ";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[24]= new Array();
 choices[24][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[24][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[24][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[24][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[24] = choices[24][2];
 units[24] = "85";
 comments[24] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[25]= "26)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[25][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[25][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[25][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[25] = choices[25][2];
 units[25] = "101";
 comments[25] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[26]= new Array();
 choices[26][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[26][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[26][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[26][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[26] = choices[26][0];
 units[26] = "26";
 comments[26] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[27]= new Array();
 choices[27][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[27][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[27][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[27][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[28]= new Array();
 choices[28][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[28][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[28][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[28][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[29]= "30)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[29]= new Array();
 choices[29][0] = "180 art&iacute;culos.";
 choices[29][1] = "182 art&iacute;culos.";
 choices[29][2] = "185 art&iacute;culos.";
 choices[29][3] = "190 art&iacute;culos.";
 answers[29] = choices[29][1];
 units[29] = "10";
 comments[29] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[30]= "31)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[30]= new Array();
 choices[30][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[30][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[30][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[30][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[30] = choices[30][2];
 units[30] = "22";
 comments[30] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[31]= "32)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[31]= new Array();
 choices[31][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[31][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[31][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[31][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[31] = choices[31][2];
 units[31] = "50";
 comments[31] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[32]= "33)  Los Subdirectores generales:";
 choices[32]= new Array();
 choices[32][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[32][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[32][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[33]= "34)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "El Ministerio de Igualdad.";
 choices[33][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[33][2] = "Ambas son correctas.";
 choices[33][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[33] = choices[33][1];
 units[33] = "14";
 comments[33] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Reglamentos no se caracterizan por:";
 choices[34]= new Array();
 choices[34][0] = "No poseer alcance general.";
 choices[34][1] = "Ser obligatorios.";
 choices[34][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[34][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[35]= "36)  Indica la respuesta correcta";
 choices[35]= new Array();
 choices[35][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[35][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[35][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[35][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[35] = choices[35][0];
 units[35] = "34, 84";
 comments[35] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[36]= new Array();
 choices[36][0] = "El Ministerio de Hacienda.";
 choices[36][1] = "El Ministerio de Econom&iacute;a.";
 choices[36][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[36][3] = "Ninguna de las respuestas es correcta.";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[37]= new Array();
 choices[37][0] = "Data Mining (miner&iacute;a de datos)";
 choices[37][1] = "Business Intelligence (inteligencia de negocio)";
 choices[37][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[37][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[37] = choices[37][1];
 units[37] = "72";
 comments[37] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[38]= "39)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[38]= new Array();
 choices[38][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[38][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[38][2] = "Absoluta frente a cualquier otro gasto.";
 choices[38][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[39]= "40)  La partida presupuestaria es equivalente a...";
 choices[39]= new Array();
 choices[39][0] = "El sujeto que realiza el gasto";
 choices[39][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[39][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[39][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[40]= new Array();
 choices[40][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[40][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[40][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[40][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[40] = choices[40][3];
 units[40] = "10";
 comments[40] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[41]= "42)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[41]= new Array();
 choices[41][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[41][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[41][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[41][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[41] = choices[41][1];
 units[41] = "92";
 comments[41] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[42]= "43)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[42]= new Array();
 choices[42][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[42][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[42][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[42][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[42] = choices[42][1];
 units[42] = "73";
 comments[42] = "Id Pregunta: 101. ";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[43]= new Array();
 choices[43][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[43][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[43][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[43][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[44]= "45)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[44]= new Array();
 choices[44][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[44][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[44][2] = "La protecci&oacute;n del medio ambiente.";
 choices[44][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[44] = choices[44][0];
 units[44] = "22";
 comments[44] = "Id Pregunta: 125. ";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[45]= new Array();
 choices[45][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[45][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[45][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[45][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[46]= "47)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[46]= new Array();
 choices[46][0] = "Relaciones base y vistas.";
 choices[46][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[46][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[46][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[46] = choices[46][3];
 units[46] = "60";
 comments[46] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[47]= "48)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[47]= new Array();
 choices[47][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[47][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[47][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[47][3] = "Todas son correctas.";
 answers[47] = choices[47][3];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[48]= new Array();
 choices[48][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[48][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[48][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[48][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[48] = choices[48][0];
 units[48] = "14";
 comments[48] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[49]= "50)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[49][1] = "Las inversiones reales y financieras.";
 choices[49][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[49][3] = "Las transferencias de capital y las inversiones reales.";
 answers[49] = choices[49][3];
 units[49] = "10";
 comments[49] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[50]= "51)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[50]= new Array();
 choices[50][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[50][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[50][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[50][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[50] = choices[50][2];
 units[50] = "28";
 comments[50] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[51]= "52)  En cuanto al an&aacute;lisis DAFO:";
 choices[51]= new Array();
 choices[51][0] = "Considera detallada y exclusivamente factores internos.";
 choices[51][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[51][2] = "Considera detallada y exclusivamente factores externos.";
 choices[51][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[51] = choices[51][1];
 units[51] = "83";
 comments[51] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[52]= "53)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[52]= new Array();
 choices[52][0] = "El presidente de las Cortes Generales.";
 choices[52][1] = "El Presidente del Gobierno.";
 choices[52][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[52][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[52] = choices[52][3];
 units[52] = "10";
 comments[52] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[53]= new Array();
 choices[53][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[53][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[53][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[53][3] = "todas son correctas";
 answers[53] = choices[53][1];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[54]= "55)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[54]= new Array();
 choices[54][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[54][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[54][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[54][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[54] = choices[54][2];
 units[54] = "19";
 comments[54] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[55]= new Array();
 choices[55][0] = "Directiva 95/46/CE";
 choices[55][1] = "Directiva 1999/93/CE";
 choices[55][2] = "Directiva 2000/31/CE";
 choices[55][3] = "Directiva 2003/98/CE";
 answers[55] = choices[55][1];
 units[55] = "77";
 comments[55] = "Id Pregunta: 682. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[56]= "57)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[56]= new Array();
 choices[56][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[56][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[56][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[56][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[57]= "58)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[57]= new Array();
 choices[57][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[57][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[57][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[57][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[57] = choices[57][2];
 units[57] = "1";
 comments[57] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[58]= "59)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[58]= new Array();
 choices[58][0] = "6 principios.";
 choices[58][1] = "7 principios.";
 choices[58][2] = "5 principios.";
 choices[58][3] = "6 directrices.";
 answers[58] = choices[58][1];
 units[58] = "28";
 comments[58] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[59]= "60)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[59]= new Array();
 choices[59][0] = "tienen capacidad de obrar limitada";
 choices[59][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[59][2] = "no tienen capacidad de obrar";
 choices[59][3] = "ninguna es correcta";
 answers[59] = choices[59][2];
 units[59] = "7";
 comments[59] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[60]= new Array();
 choices[60][0] = "En 2015";
 choices[60][1] = "En 2013";
 choices[60][2] = "En 2016";
 choices[60][3] = "En 2007";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[61]= "62)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[61][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[61][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[61][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[61] = choices[61][2];
 units[61] = "26";
 comments[61] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[62]= new Array();
 choices[62][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[62][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[62][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[62][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[62] = choices[62][1];
 units[62] = "19";
 comments[62] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[63]= "64)  El sector p&uacute;blico institucional se integra por:";
 choices[63]= new Array();
 choices[63][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[63][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[63][2] = "las Universidades p&uacute;blicas";
 choices[63][3] = "todas son correctas";
 answers[63] = choices[63][3];
 units[63] = "7";
 comments[63] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[64]= new Array();
 choices[64][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[64][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[64][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[64][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[64] = choices[64][1];
 units[64] = "28";
 comments[64] = "Id Pregunta: 732. Estrategia TIC";


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


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[66]= "67)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[66]= new Array();
 choices[66][0] = "Un recurso de incumplimiento.";
 choices[66][1] = "Recurso de carencia.";
 choices[66][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[66][3] = "Ninguna es correcta.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[67]= "68)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[67]= new Array();
 choices[67][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[67][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[67][2] = "Son incompatibles ambas actas de diputado.";
 choices[67][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[68]= "69)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[68]= new Array();
 choices[68][0] = "Mercurial, Git y Apache Subversion.";
 choices[68][1] = "Gimp, Mercurial y Git.";
 choices[68][2] = "RedMine, Planner y OpenProj.";
 choices[68][3] = "Cassandra, Git y REDIS.";
 answers[68] = choices[68][0];
 units[68] = "92";
 comments[68] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[69]= new Array();
 choices[69][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[69][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[69][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[70]= "71)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[70]= new Array();
 choices[70][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[70][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[70][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[70][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[70] = choices[70][0];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[71]= "72)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[71]= new Array();
 choices[71][0] = "3 a&ntilde;os.";
 choices[71][1] = "5 a&ntilde;os.";
 choices[71][2] = "4 a&ntilde;os.";
 choices[71][3] = "6 a&ntilde;os.";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[72]= new Array();
 choices[72][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[72][1] = "Pasivos financieros y transferencias de capital.";
 choices[72][2] = "Activos financieros y pasivos financieros.";
 choices[72][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[73]= "74)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[73]= new Array();
 choices[73][0] = "786 Diputados como m&aacute;ximo.";
 choices[73][1] = "600 Diputados como m&aacute;ximo.";
 choices[73][2] = "650 Diputados como m&aacute;ximo.";
 choices[73][3] = "732 Diputados como m&aacute;ximo.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ala la correcta:";
 choices[74]= new Array();
 choices[74][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[74][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[74][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[74][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[74] = choices[74][1];
 units[74] = "7";
 comments[74] = "Id Pregunta: 541. LEY 39/2015";


