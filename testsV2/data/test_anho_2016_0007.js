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

//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[0]= "1)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[0]= new Array();
 choices[0][0] = "Cinco a&ntilde;os.";
 choices[0][1] = "Cuatro a&ntilde;os.";
 choices[0][2] = "Tres a&ntilde;os.";
 choices[0][3] = "Seis meses.";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[1]= new Array();
 choices[1][0] = "Cincuenta y cuatro.";
 choices[1][1] = "Cincuenta.";
 choices[1][2] = "Cincuenta y cinco.";
 choices[1][3] = "Cincuenta y dos.";
 answers[1] = choices[1][1];
 units[1] = "5";
 comments[1] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[2]= new Array();
 choices[2][0] = "3 pilares";
 choices[2][1] = "4 pilares";
 choices[2][2] = "5 pilares";
 choices[2][3] = "7 pilares";
 answers[2] = choices[2][0];
 units[2] = "17";
 comments[2] = "Id Pregunta: 759. Mercado &Uacute;nico Digital";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[3]= "4)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[3]= new Array();
 choices[3][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[3][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[3][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[3][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[3] = choices[3][0];
 units[3] = "43";
 comments[3] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[4]= "5)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[4]= new Array();
 choices[4][0] = "Resoluci&oacute;n.";
 choices[4][1] = "Desistimiento o renuncia.";
 choices[4][2] = "Caducidad.";
 choices[4][3] = "Todas las anteriores.";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Estimaci&oacute;n del riesgo";
 choices[5][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[5][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[5][3] = "Mapa de riesgos";
 answers[5] = choices[5][3];
 units[5] = "45";
 comments[5] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[6]= "7)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[6]= new Array();
 choices[6][0] = "ISO/IEC 25000";
 choices[6][1] = "ISO/IEC 27000";
 choices[6][2] = "ISO 9000";
 choices[6][3] = "ISO 9001";
 answers[6] = choices[6][0];
 units[6] = "93";
 comments[6] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[7]= new Array();
 choices[7][0] = "En t&iacute;tulos-valores.";
 choices[7][1] = "Las respuestas a) y b) son correctas.";
 choices[7][2] = "Las respuestas a) y b) no son correctas.";
 choices[7][3] = "En cuenta.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[8]= "9)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[8]= new Array();
 choices[8][0] = "Los cr&eacute;ditos";
 choices[8][1] = "Las partidas presupuestarias";
 choices[8][2] = "Los derechos";
 choices[8][3] = "Las obligaciones";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[9]= new Array();
 choices[9][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[9][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[9][2] = "c) Todas las respuestas son correctas.";
 choices[9][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[10]= new Array();
 choices[10][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[10][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[10][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[10][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[10] = choices[10][1];
 units[10] = "19";
 comments[10] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[11]= new Array();
 choices[11][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[11][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[11][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[11][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[11] = choices[11][0];
 units[11] = "14";
 comments[11] = "Id Pregunta: 680. Pensiones";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[12]= "13)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[12]= new Array();
 choices[12][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[12][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[12][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[12][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[13]= "14)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Infrastructure as a Service (IaaS)";
 choices[13][1] = "Platform as a Service (PaaS)";
 choices[13][2] = "Software as a Service (SaaS)";
 choices[13][3] = "Application as a Service (AaaS)";
 answers[13] = choices[13][1];
 units[13] = "52";
 comments[13] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[14]= new Array();
 choices[14][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[14][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[14][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[14][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[15]= new Array();
 choices[15][0] = "El Consejo Europeo.";
 choices[15][1] = "El Parlamento Europeo.";
 choices[15][2] = "El Consejo.";
 choices[15][3] = "La Comisi&oacute;n.";
 answers[15] = choices[15][3];
 units[15] = "5";
 comments[15] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[16]= "17)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[16]= new Array();
 choices[16][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[16][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[16][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[16][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[17]= "18)  En las Administraciones P&uacute;blicas...";
 choices[17]= new Array();
 choices[17][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[17][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[17][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[17][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[17] = choices[17][0];
 units[17] = "10";
 comments[17] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[18]= "19)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[18]= new Array();
 choices[18][0] = "El Tratado de Roma, 1957.";
 choices[18][1] = "El Acta &Uacute;nica Europea.";
 choices[18][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[18][3] = "Ninguna es correcta.";
 answers[18] = choices[18][2];
 units[18] = "14";
 comments[18] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[19]= "20)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[19]= new Array();
 choices[19][0] = "El Instituto de la Mujer.";
 choices[19][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[19][2] = "Ambas son correctas.";
 choices[19][3] = "A y B son incorrectas.";
 answers[19] = choices[19][2];
 units[19] = "14";
 comments[19] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[20]= "21)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[20]= new Array();
 choices[20][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[20][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[20][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[20][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[20] = choices[20][2];
 units[20] = "7";
 comments[20] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[21]= "22)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[21]= new Array();
 choices[21][0] = "En qu&eacute; nos gastamos el dinero";
 choices[21][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[21][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[21][3] = "Qui&eacute;n se gasta el dinero.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[22]= "23)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[22]= new Array();
 choices[22][0] = "La Administraci&oacute;n General del Estado";
 choices[22][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[22][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[22][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[22] = choices[22][1];
 units[22] = "26";
 comments[22] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[23]= "24)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[23]= new Array();
 choices[23][0] = "De un mes si el acto fuera presunto";
 choices[23][1] = "De un mes si el acto fuera expreso";
 choices[23][2] = "De un mes en cualquier caso";
 choices[23][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[23] = choices[23][1];
 units[23] = "8";
 comments[23] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[24]= "25)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[24]= new Array();
 choices[24][0] = "P&uacute;blica.";
 choices[24][1] = "Privada.";
 choices[24][2] = "Ambas son correctas.";
 choices[24][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[24] = choices[24][0];
 units[24] = "14";
 comments[24] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[25]= "26)  WS-Security contiene especificaciones sobre:";
 choices[25]= new Array();
 choices[25][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[25][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[25][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[25][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[25] = choices[25][1];
 units[25] = "119";
 comments[25] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[26]= "27)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[26]= new Array();
 choices[26][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[26][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[26][2] = "La protecci&oacute;n del medio ambiente.";
 choices[26][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[26] = choices[26][0];
 units[26] = "22";
 comments[26] = "Id Pregunta: 125. ";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[27]= "28)  El sector p&uacute;blico institucional se integra por:";
 choices[27]= new Array();
 choices[27][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[27][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[27][2] = "las Universidades p&uacute;blicas";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][3];
 units[27] = "7";
 comments[27] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Hacienda.";
 choices[28][1] = "El Ministerio de Econom&iacute;a.";
 choices[28][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[28][3] = "Ninguna de las respuestas es correcta.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "14";
 choices[29][1] = "11";
 choices[29][2] = "12";
 choices[29][3] = "15";
 answers[29] = choices[29][0];
 units[29] = "19";
 comments[29] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[30]= "31)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[30]= new Array();
 choices[30][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[30][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[30][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[30][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[31]= "32)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[31]= new Array();
 choices[31][0] = "623";
 choices[31][1] = "649";
 choices[31][2] = "626";
 choices[31][3] = "565";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[32]= "33)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[32]= new Array();
 choices[32][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[32][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[32][2] = "Cinco a&ntilde;os.";
 choices[32][3] = "Ninguna es correcta.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[33]= "34)  Los Reglamentos no se caracterizan por:";
 choices[33]= new Array();
 choices[33][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[33][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[33][2] = "Ser obligatorios.";
 choices[33][3] = "No poseer alcance general.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[34]= "35)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[34]= new Array();
 choices[34][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[34][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[34][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[34][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[34] = choices[34][2];
 units[34] = "22";
 comments[34] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[35]= "36)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[35]= new Array();
 choices[35][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[35][1] = "Personas con nacionalidad europea.";
 choices[35][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[35][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[36]= new Array();
 choices[36][0] = "10 d&iacute;as.";
 choices[36][1] = "15 d&iacute;as.";
 choices[36][2] = "1 mes.";
 choices[36][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[36] = choices[36][0];
 units[36] = "7";
 comments[36] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[37]= new Array();
 choices[37][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[37][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[37][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[37][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[38]= new Array();
 choices[38][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[38][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[38][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[38][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[38] = choices[38][3];
 units[38] = "56";
 comments[38] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[39]= new Array();
 choices[39][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[39][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[39][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[39][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[39] = choices[39][0];
 units[39] = "14";
 comments[39] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[40]= "41)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[40]= new Array();
 choices[40][0] = "P&uacute;blica.";
 choices[40][1] = "Privada.";
 choices[40][2] = "A y B son correctas.";
 choices[40][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[41]= "42)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[41]= new Array();
 choices[41][0] = "Dise&ntilde;o del servicio.";
 choices[41][1] = "Transici&oacute;n del servicio.";
 choices[41][2] = "Estrategia del servicio.";
 choices[41][3] = "Operaci&oacute;n del servicio.";
 answers[41] = choices[41][2];
 units[41] = "101";
 comments[41] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[42]= "43)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[42]= new Array();
 choices[42][0] = "Intersecci&oacute;n.";
 choices[42][1] = "Uni&oacute;n.";
 choices[42][2] = "Restricci&oacute;n.";
 choices[42][3] = "Diferencia.";
 answers[42] = choices[42][0];
 units[42] = "60";
 comments[42] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[43]= "44)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[43]= new Array();
 choices[43][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[43][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[43][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[43][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[44]= new Array();
 choices[44][0] = "Cuatro.";
 choices[44][1] = "Ninguno.";
 choices[44][2] = "Dos.";
 choices[44][3] = "Seis.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[45]= "46)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[45]= new Array();
 choices[45][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[45][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[45][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[45][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; es el machine learning?";
 choices[46]= new Array();
 choices[46][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[46][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[46][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[46][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[46] = choices[46][0];
 units[46] = "73";
 comments[46] = "Id Pregunta: 657. ";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[47]= "48)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[47]= new Array();
 choices[47][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[47][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[47][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[47][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[47] = choices[47][1];
 units[47] = "63";
 comments[47] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[48]= new Array();
 choices[48][0] = "El 1 de noviembre de 1994.";
 choices[48][1] = "El 1 de noviembre de 1992.";
 choices[48][2] = "El 1 de noviembre de 1995.";
 choices[48][3] = "El 1 de noviembre de 1993.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[49]= new Array();
 choices[49][0] = "Art&iacute;culo 16.2.";
 choices[49][1] = "Art&iacute;culo 17.1.";
 choices[49][2] = "Art&iacute;culo 18.1.";
 choices[49][3] = "Art&iacute;culo 18.2.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[50]= new Array();
 choices[50][0] = "La CETIC";
 choices[50][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[50][2] = "La DTIC";
 choices[50][3] = "El MHFP";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[51]= "52)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[51]= new Array();
 choices[51][0] = "Por unanimidad.";
 choices[51][1] = "Por mayor&iacute;a cualificada.";
 choices[51][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[51][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[51] = choices[51][3];
 units[51] = "5";
 comments[51] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[52]= new Array();
 choices[52][0] = "A la CETIC";
 choices[52][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[52][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[52][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[52] = choices[52][3];
 units[52] = "19";
 comments[52] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[53]= new Array();
 choices[53][0] = "SPARQL";
 choices[53][1] = "UnQL";
 choices[53][2] = "XQUERY";
 choices[53][3] = "RQL";
 answers[53] = choices[53][0];
 units[53] = "74";
 comments[53] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[54]= "55)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[54]= new Array();
 choices[54][0] = "Discriminaci&oacute;n indirecta.";
 choices[54][1] = "Discriminaci&oacute;n directa.";
 choices[54][2] = "Discriminaci&oacute;n por maternidad.";
 choices[54][3] = "Discriminaci&oacute;n abusiva.";
 answers[54] = choices[54][1];
 units[54] = "14";
 comments[54] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[55]= new Array();
 choices[55][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[55][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[55][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[55][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[55] = choices[55][0];
 units[55] = "26";
 comments[55] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[56]= "57)  Los Reglamentos no se caracterizan por:";
 choices[56]= new Array();
 choices[56][0] = "No poseer alcance general.";
 choices[56][1] = "Ser obligatorios.";
 choices[56][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[56][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[57]= "58)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[57]= new Array();
 choices[57][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[57][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[57][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[57][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[57] = choices[57][3];
 units[57] = "34, 84";
 comments[57] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[58]= new Array();
 choices[58][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[58][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[58][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[58][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[59]= "60)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[59]= new Array();
 choices[59][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[59][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[59][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[59][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[59] = choices[59][3];
 units[59] = "101";
 comments[59] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[60]= new Array();
 choices[60][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[60][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[60][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[60][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[60] = choices[60][3];
 units[60] = "57";
 comments[60] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[61]= new Array();
 choices[61][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[61][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[61][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[61][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[61] = choices[61][0];
 units[61] = "14";
 comments[61] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[62]= new Array();
 choices[62][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[62][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[62][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[62][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[62] = choices[62][3];
 units[62] = "78";
 comments[62] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[63]= "64)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[63]= new Array();
 choices[63][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[63][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[63][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[63][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[63] = choices[63][2];
 units[63] = "8";
 comments[63] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[64]= "65)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[64]= new Array();
 choices[64][0] = "Tres a&ntilde;os.";
 choices[64][1] = "Dos a&ntilde;os y medio.";
 choices[64][2] = "Cinco a&ntilde;os.";
 choices[64][3] = "Seis a&ntilde;os.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[65]= new Array();
 choices[65][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[65][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[65][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[65][3] = "La tasa de desempleo ronda el 20%";
 answers[65] = choices[65][2];
 units[65] = "12";
 comments[65] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[66]= "67)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[66]= new Array();
 choices[66][0] = "6 TB.";
 choices[66][1] = "8 TB.";
 choices[66][2] = "7 TB.";
 choices[66][3] = "4 TB.";
 answers[66] = choices[66][3];
 units[66] = "53";
 comments[66] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[67]= new Array();
 choices[67][0] = "Versi&oacute;n digital prioritaria.";
 choices[67][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[67][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[67][3] = "Apertura y transparencia.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[68]= "69)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[68]= new Array();
 choices[68][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[68][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[68][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[68][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[68] = choices[68][0];
 units[68] = "65";
 comments[68] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[69]= "70)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[69][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[69][2] = "b) y d) son verdaderas";
 choices[69][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[69] = choices[69][1];
 units[69] = "18, 20";
 comments[69] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[70]= "71)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[70]= new Array();
 choices[70][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[70][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[70][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[70][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[70] = choices[70][2];
 units[70] = "47";
 comments[70] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[71]= new Array();
 choices[71][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[71][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[71][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[71][3] = "Sancionar y publicar las leyes.";
 answers[71] = choices[71][2];
 units[71] = "1";
 comments[71] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[72]= "73)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[72]= new Array();
 choices[72][0] = "GROUP BY.";
 choices[72][1] = "COUNT.";
 choices[72][2] = "WHERE.";
 choices[72][3] = "DISTINCT.";
 answers[72] = choices[72][0];
 units[72] = "60";
 comments[72] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[73]= new Array();
 choices[73][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[73][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[73][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[73][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[73] = choices[73][0];
 units[73] = "19";
 comments[73] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[74]= new Array();
 choices[74][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[74][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[74][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[74][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[74] = choices[74][1];
 units[74] = "22";
 comments[74] = "Id Pregunta: 122. ";


