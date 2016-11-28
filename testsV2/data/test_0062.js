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

//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[0]= new Array();
 choices[0][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[0][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[0][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[0][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[0] = choices[0][0];
 units[0] = "76";
 comments[0] = "Id Pregunta: 855. Xunta de Galicia 2015";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[1]= "2)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[1]= new Array();
 choices[1][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[1][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[1][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[1][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[2]= new Array();
 choices[2][0] = "Perceptible";
 choices[2][1] = "Operable";
 choices[2][2] = "Comprensible";
 choices[2][3] = "Robusto";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[3]= new Array();
 choices[3][0] = "Art&iacute;culo 9.1 CE.";
 choices[3][1] = "Art&iacute;culo 53 CE.";
 choices[3][2] = "Art&iacute;culo 14 CE.";
 choices[3][3] = "Art&iacute;culo 16 CE.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[4]= new Array();
 choices[4][0] = "El Ministro de Econom&iacute;a.";
 choices[4][1] = "El Gobierno.";
 choices[4][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[4][3] = "El Presidente del Gobierno.";
 answers[4] = choices[4][1];
 units[4] = "10";
 comments[4] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[5]= new Array();
 choices[5][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[5][1] = "Pasivos financieros y transferencias de capital.";
 choices[5][2] = "Activos financieros y pasivos financieros.";
 choices[5][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[6]= new Array();
 choices[6][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[6][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[6][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[6][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[7]= "8)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[7]= new Array();
 choices[7][0] = "por Real Decreto";
 choices[7][1] = "reglamentariamente";
 choices[7][2] = "mediante Ley";
 choices[7][3] = "ninguna es correcta";
 answers[7] = choices[7][1];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[8]= new Array();
 choices[8][0] = "IEEE 802.11p";
 choices[8][1] = "IEEE 802.11r";
 choices[8][2] = "IEEE 802.11v";
 choices[8][3] = "IEEE 802.11w";
 answers[8] = choices[8][1];
 units[8] = "112";
 comments[8] = "Id Pregunta: 574. Tema 112. TAI 2016.";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[9]= "10)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[9]= new Array();
 choices[9][0] = "la capital del pa&iacute;s";
 choices[9][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[9][2] = "cada una de las provincias";
 choices[9][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[10]= new Array();
 choices[10][0] = "Lean startup";
 choices[10][1] = "Business Model Canvas";
 choices[10][2] = "Dynamic system Development method";
 choices[10][3] = "Lean software development";
 answers[10] = choices[10][2];
 units[10] = "34";
 comments[10] = "Id Pregunta: 722. Metodologias Lean";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[11]= new Array();
 choices[11][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[11][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[11][2] = "Servicio de seguridad gestionada";
 choices[11][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[11] = choices[11][1];
 units[11] = "26";
 comments[11] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[12]= "13)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[12]= new Array();
 choices[12][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[12][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[12][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[12][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[13]= "14)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[13]= new Array();
 choices[13][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[13][1] = "la Organizaci&oacute;n Territorial";
 choices[13][2] = "la Organizaci&oacute;n sectorial";
 choices[13][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[14]= new Array();
 choices[14][0] = "Programa de Educaci&oacute;n Digital";
 choices[14][1] = "Programa de Salud y Bienestar Social";
 choices[14][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[14][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[14] = choices[14][3];
 units[14] = "19";
 comments[14] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[15]= new Array();
 choices[15][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[15][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[15][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[15][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[15] = choices[15][3];
 units[15] = "22";
 comments[15] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[16][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[16][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[16][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[16] = choices[16][1];
 units[16] = "60";
 comments[16] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[17]= new Array();
 choices[17][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[17][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[17][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[17][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[17] = choices[17][2];
 units[17] = "22";
 comments[17] = "Id Pregunta: 121. ";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[18]= "19)  Son bases de datos NoSQL:";
 choices[18]= new Array();
 choices[18][0] = "MongoDB y Maria DB";
 choices[18][1] = "HBase y Dynamo";
 choices[18][2] = "MariaDB, Cassandra y BigTable";
 choices[18][3] = "La A) y la C)";
 answers[18] = choices[18][1];
 units[18] = "73";
 comments[18] = "Id Pregunta: 104. ";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[19]= "20)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[19]= new Array();
 choices[19][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[19][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[19][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[19][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[20]= "21)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[20][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[20][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[20][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[21]= new Array();
 choices[21][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[21][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[21][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[21][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[22]= "23)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[22]= new Array();
 choices[22][0] = "Parcial.";
 choices[22][1] = "Sectorial.";
 choices[22][2] = "Tranversal.";
 choices[22][3] = "Vertical.";
 answers[22] = choices[22][2];
 units[22] = "14";
 comments[22] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[23]= "24)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[23]= new Array();
 choices[23][0] = "En sentencias switch para alterar el control de flujo.";
 choices[23][1] = "Para manejar excepciones.";
 choices[23][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[23][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[23] = choices[23][1];
 units[23] = "64";
 comments[23] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[24]= "25)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[24]= new Array();
 choices[24][0] = "Un plan de igualdad.";
 choices[24][1] = "Un informe de impacto de g&eacute;nero.";
 choices[24][2] = "Un programa de igualdad.";
 choices[24][3] = "Todas son correctas.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[25]= new Array();
 choices[25][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[25][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[25][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[25][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[25] = choices[25][0];
 units[25] = "19";
 comments[25] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la respuesta falsa";
 choices[26]= new Array();
 choices[26][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[26][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[26][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[26][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[26] = choices[26][3];
 units[26] = "22";
 comments[26] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[27]= "28)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[27]= new Array();
 choices[27][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[27][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[27][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[27][3] = "Todas las respuestas anteriores son correctas.";
 answers[27] = choices[27][0];
 units[27] = "45";
 comments[27] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[28]= new Array();
 choices[28][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[28][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[28][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[28][3] = "Todos los anteriores";
 answers[28] = choices[28][3];
 units[28] = "19";
 comments[28] = "Id Pregunta: 592. Estrategia TIC";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[29]= "30)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Anualmente.";
 choices[29][1] = "Ninguna de las respuestas es correcta.";
 choices[29][2] = "Trimestralmente.";
 choices[29][3] = "Semestralmente.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[30]= new Array();
 choices[30][0] = "Versi&oacute;n digital prioritaria.";
 choices[30][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[30][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[30][3] = "Apertura y transparencia.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[31]= "32)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[31]= new Array();
 choices[31][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[31][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[31][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[31][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[31] = choices[31][0];
 units[31] = "12";
 comments[31] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[32]= "33)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[32]= new Array();
 choices[32][0] = "El rey, a propuesta del Gobierno.";
 choices[32][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[32][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[32][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[32] = choices[32][1];
 units[32] = "1";
 comments[32] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[33]= new Array();
 choices[33][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[33][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[33][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[33][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[33] = choices[33][3];
 units[33] = "57";
 comments[33] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[34]= new Array();
 choices[34][0] = "Constitucional.";
 choices[34][1] = "Penal.";
 choices[34][2] = "Militar.";
 choices[34][3] = "Tribunales consuetudinarios.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[35]= new Array();
 choices[35][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[35][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[35][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[35][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[35] = choices[35][3];
 units[35] = "106";
 comments[35] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[36]= "37)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[36]= new Array();
 choices[36][0] = "Pas&oacute; de 518 a 626.";
 choices[36][1] = "Pas&oacute; de 434 a 518.";
 choices[36][2] = "Pas&oacute; de 345 a 512.";
 choices[36][3] = "Pas&oacute; de 435 a 610.";
 answers[36] = choices[36][1];
 units[36] = "5";
 comments[36] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[37]= new Array();
 choices[37][0] = "Ley 50/1997, del Gobierno.";
 choices[37][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[37][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[37][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[37] = choices[37][1];
 units[37] = "10";
 comments[37] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[38]= "39)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[38]= new Array();
 choices[38][0] = "personalidad jur&iacute;dica propia";
 choices[38][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[38][2] = "personalidad jur&iacute;dica plena";
 choices[38][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[38] = choices[38][1];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[39]= "40)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[39]= new Array();
 choices[39][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[39][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[39][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[39][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[39] = choices[39][1];
 units[39] = "95";
 comments[39] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[40]= new Array();
 choices[40][0] = "En 2015";
 choices[40][1] = "En 2013";
 choices[40][2] = "En 2016";
 choices[40][3] = "En 2007";
 answers[40] = choices[40][1];
 units[40] = "19";
 comments[40] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[41]= "42)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[41]= new Array();
 choices[41][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[41][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[41][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[41][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[41] = choices[41][0];
 units[41] = "60";
 comments[41] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[42]= "43)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[42]= new Array();
 choices[42][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[42][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[42][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[42][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[43]= new Array();
 choices[43][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[43][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[43][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[43][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[43] = choices[43][0];
 units[43] = "86";
 comments[43] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[44]= new Array();
 choices[44][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[44][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[44][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[44][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[44] = choices[44][0];
 units[44] = "77";
 comments[44] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[45]= new Array();
 choices[45][0] = "En t&iacute;tulos-valores.";
 choices[45][1] = "Las respuestas a) y b) son correctas.";
 choices[45][2] = "Las respuestas a) y b) no son correctas.";
 choices[45][3] = "En cuenta.";
 answers[45] = choices[45][1];
 units[45] = "10";
 comments[45] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[46]= new Array();
 choices[46][0] = "Consumidores";
 choices[46][1] = "PYMES y Start-ups";
 choices[46][2] = "La Industria";
 choices[46][3] = "Todos los anteriores";
 answers[46] = choices[46][3];
 units[46] = "17";
 comments[46] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[47]= "48)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[47][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[47][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[47][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[47] = choices[47][2];
 units[47] = "121";
 comments[47] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[48]= new Array();
 choices[48][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[48][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[48][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[48][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[49]= "50)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[49]= new Array();
 choices[49][0] = "Est&aacute; desarrollado en Java.";
 choices[49][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[49][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[49][3] = "Todas las afirmaciones son correctas.";
 answers[49] = choices[49][2];
 units[49] = "92";
 comments[49] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[50]= new Array();
 choices[50][0] = "El Parlamento y el Consejo.";
 choices[50][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[50][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[50][3] = "La Comisi&oacute;n y el Consejo.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[51]= "52)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[51]= new Array();
 choices[51][0] = "De los interesados en el procedimiento";
 choices[51][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[51][2] = "Disposiciones generales";
 choices[51][3] = "De los actos administrativos";
 answers[51] = choices[51][2];
 units[51] = "7";
 comments[51] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[52]= new Array();
 choices[52][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[52][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[52][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[52][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[52] = choices[52][2];
 units[52] = "22";
 comments[52] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[53]= "54)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[53][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[53][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[53][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[54]= "55)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[54]= new Array();
 choices[54][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[54][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[54][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[54][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[54] = choices[54][2];
 units[54] = "57";
 comments[54] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[55]= new Array();
 choices[55][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[55][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[55][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[55][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la respuesta falsa:";
 choices[56]= new Array();
 choices[56][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[56][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[56][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[56][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[57]= "58)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[57]= new Array();
 choices[57][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[57][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[57][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[57][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[58]= "59)  La sede del Parlamento Europeo se encuentra en:";
 choices[58]= new Array();
 choices[58][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[58][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[58][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[58][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[59]= new Array();
 choices[59][0] = "El Presidente del Gobierno.";
 choices[59][1] = "El Consejo de Ministros.";
 choices[59][2] = "40 Diputados.";
 choices[59][3] = "El Ministerio Fiscal.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[60]= "61)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[60]= new Array();
 choices[60][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[60][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[60][2] = "Las Inspecciones Generales de los Servicios";
 choices[60][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[60] = choices[60][1];
 units[60] = "75";
 comments[60] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[61][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[61][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[61][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[62]= new Array();
 choices[62][0] = "Tres a&ntilde;os.";
 choices[62][1] = "Cuatro a&ntilde;os.";
 choices[62][2] = "Cinco a&ntilde;os.";
 choices[62][3] = "Seis a&ntilde;os.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[63]= "64)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[63]= new Array();
 choices[63][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[63][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[63][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[63][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[63] = choices[63][0];
 units[63] = "7";
 comments[63] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[64]= "65)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[64][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[64][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[64][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[65]= new Array();
 choices[65][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[65][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[65][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[65][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[65] = choices[65][3];
 units[65] = "22";
 comments[65] = "Id Pregunta: 126. ";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[66]= "67)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[66]= new Array();
 choices[66][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[66][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[66][2] = "Ambas son correctas.";
 choices[66][3] = "Ambas son incorrectas.";
 answers[66] = choices[66][0];
 units[66] = "14";
 comments[66] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[67]= "68)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[67]= new Array();
 choices[67][0] = "Programaci&oacute;n estructurada.";
 choices[67][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[67][2] = "Programaci&oacute;n extrema.";
 choices[67][3] = "Programaci&oacute;n Espuria.";
 answers[67] = choices[67][2];
 units[67] = "92";
 comments[67] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[68]= "69)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[68][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[68][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[68][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[69]= "70)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[69]= new Array();
 choices[69][0] = "El Instituto de la Mujer.";
 choices[69][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[69][2] = "Ambas son correctas.";
 choices[69][3] = "A y B son incorrectas.";
 answers[69] = choices[69][2];
 units[69] = "14";
 comments[69] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[70]= new Array();
 choices[70][0] = "23";
 choices[70][1] = "20";
 choices[70][2] = "14";
 choices[70][3] = "18";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[71]= "72)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[71]= new Array();
 choices[71][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[71][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[71][2] = "Ambas son correctas.";
 choices[71][3] = "A y B son incorrectas.";
 answers[71] = choices[71][2];
 units[71] = "14";
 comments[71] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[72]= "73)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[72][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[72][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[72][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[72] = choices[72][3];
 units[72] = "26";
 comments[72] = "Id Pregunta: 552. Gobernanza TIC";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[73]= new Array();
 choices[73][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[73][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[73][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[73][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[74]= "75)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[74]= new Array();
 choices[74][0] = "A nivel de art&iacute;culo.";
 choices[74][1] = "A nivel de cap&iacute;tulo.";
 choices[74][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[74][3] = "A nivel de concepto.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


