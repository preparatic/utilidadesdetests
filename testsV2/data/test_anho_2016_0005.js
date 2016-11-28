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

//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[0]= new Array();
 choices[0][0] = "Se dejan listos los entornos de desarrollo";
 choices[0][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[0][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[0][3] = "Todas las anteriores son correctas";
 answers[0] = choices[0][3];
 units[0] = "34, 84";
 comments[0] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[1]= "2)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[1]= new Array();
 choices[1][0] = "20 parlamentarios.";
 choices[1][1] = "29 parlamentarios.";
 choices[1][2] = "18 parlamentarios.";
 choices[1][3] = "23 parlamentarios.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[2]= "3)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[2]= new Array();
 choices[2][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[2][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[2][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[2][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[2] = choices[2][1];
 units[2] = "95";
 comments[2] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[3]= "4)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[3]= new Array();
 choices[3][0] = "Estrasburgo.";
 choices[3][1] = "Bruselas.";
 choices[3][2] = "Luxemburgo.";
 choices[3][3] = "Holanda.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[4]= new Array();
 choices[4][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[4][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[4][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[4][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[5]= new Array();
 choices[5][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[5][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[5][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[5][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[6]= "7)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[6]= new Array();
 choices[6][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[6][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[6][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[6][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[6] = choices[6][1];
 units[6] = "19";
 comments[6] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[7]= "8)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[7]= new Array();
 choices[7][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[7][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[7][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[7][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[7] = choices[7][1];
 units[7] = "92";
 comments[7] = "Id Pregunta: 704. INTEGRACION CONTINUA";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[8]= new Array();
 choices[8][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[8][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[8][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[8][3] = "La tasa de desempleo ronda el 20%";
 answers[8] = choices[8][2];
 units[8] = "12";
 comments[8] = "Id Pregunta: 572. Modelo econ&oacute;mico";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[9]= "10)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[9]= new Array();
 choices[9][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[9][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[9][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[9][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[9] = choices[9][0];
 units[9] = "31";
 comments[9] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[10]= new Array();
 choices[10][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[10][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[10][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[10][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[10] = choices[10][0];
 units[10] = "14";
 comments[10] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[11]= "12)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[11]= new Array();
 choices[11][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[11][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[11][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[11][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[12]= "13)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[12]= new Array();
 choices[12][0] = "Cinco a&ntilde;os.";
 choices[12][1] = "Cuatro a&ntilde;os.";
 choices[12][2] = "Tres a&ntilde;os.";
 choices[12][3] = "Seis meses.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[13]= "14)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[13][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[13][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[13][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[13] = choices[13][2];
 units[13] = "83";
 comments[13] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[14]= new Array();
 choices[14][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[14][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[14][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[14][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[15]= new Array();
 choices[15][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[15][1] = "La delimitaci&oacute;n de su territorio.";
 choices[15][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[15][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[16]= "17)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[16]= new Array();
 choices[16][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[16][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[16][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[16][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[16] = choices[16][2];
 units[16] = "19";
 comments[16] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[17]= "18)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[17]= new Array();
 choices[17][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[17][1] = "mediante resoluci&oacute;n judicial especial";
 choices[17][2] = "&uacute;nicamente mediante poder notarial";
 choices[17][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[17] = choices[17][3];
 units[17] = "7";
 comments[17] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[18]= new Array();
 choices[18][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[18][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[18][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[18][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[18] = choices[18][2];
 units[18] = "15";
 comments[18] = "Id Pregunta: 118. ";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[19]= "20)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[19]= new Array();
 choices[19][0] = "Tener una estructura institucional.";
 choices[19][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[19][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[19][3] = "Todas las respuestas son correctas.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[20]= "21)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[20]= new Array();
 choices[20][0] = "Consejos y Servicios.";
 choices[20][1] = "Servicios permanentes y no permanentes.";
 choices[20][2] = "Direcciones Generales.";
 choices[20][3] = "Direcciones ministeriales.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[21]= new Array();
 choices[21][0] = "Una ley orginaria.";
 choices[21][1] = "Una ley org&aacute;nica.";
 choices[21][2] = "Una ley de bases.";
 choices[21][3] = "Una ley de transferencia.";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[22]= "23)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[22]= new Array();
 choices[22][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[22][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[22][2] = "Funcionarios e interinos.";
 choices[22][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[22] = choices[22][3];
 units[22] = "20";
 comments[22] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[23]= new Array();
 choices[23][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[23][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[23][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[23][3] = "El Instituto de la Mujer de Extremadura.";
 answers[23] = choices[23][3];
 units[23] = "14";
 comments[23] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[24]= "25)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[24]= new Array();
 choices[24][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[24][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[24][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[24][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[25]= "26)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[25]= new Array();
 choices[25][0] = "180 art&iacute;culos.";
 choices[25][1] = "182 art&iacute;culos.";
 choices[25][2] = "185 art&iacute;culos.";
 choices[25][3] = "190 art&iacute;culos.";
 answers[25] = choices[25][1];
 units[25] = "10";
 comments[25] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[26]= "27)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[26]= new Array();
 choices[26][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[26][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[26][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[26][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[27]= "28)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[27]= new Array();
 choices[27][0] = "Son vinculantes solamente.";
 choices[27][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[27][2] = "Son preceptivos y vinculantes.";
 choices[27][3] = "Son preceptivos y no vinculantes.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[28]= new Array();
 choices[28][0] = "De 1a  4 ";
 choices[28][1] = "De 3 a  7 ";
 choices[28][2] = "De 5 a  9";
 choices[28][3] = "De 7 a 11";
 answers[28] = choices[28][2];
 units[28] = "34, 84";
 comments[28] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[29]= "30)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[29]= new Array();
 choices[29][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[29][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[29][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[29][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[29] = choices[29][0];
 units[29] = "8";
 comments[29] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[30]= "31)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[30]= new Array();
 choices[30][0] = "Rey.";
 choices[30][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[30][2] = "Constituci&oacute;n.";
 choices[30][3] = "Pueblo.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[31]= "32)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[31]= new Array();
 choices[31][0] = "61";
 choices[31][1] = "53";
 choices[31][2] = "65";
 choices[31][3] = "67";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[32]= "33)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[32]= new Array();
 choices[32][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[32][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[32][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[32][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[32] = choices[32][1];
 units[32] = "14";
 comments[32] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[33]= "34)  La recusaci&oacute;n se plantea...";
 choices[33]= new Array();
 choices[33][0] = "Antes de iniciado el procedimiento";
 choices[33][1] = "Una vez iniciado el procedimiento";
 choices[33][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[33][3] = "En cualquier momento del procedimiento";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[34]= new Array();
 choices[34][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[34][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[34][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[34][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[34] = choices[34][0];
 units[34] = "14";
 comments[34] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[35]= "36)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[35]= new Array();
 choices[35][0] = "El Ministerio de Igualdad.";
 choices[35][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[35][2] = "Ambas son correctas.";
 choices[35][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[35] = choices[35][1];
 units[35] = "14";
 comments[35] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[36]= new Array();
 choices[36][0] = "Nivel 7 - MPLS.";
 choices[36][1] = "Nivel 3 - RARP.";
 choices[36][2] = "Nivel 2 - HDLC.";
 choices[36][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[36] = choices[36][2];
 units[36] = "105";
 comments[36] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[37]= new Array();
 choices[37][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[37][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[37][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[37][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[38]= "39)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[38]= new Array();
 choices[38][0] = "Windows Phone";
 choices[38][1] = "Blackberry";
 choices[38][2] = "iOS";
 choices[38][3] = "Android";
 answers[38] = choices[38][3];
 units[38] = "59";
 comments[38] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[39]= "40)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[39]= new Array();
 choices[39][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[39][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[39][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[39][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[40]= new Array();
 choices[40][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[40][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[40][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[40][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[40] = choices[40][2];
 units[40] = "22";
 comments[40] = "Id Pregunta: 121. ";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la respuesta falsa:";
 choices[41]= new Array();
 choices[41][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[41][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[41][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[41][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[42]= "43)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[42]= new Array();
 choices[42][0] = "En qu&eacute; nos gastamos el dinero";
 choices[42][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[42][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[42][3] = "Qui&eacute;n se gasta el dinero.";
 answers[42] = choices[42][0];
 units[42] = "10";
 comments[42] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[43]= "44)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[43]= new Array();
 choices[43][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[43][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[43][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[43][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[43] = choices[43][1];
 units[43] = "7";
 comments[43] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[44]= "45)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[44]= new Array();
 choices[44][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[44][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[44][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[44][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[44] = choices[44][0];
 units[44] = "10";
 comments[44] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[45]= "46)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[45]= new Array();
 choices[45][0] = "Establecer tributos.";
 choices[45][1] = "Desarrollar lo establecido en una Ley.";
 choices[45][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[45][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[46]= "47)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[46]= new Array();
 choices[46][0] = "El Delegado del Gobierno.";
 choices[46][1] = "El Subdelegado del Gobierno.";
 choices[46][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[46][3] = "El Gobernador Civil.";
 answers[46] = choices[46][2];
 units[46] = "1";
 comments[46] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[47]= "48)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[47]= new Array();
 choices[47][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[47][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[47][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[47][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[47] = choices[47][3];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[48]= "49)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[48]= new Array();
 choices[48][0] = "los &oacute;rganos administrativos";
 choices[48][1] = "las entidades dependientes";
 choices[48][2] = "las unidades administrativas";
 choices[48][3] = "los servicios comunes";
 answers[48] = choices[48][2];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[49]= new Array();
 choices[49][0] = "732";
 choices[49][1] = "626";
 choices[49][2] = "786";
 choices[49][3] = "360";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[50]= new Array();
 choices[50][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[50][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[50][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[50][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[50] = choices[50][1];
 units[50] = "15";
 comments[50] = "Id Pregunta: 112. ";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[51]= "52)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[51]= new Array();
 choices[51][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[51][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[51][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[51][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[52]= "53)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[52]= new Array();
 choices[52][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[52][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[52][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][1];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[53]= "54)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[53]= new Array();
 choices[53][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[53][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[53][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[53][3] = "Todas las respuestas anteriores son correctas.";
 answers[53] = choices[53][0];
 units[53] = "45";
 comments[53] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[54]= "55)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[54]= new Array();
 choices[54][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[54][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[54][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[54][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[54] = choices[54][0];
 units[54] = "12";
 comments[54] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[55]= "56)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[55]= new Array();
 choices[55][0] = "la Administraci&oacute;n General del Estado";
 choices[55][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[55][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[55][3] = "el sector p&uacute;blico y privado institucional";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[56]= "57)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Infrastructure as a Service (IaaS)";
 choices[56][1] = "Platform as a Service (PaaS)";
 choices[56][2] = "Software as a Service (SaaS)";
 choices[56][3] = "Application as a Service (AaaS)";
 answers[56] = choices[56][1];
 units[56] = "52";
 comments[56] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[57]= new Array();
 choices[57][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[57][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[57][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[57][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[57] = choices[57][1];
 units[57] = "28";
 comments[57] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[58]= new Array();
 choices[58][0] = "3 pilares";
 choices[58][1] = "4 pilares";
 choices[58][2] = "5 pilares";
 choices[58][3] = "7 pilares";
 answers[58] = choices[58][0];
 units[58] = "17";
 comments[58] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[59]= "60)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[59]= new Array();
 choices[59][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[59][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[59][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[59][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[59] = choices[59][3];
 units[59] = "5";
 comments[59] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[60]= new Array();
 choices[60][0] = "Cifrado de las comunicaciones";
 choices[60][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[60][2] = "Registro de los accesos";
 choices[60][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[60] = choices[60][1];
 units[60] = "35";
 comments[60] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[61]= new Array();
 choices[61][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[61][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[61][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[61][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[61] = choices[61][3];
 units[61] = "46";
 comments[61] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[62]= "63)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[62]= new Array();
 choices[62][0] = "Los cr&eacute;ditos";
 choices[62][1] = "Las partidas presupuestarias";
 choices[62][2] = "Los derechos";
 choices[62][3] = "Las obligaciones";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[63][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[63][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[63][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[64]= "65)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[64]= new Array();
 choices[64][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[64][1] = "La CETIC";
 choices[64][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[64][3] = "El MHFP";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[65]= "66)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[65]= new Array();
 choices[65][0] = "los Subsecretarios y Secretarios generales";
 choices[65][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[65][2] = "los Secretarios de Estado";
 choices[65][3] = "los Subdirectores generales";
 answers[65] = choices[65][2];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[66]= new Array();
 choices[66][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[66][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[66][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[66][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[66] = choices[66][2];
 units[66] = "17";
 comments[66] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[67]= "68)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[67]= new Array();
 choices[67][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[67][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[67][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[67][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[67] = choices[67][0];
 units[67] = "35";
 comments[67] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[68]= "69)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[68]= new Array();
 choices[68][0] = "Un informe de g&eacute;nero.";
 choices[68][1] = "La variable de sexo.";
 choices[68][2] = "La variable de edad.";
 choices[68][3] = "La variable de comportamiento.";
 answers[68] = choices[68][1];
 units[68] = "14";
 comments[68] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[69]= new Array();
 choices[69][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[69][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[69][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[69][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 562. Agenda Digital";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[70]= "71)  Los criptosistemas pueden clasificarse en:";
 choices[70]= new Array();
 choices[70][0] = "Concretos, Estables e Inestables.";
 choices[70][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[70][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[70][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[70] = choices[70][3];
 units[70] = "76";
 comments[70] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[71]= "72)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[71]= new Array();
 choices[71][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[71][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[71][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[71][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[72]= "73)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[72]= new Array();
 choices[72][0] = "2.400 euros";
 choices[72][1] = "4.000 euros";
 choices[72][2] = "3.200 euros";
 choices[72][3] = "1.600 euros";
 answers[72] = choices[72][1];
 units[72] = "37";
 comments[72] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[73]= new Array();
 choices[73][0] = "Memcached";
 choices[73][1] = "OpCache";
 choices[73][2] = "WinCache Extension for PHP";
 choices[73][3] = "Alternative PHP Cache";
 answers[73] = choices[73][0];
 units[73] = "65";
 comments[73] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[74]= "75)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[74]= new Array();
 choices[74][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[74][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[74][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[74][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 345. UNION EUROPEA";


