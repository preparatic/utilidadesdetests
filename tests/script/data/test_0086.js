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

//  Id pregunta: 10348 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[0]= new Array();
 choices[0][0] = "El 1 de noviembre de 1994.";
 choices[0][1] = "El 1 de noviembre de 1992.";
 choices[0][2] = "El 1 de noviembre de 1995.";
 choices[0][3] = "El 1 de noviembre de 1993.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10348. UNION EUROPEA";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  En el sistema operativo Unix/Linux, el comando id:";
 choices[1]= new Array();
 choices[1][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[1][1] = "El comando id no existe.";
 choices[1][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[1][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[1] = choices[1][0];
 units[1] = "57";
 comments[1] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[2]= new Array();
 choices[2][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[2][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[2][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[2][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[2] = choices[2][2];
 units[2] = "53";
 comments[2] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10642 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[3]= new Array();
 choices[3][0] = "Dise&ntilde;o del servicio.";
 choices[3][1] = "Transici&oacute;n del servicio.";
 choices[3][2] = "Estrategia del servicio.";
 choices[3][3] = "Operaci&oacute;n del servicio.";
 answers[3] = choices[3][2];
 units[3] = "101";
 comments[3] = "Id Pregunta: 10642. Junta de Extremadura A1 2015";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[4]= new Array();
 choices[4][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[4][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[4][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[4][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 10236. CONSTITUCION1978";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[5]= new Array();
 choices[5][0] = "Las respuestas a) y b) son correctas.";
 choices[5][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[5][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[5][3] = "Las respuestas a) y b) no son correctas.";
 answers[5] = choices[5][0];
 units[5] = "10";
 comments[5] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10505 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[6]= new Array();
 choices[6][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[6][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[6][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[6][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 10505. PRESUPUESTOS GENERALES";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[7]= new Array();
 choices[7][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[7][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[7][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[7][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[8]= new Array();
 choices[8][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[8][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[8][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[8][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[9]= new Array();
 choices[9][0] = "El derecho a la propiedad privada.";
 choices[9][1] = "El derecho de asociaci&oacute;n.";
 choices[9][2] = "El derecho de fundaci&oacute;n.";
 choices[9][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10174. CONSTITUCION1978";


//  Id pregunta: 10334 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[10]= new Array();
 choices[10][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[10][1] = "Ninguna de las respuestas es correcta.";
 choices[10][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[10][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[10] = choices[10][0];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[11]= new Array();
 choices[11][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[11][1] = "La CETIC";
 choices[11][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[11][3] = "El MHFP";
 answers[11] = choices[11][0];
 units[11] = "19";
 comments[11] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[12]= new Array();
 choices[12][0] = "Fue elaborada y aprobada por la CETIC";
 choices[12][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[12][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[12][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[13]= new Array();
 choices[13][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[13][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[13][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[13][3] = "Todas las respuestas son correctas.";
 answers[13] = choices[13][3];
 units[13] = "50";
 comments[13] = "Id Pregunta: 10620. Junta de Extremadura A1 2015";


//  Id pregunta: 10660 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[14]= new Array();
 choices[14][0] = "Avro";
 choices[14][1] = "Sqoop";
 choices[14][2] = "UIMA";
 choices[14][3] = "Jaql";
 answers[14] = choices[14][1];
 units[14] = "73";
 comments[14] = "Id Pregunta: 10660. ";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[15]= new Array();
 choices[15][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[15][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[15][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[15][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[15] = choices[15][1];
 units[15] = "56";
 comments[15] = "Id Pregunta: 10608. Junta de Extremadura A1 2015";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Principio de transparencia.";
 choices[16][1] = "Principio de cooperaci&oacute;n.";
 choices[16][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[16][3] = "Principio de lealtad institucional.";
 answers[16] = choices[16][1];
 units[16] = "10";
 comments[16] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[17]= new Array();
 choices[17][0] = "Dos Cap&iacute;tulos.";
 choices[17][1] = "Tres Cap&iacute;tulos.";
 choices[17][2] = "Un Cap&iacute;tulo.";
 choices[17][3] = "Cuatro Cap&iacute;tulos.";
 answers[17] = choices[17][1];
 units[17] = "1";
 comments[17] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10383 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[18]= new Array();
 choices[18][0] = "El Consejo Nacional de la Mujer";
 choices[18][1] = "El Consejo de la Mujer";
 choices[18][2] = "El Instituto de la Mujer";
 choices[18][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[18] = choices[18][3];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10636 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[19]= new Array();
 choices[19][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[19][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[19][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[19][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "57";
 comments[19] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[20][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[20][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[20][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[20] = choices[20][1];
 units[20] = "7";
 comments[20] = "Id Pregunta: 10156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 10092 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[21]= new Array();
 choices[21][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[21][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[21][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[21][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[21] = choices[21][0];
 units[21] = "48";
 comments[21] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "Diagrama de clases";
 choices[22][1] = "Diagrama de componentes";
 choices[22][2] = "Diagrama de estructura";
 choices[22][3] = "Diagrama de paquetes";
 answers[22] = choices[22][0];
 units[22] = "91";
 comments[22] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[23]= new Array();
 choices[23][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[23][1] = "Las CMADs";
 choices[23][2] = "Ambas son correctas.";
 choices[23][3] = "Ninguna es correcta";
 answers[23] = choices[23][2];
 units[23] = "19";
 comments[23] = "Id Pregunta: 10596. Estrategia TIC";


//  Id pregunta: 10540 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[24]= new Array();
 choices[24][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[24][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[24][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 10540. LEY 39/2015";


//  Id pregunta: 10086 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[25]= new Array();
 choices[25][0] = "Un a&ntilde;o prorrogable";
 choices[25][1] = "Dos a&ntilde;os no prorrogables";
 choices[25][2] = "Un a&ntilde;o no prorrogable";
 choices[25][3] = "Dos a&ntilde;os prorrogables";
 answers[25] = choices[25][2];
 units[25] = "37";
 comments[25] = "Id Pregunta: 10086. AGE A1 2015";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[26]= new Array();
 choices[26][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[26][1] = "La delimitaci&oacute;n de su territorio.";
 choices[26][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[26][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10228. CONSTITUCION1978";


//  Id pregunta: 10463 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[27]= new Array();
 choices[27][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[27][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[27][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[27][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[27] = choices[27][3];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10463. PRESUPUESTOS GENERALES";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[28]= new Array();
 choices[28][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[28][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[28][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[28][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[28] = choices[28][3];
 units[28] = "78";
 comments[28] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[29]= new Array();
 choices[29][0] = "El aumento de la esperanza de vida.";
 choices[29][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[29][2] = "La reducci&oacute;n del desempleo.";
 choices[29][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10182 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[30]= new Array();
 choices[30][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[30][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[30][2] = "El que hubieren designado las Cortes Generales.";
 choices[30][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[30] = choices[30][1];
 units[30] = "1";
 comments[30] = "Id Pregunta: 10182. CONSTITUCION1978";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[31][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[31][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[31][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[31] = choices[31][3];
 units[31] = "19";
 comments[31] = "Id Pregunta: 10016. AGE A1 2015";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; es MongoDB?";
 choices[32]= new Array();
 choices[32][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[32][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[32][2] = "Un sistema gestor de base de datos relacional.";
 choices[32][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[32] = choices[32][1];
 units[32] = "73";
 comments[32] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10486 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[33]= new Array();
 choices[33][0] = "La Ley General Tributaria.";
 choices[33][1] = "La Ley Presupuestaria.";
 choices[33][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[33][3] = "Ninguna de las respuestas es correcta.";
 answers[33] = choices[33][0];
 units[33] = "10";
 comments[33] = "Id Pregunta: 10486. PRESUPUESTOS GENERALES";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[34]= new Array();
 choices[34][0] = "X.";
 choices[34][1] = "XIX.";
 choices[34][2] = "XV.";
 choices[34][3] = "XIII.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10327. UNION EUROPEA";


//  Id pregunta: 10380 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[35]= new Array();
 choices[35][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[35][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[35][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[35][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[35] = choices[35][3];
 units[35] = "14";
 comments[35] = "Id Pregunta: 10380. POLITICAS DE IGUALDAD";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[36]= new Array();
 choices[36][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[36][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[36][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[36][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10240. CONSTITUCION1978";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[37]= new Array();
 choices[37][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[37][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[37][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[37][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[38]= new Array();
 choices[38][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[38][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[38][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[38][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[38] = choices[38][0];
 units[38] = "26";
 comments[38] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10524 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[39]= new Array();
 choices[39][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[39][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[39][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[39][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[39] = choices[39][3];
 units[39] = "7";
 comments[39] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[40][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[40][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[40][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10079 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[41]= new Array();
 choices[41][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[41][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[41][2] = "Las Inspecciones Generales de los Servicios";
 choices[41][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[41] = choices[41][1];
 units[41] = "75";
 comments[41] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[42]= new Array();
 choices[42][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[42][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[42][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[42][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[42] = choices[42][2];
 units[42] = "7";
 comments[42] = "Id Pregunta: 10149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 10093 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Almacenamiento orientado a columnas";
 choices[43][1] = "Framework MapReduce";
 choices[43][2] = "OLTP";
 choices[43][3] = "Bases de datos clave-valor";
 answers[43] = choices[43][2];
 units[43] = "73";
 comments[43] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10208 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[44]= new Array();
 choices[44][0] = "El Rey.";
 choices[44][1] = "El Jefe del Estado.";
 choices[44][2] = "El Gobierno.";
 choices[44][3] = "El Presidente del Gobierno.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 10208. CONSTITUCION1978";


//  Id pregunta: 10489 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[45]= new Array();
 choices[45][0] = "Dos.";
 choices[45][1] = "Cuatro.";
 choices[45][2] = "Cinco.";
 choices[45][3] = "Tres.";
 answers[45] = choices[45][1];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[46]= new Array();
 choices[46][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[46][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[46][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[46][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[46] = choices[46][2];
 units[46] = "45";
 comments[46] = "Id Pregunta: 10599. Junta de Extremadura A1 2015";


//  Id pregunta: 10179 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[47]= new Array();
 choices[47][0] = "Una ley orginaria.";
 choices[47][1] = "Una ley org&aacute;nica.";
 choices[47][2] = "Una ley de bases.";
 choices[47][3] = "Una ley de transferencia.";
 answers[47] = choices[47][1];
 units[47] = "1";
 comments[47] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[48][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[48][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[48][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "43";
 comments[48] = "Id Pregunta: 10434. SERVICIOS COMUNES";


//  Id pregunta: 10549 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[49]= new Array();
 choices[49][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[49][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[49][2] = "El Presidente del Gobierno";
 choices[49][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[49] = choices[49][1];
 units[49] = "26";
 comments[49] = "Id Pregunta: 10549. Gobernanza TIC";


//  Id pregunta: 10388 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[50]= new Array();
 choices[50][0] = "Indirecta.";
 choices[50][1] = "Directa.";
 choices[50][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[50][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10388. POLITICAS DE IGUALDAD";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[51]= new Array();
 choices[51][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[51][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[51][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[51][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[51] = choices[51][1];
 units[51] = "43";
 comments[51] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[52]= new Array();
 choices[52][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[52][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[52][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[52][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[52] = choices[52][2];
 units[52] = "71";
 comments[52] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10263 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[53]= new Array();
 choices[53][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[53][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[53][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[53][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10263. CONSTITUCION1978";


//  Id pregunta: 10567 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[54]= new Array();
 choices[54][0] = "Primario, que incluye la agricultura y la pesca";
 choices[54][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[54][2] = "Minero, junto con las exportaciones de comercio";
 choices[54][3] = "Servicios";
 answers[54] = choices[54][3];
 units[54] = "12";
 comments[54] = "Id Pregunta: 10567. Modelo econ&oacute;mico";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[55]= new Array();
 choices[55][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[55][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[55][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[55][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[55] = choices[55][3];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10406 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[56]= new Array();
 choices[56][0] = "Art&iacute;culo 9.1 CE.";
 choices[56][1] = "Art&iacute;culo 53 CE.";
 choices[56][2] = "Art&iacute;culo 14 CE.";
 choices[56][3] = "Art&iacute;culo 16 CE.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10527 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[57]= new Array();
 choices[57][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[57][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[57][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[57][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[58]= new Array();
 choices[58][0] = "20 parlamentarios.";
 choices[58][1] = "29 parlamentarios.";
 choices[58][2] = "18 parlamentarios.";
 choices[58][3] = "23 parlamentarios.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10366. UNION EUROPEA";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[59]= new Array();
 choices[59][0] = "formular solicitudes";
 choices[59][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[59][2] = "presentar declaraciones responsables o comunicaciones";
 choices[59][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[60]= new Array();
 choices[60][0] = "El Presidente del Congreso de los Diputados.";
 choices[60][1] = "El Presidente del Gobierno.";
 choices[60][2] = "El Rey.";
 choices[60][3] = "El Consejo de Ministros.";
 answers[60] = choices[60][0];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[61]= new Array();
 choices[61][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[61][1] = "Todas las respuestas son correctas.";
 choices[61][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[61][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[61] = choices[61][1];
 units[61] = "10";
 comments[61] = "Id Pregunta: 10474. PRESUPUESTOS GENERALES";


//  Id pregunta: 10533 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[62]= new Array();
 choices[62][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[62][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[62][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[62][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[62] = choices[62][1];
 units[62] = "7";
 comments[62] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10365 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[63]= new Array();
 choices[63][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[63][1] = "Unanimidad.";
 choices[63][2] = "Mayor&iacute;a cualificada.";
 choices[63][3] = "Mayor&iacute;a simple.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10365. UNION EUROPEA";


//  Id pregunta: 10509 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[64]= new Array();
 choices[64][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[64][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[64][2] = "Absoluta frente a cualquier otro gasto.";
 choices[64][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10509. PRESUPUESTOS GENERALES";


//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[65]= new Array();
 choices[65][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[65][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[65][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[65][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[65] = choices[65][2];
 units[65] = "22";
 comments[65] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[66]= new Array();
 choices[66][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[66][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[66][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[66][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[66] = choices[66][1];
 units[66] = "7";
 comments[66] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10166 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[67]= new Array();
 choices[67][0] = "Interoperabilidad";
 choices[67][1] = "Integridad";
 choices[67][2] = "Capital humano";
 choices[67][3] = "Trazabilidad";
 answers[67] = choices[67][2];
 units[67] = "19";
 comments[67] = "Id Pregunta: 10166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[68]= new Array();
 choices[68][0] = "Interchange of Data between Administrations (IDA)";
 choices[68][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[68][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[68][3] = "Interoperability Electronic European Solution (IEES)";
 answers[68] = choices[68][1];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10017 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[69]= new Array();
 choices[69][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[69][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[69][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[69][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[69] = choices[69][3];
 units[69] = "44";
 comments[69] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[70]= new Array();
 choices[70][0] = "El BCE";
 choices[70][1] = "El Parlamento";
 choices[70][2] = "El Consejo";
 choices[70][3] = "La Comisi&oacute;n";
 answers[70] = choices[70][3];
 units[70] = "17";
 comments[70] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10535 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[71]= new Array();
 choices[71][0] = "la Administraci&oacute;n General del Estado";
 choices[71][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[71][2] = "las Entidades Locales";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 10535. LEY 39/2015";


//  Id pregunta: 10639 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[72]= new Array();
 choices[72][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[72][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[72][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[72][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[72] = choices[72][2];
 units[72] = "57";
 comments[72] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[73]= new Array();
 choices[73][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[73][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[73][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[73][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[74]= new Array();
 choices[74][0] = "Las respuestas a) y b) son correctas.";
 choices[74][1] = "Las respuestas a) y b) no son correctas.";
 choices[74][2] = "Contenido coherente con los planes sectoriales.";
 choices[74][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[74] = choices[74][0];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10386 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[75]= new Array();
 choices[75][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[75][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[75][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[75][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[75] = choices[75][0];
 units[75] = "14";
 comments[75] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


//  Id pregunta: 10186 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[76]= new Array();
 choices[76][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[76][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[76][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[76][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[76] = choices[76][2];
 units[76] = "1";
 comments[76] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10488 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[77]= new Array();
 choices[77][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[77][1] = "El Gobierno.";
 choices[77][2] = "El Presidente del Gobierno.";
 choices[77][3] = "El Consejo de Ministros.";
 answers[77] = choices[77][1];
 units[77] = "10";
 comments[77] = "Id Pregunta: 10488. PRESUPUESTOS GENERALES";


//  Id pregunta: 10625 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[78]= new Array();
 choices[78][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[78][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[78][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[78][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[78] = choices[78][2];
 units[78] = "89";
 comments[78] = "Id Pregunta: 10625. Junta de Extremadura A1 2015";


//  Id pregunta: 10066 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[79]= new Array();
 choices[79][0] = "Incremental, diferencial, completa";
 choices[79][1] = "Completa, incremental, diferencial";
 choices[79][2] = "Completa, diferencial, incremental";
 choices[79][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[79] = choices[79][0];
 units[79] = "53";
 comments[79] = "Id Pregunta: 10066. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[80]= new Array();
 choices[80][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[80][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[80][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[80][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[80] = choices[80][1];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  El plan nacional de ciudades inteligentes...";
 choices[81]= new Array();
 choices[81][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[81][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[81][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[81][3] = "No existe";
 answers[81] = choices[81][1];
 units[81] = "19";
 comments[81] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[82]= new Array();
 choices[82][0] = "Siempre en formato electr&oacute;nico.";
 choices[82][1] = "Siempre en formato papel.";
 choices[82][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[82][3] = "La ley no regula el formato del expediente.";
 answers[82] = choices[82][0];
 units[82] = "7";
 comments[82] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[83]= new Array();
 choices[83][0] = "Seguridad Social y AEAT";
 choices[83][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[83][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[83][3] = "Todos los anteriores";
 answers[83] = choices[83][3];
 units[83] = "19";
 comments[83] = "Id Pregunta: 10594. Estrategia TIC";


//  Id pregunta: 10058 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[84]= new Array();
 choices[84][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[84][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[84][2] = "Servicio de seguridad gestionada";
 choices[84][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[84] = choices[84][1];
 units[84] = "26";
 comments[84] = "Id Pregunta: 10058. AGE A1 2015";


//  Id pregunta: 10632 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[85]= new Array();
 choices[85][0] = "Monol&iacute;tico.";
 choices[85][1] = "Estratificado.";
 choices[85][2] = "Cliente/servidor.";
 choices[85][3] = "Orientado a objetos.";
 answers[85] = choices[85][3];
 units[85] = "56";
 comments[85] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10641 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[86]= new Array();
 choices[86][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[86][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[86][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[86][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[86] = choices[86][1];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[87]= new Array();
 choices[87][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[87][1] = "garantizar la conservaci&oacute;n del documento";
 choices[87][2] = "garantizar la autenticidad del documento";
 choices[87][3] = "garantizar la integridad del documento";
 answers[87] = choices[87][0];
 units[87] = "7";
 comments[87] = "Id Pregunta: 10152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[88]= new Array();
 choices[88][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[88][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[88][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[88][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[88] = choices[88][0];
 units[88] = "1";
 comments[88] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10325 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[89]= new Array();
 choices[89][0] = "Veinticinco.";
 choices[89][1] = "Veintiuno.";
 choices[89][2] = "Dieciocho.";
 choices[89][3] = "Diecinueve.";
 answers[89] = choices[89][0];
 units[89] = "5";
 comments[89] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10197 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[90]= new Array();
 choices[90][0] = "Establecer tributos.";
 choices[90][1] = "Desarrollar lo establecido en una Ley.";
 choices[90][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[90][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[90] = choices[90][0];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10197. CONSTITUCION1978";


//  Id pregunta: 10402 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[91]= new Array();
 choices[91][0] = "Parcial.";
 choices[91][1] = "Sectorial.";
 choices[91][2] = "Tranversal.";
 choices[91][3] = "Vertical.";
 answers[91] = choices[91][2];
 units[91] = "14";
 comments[91] = "Id Pregunta: 10402. POLITICAS DE IGUALDAD";


//  Id pregunta: 10473 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[92]= new Array();
 choices[92][0] = "Ley 50/1997, del Gobierno.";
 choices[92][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[92][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[92][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[92] = choices[92][1];
 units[92] = "10";
 comments[92] = "Id Pregunta: 10473. PRESUPUESTOS GENERALES";


//  Id pregunta: 10104 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Son bases de datos NoSQL:";
 choices[93]= new Array();
 choices[93][0] = "MongoDB y Maria DB";
 choices[93][1] = "HBase y Dynamo";
 choices[93][2] = "MariaDB, Cassandra y BigTable";
 choices[93][3] = "La A) y la C)";
 answers[93] = choices[93][1];
 units[93] = "73";
 comments[93] = "Id Pregunta: 10104. ";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[94]= new Array();
 choices[94][0] = "El Presidente del Senado";
 choices[94][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[94][2] = "El Presidente del Gobierno";
 choices[94][3] = "El Presidente de las Cortes Generales";
 answers[94] = choices[94][2];
 units[94] = "1";
 comments[94] = "Id Pregunta: 10265. CONSTITUCION1978";


//  Id pregunta: 10150 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[95]= new Array();
 choices[95][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[95][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[95][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[95][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[95] = choices[95][2];
 units[95] = "7";
 comments[95] = "Id Pregunta: 10150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[96]= new Array();
 choices[96][0] = "Por unanimidad.";
 choices[96][1] = "Por mayor&iacute;a cualificada.";
 choices[96][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[96][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[96] = choices[96][3];
 units[96] = "5";
 comments[96] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10403 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[97]= new Array();
 choices[97][0] = "Medidas de igualdad.";
 choices[97][1] = "Objetivos de igualdad.";
 choices[97][2] = "Ambas son correctas.";
 choices[97][3] = "A y B son incorrectas.";
 answers[97] = choices[97][2];
 units[97] = "14";
 comments[97] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10677 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[98]= new Array();
 choices[98][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[98][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[98][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[98][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[98] = choices[98][2];
 units[98] = "14";
 comments[98] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10144 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Sobre el recurso de reposici&oacute;n:";
 choices[99]= new Array();
 choices[99][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[99][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[99][2] = "Ha desaparecido en la Ley 39/2015";
 choices[99][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[99] = choices[99][0];
 units[99] = "8";
 comments[99] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


