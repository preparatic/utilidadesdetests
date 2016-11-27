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

//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[0]= new Array();
 choices[0][0] = "Quince miembros.";
 choices[0][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[0][2] = "Los miembros que determine el Consejo.";
 choices[0][3] = "Un Presidente y quince miembros.";
 answers[0] = choices[0][1];
 units[0] = "14";
 comments[0] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[1]= "2)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[1]= new Array();
 choices[1][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[1][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[1][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[1][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[1] = choices[1][2];
 units[1] = "28";
 comments[1] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[2]= "3)  Sobre el Plan Juncker:";
 choices[2]= new Array();
 choices[2][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[2][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[2][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[2][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[3]= new Array();
 choices[3][0] = "Yarn";
 choices[3][1] = "Flume";
 choices[3][2] = "Hive";
 choices[3][3] = "BizAgi";
 answers[3] = choices[3][3];
 units[3] = "73";
 comments[3] = "Id Pregunta: 655. ";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[4][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[4][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[4][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[5]= new Array();
 choices[5][0] = "En 2011";
 choices[5][1] = "En 2013";
 choices[5][2] = "En 2015";
 choices[5][3] = "En 2016";
 answers[5] = choices[5][2];
 units[5] = "17";
 comments[5] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[6]= "7)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[6]= new Array();
 choices[6][0] = "El Presidente y su gabinete.";
 choices[6][1] = "El Presidente y sus Ministros.";
 choices[6][2] = "El Rey y el Presidente.";
 choices[6][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[7]= new Array();
 choices[7][0] = "El Consejo Europeo.";
 choices[7][1] = "El Parlamento Europeo.";
 choices[7][2] = "El Consejo.";
 choices[7][3] = "La Comisi&oacute;n.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[8]= new Array();
 choices[8][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[8][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[8][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[8][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[8] = choices[8][3];
 units[8] = "22";
 comments[8] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; es el machine learning?";
 choices[9]= new Array();
 choices[9][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[9][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[9][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[9][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[9] = choices[9][0];
 units[9] = "73";
 comments[9] = "Id Pregunta: 657. ";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[10]= "11)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[10]= new Array();
 choices[10][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[10][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[10][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[10][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[10] = choices[10][3];
 units[10] = "1";
 comments[10] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[11]= new Array();
 choices[11][0] = "Quince miembros.";
 choices[11][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[11][2] = "Los miembros que determine el Consejo.";
 choices[11][3] = "Un Presidente y quince miembros.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[12]= "13)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[12]= new Array();
 choices[12][0] = "El acoso sexual.";
 choices[12][1] = "El acoso por raz&oacute;n del sexo.";
 choices[12][2] = "Ambas son correctas.";
 choices[12][3] = "A y B son incorrectas.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[13]= "14)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[13]= new Array();
 choices[13][0] = "El Instituto de la Mujer.";
 choices[13][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[13][2] = "Ambas son correctas.";
 choices[13][3] = "A y B son incorrectas.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[14]= new Array();
 choices[14][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[14][1] = "El responsable de la custodia de los datos enviados.";
 choices[14][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[14][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[14] = choices[14][3];
 units[14] = "35";
 comments[14] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[15]= "16)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[15]= new Array();
 choices[15][0] = "Los cr&eacute;ditos";
 choices[15][1] = "Las partidas presupuestarias";
 choices[15][2] = "Los derechos";
 choices[15][3] = "Las obligaciones";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[16]= "17)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[16]= new Array();
 choices[16][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[16][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[16][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[16][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[16] = choices[16][1];
 units[16] = "63";
 comments[16] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[17]= "18)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[17]= new Array();
 choices[17][0] = "Estrasburgo.";
 choices[17][1] = "Bruselas.";
 choices[17][2] = "Luxemburgo.";
 choices[17][3] = "Holanda.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[18]= "19)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[18]= new Array();
 choices[18][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[18][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[18][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[18][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[18] = choices[18][0];
 units[18] = "12";
 comments[18] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[19]= new Array();
 choices[19][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[19][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[19][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[19][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[20]= "21)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[20]= new Array();
 choices[20][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[20][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[20][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[20][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[20] = choices[20][0];
 units[20] = "12";
 comments[20] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[21]= "22)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[21]= new Array();
 choices[21][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[21][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[21][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[21][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[21] = choices[21][0];
 units[21] = "109";
 comments[21] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[22]= new Array();
 choices[22][0] = "Un programa presupuestario.";
 choices[22][1] = "Un concepto presupuestario.";
 choices[22][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[22][3] = "Un cr&eacute;dito presupuestario.";
 answers[22] = choices[22][0];
 units[22] = "10";
 comments[22] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[23]= "24)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[23]= new Array();
 choices[23][0] = "Sean dirigidas por mujeres";
 choices[23][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[23][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[23][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Senado.";
 choices[24][1] = "El Defensor del Pueblo.";
 choices[24][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[24][3] = "El Presidente del Gobierno.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[25]= new Array();
 choices[25][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[25][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[25][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[25][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[25] = choices[25][1];
 units[25] = "77";
 comments[25] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[26]= "27)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[26]= new Array();
 choices[26][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[26][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[26][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[26][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[26] = choices[26][1];
 units[26] = "7";
 comments[26] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[27]= new Array();
 choices[27][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[27][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[27][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[27][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[27] = choices[27][1];
 units[27] = "86";
 comments[27] = "Id Pregunta: 72. AGE A1 2015";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[28]= new Array();
 choices[28][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[28][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[28][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[28][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[28] = choices[28][2];
 units[28] = "22";
 comments[28] = "Id Pregunta: 121. ";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[29]= "30)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[29]= new Array();
 choices[29][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[29][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[29][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[29][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[29] = choices[29][3];
 units[29] = "7";
 comments[29] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[30]= new Array();
 choices[30][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[30][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[30][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[30][3] = "El pago de subsidios a parados";
 answers[30] = choices[30][3];
 units[30] = "15";
 comments[30] = "Id Pregunta: 116. ";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[31]= "32)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[31]= new Array();
 choices[31][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[31][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[31][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[31][3] = "todas son correctas";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[32]= new Array();
 choices[32][0] = "Memcached";
 choices[32][1] = "OpCache";
 choices[32][2] = "WinCache Extension for PHP";
 choices[32][3] = "Alternative PHP Cache";
 answers[32] = choices[32][0];
 units[32] = "65";
 comments[32] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[33]= "34)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[33]= new Array();
 choices[33][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[33][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[33][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[33][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[33] = choices[33][3];
 units[33] = "34, 84";
 comments[33] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[34]= "35)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[34]= new Array();
 choices[34][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[34][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[34][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[34][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[35]= new Array();
 choices[35][0] = "El aumento de la esperanza de vida.";
 choices[35][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[35][2] = "La reducci&oacute;n del desempleo.";
 choices[35][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[35] = choices[35][0];
 units[35] = "14";
 comments[35] = "Id Pregunta: 673. Estructura social";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[36]= new Array();
 choices[36][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[36][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[36][2] = "A) y B) son verdaderas";
 choices[36][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[36] = choices[36][2];
 units[36] = "73";
 comments[36] = "Id Pregunta: 106. ";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[37]= new Array();
 choices[37][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[37][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[37][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[37][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[37] = choices[37][0];
 units[37] = "10";
 comments[37] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[38]= "39)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[38]= new Array();
 choices[38][0] = "Seguridad Social y AEAT";
 choices[38][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[38][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[38][3] = "Todos los anteriores";
 answers[38] = choices[38][3];
 units[38] = "19";
 comments[38] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[39]= "40)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[39]= new Array();
 choices[39][0] = "El Jefe del Estado.";
 choices[39][1] = "El Tribunal Constitucional.";
 choices[39][2] = "El Congreso de los Diputados.";
 choices[39][3] = "Las Cortes Generales.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[40]= new Array();
 choices[40][0] = "Bienalmente";
 choices[40][1] = "Anualmente";
 choices[40][2] = "Semestralmente";
 choices[40][3] = "Cada cuatro a&ntilde;os";
 answers[40] = choices[40][1];
 units[40] = "19";
 comments[40] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[41]= "42)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[41]= new Array();
 choices[41][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[41][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[41][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[41][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[42]= "43)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[42]= new Array();
 choices[42][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[42][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[42][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[42][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[42] = choices[42][0];
 units[42] = "43";
 comments[42] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[43]= new Array();
 choices[43][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[43][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[43][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[43][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[43] = choices[43][1];
 units[43] = "18, 20";
 comments[43] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[44]= "45)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[44]= new Array();
 choices[44][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[44][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[44][2] = "El Presidente del Gobierno";
 choices[44][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[44] = choices[44][1];
 units[44] = "26";
 comments[44] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[45]= new Array();
 choices[45][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[45] = choices[45][2];
 units[45] = "7";
 comments[45] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[46]= "47)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[46]= new Array();
 choices[46][0] = "Transferencias de cr&eacute;dito.";
 choices[46][1] = "Incorporaciones de cr&eacute;dito.";
 choices[46][2] = "Imputaciones de cr&eacute;dito.";
 choices[46][3] = "Ampliaciones de cr&eacute;dito.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[47]= new Array();
 choices[47][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[47][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[47][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[47][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[48][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[48][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[48][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[48] = choices[48][2];
 units[48] = "22";
 comments[48] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[49]= new Array();
 choices[49][0] = "Siempre en formato electr&oacute;nico.";
 choices[49][1] = "Siempre en formato papel.";
 choices[49][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[49][3] = "La ley no regula el formato del expediente.";
 answers[49] = choices[49][0];
 units[49] = "7";
 comments[49] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[50]= new Array();
 choices[50][0] = "SessionBean";
 choices[50][1] = "JavaBean";
 choices[50][2] = "MBeans";
 choices[50][3] = "MessageDrivenBean";
 answers[50] = choices[50][2];
 units[50] = "64";
 comments[50] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[51]= "52)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[51]= new Array();
 choices[51][0] = "Resoluci&oacute;n.";
 choices[51][1] = "Desistimiento o renuncia.";
 choices[51][2] = "Caducidad.";
 choices[51][3] = "Todas las anteriores.";
 answers[51] = choices[51][3];
 units[51] = "7";
 comments[51] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[52]= new Array();
 choices[52][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[53]= "54)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[53][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[53][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[53][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[53] = choices[53][2];
 units[53] = "26";
 comments[53] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[54]= new Array();
 choices[54][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[54][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[54][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[54][3] = "El Instituto de la Mujer de Extremadura.";
 answers[54] = choices[54][3];
 units[54] = "14";
 comments[54] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[55]= "56)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[55]= new Array();
 choices[55][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[55][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[55][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[55][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[55] = choices[55][2];
 units[55] = "7";
 comments[55] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[56]= "57)  La Administraci&oacute;n General del Estado se organiza:";
 choices[56]= new Array();
 choices[56][0] = "en Ministerios";
 choices[56][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[56][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[56][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[56] = choices[56][1];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[57]= "58)  Son proyectos de Apache relacionados con Big Data:";
 choices[57]= new Array();
 choices[57][0] = "Hadoop";
 choices[57][1] = "Spark";
 choices[57][2] = "A) y B)";
 choices[57][3] = "Niguno de los anteriores";
 answers[57] = choices[57][2];
 units[57] = "73";
 comments[57] = "Id Pregunta: 108. ";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[58]= "59)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[58]= new Array();
 choices[58][0] = "Monol&iacute;tico.";
 choices[58][1] = "Estratificado.";
 choices[58][2] = "Cliente/servidor.";
 choices[58][3] = "Orientado a objetos.";
 answers[58] = choices[58][3];
 units[58] = "56";
 comments[58] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[59]= "60)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[59]= new Array();
 choices[59][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[59][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[59][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[59][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[59] = choices[59][2];
 units[59] = "19";
 comments[59] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[60]= "61)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[60]= new Array();
 choices[60][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[60][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[60][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[60][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[61]= new Array();
 choices[61][0] = "Tres meses.";
 choices[61][1] = "Nueve meses.";
 choices[61][2] = "Cuatro meses.";
 choices[61][3] = "Seis meses.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[62]= new Array();
 choices[62][0] = "Cifrado de las comunicaciones";
 choices[62][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[62][2] = "Registro de los accesos";
 choices[62][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[62] = choices[62][1];
 units[62] = "35";
 comments[62] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[63]= new Array();
 choices[63][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[63][1] = "La Direcci&oacute;n de la Competencia.";
 choices[63][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[63][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[63] = choices[63][0];
 units[63] = "121";
 comments[63] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[64]= new Array();
 choices[64][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[64][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[64][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[64][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[64] = choices[64][3];
 units[64] = "120";
 comments[64] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[65]= new Array();
 choices[65][0] = "As&iacute;ncrona.";
 choices[65][1] = "Log-shipping.";
 choices[65][2] = "Disk buffering.";
 choices[65][3] = "S&iacute;ncrona.";
 answers[65] = choices[65][3];
 units[65] = "53";
 comments[65] = "Id Pregunta: 849. Xunta de Galicia 2015";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[66]= new Array();
 choices[66][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[66][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[66][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][1];
 units[66] = "34, 84";
 comments[66] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[67]= "68)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[67]= new Array();
 choices[67][0] = "El Tratado de Maastrich.";
 choices[67][1] = "El Tratado de Amsterdam.";
 choices[67][2] = "El Tratado de Par&iacute;s.";
 choices[67][3] = "El Tratado de Roma.";
 answers[67] = choices[67][3];
 units[67] = "5";
 comments[67] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[68][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[68][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[68][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[68] = choices[68][1];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[69]= new Array();
 choices[69][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[69][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[69][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[69][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[69] = choices[69][3];
 units[69] = "22";
 comments[69] = "Id Pregunta: 126. ";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[70]= "71)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[70]= new Array();
 choices[70][0] = "La Comisi&oacute;n Europea.";
 choices[70][1] = "El Consejo Europeo.";
 choices[70][2] = "El Consejo de Europa.";
 choices[70][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[70] = choices[70][0];
 units[70] = "5";
 comments[70] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[71]= "72)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[71]= new Array();
 choices[71][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[71][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[71][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[71][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[71] = choices[71][3];
 units[71] = "22";
 comments[71] = "Id Pregunta: 707. Ley de transparencia";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[72]= "73)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[72]= new Array();
 choices[72][0] = "Gesti&oacute;n de la disponibilidad";
 choices[72][1] = "Gesti&oacute;n de la demanda";
 choices[72][2] = "Gesti&oacute;n de entregas";
 choices[72][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[72] = choices[72][0];
 units[72] = "101";
 comments[72] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[73]= new Array();
 choices[73][0] = "El 2 de Octubre de 2015";
 choices[73][1] = "El 15 de Septiembre de 2015";
 choices[73][2] = "El 1 de Octubre de 2015";
 choices[73][3] = "El 5 de Octubre de 2015";
 answers[73] = choices[73][0];
 units[73] = "19";
 comments[73] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[74]= "75)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[74]= new Array();
 choices[74][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[74][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[74][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[74][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[74] = choices[74][2];
 units[74] = "19";
 comments[74] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


