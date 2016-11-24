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

//  Id pregunta: 10652 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[0]= new Array();
 choices[0][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[0][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[0][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[0][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[0] = choices[0][2];
 units[0] = "73";
 comments[0] = "Id Pregunta: 10652. ";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[1]= new Array();
 choices[1][0] = "El Parlamento y el Consejo.";
 choices[1][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[1][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[1][3] = "La Comisi&oacute;n y el Consejo.";
 answers[1] = choices[1][2];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[2]= new Array();
 choices[2][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[2][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[2][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[2][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[2] = choices[2][3];
 units[2] = "1";
 comments[2] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10618 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[3]= new Array();
 choices[3][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[3][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[3][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[3][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[3] = choices[3][2];
 units[3] = "85";
 comments[3] = "Id Pregunta: 10618. Junta de Extremadura A1 2015";


//  Id pregunta: 10020 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[4]= new Array();
 choices[4][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[4][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[4][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[4][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[4] = choices[4][2];
 units[4] = "27";
 comments[4] = "Id Pregunta: 10020. AGE A1 2015";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[5]= new Array();
 choices[5][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[5][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[5][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[5][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10133 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[6]= new Array();
 choices[6][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[6][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[6][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[6][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[6] = choices[6][1];
 units[6] = "12";
 comments[6] = "Id Pregunta: 10133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[7]= new Array();
 choices[7][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[7][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[7][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[7][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[7] = choices[7][1];
 units[7] = "43";
 comments[7] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10569 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  El sector Servicios NO incluye:";
 choices[8]= new Array();
 choices[8][0] = "El Comercio";
 choices[8][1] = "Los Transportes";
 choices[8][2] = "La Energ&iacute;a";
 choices[8][3] = "Las Comunicaciones";
 answers[8] = choices[8][2];
 units[8] = "12";
 comments[8] = "Id Pregunta: 10569. Modelo econ&oacute;mico";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[9]= new Array();
 choices[9][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[9][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[9][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[9][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[9] = choices[9][3];
 units[9] = "86";
 comments[9] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10453 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  En las Administraciones P&uacute;blicas...";
 choices[10]= new Array();
 choices[10][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[10][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[10][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[10][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10218 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[11][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[11][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[11][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10218. CONSTITUCION1978";


//  Id pregunta: 10425 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[12]= new Array();
 choices[12][0] = "Presencia equilibrada.";
 choices[12][1] = "Presencia paritaria.";
 choices[12][2] = "Presencia consensuada.";
 choices[12][3] = "presencia horizontal.";
 answers[12] = choices[12][0];
 units[12] = "14";
 comments[12] = "Id Pregunta: 10425. POLITICAS DE IGUALDAD";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[13]= new Array();
 choices[13][0] = "El Presidente del Senado";
 choices[13][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[13][2] = "El Presidente del Gobierno";
 choices[13][3] = "El Presidente de las Cortes Generales";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10265. CONSTITUCION1978";


//  Id pregunta: 10338 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[14]= new Array();
 choices[14][0] = "CO.PER.";
 choices[14][1] = "COMPER.";
 choices[14][2] = "CO.RE.PER.";
 choices[14][3] = "CO.PE.RRE.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10338. UNION EUROPEA";


//  Id pregunta: 10070 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[15]= new Array();
 choices[15][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[15][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[15][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[15][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[15] = choices[15][0];
 units[15] = "75";
 comments[15] = "Id Pregunta: 10070. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10378 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[16]= new Array();
 choices[16][0] = "Quince miembros.";
 choices[16][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[16][2] = "Los miembros que determine el Consejo.";
 choices[16][3] = "Un Presidente y quince miembros.";
 answers[16] = choices[16][1];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10095 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[17]= new Array();
 choices[17][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[17][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[17][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[17][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[17] = choices[17][3];
 units[17] = "89";
 comments[17] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10488 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[18]= new Array();
 choices[18][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[18][1] = "El Gobierno.";
 choices[18][2] = "El Presidente del Gobierno.";
 choices[18][3] = "El Consejo de Ministros.";
 answers[18] = choices[18][1];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10488. PRESUPUESTOS GENERALES";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[19]= new Array();
 choices[19][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[19][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[19][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[19][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[19] = choices[19][1];
 units[19] = "56";
 comments[19] = "Id Pregunta: 10608. Junta de Extremadura A1 2015";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[20]= new Array();
 choices[20][0] = "Estrasburgo.";
 choices[20][1] = "Bruselas.";
 choices[20][2] = "Luxemburgo.";
 choices[20][3] = "Holanda.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10056 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[21][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[21][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[21][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[21] = choices[21][2];
 units[21] = "83";
 comments[21] = "Id Pregunta: 10056. AGE A1 2015";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[22]= new Array();
 choices[22][0] = "Las Cortes Generales.";
 choices[22][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[22][2] = "El Gobierno.";
 choices[22][3] = "El Congreso de los Diputados.";
 answers[22] = choices[22][0];
 units[22] = "10";
 comments[22] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10329 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[23]= new Array();
 choices[23][0] = "Acuerdos cualificados.";
 choices[23][1] = "Acuerdos ponderados.";
 choices[23][2] = "Valoraci&oacute;n de los votos.";
 choices[23][3] = "Ponderaci&oacute;n de los votos.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  El cr&eacute;dito presupuestario es...";
 choices[24]= new Array();
 choices[24][0] = "El sujeto que realiza el gasto";
 choices[24][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[24][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[24][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[25]= new Array();
 choices[25][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[25][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[25][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[25][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[25] = choices[25][2];
 units[25] = "22";
 comments[25] = "Id Pregunta: 10129. ";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[26]= new Array();
 choices[26][0] = "GROUP BY.";
 choices[26][1] = "COUNT.";
 choices[26][2] = "WHERE.";
 choices[26][3] = "DISTINCT.";
 answers[26] = choices[26][0];
 units[26] = "60";
 comments[26] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10082 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[27]= new Array();
 choices[27][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[27][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[27][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[27][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[27] = choices[27][3];
 units[27] = "41";
 comments[27] = "Id Pregunta: 10082. AGE A1 2015";


//  Id pregunta: 10278 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[28]= new Array();
 choices[28][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[28][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[28][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[28][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[28] = choices[28][1];
 units[28] = "22";
 comments[28] = "Id Pregunta: 10278. LEY DE TRANSPARENCIA";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[29]= new Array();
 choices[29][0] = "Windows Phone";
 choices[29][1] = "Blackberry";
 choices[29][2] = "iOS";
 choices[29][3] = "Android";
 answers[29] = choices[29][3];
 units[29] = "59";
 comments[29] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[30]= new Array();
 choices[30][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[30][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[30][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[30][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[30] = choices[30][3];
 units[30] = "43";
 comments[30] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[31]= new Array();
 choices[31][0] = "Relaciones base y vistas.";
 choices[31][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[31][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[31][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[31] = choices[31][3];
 units[31] = "60";
 comments[31] = "Id Pregunta: 10635. Junta de Extremadura A1 2015";


//  Id pregunta: 10447 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[32]= new Array();
 choices[32][0] = "Ejecutivo";
 choices[32][1] = "Limitativo";
 choices[32][2] = "Estimativo";
 choices[32][3] = "Progresivo";
 answers[32] = choices[32][1];
 units[32] = "10";
 comments[32] = "Id Pregunta: 10447. PRESUPUESTOS GENERALES";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[33]= new Array();
 choices[33][0] = "La CETIC";
 choices[33][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[33][2] = "La DTIC";
 choices[33][3] = "El MHFP";
 answers[33] = choices[33][0];
 units[33] = "19";
 comments[33] = "Id Pregunta: 10591. Estrategia TIC";


//  Id pregunta: 10003 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  En el lenguaje de modelado UML :";
 choices[34]= new Array();
 choices[34][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[34][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[34][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[34][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[34] = choices[34][2];
 units[34] = "89";
 comments[34] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10436 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[35]= new Array();
 choices[35][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[35][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[35][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[35][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[35] = choices[35][2];
 units[35] = "43";
 comments[35] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10116 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[36]= new Array();
 choices[36][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[36][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[36][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[36][3] = "El pago de subsidios a parados";
 answers[36] = choices[36][3];
 units[36] = "15";
 comments[36] = "Id Pregunta: 10116. ";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[37]= new Array();
 choices[37][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[37][1] = "Todas las respuestas son correctas.";
 choices[37][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[37][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[37] = choices[37][1];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10474. PRESUPUESTOS GENERALES";


//  Id pregunta: 10420 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[38]= new Array();
 choices[38][0] = "150 trabajadores/as.";
 choices[38][1] = "200 trabajadores/as.";
 choices[38][2] = "250 trabajadores/as.";
 choices[38][3] = "300 trabajadores/as.";
 answers[38] = choices[38][2];
 units[38] = "14";
 comments[38] = "Id Pregunta: 10420. POLITICAS DE IGUALDAD";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[39]= new Array();
 choices[39][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[39][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[39][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[39][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[39] = choices[39][3];
 units[39] = "22";
 comments[39] = "Id Pregunta: 10126. ";


//  Id pregunta: 10235 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[40]= new Array();
 choices[40][0] = "El Jefe del Estado.";
 choices[40][1] = "El Tribunal Constitucional.";
 choices[40][2] = "El Congreso de los Diputados.";
 choices[40][3] = "Las Cortes Generales.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10235. CONSTITUCION1978";


//  Id pregunta: 10299 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[41]= new Array();
 choices[41][0] = "Quince miembros.";
 choices[41][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[41][2] = "Los miembros que determine el Consejo.";
 choices[41][3] = "Un Presidente y quince miembros.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10562 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[42]= new Array();
 choices[42][0] = "Entre 1973 y 1978";
 choices[42][1] = "Entre 1992 y 1996";
 choices[42][2] = "Entre 1978 y 1985";
 choices[42][3] = "Entre 2008 y 2013";
 answers[42] = choices[42][2];
 units[42] = "12";
 comments[42] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


//  Id pregunta: 10414 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Un informe de impacto de g&eacute;nero.";
 choices[43][1] = "Un programa de igualdad de oportunidades.";
 choices[43][2] = "Un plan de Igualdad de Oportunidades.";
 choices[43][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[43] = choices[43][0];
 units[43] = "14";
 comments[43] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[44]= new Array();
 choices[44][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[44][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[44][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[44][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[45]= new Array();
 choices[45][0] = "20 parlamentarios.";
 choices[45][1] = "29 parlamentarios.";
 choices[45][2] = "18 parlamentarios.";
 choices[45][3] = "23 parlamentarios.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10366. UNION EUROPEA";


//  Id pregunta: 10528 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[46]= new Array();
 choices[46][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[46][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[46][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[46][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 10528. LEY 39/2015";


//  Id pregunta: 10011 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[47]= new Array();
 choices[47][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[47][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[47][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[47][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[47] = choices[47][1];
 units[47] = "64";
 comments[47] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[48]= new Array();
 choices[48][0] = "los registros mercantiles";
 choices[48][1] = "los registros de la propiedad";
 choices[48][2] = "los protocolos notariales";
 choices[48][3] = "todas son correctas";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10379 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[49]= new Array();
 choices[49][0] = "Anual.";
 choices[49][1] = "Semestral.";
 choices[49][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[49][3] = "Bienal.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10108 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Son proyectos de Apache relacionados con Big Data:";
 choices[50]= new Array();
 choices[50][0] = "Hadoop";
 choices[50][1] = "Spark";
 choices[50][2] = "A) y B)";
 choices[50][3] = "Niguno de los anteriores";
 answers[50] = choices[50][2];
 units[50] = "73";
 comments[50] = "Id Pregunta: 10108. ";


//  Id pregunta: 10061 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Lollipop";
 choices[51][1] = "Jelly Bean";
 choices[51][2] = "Marshmallow";
 choices[51][3] = "KitKat";
 answers[51] = choices[51][2];
 units[51] = "59";
 comments[51] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10370 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[52]= new Array();
 choices[52][0] = "Un recurso de incumplimiento.";
 choices[52][1] = "Recurso de carencia.";
 choices[52][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[52][3] = "Ninguna es correcta.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[53]= new Array();
 choices[53][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[53][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[53][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[53][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[53] = choices[53][2];
 units[53] = "101";
 comments[53] = "Id Pregunta: 10060. AGE A1 2015";


//  Id pregunta: 10485 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[54]= new Array();
 choices[54][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[54][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[54][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[54][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10485. PRESUPUESTOS GENERALES";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[55]= new Array();
 choices[55][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[55][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[55][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[55][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10633 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[56]= new Array();
 choices[56][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[56][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[56][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[56][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[56] = choices[56][3];
 units[56] = "56";
 comments[56] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[57]= new Array();
 choices[57][0] = "En sentencias switch para alterar el control de flujo.";
 choices[57][1] = "Para manejar excepciones.";
 choices[57][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[57][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[57] = choices[57][1];
 units[57] = "64";
 comments[57] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[58]= new Array();
 choices[58][0] = "PostgreSQL";
 choices[58][1] = "Datawarehouse";
 choices[58][2] = "Snowflake";
 choices[58][3] = "CouchDB";
 answers[58] = choices[58][0];
 units[58] = "61";
 comments[58] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[59]= new Array();
 choices[59][0] = "Presentar la moci&oacute;n de censura.";
 choices[59][1] = "Presidir las sesiones del Parlamento.";
 choices[59][2] = "Organizar la Secretar&iacute;a General.";
 choices[59][3] = "Preparar las actividades de las Comisiones.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[60]= new Array();
 choices[60][0] = "Principio de solo una vez";
 choices[60][1] = "Apertura y transparencia";
 choices[60][2] = "Confianza y seguridad";
 choices[60][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[60] = choices[60][3];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[61]= new Array();
 choices[61][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[61][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[61][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[61][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[61] = choices[61][0];
 units[61] = "46";
 comments[61] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10323 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[62]= new Array();
 choices[62][0] = "Tres a&ntilde;os.";
 choices[62][1] = "Cuatro a&ntilde;os.";
 choices[62][2] = "Cinco a&ntilde;os.";
 choices[62][3] = "Seis a&ntilde;os.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10323. UNION EUROPEA";


//  Id pregunta: 10167 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[63]= new Array();
 choices[63][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[63][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[63][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[63][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[63] = choices[63][1];
 units[63] = "19";
 comments[63] = "Id Pregunta: 10167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 10428 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[64]= new Array();
 choices[64][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[64][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[64][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[64][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[64] = choices[64][2];
 units[64] = "14";
 comments[64] = "Id Pregunta: 10428. POLITICAS DE IGUALDAD";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[65]= new Array();
 choices[65][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[65][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[65][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[65][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[65] = choices[65][3];
 units[65] = "12";
 comments[65] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10406 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[66]= new Array();
 choices[66][0] = "Art&iacute;culo 9.1 CE.";
 choices[66][1] = "Art&iacute;culo 53 CE.";
 choices[66][2] = "Art&iacute;culo 14 CE.";
 choices[66][3] = "Art&iacute;culo 16 CE.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[67]= new Array();
 choices[67][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[67][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[67][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[67][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[67] = choices[67][1];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10281 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la respuesta falsa:";
 choices[68]= new Array();
 choices[68][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[68][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[68][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[68][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[68] = choices[68][3];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10281. UNION EUROPEA";


//  Id pregunta: 10385 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[69]= new Array();
 choices[69][0] = "Anualmente por el Consejo de Ministros";
 choices[69][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[69][2] = "Al final de cada legislatura por el Gobierno";
 choices[69][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 10385. POLITICAS DE IGUALDAD";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[70]= new Array();
 choices[70][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[70][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[70][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[70][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[70] = choices[70][2];
 units[70] = "26";
 comments[70] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[71][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[71][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[71][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[71] = choices[71][2];
 units[71] = "22";
 comments[71] = "Id Pregunta: 10275. LEY DE TRANSPARENCIA";


//  Id pregunta: 10155 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[72]= new Array();
 choices[72][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[72][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[72][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[72][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[72] = choices[72][2];
 units[72] = "7";
 comments[72] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10630 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[73]= new Array();
 choices[73][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[73][1] = "De nivel alto.";
 choices[73][2] = "De nivel medio y nivel alto.";
 choices[73][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[73] = choices[73][3];
 units[73] = "35";
 comments[73] = "Id Pregunta: 10630. Junta de Extremadura A1 2015";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[74]= new Array();
 choices[74][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[74][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[74][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[74][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[74] = choices[74][3];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10236. CONSTITUCION1978";


//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[75]= new Array();
 choices[75][0] = "Siempre en formato electr&oacute;nico.";
 choices[75][1] = "Siempre en formato papel.";
 choices[75][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[75][3] = "La ley no regula el formato del expediente.";
 answers[75] = choices[75][0];
 units[75] = "7";
 comments[75] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[76]= new Array();
 choices[76][0] = "ISO/IEC 31000";
 choices[76][1] = "ISO/IEC 14000";
 choices[76][2] = "ISO/IEC 38500";
 choices[76][3] = "ISO/IEC 18000";
 answers[76] = choices[76][2];
 units[76] = "26";
 comments[76] = "Id Pregunta: 10543. Gobernanza TIC";


//  Id pregunta: 10048 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[77]= new Array();
 choices[77][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[77][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[77][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[77][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[77] = choices[77][3];
 units[77] = "77";
 comments[77] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10567 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[78]= new Array();
 choices[78][0] = "Primario, que incluye la agricultura y la pesca";
 choices[78][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[78][2] = "Minero, junto con las exportaciones de comercio";
 choices[78][3] = "Servicios";
 answers[78] = choices[78][3];
 units[78] = "12";
 comments[78] = "Id Pregunta: 10567. Modelo econ&oacute;mico";


//  Id pregunta: 10067 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[79]= new Array();
 choices[79][0] = "IANA";
 choices[79][1] = "ISOC";
 choices[79][2] = "IETF";
 choices[79][3] = "IAB";
 answers[79] = choices[79][0];
 units[79] = "103";
 comments[79] = "Id Pregunta: 10067. AGE A1 2015";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[80]= new Array();
 choices[80][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[80][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[80][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[80][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[80] = choices[80][1];
 units[80] = "19";
 comments[80] = "Id Pregunta: 10560. Agenda Digital";


//  Id pregunta: 10521 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  El sector p&uacute;blico institucional se integra por:";
 choices[81]= new Array();
 choices[81][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[81][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[81][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[81][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[81] = choices[81][1];
 units[81] = "7";
 comments[81] = "Id Pregunta: 10521. LEY 39/2015";


//  Id pregunta: 10332 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[82]= new Array();
 choices[82][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[82][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[82][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[82][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[82] = choices[82][3];
 units[82] = "5";
 comments[82] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10421 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[83]= new Array();
 choices[83][0] = "El acoso sexual.";
 choices[83][1] = "El acoso por raz&oacute;n del sexo.";
 choices[83][2] = "Ambas son correctas.";
 choices[83][3] = "A y B son incorrectas.";
 answers[83] = choices[83][2];
 units[83] = "14";
 comments[83] = "Id Pregunta: 10421. POLITICAS DE IGUALDAD";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[84]= new Array();
 choices[84][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, , la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[84][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[84][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[84][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[84] = choices[84][2];
 units[84] = "7";
 comments[84] = "Id Pregunta: 10665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[85]= new Array();
 choices[85][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[85][1] = "En el extranjero.";
 choices[85][2] = "Ninguna es correcta.";
 choices[85][3] = "Ambas son correctas.";
 answers[85] = choices[85][0];
 units[85] = "14";
 comments[85] = "Id Pregunta: 10427. POLITICAS DE IGUALDAD";


//  Id pregunta: 10656 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[86]= new Array();
 choices[86][0] = "Cassandra";
 choices[86][1] = "Riak";
 choices[86][2] = "Avro";
 choices[86][3] = "Zookeeper";
 answers[86] = choices[86][3];
 units[86] = "73";
 comments[86] = "Id Pregunta: 10656. ";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[87]= new Array();
 choices[87][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[87][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[87][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[87][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[87] = choices[87][3];
 units[87] = "26";
 comments[87] = "Id Pregunta: 10550. Gobernanza TIC";


//  Id pregunta: 10437 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[88]= new Array();
 choices[88][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[88][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[88][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[88][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[88] = choices[88][0];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10437. SERVICIOS COMUNES";


//  Id pregunta: 10044 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[89]= new Array();
 choices[89][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[89][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[89][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[89][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[89] = choices[89][1];
 units[89] = "60";
 comments[89] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[90]= new Array();
 choices[90][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[90][1] = "Publicidad de las normas.";
 choices[90][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[90][3] = "Coordinaci&oacute;n normativa.";
 answers[90] = choices[90][2];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10244. CONSTITUCION1978";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[91]= new Array();
 choices[91][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[91][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[91][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[91][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[91] = choices[91][1];
 units[91] = "63";
 comments[91] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[92]= new Array();
 choices[92][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[92][1] = "Entrada en la Uni&oacute;n Europea";
 choices[92][2] = "Pactos de la Moncloa";
 choices[92][3] = "Ingreso en la ONU";
 answers[92] = choices[92][3];
 units[92] = "12";
 comments[92] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10646 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[93]= new Array();
 choices[93][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[93][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[93][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[93][3] = "Todas las respuestas son correctas.";
 answers[93] = choices[93][0];
 units[93] = "101";
 comments[93] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10123 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[94]= new Array();
 choices[94][0] = "Un representante de la Administraci&oacute;n local.";
 choices[94][1] = "Un representante del Tribunal de Cuentas.";
 choices[94][2] = "Un representante del Defensor del Pueblo.";
 choices[94][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[94] = choices[94][0];
 units[94] = "22";
 comments[94] = "Id Pregunta: 10123. ";


//  Id pregunta: 10234 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[95]= new Array();
 choices[95][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[95][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[95][2] = "Al Congreso de los Diputados.";
 choices[95][3] = "Al Gobierno.";
 answers[95] = choices[95][0];
 units[95] = "1";
 comments[95] = "Id Pregunta: 10234. CONSTITUCION1978";


//  Id pregunta: 10336 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[96]= new Array();
 choices[96][0] = "Diciembre de 1987.";
 choices[96][1] = "Septiembre de 1989.";
 choices[96][2] = "Octubre de 1990.";
 choices[96][3] = "Noviembre de 1980.";
 answers[96] = choices[96][1];
 units[96] = "5";
 comments[96] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10255 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  La soberan&iacute;a nacional reside en:";
 choices[97]= new Array();
 choices[97][0] = "el Parlamento nacional.";
 choices[97][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[97][2] = "el pueblo espa&ntilde;ol.";
 choices[97][3] = "el Congreso y el Senado.";
 answers[97] = choices[97][3];
 units[97] = "1";
 comments[97] = "Id Pregunta: 10255. CONSTITUCION1978";


//  Id pregunta: 10306 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Componen la Comisi&oacute;n Europea:";
 choices[98]= new Array();
 choices[98][0] = "Un Comisario por cada Estado miembro.";
 choices[98][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[98][2] = "Dos Comisarios por cada Estado miembro.";
 choices[98][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[98] = choices[98][0];
 units[98] = "5";
 comments[98] = "Id Pregunta: 10306. UNION EUROPEA";


//  Id pregunta: 10119 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[99]= new Array();
 choices[99][0] = "Anual";
 choices[99][1] = "Mensual";
 choices[99][2] = "Semestral";
 choices[99][3] = "Trimestral";
 answers[99] = choices[99][3];
 units[99] = "15";
 comments[99] = "Id Pregunta: 10119. ";


