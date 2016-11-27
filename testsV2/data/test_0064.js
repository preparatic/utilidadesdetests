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

//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[0]= new Array();
 choices[0][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[0][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[0][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[0][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[0] = choices[0][0];
 units[0] = "7";
 comments[0] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[1]= new Array();
 choices[1][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[1][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[1][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[1][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[1] = choices[1][0];
 units[1] = "89";
 comments[1] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[2]= "3)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[2]= new Array();
 choices[2][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[2][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[2][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[2][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 128. ";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[3]= "4)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[3]= new Array();
 choices[3][0] = "Director General";
 choices[3][1] = "Secretario general";
 choices[3][2] = "Subdirector general";
 choices[3][3] = "Subsecretario";
 answers[3] = choices[3][0];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[4]= "5)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[4]= new Array();
 choices[4][0] = "En qu&eacute; nos gastamos el dinero";
 choices[4][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[4][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[4][3] = "Qui&eacute;n se gasta el dinero.";
 answers[4] = choices[4][0];
 units[4] = "10";
 comments[4] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[5]= new Array();
 choices[5][0] = "El Consejo Nacional de la Mujer";
 choices[5][1] = "El Consejo de la Mujer";
 choices[5][2] = "El Instituto de la Mujer";
 choices[5][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[5] = choices[5][3];
 units[5] = "14";
 comments[5] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[6]= "7)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[6]= new Array();
 choices[6][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[6][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[6][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[6][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[7]= new Array();
 choices[7][0] = "JAXP";
 choices[7][1] = "JNI";
 choices[7][2] = "JNDI";
 choices[7][3] = "JDBC";
 answers[7] = choices[7][1];
 units[7] = "64";
 comments[7] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[8]= "9)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[8]= new Array();
 choices[8][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[8][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[8][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[8][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[8] = choices[8][3];
 units[8] = "109";
 comments[8] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[9]= new Array();
 choices[9][0] = "B&aacute;sico, medio y alto";
 choices[9][1] = "D&eacute;bil y fuerte";
 choices[9][2] = "Bajo, medio y alto";
 choices[9][3] = "Bajo, sustancial y alto";
 answers[9] = choices[9][3];
 units[9] = "77";
 comments[9] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[10]= new Array();
 choices[10][0] = "El Segundo.";
 choices[10][1] = "El Primero.";
 choices[10][2] = "El Preliminar.";
 choices[10][3] = "El Tercero.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[11]= new Array();
 choices[11][0] = "Los principios rectores";
 choices[11][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[11][2] = "Los hitos para su desarrollo gradual";
 choices[11][3] = "Todos los anteriores";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[12]= "13)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[12]= new Array();
 choices[12][0] = "Proveer de manera compartida servicios comunes";
 choices[12][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[12][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[12][3] = "Transparencia";
 answers[12] = choices[12][1];
 units[12] = "28";
 comments[12] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[13]= new Array();
 choices[13][0] = "Anualmente por el Consejo de Ministros";
 choices[13][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[13][2] = "Al final de cada legislatura por el Gobierno";
 choices[13][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[13] = choices[13][0];
 units[13] = "14";
 comments[13] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[14]= new Array();
 choices[14][0] = "Avro";
 choices[14][1] = "Sqoop";
 choices[14][2] = "UIMA";
 choices[14][3] = "Jaql";
 answers[14] = choices[14][1];
 units[14] = "73";
 comments[14] = "Id Pregunta: 660. ";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[15]= new Array();
 choices[15][0] = "11";
 choices[15][1] = "12";
 choices[15][2] = "14";
 choices[15][3] = "8";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[16]= "17)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[16]= new Array();
 choices[16][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[16][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[16][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[16][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[16] = choices[16][1];
 units[16] = "14";
 comments[16] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[17]= "18)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[17]= new Array();
 choices[17][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[17][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[17][2] = "a y b son correctas";
 choices[17][3] = "a y b son incorrectas";
 answers[17] = choices[17][0];
 units[17] = "7";
 comments[17] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[18]= "19)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[18]= new Array();
 choices[18][0] = "De ocho a&ntilde;os.";
 choices[18][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[18][2] = "Ambas son correctas.";
 choices[18][3] = "No existe un l&iacute;mite.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[19]= new Array();
 choices[19][0] = "La CETIC";
 choices[19][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[19][2] = "La DTIC";
 choices[19][3] = "El MHFP";
 answers[19] = choices[19][0];
 units[19] = "19";
 comments[19] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[20]= "21)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[20]= new Array();
 choices[20][0] = "192.228.0.0";
 choices[20][1] = "192.228.8.0";
 choices[20][2] = "192.228.16.0";
 choices[20][3] = "192.228.17.0";
 answers[20] = choices[20][2];
 units[20] = "109";
 comments[20] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[21]= "22)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[21]= new Array();
 choices[21][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[21][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[21][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[21][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[21] = choices[21][2];
 units[21] = "108";
 comments[21] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[22]= new Array();
 choices[22][0] = "En t&iacute;tulos-valores.";
 choices[22][1] = "Las respuestas a) y b) son correctas.";
 choices[22][2] = "Las respuestas a) y b) no son correctas.";
 choices[22][3] = "En cuenta.";
 answers[22] = choices[22][1];
 units[22] = "10";
 comments[22] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[23]= "24)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[23]= new Array();
 choices[23][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[23][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[23][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[23][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[23] = choices[23][3];
 units[23] = "34, 84";
 comments[23] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[24]= new Array();
 choices[24][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[24][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[24][2] = "Fomentar el despliegue de redes y servicios";
 choices[24][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[25]= "26)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[25]= new Array();
 choices[25][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[25][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[25][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[25][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[26]= "27)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[26]= new Array();
 choices[26][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[26][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[26][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[26][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[26] = choices[26][3];
 units[26] = "101";
 comments[26] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[27]= new Array();
 choices[27][0] = "El rey, a propuesta del Gobierno.";
 choices[27][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[27][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[27][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[28]= new Array();
 choices[28][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[28][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[28][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[28][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[28] = choices[28][3];
 units[28] = "22";
 comments[28] = "Id Pregunta: 120. ";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[29]= "30)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[29]= new Array();
 choices[29][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[29][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[29][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[29][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[29] = choices[29][1];
 units[29] = "7";
 comments[29] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[30]= "31)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[30]= new Array();
 choices[30][0] = "150 trabajadores/as.";
 choices[30][1] = "200 trabajadores/as.";
 choices[30][2] = "250 trabajadores/as.";
 choices[30][3] = "300 trabajadores/as.";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "Diagrama de clases";
 choices[31][1] = "Diagrama de componentes";
 choices[31][2] = "Diagrama de estructura";
 choices[31][3] = "Diagrama de paquetes";
 answers[31] = choices[31][0];
 units[31] = "91";
 comments[31] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[32]= new Array();
 choices[32][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[32][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[32][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[32][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[32] = choices[32][1];
 units[32] = "1";
 comments[32] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[33]= new Array();
 choices[33][0] = "Principio de solo una vez";
 choices[33][1] = "Apertura y transparencia";
 choices[33][2] = "Confianza y seguridad";
 choices[33][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[33] = choices[33][3];
 units[33] = "19";
 comments[33] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[34]= "35)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[34]= new Array();
 choices[34][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[34][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[34][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[34][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[34] = choices[34][3];
 units[34] = "43";
 comments[34] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[35]= new Array();
 choices[35][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[35][1] = "Solamente el Congreso.";
 choices[35][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[35][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[36]= new Array();
 choices[36][0] = "Un programa presupuestario.";
 choices[36][1] = "Un concepto presupuestario.";
 choices[36][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[36][3] = "Un cr&eacute;dito presupuestario.";
 answers[36] = choices[36][0];
 units[36] = "10";
 comments[36] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "De la C&aacute;mara respectiva.";
 choices[37][1] = "Del Rey.";
 choices[37][2] = "Del Tribunal Constitucional.";
 choices[37][3] = "Del Tribunal Supremo.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[38]= new Array();
 choices[38][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[38][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[38][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[38][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[38] = choices[38][2];
 units[38] = "15";
 comments[38] = "Id Pregunta: 118. ";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[39]= new Array();
 choices[39][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[39][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[39][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[39][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[39] = choices[39][0];
 units[39] = "76";
 comments[39] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[40]= new Array();
 choices[40][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[40][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[40][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[40][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[40] = choices[40][2];
 units[40] = "71";
 comments[40] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[41]= "42)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[41]= new Array();
 choices[41][0] = "Monol&iacute;tico.";
 choices[41][1] = "Estratificado.";
 choices[41][2] = "Cliente/servidor.";
 choices[41][3] = "Orientado a objetos.";
 answers[41] = choices[41][3];
 units[41] = "56";
 comments[41] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[42]= new Array();
 choices[42][0] = "Estrasburgo.";
 choices[42][1] = "Bruselas.";
 choices[42][2] = "Luxemburgo.";
 choices[42][3] = "Par&iacute;s.";
 answers[42] = choices[42][1];
 units[42] = "5";
 comments[42] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[43]= "44)  Las Universidades p&uacute;blicas:";
 choices[43]= new Array();
 choices[43][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[43][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[43][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[43][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[43] = choices[43][1];
 units[43] = "7";
 comments[43] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[44]= new Array();
 choices[44][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[44][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[44][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[44][3] = "Sancionar y publicar las leyes.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[45]= "46)  El pacto fiscal europeo de 2012 incluye:";
 choices[45]= new Array();
 choices[45][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[45][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[45][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[45][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[46]= new Array();
 choices[46][0] = "La Comisi&oacute;n Permanente.";
 choices[46][1] = "El Presidente.";
 choices[46][2] = "El Pleno.";
 choices[46][3] = "El Vicepresidente.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[47]= new Array();
 choices[47][0] = "verbalmente";
 choices[47][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[47][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[47][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[47] = choices[47][2];
 units[47] = "7";
 comments[47] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[48]= "49)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[48]= new Array();
 choices[48][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[48][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[48][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[48][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[48] = choices[48][2];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[49]= "50)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[49]= new Array();
 choices[49][0] = "La Comisi&oacute;n.";
 choices[49][1] = "El Consejo de Europa.";
 choices[49][2] = "El Consejo Europeo.";
 choices[49][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[50]= "51)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[50]= new Array();
 choices[50][0] = "Principio de transparencia.";
 choices[50][1] = "Principio de cooperaci&oacute;n.";
 choices[50][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[50][3] = "Principio de lealtad institucional.";
 answers[50] = choices[50][1];
 units[50] = "10";
 comments[50] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[51]= "52)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[51][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[51][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[51][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[52]= "53)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[52]= new Array();
 choices[52][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[52][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[52][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][0];
 units[52] = "28";
 comments[52] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[53]= "54)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[53]= new Array();
 choices[53][0] = "A la persona demandante.";
 choices[53][1] = "A la persona demandada.";
 choices[53][2] = "Al &oacute;rgano judicial.";
 choices[53][3] = "Al &oacute;rgano administrativo.";
 answers[53] = choices[53][1];
 units[53] = "14";
 comments[53] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[54]= new Array();
 choices[54][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[54][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[54][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[54][3] = "A las Diputaciones y a las Comarcas.";
 answers[54] = choices[54][3];
 units[54] = "1";
 comments[54] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[55]= "56)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[55]= new Array();
 choices[55][0] = "18 miembros.";
 choices[55][1] = "Ninguna es correcta.";
 choices[55][2] = "22 miembros.";
 choices[55][3] = "21 miembros.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[56]= "57)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[56]= new Array();
 choices[56][0] = "Al Gobierno.";
 choices[56][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[56][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[56][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[57]= new Array();
 choices[57][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[57][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[57][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[57][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[57] = choices[57][0];
 units[57] = "86";
 comments[57] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[58]= new Array();
 choices[58][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[58][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[58][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[58][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[58] = choices[58][0];
 units[58] = "10";
 comments[58] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[59]= "60)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[59]= new Array();
 choices[59][0] = "Tres a&ntilde;os.";
 choices[59][1] = "Cuatro a&ntilde;os.";
 choices[59][2] = "Cinco a&ntilde;os.";
 choices[59][3] = "Seis a&ntilde;os.";
 answers[59] = choices[59][3];
 units[59] = "5";
 comments[59] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[60]= "61)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[60]= new Array();
 choices[60][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[60][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[60][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[60][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[60] = choices[60][1];
 units[60] = "106";
 comments[60] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[61]= new Array();
 choices[61][0] = "Cincuenta y cuatro.";
 choices[61][1] = "Cincuenta.";
 choices[61][2] = "Cincuenta y cinco.";
 choices[61][3] = "Cincuenta y dos.";
 answers[61] = choices[61][1];
 units[61] = "5";
 comments[61] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a los servicios territoriales es correcto:";
 choices[62]= new Array();
 choices[62][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[62][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[62][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[62][3] = "ninguna es correcta";
 answers[62] = choices[62][0];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[63]= "64)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[63]= new Array();
 choices[63][0] = "Alrededor de un 26% del PIB";
 choices[63][1] = "Alrededor de un 11% del PIB";
 choices[63][2] = "Alrededor de un 34% del PIB";
 choices[63][3] = "Alrededor de un 7% del PIB";
 answers[63] = choices[63][1];
 units[63] = "12";
 comments[63] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[64]= "65)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[64]= new Array();
 choices[64][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[64][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[64][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[64][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[65]= new Array();
 choices[65][0] = "No discriminaci&oacute;n";
 choices[65][1] = "Cooperaci&oacute;n";
 choices[65][2] = "Colaboraci&oacute;n";
 choices[65][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[65] = choices[65][2];
 units[65] = "18, 20";
 comments[65] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[66]= "67)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[66]= new Array();
 choices[66][0] = "solo mediante ley";
 choices[66][1] = "reglamentariamente";
 choices[66][2] = "mediante ley o reglamentariamente";
 choices[66][3] = "ninguna es correcta";
 answers[66] = choices[66][1];
 units[66] = "7";
 comments[66] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[67]= "68)  Indica la respuesta correcta";
 choices[67]= new Array();
 choices[67][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[67][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[67][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[67][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[67] = choices[67][0];
 units[67] = "34, 84";
 comments[67] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[68]= "69)  Son bases de datos NoSQL:";
 choices[68]= new Array();
 choices[68][0] = "MongoDB y Maria DB";
 choices[68][1] = "HBase y Dynamo";
 choices[68][2] = "MariaDB, Cassandra y BigTable";
 choices[68][3] = "La A) y la C)";
 answers[68] = choices[68][1];
 units[68] = "73";
 comments[68] = "Id Pregunta: 104. ";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[69]= new Array();
 choices[69][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[69][1] = "La delimitaci&oacute;n de su territorio.";
 choices[69][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[69][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[70]= new Array();
 choices[70][0] = "Nueve.";
 choices[70][1] = "Diez.";
 choices[70][2] = "Siete.";
 choices[70][3] = "Ocho.";
 answers[70] = choices[70][3];
 units[70] = "5";
 comments[70] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[71]= "72)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[71]= new Array();
 choices[71][0] = "Presencia equilibrada.";
 choices[71][1] = "Presencia paritaria.";
 choices[71][2] = "Presencia consensuada.";
 choices[71][3] = "presencia horizontal.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[72]= new Array();
 choices[72][0] = "Ley Org&aacute;nica.";
 choices[72][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[72][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[72][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[73]= "74)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[73]= new Array();
 choices[73][0] = "circulares";
 choices[73][1] = "reglamentos internos";
 choices[73][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[73][3] = "disposiciones de car&aacute;cter general";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[74]= new Array();
 choices[74][0] = "El 5 de Octubre de 2015";
 choices[74][1] = "El 15 de Octubre de 2015";
 choices[74][2] = "El 15 de Septiembre de 2015";
 choices[74][3] = "El 2 de Octubre de 2015";
 answers[74] = choices[74][2];
 units[74] = "19";
 comments[74] = "Id Pregunta: 582. Estrategia TIC";


