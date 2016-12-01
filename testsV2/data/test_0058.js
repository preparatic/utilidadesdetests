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

//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[0]= "1)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[0]= new Array();
 choices[0][0] = "180 art&iacute;culos.";
 choices[0][1] = "182 art&iacute;culos.";
 choices[0][2] = "185 art&iacute;culos.";
 choices[0][3] = "190 art&iacute;culos.";
 answers[0] = choices[0][1];
 units[0] = "10";
 comments[0] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";
 preguntaids[0] = 485


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[1]= "2)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[1]= new Array();
 choices[1][0] = "El Jefe del Estado.";
 choices[1][1] = "El Tribunal Constitucional.";
 choices[1][2] = "El Congreso de los Diputados.";
 choices[1][3] = "Las Cortes Generales.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[1] = 235


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[2]= "3)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[2]= new Array();
 choices[2][0] = "El 23 de julio de 1952.";
 choices[2][1] = "El 18 de abril de 1951.";
 choices[2][2] = "El 16 de abril de 1948.";
 choices[2][3] = "d)Ninguna de las respuestas son correctas.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[2] = 349


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[3]= "4)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[3]= new Array();
 choices[3][0] = "Programaci&oacute;n estructurada.";
 choices[3][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[3][2] = "Programaci&oacute;n extrema.";
 choices[3][3] = "Programaci&oacute;n Espuria.";
 answers[3] = choices[3][2];
 units[3] = "92";
 comments[3] = "Id Pregunta: 697. INTEGRACION CONTINUA";
 preguntaids[3] = 697


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[4]= "5)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[4]= new Array();
 choices[4][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[4][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[4][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[4][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[4] = 775


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[5]= "6)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[5]= new Array();
 choices[5][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[5][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[5][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[5][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[5] = choices[5][2];
 units[5] = "26";
 comments[5] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[5] = 99


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[6]= "7)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[6]= new Array();
 choices[6][0] = "Cuatro millones de euros.";
 choices[6][1] = "Seis millones de euros.";
 choices[6][2] = "Siete millones de euros.";
 choices[6][3] = "Cinco millones de euros.";
 answers[6] = choices[6][1];
 units[6] = "10";
 comments[6] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";
 preguntaids[6] = 483


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[7]= new Array();
 choices[7][0] = "Crecimiento sostenible";
 choices[7][1] = "Crecimiento inteligente";
 choices[7][2] = "Crecimiento digital";
 choices[7][3] = "Crecimiento integrador";
 answers[7] = choices[7][2];
 units[7] = "19";
 comments[7] = "Id Pregunta: 759. Europa 2020";
 preguntaids[7] = 759


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[8]= "9)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[8]= new Array();
 choices[8][0] = "Al Presidente del Gobierno.";
 choices[8][1] = "A las Cortes Generales";
 choices[8][2] = "A los electores.";
 choices[8][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 196. CONSTITUCION1978";
 preguntaids[8] = 196


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[9]= new Array();
 choices[9][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[9][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[9][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[9][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[9] = 824


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[10]= "11)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[10]= new Array();
 choices[10][0] = "Un d&iacute;a";
 choices[10][1] = "Dos d&iacute;as";
 choices[10][2] = "Tres d&iacute;as";
 choices[10][3] = "Cuatro d&iacute;as";
 answers[10] = choices[10][3];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[10] = 831


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[11]= new Array();
 choices[11][0] = "Orientaci&oacute;n a objetos";
 choices[11][1] = "MapReduce";
 choices[11][2] = "Pipeline filtering";
 choices[11][3] = "Programaci&oacute;n funcional";
 answers[11] = choices[11][1];
 units[11] = "73";
 comments[11] = "Id Pregunta: 661. ";
 preguntaids[11] = 661


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[12]= "13)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[12]= new Array();
 choices[12][0] = "Entradas (entities).";
 choices[12][1] = "Atributos (attribs).";
 choices[12][2] = "M&oacute;dulos (modules).";
 choices[12][3] = "Objetos (objects).";
 answers[12] = choices[12][0];
 units[12] = "74";
 comments[12] = "Id Pregunta: 624. Junta de Extremadura A1 2015";
 preguntaids[12] = 624


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[13]= "14)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[13]= new Array();
 choices[13][0] = "la capital del pa&iacute;s";
 choices[13][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[13][2] = "cada una de las provincias";
 choices[13][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[13] = 812


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[14]= "15)  El Presupuesto por programas sirve para saber...";
 choices[14]= new Array();
 choices[14][0] = "En qu&eacute; nos gastamos el dinero";
 choices[14][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[14][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[14][3] = "Qui&eacute;n se gasta el dinero";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";
 preguntaids[14] = 456


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[15]= new Array();
 choices[15][0] = "Las Cortes Generales.";
 choices[15][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[15][2] = "El Gobierno.";
 choices[15][3] = "El Congreso de los Diputados.";
 answers[15] = choices[15][0];
 units[15] = "10";
 comments[15] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[15] = 489


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[16]= new Array();
 choices[16][0] = "10 d&iacute;as.";
 choices[16][1] = "15 d&iacute;as.";
 choices[16][2] = "1 mes.";
 choices[16][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[16] = choices[16][0];
 units[16] = "7";
 comments[16] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[16] = 668


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[17]= "18)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[17]= new Array();
 choices[17][0] = "l Consejo General del Poder Judicial";
 choices[17][1] = "El pleno de Tribunal Constitucional";
 choices[17][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[17][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[17] = choices[17][3];
 units[17] = "1";
 comments[17] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[17] = 181


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[18]= new Array();
 choices[18][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[18][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[18][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][1];
 units[18] = "34, 84";
 comments[18] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[18] = 723


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[19]= "20)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[19]= new Array();
 choices[19][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[19][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[19][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[19][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[19] = 786


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[20]= "21)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[20]= new Array();
 choices[20][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[20][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[20][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[20][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 187. CONSTITUCION1978";
 preguntaids[20] = 187


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[21]= new Array();
 choices[21][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[21][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[21][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[21][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 539. LEY 39/2015";
 preguntaids[21] = 539


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[22]= "23)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[22]= new Array();
 choices[22][0] = "ISO/IEC 25000";
 choices[22][1] = "ISO/IEC 27000";
 choices[22][2] = "ISO 9000";
 choices[22][3] = "ISO 9001";
 answers[22] = choices[22][0];
 units[22] = "93";
 comments[22] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[22] = 52


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[23]= "24)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[23]= new Array();
 choices[23][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[23][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[23][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[23][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[23] = choices[23][3];
 units[23] = "47";
 comments[23] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[23] = 677


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[24]= "25)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[24]= new Array();
 choices[24][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[24][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[24][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[24][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[24] = 184


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[25]= new Array();
 choices[25][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[25][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[25][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[25][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[25] = choices[25][0];
 units[25] = "46";
 comments[25] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[25] = 629


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[26]= new Array();
 choices[26][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[26][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[26][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[26][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[26] = choices[26][1];
 units[26] = "89";
 comments[26] = "Id Pregunta: 621. Junta de Extremadura A1 2015";
 preguntaids[26] = 621


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[27]= new Array();
 choices[27][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[27][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[27][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[27][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[27] = choices[27][1];
 units[27] = "76";
 comments[27] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[27] = 46


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[28]= new Array();
 choices[28][0] = "Principio de solo una vez";
 choices[28][1] = "Apertura y transparencia";
 choices[28][2] = "Confianza y seguridad";
 choices[28][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[28] = choices[28][3];
 units[28] = "19";
 comments[28] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[28] = 161


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[29]= "30)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[29]= new Array();
 choices[29][0] = "Un plan de igualdad.";
 choices[29][1] = "Un informe de impacto de g&eacute;nero.";
 choices[29][2] = "Un programa de igualdad.";
 choices[29][3] = "Todas son correctas.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[29] = 426


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[30]= "31)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[30]= new Array();
 choices[30][0] = "los Subsecretarios y Secretarios generales";
 choices[30][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[30][2] = "los Secretarios de Estado";
 choices[30][3] = "los Subdirectores generales";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[30] = 789


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[31]= "32)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[31]= new Array();
 choices[31][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[31][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[31][2] = "Ambas son correctas.";
 choices[31][3] = "Ambas son incorrectas.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";
 preguntaids[31] = 429


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[32]= "33)  El Parlamento Europeo celebrar&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[32][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[32][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[32][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[32] = 290


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[33]= new Array();
 choices[33][0] = "Al Consejo Europeo.";
 choices[33][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[33][2] = "A la Comisi&oacute;n Europea.";
 choices[33][3] = "Al Parlamento Europeo.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[33] = 320


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[34]= "35)  En qu&eacute; consiste el principio BASE:";
 choices[34]= new Array();
 choices[34][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[34][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[34][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[34][3] = "Todas las anteriores son falsas";
 answers[34] = choices[34][3];
 units[34] = "73";
 comments[34] = "Id Pregunta: 103. ";
 preguntaids[34] = 103


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[35]= "36)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[35]= new Array();
 choices[35][0] = "A la persona demandante.";
 choices[35][1] = "A la persona demandada.";
 choices[35][2] = "Al &oacute;rgano judicial.";
 choices[35][3] = "Al &oacute;rgano administrativo.";
 answers[35] = choices[35][1];
 units[35] = "14";
 comments[35] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[35] = 400


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
 preguntaids[36] = 106


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[37]= new Array();
 choices[37][0] = "Lean startup";
 choices[37][1] = "Business Model Canvas";
 choices[37][2] = "Dynamic system Development method";
 choices[37][3] = "Lean software development";
 answers[37] = choices[37][2];
 units[37] = "34";
 comments[37] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[37] = 722


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[38]= "39)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[38]= new Array();
 choices[38][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[38][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[38][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[38][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[38] = choices[38][2];
 units[38] = "26";
 comments[38] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[38] = 1


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[39]= new Array();
 choices[39][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[39][1] = "La Direcci&oacute;n de la Competencia.";
 choices[39][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[39][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[39] = choices[39][0];
 units[39] = "121";
 comments[39] = "Id Pregunta: 628. Junta de Extremadura A1 2015";
 preguntaids[39] = 628


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[40]= new Array();
 choices[40][0] = "La CETIC";
 choices[40][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[40][2] = "La DTIC";
 choices[40][3] = "Ninguno de los anteriores";
 answers[40] = choices[40][1];
 units[40] = "19";
 comments[40] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[40] = 587


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[41]= new Array();
 choices[41][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[41][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[41][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[41][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[41] = choices[41][1];
 units[41] = "22";
 comments[41] = "Id Pregunta: 122. ";
 preguntaids[41] = 122


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[42]= "43)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Incremental, diferencial, completa";
 choices[42][1] = "Completa, incremental, diferencial";
 choices[42][2] = "Completa, diferencial, incremental";
 choices[42][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[42] = choices[42][0];
 units[42] = "53";
 comments[42] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";
 preguntaids[42] = 66


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[43]= new Array();
 choices[43][0] = "DoS";
 choices[43][1] = "Phishing";
 choices[43][2] = "Sniffing";
 choices[43][3] = "Spoofing";
 answers[43] = choices[43][3];
 units[43] = "119";
 comments[43] = "Id Pregunta: 54. AGE A1 2015";
 preguntaids[43] = 54


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[44]= "45)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[44]= new Array();
 choices[44][0] = "61";
 choices[44][1] = "53";
 choices[44][2] = "65";
 choices[44][3] = "67";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[44] = 248


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[45]= "46)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[45]= new Array();
 choices[45][0] = "El Presidente del Congreso de los Diputados.";
 choices[45][1] = "El Presidente del Gobierno.";
 choices[45][2] = "El Rey.";
 choices[45][3] = "El Consejo de Ministros.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[45] = 231


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[46]= "47)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[46]= new Array();
 choices[46][0] = "El derecho a la propiedad privada.";
 choices[46][1] = "El derecho de asociaci&oacute;n.";
 choices[46][2] = "El derecho de fundaci&oacute;n.";
 choices[46][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[46] = choices[46][1];
 units[46] = "1";
 comments[46] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[46] = 174


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[47]= "48)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[47]= new Array();
 choices[47][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[47][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[47][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[47][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[47] = choices[47][1];
 units[47] = "7";
 comments[47] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[47] = 541


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[48]= "49)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[48]= new Array();
 choices[48][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[48][1] = "Personas con nacionalidad europea.";
 choices[48][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[48][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 376. UNION EUROPEA";
 preguntaids[48] = 376


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[49]= "50)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[49]= new Array();
 choices[49][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[49][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[49][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[49][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[49] = choices[49][1];
 units[49] = "14";
 comments[49] = "Id Pregunta: 678. Dependencia";
 preguntaids[49] = 678


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[50]= "51)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[50]= new Array();
 choices[50][0] = "Municipios, provincias y CCAA.";
 choices[50][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[50][2] = "En CCAA, 50 provincias y municipios.";
 choices[50][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[50] = choices[50][2];
 units[50] = "1";
 comments[50] = "Id Pregunta: 258. CONSTITUCION1978";
 preguntaids[50] = 258


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta falsa";
 choices[51]= new Array();
 choices[51][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[51][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[51][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[51][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[51] = choices[51][3];
 units[51] = "22";
 comments[51] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[51] = 276


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[52]= new Array();
 choices[52][0] = "Crecimiento inteligente.";
 choices[52][1] = "Crecimiento inclusivo.";
 choices[52][2] = "Crecimiento sostenible.";
 choices[52][3] = "Crecimiento integrador.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 283. UNION EUROPEA";
 preguntaids[52] = 283


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[53]= new Array();
 choices[53][0] = "Anualmente";
 choices[53][1] = "Bienalmente";
 choices[53][2] = "Cada cuatro a&ntilde;os";
 choices[53][3] = "No se define ninguna periodicidad";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";
 preguntaids[53] = 594


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[54]= new Array();
 choices[54][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[54][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[54][2] = "Iniciativa europea de libre flujo de datos.";
 choices[54][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 286. UNION EUROPEA";
 preguntaids[54] = 286


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[55]= new Array();
 choices[55][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[55][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[55][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[55][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[55] = choices[55][0];
 units[55] = "26";
 comments[55] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[55] = 0


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[56]= "57)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[56]= new Array();
 choices[56][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[56][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[56][2] = "el Subdirector General que el Delegado designe";
 choices[56][3] = "el Secretario de Estado";
 answers[56] = choices[56][0];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[56] = 822


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[57]= new Array();
 choices[57][0] = "Por Real Decreto.";
 choices[57][1] = "Por Orden del Ministerio del Interior.";
 choices[57][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[57][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[57] = choices[57][2];
 units[57] = "1";
 comments[57] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[57] = 230


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[58]= "59)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[58]= new Array();
 choices[58][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[58][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[58][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[58][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[58] = choices[58][3];
 units[58] = "7";
 comments[58] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[58] = 526


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[59]= new Array();
 choices[59][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[59][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[59][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[59][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[59] = choices[59][3];
 units[59] = "44";
 comments[59] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[59] = 17


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[60]= "61)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[60]= new Array();
 choices[60][0] = "Al Gobierno.";
 choices[60][1] = "A las Cortes Generales.";
 choices[60][2] = "Al Poder Judicial.";
 choices[60][3] = "Al Congreso de los Diputados.";
 answers[60] = choices[60][0];
 units[60] = "1";
 comments[60] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[60] = 195


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[61]= "62)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[61]= new Array();
 choices[61][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[61][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[61][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[61][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[61] = choices[61][1];
 units[61] = "125";
 comments[61] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[61] = 863


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[62]= "63)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[62]= new Array();
 choices[62][0] = "X.";
 choices[62][1] = "XIX.";
 choices[62][2] = "XV.";
 choices[62][3] = "XIII.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[62] = 327


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[63]= "64)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[63]= new Array();
 choices[63][0] = "Estrasburgo.";
 choices[63][1] = "Bruselas.";
 choices[63][2] = "Luxemburgo.";
 choices[63][3] = "Holanda.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[63] = 293


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[64]= new Array();
 choices[64][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[64][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[64][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[64][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[64] = 589


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[65]= new Array();
 choices[65][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[65][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[65][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[65][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[65] = choices[65][3];
 units[65] = "10";
 comments[65] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[65] = 507


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[66]= new Array();
 choices[66][0] = "Un representante de la Administraci&oacute;n local.";
 choices[66][1] = "Un representante del Tribunal de Cuentas.";
 choices[66][2] = "Un representante del Defensor del Pueblo.";
 choices[66][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[66] = choices[66][0];
 units[66] = "22";
 comments[66] = "Id Pregunta: 123. ";
 preguntaids[66] = 123


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[67]= "68)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Discriminaci&oacute;n indirecta.";
 choices[67][1] = "Discriminaci&oacute;n directa.";
 choices[67][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[67][3] = "Discriminaci&oacute;n abusiva.";
 answers[67] = choices[67][0];
 units[67] = "14";
 comments[67] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";
 preguntaids[67] = 394


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[68]= "69)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[68]= new Array();
 choices[68][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[68][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[68][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[68][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[68] = choices[68][1];
 units[68] = "14";
 comments[68] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[68] = 412


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[69]= "70)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[69]= new Array();
 choices[69][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[69][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[69][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[69][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[69] = choices[69][1];
 units[69] = "63";
 comments[69] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[69] = 613


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[70]= new Array();
 choices[70][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[70][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[70][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[70] = 588


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[71]= "72)  La recusaci&oacute;n pueden promoverla...";
 choices[71]= new Array();
 choices[71][0] = "Cualquier &oacute;rgano";
 choices[71][1] = "El interesado";
 choices[71][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[71][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[71] = 828


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[72]= new Array();
 choices[72][0] = "El 1 de junio de 1999.";
 choices[72][1] = "El 1 de mayo de 1999.";
 choices[72][2] = "El 1 de abril de 1999.";
 choices[72][3] = "El 1 de marzo de 1999.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 364. UNION EUROPEA";
 preguntaids[72] = 364


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[73]= "74)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[73]= new Array();
 choices[73][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[73][1] = "el Consejo de Estado";
 choices[73][2] = "el Congreso";
 choices[73][3] = "las Cortes Generales";
 answers[73] = choices[73][0];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[73] = 785


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[74]= "75)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[74]= new Array();
 choices[74][0] = "Sello electr&oacute;nico";
 choices[74][1] = "Sede electr&oacute;nica";
 choices[74][2] = "Servidor seguro (SSL/TLS)";
 choices[74][3] = "Empleado p&uacute;blico";
 answers[74] = choices[74][2];
 units[74] = "7";
 comments[74] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[74] = 26


