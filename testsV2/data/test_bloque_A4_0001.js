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

//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[0]= new Array();
 choices[0][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[0][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[0][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[0][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[0] = choices[0][2];
 units[0] = "22";
 comments[0] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[1]= new Array();
 choices[1][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[1][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[1][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[1][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[2]= "3)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[2]= new Array();
 choices[2][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[2][1] = "Programa de cartas de servicios";
 choices[2][2] = "Programa para la mejora continua de las organizaciones.";
 choices[2][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[2] = choices[2][2];
 units[2] = "18, 20";
 comments[2] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[3]= "4)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[3]= new Array();
 choices[3][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[3][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[3][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[3][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[3] = choices[3][2];
 units[3] = "19";
 comments[3] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[4]= new Array();
 choices[4][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[4][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[4][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[4][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[4] = choices[4][2];
 units[4] = "17";
 comments[4] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[5]= "6)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[5]= new Array();
 choices[5][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[5][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[5][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[5][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 707. Ley de transparencia";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[6]= new Array();
 choices[6][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[6][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[6][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[6][3] = "Todas lo son";
 answers[6] = choices[6][0];
 units[6] = "17";
 comments[6] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[7]= new Array();
 choices[7][0] = "Principio de solo una vez";
 choices[7][1] = "Apertura y transparencia";
 choices[7][2] = "Confianza y seguridad";
 choices[7][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[7] = choices[7][3];
 units[7] = "19";
 comments[7] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[8]= new Array();
 choices[8][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[8][1] = "Las CMADs";
 choices[8][2] = "Ambas son correctas.";
 choices[8][3] = "Ninguna es correcta";
 answers[8] = choices[8][2];
 units[8] = "19";
 comments[8] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[9]= new Array();
 choices[9][0] = "El 2 de Octubre de 2015";
 choices[9][1] = "El 15 de Septiembre de 2015";
 choices[9][2] = "El 1 de Octubre de 2015";
 choices[9][3] = "El 5 de Octubre de 2015";
 answers[9] = choices[9][0];
 units[9] = "19";
 comments[9] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[10]= new Array();
 choices[10][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[10][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[10][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[10][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[10] = choices[10][2];
 units[10] = "22";
 comments[10] = "Id Pregunta: 121. ";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[11]= new Array();
 choices[11][0] = "Fue elaborada y aprobada por la CETIC";
 choices[11][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[11][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[11][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[12]= new Array();
 choices[12][0] = "Compatibilidad";
 choices[12][1] = "Interoperabilidad";
 choices[12][2] = "Reutilizaci&oacute;n";
 choices[12][3] = "Accesibilidad";
 answers[12] = choices[12][0];
 units[12] = "22";
 comments[12] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[13]= "14)  El plan nacional de ciudades inteligentes...";
 choices[13]= new Array();
 choices[13][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[13][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[13][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[13][3] = "No existe";
 answers[13] = choices[13][1];
 units[13] = "19";
 comments[13] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[14]= new Array();
 choices[14][0] = "No discriminaci&oacute;n";
 choices[14][1] = "Cooperaci&oacute;n";
 choices[14][2] = "Colaboraci&oacute;n";
 choices[14][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[14] = choices[14][2];
 units[14] = "18, 20";
 comments[14] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[15]= "16)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[15]= new Array();
 choices[15][0] = "Seguridad Social y AEAT";
 choices[15][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[15][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[15][3] = "Todos los anteriores";
 answers[15] = choices[15][3];
 units[15] = "19";
 comments[15] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[16]= new Array();
 choices[16][0] = "En 2015";
 choices[16][1] = "En 2013";
 choices[16][2] = "En 2016";
 choices[16][3] = "En 2007";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[17][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[17][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[17][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[17] = choices[17][2];
 units[17] = "19";
 comments[17] = "Id Pregunta: 753. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[18]= new Array();
 choices[18][0] = "Consumidores";
 choices[18][1] = "PYMES y Start-ups";
 choices[18][2] = "La Industria";
 choices[18][3] = "Todos los anteriores";
 answers[18] = choices[18][3];
 units[18] = "17";
 comments[18] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[19]= new Array();
 choices[19][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[19][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[19][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[19][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[19] = choices[19][0];
 units[19] = "22";
 comments[19] = "Id Pregunta: 124. ";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[20]= "21)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[20]= new Array();
 choices[20][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[20][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[20][2] = "Ministerio de la Presidencia";
 choices[20][3] = "Ministerio de Fomento";
 answers[20] = choices[20][2];
 units[20] = "22";
 comments[20] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[21]= "22)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[21][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[21][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[21][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[21] = choices[21][0];
 units[21] = "19";
 comments[21] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[22]= new Array();
 choices[22][0] = "La CETIC";
 choices[22][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[22][2] = "La DTIC";
 choices[22][3] = "Ninguno de los anteriores";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[23]= new Array();
 choices[23][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[23][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[23][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[23][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[23] = choices[23][3];
 units[23] = "22";
 comments[23] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[24]= new Array();
 choices[24][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[24][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[24][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[24][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[24] = choices[24][3];
 units[24] = "22";
 comments[24] = "Id Pregunta: 120. ";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[25]= new Array();
 choices[25][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[25][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[25][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[25][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[25] = choices[25][2];
 units[25] = "22";
 comments[25] = "Id Pregunta: 129. ";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[26]= new Array();
 choices[26][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[26][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[26][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[26][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[26] = choices[26][1];
 units[26] = "18, 20";
 comments[26] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[27]= new Array();
 choices[27][0] = "Car&aacute;cter sustitutivo";
 choices[27][1] = "Car&aacute;cter obligatorio";
 choices[27][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][3];
 units[27] = "19";
 comments[27] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[28]= new Array();
 choices[28][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[28][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[28][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][2];
 units[28] = "18, 20";
 comments[28] = "Id Pregunta: 742. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[29]= new Array();
 choices[29][0] = "Anualmente";
 choices[29][1] = "Bienalmente";
 choices[29][2] = "Cada cuatro a&ntilde;os";
 choices[29][3] = "No se define ninguna periodicidad";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[30]= new Array();
 choices[30][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[30][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[30][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[30][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[30] = choices[30][0];
 units[30] = "19";
 comments[30] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[31]= new Array();
 choices[31][0] = "En 2011";
 choices[31][1] = "En 2013";
 choices[31][2] = "En 2015";
 choices[31][3] = "En 2016";
 answers[31] = choices[31][2];
 units[31] = "17";
 comments[31] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[32]= new Array();
 choices[32][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[32][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[32][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[32][3] = "Todos los anteriores";
 answers[32] = choices[32][3];
 units[32] = "19";
 comments[32] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[33]= new Array();
 choices[33][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[33][1] = "Implantar el mercado general europeo";
 choices[33][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[33][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[33] = choices[33][1];
 units[33] = "19";
 comments[33] = "Id Pregunta: 756. Agenda Digital Europea";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[34]= new Array();
 choices[34][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[34][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[34][2] = "Fomentar el despliegue de redes y servicios";
 choices[34][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[34] = choices[34][0];
 units[34] = "19";
 comments[34] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[35]= "36)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[35]= new Array();
 choices[35][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[35][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[35][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[35][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[35] = choices[35][2];
 units[35] = "22";
 comments[35] = "Id Pregunta: 128. ";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique la afirmaci&oacute;n falsa:";
 choices[36]= new Array();
 choices[36][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[36][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[36][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[36][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[36] = choices[36][1];
 units[36] = "22";
 comments[36] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[37]= "38)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[37]= new Array();
 choices[37][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[37][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[37][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[37][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[37] = choices[37][1];
 units[37] = "19";
 comments[37] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[38]= new Array();
 choices[38][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[38][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[38][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[38][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[38] = choices[38][1];
 units[38] = "18, 20";
 comments[38] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[39]= new Array();
 choices[39][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[39][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[39][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[39][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[39] = choices[39][1];
 units[39] = "19";
 comments[39] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[40]= new Array();
 choices[40][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[40][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[40][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][1];
 units[40] = "19";
 comments[40] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[41]= "42)  Son servicios declarados compartidos:";
 choices[41]= new Array();
 choices[41][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[41][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[41][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[41][3] = "Todos los anteriores";
 answers[41] = choices[41][3];
 units[41] = "19";
 comments[41] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[42]= new Array();
 choices[42][0] = "Ley 3/2015";
 choices[42][1] = "Ley 6/2007";
 choices[42][2] = "Ley 5/1984";
 choices[42][3] = "Ley 5/2006";
 answers[42] = choices[42][0];
 units[42] = "22";
 comments[42] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[43]= new Array();
 choices[43][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[43][1] = "Calidad de los servicios p&uacute;blicos";
 choices[43][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[43][3] = "Servicio efectivo a los ciudadanos";
 answers[43] = choices[43][1];
 units[43] = "18, 20";
 comments[43] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[44]= "45)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[44][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[44][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[44][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[44] = choices[44][3];
 units[44] = "22";
 comments[44] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[45][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[45][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[45][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[46]= new Array();
 choices[46][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[46][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[46][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[46][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[47]= new Array();
 choices[47][0] = "3 pilares";
 choices[47][1] = "4 pilares";
 choices[47][2] = "5 pilares";
 choices[47][3] = "7 pilares";
 answers[47] = choices[47][0];
 units[47] = "17";
 comments[47] = "Id Pregunta: 759. Mercado &Uacute;nico Digital";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[48]= new Array();
 choices[48][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[48][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[48][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[48][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[49]= "50)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[49]= new Array();
 choices[49][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[49][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[49][2] = "La protecci&oacute;n del medio ambiente.";
 choices[49][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[49] = choices[49][0];
 units[49] = "22";
 comments[49] = "Id Pregunta: 125. ";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "14";
 choices[50][1] = "11";
 choices[50][2] = "12";
 choices[50][3] = "15";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[51]= "52)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[51]= new Array();
 choices[51][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[51][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[51][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[51][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[51] = choices[51][2];
 units[51] = "22";
 comments[51] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[52]= new Array();
 choices[52][0] = "La CETIC";
 choices[52][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[52][2] = "La DTIC";
 choices[52][3] = "El MHFP";
 answers[52] = choices[52][0];
 units[52] = "19";
 comments[52] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[53]= new Array();
 choices[53][0] = "A la CETIC";
 choices[53][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[53][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[53][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[53] = choices[53][3];
 units[53] = "19";
 comments[53] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[54]= "55)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[54][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[54][2] = "b) y d) son verdaderas";
 choices[54][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[54] = choices[54][1];
 units[54] = "18, 20";
 comments[54] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[55]= new Array();
 choices[55][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[55][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[55][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[55][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[55] = choices[55][0];
 units[55] = "19";
 comments[55] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[56]= new Array();
 choices[56][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[56][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[56][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[56][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[56] = choices[56][1];
 units[56] = "22";
 comments[56] = "Id Pregunta: 122. ";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[57]= "58)  Es falso que:";
 choices[57]= new Array();
 choices[57][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[57][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[57][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[57][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[57] = choices[57][1];
 units[57] = "18, 20";
 comments[57] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[58]= "59)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[58]= new Array();
 choices[58][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[58][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[58][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[58][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[58] = choices[58][2];
 units[58] = "22";
 comments[58] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[59]= new Array();
 choices[59][0] = "Crecimiento sostenible";
 choices[59][1] = "Crecimiento inteligente";
 choices[59][2] = "Crecimiento digital";
 choices[59][3] = "Crecimiento integrador";
 answers[59] = choices[59][2];
 units[59] = "19";
 comments[59] = "Id Pregunta: 757. Europa 2020";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[60]= new Array();
 choices[60][0] = "Bienalmente";
 choices[60][1] = "Anualmente";
 choices[60][2] = "Semestralmente";
 choices[60][3] = "Cada cuatro a&ntilde;os";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[61]= new Array();
 choices[61][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[61][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[61][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[61][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[61] = choices[61][1];
 units[61] = "22";
 comments[61] = "Id Pregunta: 711. Portal de Transparencia";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[62]= new Array();
 choices[62][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[62][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[62][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[62][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[62] = choices[62][1];
 units[62] = "22";
 comments[62] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[63]= "64)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[63]= new Array();
 choices[63][0] = "Interoperabilidad";
 choices[63][1] = "Integridad";
 choices[63][2] = "Capital humano";
 choices[63][3] = "Trazabilidad";
 answers[63] = choices[63][2];
 units[63] = "19";
 comments[63] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[64]= "65)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[64]= new Array();
 choices[64][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[64][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[64][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[64][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[64] = choices[64][3];
 units[64] = "18, 20";
 comments[64] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[65]= new Array();
 choices[65][0] = "El 5 de Octubre de 2015";
 choices[65][1] = "El 15 de Octubre de 2015";
 choices[65][2] = "El 15 de Septiembre de 2015";
 choices[65][3] = "El 2 de Octubre de 2015";
 answers[65] = choices[65][2];
 units[65] = "19";
 comments[65] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[66]= new Array();
 choices[66][0] = "Establecer redes de telecomunicaciones continentales";
 choices[66][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[66][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[66][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[66] = choices[66][0];
 units[66] = "17";
 comments[66] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[67]= "68)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[67]= new Array();
 choices[67][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[67][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[67][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[67][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[67] = choices[67][1];
 units[67] = "19";
 comments[67] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[68]= new Array();
 choices[68][0] = "El BCE";
 choices[68][1] = "El Parlamento";
 choices[68][2] = "El Consejo";
 choices[68][3] = "La Comisi&oacute;n";
 answers[68] = choices[68][3];
 units[68] = "17";
 comments[68] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[69]= new Array();
 choices[69][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[69][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[69][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[69][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[69] = choices[69][0];
 units[69] = "19";
 comments[69] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[70]= new Array();
 choices[70][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[70][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[70][2] = "Apertura al exterior";
 choices[70][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[70] = choices[70][0];
 units[70] = "17";
 comments[70] = "Id Pregunta: 760. Mercado &Uacute;nico Digital";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[71]= new Array();
 choices[71][0] = "Programa de Educaci&oacute;n Digital";
 choices[71][1] = "Programa de Salud y Bienestar Social";
 choices[71][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[71][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[71] = choices[71][3];
 units[71] = "19";
 comments[71] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[72]= new Array();
 choices[72][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[72][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[72][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[72][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[72] = choices[72][3];
 units[72] = "22";
 comments[72] = "Id Pregunta: 126. ";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[73]= "74)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[73]= new Array();
 choices[73][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[73][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[73][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[73][3] = "Todos los anteriores";
 answers[73] = choices[73][3];
 units[73] = "19";
 comments[73] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[74]= "75)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[74]= new Array();
 choices[74][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[74][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[74][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[74][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[74] = choices[74][2];
 units[74] = "19";
 comments[74] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


