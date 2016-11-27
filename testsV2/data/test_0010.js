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

//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[0]= new Array();
 choices[0][0] = "10 d&iacute;as.";
 choices[0][1] = "15 d&iacute;as.";
 choices[0][2] = "1 mes.";
 choices[0][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[0] = choices[0][0];
 units[0] = "7";
 comments[0] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[1]= "2)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[1]= new Array();
 choices[1][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[1][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[1][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[1][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[2]= "3)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[2]= new Array();
 choices[2][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[2][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[2][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[2][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[2] = choices[2][0];
 units[2] = "28";
 comments[2] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[3]= new Array();
 choices[3][0] = "Un diputado y un senador, cada una de ellas";
 choices[3][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[3][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[3][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[4]= "5)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[4]= new Array();
 choices[4][0] = "El Gobierno.";
 choices[4][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[4][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[4][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[4] = choices[4][2];
 units[4] = "1";
 comments[4] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[5]= "6)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[5][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[5][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[5][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[5] = choices[5][3];
 units[5] = "26";
 comments[5] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[6]= new Array();
 choices[6][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[6][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[6][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[6][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[6] = choices[6][1];
 units[6] = "7";
 comments[6] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[7]= new Array();
 choices[7][0] = "Data Mining (miner&iacute;a de datos)";
 choices[7][1] = "Business Intelligence (inteligencia de negocio)";
 choices[7][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[7][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[7] = choices[7][1];
 units[7] = "72";
 comments[7] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[8]= new Array();
 choices[8][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[8][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[8][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[8][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[8] = choices[8][1];
 units[8] = "84";
 comments[8] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[9]= new Array();
 choices[9][0] = "117.5";
 choices[9][1] = "117.1";
 choices[9][2] = "116";
 choices[9][3] = "15";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[10]= new Array();
 choices[10][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[10][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[10][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[10][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[11]= new Array();
 choices[11][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[11][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[11][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[11][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[11] = choices[11][1];
 units[11] = "18, 20";
 comments[11] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[12]= new Array();
 choices[12][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[12][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[12][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[12][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[12] = choices[12][0];
 units[12] = "73";
 comments[12] = "Id Pregunta: 654. ";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[13]= "14)  Big Data:";
 choices[13]= new Array();
 choices[13][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[13][1] = "No puede emplearse para tratar datos no estructurados";
 choices[13][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 109. ";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[14]= "15)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[14]= new Array();
 choices[14][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[14][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[14][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[14][3] = "Todas son correctas.";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[15]= new Array();
 choices[15][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[15][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[15][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[16]= "17)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[16]= new Array();
 choices[16][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[16][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[16][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[16][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[17]= new Array();
 choices[17][0] = "DoS";
 choices[17][1] = "Phishing";
 choices[17][2] = "Sniffing";
 choices[17][3] = "Spoofing";
 answers[17] = choices[17][3];
 units[17] = "119";
 comments[17] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[18]= new Array();
 choices[18][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[18][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[18][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[18][3] = "La tasa de desempleo ronda el 20%";
 answers[18] = choices[18][2];
 units[18] = "12";
 comments[18] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[19]= "20)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[19]= new Array();
 choices[19][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[19][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[19][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[19][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[19] = choices[19][2];
 units[19] = "12";
 comments[19] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[20]= "21)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[20]= new Array();
 choices[20][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[20][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[20][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[20][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[20] = choices[20][2];
 units[20] = "7";
 comments[20] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[21]= new Array();
 choices[21][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[21][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[21][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[21][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[22]= "23)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[22]= new Array();
 choices[22][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[22][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[22][2] = "Los interesados en el procedimiento";
 choices[22][3] = "Las alternativas b) y c) son correctas";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[23]= new Array();
 choices[23][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[23][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[23][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[23][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[23] = choices[23][2];
 units[23] = "22";
 comments[23] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[24]= new Array();
 choices[24][0] = "Backlog refinement";
 choices[24][1] = "Backlog refinement";
 choices[24][2] = "A y b son correctas";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][2];
 units[24] = "34, 84";
 comments[24] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[25]= "26)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[25]= new Array();
 choices[25][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[25][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[25][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[25][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[26]= new Array();
 choices[26][0] = "Entre 1973 y 1978";
 choices[26][1] = "Entre 1992 y 1996";
 choices[26][2] = "Entre 1978 y 1985";
 choices[26][3] = "Entre 2008 y 2013";
 answers[26] = choices[26][2];
 units[26] = "12";
 comments[26] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[27]= "28)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[27]= new Array();
 choices[27][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[27][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[27][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[27][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[27] = choices[27][2];
 units[27] = "73";
 comments[27] = "Id Pregunta: 652. ";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[28]= "29)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[28]= new Array();
 choices[28][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[28][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[28][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[28][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[28] = choices[28][0];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[29]= "30)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[29][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[29][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[29][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[29] = choices[29][2];
 units[29] = "83";
 comments[29] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[30]= "31)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[30]= new Array();
 choices[30][0] = "Presentar la moci&oacute;n de censura.";
 choices[30][1] = "Presidir las sesiones del Parlamento.";
 choices[30][2] = "Organizar la Secretar&iacute;a General.";
 choices[30][3] = "Preparar las actividades de las Comisiones.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[31]= "32)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[31][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[31][2] = "el sector p&uacute;blico institucional";
 choices[31][3] = "el sector privado corporativo";
 answers[31] = choices[31][3];
 units[31] = "7";
 comments[31] = "Id Pregunta: 513. LEY 39/2015";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[32]= new Array();
 choices[32][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[32][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[32][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[32][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[32] = choices[32][1];
 units[32] = "92";
 comments[32] = "Id Pregunta: 714. INTEGRACION CONTINUA";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[33]= "34)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[33]= new Array();
 choices[33][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[33][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[33][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[33][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[33] = choices[33][2];
 units[33] = "108";
 comments[33] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[34]= "35)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[34]= new Array();
 choices[34][0] = "La Ley Org&aacute;nica 2/2011";
 choices[34][1] = "La Ley Org&aacute;nica 2/2012";
 choices[34][2] = "La Ley Org&aacute;nica 3/2012";
 choices[34][3] = "La Ley Org&aacute;nica 2/2002";
 answers[34] = choices[34][1];
 units[34] = "12";
 comments[34] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[35]= "36)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[35]= new Array();
 choices[35][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[35][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[35][2] = "Son refrendados por el Rey.";
 choices[35][3] = "Son convocados por el Presidente del Gobierno.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[36]= "37)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[36]= new Array();
 choices[36][0] = "Cinco a&ntilde;os.";
 choices[36][1] = "Seis a&ntilde;os.";
 choices[36][2] = "Cuatro a&ntilde;os.";
 choices[36][3] = "Tres a&ntilde;os.";
 answers[36] = choices[36][0];
 units[36] = "5";
 comments[36] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[37]= new Array();
 choices[37][0] = "absoluta de las Cortes Generales.";
 choices[37][1] = "absoluta del Congreso de los Diputados.";
 choices[37][2] = "simple de las Cortes Generales.";
 choices[37][3] = "simple del Congreso de los Diputados.";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Reglamentos no se caracterizan por:";
 choices[38]= new Array();
 choices[38][0] = "No poseer alcance general.";
 choices[38][1] = "Ser obligatorios.";
 choices[38][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[38][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[39]= new Array();
 choices[39][0] = "Car&aacute;cter sustitutivo";
 choices[39][1] = "Car&aacute;cter obligatorio";
 choices[39][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][3];
 units[39] = "19";
 comments[39] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[40]= new Array();
 choices[40][0] = "Tres meses.";
 choices[40][1] = "Nueve meses.";
 choices[40][2] = "Cuatro meses.";
 choices[40][3] = "Seis meses.";
 answers[40] = choices[40][0];
 units[40] = "10";
 comments[40] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[41]= "42)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[41]= new Array();
 choices[41][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[41][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[41][2] = "Ambas son correctas.";
 choices[41][3] = "A y B son incorrectas.";
 answers[41] = choices[41][2];
 units[41] = "14";
 comments[41] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[42]= new Array();
 choices[42][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[42][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[42][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[42][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[42] = choices[42][2];
 units[42] = "19";
 comments[42] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[43]= new Array();
 choices[43][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[43][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[43][2] = "A) y B) son verdaderas";
 choices[43][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[43] = choices[43][2];
 units[43] = "73";
 comments[43] = "Id Pregunta: 106. ";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[44]= "45)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[44]= new Array();
 choices[44][0] = "Ejecuci&oacute;n";
 choices[44][1] = "Adjudicaci&oacute;n";
 choices[44][2] = "Licitaci&oacute;n";
 choices[44][3] = "Formalizaci&oacute;n";
 answers[44] = choices[44][3];
 units[44] = "37";
 comments[44] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[45]= "46)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[45]= new Array();
 choices[45][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[45][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[45][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[45][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[46]= "47)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[46]= new Array();
 choices[46][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[46][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[46][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[46][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[47]= "48)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[47]= new Array();
 choices[47][0] = "6 TB.";
 choices[47][1] = "8 TB.";
 choices[47][2] = "7 TB.";
 choices[47][3] = "4 TB.";
 answers[47] = choices[47][3];
 units[47] = "53";
 comments[47] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[48]= "49)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[48][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[48][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[48][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[49]= "50)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[49]= new Array();
 choices[49][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[49][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[49][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[49][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[50]= new Array();
 choices[50][0] = "Nivel 7 - MPLS.";
 choices[50][1] = "Nivel 3 - RARP.";
 choices[50][2] = "Nivel 2 - HDLC.";
 choices[50][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[50] = choices[50][2];
 units[50] = "105";
 comments[50] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[51]= "52)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[51]= new Array();
 choices[51][0] = "apud acta";
 choices[51][1] = "presencialmente";
 choices[51][2] = "electr&oacute;nicamente";
 choices[51][3] = "todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "7";
 comments[51] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[52]= new Array();
 choices[52][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[52][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[52][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[52][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[52] = choices[52][3];
 units[52] = "5";
 comments[52] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[53]= "54)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "Gran volumen de informaci&oacute;n";
 choices[53][1] = "Gran variedad de datos";
 choices[53][2] = "Se analizan datos a gran velocidad";
 choices[53][3] = "Todas las anteriores son verdaderas";
 answers[53] = choices[53][3];
 units[53] = "73";
 comments[53] = "Id Pregunta: 105. ";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[54]= "55)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[54]= new Array();
 choices[54][0] = "la poblaci&oacute;n del territorio";
 choices[54][1] = "el volumen de gesti&oacute;n";
 choices[54][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[54][3] = "todas son correctas";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[55]= new Array();
 choices[55][0] = "Indirecta.";
 choices[55][1] = "Directa.";
 choices[55][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[55][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[56]= new Array();
 choices[56][0] = "El Parlamento y el Consejo.";
 choices[56][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[56][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[56][3] = "La Comisi&oacute;n y el Consejo.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[57]= "58)  Las Universidades p&uacute;blicas:";
 choices[57]= new Array();
 choices[57][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[57][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[57][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[57][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[57] = choices[57][1];
 units[57] = "7";
 comments[57] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[58]= "59)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[58]= new Array();
 choices[58][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[58][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[58][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[58][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[58] = choices[58][3];
 units[58] = "14";
 comments[58] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[59]= new Array();
 choices[59][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[59][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[59][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[59][3] = "A las Diputaciones y a las Comarcas.";
 answers[59] = choices[59][3];
 units[59] = "1";
 comments[59] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[60]= new Array();
 choices[60][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[60][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[60][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[60][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[61]= "62)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[61]= new Array();
 choices[61][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[61][1] = "el Consejo de Estado";
 choices[61][2] = "el Congreso";
 choices[61][3] = "las Cortes Generales";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[62]= "63)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[62]= new Array();
 choices[62][0] = "El derecho a la propiedad privada.";
 choices[62][1] = "El derecho de asociaci&oacute;n.";
 choices[62][2] = "El derecho de fundaci&oacute;n.";
 choices[62][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[62] = choices[62][1];
 units[62] = "1";
 comments[62] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[63]= new Array();
 choices[63][0] = "Publicidad.";
 choices[63][1] = "Constituci&oacute;n.";
 choices[63][2] = "Legalidad.";
 choices[63][3] = "Creaci&oacute;n.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[64]= "65)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[64]= new Array();
 choices[64][0] = "Alrededor de un 26% del PIB";
 choices[64][1] = "Alrededor de un 11% del PIB";
 choices[64][2] = "Alrededor de un 34% del PIB";
 choices[64][3] = "Alrededor de un 7% del PIB";
 answers[64] = choices[64][1];
 units[64] = "12";
 comments[64] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[65]= new Array();
 choices[65][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[65][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[65][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[65][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[65] = choices[65][2];
 units[65] = "22";
 comments[65] = "Id Pregunta: 129. ";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[66]= "67)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[66][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[66][2] = "Ninguna es correcta.";
 choices[66][3] = "A y B son correctas.";
 answers[66] = choices[66][0];
 units[66] = "14";
 comments[66] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[67]= "68)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[67]= new Array();
 choices[67][0] = "Windows Phone";
 choices[67][1] = "Blackberry";
 choices[67][2] = "iOS";
 choices[67][3] = "Android";
 answers[67] = choices[67][3];
 units[67] = "59";
 comments[67] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[68][1] = "Auditor&iacute;a operativa.";
 choices[68][2] = "Auditor&iacute;a de cumplimiento.";
 choices[68][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[69]= "70)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[69]= new Array();
 choices[69][0] = "Consejos y Servicios.";
 choices[69][1] = "Servicios permanentes y no permanentes.";
 choices[69][2] = "Direcciones Generales.";
 choices[69][3] = "Direcciones ministeriales.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[70]= new Array();
 choices[70][0] = "Al menos cada 12 meses";
 choices[70][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[70][2] = "Al menos cada 18 meses";
 choices[70][3] = "Al menos cada 24 meses";
 answers[70] = choices[70][3];
 units[70] = "77";
 comments[70] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


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


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[72]= "73)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[72]= new Array();
 choices[72][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[72][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[72][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[72][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[72] = choices[72][0];
 units[72] = "35";
 comments[72] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[73]= "74)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[73]= new Array();
 choices[73][0] = "tienen capacidad de obrar limitada";
 choices[73][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[73][2] = "no tienen capacidad de obrar";
 choices[73][3] = "ninguna es correcta";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[74]= "75)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[74]= new Array();
 choices[74][0] = "A la persona demandante.";
 choices[74][1] = "A la persona demandada.";
 choices[74][2] = "Al &oacute;rgano judicial.";
 choices[74][3] = "Al &oacute;rgano administrativo.";
 answers[74] = choices[74][1];
 units[74] = "14";
 comments[74] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


