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
var preguntaids = new Array();

//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[0]= "1)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[0]= new Array();
 choices[0][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[0][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[0][2] = "La protecci&oacute;n del medio ambiente.";
 choices[0][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[0] = choices[0][0];
 units[0] = "22";
 comments[0] = "Id Pregunta: 125. ";
 preguntaids[0] = 125


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[1]= "2)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[1]= new Array();
 choices[1][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[1][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[1][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[1][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";
 preguntaids[1] = 707


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[2]= new Array();
 choices[2][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[2][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[2][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[2][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[2] = choices[2][3];
 units[2] = "22";
 comments[2] = "Id Pregunta: 126. ";
 preguntaids[2] = 126


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[3]= new Array();
 choices[3][0] = "En 2011";
 choices[3][1] = "En 2013";
 choices[3][2] = "En 2015";
 choices[3][3] = "En 2016";
 answers[3] = choices[3][2];
 units[3] = "17";
 comments[3] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[3] = 763


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[4]= "5)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[4]= new Array();
 choices[4][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[4][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[4][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[4][3] = "Todos los anteriores";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 561. Agenda Digital";
 preguntaids[4] = 561


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[5]= new Array();
 choices[5][0] = "Consumidores";
 choices[5][1] = "PYMES y Start-ups";
 choices[5][2] = "La Industria";
 choices[5][3] = "Todos los anteriores";
 answers[5] = choices[5][3];
 units[5] = "17";
 comments[5] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[5] = 557


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[6]= new Array();
 choices[6][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[6][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[6][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[6][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[6] = choices[6][1];
 units[6] = "22";
 comments[6] = "Id Pregunta: 713. Portal de Transparencia";
 preguntaids[6] = 713


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[7]= "8)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[7]= new Array();
 choices[7][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[7][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[7][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[7][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[7] = choices[7][2];
 units[7] = "22";
 comments[7] = "Id Pregunta: 128. ";
 preguntaids[7] = 128


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[8]= new Array();
 choices[8][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[8][1] = "Calidad de los servicios p&uacute;blicos";
 choices[8][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[8][3] = "Servicio efectivo a los ciudadanos";
 answers[8] = choices[8][1];
 units[8] = "18";
 comments[8] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[8] = 749


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[9]= "10)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[9]= new Array();
 choices[9][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[9][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[9][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[9][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[9] = choices[9][2];
 units[9] = "19";
 comments[9] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";
 preguntaids[9] = 168


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[10]= new Array();
 choices[10][0] = "La CETIC";
 choices[10][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[10][2] = "La DTIC";
 choices[10][3] = "El MHFP";
 answers[10] = choices[10][0];
 units[10] = "19";
 comments[10] = "Id Pregunta: 593. Estrategia TIC";
 preguntaids[10] = 593


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[11]= new Array();
 choices[11][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[11][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[11][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[11][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[11] = choices[11][3];
 units[11] = "22";
 comments[11] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[11] = 714


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[12]= new Array();
 choices[12][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[12][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[12][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[12][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[12] = 581


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[13]= new Array();
 choices[13][0] = "En 2015";
 choices[13][1] = "En 2013";
 choices[13][2] = "En 2016";
 choices[13][3] = "En 2007";
 answers[13] = choices[13][1];
 units[13] = "19";
 comments[13] = "Id Pregunta: 560. Agenda Digital";
 preguntaids[13] = 560


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[14]= "15)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[14]= new Array();
 choices[14][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[14][1] = "La CETIC";
 choices[14][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[14][3] = "El MHFP";
 answers[14] = choices[14][0];
 units[14] = "19";
 comments[14] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[14] = 595


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[15]= new Array();
 choices[15][0] = "No discriminaci&oacute;n";
 choices[15][1] = "Cooperaci&oacute;n";
 choices[15][2] = "Colaboraci&oacute;n";
 choices[15][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[15] = choices[15][2];
 units[15] = "23";
 comments[15] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";
 preguntaids[15] = 746


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[16]= new Array();
 choices[16][0] = "Bienalmente";
 choices[16][1] = "Anualmente";
 choices[16][2] = "Semestralmente";
 choices[16][3] = "Cada cuatro a&ntilde;os";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[16] = 586


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[17]= "18)  Es falso que:";
 choices[17]= new Array();
 choices[17][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[17][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[17][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[17][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[17] = choices[17][1];
 units[17] = "20";
 comments[17] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[17] = 752


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[18]= "19)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[18][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[18][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[18][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[18] = choices[18][0];
 units[18] = "19";
 comments[18] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";
 preguntaids[18] = 165


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[19]= new Array();
 choices[19][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[19][1] = "Las CMADs";
 choices[19][2] = "Ambas son correctas.";
 choices[19][3] = "Ninguna es correcta";
 answers[19] = choices[19][2];
 units[19] = "19";
 comments[19] = "Id Pregunta: 598. Estrategia TIC";
 preguntaids[19] = 598


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[20]= new Array();
 choices[20][0] = "Un representante de la Administraci&oacute;n local.";
 choices[20][1] = "Un representante del Tribunal de Cuentas.";
 choices[20][2] = "Un representante del Defensor del Pueblo.";
 choices[20][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[20] = choices[20][0];
 units[20] = "22";
 comments[20] = "Id Pregunta: 123. ";
 preguntaids[20] = 123


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[21]= new Array();
 choices[21][0] = "El BCE";
 choices[21][1] = "El Parlamento";
 choices[21][2] = "El Consejo";
 choices[21][3] = "La Comisi&oacute;n";
 answers[21] = choices[21][3];
 units[21] = "17";
 comments[21] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";
 preguntaids[21] = 556


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[22]= new Array();
 choices[22][0] = "Fue elaborada y aprobada por la CETIC";
 choices[22][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[22][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[22][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 580. Estrategia TIC";
 preguntaids[22] = 580


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[23]= new Array();
 choices[23][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[23][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[23][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[23][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[23] = choices[23][3];
 units[23] = "19";
 comments[23] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[23] = 171


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[24]= new Array();
 choices[24][0] = "El 2 de Octubre de 2015";
 choices[24][1] = "El 15 de Septiembre de 2015";
 choices[24][2] = "El 1 de Octubre de 2015";
 choices[24][3] = "El 5 de Octubre de 2015";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 579. Estrategia TIC";
 preguntaids[24] = 579


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[25]= "26)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[25]= new Array();
 choices[25][0] = "Seguridad Social y AEAT";
 choices[25][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[25][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[25][3] = "Todos los anteriores";
 answers[25] = choices[25][3];
 units[25] = "19";
 comments[25] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[25] = 596


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[26][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[26][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[26][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[26] = choices[26][1];
 units[26] = "22";
 comments[26] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[26] = 278


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[27][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[27][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[27][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[27] = choices[27][2];
 units[27] = "22";
 comments[27] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[27] = 275


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[28]= "29)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[28]= new Array();
 choices[28][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[28][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[28][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[28][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[28] = choices[28][2];
 units[28] = "19";
 comments[28] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";
 preguntaids[28] = 170


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[29]= "30)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[29]= new Array();
 choices[29][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[29][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[29][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[29][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[29] = choices[29][3];
 units[29] = "22";
 comments[29] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[29] = 709


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[30]= "31)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[30]= new Array();
 choices[30][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[30][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[30][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[30][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[30] = choices[30][1];
 units[30] = "19";
 comments[30] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";
 preguntaids[30] = 164


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[31]= "32)  Son servicios declarados compartidos:";
 choices[31]= new Array();
 choices[31][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[31][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[31][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[31][3] = "Todos los anteriores";
 answers[31] = choices[31][3];
 units[31] = "19";
 comments[31] = "Id Pregunta: 591. Estrategia TIC";
 preguntaids[31] = 591


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[32]= new Array();
 choices[32][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[32][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[32][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[32][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[32] = choices[32][2];
 units[32] = "19";
 comments[32] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";
 preguntaids[32] = 755


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[33]= new Array();
 choices[33][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[33][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[33][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[33][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[33] = choices[33][1];
 units[33] = "23";
 comments[33] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[33] = 745


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[34]= new Array();
 choices[34][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[34][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[34][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[34][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[34] = choices[34][2];
 units[34] = "22";
 comments[34] = "Id Pregunta: 97. AGE A1 2015";
 preguntaids[34] = 97


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[35]= "36)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[35]= new Array();
 choices[35][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[35][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[35][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[35][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[35] = choices[35][3];
 units[35] = "22";
 comments[35] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";
 preguntaids[35] = 274


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[36]= "37)  El plan nacional de ciudades inteligentes...";
 choices[36]= new Array();
 choices[36][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[36][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[36][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[36][3] = "No existe";
 answers[36] = choices[36][1];
 units[36] = "19";
 comments[36] = "Id Pregunta: 563. Ciudades Inteligentes";
 preguntaids[36] = 563


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[37]= new Array();
 choices[37][0] = "Establecer redes de telecomunicaciones continentales";
 choices[37][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[37][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[37][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[37] = choices[37][0];
 units[37] = "17";
 comments[37] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[37] = 554


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[38][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[38][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[38][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[38] = choices[38][3];
 units[38] = "19";
 comments[38] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[38] = 16


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[39]= new Array();
 choices[39][0] = "Programa de Educaci&oacute;n Digital";
 choices[39][1] = "Programa de Salud y Bienestar Social";
 choices[39][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[39][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[39] = choices[39][3];
 units[39] = "19";
 comments[39] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";
 preguntaids[39] = 756


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[40]= "41)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[40]= new Array();
 choices[40][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[40][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[40][2] = "Ministerio de la Presidencia";
 choices[40][3] = "Ministerio de Fomento";
 answers[40] = choices[40][2];
 units[40] = "22";
 comments[40] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[40] = 708


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "14";
 choices[41][1] = "11";
 choices[41][2] = "12";
 choices[41][3] = "15";
 answers[41] = choices[41][0];
 units[41] = "19";
 comments[41] = "Id Pregunta: 590. Estrategia TIC";
 preguntaids[41] = 590


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[42]= new Array();
 choices[42][0] = "Car&aacute;cter sustitutivo";
 choices[42][1] = "Car&aacute;cter obligatorio";
 choices[42][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][3];
 units[42] = "19";
 comments[42] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[42] = 583


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[43]= new Array();
 choices[43][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[43][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[43][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[43][3] = "Todas lo son";
 answers[43] = choices[43][0];
 units[43] = "17";
 comments[43] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";
 preguntaids[43] = 555


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[44]= new Array();
 choices[44][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[44][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[44][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[44][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[44] = choices[44][2];
 units[44] = "22";
 comments[44] = "Id Pregunta: 121. ";
 preguntaids[44] = 121


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[45]= new Array();
 choices[45][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[45][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[45][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[45][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[45] = 589


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[46]= new Array();
 choices[46][0] = "La CETIC";
 choices[46][1] = "Los Ministerios";
 choices[46][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[46][3] = "Ninguno de los anteriores";
 answers[46] = choices[46][1];
 units[46] = "19";
 comments[46] = "Id Pregunta: 597. Estrategia TIC";
 preguntaids[46] = 597


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[47]= new Array();
 choices[47][0] = "Agenda digital para Europa";
 choices[47][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[47][2] = "Juventud en movimiento";
 choices[47][3] = "Agenda Web 2.0";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 760. Europa 2020";
 preguntaids[47] = 760


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[48]= "49)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[48]= new Array();
 choices[48][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[48][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[48][2] = "Funcionarios e interinos.";
 choices[48][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[48] = choices[48][3];
 units[48] = "20";
 comments[48] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[48] = 646


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[49]= new Array();
 choices[49][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[49][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[49][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[49][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[49] = choices[49][0];
 units[49] = "22";
 comments[49] = "Id Pregunta: 124. ";
 preguntaids[49] = 124


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[50]= "51)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[50]= new Array();
 choices[50][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[50][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[50][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[50][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[50] = choices[50][2];
 units[50] = "22";
 comments[50] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";
 preguntaids[50] = 277


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[51]= new Array();
 choices[51][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[51][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[51][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = choices[51][1];
 units[51] = "19";
 comments[51] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[51] = 588


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[52]= new Array();
 choices[52][0] = "Tiene car&aacute;cter facultativo.";
 choices[52][1] = "Tiene car&aacute;cter potestativo. ";
 choices[52][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[52][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[52] = choices[52][1];
 units[52] = "22";
 comments[52] = "Id Pregunta: 127. ";
 preguntaids[52] = 127


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[53]= new Array();
 choices[53][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[53][1] = "Implantar el mercado general europeo";
 choices[53][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[53][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[53] = 758


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[54]= new Array();
 choices[54][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[54][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[54][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[54][3] = "Todos los anteriores";
 answers[54] = choices[54][3];
 units[54] = "19";
 comments[54] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[54] = 592


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[55]= new Array();
 choices[55][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[55][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[55][2] = "Fomentar el despliegue de redes y servicios";
 choices[55][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[55] = choices[55][0];
 units[55] = "19";
 comments[55] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[55] = 754


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[56]= "57)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[56]= new Array();
 choices[56][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[56][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[56][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[56][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[56] = choices[56][1];
 units[56] = "19";
 comments[56] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";
 preguntaids[56] = 160


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[57]= new Array();
 choices[57][0] = "Compatibilidad";
 choices[57][1] = "Interoperabilidad";
 choices[57][2] = "Reutilizaci&oacute;n";
 choices[57][3] = "Accesibilidad";
 answers[57] = choices[57][0];
 units[57] = "22";
 comments[57] = "Id Pregunta: 705. Ley de transparencia";
 preguntaids[57] = 705


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[58]= "59)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[58][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[58][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[58][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[58] = choices[58][3];
 units[58] = "22";
 comments[58] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[58] = 712


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[59]= new Array();
 choices[59][0] = "Anualmente";
 choices[59][1] = "Bienalmente";
 choices[59][2] = "Cada cuatro a&ntilde;os";
 choices[59][3] = "No se define ninguna periodicidad";
 answers[59] = choices[59][1];
 units[59] = "19";
 comments[59] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";
 preguntaids[59] = 594


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[60]= new Array();
 choices[60][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[60][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[60][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[60][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[60] = choices[60][2];
 units[60] = "22";
 comments[60] = "Id Pregunta: 129. ";
 preguntaids[60] = 129


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[61]= new Array();
 choices[61][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[61][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[61][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[61][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[61] = 757


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[62]= new Array();
 choices[62][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[62][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[62][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[62][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[62] = choices[62][2];
 units[62] = "22";
 comments[62] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[62] = 706


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[63]= new Array();
 choices[63][0] = "Ley 3/2015";
 choices[63][1] = "Ley 6/2007";
 choices[63][2] = "Ley 5/1984";
 choices[63][3] = "Ley 5/2006";
 answers[63] = choices[63][0];
 units[63] = "22";
 comments[63] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[63] = 711


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[64]= new Array();
 choices[64][0] = "La CETIC";
 choices[64][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[64][2] = "La DTIC";
 choices[64][3] = "Ninguno de los anteriores";
 answers[64] = choices[64][1];
 units[64] = "19";
 comments[64] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[64] = 587


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[65]= new Array();
 choices[65][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[65][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[65][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[65][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[65] = choices[65][0];
 units[65] = "19";
 comments[65] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";
 preguntaids[65] = 163


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[66]= "67)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[66]= new Array();
 choices[66][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[66][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[66][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[66][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[66] = choices[66][1];
 units[66] = "19";
 comments[66] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";
 preguntaids[66] = 167


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[67]= "68)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[67]= new Array();
 choices[67][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[67][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[67][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[67][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[67] = choices[67][3];
 units[67] = "20";
 comments[67] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";
 preguntaids[67] = 750


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[68]= new Array();
 choices[68][0] = "A la CETIC";
 choices[68][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[68][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[68][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[68] = choices[68][3];
 units[68] = "19";
 comments[68] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[68] = 582


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[69]= new Array();
 choices[69][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[69][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[69][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][2];
 units[69] = "23";
 comments[69] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";
 preguntaids[69] = 744


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[70]= new Array();
 choices[70][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[70][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[70][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[70][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[70] = choices[70][1];
 units[70] = "22";
 comments[70] = "Id Pregunta: 122. ";
 preguntaids[70] = 122


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[71]= "72)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[71]= new Array();
 choices[71][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[71][1] = "Programa de cartas de servicios";
 choices[71][2] = "Programa para la mejora continua de las organizaciones.";
 choices[71][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[71] = choices[71][2];
 units[71] = "19";
 comments[71] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[71] = 747


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[72]= new Array();
 choices[72][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[72][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[72][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[72][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[72] = choices[72][2];
 units[72] = "17";
 comments[72] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[72] = 558


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[73]= "74)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[73]= new Array();
 choices[73][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[73][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[73][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[73][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[73] = choices[73][1];
 units[73] = "19";
 comments[73] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";
 preguntaids[73] = 169


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[74]= new Array();
 choices[74][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[74][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[74][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[74][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[74] = choices[74][0];
 units[74] = "19";
 comments[74] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[74] = 559


