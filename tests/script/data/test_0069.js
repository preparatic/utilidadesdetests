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

//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[0]= "1)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[0]= new Array();
 choices[0][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[0][1] = "el Consejo de Estado";
 choices[0][2] = "el Congreso";
 choices[0][3] = "las Cortes Generales";
 answers[0] = choices[0][0];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[1]= "2)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[1]= new Array();
 choices[1][0] = "La Comisi&oacute;n.";
 choices[1][1] = "El Consejo de Europa.";
 choices[1][2] = "El Consejo Europeo.";
 choices[1][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[2]= new Array();
 choices[2][0] = "117.5";
 choices[2][1] = "117.1";
 choices[2][2] = "116";
 choices[2][3] = "15";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[3]= new Array();
 choices[3][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[3][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[3][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[3][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[3] = choices[3][3];
 units[3] = "77";
 comments[3] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[4]= new Array();
 choices[4][0] = "Perceptible";
 choices[4][1] = "Operable";
 choices[4][2] = "Comprensible";
 choices[4][3] = "Robusto";
 answers[4] = choices[4][2];
 units[4] = "42";
 comments[4] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique la afirmaci&oacute;n falsa:";
 choices[5]= new Array();
 choices[5][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[5][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[5][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[5][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[6]= "7)  La iniciativa legislativa corresponde:";
 choices[6]= new Array();
 choices[6][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[6][1] = "Al rey y al Gobierno.";
 choices[6][2] = "Al Congreso, al Senado y al Rey.";
 choices[6][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[7]= new Array();
 choices[7][0] = "Nivel 7 - MPLS.";
 choices[7][1] = "Nivel 3 - RARP.";
 choices[7][2] = "Nivel 2 - HDLC.";
 choices[7][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[7] = choices[7][2];
 units[7] = "105";
 comments[7] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[8]= new Array();
 choices[8][0] = "Es un framework de software libre.";
 choices[8][1] = "Es una base de datos NoSQL.";
 choices[8][2] = "Est&aacute; basado en MapReduce.";
 choices[8][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[8] = choices[8][1];
 units[8] = "73";
 comments[8] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[9]= "10)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[9]= new Array();
 choices[9][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[9][1] = "Programa de cartas de servicios";
 choices[9][2] = "Programa para la mejora continua de las organizaciones.";
 choices[9][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[9] = choices[9][2];
 units[9] = "18, 20";
 comments[9] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[10]= new Array();
 choices[10][0] = "Por reembolso de pr&eacute;stamos.";
 choices[10][1] = "Por la venta de bienes.";
 choices[10][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[10][3] = "Por prestaci&oacute;n de servicios.";
 answers[10] = choices[10][2];
 units[10] = "10";
 comments[10] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[11]= "12)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[11]= new Array();
 choices[11][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[11][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[11][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[11][3] = "Todas las respuestas son correctas.";
 answers[11] = choices[11][0];
 units[11] = "101";
 comments[11] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[12]= "13)  En el sistema operativo Unix/Linux, el comando id:";
 choices[12]= new Array();
 choices[12][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[12][1] = "El comando id no existe.";
 choices[12][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[12][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[12] = choices[12][0];
 units[12] = "57";
 comments[12] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[13]= "14)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[13]= new Array();
 choices[13][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[13][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[13][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[13][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[13] = choices[13][1];
 units[13] = "56";
 comments[13] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[14]= new Array();
 choices[14][0] = "Compatibilidad";
 choices[14][1] = "Interoperabilidad";
 choices[14][2] = "Reutilizaci&oacute;n";
 choices[14][3] = "Accesibilidad";
 answers[14] = choices[14][0];
 units[14] = "22";
 comments[14] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[15]= new Array();
 choices[15][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[15][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[15][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[15][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[15] = choices[15][3];
 units[15] = "1";
 comments[15] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[16]= "17)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[16]= new Array();
 choices[16][0] = "Tres a&ntilde;os.";
 choices[16][1] = "Cuatro a&ntilde;os.";
 choices[16][2] = "Cinco a&ntilde;os.";
 choices[16][3] = "Seis a&ntilde;os.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[17]= new Array();
 choices[17][0] = "Tres meses.";
 choices[17][1] = "Nueve meses.";
 choices[17][2] = "Cuatro meses.";
 choices[17][3] = "Seis meses.";
 answers[17] = choices[17][0];
 units[17] = "10";
 comments[17] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[18]= "19)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[18]= new Array();
 choices[18][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[18][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[18][2] = "La normativa reguladora de cada derecho.";
 choices[18][3] = "Ley 50/1997, del Gobierno.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[19]= "20)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[19][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[19][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[19][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[19] = choices[19][2];
 units[19] = "26";
 comments[19] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[20]= "21)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[20]= new Array();
 choices[20][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[20][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[20][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[20][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[20] = choices[20][0];
 units[20] = "34, 84";
 comments[20] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[21]= new Array();
 choices[21][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[21][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[21][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[21][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[21] = choices[21][3];
 units[21] = "10";
 comments[21] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[22]= "23)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[22][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[22][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[22][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[22] = choices[22][3];
 units[22] = "41";
 comments[22] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[23]= new Array();
 choices[23][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[23][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[23][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[23][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[23] = choices[23][1];
 units[23] = "92";
 comments[23] = "Id Pregunta: 714. INTEGRACION CONTINUA";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[24]= new Array();
 choices[24][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[24][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[24][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[24][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[25]= new Array();
 choices[25][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[25][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[25][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[25][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[25] = choices[25][3];
 units[25] = "78";
 comments[25] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[26]= "27)  Indica la respuesta correcta";
 choices[26]= new Array();
 choices[26][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[26][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[26][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[26][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[26] = choices[26][0];
 units[26] = "34, 84";
 comments[26] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[27]= "28)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[27]= new Array();
 choices[27][0] = "90";
 choices[27][1] = "50";
 choices[27][2] = "64";
 choices[27][3] = "60";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; facilita un ORM?";
 choices[28]= new Array();
 choices[28][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[28][1] = "Conversi&oacute;n de objetos a documentos";
 choices[28][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[28][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[28] = choices[28][0];
 units[28] = "62";
 comments[28] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[29]= "30)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[29]= new Array();
 choices[29][0] = "Pas&oacute; de 518 a 626.";
 choices[29][1] = "Pas&oacute; de 434 a 518.";
 choices[29][2] = "Pas&oacute; de 345 a 512.";
 choices[29][3] = "Pas&oacute; de 435 a 610.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[30]= "31)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[30]= new Array();
 choices[30][0] = "De los interesados en el procedimiento";
 choices[30][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[30][2] = "Disposiciones generales";
 choices[30][3] = "De los actos administrativos";
 answers[30] = choices[30][2];
 units[30] = "7";
 comments[30] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[31]= "32)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[31]= new Array();
 choices[31][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[31][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[31][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[31][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[31] = choices[31][1];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[32]= "33)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[32]= new Array();
 choices[32][0] = "La Ley Org&aacute;nica 2/2011";
 choices[32][1] = "La Ley Org&aacute;nica 2/2012";
 choices[32][2] = "La Ley Org&aacute;nica 3/2012";
 choices[32][3] = "La Ley Org&aacute;nica 2/2002";
 answers[32] = choices[32][1];
 units[32] = "12";
 comments[32] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[33]= "34)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[33]= new Array();
 choices[33][0] = "los registros mercantiles";
 choices[33][1] = "los registros de la propiedad";
 choices[33][2] = "los protocolos notariales";
 choices[33][3] = "todas son correctas";
 answers[33] = choices[33][3];
 units[33] = "7";
 comments[33] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[34]= "35)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[34]= new Array();
 choices[34][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[34][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[34][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[34][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[34] = choices[34][0];
 units[34] = "60";
 comments[34] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[35]= "36)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[35]= new Array();
 choices[35][0] = "Sello electr&oacute;nico";
 choices[35][1] = "Sede electr&oacute;nica";
 choices[35][2] = "Servidor seguro (SSL/TLS)";
 choices[35][3] = "Empleado p&uacute;blico";
 answers[35] = choices[35][2];
 units[35] = "7";
 comments[35] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[36]= "37)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[36]= new Array();
 choices[36][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[36][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[36][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[36][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "De la C&aacute;mara respectiva.";
 choices[37][1] = "Del Rey.";
 choices[37][2] = "Del Tribunal Constitucional.";
 choices[37][3] = "Del Tribunal Supremo.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[38]= "39)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[38]= new Array();
 choices[38][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[38][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[38][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[38][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[38] = choices[38][1];
 units[38] = "14";
 comments[38] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[39]= "40)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[39][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[39][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[39][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[39] = choices[39][1];
 units[39] = "63";
 comments[39] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[40]= new Array();
 choices[40][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[40][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[40][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[40][3] = "A las Diputaciones y a las Comarcas.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[41]= new Array();
 choices[41][0] = "Versi&oacute;n digital prioritaria.";
 choices[41][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[41][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[41][3] = "Apertura y transparencia.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[42]= new Array();
 choices[42][0] = "A los ministros.";
 choices[42][1] = "Las respuestas a) y b) son correctas.";
 choices[42][2] = "Las respuestas a) y b) no son correctas.";
 choices[42][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[42] = choices[42][1];
 units[42] = "10";
 comments[42] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[43]= new Array();
 choices[43][0] = "Principio de solo una vez";
 choices[43][1] = "Apertura y transparencia";
 choices[43][2] = "Confianza y seguridad";
 choices[43][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[44]= new Array();
 choices[44][0] = "CVS";
 choices[44][1] = "SVN";
 choices[44][2] = "Team Foundation Server";
 choices[44][3] = "Apache Tomcat";
 answers[44] = choices[44][3];
 units[44] = "92";
 comments[44] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[45]= "46)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Hacienda.";
 choices[45][1] = "El Ministerio de Econom&iacute;a.";
 choices[45][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[45][3] = "Ninguna de las respuestas es correcta.";
 answers[45] = choices[45][2];
 units[45] = "10";
 comments[45] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la respuesta falsa";
 choices[46]= new Array();
 choices[46][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[46][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[46][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[46][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[46] = choices[46][3];
 units[46] = "22";
 comments[46] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[47]= "48)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[47]= new Array();
 choices[47][0] = "un &oacute;rgano superior";
 choices[47][1] = "un &oacute;rgano directivo";
 choices[47][2] = "un &oacute;rgano superior o directivo";
 choices[47][3] = "ninguna es correcta";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[48]= new Array();
 choices[48][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[48][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[48][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[48][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[48] = choices[48][3];
 units[48] = "66";
 comments[48] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[49]= new Array();
 choices[49][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[49][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[49][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[49][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[49] = choices[49][0];
 units[49] = "19";
 comments[49] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[50]= new Array();
 choices[50][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[50][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[50][2] = "El que hubieren designado las Cortes Generales.";
 choices[50][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[50] = choices[50][1];
 units[50] = "1";
 comments[50] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[51]= "52)  En las Administraciones P&uacute;blicas...";
 choices[51]= new Array();
 choices[51][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[51][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[51][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[51][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[51] = choices[51][0];
 units[51] = "10";
 comments[51] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[52]= "53)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[52]= new Array();
 choices[52][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[52][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[52][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[52][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[52] = choices[52][3];
 units[52] = "86";
 comments[52] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[53]= "54)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[53]= new Array();
 choices[53][0] = "Cinco a&ntilde;os.";
 choices[53][1] = "Seis a&ntilde;os.";
 choices[53][2] = "Cuatro a&ntilde;os.";
 choices[53][3] = "Tres a&ntilde;os.";
 answers[53] = choices[53][0];
 units[53] = "5";
 comments[53] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta falsa:";
 choices[54]= new Array();
 choices[54][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[54][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[54][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[54][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[55]= new Array();
 choices[55][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[55][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[55][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[55][3] = "todas son correctas";
 answers[55] = choices[55][1];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[56]= "57)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[56]= new Array();
 choices[56][0] = "ISO/IEC 25000";
 choices[56][1] = "ISO/IEC 27000";
 choices[56][2] = "ISO 9000";
 choices[56][3] = "ISO 9001";
 answers[56] = choices[56][0];
 units[56] = "93";
 comments[56] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[57]= new Array();
 choices[57][0] = "Ley 3/2015";
 choices[57][1] = "Ley 6/2007";
 choices[57][2] = "Ley 5/1984";
 choices[57][3] = "Ley 5/2006";
 answers[57] = choices[57][0];
 units[57] = "22";
 comments[57] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[58]= new Array();
 choices[58][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[58][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[58][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[58][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[59]= "60)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[59]= new Array();
 choices[59][0] = "Discriminaci&oacute;n indirecta.";
 choices[59][1] = "Discriminaci&oacute;n directa.";
 choices[59][2] = "Discriminaci&oacute;n por maternidad.";
 choices[59][3] = "Discriminaci&oacute;n abusiva.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[60]= new Array();
 choices[60][0] = "El 1 de noviembre de 1994.";
 choices[60][1] = "El 1 de noviembre de 1992.";
 choices[60][2] = "El 1 de noviembre de 1995.";
 choices[60][3] = "El 1 de noviembre de 1993.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[61]= "62)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[61]= new Array();
 choices[61][0] = "El Tratado de Maastrich.";
 choices[61][1] = "El Tratado de Amsterdam.";
 choices[61][2] = "El Tratado de Par&iacute;s.";
 choices[61][3] = "El Tratado de Roma.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta falsa:";
 choices[62]= new Array();
 choices[62][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[62][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[62][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[62][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[63]= new Array();
 choices[63][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[63][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[63][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[63][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[64]= "65)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[64]= new Array();
 choices[64][0] = "IANA";
 choices[64][1] = "ISOC";
 choices[64][2] = "IETF";
 choices[64][3] = "IAB";
 answers[64] = choices[64][0];
 units[64] = "103";
 comments[64] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[65]= new Array();
 choices[65][0] = "10 d&iacute;as.";
 choices[65][1] = "15 d&iacute;as.";
 choices[65][2] = "1 mes.";
 choices[65][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[65] = choices[65][0];
 units[65] = "7";
 comments[65] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[66]= "67)  El sector Servicios NO incluye:";
 choices[66]= new Array();
 choices[66][0] = "El Comercio";
 choices[66][1] = "Los Transportes";
 choices[66][2] = "La Energ&iacute;a";
 choices[66][3] = "Las Comunicaciones";
 answers[66] = choices[66][2];
 units[66] = "12";
 comments[66] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[67]= new Array();
 choices[67][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[67][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[67][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[67][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[67] = choices[67][0];
 units[67] = "7";
 comments[67] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[68]= new Array();
 choices[68][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[68][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[68][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[68][3] = "Todas son correctas.";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[69]= "70)  El Parlamento Europeo celebrar&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[69][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[69][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[69][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[70]= "71)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[70][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[70][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[70][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[71]= "72)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[71]= new Array();
 choices[71][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[71][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[71][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[71][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[72]= new Array();
 choices[72][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[72][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[72][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[72][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[72] = choices[72][3];
 units[72] = "5";
 comments[72] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[73]= new Array();
 choices[73][0] = "Flexibilidad para variar el servicio o producto";
 choices[73][1] = "Eliminar desperdicios";
 choices[73][2] = "Decidir lo m&aacute;s tarde posible";
 choices[73][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[73] = choices[73][0];
 units[73] = "34";
 comments[73] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Org&aacute;nica.";
 choices[74][1] = "Contable.";
 choices[74][2] = "Econ&oacute;mica.";
 choices[74][3] = "Por programas.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


