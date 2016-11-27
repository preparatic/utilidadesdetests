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

//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[0]= "1)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[0]= new Array();
 choices[0][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[0][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[0][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][0];
 units[0] = "28";
 comments[0] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[1]= new Array();
 choices[1][0] = "Entre 1973 y 1978";
 choices[1][1] = "Entre 1992 y 1996";
 choices[1][2] = "Entre 1978 y 1985";
 choices[1][3] = "Entre 2008 y 2013";
 answers[1] = choices[1][2];
 units[1] = "12";
 comments[1] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[2]= "3)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[2]= new Array();
 choices[2][0] = "Son actos normativos.";
 choices[2][1] = "Poseen alcance general.";
 choices[2][2] = "No son obligatorias.";
 choices[2][3] = "Son actos individuales no normativos.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[3]= "4)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "la Administraci&oacute;n General del Estado";
 choices[3][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[3][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[3][3] = "el sector p&uacute;blico y privado institucional";
 answers[3] = choices[3][3];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 753. Ley 40/2015";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[4]= "5)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[4]= new Array();
 choices[4][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[4][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[4][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[4][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[4] = choices[4][3];
 units[4] = "86";
 comments[4] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[5]= "6)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[5]= new Array();
 choices[5][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[5][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[5][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[5][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[5] = choices[5][2];
 units[5] = "57";
 comments[5] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[6]= "7)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[6]= new Array();
 choices[6][0] = "61";
 choices[6][1] = "53";
 choices[6][2] = "65";
 choices[6][3] = "67";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[7]= new Array();
 choices[7][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[7][1] = "Excesiva estabilidad de empleo";
 choices[7][2] = "An&eacute;mico crecimiento de la productividad";
 choices[7][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[7] = choices[7][1];
 units[7] = "12";
 comments[7] = "Id Pregunta: 563. Modelo econ&oacute;mico";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[8]= "9)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[8]= new Array();
 choices[8][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[8][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[8][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[8][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[8] = choices[8][0];
 units[8] = "12";
 comments[8] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[9]= "10)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[9]= new Array();
 choices[9][0] = "A los cinco a&ntilde;os.";
 choices[9][1] = "A los dos a&ntilde;os.";
 choices[9][2] = "A los tres a&ntilde;os.";
 choices[9][3] = "A los cuatro a&ntilde;os.";
 answers[9] = choices[9][0];
 units[9] = "10";
 comments[9] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[10]= new Array();
 choices[10][0] = "Las respuestas a) y b) son correctas.";
 choices[10][1] = "Las respuestas a) y b) no son correctas.";
 choices[10][2] = "Contenido coherente con los planes sectoriales.";
 choices[10][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[11]= "12)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[11]= new Array();
 choices[11][0] = "Integrar la estrategia TIC con la de negocio";
 choices[11][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[11][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[11][3] = "Todas las anteriores";
 answers[11] = choices[11][3];
 units[11] = "26";
 comments[11] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[12]= new Array();
 choices[12][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[12][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[12][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[12][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[12] = choices[12][1];
 units[12] = "12";
 comments[12] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[13]= "14)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "Medidas de igualdad.";
 choices[13][1] = "Objetivos de igualdad.";
 choices[13][2] = "Ambas son correctas.";
 choices[13][3] = "A y B son incorrectas.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[14]= "15)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[14]= new Array();
 choices[14][0] = "2.400 euros";
 choices[14][1] = "4.000 euros";
 choices[14][2] = "3.200 euros";
 choices[14][3] = "1.600 euros";
 answers[14] = choices[14][1];
 units[14] = "37";
 comments[14] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[15]= "16)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[15]= new Array();
 choices[15][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[15][1] = "Personas con nacionalidad europea.";
 choices[15][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[15][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[15] = choices[15][3];
 units[15] = "5";
 comments[15] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[16]= new Array();
 choices[16][0] = "Eric Ries";
 choices[16][1] = "Steve Blank";
 choices[16][2] = "Tom Poppendieck";
 choices[16][3] = "Alexander Osterwalder";
 answers[16] = choices[16][2];
 units[16] = "34";
 comments[16] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[17]= new Array();
 choices[17][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[17][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[17][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[17][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[17] = choices[17][2];
 units[17] = "22";
 comments[17] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[18]= "19)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[18]= new Array();
 choices[18][0] = "en cada Comunidad Aut&oacute;noma";
 choices[18][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[18][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[18][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[18] = choices[18][1];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[19]= "20)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[19]= new Array();
 choices[19][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[19][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[19][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[19][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[19] = choices[19][2];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 758. Ley 40/2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[20]= new Array();
 choices[20][0] = "Lean startup";
 choices[20][1] = "Business Model Canvas";
 choices[20][2] = "Dynamic system Development method";
 choices[20][3] = "Lean software development";
 answers[20] = choices[20][2];
 units[20] = "34";
 comments[20] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[21]= new Array();
 choices[21][0] = "Tres meses.";
 choices[21][1] = "Nueve meses.";
 choices[21][2] = "Cuatro meses.";
 choices[21][3] = "Seis meses.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[22]= new Array();
 choices[22][0] = "Categor&iacute;a b&aacute;sica";
 choices[22][1] = "Categor&iacute;a media";
 choices[22][2] = "Categor&iacute;a alta";
 choices[22][3] = "Categor&iacute;a media y alta";
 answers[22] = choices[22][2];
 units[22] = "46";
 comments[22] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[23]= new Array();
 choices[23][0] = "SPARQL";
 choices[23][1] = "UnQL";
 choices[23][2] = "XQUERY";
 choices[23][3] = "RQL";
 answers[23] = choices[23][0];
 units[23] = "74";
 comments[23] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la respuesta falsa:";
 choices[24]= new Array();
 choices[24][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[24][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[24][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[24][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[25]= new Array();
 choices[25][0] = "El Parlamento y el Consejo.";
 choices[25][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[25][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[25][3] = "La Comisi&oacute;n y el Consejo.";
 answers[25] = choices[25][1];
 units[25] = "5";
 comments[25] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[26]= "27)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[26]= new Array();
 choices[26][0] = "la capital del pa&iacute;s";
 choices[26][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[26][2] = "cada una de las provincias";
 choices[26][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[27]= "28)  Big Data:";
 choices[27]= new Array();
 choices[27][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[27][1] = "No puede emplearse para tratar datos no estructurados";
 choices[27][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][3];
 units[27] = "73";
 comments[27] = "Id Pregunta: 109. ";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[28]= "29)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[28]= new Array();
 choices[28][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[28][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[28][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[28][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[28] = choices[28][3];
 units[28] = "14";
 comments[28] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[29]= new Array();
 choices[29][0] = "Establecer redes de telecomunicaciones continentales";
 choices[29][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[29][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[29][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[29] = choices[29][0];
 units[29] = "17";
 comments[29] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[30]= new Array();
 choices[30][0] = "Directiva 95/46/CE";
 choices[30][1] = "Directiva 1999/93/CE";
 choices[30][2] = "Directiva 2000/31/CE";
 choices[30][3] = "Directiva 2003/98/CE";
 answers[30] = choices[30][1];
 units[30] = "77";
 comments[30] = "Id Pregunta: 682. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[31]= new Array();
 choices[31][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[31][1] = "Intervenci&oacute;n formal y material.";
 choices[31][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[31][3] = "Intervenci&oacute;n formal y general.";
 answers[31] = choices[31][1];
 units[31] = "10";
 comments[31] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[32]= new Array();
 choices[32][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[32][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[32][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][2];
 units[32] = "18, 20";
 comments[32] = "Id Pregunta: 742. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[33]= new Array();
 choices[33][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[33][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[33][2] = "Todas son correctas.";
 choices[33][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 330. UNION EUROPEA";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[34]= "35)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[34]= new Array();
 choices[34][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[34][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[34][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[34][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[34] = choices[34][0];
 units[34] = "65";
 comments[34] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[35]= new Array();
 choices[35][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[35][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[35][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[35][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[36]= "37)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[36]= new Array();
 choices[36][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[36][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[36][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[36][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[36] = choices[36][3];
 units[36] = "12";
 comments[36] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[37]= "38)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[37]= new Array();
 choices[37][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[37][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[37][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[37][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[38]= "39)  Los criptosistemas pueden clasificarse en:";
 choices[38]= new Array();
 choices[38][0] = "Concretos, Estables e Inestables.";
 choices[38][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[38][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[38][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[38] = choices[38][3];
 units[38] = "76";
 comments[38] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[39]= new Array();
 choices[39][0] = "Ley 50/1997, del Gobierno.";
 choices[39][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[39][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[39][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[39] = choices[39][1];
 units[39] = "10";
 comments[39] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[40]= "41)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[40]= new Array();
 choices[40][0] = "la poblaci&oacute;n del territorio";
 choices[40][1] = "el volumen de gesti&oacute;n";
 choices[40][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[41]= "42)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[41]= new Array();
 choices[41][0] = "personalidad jur&iacute;dica propia";
 choices[41][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[41][2] = "personalidad jur&iacute;dica plena";
 choices[41][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[41] = choices[41][1];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[42]= new Array();
 choices[42][0] = "Jenkins";
 choices[42][1] = "Hudson";
 choices[42][2] = "SonarQube";
 choices[42][3] = "Todas lo son";
 answers[42] = choices[42][3];
 units[42] = "92";
 comments[42] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[43]= "44)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[43]= new Array();
 choices[43][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[43][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[43][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[43][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[44]= new Array();
 choices[44][0] = "Principio de solo una vez";
 choices[44][1] = "Apertura y transparencia";
 choices[44][2] = "Confianza y seguridad";
 choices[44][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[44] = choices[44][3];
 units[44] = "19";
 comments[44] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[45]= "46)  En las Administraciones P&uacute;blicas...";
 choices[45]= new Array();
 choices[45][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[45][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[45][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[45][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[45] = choices[45][0];
 units[45] = "10";
 comments[45] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[46]= new Array();
 choices[46][0] = "Anual";
 choices[46][1] = "Mensual";
 choices[46][2] = "Semestral";
 choices[46][3] = "Trimestral";
 answers[46] = choices[46][3];
 units[46] = "15";
 comments[46] = "Id Pregunta: 119. ";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[47]= "48)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[47]= new Array();
 choices[47][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[47][1] = "Protecci&oacute;n de su salud.";
 choices[47][2] = "Ninguna es correcta.";
 choices[47][3] = "A y B son correctas.";
 answers[47] = choices[47][1];
 units[47] = "14";
 comments[47] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[48]= "49)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[48]= new Array();
 choices[48][0] = "Los propios miembros del Tribunal.";
 choices[48][1] = "El Consejo de Europa.";
 choices[48][2] = "El Consejo Europeo.";
 choices[48][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[49]= new Array();
 choices[49][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[49][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[49][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[49][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[49] = choices[49][0];
 units[49] = "15";
 comments[49] = "Id Pregunta: 114. ";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[50]= "51)  Indica la respuesta correcta";
 choices[50]= new Array();
 choices[50][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[50][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[50][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[50][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[50] = choices[50][0];
 units[50] = "34, 84";
 comments[50] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[51]= "52)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[51]= new Array();
 choices[51][0] = "Relaciones base y vistas.";
 choices[51][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[51][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[51][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[51] = choices[51][3];
 units[51] = "60";
 comments[51] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[52]= "53)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[52][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[52][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[52][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[53]= "54)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[53]= new Array();
 choices[53][0] = "Seguridad Social y AEAT";
 choices[53][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[53][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[53][3] = "Todos los anteriores";
 answers[53] = choices[53][3];
 units[53] = "19";
 comments[53] = "Id Pregunta: 594. Estrategia TIC";


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


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[55]= "56)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[55]= new Array();
 choices[55][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[55][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[55][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[55][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[55] = choices[55][3];
 units[55] = "10";
 comments[55] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[56]= "57)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[56]= new Array();
 choices[56][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[56][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[56][2] = "La normativa reguladora de cada derecho.";
 choices[56][3] = "Ley 50/1997, del Gobierno.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[57]= new Array();
 choices[57][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[57][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[57][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[57][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[57] = choices[57][1];
 units[57] = "92";
 comments[57] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[58]= new Array();
 choices[58][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[58][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[58][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[58][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[59]= new Array();
 choices[59][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[59][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[59][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[59][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[60]= "61)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[60]= new Array();
 choices[60][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[60][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[60][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[60][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[60] = choices[60][3];
 units[60] = "1";
 comments[60] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[61]= new Array();
 choices[61][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[61][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[61][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[61][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[62]= new Array();
 choices[62][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[62][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[62][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[62][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[62] = choices[62][2];
 units[62] = "7";
 comments[62] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[63]= new Array();
 choices[63][0] = "El BCE";
 choices[63][1] = "El Parlamento";
 choices[63][2] = "El Consejo";
 choices[63][3] = "La Comisi&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "17";
 comments[63] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[64]= "65)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[64]= new Array();
 choices[64][0] = "Cinco a&ntilde;os.";
 choices[64][1] = "Seis a&ntilde;os.";
 choices[64][2] = "Cuatro a&ntilde;os.";
 choices[64][3] = "Tres a&ntilde;os.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[65]= "66)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[65]= new Array();
 choices[65][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[65][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[65][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[65][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[66]= new Array();
 choices[66][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[66][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[66][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[66][3] = "La tasa de desempleo ronda el 20%";
 answers[66] = choices[66][2];
 units[66] = "12";
 comments[66] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[67]= "68)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[67]= new Array();
 choices[67][0] = "Los cr&eacute;ditos";
 choices[67][1] = "Las partidas presupuestarias";
 choices[67][2] = "Los derechos";
 choices[67][3] = "Las obligaciones";
 answers[67] = choices[67][3];
 units[67] = "10";
 comments[67] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[68]= "69)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[68]= new Array();
 choices[68][0] = "Sello electr&oacute;nico";
 choices[68][1] = "Sede electr&oacute;nica";
 choices[68][2] = "Servidor seguro (SSL/TLS)";
 choices[68][3] = "Empleado p&uacute;blico";
 answers[68] = choices[68][2];
 units[68] = "7";
 comments[68] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[69]= "70)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[69]= new Array();
 choices[69][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[69][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[69][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[69][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[70]= new Array();
 choices[70][0] = "Ley Org&aacute;nica.";
 choices[70][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[70][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[70][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[71]= "72)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[71]= new Array();
 choices[71][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[71][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[71][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[71][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[71] = choices[71][2];
 units[71] = "1";
 comments[71] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[72]= "73)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[72]= new Array();
 choices[72][0] = "Monol&iacute;tico.";
 choices[72][1] = "Estratificado.";
 choices[72][2] = "Cliente/servidor.";
 choices[72][3] = "Orientado a objetos.";
 answers[72] = choices[72][3];
 units[72] = "56";
 comments[72] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[73]= new Array();
 choices[73][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[73][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[73][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[73][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[73] = choices[73][2];
 units[73] = "22";
 comments[73] = "Id Pregunta: 121. ";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[74]= "75)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[74][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[74][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[74][3] = "cualquiera que sea el estado del procedimiento";
 answers[74] = choices[74][3];
 units[74] = "7";
 comments[74] = "Id Pregunta: 525. LEY 39/2015";


