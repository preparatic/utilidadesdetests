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

//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[0]= new Array();
 choices[0][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[0][1] = "Excesiva estabilidad de empleo";
 choices[0][2] = "An&eacute;mico crecimiento de la productividad";
 choices[0][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[0] = choices[0][1];
 units[0] = "12";
 comments[0] = "Id Pregunta: 563. Modelo econ&oacute;mico";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[1]= "2)  En qu&eacute; consiste el principio BASE:";
 choices[1]= new Array();
 choices[1][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[1][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[1][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[1][3] = "Todas las anteriores son falsas";
 answers[1] = choices[1][3];
 units[1] = "73";
 comments[1] = "Id Pregunta: 103. ";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[2]= "3)  El Colegio de Comisarios se re&uacute;ne:";
 choices[2]= new Array();
 choices[2][0] = "Una vez por semana.";
 choices[2][1] = "Una vez al mes.";
 choices[2][2] = "Dos veces en semana.";
 choices[2][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[3]= "4)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[3]= new Array();
 choices[3][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[3][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[3][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[3][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[3] = choices[3][1];
 units[3] = "7";
 comments[3] = "Id Pregunta: 662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[4][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[4][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[4][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[5]= "6)  JNDI se usa para el acceso a:";
 choices[5]= new Array();
 choices[5][0] = "Datos de ficheros";
 choices[5][1] = "Sistemas gestores de bases de datos";
 choices[5][2] = "Directorios de nombres";
 choices[5][3] = "Colas de mensajer&iacute;a";
 answers[5] = choices[5][2];
 units[5] = "64";
 comments[5] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[6]= "7)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[6]= new Array();
 choices[6][0] = "l Consejo General del Poder Judicial";
 choices[6][1] = "El pleno de Tribunal Constitucional";
 choices[6][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[6][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[7]= new Array();
 choices[7][0] = "IEEE 802.11p";
 choices[7][1] = "IEEE 802.11r";
 choices[7][2] = "IEEE 802.11v";
 choices[7][3] = "IEEE 802.11w";
 answers[7] = choices[7][1];
 units[7] = "112";
 comments[7] = "Id Pregunta: 572. Tema 112. TAI 2016.";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[8]= "9)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[8]= new Array();
 choices[8][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[8][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[8][2] = "Las Inspecciones Generales de los Servicios";
 choices[8][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[8] = choices[8][1];
 units[8] = "75";
 comments[8] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[9]= "10)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[9]= new Array();
 choices[9][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[9][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[9][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[9][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[9] = choices[9][1];
 units[9] = "14";
 comments[9] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[10]= new Array();
 choices[10][0] = "Consumidores";
 choices[10][1] = "PYMES y Start-ups";
 choices[10][2] = "La Industria";
 choices[10][3] = "Todos los anteriores";
 answers[10] = choices[10][3];
 units[10] = "17";
 comments[10] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[11]= "12)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[11]= new Array();
 choices[11][0] = "El Tratado de Maastrich.";
 choices[11][1] = "El Tratado de Amsterdam.";
 choices[11][2] = "El Tratado de Par&iacute;s.";
 choices[11][3] = "El Tratado de Roma.";
 answers[11] = choices[11][3];
 units[11] = "5";
 comments[11] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[12]= "13)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[12]= new Array();
 choices[12][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[12][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[12][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[12][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[13]= "14)  Respecto a las unidades administrativas:";
 choices[13]= new Array();
 choices[13][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[13][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[13][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[13][3] = "ninguna es correcta";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[14]= "15)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[14]= new Array();
 choices[14][0] = "En qu&eacute; nos gastamos el dinero";
 choices[14][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[14][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[14][3] = "Qui&eacute;n se gasta el dinero.";
 answers[14] = choices[14][0];
 units[14] = "10";
 comments[14] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[15]= "16)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[15]= new Array();
 choices[15][0] = "la poblaci&oacute;n del territorio";
 choices[15][1] = "el volumen de gesti&oacute;n";
 choices[15][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][3];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[16]= "17)  El recurso de alzada puede interponerse:";
 choices[16]= new Array();
 choices[16][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[16][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[16][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[16][3] = "Ante el Defensor del Pueblo";
 answers[16] = choices[16][1];
 units[16] = "8";
 comments[16] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[17]= new Array();
 choices[17][0] = "Ley 50/1997, del Gobierno.";
 choices[17][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[17][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[17][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[17] = choices[17][1];
 units[17] = "10";
 comments[17] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[18]= "19)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[18]= new Array();
 choices[18][0] = "La Ley General Tributaria.";
 choices[18][1] = "La Ley Presupuestaria.";
 choices[18][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[18][3] = "Ninguna de las respuestas es correcta.";
 answers[18] = choices[18][0];
 units[18] = "10";
 comments[18] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[19]= "20)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[19]= new Array();
 choices[19][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[19][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[19][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[19][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[19] = choices[19][2];
 units[19] = "7";
 comments[19] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[20]= "21)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[20][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[20][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[20][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[20] = choices[20][3];
 units[20] = "14";
 comments[20] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[21]= "22)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[21]= new Array();
 choices[21][0] = "Relaciones base y vistas.";
 choices[21][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[21][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[21][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[21] = choices[21][3];
 units[21] = "60";
 comments[21] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[22]= "23)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[22]= new Array();
 choices[22][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[22][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[22][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[22][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[23]= new Array();
 choices[23][0] = "absoluta de las Cortes Generales.";
 choices[23][1] = "absoluta del Congreso de los Diputados.";
 choices[23][2] = "simple de las Cortes Generales.";
 choices[23][3] = "simple del Congreso de los Diputados.";
 answers[23] = choices[23][3];
 units[23] = "1";
 comments[23] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[24]= "25)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[24]= new Array();
 choices[24][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[24][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[24][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[24][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[24] = choices[24][2];
 units[24] = "22";
 comments[24] = "Id Pregunta: 128. ";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[25]= "26)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[25]= new Array();
 choices[25][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[25][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[25][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[25][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[26]= new Array();
 choices[26][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[26][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[26][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[26][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[26] = choices[26][2];
 units[26] = "121";
 comments[26] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[27]= "28)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[27]= new Array();
 choices[27][0] = "Almacenamiento orientado a columnas";
 choices[27][1] = "Framework MapReduce";
 choices[27][2] = "OLTP";
 choices[27][3] = "Bases de datos clave-valor";
 answers[27] = choices[27][2];
 units[27] = "73";
 comments[27] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[28]= "29)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[28]= new Array();
 choices[28][0] = "Un plan de igualdad.";
 choices[28][1] = "Un informe de impacto de g&eacute;nero.";
 choices[28][2] = "Un programa de igualdad.";
 choices[28][3] = "Todas son correctas.";
 answers[28] = choices[28][1];
 units[28] = "14";
 comments[28] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[29]= new Array();
 choices[29][0] = "Anual.";
 choices[29][1] = "Semestral.";
 choices[29][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[29][3] = "Bienal.";
 answers[29] = choices[29][2];
 units[29] = "14";
 comments[29] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[30]= "31)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[30]= new Array();
 choices[30][0] = "A la persona demandante.";
 choices[30][1] = "A la persona demandada.";
 choices[30][2] = "Al &oacute;rgano judicial.";
 choices[30][3] = "Al &oacute;rgano administrativo.";
 answers[30] = choices[30][1];
 units[30] = "14";
 comments[30] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[31]= "32)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[31][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[31][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[31][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[31] = choices[31][1];
 units[31] = "63";
 comments[31] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[32]= "33)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[32][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[32][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[32][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[32] = choices[32][0];
 units[32] = "45";
 comments[32] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[33]= "34)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[33]= new Array();
 choices[33][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[33][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[33][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[33][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[34]= "35)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[34]= new Array();
 choices[34][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[34][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[34][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[34][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[34] = choices[34][3];
 units[34] = "5";
 comments[34] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[35]= new Array();
 choices[35][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[35][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[35][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[35][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[35] = choices[35][2];
 units[35] = "47";
 comments[35] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[36]= "37)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[36]= new Array();
 choices[36][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[36][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[36][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[36][3] = "Todas las respuestas son correctas.";
 answers[36] = choices[36][0];
 units[36] = "101";
 comments[36] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[37]= new Array();
 choices[37][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[37][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[37][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[37][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[37] = choices[37][1];
 units[37] = "18, 20";
 comments[37] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[38]= "39)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[38]= new Array();
 choices[38][0] = "Conformidad";
 choices[38][1] = "Responsabilidad";
 choices[38][2] = "Adquisici&oacute;n";
 choices[38][3] = "Desempe&ntilde;o";
 answers[38] = choices[38][0];
 units[38] = "26";
 comments[38] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[39]= "40)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[39]= new Array();
 choices[39][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[39][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[39][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[39][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[40]= "41)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[40]= new Array();
 choices[40][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[40][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[40][2] = "a y b son correctas";
 choices[40][3] = "a y b son incorrectas";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[41]= "42)  Big Data:";
 choices[41]= new Array();
 choices[41][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[41][1] = "No puede emplearse para tratar datos no estructurados";
 choices[41][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][3];
 units[41] = "73";
 comments[41] = "Id Pregunta: 109. ";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[42]= "43)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[42][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[42][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[42][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[42] = choices[42][0];
 units[42] = "19";
 comments[42] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[43]= "44)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[43]= new Array();
 choices[43][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[43][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[43][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[43][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[43] = choices[43][0];
 units[43] = "65";
 comments[43] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[44]= new Array();
 choices[44][0] = "un art&iacute;culo";
 choices[44][1] = "dos art&iacute;culos";
 choices[44][2] = "tres art&iacute;culos";
 choices[44][3] = "cuatro art&iacute;culos";
 answers[44] = choices[44][1];
 units[44] = "7";
 comments[44] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[45]= new Array();
 choices[45][0] = "Tiene car&aacute;cter facultativo.";
 choices[45][1] = "Tiene car&aacute;cter potestativo. ";
 choices[45][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[45][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[45] = choices[45][1];
 units[45] = "22";
 comments[45] = "Id Pregunta: 127. ";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[46]= new Array();
 choices[46][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[46][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[46][2] = "el Ministerio del Interior";
 choices[46][3] = "la Administraci&oacute;n General del Estado";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[47]= "48)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[47]= new Array();
 choices[47][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[47][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[47][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[47][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[47] = choices[47][1];
 units[47] = "19";
 comments[47] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[48]= "49)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[48]= new Array();
 choices[48][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[48][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[48][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[48][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[48] = choices[48][3];
 units[48] = "12";
 comments[48] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[49]= new Array();
 choices[49][0] = "Categor&iacute;a b&aacute;sica";
 choices[49][1] = "Categor&iacute;a media";
 choices[49][2] = "Categor&iacute;a alta";
 choices[49][3] = "Categor&iacute;a media y alta";
 answers[49] = choices[49][2];
 units[49] = "46";
 comments[49] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[50]= "51)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[50]= new Array();
 choices[50][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[50][1] = "1 de enero de 2015";
 choices[50][2] = "1 de enero de 2016";
 choices[50][3] = "1 de julio de 2016";
 answers[50] = choices[50][3];
 units[50] = "77";
 comments[50] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[51]= new Array();
 choices[51][0] = "Nueve.";
 choices[51][1] = "Diez.";
 choices[51][2] = "Siete.";
 choices[51][3] = "Ocho.";
 answers[51] = choices[51][3];
 units[51] = "5";
 comments[51] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[52]= "53)  El sector p&uacute;blico institucional se integra por:";
 choices[52]= new Array();
 choices[52][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[52][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[52][2] = "las Universidades p&uacute;blicas";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 754. Ley 40/2015";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[53]= "54)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[53]= new Array();
 choices[53][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[53][1] = "Static &amp; Active process for REsolution Bank.";
 choices[53][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[53][3] = "Super Active REsponse for Banks";
 answers[53] = choices[53][0];
 units[53] = "12";
 comments[53] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[54]= new Array();
 choices[54][0] = "Un representante de la Administraci&oacute;n local.";
 choices[54][1] = "Un representante del Tribunal de Cuentas.";
 choices[54][2] = "Un representante del Defensor del Pueblo.";
 choices[54][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[54] = choices[54][0];
 units[54] = "22";
 comments[54] = "Id Pregunta: 123. ";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[55]= "56)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[55][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[55][2] = "Ambas son correctas.";
 choices[55][3] = "La A y B son incorrectas.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[56]= new Array();
 choices[56][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[56][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[56][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[56][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[56] = choices[56][1];
 units[56] = "89";
 comments[56] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[57]= "58)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[57]= new Array();
 choices[57][0] = "61";
 choices[57][1] = "53";
 choices[57][2] = "65";
 choices[57][3] = "67";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[58]= "59)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[58]= new Array();
 choices[58][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[58][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[58][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[58][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[59]= new Array();
 choices[59][0] = "No, en ning&uacute;n caso.";
 choices[59][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[59][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[59][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[59] = choices[59][3];
 units[59] = "1";
 comments[59] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[60]= "61)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[60]= new Array();
 choices[60][0] = "Consejos y Servicios.";
 choices[60][1] = "Servicios permanentes y no permanentes.";
 choices[60][2] = "Direcciones Generales.";
 choices[60][3] = "Direcciones ministeriales.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[61]= "62)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[61]= new Array();
 choices[61][0] = "ISO/IEC 25000";
 choices[61][1] = "ISO/IEC 27000";
 choices[61][2] = "ISO 9000";
 choices[61][3] = "ISO 9001";
 answers[61] = choices[61][0];
 units[61] = "93";
 comments[61] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[62]= "63)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[62]= new Array();
 choices[62][0] = "los registros mercantiles";
 choices[62][1] = "los registros de la propiedad";
 choices[62][2] = "los protocolos notariales";
 choices[62][3] = "todas son correctas";
 answers[62] = choices[62][3];
 units[62] = "7";
 comments[62] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[63]= "64)  El cr&eacute;dito presupuestario es...";
 choices[63]= new Array();
 choices[63][0] = "El sujeto que realiza el gasto";
 choices[63][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[63][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[63][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[64]= new Array();
 choices[64][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[64][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[64][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[64][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 752. Ley 40/2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[65]= "66)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[65]= new Array();
 choices[65][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[65][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[65][2] = "A partir del 1 de enero de 2015";
 choices[65][3] = "A partir del 1 de julio de 2016";
 answers[65] = choices[65][1];
 units[65] = "77";
 comments[65] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[66]= "67)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[66]= new Array();
 choices[66][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[66][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[66][2] = "Ministerio de la Presidencia";
 choices[66][3] = "Ministerio de Fomento";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[67]= new Array();
 choices[67][0] = "23";
 choices[67][1] = "20";
 choices[67][2] = "14";
 choices[67][3] = "18";
 answers[67] = choices[67][1];
 units[67] = "5";
 comments[67] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[68]= "69)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[68]= new Array();
 choices[68][0] = "IANA";
 choices[68][1] = "ISOC";
 choices[68][2] = "IETF";
 choices[68][3] = "IAB";
 answers[68] = choices[68][0];
 units[68] = "103";
 comments[68] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[69]= "70)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[69]= new Array();
 choices[69][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[69][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[69][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[69][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[69] = choices[69][0];
 units[69] = "12";
 comments[69] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[70]= new Array();
 choices[70][0] = "Quince miembros.";
 choices[70][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[70][2] = "Los miembros que determine el Consejo.";
 choices[70][3] = "Un Presidente y quince miembros.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[71]= new Array();
 choices[71][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[71][1] = "La delimitaci&oacute;n de su territorio.";
 choices[71][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[71][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[71] = choices[71][2];
 units[71] = "1";
 comments[71] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[72]= new Array();
 choices[72][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[72][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[72][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[72][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[72] = choices[72][3];
 units[72] = "22";
 comments[72] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[73]= "74)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[73]= new Array();
 choices[73][0] = "apud acta";
 choices[73][1] = "presencialmente";
 choices[73][2] = "electr&oacute;nicamente";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "7";
 comments[73] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[74]= new Array();
 choices[74][0] = "SPARQL";
 choices[74][1] = "UnQL";
 choices[74][2] = "XQUERY";
 choices[74][3] = "RQL";
 answers[74] = choices[74][0];
 units[74] = "74";
 comments[74] = "Id Pregunta: 23. AGE A1 2015";


