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

//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[0]= new Array();
 choices[0][0] = "Un diputado y un senador, cada una de ellas";
 choices[0][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[0][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[0][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[1]= "2)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[1]= new Array();
 choices[1][0] = "De las disposiciones favorables.";
 choices[1][1] = "De las disposiciones sancionadoras no favorables.";
 choices[1][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[1][3] = "Las respuestas b) y c) son correctas.";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[2]= "3)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[2][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[2][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[2][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[2] = choices[2][3];
 units[2] = "22";
 comments[2] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[3]= new Array();
 choices[3][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[3][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[3][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[3][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[3] = choices[3][3];
 units[3] = "10";
 comments[3] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[4]= "5)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[4]= new Array();
 choices[4][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[4][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[4][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[4][3] = "todas son correctas";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[5]= "6)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[5]= new Array();
 choices[5][0] = "Subsecretario";
 choices[5][1] = "Subdirector general";
 choices[5][2] = "Secretario de Estado";
 choices[5][3] = "ninguna es correcta";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[6]= "7)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[6]= new Array();
 choices[6][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[6][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[6][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[6][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[6] = choices[6][2];
 units[6] = "12";
 comments[6] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[7]= new Array();
 choices[7][0] = "SessionBean";
 choices[7][1] = "JavaBean";
 choices[7][2] = "MBeans";
 choices[7][3] = "MessageDrivenBean";
 answers[7] = choices[7][2];
 units[7] = "64";
 comments[7] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[8]= "9)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[8]= new Array();
 choices[8][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[8][1] = "Clasificaci&oacute;n por cuenta.";
 choices[8][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[8][3] = "Clasificaci&oacute;n por intercambio.";
 answers[8] = choices[8][3];
 units[8] = "56";
 comments[8] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[9]= "10)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[9]= new Array();
 choices[9][0] = "192.228.0.0";
 choices[9][1] = "192.228.8.0";
 choices[9][2] = "192.228.16.0";
 choices[9][3] = "192.228.17.0";
 answers[9] = choices[9][2];
 units[9] = "109";
 comments[9] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[10]= "11)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[10]= new Array();
 choices[10][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[10][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[10][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[10][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[11]= "12)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[11]= new Array();
 choices[11][0] = "Presencia equilibrada.";
 choices[11][1] = "Presencia paritaria.";
 choices[11][2] = "Presencia consensuada.";
 choices[11][3] = "presencia horizontal.";
 answers[11] = choices[11][0];
 units[11] = "14";
 comments[11] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[12]= new Array();
 choices[12][0] = "Maximizar el valor para los clientes";
 choices[12][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[12][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[12][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[12] = choices[12][3];
 units[12] = "34";
 comments[12] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[13]= new Array();
 choices[13][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[13][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[13][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[13][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[13] = choices[13][0];
 units[13] = "1";
 comments[13] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[14]= "15)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[14][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[14][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[14][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[14] = choices[14][2];
 units[14] = "26";
 comments[14] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[15]= new Array();
 choices[15][0] = "Quince miembros.";
 choices[15][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[15][2] = "Los miembros que determine el Consejo.";
 choices[15][3] = "Un Presidente y quince miembros.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[16]= new Array();
 choices[16][0] = "Perceptible";
 choices[16][1] = "Operable";
 choices[16][2] = "Comprensible";
 choices[16][3] = "Robusto";
 answers[16] = choices[16][2];
 units[16] = "42";
 comments[16] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[17]= "18)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[17]= new Array();
 choices[17][0] = "los Secretarios de Estado";
 choices[17][1] = "los Ministros";
 choices[17][2] = "los Subsecretarios";
 choices[17][3] = "los Secretarios generales";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[18]= "19)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[18]= new Array();
 choices[18][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[18][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[18][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[18][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[18] = choices[18][3];
 units[18] = "101";
 comments[18] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[19]= "20)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[19]= new Array();
 choices[19][0] = "Peters";
 choices[19][1] = "Hollingsworth";
 choices[19][2] = "Manuel Castells";
 choices[19][3] = "Gaebler";
 answers[19] = choices[19][1];
 units[19] = "18, 20";
 comments[19] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[20]= "21)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[20]= new Array();
 choices[20][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[20][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[20][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[20][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[20] = choices[20][2];
 units[20] = "22";
 comments[20] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[21]= "22)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[21]= new Array();
 choices[21][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[21][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[21][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[21][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[21] = choices[21][2];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[22]= new Array();
 choices[22][0] = "Consumidores";
 choices[22][1] = "PYMES y Start-ups";
 choices[22][2] = "La Industria";
 choices[22][3] = "Todos los anteriores";
 answers[22] = choices[22][3];
 units[22] = "17";
 comments[22] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


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


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[24]= "25)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[24]= new Array();
 choices[24][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[24][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[24][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[24][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[24] = choices[24][3];
 units[24] = "18, 20";
 comments[24] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[25]= new Array();
 choices[25][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[25][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[25][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[25][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[25] = choices[25][2];
 units[25] = "7";
 comments[25] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[26]= "27)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[26]= new Array();
 choices[26][0] = "Intersecci&oacute;n.";
 choices[26][1] = "Uni&oacute;n.";
 choices[26][2] = "Restricci&oacute;n.";
 choices[26][3] = "Diferencia.";
 answers[26] = choices[26][0];
 units[26] = "60";
 comments[26] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[27]= "28)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[27]= new Array();
 choices[27][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[27][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[27][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[27][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[28][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[28][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[28][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[28] = choices[28][2];
 units[28] = "47";
 comments[28] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[29]= "30)  La recusaci&oacute;n se plantea...";
 choices[29]= new Array();
 choices[29][0] = "Antes de iniciado el procedimiento";
 choices[29][1] = "Una vez iniciado el procedimiento";
 choices[29][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[29][3] = "En cualquier momento del procedimiento";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[30]= "31)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[30]= new Array();
 choices[30][0] = "Tres a&ntilde;os.";
 choices[30][1] = "Cuatro a&ntilde;os.";
 choices[30][2] = "Cinco a&ntilde;os.";
 choices[30][3] = "Seis a&ntilde;os.";
 answers[30] = choices[30][3];
 units[30] = "5";
 comments[30] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[31]= "32)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[31]= new Array();
 choices[31][0] = "0";
 choices[31][1] = "1";
 choices[31][2] = "Tantos como peticiones concurrentes tenga.";
 choices[31][3] = "Tantos como le permita la memoria de la JVM.";
 answers[31] = choices[31][1];
 units[31] = "64";
 comments[31] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[32]= new Array();
 choices[32][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[32][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[32][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[32][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[32] = choices[32][3];
 units[32] = "10";
 comments[32] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[33]= "34)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[33]= new Array();
 choices[33][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[33][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[33][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[33][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[34]= "35)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[34]= new Array();
 choices[34][0] = "Monol&iacute;tico.";
 choices[34][1] = "Estratificado.";
 choices[34][2] = "Cliente/servidor.";
 choices[34][3] = "Orientado a objetos.";
 answers[34] = choices[34][3];
 units[34] = "56";
 comments[34] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[35]= "36)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[35]= new Array();
 choices[35][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[35][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[35][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[35][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[35] = choices[35][3];
 units[35] = "77";
 comments[35] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[36]= "37)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[36]= new Array();
 choices[36][0] = "Un d&iacute;a";
 choices[36][1] = "Dos d&iacute;as";
 choices[36][2] = "Tres d&iacute;as";
 choices[36][3] = "Cuatro d&iacute;as";
 answers[36] = choices[36][3];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[37]= "38)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[37]= new Array();
 choices[37][0] = "Los propios miembros del Tribunal.";
 choices[37][1] = "El Consejo de Europa.";
 choices[37][2] = "El Consejo Europeo.";
 choices[37][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[38]= "39)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[38]= new Array();
 choices[38][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[38][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[38][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[38][3] = "Todos los anteriores";
 answers[38] = choices[38][3];
 units[38] = "19";
 comments[38] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[39]= "40)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[39]= new Array();
 choices[39][0] = "&oacute;rganos superiores";
 choices[39][1] = "&oacute;rganos directivos";
 choices[39][2] = "&oacute;rganos superiores y directivos";
 choices[39][3] = "ninguna es correcta";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[40]= "41)  El Presupuesto por programas sirve para saber...";
 choices[40]= new Array();
 choices[40][0] = "En qu&eacute; nos gastamos el dinero";
 choices[40][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[40][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[40][3] = "Qui&eacute;n se gasta el dinero";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[41]= new Array();
 choices[41][0] = "Al Gobierno de la naci&oacute;n";
 choices[41][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[41][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[41][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[41] = choices[41][3];
 units[41] = "7";
 comments[41] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[42]= "43)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[42]= new Array();
 choices[42][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[42][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[42][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[42][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[42] = choices[42][2];
 units[42] = "108";
 comments[42] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[43]= "44)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[43]= new Array();
 choices[43][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[43][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[43][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[43][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 510. LEY 39/2015";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[44]= "45)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[44]= new Array();
 choices[44][0] = "Interchange of Data between Administrations (IDA)";
 choices[44][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[44][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[44][3] = "Interoperability Electronic European Solution (IEES)";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[45]= new Array();
 choices[45][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[45][1] = "Solamente el Congreso.";
 choices[45][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[45][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[46]= new Array();
 choices[46][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[46][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[46][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[46][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[47]= "48)  Son proyectos de Apache relacionados con Big Data:";
 choices[47]= new Array();
 choices[47][0] = "Hadoop";
 choices[47][1] = "Spark";
 choices[47][2] = "A) y B)";
 choices[47][3] = "Niguno de los anteriores";
 answers[47] = choices[47][2];
 units[47] = "73";
 comments[47] = "Id Pregunta: 108. ";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[48]= "49)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[48]= new Array();
 choices[48][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[48][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[48][2] = "Un programa de igualdad.";
 choices[48][3] = "Un estatuto de igualdad.";
 answers[48] = choices[48][0];
 units[48] = "14";
 comments[48] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[49]= "50)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[49]= new Array();
 choices[49][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[49][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[49][2] = "A partir del 1 de enero de 2015";
 choices[49][3] = "A partir del 1 de julio de 2016";
 answers[49] = choices[49][1];
 units[49] = "77";
 comments[49] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[50]= "51)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[50]= new Array();
 choices[50][0] = "El Presidente y su gabinete.";
 choices[50][1] = "El Presidente y sus Ministros.";
 choices[50][2] = "El Rey y el Presidente.";
 choices[50][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[50] = choices[50][2];
 units[50] = "1";
 comments[50] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[51]= new Array();
 choices[51][0] = "Art&iacute;culo 70.";
 choices[51][1] = "Art&iacute;culo 54.";
 choices[51][2] = "Articulo 62.";
 choices[51][3] = "Articulo 55. 5.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[52]= "53)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[52]= new Array();
 choices[52][0] = "formular solicitudes";
 choices[52][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[52][2] = "presentar declaraciones responsables o comunicaciones";
 choices[52][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[52] = choices[52][1];
 units[52] = "7";
 comments[52] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[53]= "54)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[53]= new Array();
 choices[53][0] = "El acoso sexual.";
 choices[53][1] = "El acoso por raz&oacute;n del sexo.";
 choices[53][2] = "Ambas son correctas.";
 choices[53][3] = "A y B son incorrectas.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[54]= "55)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[54]= new Array();
 choices[54][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[54][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[54][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[54][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[54] = choices[54][1];
 units[54] = "63";
 comments[54] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[55]= "56)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[55]= new Array();
 choices[55][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[55][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[55][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[55][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[55] = choices[55][3];
 units[55] = "1";
 comments[55] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[56]= "57)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[56]= new Array();
 choices[56][0] = "Estrasburgo.";
 choices[56][1] = "Bruselas.";
 choices[56][2] = "Luxemburgo.";
 choices[56][3] = "Holanda.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[57]= "58)  Los Secretarios generales t&eacute;cnicos:";
 choices[57]= new Array();
 choices[57][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[57][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[57][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[57][3] = "todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 792. Ley 40/2015";


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


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[59][1] = "Por Orden Ministerial.";
 choices[59][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[59][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[60][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[60][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[60][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[60] = choices[60][1];
 units[60] = "60";
 comments[60] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[61]= "62)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[61]= new Array();
 choices[61][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[61][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[61][2] = "La normativa reguladora de cada derecho.";
 choices[61][3] = "Ley 50/1997, del Gobierno.";
 answers[61] = choices[61][2];
 units[61] = "10";
 comments[61] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[62]= "63)  Sobre el recurso de reposici&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[62][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[62][2] = "Ha desaparecido en la Ley 39/2015";
 choices[62][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[62] = choices[62][0];
 units[62] = "8";
 comments[62] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[63]= "64)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[63]= new Array();
 choices[63][0] = "Tres a&ntilde;os.";
 choices[63][1] = "Dos a&ntilde;os y medio.";
 choices[63][2] = "Cinco a&ntilde;os.";
 choices[63][3] = "Seis a&ntilde;os.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[64]= new Array();
 choices[64][0] = "El Presidente del Senado.";
 choices[64][1] = "El Defensor del Pueblo.";
 choices[64][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[64][3] = "El Presidente del Gobierno.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[65]= "66)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[65]= new Array();
 choices[65][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[65][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[65][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[65][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[66]= "67)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[66]= new Array();
 choices[66][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[66][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[66][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[66][3] = "Todas son correctas.";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[67]= "68)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[67]= new Array();
 choices[67][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[67][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[67][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[67][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[68]= "69)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[68]= new Array();
 choices[68][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[68][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[68][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[68][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[69]= "70)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[69]= new Array();
 choices[69][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[69][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[69][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[69][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[70]= new Array();
 choices[70][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[70][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[70][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[70][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[70] = choices[70][0];
 units[70] = "75";
 comments[70] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[71]= new Array();
 choices[71][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[71][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[71][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[71][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta correcta:";
 choices[72]= new Array();
 choices[72][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[72][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[72][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[72][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[72] = choices[72][1];
 units[72] = "98";
 comments[72] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[73]= "74)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[73][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[73][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[73][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[73] = choices[73][0];
 units[73] = "45";
 comments[73] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[74]= "75)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[74]= new Array();
 choices[74][0] = "El Jefe del Estado.";
 choices[74][1] = "El Tribunal Constitucional.";
 choices[74][2] = "El Congreso de los Diputados.";
 choices[74][3] = "Las Cortes Generales.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 235. CONSTITUCION1978";


