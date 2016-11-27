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

//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[0]= new Array();
 choices[0][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[0][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[0][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[0][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[0] = choices[0][1];
 units[0] = "77";
 comments[0] = "Id Pregunta: 688. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[1]= "2)  El lenguaje SPARK es un subconjunto de:";
 choices[1]= new Array();
 choices[1][0] = "Java";
 choices[1][1] = "Fortran";
 choices[1][2] = "Ruby";
 choices[1][3] = "Ada";
 answers[1] = choices[1][3];
 units[1] = "73";
 comments[1] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[2]= new Array();
 choices[2][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[2][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[2][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[2][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[2] = choices[2][1];
 units[2] = "43";
 comments[2] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[3]= "4)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[3]= new Array();
 choices[3][0] = "20 parlamentarios.";
 choices[3][1] = "29 parlamentarios.";
 choices[3][2] = "18 parlamentarios.";
 choices[3][3] = "23 parlamentarios.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[4]= "5)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[4]= new Array();
 choices[4][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[4][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[4][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[4][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[4] = choices[4][1];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[5]= "6)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[5]= new Array();
 choices[5][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[5][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[5][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[5][3] = "Todas las respuestas son correctas.";
 answers[5] = choices[5][0];
 units[5] = "101";
 comments[5] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[6]= "7)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[6]= new Array();
 choices[6][0] = "Principio de transparencia.";
 choices[6][1] = "Principio de cooperaci&oacute;n.";
 choices[6][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[6][3] = "Principio de lealtad institucional.";
 answers[6] = choices[6][1];
 units[6] = "10";
 comments[6] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[7]= new Array();
 choices[7][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[7][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[7][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[7][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[7] = choices[7][0];
 units[7] = "19";
 comments[7] = "Id Pregunta: 587. Estrategia TIC";


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


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[9]= "10)  La soberan&iacute;a nacional reside en:";
 choices[9]= new Array();
 choices[9][0] = "el Parlamento nacional.";
 choices[9][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[9][2] = "el pueblo espa&ntilde;ol.";
 choices[9][3] = "el Congreso y el Senado.";
 answers[9] = choices[9][3];
 units[9] = "1";
 comments[9] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[10][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[10][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[10][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[10] = choices[10][3];
 units[10] = "5";
 comments[10] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[11]= "12)  La Administraci&oacute;n General del Estado se organiza:";
 choices[11]= new Array();
 choices[11][0] = "en Ministerios";
 choices[11][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[11][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[11][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[12]= "13)  El sector Servicios NO incluye:";
 choices[12]= new Array();
 choices[12][0] = "El Comercio";
 choices[12][1] = "Los Transportes";
 choices[12][2] = "La Energ&iacute;a";
 choices[12][3] = "Las Comunicaciones";
 answers[12] = choices[12][2];
 units[12] = "12";
 comments[12] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[13]= new Array();
 choices[13][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[13][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[13][2] = "c) Todas las respuestas son correctas.";
 choices[13][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[14]= "15)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[14]= new Array();
 choices[14][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[14][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[14][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[14][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[15]= new Array();
 choices[15][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[15][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[15][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[15][3] = "El Instituto de la Mujer de Extremadura.";
 answers[15] = choices[15][3];
 units[15] = "14";
 comments[15] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[16]= "17)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[16]= new Array();
 choices[16][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[16][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[16][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[16][3] = "ninguna es correcta";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[17]= "18)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[17]= new Array();
 choices[17][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[17][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[17][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[17][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[17] = choices[17][3];
 units[17] = "1";
 comments[17] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[18]= "19)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[18]= new Array();
 choices[18][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[18][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[18][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[18][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[18] = choices[18][1];
 units[18] = "95";
 comments[18] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[19]= new Array();
 choices[19][0] = "El BCE";
 choices[19][1] = "El Parlamento";
 choices[19][2] = "El Consejo";
 choices[19][3] = "La Comisi&oacute;n";
 answers[19] = choices[19][3];
 units[19] = "17";
 comments[19] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[20]= "21)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[20]= new Array();
 choices[20][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[20][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[20][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[20][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[20] = choices[20][2];
 units[20] = "12";
 comments[20] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[21]= new Array();
 choices[21][0] = "Un representante de la Administraci&oacute;n local.";
 choices[21][1] = "Un representante del Tribunal de Cuentas.";
 choices[21][2] = "Un representante del Defensor del Pueblo.";
 choices[21][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[21] = choices[21][0];
 units[21] = "22";
 comments[21] = "Id Pregunta: 123. ";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[22]= "23)  ITIL v3, define:";
 choices[22]= new Array();
 choices[22][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[22][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[22][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[22][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[22] = choices[22][0];
 units[22] = "101";
 comments[22] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[23]= new Array();
 choices[23][0] = "Un diputado y un senador, cada una de ellas";
 choices[23][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[23][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[23][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[23] = choices[23][2];
 units[23] = "1";
 comments[23] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[24]= "25)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[24]= new Array();
 choices[24][0] = "De los interesados en el procedimiento";
 choices[24][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[24][2] = "Disposiciones generales";
 choices[24][3] = "De los actos administrativos";
 answers[24] = choices[24][2];
 units[24] = "7";
 comments[24] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[25]= new Array();
 choices[25][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[25][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[25][2] = "Servicio de seguridad gestionada";
 choices[25][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[25] = choices[25][1];
 units[25] = "26";
 comments[25] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[26]= new Array();
 choices[26][0] = "La Ley General Tributaria.";
 choices[26][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[26][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[26][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[26] = choices[26][2];
 units[26] = "10";
 comments[26] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[27]= "28)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[27]= new Array();
 choices[27][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[27][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[27][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[27][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[27] = choices[27][1];
 units[27] = "64";
 comments[27] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[28]= "29)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[28]= new Array();
 choices[28][0] = "Sello electr&oacute;nico";
 choices[28][1] = "Sede electr&oacute;nica";
 choices[28][2] = "Servidor seguro (SSL/TLS)";
 choices[28][3] = "Empleado p&uacute;blico";
 answers[28] = choices[28][2];
 units[28] = "7";
 comments[28] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[29]= "30)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[29]= new Array();
 choices[29][0] = "Los propios miembros del Tribunal.";
 choices[29][1] = "El Consejo de Europa.";
 choices[29][2] = "El Consejo Europeo.";
 choices[29][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[30]= new Array();
 choices[30][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[30][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[30][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[30][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[30] = choices[30][0];
 units[30] = "15";
 comments[30] = "Id Pregunta: 114. ";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[31]= new Array();
 choices[31][0] = "Fue elaborada y aprobada por la CETIC";
 choices[31][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[31][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[31][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[31] = choices[31][1];
 units[31] = "19";
 comments[31] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[32]= new Array();
 choices[32][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[32][1] = "La delimitaci&oacute;n de su territorio.";
 choices[32][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[32][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[33]= "34)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[33]= new Array();
 choices[33][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[33][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[33][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[33][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[33] = choices[33][0];
 units[33] = "10";
 comments[33] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[34]= "35)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[34]= new Array();
 choices[34][0] = "2025";
 choices[34][1] = "2023";
 choices[34][2] = "2030";
 choices[34][3] = "2020";
 answers[34] = choices[34][3];
 units[34] = "28";
 comments[34] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[35]= new Array();
 choices[35][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[35][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[35][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[35][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[35] = choices[35][1];
 units[35] = "19";
 comments[35] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[36]= new Array();
 choices[36][0] = "PostgreSQL";
 choices[36][1] = "Datawarehouse";
 choices[36][2] = "Snowflake";
 choices[36][3] = "CouchDB";
 answers[36] = choices[36][0];
 units[36] = "61";
 comments[36] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[37][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[37][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[37][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[37] = choices[37][1];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[38]= new Array();
 choices[38][0] = "Art&iacute;culo 14 CE.";
 choices[38][1] = "Art&iacute;culo 9.2 CE.";
 choices[38][2] = "Art&iacute;culo 9.1 CE.";
 choices[38][3] = "Art&iacute;culo 13 CE.";
 answers[38] = choices[38][2];
 units[38] = "14";
 comments[38] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[39]= "40)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[39]= new Array();
 choices[39][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[39][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[39][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[39][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[39] = choices[39][2];
 units[39] = "57";
 comments[39] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[40]= "41)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[40]= new Array();
 choices[40][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[40][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[40][2] = "Cinco a&ntilde;os.";
 choices[40][3] = "Ninguna es correcta.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[41]= "42)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[41]= new Array();
 choices[41][0] = "Son actos normativos.";
 choices[41][1] = "Poseen alcance general.";
 choices[41][2] = "No son obligatorias.";
 choices[41][3] = "Son actos individuales no normativos.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[42]= new Array();
 choices[42][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[42][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[42][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[42][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[42] = choices[42][3];
 units[42] = "1";
 comments[42] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[43]= new Array();
 choices[43][0] = "En t&iacute;tulos-valores.";
 choices[43][1] = "Las respuestas a) y b) son correctas.";
 choices[43][2] = "Las respuestas a) y b) no son correctas.";
 choices[43][3] = "En cuenta.";
 answers[43] = choices[43][1];
 units[43] = "10";
 comments[43] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[44]= "45)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[44]= new Array();
 choices[44][0] = "Municipios, provincias y CCAA.";
 choices[44][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[44][2] = "En CCAA, 50 provincias y municipios.";
 choices[44][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[45]= new Array();
 choices[45][0] = "En 1988.";
 choices[45][1] = "En 1981.";
 choices[45][2] = "En 1982.";
 choices[45][3] = "En 1986.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[46]= "47)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Un informe de impacto de g&eacute;nero.";
 choices[46][1] = "Un programa de igualdad de oportunidades.";
 choices[46][2] = "Un plan de Igualdad de Oportunidades.";
 choices[46][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[46] = choices[46][0];
 units[46] = "14";
 comments[46] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[47]= new Array();
 choices[47][0] = "Consumidores";
 choices[47][1] = "PYMES y Start-ups";
 choices[47][2] = "La Industria";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "17";
 comments[47] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[48]= "49)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[48]= new Array();
 choices[48][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[48][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[48][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[48][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[49][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[49][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[49][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[49] = choices[49][3];
 units[49] = "44";
 comments[49] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[50]= "51)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[50]= new Array();
 choices[50][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[50][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[50][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[50][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[50] = choices[50][2];
 units[50] = "19";
 comments[50] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[51]= new Array();
 choices[51][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[51][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[51][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[51][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[51] = choices[51][0];
 units[51] = "26";
 comments[51] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[52]= new Array();
 choices[52][0] = "IEEE 802.11p";
 choices[52][1] = "IEEE 802.11r";
 choices[52][2] = "IEEE 802.11v";
 choices[52][3] = "IEEE 802.11w";
 answers[52] = choices[52][1];
 units[52] = "112";
 comments[52] = "Id Pregunta: 572. Tema 112. TAI 2016.";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[53]= "54)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[53]= new Array();
 choices[53][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[53][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[53][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[53][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[53] = choices[53][2];
 units[53] = "22";
 comments[53] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[54]= "55)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[54]= new Array();
 choices[54][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[54][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[54][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[54][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[55]= "56)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[55]= new Array();
 choices[55][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[55][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[55][2] = "Son incompatibles ambas actas de diputado.";
 choices[55][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[56]= "57)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[56]= new Array();
 choices[56][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[56][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[56][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[56][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[56] = choices[56][3];
 units[56] = "1";
 comments[56] = "Id Pregunta: 253. CONSTITUCION1978";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[57]= new Array();
 choices[57][0] = "La Comisi&oacute;n Permanente.";
 choices[57][1] = "El Presidente.";
 choices[57][2] = "El Pleno.";
 choices[57][3] = "El Vicepresidente.";
 answers[57] = choices[57][3];
 units[57] = "1";
 comments[57] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[58]= new Array();
 choices[58][0] = "verbalmente";
 choices[58][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[58][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[58][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[59]= new Array();
 choices[59][0] = "personalidad jur&iacute;dica propia";
 choices[59][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[59][2] = "personalidad jur&iacute;dica plena";
 choices[59][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[60]= new Array();
 choices[60][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[60][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[60][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[60][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[60] = choices[60][3];
 units[60] = "22";
 comments[60] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[61]= "62)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[61]= new Array();
 choices[61][0] = "Peters";
 choices[61][1] = "Hollingsworth";
 choices[61][2] = "Manuel Castells";
 choices[61][3] = "Gaebler";
 answers[61] = choices[61][1];
 units[61] = "18, 20";
 comments[61] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[62]= new Array();
 choices[62][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[62][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[62][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[62][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[62] = choices[62][1];
 units[62] = "89";
 comments[62] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[63]= new Array();
 choices[63][0] = "SessionBean";
 choices[63][1] = "JavaBean";
 choices[63][2] = "MBeans";
 choices[63][3] = "MessageDrivenBean";
 answers[63] = choices[63][2];
 units[63] = "64";
 comments[63] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[64]= new Array();
 choices[64][0] = "Subsecretario";
 choices[64][1] = "Subdirector general";
 choices[64][2] = "Secretario de Estado";
 choices[64][3] = "ninguna es correcta";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[65]= new Array();
 choices[65][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[65][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[65][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[65][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[65] = choices[65][0];
 units[65] = "77";
 comments[65] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[66]= new Array();
 choices[66][0] = "Lean startup";
 choices[66][1] = "Business Model Canvas";
 choices[66][2] = "Dynamic system Development method";
 choices[66][3] = "Lean software development";
 answers[66] = choices[66][2];
 units[66] = "34";
 comments[66] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[67]= "68)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[67]= new Array();
 choices[67][0] = "B&aacute;sico";
 choices[67][1] = "Medio";
 choices[67][2] = "Alto";
 choices[67][3] = "A los niveles medio y alto";
 answers[67] = choices[67][2];
 units[67] = "35";
 comments[67] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[68]= "69)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[68][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[68][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[68][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[68] = choices[68][2];
 units[68] = "22";
 comments[68] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Universidades p&uacute;blicas:";
 choices[69]= new Array();
 choices[69][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[69][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[69][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[69][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[69] = choices[69][1];
 units[69] = "7";
 comments[69] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[70]= "71)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[70]= new Array();
 choices[70][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[70][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[70][2] = "a y b son correctas";
 choices[70][3] = "a y b son incorrectas";
 answers[70] = choices[70][0];
 units[70] = "7";
 comments[70] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[71]= "72)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[71]= new Array();
 choices[71][0] = "De las disposiciones favorables.";
 choices[71][1] = "De las disposiciones sancionadoras no favorables.";
 choices[71][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[71][3] = "Las respuestas b) y c) son correctas.";
 answers[71] = choices[71][3];
 units[71] = "1";
 comments[71] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[72]= "73)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[72]= new Array();
 choices[72][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[72][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[72][2] = "a y b son correctas";
 choices[72][3] = "a y b son incorrectas";
 answers[72] = choices[72][2];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[73]= new Array();
 choices[73][0] = "10 d&iacute;as.";
 choices[73][1] = "15 d&iacute;as.";
 choices[73][2] = "1 mes.";
 choices[73][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[73] = choices[73][0];
 units[73] = "7";
 comments[73] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[74]= new Array();
 choices[74][0] = "A la CETIC";
 choices[74][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[74][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[74][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[74] = choices[74][3];
 units[74] = "19";
 comments[74] = "Id Pregunta: 580. Estrategia TIC";


